// backend/utils/loadData.js
// Carga todas las lecciones y evaluaciones en MongoDB
// Uso: node utils/loadData.js

require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');
const { Evaluation } = require('../models/index');

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

async function loadData() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/linguaflow';
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');

    // Limpiar colecciones existentes
    await Lesson.deleteMany({});
    await Evaluation.deleteMany({});
    console.log('🗑  Existing lessons and evaluations cleared');

    // Insertar lecciones
    const insertedLessons = await Lesson.insertMany(lessons);
    console.log(`📚 ${insertedLessons.length} lessons inserted`);

    // Insertar evaluaciones
    const insertedEvals = await Evaluation.insertMany(evaluations);
    console.log(`📝 ${insertedEvals.length} evaluations inserted`);

    // Resumen por idioma
    const summary = {};
    lessons.forEach(l => {
      const key = `${l.languageCode.toUpperCase()} ${l.level}`;
      summary[key] = (summary[key] || 0) + 1;
    });
    console.log('\n📊 Lessons by language/level:');
    Object.entries(summary).forEach(([k, v]) => console.log(`   ${k}: ${v} lessons`));

    console.log('\n🎉 All data loaded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error loading data:', err.message);
    process.exit(1);
  }
}

loadData();
