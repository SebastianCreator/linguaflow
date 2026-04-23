// routes/users.js
const router = require('express').Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');
const { LessonProgress, EvaluationResult } = require('../models/index');

// GET /api/users/profile
router.get('/profile', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ user: user.toPublicJSON() });
  } catch (err) { next(err); }
});

// PUT /api/users/profile
router.put('/profile', protect, async (req, res, next) => {
  try {
    const allowed = ['name', 'avatar', 'nativeLanguage', 'interfaceLanguage', 'dailyGoalMinutes', 'reminderTime'];
    const updates = {};
    allowed.forEach(f => { if (req.body[f] !== undefined) updates[f] = req.body[f]; });
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
    res.json({ user: user.toPublicJSON() });
  } catch (err) { next(err); }
});

// POST /api/users/enroll
router.post('/enroll', protect, async (req, res, next) => {
  try {
    const { languageCode } = req.body;
    const user = await User.findById(req.user.id);
    const existing = user.getEnrollment(languageCode);
    if (existing) return res.status(409).json({ error: 'Already enrolled in this language' });
    user.enrollments.push({ languageCode });
    await user.save();
    res.status(201).json({ enrollment: user.getEnrollment(languageCode) });
  } catch (err) { next(err); }
});

// GET /api/users/dashboard
router.get('/dashboard', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const recentProgress = await LessonProgress.find({ userId: user._id })
      .sort({ updatedAt: -1 }).limit(5)
      .populate('lessonId', 'title level module languageCode');

    const stats = {
      enrollments: user.enrollments,
      achievements: user.achievements,
      recentActivity: recentProgress,
      totalXP: user.enrollments.reduce((s, e) => s + e.totalXP, 0),
      loginStreak: user.loginStreak,
      totalStudyMinutes: user.totalStudyMinutes
    };
    res.json(stats);
  } catch (err) { next(err); }
});

// GET /api/users/offline-bundle/:language
router.get('/offline-bundle/:language', protect, async (req, res, next) => {
  try {
    const { language } = req.params;
    const Lesson = require('../models/Lesson');

    const user = await User.findById(req.user.id);
    const enrollment = user.getEnrollment(language);
    if (!enrollment) return res.status(404).json({ error: 'Not enrolled in this language' });

    // Return lessons for current and previous level for offline use
    const lessons = await Lesson.find({
      languageCode: language,
      level: enrollment.currentLevel,
      offlineAvailable: true,
      isPublished: true
    }).select('-__v');

    const progress = await LessonProgress.find({ userId: user._id, languageCode: language });

    res.json({
      language,
      level: enrollment.currentLevel,
      lessons,
      progress,
      syncToken: Date.now().toString(),
      generatedAt: new Date().toISOString()
    });
  } catch (err) { next(err); }
});

module.exports = router;
