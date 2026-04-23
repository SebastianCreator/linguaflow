// src/services/i18n.js
const translations = {
  es: {
    // Navigation
    nav: {
      dashboard: 'Inicio',
      lessons: 'Lecciones',
      evaluations: 'Evaluaciones',
      profile: 'Perfil',
      languages: 'Idiomas',
    },
    // Auth
    auth: {
      login: 'Iniciar sesión',
      register: 'Registrarse',
      logout: 'Cerrar sesión',
      email: 'Correo electrónico',
      password: 'Contraseña',
      name: 'Nombre completo',
      forgotPassword: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tienes cuenta?',
      haveAccount: '¿Ya tienes cuenta?',
      confirmPassword: 'Confirmar contraseña',
      nativeLanguage: 'Idioma nativo',
    },
    // Dashboard
    dashboard: {
      welcome: 'Bienvenido',
      continueStudying: 'Continuar estudiando',
      myLanguages: 'Mis idiomas',
      achievements: 'Logros',
      streak: 'Racha',
      days: 'días',
      totalXP: 'XP Total',
      level: 'Nivel',
      progress: 'Progreso',
      lessonsCompleted: 'Lecciones completadas',
      enrollNew: 'Inscribirse en nuevo idioma',
      recentActivity: 'Actividad reciente',
    },
    // Lessons
    lessons: {
      title: 'Lecciones',
      module: {
        vocabulary: 'Vocabulario',
        grammar: 'Gramática',
        listening: 'Comprensión Auditiva',
        reading: 'Lectura',
        writing: 'Escritura',
        speaking: 'Expresión Oral',
        academic: 'Académico',
        cultural: 'Cultura',
      },
      start: 'Comenzar lección',
      continue: 'Continuar',
      completed: 'Completada',
      locked: 'Bloqueada',
      xpReward: 'XP',
      minutes: 'min',
      exercises: 'ejercicios',
      submit: 'Enviar respuesta',
      next: 'Siguiente',
      back: 'Anterior',
      finish: 'Finalizar',
      score: 'Puntuación',
      passed: '¡Superada!',
      failed: 'No superada',
      tryAgain: 'Intentar de nuevo',
    },
    // Evaluations
    evaluations: {
      title: 'Evaluaciones',
      startEvaluation: 'Iniciar evaluación',
      timeLimit: 'Tiempo límite',
      passingScore: 'Puntaje mínimo para aprobar',
      questions: 'preguntas',
      submit: 'Enviar evaluación',
      result: 'Resultado',
      passed: '¡Aprobado!',
      failed: 'No aprobado',
      certificate: 'Ver certificado',
      score: 'Puntuación',
    },
    // CEFR Levels
    cefr: {
      A1: 'Principiante',
      A2: 'Elemental',
      B1: 'Intermedio',
      B2: 'Intermedio Alto',
      C1: 'Avanzado',
      C2: 'Maestría',
    },
    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      save: 'Guardar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      search: 'Buscar',
      filter: 'Filtrar',
      all: 'Todos',
      offline: 'Sin conexión',
      syncing: 'Sincronizando...',
      correct: 'Correcto',
      incorrect: 'Incorrecto',
    }
  },
  en: {
    nav: {
      dashboard: 'Home',
      lessons: 'Lessons',
      evaluations: 'Evaluations',
      profile: 'Profile',
      languages: 'Languages',
    },
    auth: {
      login: 'Sign in',
      register: 'Sign up',
      logout: 'Sign out',
      email: 'Email address',
      password: 'Password',
      name: 'Full name',
      forgotPassword: 'Forgot password?',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      confirmPassword: 'Confirm password',
      nativeLanguage: 'Native language',
    },
    dashboard: {
      welcome: 'Welcome',
      continueStudying: 'Continue studying',
      myLanguages: 'My languages',
      achievements: 'Achievements',
      streak: 'Streak',
      days: 'days',
      totalXP: 'Total XP',
      level: 'Level',
      progress: 'Progress',
      lessonsCompleted: 'Lessons completed',
      enrollNew: 'Enroll in new language',
      recentActivity: 'Recent activity',
    },
    lessons: {
      title: 'Lessons',
      module: {
        vocabulary: 'Vocabulary',
        grammar: 'Grammar',
        listening: 'Listening',
        reading: 'Reading',
        writing: 'Writing',
        speaking: 'Speaking',
        academic: 'Academic',
        cultural: 'Culture',
      },
      start: 'Start lesson',
      continue: 'Continue',
      completed: 'Completed',
      locked: 'Locked',
      xpReward: 'XP',
      minutes: 'min',
      exercises: 'exercises',
      submit: 'Submit answer',
      next: 'Next',
      back: 'Back',
      finish: 'Finish',
      score: 'Score',
      passed: 'Passed!',
      failed: 'Not passed',
      tryAgain: 'Try again',
    },
    evaluations: {
      title: 'Evaluations',
      startEvaluation: 'Start evaluation',
      timeLimit: 'Time limit',
      passingScore: 'Passing score',
      questions: 'questions',
      submit: 'Submit evaluation',
      result: 'Result',
      passed: 'Passed!',
      failed: 'Not passed',
      certificate: 'View certificate',
      score: 'Score',
    },
    cefr: {
      A1: 'Beginner',
      A2: 'Elementary',
      B1: 'Intermediate',
      B2: 'Upper-Intermediate',
      C1: 'Advanced',
      C2: 'Mastery',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      search: 'Search',
      filter: 'Filter',
      all: 'All',
      offline: 'Offline',
      syncing: 'Syncing...',
      correct: 'Correct',
      incorrect: 'Incorrect',
    }
  }
};

let currentLocale = 'es';

export const setLocale = (locale) => { currentLocale = locale; };
export const getLocale = () => currentLocale;

export const t = (key) => {
  const keys = key.split('.');
  let val = translations[currentLocale];
  for (const k of keys) {
    val = val?.[k];
    if (val === undefined) break;
  }
  // Fallback to Spanish
  if (val === undefined) {
    val = translations['es'];
    for (const k of keys) val = val?.[k];
  }
  return val || key;
};

export default { t, setLocale, getLocale };
