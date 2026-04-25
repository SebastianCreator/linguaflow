// backend/utils/loadData.js
// Carga datos con METODOS DE APRENDIZAJE ACTIVOS a MongoDB
// Uso: npm run load

require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');
const { Evaluation, Language } = require('../models/index');

// ── NUEVOS datos con métodos activos ──────────────────
const lessons = [
  ...require('../data/lessons/en_A1_active'),
];

const evaluations = [
  ...require('../data/evaluations/evaluations_active'),
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
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/linguaflow';
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');

    // ── Limpiar colecciones ──────────────────────────
    await Language.deleteMany({});
    await Lesson.deleteMany({});
    await Evaluation.deleteMany({});
    console.log('🗑️  Collections cleared');

    // ── Insertar idiomas ─────────────────────────────
    const insertedLanguages = await Language.insertMany(languages);
    console.log(`🌍 ${insertedLanguages.length} languages inserted`);

    // ── Insertar lecciones (MÉTODOS ACTIVOS) ─────────
    const insertedLessons = await Lesson.insertMany(lessons);
    console.log(`📚 ${insertedLessons.length} ACTIVE lessons inserted`);

    // ── Insertar evaluaciones (ADAPTATIVAS) ──────────
    const insertedEvals = await Evaluation.insertMany(evaluations);
    console.log(`📝 ${insertedEvals.length} ACTIVE evaluations inserted`);

    // ── Resumen de métodos de aprendizaje usados ─────
    const methodCount = {};
    lessons.forEach(l => {
      l.exercises.forEach(e => {
        methodCount[e.type] = (methodCount[e.type] || 0) + 1;
      });
    });
    console.log('\n🎯 Active learning methods used:');
    Object.entries(methodCount)
      .sort((a, b) => b[1] - a[1])
      .forEach(([method, count]) => console.log(`   ${method}: ${count} exercises`));

    console.log('\n🎉 Active learning data loaded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

loadData();

