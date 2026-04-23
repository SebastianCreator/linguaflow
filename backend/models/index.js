// models/Evaluation.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, enum: ['multiple-choice', 'fill-in-blank', 'matching', 'essay', 'audio', 'translation'], required: true },
  section: { type: String, enum: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking'] },
  prompt: { type: String, required: true },
  audioUrl: String,
  readingPassage: String,
  options: [String],
  correctAnswer: mongoose.Schema.Types.Mixed,
  points: { type: Number, default: 1 },
  explanation: String
});

const evaluationSchema = new mongoose.Schema({
  languageCode: { type: String, required: true },
  level: { type: String, enum: ['A1','A2','B1','B2','C1','C2'], required: true },
  title: { type: String, required: true },
  titleEs: String,
  description: String,
  type: { type: String, enum: ['unit', 'level', 'placement', 'practice'], default: 'unit' },
  timeLimitMinutes: { type: Number, default: 30 },
  passingScore: { type: Number, default: 70 }, // percentage
  questions: [questionSchema],
  xpReward: { type: Number, default: 200 },
  certificateAwarded: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

evaluationSchema.index({ languageCode: 1, level: 1 });

// ── Progress model ──────────────────────────────────────
const lessonProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  languageCode: { type: String, required: true },
  status: { type: String, enum: ['not-started', 'in-progress', 'completed'], default: 'not-started' },
  score: { type: Number, default: 0 },       // percentage
  xpEarned: { type: Number, default: 0 },
  attempts: { type: Number, default: 0 },
  completedAt: Date,
  timeSpentSeconds: { type: Number, default: 0 },
  exerciseResults: [{
    exerciseIndex: Number,
    correct: Boolean,
    userAnswer: mongoose.Schema.Types.Mixed,
    timeSeconds: Number
  }],
  // For offline
  syncPending: { type: Boolean, default: false },
  localCompletedAt: Date
}, { timestamps: true });

lessonProgressSchema.index({ userId: 1, lessonId: 1 }, { unique: true });
lessonProgressSchema.index({ userId: 1, languageCode: 1 });

const evaluationResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  evaluationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation', required: true },
  languageCode: { type: String, required: true },
  level: { type: String, enum: ['A1','A2','B1','B2','C1','C2'] },
  score: { type: Number, required: true },
  passed: { type: Boolean, required: true },
  xpEarned: { type: Number, default: 0 },
  answers: [{ questionIndex: Number, userAnswer: mongoose.Schema.Types.Mixed, correct: Boolean, points: Number }],
  timeSpentSeconds: Number,
  certificateUrl: String,
  completedAt: { type: Date, default: Date.now }
}, { timestamps: true });

evaluationResultSchema.index({ userId: 1, evaluationId: 1 });

// ── Language model ──────────────────────────────────────
const languageSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameEs: { type: String, required: true },
  flag: String,
  active: { type: Boolean, default: false },
  levels: [{ type: String, enum: ['A1','A2','B1','B2','C1','C2'] }],
  totalLessons: { type: Number, default: 0 },
  ttsVoiceId: String,      // Voice ID for TTS API
  sttModelId: String,      // Model for speech recognition
  difficultyForSpanish: { type: Number, min: 1, max: 5 }, // Difficulty for Spanish speakers
  sortOrder: { type: Number, default: 99 }
}, { timestamps: true });

module.exports = {
  Evaluation: mongoose.model('Evaluation', evaluationSchema),
  LessonProgress: mongoose.model('LessonProgress', lessonProgressSchema),
  EvaluationResult: mongoose.model('EvaluationResult', evaluationResultSchema),
  Language: mongoose.model('Language', languageSchema)
};
