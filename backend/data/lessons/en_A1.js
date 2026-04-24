// data/lessons/en_A1.js — English A1 Lessons (12 lecciones)
module.exports = [

  // ── VOCABULARY ─────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Greetings & Introductions',
    titleEs: 'Saludos y presentaciones',
    description: 'Learn how to greet people and introduce yourself.',
    descriptionEs: 'Aprende a saludar personas y presentarte.',
    objectives: ['Say hello and goodbye', 'Introduce yourself by name', 'Ask someone\'s name'],
    objectivesEs: ['Decir hola y adiós', 'Presentarte con tu nombre', 'Preguntar el nombre de alguien'],
    content: [
      { type: 'text', content: 'Greetings in English:', contentEs: 'Saludos en inglés:' },
      { type: 'example', content: 'Hello / Hi → Hola\nGood morning → Buenos días\nGood afternoon → Buenas tardes\nGood evening → Buenas noches\nGoodbye / Bye → Adiós\nSee you later → Hasta luego\nHow are you? → ¿Cómo estás?' },
      { type: 'tip', content: 'Use "Hi" with friends, "Hello" in formal situations.', contentEs: 'Usa "Hi" con amigos, "Hello" en situaciones formales.' },
      { type: 'example', content: 'Introducing yourself:\nMy name is Ana. → Me llamo Ana.\nI am a student. → Soy estudiante.\nNice to meet you! → ¡Mucho gusto!\nWhat is your name? → ¿Cómo te llamas?' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'How do you say "Buenos días" in English?', options: ['Good night', 'Good morning', 'Good afternoon', 'Hello'], correctAnswer: 'Good morning', explanation: 'Good morning is used from sunrise to noon.', explanationEs: 'Good morning se usa desde el amanecer hasta el mediodía.', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Which greeting is INFORMAL?', options: ['Good evening', 'Hello', 'Hi', 'Good morning'], correctAnswer: 'Hi', explanation: '"Hi" is casual/informal, used with friends.', explanationEs: '"Hi" es casual/informal, se usa con amigos.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: 'Complete: "My ___ is Carlos."', correctAnswer: 'name', explanation: '"My name is..." is the standard self-introduction.', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to English: "¿Cómo te llamas?"', correctAnswer: 'What is your name?', explanation: 'This is the standard way to ask someone\'s name.', explanationEs: 'Esta es la forma estándar de preguntar el nombre.', xpReward: 15 },
      { type: 'true-false', prompt: '"Good evening" is used in the morning.', correctAnswer: false, explanation: '"Good evening" is used after sunset, in the evening/night.', explanationEs: '"Good evening" se usa después del atardecer.', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'How do you respond to "How are you?"', options: ['My name is John', 'I am fine, thank you!', 'Good morning', 'Goodbye'], correctAnswer: 'I am fine, thank you!', explanation: 'The standard response is "I am fine, thank you."', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Mucho gusto"', correctAnswer: 'Nice to meet you', explanation: '"Nice to meet you" expresses pleasure when meeting someone.', xpReward: 15 },
      { type: 'matching', prompt: 'Match the greetings with their Spanish translations', options: ['Hello', 'Goodbye', 'Good morning', 'See you later'], correctAnswer: { 'Hello': 'Hola', 'Goodbye': 'Adiós', 'Good morning': 'Buenos días', 'See you later': 'Hasta luego' }, xpReward: 20 }
    ],
    xpReward: 50, totalDurationMinutes: 10, offlineAvailable: true, isPublished: true,
    tags: ['greetings', 'introductions', 'basic']
  },

  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Numbers 1–100',
    titleEs: 'Números del 1 al 100',
    description: 'Learn to count and use numbers in everyday situations.',
    descriptionEs: 'Aprende a contar y usar números en situaciones cotidianas.',
    objectives: ['Count from 1 to 100', 'Say your age and phone number', 'Use numbers in context'],
    objectivesEs: ['Contar del 1 al 100', 'Decir tu edad y número de teléfono', 'Usar números en contexto'],
    content: [
      { type: 'text', content: 'Cardinal numbers 1–20:', contentEs: 'Números cardinales del 1 al 20:' },
      { type: 'example', content: '1=one, 2=two, 3=three, 4=four, 5=five\n6=six, 7=seven, 8=eight, 9=nine, 10=ten\n11=eleven, 12=twelve, 13=thirteen, 14=fourteen, 15=fifteen\n16=sixteen, 17=seventeen, 18=eighteen, 19=nineteen, 20=twenty' },
      { type: 'text', content: 'Tens (20–100):', contentEs: 'Decenas (20–100):' },
      { type: 'example', content: '20=twenty, 30=thirty, 40=forty, 50=fifty\n60=sixty, 70=seventy, 80=eighty, 90=ninety, 100=one hundred' },
      { type: 'tip', content: 'For 21–99: say the ten + the unit. Example: 25 = twenty-five, 43 = forty-three', contentEs: 'Para 21–99: di la decena + la unidad. Ej: 25=twenty-five, 43=forty-three' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'How do you say "15" in English?', options: ['Fifty', 'Fifteen', 'Five', 'Fiveteen'], correctAnswer: 'Fifteen', xpReward: 10 },
      { type: 'fill-in-blank', prompt: 'Write the number: "___-three" = 43', correctAnswer: 'forty', explanation: '43 = forty-three', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Tengo veintidós años."', correctAnswer: 'I am twenty-two years old.', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'What is "eighty" in numbers?', options: ['18', '8', '80', '800'], correctAnswer: '80', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"One ___ " = 100', correctAnswer: 'hundred', explanation: '100 = one hundred', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'How do you say "37"?', options: ['Thirty-seven', 'Seven-thirty', 'Thirteen-seven', 'Seventy-three'], correctAnswer: 'Thirty-seven', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "cincuenta y cinco"', correctAnswer: 'fifty-five', xpReward: 15 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['numbers', 'counting', 'basic']
  },

  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'Colors & Basic Adjectives',
    titleEs: 'Colores y adjetivos básicos',
    description: 'Learn colors and simple descriptive words.',
    descriptionEs: 'Aprende colores y palabras descriptivas simples.',
    objectives: ['Name 10 basic colors', 'Use simple adjectives', 'Describe objects'],
    objectivesEs: ['Nombrar 10 colores básicos', 'Usar adjetivos simples', 'Describir objetos'],
    content: [
      { type: 'example', content: 'Colors / Colores:\nred=rojo, blue=azul, green=verde, yellow=amarillo\nblack=negro, white=blanco, orange=naranja, purple=morado\npink=rosado, brown=marrón, grey=gris' },
      { type: 'text', content: 'Basic adjectives:', contentEs: 'Adjetivos básicos:' },
      { type: 'example', content: 'big/large=grande, small/little=pequeño\ntall=alto, short=bajo/corto\nfast=rápido, slow=lento\nold=viejo/antiguo, new=nuevo\ngood=bueno, bad=malo\nhot=caliente, cold=frío\nhappy=feliz, sad=triste' },
      { type: 'tip', content: 'In English, adjectives go BEFORE the noun: "a red car" (not "a car red").', contentEs: 'En inglés, los adjetivos van ANTES del sustantivo: "a red car" (no "a car red").' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'What color is the sky on a clear day?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctAnswer: 'Blue', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "El carro rojo es grande."', correctAnswer: 'The red car is big.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: 'The opposite of "hot" is "___".', correctAnswer: 'cold', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Which adjective means "pequeño"?', options: ['Tall', 'Small', 'Old', 'Fast'], correctAnswer: 'Small', xpReward: 10 },
      { type: 'matching', prompt: 'Match colors to their Spanish translations', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: { 'Red': 'Rojo', 'Blue': 'Azul', 'Green': 'Verde', 'Yellow': 'Amarillo' }, xpReward: 20 },
      { type: 'translation', prompt: 'Translate: "negro y blanco"', correctAnswer: 'black and white', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"___ is my favorite color." (color favorito: rosa)', correctAnswer: 'Pink', xpReward: 10 }
    ],
    xpReward: 50, totalDurationMinutes: 10, offlineAvailable: true, isPublished: true,
    tags: ['colors', 'adjectives', 'description']
  },

  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 4, unitNumber: 2,
    title: 'Family Members',
    titleEs: 'Miembros de la familia',
    description: 'Learn vocabulary for family relationships.',
    descriptionEs: 'Aprende vocabulario para las relaciones familiares.',
    objectives: ['Name immediate family members', 'Describe family relationships', 'Talk about your family'],
    objectivesEs: ['Nombrar miembros de la familia inmediata', 'Describir relaciones familiares', 'Hablar sobre tu familia'],
    content: [
      { type: 'example', content: 'Immediate family:\nmother/mom = madre/mamá\nfather/dad = padre/papá\nbrother = hermano\nsister = hermana\nson = hijo\ndaughter = hija\nparents = padres\nchildren = hijos' },
      { type: 'example', content: 'Extended family:\ngrandmother/grandma = abuela\ngrandfather/grandpa = abuelo\naunt = tía\nuncle = tío\ncousin = primo/prima\nnephew = sobrino\nniece = sobrina\nhusband = esposo/marido\nwife = esposa/mujer' },
      { type: 'tip', content: 'To talk about your family: "I have a brother and two sisters." = Tengo un hermano y dos hermanas.', contentEs: 'Para hablar de tu familia: "I have a brother and two sisters." = Tengo un hermano y dos hermanas.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'How do you say "abuela" in English?', options: ['Aunt', 'Mother', 'Grandmother', 'Sister'], correctAnswer: 'Grandmother', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Tengo dos hermanos y una hermana."', correctAnswer: 'I have two brothers and one sister.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: 'My mother\'s brother is my ___.', correctAnswer: 'uncle', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Daughter" means:', options: ['Hijo', 'Hija', 'Hermana', 'Madre'], correctAnswer: 'Hija', xpReward: 10 },
      { type: 'true-false', prompt: '"Cousin" can be male or female in English.', correctAnswer: true, explanation: 'In English, "cousin" is gender-neutral (primo or prima).', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Mi padre se llama Roberto."', correctAnswer: 'My father\'s name is Roberto.', xpReward: 15 },
      { type: 'matching', prompt: 'Match family words to Spanish', options: ['Mother', 'Brother', 'Daughter', 'Uncle'], correctAnswer: { 'Mother': 'Madre', 'Brother': 'Hermano', 'Daughter': 'Hija', 'Uncle': 'Tío' }, xpReward: 20 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['family', 'relationships', 'nouns']
  },

  // ── GRAMMAR ────────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Personal Pronouns & Verb "To Be"',
    titleEs: 'Pronombres personales y verbo "To Be"',
    description: 'Learn personal pronouns and how to conjugate "to be" in present tense.',
    descriptionEs: 'Aprende pronombres personales y cómo conjugar "to be" en presente.',
    objectives: ['Use all personal pronouns', 'Conjugate "to be" in present tense', 'Form affirmative, negative and question sentences'],
    objectivesEs: ['Usar todos los pronombres personales', 'Conjugar "to be" en presente', 'Formar oraciones afirmativas, negativas y preguntas'],
    content: [
      { type: 'grammar-table', content: 'I am (I\'m)\nYou are (You\'re)\nHe is (He\'s)\nShe is (She\'s)\nIt is (It\'s)\nWe are (We\'re)\nYou are (You\'re)\nThey are (They\'re)' },
      { type: 'text', content: 'Negatives: add "not" after "be"', contentEs: 'Negaciones: agrega "not" después de "be"' },
      { type: 'example', content: 'I am not tired. (I\'m not)\nShe is not happy. (She isn\'t / She\'s not)\nThey are not students. (They aren\'t)' },
      { type: 'text', content: 'Questions: invert subject and verb', contentEs: 'Preguntas: invierte sujeto y verbo' },
      { type: 'example', content: 'Am I late?\nAre you a teacher?\nIs he from Colombia?\nAre they married?' },
      { type: 'tip', content: 'Contractions are very common in spoken English: "I\'m, you\'re, he\'s, she\'s, we\'re, they\'re"', contentEs: 'Las contracciones son muy comunes en inglés hablado: "I\'m, you\'re, he\'s, she\'s, we\'re, they\'re"' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"She ___ a doctor." Choose the correct form.', options: ['am', 'are', 'is', 'be'], correctAnswer: 'is', explanation: 'Third person singular (he/she/it) uses "is".', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"We ___ students from Colombia."', correctAnswer: 'are', explanation: 'First person plural "we" uses "are".', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Él es médico."', correctAnswer: 'He is a doctor.', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'How do you make "I am tired" negative?', options: ['I not am tired', 'I am not tired', 'I am no tired', 'Not I am tired'], correctAnswer: 'I am not tired', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"___ you from Bogotá?" (question)', correctAnswer: 'Are', xpReward: 10 },
      { type: 'true-false', prompt: '"They is happy" is correct English.', correctAnswer: false, explanation: 'Correct: "They ARE happy". "They" uses "are".', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "¿Está ella en casa?"', correctAnswer: 'Is she at home?', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"___ am a student." (first person singular)', correctAnswer: 'I', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'to-be', 'pronouns', 'present-tense']
  },

  {
    languageCode: 'en', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 1,
    title: 'Articles: A, An & The',
    titleEs: 'Artículos: A, An y The',
    description: 'Learn when to use indefinite (a/an) and definite (the) articles.',
    descriptionEs: 'Aprende cuándo usar artículos indefinidos (a/an) y definidos (the).',
    objectives: ['Distinguish a, an and the', 'Use a/an with first mentions', 'Use the for specific nouns'],
    objectivesEs: ['Distinguir a, an y the', 'Usar a/an en primeras menciones', 'Usar the para sustantivos específicos'],
    content: [
      { type: 'text', content: 'A / AN = indefinite article (un, una)', contentEs: 'A / AN = artículo indefinido (un, una)' },
      { type: 'example', content: 'Use A before consonant sounds: a book, a car, a university\nUse AN before vowel sounds: an apple, an egg, an hour' },
      { type: 'tip', content: 'It depends on SOUND not spelling! "an hour" (silent h), "a university" (sounds like "you").', contentEs: '¡Depende del SONIDO, no de la escritura! "an hour" (h muda), "a university" (suena "you").' },
      { type: 'text', content: 'THE = definite article (el, la, los, las)', contentEs: 'THE = artículo definido (el, la, los, las)' },
      { type: 'example', content: 'Use THE when both speaker and listener know which one:\nI have a dog. The dog is big.\nPlease close the door. (there is only one door here)' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'Choose: "I have ___ apple."', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an', explanation: '"an" before vowel sound: "apple" starts with "a".', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"She is ___ doctor." (first mention)', correctAnswer: 'a', explanation: '"a" before consonant sound: "doctor" starts with "d".', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"___ sun rises in the east." Which article?', options: ['A', 'An', 'The', 'No article'], correctAnswer: 'The', explanation: 'There is only one sun, so we use "the".', xpReward: 10 },
      { type: 'true-false', prompt: '"A university" is correct (not "an university").', correctAnswer: true, explanation: '"University" sounds like "you-niversity" (consonant sound "y"), so we use "a".', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"I saw ___ elephant at the zoo."', correctAnswer: 'an', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Tengo un gato. El gato es negro."', correctAnswer: 'I have a cat. The cat is black.', xpReward: 20 },
      { type: 'multiple-choice', prompt: '"He is ___ honest man." Which article?', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an', explanation: '"honest" has a silent h, so the vowel sound "o" requires "an".', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'articles', 'determiners']
  },

  {
    languageCode: 'en', level: 'A1', module: 'grammar',
    order: 3, unitNumber: 2,
    title: 'Present Simple Tense',
    titleEs: 'Presente simple',
    description: 'Learn to use the present simple for habits, routines and facts.',
    descriptionEs: 'Aprende a usar el presente simple para hábitos, rutinas y hechos.',
    objectives: ['Form affirmative sentences in present simple', 'Add -s/-es for third person singular', 'Form negatives with don\'t/doesn\'t', 'Ask questions with do/does'],
    objectivesEs: ['Formar oraciones afirmativas en presente simple', 'Agregar -s/-es en tercera persona singular', 'Formar negaciones con don\'t/doesn\'t', 'Hacer preguntas con do/does'],
    content: [
      { type: 'text', content: 'Affirmative: Subject + base verb (+ s/es for he/she/it)', contentEs: 'Afirmativo: Sujeto + verbo base (+ s/es en he/she/it)' },
      { type: 'example', content: 'I work. / You work. / We work. / They work.\nHe works. / She works. / It works.' },
      { type: 'text', content: 'Negative: Subject + don\'t / doesn\'t + base verb', contentEs: 'Negativo: Sujeto + don\'t / doesn\'t + verbo base' },
      { type: 'example', content: 'I don\'t like coffee.\nShe doesn\'t live here.' },
      { type: 'grammar-table', content: 'I/You/We/They → don\'t + verb\nHe/She/It → doesn\'t + verb' },
      { type: 'text', content: 'Questions: Do / Does + Subject + base verb?', contentEs: 'Preguntas: Do / Does + Sujeto + verbo base?' },
      { type: 'example', content: 'Do you speak English?\nDoes she work here?' },
      { type: 'tip', content: 'Common time expressions: always, usually, often, sometimes, rarely, never, every day/week', contentEs: 'Expresiones de tiempo comunes: always, usually, often, sometimes, rarely, never, every day/week' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"She ___ (work) at a hospital." (add -s/-es)', correctAnswer: 'works', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"They ___ play football on Saturdays."', options: ['don\'t', 'doesn\'t', 'not', 'no'], correctAnswer: 'don\'t', explanation: '"They" uses "don\'t" for negation.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"___ she speak French?" (question)', correctAnswer: 'Does', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Él no come carne."', correctAnswer: 'He doesn\'t eat meat.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"He ___ (go) to school every day."', options: ['go', 'goes', 'gos', 'going'], correctAnswer: 'goes', explanation: '"go" adds -es in third person: goes.', xpReward: 10 },
      { type: 'true-false', prompt: '"She don\'t like pizza" is correct.', correctAnswer: false, explanation: 'Correct: "She DOESN\'T like pizza." Use doesn\'t for he/she/it.', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "¿Hablas español?"', correctAnswer: 'Do you speak Spanish?', xpReward: 15 }
    ],
    xpReward: 65, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'present-simple', 'tense']
  },

  // ── LISTENING ──────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A1', module: 'listening',
    order: 1, unitNumber: 1,
    title: 'Understanding Simple Conversations',
    titleEs: 'Comprender conversaciones simples',
    description: 'Practice understanding short, simple conversations in English.',
    descriptionEs: 'Practica comprender conversaciones cortas y simples en inglés.',
    objectives: ['Identify key words in simple dialogues', 'Understand basic introductions', 'Follow simple instructions'],
    objectivesEs: ['Identificar palabras clave en diálogos simples', 'Comprender presentaciones básicas', 'Seguir instrucciones simples'],
    content: [
      { type: 'text', content: 'Dialogue 1 — At school:', contentEs: 'Diálogo 1 — En la escuela:' },
      { type: 'example', content: 'Teacher: Good morning, class!\nStudents: Good morning!\nTeacher: My name is Ms. García. What\'s your name?\nStudent: My name is Carlos.\nTeacher: Nice to meet you, Carlos.\nCarlos: Nice to meet you too!' },
      { type: 'text', content: 'Dialogue 2 — Meeting a new neighbor:', contentEs: 'Diálogo 2 — Conociendo un vecino nuevo:' },
      { type: 'example', content: 'Anna: Hi! I\'m Anna. I live next door.\nMike: Hello Anna! I\'m Mike. Nice to meet you.\nAnna: Where are you from?\nMike: I\'m from the United States. And you?\nAnna: I\'m from Colombia.' },
      { type: 'tip', content: 'Key question words: Who? What? Where? When? How? These help you understand conversations.', contentEs: 'Palabras clave de pregunta: Who? What? Where? When? How? Te ayudan a entender conversaciones.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'In Dialogue 1, what is the teacher\'s name?', options: ['Carlos', 'Anna', 'Ms. García', 'Mike'], correctAnswer: 'Ms. García', xpReward: 10 },
      { type: 'true-false', prompt: 'In Dialogue 2, Anna is from the United States.', correctAnswer: false, explanation: 'Anna is from Colombia. Mike is from the United States.', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'What does "Where are you from?" mean?', options: ['¿Cómo estás?', '¿De dónde eres?', '¿Cuál es tu nombre?', '¿Dónde vives?'], correctAnswer: '¿De dónde eres?', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Nice to ___ you!" (meeting someone)', correctAnswer: 'meet', xpReward: 10 },
      { type: 'translation', prompt: 'What does "I live next door" mean?', correctAnswer: 'Vivo al lado / Soy tu vecino', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'Which word question asks about a place?', options: ['What', 'Who', 'Where', 'When'], correctAnswer: 'Where', xpReward: 10 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['listening', 'dialogue', 'comprehension']
  },

  // ── READING ────────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A1', module: 'reading',
    order: 1, unitNumber: 1,
    title: 'Reading: Short Texts About People',
    titleEs: 'Lectura: Textos cortos sobre personas',
    description: 'Read and understand short descriptive texts about people.',
    descriptionEs: 'Lee y comprende textos descriptivos cortos sobre personas.',
    objectives: ['Read simple personal descriptions', 'Identify key information (name, age, job, nationality)', 'Answer comprehension questions'],
    objectivesEs: ['Leer descripciones personales simples', 'Identificar información clave (nombre, edad, trabajo, nacionalidad)', 'Responder preguntas de comprensión'],
    content: [
      { type: 'text', content: 'Read the following text:', contentEs: 'Lee el siguiente texto:' },
      { type: 'example', content: 'TEXT 1:\nMy name is Sofia. I am 24 years old. I am from Medellín, Colombia. I am a nurse. I work at a big hospital. I speak Spanish and a little English. I have one brother and two sisters. My favorite color is blue and I love music.' },
      { type: 'example', content: 'TEXT 2:\nThis is James. He is 31 years old. He is from London, England. He is an English teacher. He works at a language school in Bogotá. He speaks English and Spanish. He has a wife and one son. He loves football and coffee.' },
      { type: 'tip', content: 'When reading, look for: name, age, nationality, job, family, hobbies. These are common topics in A1 texts.', contentEs: 'Al leer, busca: nombre, edad, nacionalidad, trabajo, familia, hobbies. Son temas comunes en textos A1.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'How old is Sofia?', options: ['21', '24', '28', '31'], correctAnswer: '24', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'What is James\'s job?', options: ['Nurse', 'Doctor', 'English teacher', 'Engineer'], correctAnswer: 'English teacher', xpReward: 10 },
      { type: 'true-false', prompt: 'Sofia speaks three languages.', correctAnswer: false, explanation: 'Sofia speaks Spanish and a little English — only two languages.', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Where is James from?', options: ['Colombia', 'Spain', 'London, England', 'United States'], correctAnswer: 'London, England', xpReward: 10 },
      { type: 'fill-in-blank', prompt: 'Sofia\'s favorite color is ___.', correctAnswer: 'blue', xpReward: 10 },
      { type: 'true-false', prompt: 'James has a son.', correctAnswer: true, xpReward: 10 },
      { type: 'translation', prompt: 'What does "He loves football and coffee" mean?', correctAnswer: 'A él le encanta el fútbol y el café.', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['reading', 'comprehension', 'personal-description']
  },

  // ── WRITING ────────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A1', module: 'writing',
    order: 1, unitNumber: 2,
    title: 'Writing: Personal Introduction',
    titleEs: 'Escritura: Presentación personal',
    description: 'Learn to write a short paragraph about yourself.',
    descriptionEs: 'Aprende a escribir un párrafo corto sobre ti mismo.',
    objectives: ['Write 5–7 sentences about yourself', 'Use capital letters correctly', 'Include name, age, origin, job and hobbies'],
    objectivesEs: ['Escribir 5–7 oraciones sobre ti mismo', 'Usar mayúsculas correctamente', 'Incluir nombre, edad, origen, trabajo y hobbies'],
    content: [
      { type: 'text', content: 'Read this model text and then write your own:', contentEs: 'Lee este texto modelo y luego escribe el tuyo:' },
      { type: 'example', content: 'MODEL:\nHello! My name is Laura. I am 26 years old. I am from Cali, Colombia. I am a graphic designer. I work at a small company. I have one brother. My hobbies are painting and reading. My favorite color is red. Nice to meet you!' },
      { type: 'tip', content: 'Writing rules: 1) Start sentences with capital letters. 2) End with period (.). 3) Use "I" (always capital). 4) Check spelling.', contentEs: 'Reglas de escritura: 1) Empieza oraciones con mayúscula. 2) Termina con punto (.). 3) Usa "I" siempre en mayúscula. 4) Revisa la ortografía.' },
      { type: 'text', content: 'Useful phrases:', contentEs: 'Frases útiles:' },
      { type: 'example', content: 'My name is... / I am ... years old. / I am from...\nI am a... / I work at... / I have...\nMy hobby is... / My favorite ... is...' }
    ],
    exercises: [
      { type: 'true-false', prompt: 'In English, "I" is always written in capital letters.', correctAnswer: true, xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"My name ___ Carlos." (verb to be)', correctAnswer: 'is', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Which sentence has correct capitalization?', options: ['my name is ana.', 'My Name Is Ana.', 'My name is Ana.', 'my Name is ana.'], correctAnswer: 'My name is Ana.', explanation: 'Only the first word and proper names (Ana) are capitalized.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Tengo veinticinco años."', correctAnswer: 'I am twenty-five years old.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"I ___ from Bogotá, Colombia." (verb to be)', correctAnswer: 'am', xpReward: 10 },
      { type: 'essay', prompt: 'Write 4–5 sentences about yourself in English. Include: name, age, where you are from, and one hobby.', correctAnswer: 'open', explanation: 'Sample: My name is [name]. I am [age] years old. I am from [city], Colombia. My hobby is [hobby].', xpReward: 30 }
    ],
    xpReward: 60, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['writing', 'introduction', 'paragraph']
  },

  // ── SPEAKING ──────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A1', module: 'speaking',
    order: 1, unitNumber: 1,
    title: 'Speaking: Introducing Yourself',
    titleEs: 'Expresión oral: Presentarte',
    description: 'Practice speaking about yourself clearly and confidently.',
    descriptionEs: 'Practica hablar sobre ti mismo con claridad y confianza.',
    objectives: ['Pronounce basic phrases correctly', 'Speak about personal information', 'Practice question and answer'],
    objectivesEs: ['Pronunciar frases básicas correctamente', 'Hablar sobre información personal', 'Practicar preguntas y respuestas'],
    content: [
      { type: 'text', content: 'Pronunciation tips for beginners:', contentEs: 'Consejos de pronunciación para principiantes:' },
      { type: 'example', content: 'Speak slowly and clearly.\n"Name" sounds like /neɪm/ (ney-m)\n"Years" sounds like /jɪərz/ (yi-erz)\n"From" sounds like /frɒm/ (from)' },
      { type: 'tip', content: 'Practice saying: "My name is [name]. I am [age] years old. I am from [city]." Record yourself and listen back!', contentEs: 'Practica decir: "My name is [nombre]. I am [edad] years old. I am from [ciudad]." ¡Grábate y escucha!' },
      { type: 'example', content: 'Useful phrases for conversation:\n"Can you repeat that?" = ¿Puede repetir eso?\n"I don\'t understand." = No entiendo.\n"How do you say...?" = ¿Cómo se dice...?\n"Please speak slowly." = Por favor habla despacio.' }
    ],
    exercises: [
      { type: 'voice-record', prompt: 'Say this sentence out loud: "My name is [your name] and I am from Colombia."', correctAnswer: 'My name is [name] and I am from Colombia.', xpReward: 25 },
      { type: 'voice-record', prompt: 'Ask this question out loud: "What is your name?"', correctAnswer: 'What is your name?', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'How do you ask someone to repeat something?', options: ['Please speak slowly.', 'Can you repeat that?', 'I don\'t understand.', 'How do you say?'], correctAnswer: 'Can you repeat that?', xpReward: 10 },
      { type: 'voice-record', prompt: 'Count from 1 to 10 in English.', correctAnswer: 'one two three four five six seven eight nine ten', xpReward: 20 },
      { type: 'translation', prompt: 'How do you say "No entiendo" in English?', correctAnswer: 'I don\'t understand.', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['speaking', 'pronunciation', 'oral']
  },

  // ── EXTRA VOCABULARY ───────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 5, unitNumber: 3,
    title: 'Days, Months & Dates',
    titleEs: 'Días, meses y fechas',
    description: 'Learn to talk about days of the week, months and dates.',
    descriptionEs: 'Aprende a hablar de días de la semana, meses y fechas.',
    objectives: ['Name all days of the week', 'Name all months of the year', 'Say and write a date'],
    objectivesEs: ['Nombrar todos los días de la semana', 'Nombrar todos los meses del año', 'Decir y escribir una fecha'],
    content: [
      { type: 'example', content: 'Days of the week (días de la semana):\nMonday=lunes, Tuesday=martes, Wednesday=miércoles\nThursday=jueves, Friday=viernes, Saturday=sábado, Sunday=domingo' },
      { type: 'example', content: 'Months (meses):\nJanuary=enero, February=febrero, March=marzo, April=abril\nMay=mayo, June=junio, July=julio, August=agosto\nSeptember=septiembre, October=octubre, November=noviembre, December=diciembre' },
      { type: 'tip', content: 'Days and months are always capitalized in English! Monday, January (not monday, january).', contentEs: '¡Los días y meses siempre van en mayúscula en inglés! Monday, January (no monday, january).' },
      { type: 'example', content: 'Dates:\nJuly 4th = the fourth of July\nDecember 25th = the twenty-fifth of December\n"What day is it today?" = ¿Qué día es hoy?\n"Today is Monday." = Hoy es lunes.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'Which day comes after Wednesday?', options: ['Tuesday', 'Thursday', 'Friday', 'Monday'], correctAnswer: 'Thursday', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Hoy es martes."', correctAnswer: 'Today is Tuesday.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: 'The month after September is ___.', correctAnswer: 'October', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Wednesday" in Spanish is:', options: ['Martes', 'Jueves', 'Miércoles', 'Viernes'], correctAnswer: 'Miércoles', xpReward: 10 },
      { type: 'true-false', prompt: 'In English, months are written with a capital letter.', correctAnswer: true, xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Mi cumpleaños es el 15 de agosto."', correctAnswer: 'My birthday is on August 15th.', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'How many days does a week have?', options: ['5', '6', '7', '8'], correctAnswer: '7', xpReward: 5 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'time', 'dates', 'calendar']
  },

  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 6, unitNumber: 3,
    title: 'Common Objects & Places',
    titleEs: 'Objetos comunes y lugares',
    description: 'Learn vocabulary for everyday objects and places around you.',
    descriptionEs: 'Aprende vocabulario para objetos cotidianos y lugares a tu alrededor.',
    objectives: ['Name 20 common objects', 'Identify places in a city', 'Use "there is / there are"'],
    objectivesEs: ['Nombrar 20 objetos comunes', 'Identificar lugares en una ciudad', 'Usar "there is / there are"'],
    content: [
      { type: 'example', content: 'Common objects (objetos comunes):\nbook=libro, pen=bolígrafo, phone=teléfono, computer=computador\ntable=mesa, chair=silla, bag=bolsa/maleta, key=llave\nwindow=ventana, door=puerta, bed=cama, lamp=lámpara' },
      { type: 'example', content: 'Places in a city (lugares en la ciudad):\nschool=escuela, hospital=hospital, park=parque, bank=banco\nrestaurant=restaurante, supermarket=supermercado, library=biblioteca\nchurch=iglesia, museum=museo, station=estación, airport=aeropuerto' },
      { type: 'grammar-table', content: 'There IS + singular noun: There is a book on the table.\nThere ARE + plural noun: There are three chairs in the room.' },
      { type: 'tip', content: 'Short form: "There\'s a park near here." = "Hay un parque cerca."', contentEs: 'Forma corta: "There\'s a park near here." = "Hay un parque cerca."' }
    ],
    exercises: [
      { type: 'translation', prompt: 'Translate: "Hay una biblioteca cerca de mi casa."', correctAnswer: 'There is a library near my house.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Library" means:', options: ['Librería', 'Biblioteca', 'Libreto', 'Libro'], correctAnswer: 'Biblioteca', explanation: '"Library" = biblioteca. "Bookstore" = librería. Common false friend!', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"There ___ many people in the park." (plural)', correctAnswer: 'are', xpReward: 10 },
      { type: 'matching', prompt: 'Match objects to Spanish', options: ['Table', 'Chair', 'Window', 'Door'], correctAnswer: { 'Table': 'Mesa', 'Chair': 'Silla', 'Window': 'Ventana', 'Door': 'Puerta' }, xpReward: 20 },
      { type: 'true-false', prompt: '"Library" and "librería" mean the same thing.', correctAnswer: false, explanation: '"Library" = biblioteca. "Librería" = bookstore in Spanish. False friend!', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "¿Hay un banco por aquí?"', correctAnswer: 'Is there a bank around here?', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'objects', 'places', 'there-is']
  }
];
