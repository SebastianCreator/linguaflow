// services/achievementService.js
const User = require('../models/User');
const { ACHIEVEMENT_TYPES } = require('../config/cefr');

/**
 * Check and award achievements based on an event.
 * Returns array of newly awarded achievements.
 */
exports.checkAndAward = async (userId, event) => {
  const user = await User.findById(userId);
  if (!user) return [];

  const awarded = [];
  const existingIds = user.achievements.map(a => a.achievementId);

  const award = (type) => {
    if (!existingIds.includes(type.id)) {
      user.achievements.push({ achievementId: type.id, name: type.name, xpAwarded: type.xp });
      awarded.push(type);
    }
  };

  // First lesson completed
  if (event.type === 'lesson_complete') {
    const totalCompleted = user.enrollments.reduce((s, e) => s + e.completedLessons.length, 0);
    if (totalCompleted >= 1) award(ACHIEVEMENT_TYPES.FIRST_LESSON);
    if (event.score === 100) award(ACHIEVEMENT_TYPES.PERFECT_SCORE);
  }

  // Level completed
  if (event.type === 'level_complete') {
    award(ACHIEVEMENT_TYPES.LEVEL_COMPLETE);
  }

  // Streak achievements
  if (event.type === 'streak_update') {
    if (user.loginStreak >= 7) award(ACHIEVEMENT_TYPES.STREAK_7);
    if (user.loginStreak >= 30) award(ACHIEVEMENT_TYPES.STREAK_30);
  }

  // Polyglot: enrolled in 3+ languages
  if (user.enrollments.length >= 3) award(ACHIEVEMENT_TYPES.POLYGLOT);

  if (awarded.length > 0) {
    await user.save();
  }

  return awarded;
};
