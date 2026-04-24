// data/lessons/de_A1.js — German A1 Lessons (6 lecciones)
module.exports = [

  {
    languageCode: 'de', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Begrüßungen und Vorstellungen',
    titleEs: 'Saludos y presentaciones en alemán',
    description: 'Learn essential German greetings and self-introductions.',
    descriptionEs: 'Aprende saludos esenciales en alemán y presentaciones.',
    objectives: ['Greet people formally and informally', 'Introduce yourself in German', 'Use basic courtesy phrases'],
    objectivesEs: ['Saludar formal e informalmente', 'Presentarte en alemán', 'Usar frases de cortesía básicas'],
    content: [
      { type: 'example', content: 'Greetings / Saludos:\nGuten Morgen = Buenos días (hasta ~12h)\nGuten Tag = Buenas tardes (formales, todo el día)\nGuten Abend = Buenas noches (noche)\nHallo / Hi = Hola (informal)\nTschüs = Adiós (informal)\nAuf Wiedersehen = Adiós (formal)\nDanke / Danke schön = Gracias / Muchas gracias\nBitte = Por favor / De nada' },
      { type: 'example', content: 'Introductions:\nIch heiße... = Me llamo...\nMein Name ist... = Mi nombre es...\nIch bin... Jahre alt. = Tengo... años.\nIch komme aus... = Soy de... / Vengo de...\nWie heißen Sie? (formal) = ¿Cómo se llama usted?\nWie heißt du? (informal) = ¿Cómo te llamas?' },
      { type: 'tip', content: 'German has THREE forms for "the": DER (masculine), DIE (feminine), DAS (neutral). This is one of the most important things to learn!', contentEs: 'El alemán tiene TRES formas de "el/la": DER (masculino), DIE (femenino), DAS (neutro). ¡Es una de las cosas más importantes a aprender!' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "Buenos días" en alemán?', options: ['Guten Abend', 'Guten Tag', 'Guten Morgen', 'Hallo'], correctAnswer: 'Guten Morgen', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Ich ___ Carlos." (me llamo)', correctAnswer: 'heiße', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to German: "Me llamo Ana y soy de Colombia."', correctAnswer: 'Ich heiße Ana und ich komme aus Kolumbien.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Auf Wiedersehen" es:', options: ['Hola', 'Adiós (formal)', 'Por favor', 'Gracias'], correctAnswer: 'Adiós (formal)', xpReward: 10 },
      { type: 'true-false', prompt: '"Bitte" significa solamente "por favor" en alemán.', correctAnswer: false, explanation: '"Bitte" significa tanto "por favor" como "de nada".', xpReward: 10 },
      { type: 'matching', prompt: 'Match German phrases to Spanish', options: ['Danke', 'Bitte', 'Hallo', 'Tschüs'], correctAnswer: { 'Danke': 'Gracias', 'Bitte': 'Por favor/De nada', 'Hallo': 'Hola', 'Tschüs': 'Adiós (informal)' }, xpReward: 20 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['grüßen', 'vorstellen', 'grundlagen']
  },

  {
    languageCode: 'de', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Das Verb "sein" — To Be in German',
    titleEs: 'El verbo "sein" — Ser/Estar en alemán',
    description: 'Learn to conjugate and use the most important German verb.',
    descriptionEs: 'Aprende a conjugar y usar el verbo más importante del alemán.',
    objectives: ['Conjugate "sein" in present tense', 'Make positive and negative sentences', 'Ask yes/no questions'],
    objectivesEs: ['Conjugar "sein" en presente', 'Hacer oraciones positivas y negativas', 'Hacer preguntas de sí/no'],
    content: [
      { type: 'grammar-table', content: 'SEIN (ser/estar):\nich bin = yo soy/estoy\ndu bist = tú eres/estás\ner/sie/es ist = él/ella/eso es/está\nwir sind = nosotros somos/estamos\nihr seid = vosotros sois/estáis\nSie sind = usted(es) es/son (formal)\nsie sind = ellos/ellas son/están' },
      { type: 'example', content: 'Ich bin Student. = Soy estudiante.\nSie ist aus Deutschland. = Ella es de Alemania.\nWir sind müde. = Estamos cansados.\nBist du hungrig? = ¿Tienes hambre? / ¿Estás hambriento?' },
      { type: 'tip', content: 'German CAPITALIZES "Sie" (you - formal) to distinguish it from "sie" (she/they). Very important!', contentEs: 'El alemán escribe "Sie" (usted formal) con mayúscula para distinguirlo de "sie" (ella/ellos). ¡Muy importante!' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Wir ___ Studenten." (somos)', correctAnswer: 'sind', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Er ___ Arzt." (es médico)', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'ist', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to German: "¿Eres estudiante?"', correctAnswer: 'Bist du Student? / Bist du Studentin?', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Ich ___ aus Kolumbien."', correctAnswer: 'bin', xpReward: 10 },
      { type: 'true-false', prompt: '"Sie sind" puede significar tanto "usted es" como "ellos son".', correctAnswer: true, explanation: 'Sí: "Sie sind" = usted es (formal) / ellos son — se distinguen por contexto.', xpReward: 15 },
      { type: 'matching', prompt: 'Match pronouns with sein conjugations', options: ['ich', 'du', 'er', 'wir'], correctAnswer: { 'ich': 'bin', 'du': 'bist', 'er': 'ist', 'wir': 'sind' }, xpReward: 20 }
    ],
    xpReward: 55, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammatik', 'sein', 'verben', 'grundlagen']
  },

  {
    languageCode: 'de', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Zahlen auf Deutsch',
    titleEs: 'Los números en alemán',
    description: 'Learn to count and use numbers in German.',
    descriptionEs: 'Aprende a contar y usar números en alemán.',
    objectives: ['Count from 0 to 100', 'Understand compound numbers', 'Say your age and phone number'],
    objectivesEs: ['Contar del 0 al 100', 'Comprender números compuestos', 'Decir tu edad y número de teléfono'],
    content: [
      { type: 'example', content: '1-10: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn\n11-20: elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig' },
      { type: 'example', content: 'Tens: zwanzig(20), dreißig(30), vierzig(40), fünfzig(50)\nsechzig(60), siebzig(70), achtzig(80), neunzig(90), hundert(100)' },
      { type: 'tip', content: 'IMPORTANT: German reverses compound numbers! 21 = einundzwanzig (one-and-twenty), 45 = fünfundvierzig (five-and-forty). It\'s like "one and twenty" instead of "twenty-one"!', contentEs: '¡IMPORTANTE! El alemán invierte los números compuestos: 21 = einundzwanzig (uno-y-veinte), 45 = fünfundvierzig (cinco-y-cuarenta).' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se escribe "45" en alemán?', options: ['vierzigfünf', 'fünfvierzig', 'fünfundvierzig', 'vierundvierzig'], correctAnswer: 'fünfundvierzig', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Ich habe ___ (23) Bücher." (veintitrés)', correctAnswer: 'dreiundzwanzig', xpReward: 20 },
      { type: 'multiple-choice', prompt: '"Siebenunddreißig" es:', options: ['27', '37', '73', '72'], correctAnswer: '37', explanation: 'sieben (7) + und + dreißig (30) = 37', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Tengo veintiocho años."', correctAnswer: 'Ich bin achtundzwanzig Jahre alt.', xpReward: 20 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['wortschatz', 'zahlen', 'grundlagen']
  },

  {
    languageCode: 'de', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 2,
    title: 'Artikel: der, die, das',
    titleEs: 'Artículos: der, die, das',
    description: 'Learn the German definite and indefinite articles and noun genders.',
    descriptionEs: 'Aprende los artículos definidos e indefinidos alemanes y el género de los sustantivos.',
    objectives: ['Use der, die, das correctly', 'Use ein, eine, ein', 'Learn gender patterns for nouns'],
    objectivesEs: ['Usar der, die, das correctamente', 'Usar ein, eine, ein', 'Aprender patrones de género en sustantivos'],
    content: [
      { type: 'grammar-table', content: 'DEFINITE (el/la):\nder + masculine: der Mann (the man)\ndie + feminine: die Frau (the woman)\ndas + neutral: das Kind (the child)\ndie + all plurals: die Männer (the men)' },
      { type: 'grammar-table', content: 'INDEFINITE (un/una):\nein + masculine: ein Mann (a man)\neine + feminine: eine Frau (a woman)\nein + neutral: ein Kind (a child)\n(no plural form for "ein")' },
      { type: 'tip', content: 'Gender patterns to remember:\n-ung, -heit, -keit → always FEMININE (die)\n-ment, -tum → usually NEUTRAL (das)\n-er (person doing action) → usually MASCULINE (der)\nAlways learn the article WITH the noun!', contentEs: 'Patrones de género:\n-ung, -heit, -keit → siempre FEMENINO (die)\n-ment, -tum → generalmente NEUTRO (das)\nSiempre aprende el artículo CON el sustantivo.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"___ Buch ist interessant." (el libro — das Buch)', correctAnswer: 'Das', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Die Zeitung" (the newspaper) tiene género:', options: ['Masculino', 'Femenino', 'Neutro', 'No tiene género'], correctAnswer: 'Femenino', explanation: '"Zeitung" termina en -ung → siempre femenino (die).', xpReward: 15 },
      { type: 'translation', prompt: 'Translate to German: "Un hombre y una mujer." (indefinite)', correctAnswer: 'Ein Mann und eine Frau.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Ich habe ___ Hund." (un perro — der Hund)', correctAnswer: 'einen', explanation: 'In accusative case, "ein" → "einen" for masculine. (Advanced tip!)', xpReward: 15 },
      { type: 'matching', prompt: 'Match nouns with their definite article', options: ['Mann', 'Frau', 'Kind', 'Buch'], correctAnswer: { 'Mann': 'der', 'Frau': 'die', 'Kind': 'das', 'Buch': 'das' }, xpReward: 20 }
    ],
    xpReward: 60, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammatik', 'artikel', 'genus', 'grundlagen']
  },

  {
    languageCode: 'de', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'Die Familie',
    titleEs: 'La familia en alemán',
    description: 'Learn German vocabulary for family members.',
    descriptionEs: 'Aprende vocabulario alemán para miembros de la familia.',
    objectives: ['Name family members in German', 'Use possessives mein/meine', 'Describe family relationships'],
    objectivesEs: ['Nombrar miembros de la familia en alemán', 'Usar posesivos mein/meine', 'Describir relaciones familiares'],
    content: [
      { type: 'example', content: 'Die Familie:\nder Vater = el padre\ndie Mutter = la madre\nder Bruder = el hermano\ndie Schwester = la hermana\nder Sohn = el hijo\ndie Tochter = la hija\nder Großvater/Opa = el abuelo\ndie Großmutter/Oma = la abuela\nder Onkel = el tío\ndie Tante = la tía\nder Mann = el esposo\ndie Frau = la esposa' },
      { type: 'grammar-table', content: 'Possessives:\nmein (masc./neut.) / meine (fem./plural) = mi/mis\nDer Vater → mein Vater (my father)\nDie Mutter → meine Mutter (my mother)\nDas Kind → mein Kind (my child)\nDie Kinder → meine Kinder (my children)' }
    ],
    exercises: [
      { type: 'translation', prompt: 'Translate to German: "Mi madre se llama Rosa."', correctAnswer: 'Meine Mutter heißt Rosa.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"___ Vater ist Arzt." (mein/meine — masc.)', correctAnswer: 'Mein', xpReward: 10 },
      { type: 'multiple-choice', prompt: '¿Cómo se dice "la hermana" en alemán?', options: ['der Bruder', 'die Schwester', 'die Tochter', 'die Tante'], correctAnswer: 'die Schwester', xpReward: 10 },
      { type: 'matching', prompt: 'Match German family words to Spanish', options: ['Vater', 'Mutter', 'Bruder', 'Tochter'], correctAnswer: { 'Vater': 'Padre', 'Mutter': 'Madre', 'Bruder': 'Hermano', 'Tochter': 'Hija' }, xpReward: 20 },
      { type: 'translation', prompt: 'Translate: "Ich habe zwei Brüder und eine Schwester."', correctAnswer: 'Tengo dos hermanos y una hermana.', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['wortschatz', 'familie', 'possessiv']
  },

  {
    languageCode: 'de', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Lesen: Steckbrief — Profile Text',
    titleEs: 'Lectura: Ficha personal en alemán',
    description: 'Read and understand a personal profile in German.',
    descriptionEs: 'Lee y comprende una ficha personal en alemán.',
    objectives: ['Understand a written self-description', 'Identify personal details', 'Answer comprehension questions'],
    objectivesEs: ['Comprender una autodescripción escrita', 'Identificar detalles personales', 'Responder preguntas de comprensión'],
    content: [
      { type: 'example', content: 'STECKBRIEF:\nName: Tobias Braun\nAlter: 28 Jahre (28 years old)\nKommt aus: München, Deutschland\nBeruf: Lehrer (teacher)\nFamilie: Ich habe eine Schwester. Meine Eltern wohnen in Berlin.\nHobbys: Ich spiele Fußball und ich lese gern Bücher.\nSprachen: Deutsch und ein bisschen Spanisch.\nMotto: "Lernen macht Spaß!" (Learning is fun!)' },
      { type: 'tip', content: 'Key words: Alter=age, Beruf=profession, Familie=family, Hobbys=hobbies, Sprachen=languages', contentEs: 'Palabras clave: Alter=edad, Beruf=profesión, Familie=familia, Hobbys=hobbies, Sprachen=idiomas' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿De dónde es Tobias?', options: ['Berlín', 'Hamburgo', 'Múnich', 'Viena'], correctAnswer: 'Múnich', xpReward: 10 },
      { type: 'multiple-choice', prompt: '¿Cuál es la profesión de Tobias?', options: ['Doctor', 'Profesor', 'Ingeniero', 'Comerciante'], correctAnswer: 'Profesor', xpReward: 10 },
      { type: 'true-false', prompt: 'Tobias habla inglés y alemán.', correctAnswer: false, explanation: 'Tobias habla alemán y un poco de español.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '¿Qué deporte practica Tobias? Él juega ___.', correctAnswer: 'Fußball / fútbol', xpReward: 10 },
      { type: 'translation', prompt: 'Translate from the text: "Lernen macht Spaß!"', correctAnswer: '¡Aprender es divertido! / ¡Aprender es un placer!', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['lesen', 'steckbrief', 'leseverstehen']
  }
];
