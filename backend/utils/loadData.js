// backend/utils/loadData.js
// Carga todas las lecciones, evaluaciones e idiomas en MongoDB
// Uso: node utils/loadData.js  o  npm run load

require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');
const { Evaluation, Language } = require('../models/index');

// ── Importar todos los archivos de datos ──────────────
const lessons = [
  ...require('../data/lessons/en_A1'),
  ...require('../data/lessons/en_A2'),
  ...require('../data/lessons/en_B1'),
  ...require('../data/lessons/fr_A1'),
  ...require('../data/lessons/de_A1'),
  ...require('../data/lessons/pt_A1'),
  ...require('../data/lessons/it_A1'),
];

const evaluations = [
  ...require('../data/evaluations/all_evaluations'),
];

const languages = [
  { code: 'en', name: 'English', nameEs: 'Inglés', flag: '🇬🇧', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 2, sortOrder: 1 },
  { code: 'fr', name: 'French', nameEs: 'Francés', flag: '🇫🇷', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 3, sortOrder: 2 },
  { code: 'de', name: 'German', nameEs: 'Alemán', flag: '🇩🇪', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 4, sortOrder: 3 },
  { code: 'pt', name: 'Portuguese', nameEs: 'Portugués', flag: '🇧🇷', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 1, sortOrder: 4 },
  { code: 'it', name: 'Italian', nameEs: 'Italiano', flag: '🇮🇹', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 2, sortOrder: 5 },
];

async function loadData() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/fluenta';
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');

    // ── Limpiar colecciones existentes ──────────────
    await Language.deleteMany({});
    await Lesson.deleteMany({});
    await Evaluation.deleteMany({});
    console.log('🗑️  Existing languages, lessons and evaluations cleared');

    // ── Insertar idiomas ─────────────────────────────
    const insertedLanguages = await Language.insertMany(languages);
    console.log(`🌍 ${insertedLanguages.length} languages inserted`);

    // ── Insertar lecciones ───────────────────────────
    const insertedLessons = await Lesson.insertMany(lessons);
    console.log(`📚 ${insertedLessons.length} lessons inserted`);

    // ── Insertar evaluaciones ────────────────────────
    const insertedEvals = await Evaluation.insertMany(evaluations);
    console.log(`📝 ${insertedEvals.length} evaluations inserted`);

    // ── Resumen por idioma ───────────────────────────
    const summary = {};
    lessons.forEach(l => {
      const key = `${l.languageCode.toUpperCase()} ${l.level}`;
      summary[key] = (summary[key] || 0) + 1;
    });
    console.log('\n📊 Lessons by language/level:');
    Object.entries(summary).forEach(([k, v]) => console.log(`   ${k}: ${v} lessons`));

    // ── Resumen de evaluaciones ──────────────────────
    const evalSummary = {};
    evaluations.forEach(e => {
      const key = `${e.languageCode.toUpperCase()} ${e.level} (${e.type})`;
      evalSummary[key] = (evalSummary[key] || 0) + 1;
    });
    console.log('\n📝 Evaluations by language/level:');
    Object.entries(evalSummary).forEach(([k, v]) => console.log(`   ${k}: ${v} evaluations`));

    console.log('\n🎉 All data loaded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error loading data:', err.message);
    process.exit(1);
  }
}

loadData();

