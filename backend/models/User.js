// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const achievementSchema = new mongoose.Schema({
  achievementId: String,
  name: String,
  earnedAt: { type: Date, default: Date.now },
  xpAwarded: { type: Number, default: 0 }
}, { _id: false });

const enrollmentSchema = new mongoose.Schema({
  languageCode: { type: String, required: true },
  enrolledAt: { type: Date, default: Date.now },
  currentLevel: { type: String, enum: ['A1','A2','B1','B2','C1','C2'], default: 'A1' },
  totalXP: { type: Number, default: 0 },
  completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  completedEvaluations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation' }],
  streak: { type: Number, default: 0 },
  lastActivity: { type: Date, default: Date.now }
}, { _id: false });

const pushSubscriptionSchema = new mongoose.Schema({
  endpoint: String,
  keys: {
    p256dh: String,
    auth: String
  }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 },
  email: {
    type: String, required: true, unique: true,
    lowercase: true, trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  password: { type: String, required: true, minlength: 8, select: false },
  avatar: { type: String, default: null },
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String, select: false },
  resetPasswordToken: { type: String, select: false },
  resetPasswordExpires: { type: Date, select: false },

  // Language learning data
  nativeLanguage: { type: String, default: 'es' },
  interfaceLanguage: { type: String, enum: ['es', 'en'], default: 'es' },
  enrollments: [enrollmentSchema],
  achievements: [achievementSchema],

  // Study preferences
  dailyGoalMinutes: { type: Number, default: 15 },
  notificationsEnabled: { type: Boolean, default: true },
  pushSubscription: pushSubscriptionSchema,
  reminderTime: { type: String, default: '09:00' },

  // Stats
  totalStudyMinutes: { type: Number, default: 0 },
  loginStreak: { type: Number, default: 0 },
  lastLogin: { type: Date },

  // Offline sync
  offlineSyncToken: { type: String, select: false },
  lastSyncAt: { type: Date }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual: total XP across all languages
userSchema.virtual('totalXP').get(function () {
  return this.enrollments.reduce((sum, e) => sum + (e.totalXP || 0), 0);
});

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Instance method: compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Instance method: get enrollment for a language
userSchema.methods.getEnrollment = function (languageCode) {
  return this.enrollments.find(e => e.languageCode === languageCode);
};

// Remove sensitive fields from JSON output
userSchema.methods.toPublicJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.verificationToken;
  delete obj.resetPasswordToken;
  delete obj.resetPasswordExpires;
  delete obj.offlineSyncToken;
  return obj;
};

// Index
userSchema.index({ email: 1 });
userSchema.index({ 'enrollments.languageCode': 1 });

module.exports = mongoose.model('User', userSchema);
