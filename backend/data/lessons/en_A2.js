// data/lessons/en_A2.js — English A2 Lessons (10 lecciones)
module.exports = [

  // ── VOCABULARY ─────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A2', module: 'vocabulary',
    order: 1, unitNumber: 5,
    title: 'Daily Routines & Time Expressions',
    titleEs: 'Rutinas diarias y expresiones de tiempo',
    description: 'Describe your daily routine and use time expressions.',
    descriptionEs: 'Describe tu rutina diaria y usa expresiones de tiempo.',
    objectives: ['Describe morning, afternoon and evening routines', 'Use time expressions (at, in, on)', 'Ask and answer about habits'],
    objectivesEs: ['Describir rutinas de mañana, tarde y noche', 'Usar expresiones de tiempo (at, in, on)', 'Preguntar y responder sobre hábitos'],
    content: [
      { type: 'example', content: 'Daily routine verbs:\nwake up=despertarse, get up=levantarse, have breakfast=desayunar\nhave a shower/bath=ducharse/bañarse, get dressed=vestirse\ngo to work/school=ir al trabajo/escuela\nhave lunch=almorzar, come home=volver a casa\nhave dinner=cenar, go to bed=acostarse' },
      { type: 'grammar-table', content: 'AT + specific time: at 7 o\'clock, at noon, at midnight\nIN + part of day: in the morning, in the afternoon, in the evening\nON + day: on Monday, on the weekend' },
      { type: 'tip', content: '"At night" (NOT "in the night"). "In the morning/afternoon/evening" but "at night"!', contentEs: '"At night" (NO "in the night"). ¡"In the morning/afternoon/evening" pero "at night"!' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"I wake up ___ 6:30 ___ the morning."', correctAnswer: 'at / in', explanation: 'Use AT for specific times and IN for parts of the day.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Ella se ducha cada mañana."', correctAnswer: 'She has a shower every morning.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"___ Sunday mornings, I go to the park."', options: ['At', 'In', 'On', 'By'], correctAnswer: 'On', explanation: 'Use ON with days of the week.', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'What do you do FIRST in the morning?', options: ['Go to bed', 'Have dinner', 'Wake up', 'Have lunch'], correctAnswer: 'Wake up', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Normalmente como a las doce del mediodía."', correctAnswer: 'I usually eat/have lunch at noon.', xpReward: 15 },
      { type: 'true-false', prompt: '"She goes to bed in night" is correct.', correctAnswer: false, explanation: 'Correct: "She goes to bed AT night."', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"They usually ___ (have) breakfast at 7 am."', correctAnswer: 'have', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'routines', 'time', 'prepositions']
  },

  {
    languageCode: 'en', level: 'A2', module: 'vocabulary',
    order: 2, unitNumber: 5,
    title: 'Food & Drink',
    titleEs: 'Comida y bebida',
    description: 'Learn vocabulary for food, drinks and eating out.',
    descriptionEs: 'Aprende vocabulario para comida, bebidas y comer fuera.',
    objectives: ['Name common foods and drinks', 'Order food in a restaurant', 'Express likes and dislikes about food'],
    objectivesEs: ['Nombrar comidas y bebidas comunes', 'Pedir comida en un restaurante', 'Expresar gustos y disgustos sobre comida'],
    content: [
      { type: 'example', content: 'Foods: bread=pan, rice=arroz, chicken=pollo, beef=carne de res\nfish=pescado, eggs=huevos, vegetables=verduras, fruit=fruta\nsalad=ensalada, soup=sopa, pasta=pasta, cheese=queso' },
      { type: 'example', content: 'Drinks: water=agua, coffee=café, tea=té, juice=jugo/zumo\nmilk=leche, beer=cerveza, wine=vino, soft drink=gaseosa' },
      { type: 'example', content: 'At a restaurant:\nWaiter: Can I take your order?\nCustomer: I\'d like the chicken soup, please.\nWaiter: Anything to drink?\nCustomer: A glass of water, please.\nWaiter: Of course!' },
      { type: 'grammar-table', content: 'Likes: I like / I love / I enjoy...\nDislikes: I don\'t like / I hate / I can\'t stand...\nNeutral: I don\'t mind... / It\'s OK...' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"I\'d like" in a restaurant means:', options: ['I have', 'I want', 'I would like (polite)', 'I need'], correctAnswer: 'I would like (polite)', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "¿Me puede traer el menú, por favor?"', correctAnswer: 'Can I have the menu, please? / Could you bring me the menu, please?', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"I ___ like broccoli." (expressing dislike)', correctAnswer: 'don\'t', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Juice" in Spanish is:', options: ['Leche', 'Agua', 'Jugo', 'Vino'], correctAnswer: 'Jugo', xpReward: 5 },
      { type: 'translation', prompt: 'Translate: "Me encanta el café colombiano."', correctAnswer: 'I love Colombian coffee.', xpReward: 15 },
      { type: 'matching', prompt: 'Match foods to Spanish', options: ['Chicken', 'Fish', 'Bread', 'Eggs'], correctAnswer: { 'Chicken': 'Pollo', 'Fish': 'Pescado', 'Bread': 'Pan', 'Eggs': 'Huevos' }, xpReward: 20 },
      { type: 'fill-in-blank', prompt: '"___ you like some more coffee?" (offering)', correctAnswer: 'Would', xpReward: 15 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'food', 'restaurant', 'likes-dislikes']
  },

  {
    languageCode: 'en', level: 'A2', module: 'vocabulary',
    order: 3, unitNumber: 6,
    title: 'Shopping & Money',
    titleEs: 'Compras y dinero',
    description: 'Learn how to shop, ask prices and talk about money.',
    descriptionEs: 'Aprende cómo comprar, preguntar precios y hablar sobre dinero.',
    objectives: ['Ask for prices', 'Understand shopping vocabulary', 'Handle simple transactions'],
    objectivesEs: ['Preguntar precios', 'Comprender vocabulario de compras', 'Manejar transacciones simples'],
    content: [
      { type: 'example', content: 'Shopping phrases:\nHow much is this? = ¿Cuánto cuesta esto?\nHow much are these? = ¿Cuánto cuestan estos?\nIt\'s $15. / They\'re $20. = Cuesta $15. / Cuestan $20.\nI\'ll take it. = Me lo llevo.\nDo you have this in a different size? = ¿Tiene esto en otra talla?' },
      { type: 'example', content: 'Money words:\nprice=precio, sale=oferta/venta, discount=descuento, receipt=recibo\ncash=efectivo, change=cambio/vuelto, expensive=caro, cheap=barato\naffordable=asequible, to pay=pagar' },
      { type: 'tip', content: '"How much?" is for uncountable or singular. "How many?" is for countable plural. "How much is it?" / "How many apples are there?"', contentEs: '"How much?" para incontables o singular. "How many?" para plural contable.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'How do you ask the price of something?', options: ['What is this?', 'How much is this?', 'Where is this?', 'When is this?'], correctAnswer: 'How much is this?', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"This jacket is ___ (expensive — negative) I can\'t buy it."', correctAnswer: 'too expensive', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "¿Tienen descuento hoy?"', correctAnswer: 'Do you have a discount today? / Is there a discount today?', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Receipt" in Spanish is:', options: ['Precio', 'Recibo', 'Cambio', 'Descuento'], correctAnswer: 'Recibo', xpReward: 10 },
      { type: 'true-false', prompt: '"Cheap" means the same as "expensive".', correctAnswer: false, explanation: '"Cheap" = barato. "Expensive" = caro. They are opposites.', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Me lo llevo. ¿Acepta tarjeta?"', correctAnswer: 'I\'ll take it. Do you accept cards?', xpReward: 15 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'shopping', 'money']
  },

  // ── GRAMMAR ────────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A2', module: 'grammar',
    order: 1, unitNumber: 5,
    title: 'Past Simple — Regular Verbs',
    titleEs: 'Pasado simple — Verbos regulares',
    description: 'Learn to talk about completed actions in the past.',
    descriptionEs: 'Aprende a hablar de acciones completadas en el pasado.',
    objectives: ['Form past simple with -ed ending', 'Spell past tense correctly', 'Use time expressions for the past'],
    objectivesEs: ['Formar pasado simple con terminación -ed', 'Deletrear el pasado correctamente', 'Usar expresiones de tiempo para el pasado'],
    content: [
      { type: 'text', content: 'Regular past tense: verb + -ed', contentEs: 'Pasado regular: verbo + -ed' },
      { type: 'example', content: 'work → worked (trabajé/trabajó)\nwalk → walked (caminé/caminó)\nplay → played (jugué/jugó)\nwatch → watched (miré/miró)' },
      { type: 'tip', content: 'Spelling rules:\n• Most verbs: add -ed (work→worked)\n• Verb ends in -e: add -d (live→lived)\n• Verb ends consonant+y: change y→ied (study→studied)\n• Short verb (CVC): double final consonant (stop→stopped)', contentEs: 'Reglas ortográficas:\n• La mayoría: agregar -ed\n• Termina en -e: agregar -d\n• Termina en consonante+y: cambiar a -ied\n• Verbos cortos (CVC): doblar la consonante final' },
      { type: 'grammar-table', content: 'Negative: Subject + didn\'t + base verb\nI didn\'t work yesterday.\nQuestion: Did + Subject + base verb?\nDid you work yesterday?' },
      { type: 'example', content: 'Past time expressions:\nyesterday=ayer, last night=anoche, last week/month/year=la semana/mes/año pasado\ntwo days ago=hace dos días, in 2020=en 2020' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"She ___ (watch) TV last night."', correctAnswer: 'watched', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Past tense of "study":', options: ['studyed', 'studiyed', 'studied', 'studid'], correctAnswer: 'studied', explanation: 'Consonant + y → change y to i and add -ed: study → studied.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "No trabajé ayer."', correctAnswer: 'I didn\'t work yesterday.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"___ you play football last Saturday?" (question)', correctAnswer: 'Did', xpReward: 10 },
      { type: 'true-false', prompt: '"She didn\'t worked." is correct.', correctAnswer: false, explanation: 'After "didn\'t" use the BASE verb (no -ed): "She didn\'t work."', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Past tense of "stop":',  options: ['stoped', 'stopped', 'stopted', 'stops'], correctAnswer: 'stopped', explanation: 'Short verb (CVC): stop → doubled p → stopped.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "¿Dónde viviste el año pasado?"', correctAnswer: 'Where did you live last year?', xpReward: 15 }
    ],
    xpReward: 65, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'past-simple', 'regular-verbs']
  },

  {
    languageCode: 'en', level: 'A2', module: 'grammar',
    order: 2, unitNumber: 5,
    title: 'Past Simple — Irregular Verbs',
    titleEs: 'Pasado simple — Verbos irregulares',
    description: 'Master the most common irregular past tense forms.',
    descriptionEs: 'Domina las formas irregulares más comunes del pasado.',
    objectives: ['Memorize 20 common irregular verbs', 'Use irregular past forms correctly', 'Tell a short story using past tense'],
    objectivesEs: ['Memorizar 20 verbos irregulares comunes', 'Usar formas irregulares correctamente', 'Contar una historia corta usando pasado'],
    content: [
      { type: 'grammar-table', content: 'be → was/were\nhave → had\ngo → went\ncome → came\nget → got\nsee → saw\ndo → did\nmake → made\nsay → said\nknow → knew\ntake → took\ngive → gave\nfind → found\nthink → thought\nbuy → bought\ncatch → caught\ntell → told\nwrite → wrote\nread → read\neat → ate' },
      { type: 'tip', content: 'Irregular verbs must be memorized! There are no spelling rules. Practice with example sentences.', contentEs: '¡Los verbos irregulares deben memorizarse! No hay reglas de ortografía. Practica con oraciones de ejemplo.' },
      { type: 'example', content: 'Short story example:\nYesterday I got up early. I had breakfast and went to work. I saw my friend Ana and we ate lunch together. She told me a funny story and I laughed a lot.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"She ___ (go) to the market yesterday."', correctAnswer: 'went', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Past form of "eat":',  options: ['eated', 'ate', 'aten', 'eats'], correctAnswer: 'ate', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Vi a mi amigo en el parque."', correctAnswer: 'I saw my friend in the park.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"We ___ (have) a great time at the party."', correctAnswer: 'had', xpReward: 10 },
      { type: 'matching', prompt: 'Match verbs to their past forms', options: ['go', 'make', 'take', 'buy'], correctAnswer: { 'go': 'went', 'make': 'made', 'take': 'took', 'buy': 'bought' }, xpReward: 20 },
      { type: 'translation', prompt: 'Translate: "Ella me dijo la verdad."', correctAnswer: 'She told me the truth.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"I ___ (write) a letter to my grandmother last week."', correctAnswer: 'wrote', xpReward: 10 }
    ],
    xpReward: 65, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'past-simple', 'irregular-verbs']
  },

  {
    languageCode: 'en', level: 'A2', module: 'grammar',
    order: 3, unitNumber: 6,
    title: 'Can / Can\'t — Ability & Permission',
    titleEs: 'Can / Can\'t — Habilidad y permiso',
    description: 'Use "can" to talk about ability, possibility and permission.',
    descriptionEs: 'Usa "can" para hablar de habilidad, posibilidad y permiso.',
    objectives: ['Use can/can\'t for ability', 'Ask for and give permission', 'Use could for past ability'],
    objectivesEs: ['Usar can/can\'t para habilidad', 'Pedir y dar permiso', 'Usar could para habilidad pasada'],
    content: [
      { type: 'text', content: 'CAN = poder / saber (habilidad)', contentEs: 'CAN = poder / saber (habilidad)' },
      { type: 'example', content: 'I can swim. = Sé nadar / Puedo nadar.\nShe can\'t drive. = Ella no puede manejar.\nCan you speak French? = ¿Puedes/Sabes hablar francés?' },
      { type: 'grammar-table', content: 'CAN rules:\n✓ No -s in third person: He can (NOT He cans)\n✓ Followed by BASE verb: can swim (NOT can swims)\n✓ Same form for all: I/you/he/she/we/they CAN' },
      { type: 'example', content: 'Permission:\nCan I use your phone? = ¿Puedo usar tu teléfono?\nYou can sit here. = Puedes sentarte aquí.\nYou can\'t park here. = No puedes estacionarte aquí.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"She ___ play the guitar very well."', correctAnswer: 'can', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "No puedo nadar."', correctAnswer: 'I can\'t swim.', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Can she sings?" Is this correct?', options: ['Yes, correct', 'No — "Can she sing?" (base verb)', 'No — "Does she can sing?"', 'No — "She cans sing?"'], correctAnswer: 'No — "Can she sing?" (base verb)', explanation: 'After "can" always use the base verb without -s.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "¿Puedo abrir la ventana?"', correctAnswer: 'Can I open the window?', xpReward: 10 },
      { type: 'true-false', prompt: '"He cans drive." is correct.', correctAnswer: false, explanation: 'Never add -s to "can". Correct: "He CAN drive."', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"When I was young, I ___ (could/can) run very fast." (past ability)', correctAnswer: 'could', xpReward: 15 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'modal-verbs', 'can', 'ability']
  },

  // ── READING ────────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A2', module: 'reading',
    order: 1, unitNumber: 5,
    title: 'Reading: Emails & Messages',
    titleEs: 'Lectura: Correos y mensajes',
    description: 'Read and understand informal emails, text messages and social media posts.',
    descriptionEs: 'Lee y comprende correos informales, mensajes de texto y publicaciones en redes.',
    objectives: ['Understand the purpose of a message', 'Identify key information in emails', 'Read social media language (abbreviations)'],
    objectivesEs: ['Comprender el propósito de un mensaje', 'Identificar información clave en correos', 'Leer lenguaje de redes sociales (abreviaturas)'],
    content: [
      { type: 'example', content: 'INFORMAL EMAIL:\nSubject: Weekend plans\n\nHi María!\nHow are you? I\'m writing to ask about this weekend.\nDo you want to go to the cinema on Saturday? There\'s a new film — "The Lost City".\nIt starts at 7 pm. After the film, we can go for dinner.\nLet me know if you can come!\nSee you soon,\nLucy' },
      { type: 'tip', content: 'Common text abbreviations: OMG=Oh my god, LOL=laughing out loud, BRB=be right back, BTW=by the way, ASAP=as soon as possible, TBH=to be honest', contentEs: 'Abreviaturas de mensajes comunes: OMG, LOL, BRB, BTW, ASAP, TBH' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'What is the main purpose of Lucy\'s email?', options: ['To apologize', 'To invite María to the cinema', 'To ask for help', 'To complain'], correctAnswer: 'To invite María to the cinema', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'What time does the film start?', options: ['6 pm', '7 pm', '8 pm', '9 pm'], correctAnswer: '7 pm', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"BTW" means "by the ___"', correctAnswer: 'way', xpReward: 10 },
      { type: 'true-false', prompt: 'Lucy wants to have dinner before the film.', correctAnswer: false, explanation: 'Lucy suggests dinner AFTER the film.', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Let me know if you can come."', correctAnswer: 'Dime si puedes venir. / Avísame si puedes venir.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"ASAP" means:', options: ['As silly as possible', 'As soon as possible', 'Always say a please', 'Ask someone a price'], correctAnswer: 'As soon as possible', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['reading', 'email', 'communication', 'digital']
  },

  // ── WRITING ────────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A2', module: 'writing',
    order: 1, unitNumber: 6,
    title: 'Writing: An Informal Email',
    titleEs: 'Escritura: Un correo informal',
    description: 'Learn to write a short informal email to a friend.',
    descriptionEs: 'Aprende a escribir un correo informal corto a un amigo.',
    objectives: ['Use informal greetings and closings', 'Write clearly about a topic', 'Use present and past tenses'],
    objectivesEs: ['Usar saludos y cierres informales', 'Escribir claramente sobre un tema', 'Usar tiempos presente y pasado'],
    content: [
      { type: 'text', content: 'Structure of an informal email:', contentEs: 'Estructura de un correo informal:' },
      { type: 'example', content: '1. GREETING: Hi [Name]! / Dear [Name],\n2. OPENING: How are you? / Hope you\'re well!\n3. REASON FOR WRITING: I\'m writing to... / I wanted to tell you that...\n4. MAIN CONTENT: (your message)\n5. CLOSING LINE: Hope to hear from you soon! / Write back soon!\n6. SIGN OFF: Love, / Best wishes, / See you, + [Your name]' },
      { type: 'tip', content: 'Informal emails: use contractions (I\'m, you\'re), exclamation marks (!), casual language. Avoid formal words like "Dear Sir/Madam" or "Yours sincerely".', contentEs: 'Correos informales: usa contracciones, signos de exclamación, lenguaje casual. Evita fórmulas formales.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'Which is an informal email opening?', options: ['Dear Sir/Madam,', 'To whom it may concern:', 'Hi Ana!', 'I am writing to formally request'], correctAnswer: 'Hi Ana!', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Hope to ___ from you soon!" (closing)', correctAnswer: 'hear', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Which sign-off is informal?', options: ['Yours sincerely,', 'Yours faithfully,', 'Love,', 'Respectfully,'], correctAnswer: 'Love,', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "¡Espero que estés bien!"', correctAnswer: 'Hope you\'re well! / I hope you are well!', xpReward: 15 },
      { type: 'essay', prompt: 'Write a short email (5–7 sentences) to a friend telling them about something you did last weekend.', correctAnswer: 'open', explanation: 'Include: greeting, how they are, what you did (past tense), and closing.', xpReward: 35 }
    ],
    xpReward: 65, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['writing', 'email', 'informal', 'communication']
  },

  // ── LISTENING ──────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A2', module: 'listening',
    order: 1, unitNumber: 5,
    title: 'Understanding Directions',
    titleEs: 'Comprender indicaciones',
    description: 'Listen to and understand directions around a city.',
    descriptionEs: 'Escucha y comprende indicaciones por la ciudad.',
    objectives: ['Understand cardinal directions', 'Follow street directions', 'Use prepositions of place'],
    objectivesEs: ['Comprender los puntos cardinales', 'Seguir indicaciones de calles', 'Usar preposiciones de lugar'],
    content: [
      { type: 'example', content: 'Giving directions:\nGo straight (ahead). = Siga recto.\nTurn left. = Doble a la izquierda.\nTurn right. = Doble a la derecha.\nIt\'s on the left/right. = Está a la izquierda/derecha.\nIt\'s next to/opposite/behind/in front of... = Está al lado de/frente a/detrás de/delante de...\nCross the street. = Cruce la calle.\nGo past the bank. = Pase el banco.' },
      { type: 'example', content: 'Dialogue:\nTourist: Excuse me, where is the nearest supermarket?\nLocal: Go straight for two blocks, then turn left. It\'s on the right, next to the pharmacy.\nTourist: Thank you so much!\nLocal: No problem! Enjoy your visit.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'What does "Turn right" mean?', options: ['Siga recto', 'Doble a la izquierda', 'Doble a la derecha', 'Cruce la calle'], correctAnswer: 'Doble a la derecha', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Está al lado de la farmacia."', correctAnswer: 'It\'s next to the pharmacy.', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'In the dialogue, where is the supermarket?', options: ['On the left', 'On the right, next to the pharmacy', 'Behind the bank', 'Opposite the school'], correctAnswer: 'On the right, next to the pharmacy', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Go ___ for two blocks then turn left."', correctAnswer: 'straight', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Está frente al banco."', correctAnswer: 'It\'s opposite the bank. / It\'s in front of the bank.', xpReward: 15 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['listening', 'directions', 'places', 'prepositions']
  },

  // ── SPEAKING ──────────────────────────────────────────────────────
  {
    languageCode: 'en', level: 'A2', module: 'speaking',
    order: 1, unitNumber: 6,
    title: 'Talking About Your Day',
    titleEs: 'Hablar sobre tu día',
    description: 'Practice speaking about your daily activities and past events.',
    descriptionEs: 'Practica hablar sobre tus actividades diarias y eventos pasados.',
    objectives: ['Describe your day in past tense', 'Use linking words', 'Speak with basic fluency'],
    objectivesEs: ['Describir tu día en pasado', 'Usar palabras de enlace', 'Hablar con fluidez básica'],
    content: [
      { type: 'tip', content: 'Use linking words to connect ideas: first, then, after that, next, finally, because, and, but, so', contentEs: 'Usa palabras de enlace: first, then, after that, next, finally, because, and, but, so' },
      { type: 'example', content: 'Sample: "Yesterday was a busy day! First, I woke up at 6 am and had a quick breakfast. Then I went to work by bus. After work, I met my friend and we had dinner together. Finally, I watched TV and went to bed at 11 pm."' }
    ],
    exercises: [
      { type: 'voice-record', prompt: 'Describe what you did yesterday. Try to say at least 4 sentences using past tense.', correctAnswer: 'open - past tense sentences about yesterday', xpReward: 30 },
      { type: 'multiple-choice', prompt: 'Which linking word shows SEQUENCE (orden)?', options: ['Because', 'But', 'First', 'Although'], correctAnswer: 'First', xpReward: 10 },
      { type: 'voice-record', prompt: 'Say this sentence: "Yesterday I went to the supermarket and bought some food."', correctAnswer: 'Yesterday I went to the supermarket and bought some food.', xpReward: 20 },
      { type: 'translation', prompt: 'Translate: "Primero fui al trabajo, luego almorcé con mi jefe."', correctAnswer: 'First I went to work, then I had lunch with my boss.', xpReward: 15 }
    ],
    xpReward: 65, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['speaking', 'past-tense', 'daily-life']
  }
];
