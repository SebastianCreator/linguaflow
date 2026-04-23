// utils/seedData.js
require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');
const { Evaluation, Language } = require('../models/index');
const logger = require('./logger');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/linguaflow';

const languages = [
  { code: 'en', name: 'English', nameEs: 'Inglés', flag: '🇬🇧', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 2, sortOrder: 1 },
  { code: 'fr', name: 'French', nameEs: 'Francés', flag: '🇫🇷', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 3, sortOrder: 2 },
  { code: 'de', name: 'German', nameEs: 'Alemán', flag: '🇩🇪', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 4, sortOrder: 3 },
  { code: 'pt', name: 'Portuguese', nameEs: 'Portugués', flag: '🇧🇷', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 1, sortOrder: 4 },
  { code: 'it', name: 'Italian', nameEs: 'Italiano', flag: '🇮🇹', active: true, levels: ['A1','A2','B1','B2','C1','C2'], difficultyForSpanish: 2, sortOrder: 5 },
];

const sampleLessons = [
  // ENGLISH A1 - Vocabulary
  {
    languageCode: 'en', level: 'A1', module: 'vocabulary', order: 1, unitNumber: 1,
    title: 'Greetings & Introductions',
    titleEs: 'Saludos y presentaciones',
    description: 'Learn how to greet people and introduce yourself in English.',
    descriptionEs: 'Aprende a saludar y presentarte en inglés.',
    objectives: ['Say hello and goodbye', 'Introduce yourself', 'Ask someone\'s name'],
    objectivesEs: ['Decir hola y adiós', 'Presentarte', 'Preguntar el nombre de alguien'],
    content: [
      { type: 'text', content: 'Common greetings in English:', contentEs: 'Saludos comunes en inglés:' },
      { type: 'example', content: 'Hello! / Hi! — Hola\nGoodbye! / Bye! — Adiós\nGood morning — Buenos días\nGood afternoon — Buenas tardes\nGood evening — Buenas noches' },
      { type: 'tip', content: '"Hi" is informal, use "Hello" in formal situations.', contentEs: '"Hi" es informal, usa "Hello" en situaciones formales.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        prompt: 'How do you say "Buenos días" in English?',
        options: ['Good night', 'Good morning', 'Good afternoon', 'Hello'],
        correctAnswer: 'Good morning',
        explanation: 'Good morning is used from sunrise until noon.',
        xpReward: 10
      },
      {
        type: 'fill-in-blank',
        prompt: 'Complete: "___! My name is Ana." (informal greeting)',
        correctAnswer: 'Hi',
        explanation: '"Hi" is the informal way to greet someone.',
        xpReward: 10
      },
      {
        type: 'matching',
        prompt: 'Match the greetings with their Spanish translations',
        options: ['Hello', 'Goodbye', 'Good morning', 'Good night'],
        correctAnswer: { 'Hello': 'Hola', 'Goodbye': 'Adiós', 'Good morning': 'Buenos días', 'Good night': 'Buenas noches' },
        xpReward: 15
      },
      {
        type: 'translation',
        prompt: 'Translate to English: "¿Cómo te llamas?"',
        correctAnswer: 'What is your name?',
        explanation: 'This is the standard way to ask someone\'s name.',
        xpReward: 15
      },
      {
        type: 'true-false',
        prompt: '"Good evening" is used in the morning.',
        correctAnswer: false,
        explanation: '"Good evening" is used from dusk, after sunset.',
        xpReward: 10
      }
    ],
    xpReward: 50, totalDurationMinutes: 10, offlineAvailable: true
  },
  // ENGLISH A1 - Grammar
  {
    languageCode: 'en', level: 'A1', module: 'grammar', order: 1, unitNumber: 1,
    title: 'Personal Pronouns & To Be',
    titleEs: 'Pronombres personales y el verbo To Be',
    description: 'Learn personal pronouns and the verb "to be" in present tense.',
    descriptionEs: 'Aprende los pronombres personales y el verbo "to be" en presente.',
    objectives: ['Use I, you, he, she, it, we, they', 'Conjugate "to be" in present'],
    objectivesEs: ['Usar pronombres personales', 'Conjugar "to be" en presente'],
    content: [
      { type: 'grammar-table', content: 'I am | You are | He/She/It is | We are | You are | They are' },
      { type: 'example', content: 'I am a student.\nShe is a teacher.\nThey are friends.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'Choose the correct form: "She ___ happy."', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', explanation: 'Third person singular uses "is".', xpReward: 10 },
      { type: 'fill-in-blank', prompt: 'Complete: "We ___ students."', correctAnswer: 'are', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Él es médico."', correctAnswer: 'He is a doctor.', xpReward: 15 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true
  },
  // ENGLISH A2 - Vocabulary
  {
    languageCode: 'en', level: 'A2', module: 'vocabulary', order: 1, unitNumber: 5,
    title: 'Daily Routines & Time',
    titleEs: 'Rutinas diarias y el tiempo',
    description: 'Describe your daily routine and talk about time.',
    descriptionEs: 'Describe tu rutina diaria y habla sobre el tiempo.',
    objectives: ['Talk about daily activities', 'Use time expressions', 'Use present simple tense'],
    objectivesEs: ['Hablar de actividades diarias', 'Usar expresiones de tiempo'],
    content: [
      { type: 'text', content: 'Daily routine vocabulary:', contentEs: 'Vocabulario de rutina diaria:' },
      { type: 'example', content: 'wake up — despertar\neat breakfast — desayunar\ngo to work/school — ir al trabajo/escuela\nhave lunch — almorzar\nwatch TV — ver televisión\ngo to bed — irse a dormir' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'What do you do first in the morning?', options: ['Go to bed', 'Wake up', 'Have dinner', 'Watch TV'], correctAnswer: 'Wake up', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Me despierto a las 7 de la mañana."', correctAnswer: 'I wake up at 7 in the morning.', xpReward: 15 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true
  },
  // FRENCH A1 - Vocabulary
  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary', order: 1, unitNumber: 1,
    title: 'Salutations et présentations',
    titleEs: 'Saludos y presentaciones en francés',
    description: 'Learn basic French greetings and how to introduce yourself.',
    descriptionEs: 'Aprende saludos básicos en francés y cómo presentarte.',
    objectives: ['Greet in French', 'Introduce yourself', 'Count from 1 to 10'],
    objectivesEs: ['Saludar en francés', 'Presentarte', 'Contar del 1 al 10'],
    content: [
      { type: 'text', content: 'French greetings:', contentEs: 'Saludos en francés:' },
      { type: 'example', content: 'Bonjour — Buenos días / Hola\nBonsoir — Buenas tardes/noches\nSalut — Hola (informal)\nAu revoir — Adiós\nComment vous appelez-vous? — ¿Cómo se llama usted?' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "Hola" (informal) en francés?', options: ['Bonjour', 'Salut', 'Bonsoir', 'Au revoir'], correctAnswer: 'Salut', explanation: '"Salut" est informal, "Bonjour" est formel.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: 'Completa: "___ ! Je m\'appelle Marie." (saludo formal)', correctAnswer: 'Bonjour', xpReward: 10 },
      { type: 'translation', prompt: 'Traduce al francés: "Buenas noches"', correctAnswer: 'Bonsoir', xpReward: 15 }
    ],
    xpReward: 50, totalDurationMinutes: 10, offlineAvailable: true
  },
  // B1 English - Grammar (more complex)
  {
    languageCode: 'en', level: 'B1', module: 'grammar', order: 1, unitNumber: 9,
    title: 'Present Perfect vs. Simple Past',
    titleEs: 'Presente perfecto vs. pasado simple',
    description: 'Understand when to use Present Perfect and Simple Past.',
    descriptionEs: 'Entiende cuándo usar el presente perfecto y el pasado simple.',
    objectives: ['Distinguish between Present Perfect and Simple Past', 'Use time expressions correctly'],
    objectivesEs: ['Distinguir entre presente perfecto y pasado simple', 'Usar expresiones de tiempo correctamente'],
    content: [
      { type: 'text', content: 'Use Present Perfect for: experiences, recent events, unfinished time periods.\nUse Simple Past for: finished actions at a specific time in the past.' },
      { type: 'example', content: 'I have visited Paris. (experience, no specific time)\nI visited Paris in 2019. (specific time in the past)' },
      { type: 'tip', content: 'Key words: already, yet, ever, never → Present Perfect\nKey words: yesterday, last week, in 2020 → Simple Past', contentEs: 'Palabras clave: already, yet, ever, never → Presente perfecto\nalready, yet, ever, never → Pasado simple' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"I ___ to Japan twice." (experience)', options: ['went', 'have been', 'was', 'go'], correctAnswer: 'have been', explanation: 'Experiences use Present Perfect: have/has + past participle.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"She ___ home an hour ago."', options: ['has arrived', 'arrives', 'arrived', 'has arrive'], correctAnswer: 'arrived', explanation: '"An hour ago" is a specific past time → Simple Past.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Have you ever ___ (eat) sushi?"', correctAnswer: 'eaten', explanation: 'Present Perfect uses past participle: eat → eaten.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Nunca he visto esa película."', correctAnswer: 'I have never seen that movie.', xpReward: 20 }
    ],
    xpReward: 80, totalDurationMinutes: 15, offlineAvailable: true
  }
];

const sampleEvaluations = [
  {
    languageCode: 'en', level: 'A1', type: 'level',
    title: 'English A1 Level Test',
    titleEs: 'Examen de nivel A1 — Inglés',
    description: 'Comprehensive test to certify A1 level in English.',
    timeLimitMinutes: 30, passingScore: 70, xpReward: 300, certificateAwarded: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: 'What does "Good morning" mean?', options: ['Buenas noches', 'Buenas tardes', 'Buenos días', 'Hola'], correctAnswer: 'Buenos días', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"She ___ a teacher."', options: ['am', 'are', 'is', 'be'], correctAnswer: 'is', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: 'Complete: "They ___ students."', correctAnswer: 'are', points: 1 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate to English: "¿Cómo estás?"', correctAnswer: 'How are you?', points: 2 },
      { type: 'multiple-choice', section: 'reading', prompt: 'Read: "My name is John. I am 25 years old." — How old is John?', options: ['20', '25', '30', '35'], correctAnswer: '25', points: 1 },
      { type: 'true-false', section: 'grammar', prompt: '"I are happy" is correct English.', correctAnswer: false, points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: 'What color is the sky on a clear day?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctAnswer: 'Blue', points: 1 },
      { type: 'fill-in-blank', section: 'vocabulary', prompt: 'The opposite of "big" is "___".', correctAnswer: 'small', points: 1 },
    ]
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info('Connected to MongoDB for seeding...');

    // Clear existing
    await Promise.all([
      Language.deleteMany({}),
      Lesson.deleteMany({ languageCode: { $in: ['en', 'fr', 'de', 'pt', 'it'] } }),
      Evaluation.deleteMany({ languageCode: { $in: ['en', 'fr'] } })
    ]);

    // Insert
    await Language.insertMany(languages);
    await Lesson.insertMany(sampleLessons);
    await Evaluation.insertMany(sampleEvaluations);

    logger.info(`✅ Seed complete: ${languages.length} languages, ${sampleLessons.length} lessons, ${sampleEvaluations.length} evaluations`);
    process.exit(0);
  } catch (err) {
    logger.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();
