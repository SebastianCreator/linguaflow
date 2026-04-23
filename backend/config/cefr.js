// config/cefr.js — CEFR level definitions and structure

const CEFR_LEVELS = {
  A1: {
    code: 'A1',
    name: 'Beginner',
    nameEs: 'Principiante',
    color: '#4ADE80',
    order: 1,
    description: 'Can understand and use familiar everyday expressions and basic phrases.',
    descriptionEs: 'Puede comprender y usar expresiones cotidianas y frases básicas.',
    xpRequired: 0,
    xpToNext: 500,
    modules: ['vocabulary', 'grammar', 'listening', 'reading']
  },
  A2: {
    code: 'A2',
    name: 'Elementary',
    nameEs: 'Elemental',
    color: '#86EFAC',
    order: 2,
    description: 'Can understand sentences and frequently used expressions.',
    descriptionEs: 'Puede comprender frases y expresiones de uso frecuente.',
    xpRequired: 500,
    xpToNext: 1200,
    modules: ['vocabulary', 'grammar', 'listening', 'reading', 'writing']
  },
  B1: {
    code: 'B1',
    name: 'Intermediate',
    nameEs: 'Intermedio',
    color: '#60A5FA',
    order: 3,
    description: 'Can deal with most situations likely to arise while travelling.',
    descriptionEs: 'Puede desenvolverse en la mayoría de situaciones de viaje.',
    xpRequired: 1200,
    xpToNext: 2500,
    modules: ['vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking']
  },
  B2: {
    code: 'B2',
    name: 'Upper-Intermediate',
    nameEs: 'Intermedio Alto',
    color: '#818CF8',
    order: 4,
    description: 'Can understand the main ideas of complex text on concrete and abstract topics.',
    descriptionEs: 'Puede entender ideas principales de textos complejos.',
    xpRequired: 2500,
    xpToNext: 4500,
    modules: ['vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking']
  },
  C1: {
    code: 'C1',
    name: 'Advanced',
    nameEs: 'Avanzado',
    color: '#F472B6',
    order: 5,
    description: 'Can express ideas fluently and spontaneously without obvious searching.',
    descriptionEs: 'Puede expresarse con fluidez y espontaneidad.',
    xpRequired: 4500,
    xpToNext: 8000,
    modules: ['vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking', 'academic']
  },
  C2: {
    code: 'C2',
    name: 'Mastery',
    nameEs: 'Maestría',
    color: '#FB923C',
    order: 6,
    description: 'Can understand with ease virtually everything heard or read.',
    descriptionEs: 'Puede comprender con facilidad prácticamente todo lo que oye o lee.',
    xpRequired: 8000,
    xpToNext: null,
    modules: ['vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking', 'academic', 'cultural']
  }
};

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nameEs: 'Inglés', flag: '🇬🇧', active: true },
  { code: 'fr', name: 'French', nameEs: 'Francés', flag: '🇫🇷', active: true },
  { code: 'de', name: 'German', nameEs: 'Alemán', flag: '🇩🇪', active: true },
  { code: 'pt', name: 'Portuguese', nameEs: 'Portugués', flag: '🇧🇷', active: true },
  { code: 'it', name: 'Italian', nameEs: 'Italiano', flag: '🇮🇹', active: true },
  { code: 'zh', name: 'Mandarin', nameEs: 'Mandarín', flag: '🇨🇳', active: false },
  { code: 'ja', name: 'Japanese', nameEs: 'Japonés', flag: '🇯🇵', active: false },
];

const MODULE_TYPES = ['vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking', 'academic', 'cultural'];

const EXERCISE_TYPES = [
  'multiple-choice', 'fill-in-blank', 'matching', 'translation',
  'drag-drop', 'audio-listen', 'voice-record', 'essay', 'true-false'
];

const ACHIEVEMENT_TYPES = {
  FIRST_LESSON: { id: 'first_lesson', name: 'First Steps', xp: 50 },
  LEVEL_COMPLETE: { id: 'level_complete', name: 'Level Master', xp: 200 },
  STREAK_7: { id: 'streak_7', name: '7-Day Streak', xp: 100 },
  STREAK_30: { id: 'streak_30', name: '30-Day Streak', xp: 500 },
  PERFECT_SCORE: { id: 'perfect_score', name: 'Perfect Score', xp: 75 },
  POLYGLOT: { id: 'polyglot', name: 'Polyglot', xp: 300 },
};

module.exports = { CEFR_LEVELS, SUPPORTED_LANGUAGES, MODULE_TYPES, EXERCISE_TYPES, ACHIEVEMENT_TYPES };
