// models/Lesson.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['multiple-choice', 'fill-in-blank', 'matching', 'translation',
           'drag-drop', 'audio-listen', 'voice-record', 'essay', 'true-false',
           'dictation', 'scramble', 'image-match', 'conversation-sim',
           'cloze', 'shadowing', 'mnemonic', 'task-based', 'interleaved'],
    required: true
  },
  prompt: { type: String, required: true },
  promptAudio: String, // URL to audio file
  options: [String],   // For multiple-choice / matching
  correctAnswer: mongoose.Schema.Types.Mixed, // String, Array, or Object
  explanation: String,
  explanationEs: String,
  xpReward: { type: Number, default: 10 },
  difficulty: { type: Number, min: 1, max: 5, default: 1 },
  tags: [String]
});

const contentBlockSchema = new mongoose.Schema({
  type: { type: String, enum: ['text', 'audio', 'image', 'video', 'example', 'grammar-table', 'tip'] },
  content: String,
  contentEs: String, // Spanish translation of instruction text
  mediaUrl: String,
  metadata: mongoose.Schema.Types.Mixed
}, { _id: false });

const lessonSchema = new mongoose.Schema({
  // Identification
  languageCode: { type: String, required: true, index: true }, // 'en', 'fr', etc.
  level: { type: String, enum: ['A1','A2','B1','B2','C1','C2'], required: true, index: true },
  module: {
    type: String,
    enum: ['vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking', 'academic', 'cultural'],
    required: true
  },
  order: { type: Number, required: true }, // Order within level+module
  unitNumber: { type: Number, required: true }, // Unit within the language course

  // Content
  title: { type: String, required: true },
  titleEs: String,
  description: String,
  descriptionEs: String,
  objectives: [String],     // Learning objectives
  objectivesEs: [String],

  // Lesson content blocks (text, audio, grammar explanations, etc.)
  content: [contentBlockSchema],

  // Exercises
  exercises: [exerciseSchema],

  // Media
  thumbnailUrl: String,
  introAudioUrl: String,
  totalDurationMinutes: { type: Number, default: 10 },

  // Rewards
  xpReward: { type: Number, default: 50 },
  isUnlocked: { type: Boolean, default: false }, // Admin flag
  prerequisites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],

  // Offline support
  offlineAvailable: { type: Boolean, default: true },
  lastUpdated: { type: Date, default: Date.now },

  isPublished: { type: Boolean, default: true },
  tags: [String]
}, {
  timestamps: true
});

lessonSchema.index({ languageCode: 1, level: 1, module: 1, order: 1 });
lessonSchema.index({ languageCode: 1, level: 1 });

module.exports = mongoose.model('Lesson', lessonSchema);
