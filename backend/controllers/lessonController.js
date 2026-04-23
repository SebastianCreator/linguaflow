// controllers/lessonController.js
const Lesson = require('../models/Lesson');
const { LessonProgress } = require('../models/index');
const User = require('../models/User');
const achievementService = require('../services/achievementService');
const { CEFR_LEVELS } = require('../config/cefr');

// GET /api/lessons?language=en&level=A1&module=vocabulary
exports.getLessons = async (req, res, next) => {
  try {
    const { language, level, module: mod, page = 1, limit = 20 } = req.query;
    const query = { isPublished: true };
    if (language) query.languageCode = language;
    if (level) query.level = level;
    if (mod) query.module = mod;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const [lessons, total] = await Promise.all([
      Lesson.find(query).sort({ level: 1, order: 1 }).skip(skip).limit(parseInt(limit)).select('-exercises'),
      Lesson.countDocuments(query)
    ]);

    // If user is authenticated, attach progress
    let progressMap = {};
    if (req.user) {
      const progressRecords = await LessonProgress.find({
        userId: req.user.id,
        lessonId: { $in: lessons.map(l => l._id) }
      });
      progressRecords.forEach(p => { progressMap[p.lessonId.toString()] = p; });
    }

    const lessonsWithProgress = lessons.map(l => ({
      ...l.toObject(),
      progress: progressMap[l._id.toString()] || null
    }));

    res.json({ lessons: lessonsWithProgress, total, page: parseInt(page), pages: Math.ceil(total / parseInt(limit)) });
  } catch (err) { next(err); }
};

// GET /api/lessons/:id
exports.getLessonById = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate('prerequisites', 'title level module');
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

    let progress = null;
    if (req.user) {
      progress = await LessonProgress.findOne({ userId: req.user.id, lessonId: lesson._id });
    }

    res.json({ lesson, progress });
  } catch (err) { next(err); }
};

// GET /api/lessons/curriculum/:language/:level
exports.getCurriculum = async (req, res, next) => {
  try {
    const { language, level } = req.params;
    const lessons = await Lesson.find({ languageCode: language, level, isPublished: true })
      .sort({ module: 1, order: 1 })
      .select('-exercises -content');

    // Group by module
    const curriculum = {};
    lessons.forEach(l => {
      if (!curriculum[l.module]) curriculum[l.module] = [];
      curriculum[l.module].push(l);
    });

    res.json({ language, level, curriculum, totalLessons: lessons.length });
  } catch (err) { next(err); }
};

// POST /api/lessons/:id/complete
exports.completeLesson = async (req, res, next) => {
  try {
    const { score, exerciseResults, timeSpentSeconds, syncedFrom } = req.body;
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

    const userId = req.user.id;
    const passed = score >= 60;
    const xpEarned = passed ? Math.round(lesson.xpReward * (score / 100)) : Math.round(lesson.xpReward * 0.2);

    // Upsert progress
    const progress = await LessonProgress.findOneAndUpdate(
      { userId, lessonId: lesson._id },
      {
        $set: {
          status: passed ? 'completed' : 'in-progress',
          score,
          xpEarned,
          timeSpentSeconds: timeSpentSeconds || 0,
          exerciseResults: exerciseResults || [],
          completedAt: passed ? new Date() : undefined,
          syncPending: false
        },
        $inc: { attempts: 1 }
      },
      { upsert: true, new: true }
    );

    // Update user enrollment XP and streak
    const user = await User.findById(userId);
    const enrollment = user.getEnrollment(lesson.languageCode);
    if (enrollment) {
      enrollment.totalXP += xpEarned;
      enrollment.lastActivity = new Date();
      if (passed && !enrollment.completedLessons.includes(lesson._id)) {
        enrollment.completedLessons.push(lesson._id);
      }

      // Check level up
      const levels = Object.values(CEFR_LEVELS).sort((a, b) => a.order - b.order);
      for (const lvl of levels) {
        if (enrollment.totalXP >= lvl.xpRequired && lvl.code !== enrollment.currentLevel) {
          const currentIdx = levels.findIndex(l => l.code === enrollment.currentLevel);
          const nextIdx = levels.findIndex(l => l.code === lvl.code);
          if (nextIdx === currentIdx + 1) {
            enrollment.currentLevel = lvl.code;
          }
        }
      }
      await user.save();
    }

    // Check achievements
    const newAchievements = await achievementService.checkAndAward(userId, { type: 'lesson_complete', lesson, score });

    res.json({ progress, xpEarned, passed, newAchievements, currentLevel: enrollment?.currentLevel });
  } catch (err) { next(err); }
};
