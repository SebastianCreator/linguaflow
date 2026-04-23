// routes/progress.js
const router = require('express').Router();
const { protect } = require('../middleware/auth');
const { LessonProgress } = require('../models/index');

router.get('/:language', protect, async (req, res, next) => {
  try {
    const progress = await LessonProgress.find({
      userId: req.user.id,
      languageCode: req.params.language
    }).populate('lessonId', 'title level module order');
    res.json({ progress });
  } catch (err) { next(err); }
});

// POST /api/progress/sync — sync offline progress
router.post('/sync', protect, async (req, res, next) => {
  try {
    const { offlineProgress } = req.body; // Array of progress records
    const results = [];
    for (const record of offlineProgress) {
      const existing = await LessonProgress.findOne({ userId: req.user.id, lessonId: record.lessonId });
      if (!existing || new Date(record.localCompletedAt) > existing.updatedAt) {
        const updated = await LessonProgress.findOneAndUpdate(
          { userId: req.user.id, lessonId: record.lessonId },
          { ...record, userId: req.user.id, syncPending: false },
          { upsert: true, new: true }
        );
        results.push(updated);
      }
    }
    res.json({ synced: results.length, results });
  } catch (err) { next(err); }
});

module.exports = router;
