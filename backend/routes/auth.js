// routes/auth.js
const router = require('express').Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', [
  body('name').trim().isLength({ min: 2, max: 50 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must have uppercase, lowercase and number')
], authController.register);

router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
], authController.login);

router.post('/refresh', authController.refreshToken);
router.get('/me', protect, authController.getMe);
router.get('/verify/:token', authController.verifyEmail);
router.post('/forgot-password', [body('email').isEmail()], authController.forgotPassword);
router.post('/reset-password/:token', [body('password').isLength({ min: 8 })], authController.resetPassword);

module.exports = router;
