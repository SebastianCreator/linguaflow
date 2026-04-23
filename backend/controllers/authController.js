// controllers/authController.js
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const emailService = require('../services/emailService');
const logger = require('../utils/logger');

// ── Generate JWT ──────────────────────────────
const generateToken = (userId, expiresIn = '7d') => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId, type: 'refresh' }, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
};

// ── Register ──────────────────────────────────
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, nativeLanguage, interfaceLanguage } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const verificationToken = crypto.randomBytes(32).toString('hex');

    const user = await User.create({
      name, email, password,
      nativeLanguage: nativeLanguage || 'es',
      interfaceLanguage: interfaceLanguage || 'es',
      verificationToken
    });

    // Send verification email (non-blocking)
    emailService.sendVerificationEmail(user.email, user.name, verificationToken).catch(err => {
      logger.warn(`Failed to send verification email to ${user.email}: ${err.message}`);
    });

    const token = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.status(201).json({
      message: 'Registration successful. Please verify your email.',
      token,
      refreshToken,
      user: user.toPublicJSON()
    });
  } catch (err) {
    next(err);
  }
};

// ── Login ─────────────────────────────────────
exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Update login stats
    user.lastLogin = new Date();
    user.loginStreak = (user.loginStreak || 0) + 1;
    await user.save();

    const token = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    logger.info(`User logged in: ${user.email}`);

    res.json({
      message: 'Login successful',
      token,
      refreshToken,
      user: user.toPublicJSON()
    });
  } catch (err) {
    next(err);
  }
};

// ── Refresh Token ─────────────────────────────
exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ error: 'Refresh token required' });

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    if (decoded.type !== 'refresh') return res.status(401).json({ error: 'Invalid token type' });

    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ error: 'User not found' });

    const newToken = generateToken(user._id);
    const newRefreshToken = generateRefreshToken(user._id);

    res.json({ token: newToken, refreshToken: newRefreshToken });
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Refresh token expired, please login again' });
    }
    next(err);
  }
};

// ── Get Me ────────────────────────────────────
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate('enrollments');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user: user.toPublicJSON() });
  } catch (err) {
    next(err);
  }
};

// ── Verify Email ──────────────────────────────
exports.verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ verificationToken: token }).select('+verificationToken');
    if (!user) return res.status(400).json({ error: 'Invalid or expired verification token' });

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.json({ message: 'Email verified successfully' });
  } catch (err) {
    next(err);
  }
};

// ── Forgot Password ───────────────────────────
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if email exists
      return res.json({ message: 'If that email is registered, a reset link has been sent.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpires = new Date(Date.now() + 30 * 60 * 1000); // 30 min
    await user.save();

    emailService.sendPasswordResetEmail(user.email, user.name, resetToken).catch(err => {
      logger.warn(`Failed to send reset email: ${err.message}`);
    });

    res.json({ message: 'If that email is registered, a reset link has been sent.' });
  } catch (err) {
    next(err);
  }
};

// ── Reset Password ────────────────────────────
exports.resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() }
    }).select('+resetPasswordToken +resetPasswordExpires');

    if (!user) return res.status(400).json({ error: 'Invalid or expired reset token' });

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (err) {
    next(err);
  }
};
