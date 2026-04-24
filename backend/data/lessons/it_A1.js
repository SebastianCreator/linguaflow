// data/lessons/it_A1.js — Italian A1 Lessons (6 lecciones)
module.exports = [

  {
    languageCode: 'it', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Saluti e Presentazioni',
    titleEs: 'Saludos y presentaciones en italiano',
    description: 'Learn essential Italian greetings and self-introductions.',
    descriptionEs: 'Aprende saludos esenciales en italiano y presentaciones.',
    objectives: ['Greet in Italian formally and informally', 'Introduce yourself', 'Use basic courtesy phrases'],
    objectivesEs: ['Saludar en italiano formal e informalmente', 'Presentarte', 'Usar frases de cortesía básicas'],
    content: [
      { type: 'example', content: 'Saluti (Saludos):\nBuongiorno = Buenos días / Buenas tardes\nBuonasera = Buenas tardes/noches\nBuonanotte = Buenas noches (al despedirse)\nCiao = Hola / Adiós (informal)\nArrivederci = Adiós (formal)\nGrazie / Grazie mille = Gracias / Muchas gracias\nPrego = De nada / Por favor\nScusi (formal) / Scusa (informal) = Disculpe' },
      { type: 'example', content: 'Presentazioni:\nMi chiamo... = Me llamo...\nMi nome è... = Mi nombre es...\nHo [età] anni. = Tengo [edad] años.\nSono di... = Soy de...\nCome si chiama? (formal) = ¿Cómo se llama?\nCome ti chiami? (informal) = ¿Cómo te llamas?\nPiacere di conoscerti! = ¡Mucho gusto!' },
      { type: 'tip', content: '"Ciao" is used for BOTH hello and goodbye with friends (like Spanish "chao"). "Buongiorno" = good morning/good day (until ~4-5pm). "Buonasera" = good evening (after ~4-5pm).', contentEs: '"Ciao" se usa para TANTO hola como adiós con amigos (como "chao" en español). "Buongiorno" = buenos días (hasta ~4-5pm). "Buonasera" = buenas tardes/noches.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "hola" y "adiós" (informal) en italiano?', options: ['Buongiorno', 'Arrivederci', 'Ciao', 'Prego'], correctAnswer: 'Ciao', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Mi ___ María." (me llamo)', correctAnswer: 'chiamo', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to Italian: "Me llamo Carlos y soy de Colombia."', correctAnswer: 'Mi chiamo Carlos e sono della Colombia.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Prego" significa:', options: ['Gracias', 'De nada / Por favor', 'Hola', 'Adiós'], correctAnswer: 'De nada / Por favor', xpReward: 10 },
      { type: 'matching', prompt: 'Match Italian to Spanish', options: ['Ciao', 'Grazie', 'Buongiorno', 'Arrivederci'], correctAnswer: { 'Ciao': 'Hola/Adiós (inf.)', 'Grazie': 'Gracias', 'Buongiorno': 'Buenos días', 'Arrivederci': 'Adiós (formal)' }, xpReward: 20 },
      { type: 'true-false', prompt: '"Buonanotte" se usa para saludar por la mañana.', correctAnswer: false, explanation: '"Buonanotte" = buenas noches, se usa al despedirse en la noche.', xpReward: 10 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'saluti', 'presentazioni', 'base']
  },

  {
    languageCode: 'it', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Essere e Avere — Verbi Essenziali',
    titleEs: 'Essere y Avere — Verbos esenciales en italiano',
    description: 'Learn the two most fundamental Italian verbs.',
    descriptionEs: 'Aprende los dos verbos más fundamentales del italiano.',
    objectives: ['Conjugate essere (to be) in present', 'Conjugate avere (to have) in present', 'Use them in basic sentences'],
    objectivesEs: ['Conjugar essere (ser/estar) en presente', 'Conjugar avere (tener) en presente', 'Usarlos en oraciones básicas'],
    content: [
      { type: 'grammar-table', content: 'ESSERE (ser/estar):\nio sono = yo soy/estoy\ntu sei = tú eres/estás\nlui/lei è = él/ella es/está\nnoi siamo = nosotros somos/estamos\nvoi siete = vosotros sois/estáis\nloro sono = ellos/ellas son/están' },
      { type: 'grammar-table', content: 'AVERE (tener):\nio ho = yo tengo\ntu hai = tú tienes\nlui/lei ha = él/ella tiene\nnoi abbiamo = nosotros tenemos\nvoi avete = vosotros tenéis\nloro hanno = ellos/ellas tienen' },
      { type: 'tip', content: 'Like French, Italian uses AVERE (not essere) to express age: "Ho venti anni." (I am twenty years old). Also: "Ho fame/sete" (I\'m hungry/thirsty) — using avere!', contentEs: 'Como el francés, el italiano usa AVERE (no essere) para la edad: "Ho venti anni." También: "Ho fame/sete" (Tengo hambre/sed) — ¡usando avere!' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Noi ___ studenti." (somos — essere)', correctAnswer: 'siamo', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Io ___ venticinque anni." (tengo — edad)', options: ['sono', 'sei', 'ho', 'ha'], correctAnswer: 'ho', explanation: 'En italiano, la edad usa AVERE: "ho [X] anni".', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to Italian: "Ella es médica."', correctAnswer: 'Lei è medica. / Lei è una medica.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Voi ___ un bel appartamento." (tienen — avere)', correctAnswer: 'avete', xpReward: 10 },
      { type: 'true-false', prompt: '"Io sono 30 anni" es correcto para "Tengo 30 años".', correctAnswer: false, explanation: 'Correcto: "Io HO 30 anni." La edad usa AVERE en italiano.', xpReward: 15 },
      { type: 'matching', prompt: 'Match essere conjugations', options: ['io', 'tu', 'noi', 'loro'], correctAnswer: { 'io': 'sono', 'tu': 'sei', 'noi': 'siamo', 'loro': 'sono' }, xpReward: 20 }
    ],
    xpReward: 55, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammatica', 'essere', 'avere', 'verbi-essenziali']
  },

  {
    languageCode: 'it', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'I Numeri in Italiano',
    titleEs: 'Los números en italiano',
    description: 'Learn to count and use numbers in Italian.',
    descriptionEs: 'Aprende a contar y usar números en italiano.',
    objectives: ['Count from 0 to 100', 'Understand Italian number formation', 'Say ages and prices'],
    objectivesEs: ['Contar del 0 al 100', 'Comprender la formación de números italianos', 'Decir edades y precios'],
    content: [
      { type: 'example', content: '1-10: uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci\n11-20: undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti' },
      { type: 'example', content: 'Tens: venti(20), trenta(30), quaranta(40), cinquanta(50)\nsessanta(60), settanta(70), ottanta(80), novanta(90), cento(100)' },
      { type: 'tip', content: 'Italian drops the final vowel when adding 1 or 8:\nventi + uno = ventuno (not ventUNO)\ntrenta + otto = trentotto (not trentaotto)\nThis applies to all tens!', contentEs: 'El italiano elimina la vocal final al agregar 1 u 8:\nventi + uno = ventuno (no venti-uno)\ntrenta + otto = trentotto (no trenta-otto)' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "21" en italiano?', options: ['ventiuno', 'ventuno', 'venti-uno', 'ventisette'], correctAnswer: 'ventuno', explanation: 'Venti + uno → se elimina la "i" → ventuno.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Ho ___ (38) anni."', correctAnswer: 'trentotto', explanation: 'Trenta + otto → se elimina la "a" → trentotto.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Ottanta" es:', options: ['18', '8', '80', '800'], correctAnswer: '80', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Tengo cuarenta y cinco años."', correctAnswer: 'Ho quarantacinque anni.', xpReward: 15 }
    ],
    xpReward: 50, totalDurationMinutes: 10, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'numeri', 'base']
  },

  {
    languageCode: 'it', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 1,
    title: 'Articoli e Genere dei Nomi',
    titleEs: 'Artículos y género de los sustantivos en italiano',
    description: 'Learn Italian articles and noun gender.',
    descriptionEs: 'Aprende artículos y género de sustantivos en italiano.',
    objectives: ['Use il, la, i, le (definite articles)', 'Use un, uno, una (indefinite articles)', 'Identify masculine and feminine nouns'],
    objectivesEs: ['Usar il, la, i, le (artículos definidos)', 'Usar un, uno, una (artículos indefinidos)', 'Identificar sustantivos masculinos y femeninos'],
    content: [
      { type: 'grammar-table', content: 'DEFINITE ARTICLES (el/la/los/las):\nil + masc. singular: il libro (the book)\nlo + masc. sing. before s+consonant/z: lo studente\nl\' + vowel: l\'amico (the friend)\nla + fem. singular: la donna (the woman)\ni + masc. plural: i libri (the books)\ngli + masc. plural (vowel/s+c/z): gli studenti\nle + fem. plural: le donne (the women)' },
      { type: 'grammar-table', content: 'INDEFINITE ARTICLES (un/una):\nun + masc. singular: un libro (a book)\nuno + masc. sing. before s+c/z: uno studente\nuna + fem. singular: una donna (a woman)\nun\' + fem. before vowel: un\'amica (a female friend)' },
      { type: 'tip', content: 'Gender patterns: nouns ending in -o → usually masculine; nouns ending in -a → usually feminine. Nouns in -e can be either!', contentEs: 'Patrones de género: sustantivos en -o → generalmente masculino; sustantivos en -a → generalmente femenino. ¡Los en -e pueden ser cualquiera!' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"___ libro è interessante." (el libro — masc.)', correctAnswer: 'Il', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Una" se usa con:', options: ['Masculino singular', 'Femenino singular', 'Plural', 'Antes de vocal masculina'], correctAnswer: 'Femenino singular', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to Italian: "El hombre y la mujer."', correctAnswer: 'L\'uomo e la donna.', explanation: '"uomo" starts with vowel → l\'uomo', xpReward: 15 },
      { type: 'matching', prompt: 'Match Italian articles with their usage', options: ['il', 'la', 'un', 'una'], correctAnswer: { 'il': 'def. masc. sing.', 'la': 'def. fem. sing.', 'un': 'indef. masc. sing.', 'una': 'indef. fem. sing.' }, xpReward: 20 },
      { type: 'true-false', prompt: '"La problema" es correcto (problema = problema).', correctAnswer: false, explanation: '"Problema" en italiano es MASCULINO: "il problema" (not "la"). Excepción de la regla -a!', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['grammatica', 'articoli', 'genere', 'base']
  },

  {
    languageCode: 'it', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'La Famiglia',
    titleEs: 'La familia en italiano',
    description: 'Learn Italian vocabulary for family members.',
    descriptionEs: 'Aprende vocabulario italiano para miembros de la familia.',
    objectives: ['Name family members in Italian', 'Use possessives mio/mia', 'Talk about your family'],
    objectivesEs: ['Nombrar miembros de la familia en italiano', 'Usar posesivos mio/mia', 'Hablar sobre tu familia'],
    content: [
      { type: 'example', content: 'La famiglia:\nil padre = el padre\nla madre = la madre\nil fratello = el hermano\nla sorella = la hermana\nil figlio = el hijo\nla figlia = la hija\nil nonno = el abuelo\nla nonna = la abuela\nlo zio = el tío\nla zia = la tía\nil marito = el esposo\nla moglie = la esposa' },
      { type: 'grammar-table', content: 'Possessives (WITH article for most family):\nmio padre / mia madre = mi padre/madre\nmio fratello / mia sorella = mi hermano/hermana\n\nEXCEPTION: NO article for singular immediate family:\nmio padre (not il mio padre)\nbut: il mio cane (my dog — not family)' }
    ],
    exercises: [
      { type: 'translation', prompt: 'Translate to Italian: "Mi madre es profesora."', correctAnswer: 'Mia madre è professoressa.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"___ sorella si chiama Anna." (mi hermana)', correctAnswer: 'Mia', xpReward: 10 },
      { type: 'matching', prompt: 'Match Italian family words to Spanish', options: ['padre', 'madre', 'fratello', 'nonna'], correctAnswer: { 'padre': 'padre', 'madre': 'madre', 'fratello': 'hermano', 'nonna': 'abuela' }, xpReward: 20 },
      { type: 'true-false', prompt: '"Il mio padre" es correcto en italiano.', correctAnswer: false, explanation: 'Para familia inmediata en singular: NO artículo. Correcto: "Mio padre".', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Tengo un hermano y dos hermanas."', correctAnswer: 'Ho un fratello e due sorelle.', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'famiglia', 'possessivi']
  },

  {
    languageCode: 'it', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Lettura: Una Giornata a Roma',
    titleEs: 'Lectura: Un día en Roma',
    description: 'Read a short text about a day in Rome.',
    descriptionEs: 'Lee un texto corto sobre un día en Roma.',
    objectives: ['Understand a simple Italian text', 'Identify routine activities', 'Answer comprehension questions'],
    objectivesEs: ['Comprender un texto italiano simple', 'Identificar actividades rutinarias', 'Responder preguntas de comprensión'],
    content: [
      { type: 'example', content: 'TESTO:\nCiao! Mi chiamo Giulia. Ho 24 anni e abito a Roma, la capitale d\'Italia. Roma è una città bellissima!\n\nDi mattina, mi alzo alle sette e faccio colazione. Poi prendo l\'autobus per andare all\'università. Sono studentessa di architettura.\n\nIl pomeriggio, studio in biblioteca o passeggio nel centro storico. La sera, ceno con la mia famiglia o vedo i miei amici.\n\nRoma ha monumenti incredibili: il Colosseo, il Vaticano, la Fontana di Trevi. Mi piace moltissimo vivere qui!' },
      { type: 'tip', content: 'Key words: abito = vivo, mi alzo = me levanto, faccio colazione = desayuno, mi piace = me gusta, moltissimo = muchísimo', contentEs: 'Palabras clave: abito = vivo, mi alzo = me levanto, faccio colazione = desayuno, mi piace = me gusta, moltissimo = muchísimo' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Qué estudia Giulia?', options: ['Medicina', 'Arquitectura', 'Ingeniería', 'Lenguas'], correctAnswer: 'Arquitectura', xpReward: 10 },
      { type: 'multiple-choice', prompt: '¿A qué hora se levanta Giulia?', options: ['A las seis', 'A las siete', 'A las ocho', 'A las cinco'], correctAnswer: 'A las siete', xpReward: 10 },
      { type: 'true-false', prompt: 'Giulia toma el metro para ir a la universidad.', correctAnswer: false, explanation: 'Giulia toma el autobús: "Poi prendo l\'autobus".', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Según el texto, ¿cuál monumento NO se menciona?', options: ['El Coliseo', 'El Vaticano', 'La Torre Eiffel', 'La Fontana de Trevi'], correctAnswer: 'La Torre Eiffel', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Mi piace moltissimo vivere qui!"', correctAnswer: '¡Me gusta muchísimo vivir aquí!', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['lettura', 'Roma', 'comprensione', 'base']
  }
];
