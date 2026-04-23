// routes/evaluations.js
const router = require('express').Router();
const { protect, optionalAuth } = require('../middleware/auth');
const { Evaluation, EvaluationResult } = require('../models/index');
const User = require('../models/User');

// GET /api/evaluations?language=en&level=A1
router.get('/', optionalAuth, async (req, res, next) => {
  try {
    const { language, level, type } = req.query;
    const query = { isPublished: true };
    if (language) query.languageCode = language;
    if (level) query.level = level;
    if (type) query.type = type;
    const evaluations = await Evaluation.find(query).select('-questions');
    res.json({ evaluations });
  } catch (err) { next(err); }
});

// GET /api/evaluations/:id
router.get('/:id', protect, async (req, res, next) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) return res.status(404).json({ error: 'Evaluation not found' });
    res.json({ evaluation });
  } catch (err) { next(err); }
});

// POST /api/evaluations/:id/submit
router.post('/:id/submit', protect, async (req, res, next) => {
  try {
    const { answers, timeSpentSeconds } = req.body;
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) return res.status(404).json({ error: 'Evaluation not found' });

    // Score calculation
    let totalPoints = 0, earnedPoints = 0;
    const gradedAnswers = evaluation.questions.map((q, i) => {
      totalPoints += q.points;
      const userAnswer = answers[i];
      const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(q.correctAnswer);
      if (isCorrect) earnedPoints += q.points;
      return { questionIndex: i, userAnswer, correct: isCorrect, points: isCorrect ? q.points : 0 };
    });

    const scorePercent = Math.round((earnedPoints / totalPoints) * 100);
    const passed = scorePercent >= evaluation.passingScore;
    const xpEarned = passed ? evaluation.xpReward : Math.round(evaluation.xpReward * 0.2);

    const result = await EvaluationResult.create({
      userId: req.user.id,
      evaluationId: evaluation._id,
      languageCode: evaluation.languageCode,
      level: evaluation.level,
      score: scorePercent,
      passed,
      xpEarned,
      answers: gradedAnswers,
      timeSpentSeconds
    });

    // Update user XP
    const user = await User.findById(req.user.id);
    const enrollment = user.getEnrollment(evaluation.languageCode);
    if (enrollment) {
      enrollment.totalXP += xpEarned;
      if (passed) enrollment.completedEvaluations.push(evaluation._id);
      await user.save();
    }

    res.json({ result, passed, score: scorePercent, xpEarned, feedback: gradedAnswers });
  } catch (err) { next(err); }
});

module.exports = router;
