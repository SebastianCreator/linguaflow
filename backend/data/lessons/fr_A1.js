// data/lessons/fr_A1.js — French A1 Lessons (8 lecciones)
module.exports = [

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Salutations et présentations',
    titleEs: 'Saludos y presentaciones en francés',
    description: 'Learn essential French greetings and how to introduce yourself.',
    descriptionEs: 'Aprende saludos esenciales en francés y cómo presentarte.',
    objectives: ['Greet people in French', 'Introduce yourself', 'Ask and say where you are from'],
    objectivesEs: ['Saludar personas en francés', 'Presentarte', 'Preguntar y decir de dónde eres'],
    content: [
      { type: 'example', content: 'Greetings / Saludos:\nBonjour = Buenos días / Hola (formal)\nBonsoir = Buenas tardes/noches\nSalut! = ¡Hola! (informal)\nAu revoir = Adiós\nÀ bientôt = Hasta pronto\nÀ demain = Hasta mañana\nMerci = Gracias\nDe rien / Je vous en prie = De nada' },
      { type: 'example', content: 'Introductions:\nJe m\'appelle... = Me llamo...\nMon nom est... = Mi nombre es...\nJ\'ai [âge] ans. = Tengo [edad] años.\nJe suis de... = Soy de...\nComment vous appelez-vous? (formal) = ¿Cómo se llama usted?\nComment tu t\'appelles? (informal) = ¿Cómo te llamas?' },
      { type: 'tip', content: 'French has TWO ways to say "you": VOUS (formal/plural) and TU (informal/singular). With strangers or elders, always use VOUS.', contentEs: 'El francés tiene DOS formas de decir "tú": VOUS (formal/plural) y TU (informal/singular). Con extraños o mayores, usa siempre VOUS.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "Hola" (informal) en francés?', options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'], correctAnswer: 'Salut', explanation: '"Salut" es informal, "Bonjour" es formal.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Je ___ appelle Marie." (me llamo)', correctAnswer: 'm\'', explanation: 'La fórmula correcta es "Je m\'appelle + nombre".', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to French: "Me llamo Carlos y soy de Colombia."', correctAnswer: 'Je m\'appelle Carlos et je suis de Colombie.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Au revoir" significa:', options: ['Hola', 'Gracias', 'Adiós', 'Buenas noches'], correctAnswer: 'Adiós', xpReward: 10 },
      { type: 'true-false', prompt: '"TU" es la forma formal de "vous" en francés.', correctAnswer: false, explanation: 'Al contrario: VOUS es formal, TU es informal.', xpReward: 10 },
      { type: 'matching', prompt: 'Match French greetings to Spanish', options: ['Bonjour', 'Merci', 'Bonsoir', 'À bientôt'], correctAnswer: { 'Bonjour': 'Buenos días', 'Merci': 'Gracias', 'Bonsoir': 'Buenas tardes/noches', 'À bientôt': 'Hasta pronto' }, xpReward: 20 },
      { type: 'translation', prompt: 'Translate: "¿De dónde eres?" (informal)', correctAnswer: 'Tu es d\'où? / D\'où tu viens?', xpReward: 15 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['saludos', 'presentaciones', 'básico']
  },

  {
    languageCode: 'fr', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Être et Avoir — Les verbes essentiels',
    titleEs: 'Être y Avoir — Los verbos esenciales',
    description: 'Master the two most important French verbs: être (to be) and avoir (to have).',
    descriptionEs: 'Domina los dos verbos más importantes del francés: être (ser/estar) y avoir (tener).',
    objectives: ['Conjugate être in present tense', 'Conjugate avoir in present tense', 'Use these verbs in sentences'],
    objectivesEs: ['Conjugar être en presente', 'Conjugar avoir en presente', 'Usar estos verbos en oraciones'],
    content: [
      { type: 'grammar-table', content: 'ÊTRE (to be):\nje suis = yo soy/estoy\ntu es = tú eres/estás\nil/elle est = él/ella es/está\nnous sommes = nosotros somos/estamos\nvous êtes = ustedes/usted son/están\nils/elles sont = ellos/ellas son/están' },
      { type: 'grammar-table', content: 'AVOIR (to have):\nj\'ai = yo tengo\ntu as = tú tienes\nil/elle a = él/ella tiene\nnous avons = nosotros tenemos\nvous avez = ustedes/usted tienen\nils/elles ont = ellos/ellas tienen' },
      { type: 'tip', content: 'In French, "j\'" is used before vowels: j\'ai (not je ai). This is called ÉLISION.', contentEs: 'En francés, "j\'" se usa antes de vocales: j\'ai (no je ai). Esto se llama ÉLISIÓN.' },
      { type: 'example', content: 'Je suis médecin. = Soy médico.\nElle est de Paris. = Ella es de París.\nNous avons une voiture. = Tenemos un carro.\nIl a vingt ans. = Él tiene veinte años.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Nous ___ étudiants." (somos)', correctAnswer: 'sommes', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"J\'___ vingt ans." (tengo)', options: ['suis', 'es', 'ai', 'a'], correctAnswer: 'ai', explanation: '"Avoir" se usa para decir la edad en francés.', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to French: "Ella es profesora."', correctAnswer: 'Elle est professeure. / Elle est professeur.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Vous ___ un appartement?" (tienen)', correctAnswer: 'avez', xpReward: 10 },
      { type: 'true-false', prompt: '"Je suis 25 ans" es correcto para decir "Tengo 25 años".', correctAnswer: false, explanation: 'En francés la edad usa AVOIR: "J\'ai 25 ans." (No "être").', xpReward: 15 },
      { type: 'matching', prompt: 'Match être conjugations', options: ['je', 'tu', 'nous', 'ils'], correctAnswer: { 'je': 'suis', 'tu': 'es', 'nous': 'sommes', 'ils': 'sont' }, xpReward: 20 }
    ],
    xpReward: 55, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammaire', 'être', 'avoir', 'verbes-essentiels']
  },

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Les chiffres et les nombres',
    titleEs: 'Los números en francés',
    description: 'Learn to count and use numbers in French.',
    descriptionEs: 'Aprende a contar y usar números en francés.',
    objectives: ['Count from 0 to 100', 'Say phone numbers and prices', 'Understand French number system (especially 70, 80, 90)'],
    objectivesEs: ['Contar del 0 al 100', 'Decir números de teléfono y precios', 'Entender el sistema numérico francés (especialmente 70, 80, 90)'],
    content: [
      { type: 'example', content: '1-20: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix\nonze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt' },
      { type: 'example', content: 'Tens: vingt(20), trente(30), quarante(40), cinquante(50), soixante(60)\nsoixante-dix(70)=60+10, quatre-vingts(80)=4x20, quatre-vingt-dix(90)=4x20+10' },
      { type: 'tip', content: 'IMPORTANT: French counts differently for 70, 80, 90!\n70 = soixante-dix (sixty-ten)\n80 = quatre-vingts (four-twenties)\n90 = quatre-vingt-dix (four-twenty-ten)', contentEs: '¡IMPORTANTE! El francés cuenta diferente para 70, 80, 90!\n70 = soixante-dix (sesenta-diez)\n80 = quatre-vingts (cuatro-veintes)\n90 = quatre-vingt-dix (cuatro-veinte-diez)' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "70" en francés?', options: ['septante', 'soixante-dix', 'soixante-dix-dix', 'sept-dix'], correctAnswer: 'soixante-dix', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Quatre-___" = 80', correctAnswer: 'vingts', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Cinquante" en número es:', options: ['15', '50', '500', '55'], correctAnswer: '50', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to French: "Tengo noventa euros."', correctAnswer: 'J\'ai quatre-vingt-dix euros.', xpReward: 20 },
      { type: 'multiple-choice', prompt: '¿Cuánto es "quatre-vingt-cinq"?', options: ['75', '80', '85', '95'], correctAnswer: '85', explanation: 'quatre-vingt (80) + cinq (5) = 85', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'nombres', 'compter']
  },

  {
    languageCode: 'fr', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 1,
    title: 'Articles définis et indéfinis',
    titleEs: 'Artículos definidos e indefinidos en francés',
    description: 'Learn French articles and their gender agreement.',
    descriptionEs: 'Aprende los artículos franceses y su concordancia de género.',
    objectives: ['Use le, la, les (definite articles)', 'Use un, une, des (indefinite articles)', 'Understand masculine/feminine nouns'],
    objectivesEs: ['Usar le, la, les (artículos definidos)', 'Usar un, une, des (artículos indefinidos)', 'Comprender sustantivos masculinos/femeninos'],
    content: [
      { type: 'grammar-table', content: 'DEFINITE (el/la/los/las):\nle + masculine singular: le livre (the book)\nla + feminine singular: la femme (the woman)\nl\' + vowel sound: l\'ami, l\'école\nles + all plurals: les enfants (the children)' },
      { type: 'grammar-table', content: 'INDEFINITE (un/una/unos/unas):\nun + masculine singular: un homme (a man)\nune + feminine singular: une fille (a girl)\ndes + all plurals: des livres (some books)' },
      { type: 'tip', content: 'In French, ALL nouns have gender (masculine or feminine). There\'s no neutral! Learn articles WITH the noun: "le livre" not just "livre".', contentEs: 'En francés, TODOS los sustantivos tienen género (masculino o femenino). ¡No hay neutro! Aprende los artículos CON el sustantivo.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"___ chat est noir." (el gato — masculino)', correctAnswer: 'Le', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Une" se usa con:', options: ['Masculino singular', 'Femenino singular', 'Plural', 'Antes de vocal'], correctAnswer: 'Femenino singular', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"J\'ai ___ ami à Paris." (un amigo — masculino)', correctAnswer: 'un', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to French: "La madre tiene un libro."', correctAnswer: 'La mère a un livre.', xpReward: 15 },
      { type: 'true-false', prompt: '"Le" se usa antes de una vocal: "le école"', correctAnswer: false, explanation: 'Antes de vocal, se usa L\': "l\'école" (not "le école").', xpReward: 15 },
      { type: 'matching', prompt: 'Match articles with their use', options: ['le', 'la', 'un', 'des'], correctAnswer: { 'le': 'def. masc. sing.', 'la': 'def. fem. sing.', 'un': 'indef. masc. sing.', 'des': 'indef. plural' }, xpReward: 20 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['grammaire', 'articles', 'genre', 'français']
  },

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'La famille en français',
    titleEs: 'La familia en francés',
    description: 'Learn vocabulary for family members in French.',
    descriptionEs: 'Aprende vocabulario para miembros de la familia en francés.',
    objectives: ['Name all immediate family members in French', 'Use possessive adjectives', 'Describe family relationships'],
    objectivesEs: ['Nombrar todos los miembros de la familia inmediata en francés', 'Usar adjetivos posesivos', 'Describir relaciones familiares'],
    content: [
      { type: 'example', content: 'La famille:\nle père = el padre\nla mère = la madre\nle frère = el hermano\nla sœur = la hermana\nle fils = el hijo\nla fille = la hija\nle grand-père = el abuelo\nla grand-mère = la abuela\nl\'oncle = el tío\nla tante = la tía\nle cousin/la cousine = el primo/la prima\nle mari = el esposo\nla femme = la esposa/mujer' },
      { type: 'grammar-table', content: 'Possessive adjectives (my/your/his/her):\nmon (masc.) / ma (fem.) / mes (plural) = mi/mis\nton / ta / tes = tu/tus (informal)\nson / sa / ses = su/sus (él/ella)' },
      { type: 'tip', content: 'Remember: "ma" before feminine nouns EXCEPT before a vowel → use "mon": "mon amie" (not "ma amie").', contentEs: 'Recuerda: "ma" antes de sustantivos femeninos EXCEPTO antes de vocal → usa "mon": "mon amie" (no "ma amie").' }
    ],
    exercises: [
      { type: 'translation', prompt: 'Translate to French: "Mi padre se llama Pedro."', correctAnswer: 'Mon père s\'appelle Pedro.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '¿Cómo se dice "la hermana" en francés?', options: ['le frère', 'la fille', 'la sœur', 'la tante'], correctAnswer: 'la sœur', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"___ sœur est médecin." (mi hermana — fem.)', correctAnswer: 'Ma', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Tengo dos hermanos y una hermana."', correctAnswer: 'J\'ai deux frères et une sœur.', xpReward: 15 },
      { type: 'matching', prompt: 'Match French family words to Spanish', options: ['père', 'mère', 'frère', 'fils'], correctAnswer: { 'père': 'padre', 'mère': 'madre', 'frère': 'hermano', 'fils': 'hijo' }, xpReward: 20 },
      { type: 'true-false', prompt: '"Mon amie" es correcto aunque "amie" es femenino.', correctAnswer: true, explanation: 'Antes de vocal, "mon" reemplaza a "ma": mon amie (no ma amie).', xpReward: 10 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'famille', 'adjectifs-possessifs']
  },

  {
    languageCode: 'fr', level: 'A1', module: 'grammar',
    order: 3, unitNumber: 2,
    title: 'Le présent des verbes en -ER',
    titleEs: 'El presente de los verbos en -ER',
    description: 'Learn to conjugate regular -ER verbs in French present tense.',
    descriptionEs: 'Aprende a conjugar verbos regulares en -ER en presente en francés.',
    objectives: ['Identify -ER verbs', 'Remove -ER and add correct endings', 'Use common -ER verbs in sentences'],
    objectivesEs: ['Identificar verbos en -ER', 'Quitar -ER y agregar terminaciones correctas', 'Usar verbos comunes en -ER en oraciones'],
    content: [
      { type: 'grammar-table', content: 'PARLER (hablar) — endings: -e, -es, -e, -ons, -ez, -ent\nje parle = yo hablo\ntu parles = tú hablas\nil/elle parle = él/ella habla\nnous parlons = nosotros hablamos\nvous parlez = ustedes hablan\nils/elles parlent = ellos/ellas hablan' },
      { type: 'example', content: 'Common -ER verbs:\ntravailler=trabajar, manger=comer, habiter=vivir\naimer=gustar/amar, écouter=escuchar, regarder=mirar\nparler=hablar, étudier=estudiar, voyager=viajar' },
      { type: 'tip', content: 'The endings -e, -es, -ent are SILENT in spoken French. "je parle", "tu parles", "ils parlent" all sound the same!', contentEs: 'Las terminaciones -e, -es, -ent son MUDAS en francés hablado. ¡"je parle", "tu parles", "ils parlent" suenan igual!' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Nous ___ (habiter) à Bogotá."', correctAnswer: 'habitons', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Tu ___ (travailler) dans un hôpital?"', options: ['travaille', 'travailles', 'travaillons', 'travaillez'], correctAnswer: 'travailles', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to French: "Ella estudia inglés."', correctAnswer: 'Elle étudie l\'anglais.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Vous ___ (parler) espagnol?"', correctAnswer: 'parlez', xpReward: 10 },
      { type: 'true-false', prompt: '"Ils mangent" y "je mange" suenan igual en francés hablado.', correctAnswer: true, explanation: 'Las terminaciones -e y -ent son mudas, así que suenan igual.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Viajamos mucho en verano."', correctAnswer: 'Nous voyageons beaucoup en été.', xpReward: 20 }
    ],
    xpReward: 60, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammaire', 'verbes-ER', 'présent', 'conjugaison']
  },

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 4, unitNumber: 2,
    title: 'Les couleurs et les adjectifs',
    titleEs: 'Los colores y adjetivos en francés',
    description: 'Learn colors and adjectives with gender agreement in French.',
    descriptionEs: 'Aprende colores y adjetivos con concordancia de género en francés.',
    objectives: ['Name 10 colors in French', 'Apply gender agreement to adjectives', 'Describe people and objects'],
    objectivesEs: ['Nombrar 10 colores en francés', 'Aplicar concordancia de género en adjetivos', 'Describir personas y objetos'],
    content: [
      { type: 'example', content: 'Couleurs:\nrouge=rojo, bleu/bleue=azul, vert/verte=verde, jaune=amarillo\nnoir/noire=negro, blanc/blanche=blanco, orange=naranja\nrose=rosado, violet/violette=morado, marron=marrón' },
      { type: 'grammar-table', content: 'Adjective gender agreement:\nMASC: un chat noir (a black cat)\nFEM: une voiture noire (a black car)\n\nMost adjectives add -E for feminine:\nvert → verte (green)\nblanc → blanche (white)\nviolet → violette (purple)' },
      { type: 'tip', content: 'In French, adjectives usually come AFTER the noun (opposite to English): "une robe rouge" (a red dress) — NOT "une rouge robe".', contentEs: 'En francés, los adjetivos generalmente van DESPUÉS del sustantivo: "une robe rouge" (un vestido rojo) — NO "une rouge robe".' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Une voiture ___ (bleu — fem.)" = Un carro azul', correctAnswer: 'bleue', xpReward: 10 },
      { type: 'multiple-choice', prompt: '¿Cómo se dice "un gato negro" en francés?', options: ['un chat noire', 'un chat noir', 'une chat noir', 'un noire chat'], correctAnswer: 'un chat noir', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to French: "Ella lleva un vestido verde."', correctAnswer: 'Elle porte une robe verte.', xpReward: 15 },
      { type: 'true-false', prompt: 'En francés los adjetivos van antes del sustantivo.', correctAnswer: false, explanation: 'En francés los adjetivos van generalmente DESPUÉS del sustantivo: "un livre rouge" (not "un rouge livre").', xpReward: 10 },
      { type: 'matching', prompt: 'Match French colors to Spanish', options: ['rouge', 'blanc', 'vert', 'jaune'], correctAnswer: { 'rouge': 'rojo', 'blanc': 'blanco', 'vert': 'verde', 'jaune': 'amarillo' }, xpReward: 20 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'couleurs', 'adjectifs', 'genre']
  },

  {
    languageCode: 'fr', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Lecture: Textes simples sur Paris',
    titleEs: 'Lectura: Textos simples sobre París',
    description: 'Read short texts about Paris and French culture.',
    descriptionEs: 'Lee textos cortos sobre París y la cultura francesa.',
    objectives: ['Read simple French texts', 'Identify key information', 'Understand cultural references'],
    objectivesEs: ['Leer textos simples en francés', 'Identificar información clave', 'Comprender referencias culturales'],
    content: [
      { type: 'example', content: 'TEXTE:\nJe m\'appelle Sophie. J\'ai 22 ans et j\'habite à Paris, la capitale de la France. Paris est une très belle ville. Il y a beaucoup de monuments célèbres: la Tour Eiffel, le Louvre et Notre-Dame.\n\nJ\'aime beaucoup Paris. Le matin, je mange un croissant et je bois un café. Ensuite, je prends le métro pour aller au travail. Je travaille dans un restaurant.\n\nLe soir, je regarde la télévision ou je lis un livre. Le week-end, je visite des musées avec mes amis. Paris est magnifique!' },
      { type: 'tip', content: 'Key words to know: il y a = there is/are, beaucoup de = many/a lot of, ensuite = then/next, le soir = in the evening', contentEs: 'Palabras clave: il y a = hay, beaucoup de = mucho/muchos, ensuite = luego, le soir = por la noche' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Dónde vive Sophie?', options: ['Lyon', 'Marsella', 'París', 'Burdeos'], correctAnswer: 'París', xpReward: 10 },
      { type: 'multiple-choice', prompt: '¿Dónde trabaja Sophie?', options: ['En un museo', 'En un hospital', 'En un restaurante', 'En un banco'], correctAnswer: 'En un restaurante', xpReward: 10 },
      { type: 'true-false', prompt: 'Sophie desayuna croissant y café por la mañana.', correctAnswer: true, xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Il y a beaucoup de monuments" significa:', options: ['No hay monumentos', 'Hay muchos monumentos', 'Hay pocos monumentos', 'Los monumentos son feos'], correctAnswer: 'Hay muchos monumentos', xpReward: 10 },
      { type: 'translation', prompt: 'Translate from the text: "Le week-end, je visite des musées avec mes amis."', correctAnswer: 'El fin de semana, visito museos con mis amigos.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: 'La capital de Francia es ___', correctAnswer: 'París / Paris', xpReward: 5 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['lecture', 'Paris', 'culture', 'compréhension']
  }
];
