// data/evaluations/all_evaluations.js — Evaluaciones para todos los niveles e idiomas
module.exports = [

  // ══════════════════════════════════════════════════════
  //  ENGLISH EVALUATIONS
  // ══════════════════════════════════════════════════════

  // ── English A1 — Level Test ──────────────────────────
  {
    languageCode: 'en', level: 'A1', type: 'level',
    title: 'English A1 — Level Certification Test',
    titleEs: 'Inglés A1 — Examen de certificación de nivel',
    description: 'Comprehensive test to certify A1 level in English. Tests vocabulary, grammar, reading and writing.',
    timeLimitMinutes: 35, passingScore: 70, xpReward: 300, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: 'What does "Good morning" mean in Spanish?', options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'], correctAnswer: 'Buenos días', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"She ___ a teacher." Choose the correct form of "to be".', options: ['am', 'are', 'is', 'be'], correctAnswer: 'is', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: 'Complete: "They ___ students from Colombia."', correctAnswer: 'are', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: 'How do you say "hermano" in English?', options: ['Sister', 'Father', 'Brother', 'Son'], correctAnswer: 'Brother', points: 1 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate to English: "¿Cómo te llamas?"', correctAnswer: 'What is your name?', points: 2 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'My name is John. I am 25 years old. I am from London. I am an English teacher.', prompt: 'How old is John?', options: ['20', '25', '30', '35'], correctAnswer: '25', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'My name is John. I am 25 years old. I am from London. I am an English teacher.', prompt: 'What is John\'s job?', options: ['Doctor', 'Engineer', 'English teacher', 'Nurse'], correctAnswer: 'English teacher', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"___ you from Colombia?" Choose the correct auxiliary.', options: ['Is', 'Am', 'Are', 'Be'], correctAnswer: 'Are', points: 1 },
      { type: 'fill-in-blank', section: 'vocabulary', prompt: 'The opposite of "big" is "___".', correctAnswer: 'small', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"I ___ happy" (negative form)', options: ['am not', 'not am', 'am no', 'don\'t am'], correctAnswer: 'am not', points: 1 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate: "Tengo dos hermanas."', correctAnswer: 'I have two sisters.', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Library" in Spanish means:', options: ['Librería', 'Biblioteca', 'Libro', 'Librero'], correctAnswer: 'Biblioteca', points: 2, explanation: 'False friend! Library=biblioteca, NOT librería (which means bookstore).' },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"She ___ (work) at a bank." (present simple — 3rd person)', correctAnswer: 'works', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: 'What color is grass?', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 'Green', points: 1 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "¿Hablas inglés?"', correctAnswer: 'Do you speak English?', points: 2 }
    ]
  },

  // ── English A1 — Practice (Unit 1) ──────────────────
  {
    languageCode: 'en', level: 'A1', type: 'practice',
    title: 'English A1 — Greetings & Grammar Practice',
    titleEs: 'Inglés A1 — Práctica de saludos y gramática',
    description: 'Short practice test on Unit 1: greetings and verb to be.',
    timeLimitMinutes: 15, passingScore: 60, xpReward: 100, certificateAwarded: false, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: 'How do you say "Hola" (informal) in English?', options: ['Good morning', 'Hello', 'Hi', 'Good evening'], correctAnswer: 'Hi', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"I ___ a student."', correctAnswer: 'am', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"She ___ from Spain."', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', points: 1 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate: "Mucho gusto."', correctAnswer: 'Nice to meet you.', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"We ___ friends." (plural)', correctAnswer: 'are', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Goodbye" in Spanish:', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], correctAnswer: 'Adiós', points: 1 }
    ]
  },

  // ── English A2 — Level Test ──────────────────────────
  {
    languageCode: 'en', level: 'A2', type: 'level',
    title: 'English A2 — Level Certification Test',
    titleEs: 'Inglés A2 — Examen de certificación de nivel',
    description: 'Full A2 level test covering past simple, can/can\'t, daily routines and reading.',
    timeLimitMinutes: 40, passingScore: 70, xpReward: 350, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'grammar', prompt: '"She ___ (go) to the cinema last Friday."', options: ['goes', 'go', 'went', 'gone'], correctAnswer: 'went', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"I ___ (not/watch) TV yesterday." (negative past)', correctAnswer: 'didn\'t watch', points: 2 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "Ella no pudo venir a la fiesta."', correctAnswer: 'She couldn\'t come to the party.', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"How much is this?" — you are asking about the:', options: ['Color', 'Size', 'Price', 'Weight'], correctAnswer: 'Price', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"___ Sunday afternoons, I visit my parents."', options: ['At', 'In', 'On', 'By'], correctAnswer: 'On', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Can you ___ the piano?" (play — base verb)', correctAnswer: 'play', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Sarah went to the market yesterday. She bought some vegetables, bread and milk. She spent 15 dollars. When she arrived home, she cooked a delicious soup for her family.', prompt: 'What did Sarah buy at the market?', options: ['Only bread', 'Vegetables, bread and milk', 'Soup and milk', 'Bread and meat'], correctAnswer: 'Vegetables, bread and milk', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Sarah went to the market yesterday. She bought some vegetables, bread and milk. She spent 15 dollars. When she arrived home, she cooked a delicious soup for her family.', prompt: 'How much did Sarah spend?', options: ['$10', '$12', '$15', '$20'], correctAnswer: '$15', points: 1 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate: "¿A qué hora te despiertas normalmente?"', correctAnswer: 'What time do you usually wake up?', points: 2 },
      { type: 'fill-in-blank', section: 'grammar', prompt: 'Past of "write": She ___ a letter to her grandmother.', correctAnswer: 'wrote', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Receipt" means:', options: ['Receta', 'Recibo', 'Precio', 'Regalo'], correctAnswer: 'Recibo', points: 1 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "Ayer fui al médico porque me dolía la cabeza."', correctAnswer: 'Yesterday I went to the doctor because I had a headache.', points: 3 }
    ]
  },

  // ── English B1 — Level Test ──────────────────────────
  {
    languageCode: 'en', level: 'B1', type: 'level',
    title: 'English B1 — Level Certification Test',
    titleEs: 'Inglés B1 — Examen de certificación de nivel',
    description: 'Comprehensive B1 test: present perfect, future forms, reading, writing and vocabulary.',
    timeLimitMinutes: 45, passingScore: 70, xpReward: 450, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'grammar', prompt: '"I ___ (visit) Paris twice in my life." (experience)', options: ['visited', 'have visited', 'was visiting', 'visit'], correctAnswer: 'have visited', points: 2 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"She ___ to the market an hour ago." (specific past time)', options: ['has gone', 'went', 'has went', 'go'], correctAnswer: 'went', points: 2 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Have you ever ___ (eat) Korean food?"', correctAnswer: 'eaten', points: 2 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"Look at those clouds! It ___ rain." (evidence-based prediction)', options: ['will', '\'s going to', '\'s going', 'is will'], correctAnswer: '\'s going to', points: 2 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "Nunca he estado en Europa."', correctAnswer: 'I have never been to Europe.', points: 2 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Working from home has become increasingly popular in recent years. Many employees report feeling more productive when they work from their own space, as they can avoid long commutes and distractions from colleagues. However, some workers feel isolated and miss the social aspect of office life.', prompt: 'What is one BENEFIT of working from home mentioned in the text?', options: ['Better salary', 'Avoiding long commutes', 'More meetings', 'Free lunch'], correctAnswer: 'Avoiding long commutes', points: 2 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Working from home has become increasingly popular in recent years. Many employees report feeling more productive when they work from their own space, as they can avoid long commutes and distractions from colleagues. However, some workers feel isolated and miss the social aspect of office life.', prompt: 'What is one DISADVANTAGE mentioned?', options: ['Better productivity', 'Feeling isolated', 'Avoiding commutes', 'Working flexible hours'], correctAnswer: 'Feeling isolated', points: 2 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate: "Desde mi punto de vista, aprender idiomas es muy valioso."', correctAnswer: 'From my point of view, learning languages is very valuable.', points: 3 },
      { type: 'fill-in-blank', section: 'vocabulary', prompt: '"_____ of the patients have recovered." (linking — resultado)', correctAnswer: 'As a result / Therefore / Consequently', points: 2, explanation: 'Any result-linking phrase is acceptable.' },
      { type: 'multiple-choice', section: 'grammar', prompt: '"I ___ meeting the director at 3 pm tomorrow." (fixed arrangement)', options: ['will', '\'m going to', '\'m', 'going'], correctAnswer: '\'m', points: 2 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "¿Por cuánto tiempo has vivido en esta ciudad?"', correctAnswer: 'How long have you lived in this city?', points: 3 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Furthermore" is used to:', options: ['Contrast two ideas', 'Add information', 'Give an example', 'Conclude'], correctAnswer: 'Add information', points: 2 }
    ]
  },

  // ── English A1 — Placement Test ─────────────────────
  {
    languageCode: 'en', level: 'A1', type: 'placement',
    title: 'English Placement Test',
    titleEs: 'Test de colocación — Inglés',
    description: 'Find your current English level. Answer as many questions as you can.',
    timeLimitMinutes: 30, passingScore: 50, xpReward: 150, certificateAwarded: false, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Hello" in Spanish:', options: ['Adiós', 'Hola', 'Gracias', 'Por favor'], correctAnswer: 'Hola', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"I ___ a student." (to be — 1st person)', correctAnswer: 'am', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"She ___ to work every day."', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 'goes', points: 1 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate: "Tengo veinte años."', correctAnswer: 'I am twenty years old.', points: 2 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"He ___ (go) to the cinema last night." (past)', options: ['go', 'goes', 'went', 'going'], correctAnswer: 'went', points: 2 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Have you ever ___ (visit) Colombia?" (present perfect)', correctAnswer: 'visited', points: 2 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "Si hubiera más tiempo, estudiaría más." (conditional)', correctAnswer: 'If I had more time, I would study more.', points: 3 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Furthermore" is a word used to:', options: ['Give an example', 'Contradict', 'Add information', 'Conclude'], correctAnswer: 'Add information', points: 2 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  FRENCH EVALUATIONS
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'fr', level: 'A1', type: 'level',
    title: 'Français A1 — Test de certification',
    titleEs: 'Francés A1 — Examen de certificación',
    description: 'Test complet pour certifier le niveau A1 en français.',
    timeLimitMinutes: 35, passingScore: 70, xpReward: 300, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: '¿Cómo se dice "Hola" (informal) en francés?', options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'], correctAnswer: 'Salut', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Nous ___ étudiants." (être — 1ère personne pluriel)', correctAnswer: 'sommes', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"J\'___ vingt ans." (avoir — âge)', options: ['suis', 'es', 'ai', 'ont'], correctAnswer: 'ai', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '¿Cómo se dice "70" en francés?', options: ['septante', 'soixante-dix', 'soixante-dix-dix', 'sept-dix'], correctAnswer: 'soixante-dix', points: 2 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate to French: "Me llamo Ana."', correctAnswer: 'Je m\'appelle Ana.', points: 2 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"___ chat est noir." (el gato — article défini masc.)', correctAnswer: 'Le', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Je m\'appelle Pierre. J\'ai 30 ans. Je suis de Lyon, en France. Je suis cuisinier. J\'ai deux enfants.', prompt: '¿Cuántos años tiene Pierre?', options: ['20', '25', '30', '35'], correctAnswer: '30', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Je m\'appelle Pierre. J\'ai 30 ans. Je suis de Lyon, en France. Je suis cuisinier. J\'ai deux enfants.', prompt: '¿Cuál es la profesión de Pierre?', options: ['Médico', 'Cocinero', 'Maestro', 'Ingeniero'], correctAnswer: 'Cocinero', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Vous ___ (parler) français?" (2ème personne pluriel — présent)', correctAnswer: 'parlez', points: 2 },
      { type: 'translation', section: 'grammar', prompt: 'Translate to French: "Tengo un hermano y dos hermanas."', correctAnswer: 'J\'ai un frère et deux sœurs.', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '¿Cómo se dice "80" en francés?', options: ['huitante', 'quatre-vingts', 'quatre-vingt-dix', 'octante'], correctAnswer: 'quatre-vingts', points: 2 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Ma ___ (amie — fem. vowel) s\'appelle Sophie." (possessive antes de vocal)', correctAnswer: 'Mon', explanation: 'Antes de vocal femenina, "ma" → "mon": mon amie', points: 2 }
    ]
  },

  {
    languageCode: 'fr', level: 'A1', type: 'practice',
    title: 'Pratique A1 — Être, avoir et vocabulaire',
    titleEs: 'Práctica A1 francés — Être, avoir y vocabulario',
    description: 'Práctica corta sobre être, avoir y vocabulario básico.',
    timeLimitMinutes: 15, passingScore: 60, xpReward: 100, certificateAwarded: false, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'grammar', prompt: '"Elle ___ professeure." (être)', options: ['ai', 'sont', 'est', 'suis'], correctAnswer: 'est', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Ils ___ une grande maison." (avoir)', correctAnswer: 'ont', points: 1 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate to French: "Buenos días."', correctAnswer: 'Bonjour.', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Merci" significa:', options: ['Hola', 'Gracias', 'Por favor', 'Perdón'], correctAnswer: 'Gracias', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Tu ___ d\'où?" (être — origen)', correctAnswer: 'es', points: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  GERMAN EVALUATIONS
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'de', level: 'A1', type: 'level',
    title: 'Deutsch A1 — Zertifizierungstest',
    titleEs: 'Alemán A1 — Examen de certificación',
    description: 'Kompletter Test für das Niveau A1 Deutsch.',
    timeLimitMinutes: 35, passingScore: 70, xpReward: 300, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: '¿Cómo se dice "Buenos días" en alemán?', options: ['Guten Abend', 'Hallo', 'Guten Morgen', 'Tschüs'], correctAnswer: 'Guten Morgen', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Wir ___ Studenten." (sein)', correctAnswer: 'sind', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"Er ___ Arzt." (sein — 3. Person)', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'ist', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '¿Cómo se escribe "45" en alemán?', options: ['vierzigfünf', 'fünfvierzig', 'fünfundvierzig', 'fünfundvierzig'], correctAnswer: 'fünfundvierzig', points: 2 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate to German: "Me llamo Carlos."', correctAnswer: 'Ich heiße Carlos.', points: 2 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"___ Buch ist interessant." (das Buch — defin. article)', correctAnswer: 'Das', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Ich heiße Tobias. Ich bin 28 Jahre alt. Ich komme aus München. Ich bin Lehrer und spreche Deutsch und ein bisschen Spanisch.', prompt: '¿De dónde es Tobias?', options: ['Berlín', 'Hamburgo', 'Múnich', 'Viena'], correctAnswer: 'Múnich', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Ich heiße Tobias. Ich bin 28 Jahre alt. Ich komme aus München. Ich bin Lehrer und spreche Deutsch und ein bisschen Spanisch.', prompt: '¿Qué idioma habla Tobias además del alemán?', options: ['Inglés', 'Francés', 'Un poco de español', 'Italiano'], correctAnswer: 'Un poco de español', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Ich ___ aus Kolumbien." (sein)', correctAnswer: 'bin', points: 1 },
      { type: 'translation', section: 'grammar', prompt: 'Translate to German: "Tengo una hermana."', correctAnswer: 'Ich habe eine Schwester.', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Die Schwester" es:', options: ['El hermano', 'La hermana', 'La hija', 'La madre'], correctAnswer: 'La hermana', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '¿Qué género tiene "die Zeitung" (periódico)?', options: ['Masculino', 'Femenino', 'Neutro', 'Variable'], correctAnswer: 'Femenino', explanation: '-ung siempre es femenino en alemán.', points: 2 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  PORTUGUESE EVALUATIONS
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'pt', level: 'A1', type: 'level',
    title: 'Português A1 — Teste de Certificação',
    titleEs: 'Portugués A1 — Examen de certificación',
    description: 'Teste completo para certificar o nível A1 em português brasileiro.',
    timeLimitMinutes: 35, passingScore: 70, xpReward: 300, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: '¿Cómo se dice "Buenos días" en portugués?', options: ['Boa tarde', 'Boa noite', 'Bom dia', 'Olá'], correctAnswer: 'Bom dia', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Eu ___ do Brasil." (ser — origen)', correctAnswer: 'sou', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"Ela ___ cansada hoje." (estar — estado temporal)', options: ['é', 'sou', 'está', 'estamos'], correctAnswer: 'está', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Obrigada" lo diría:', options: ['Un hombre', 'Una mujer', 'Cualquier persona', 'Solo en Portugal'], correctAnswer: 'Una mujer', points: 2 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate to Portuguese: "Me llamo Ana y soy de Colombia."', correctAnswer: 'Meu nome é Ana e sou da Colômbia.', points: 2 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Eu me chamo Lucas. Tenho 26 anos e moro em São Paulo. Sou engenheiro e falo português e inglês.', prompt: '¿Qué idiomas habla Lucas?', options: ['Solo portugués', 'Portugués y español', 'Portugués e inglés', 'Inglés y francés'], correctAnswer: 'Portugués e inglés', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Nós ___ (trabalhar) juntos." (1ª pessoa plural -AR)', correctAnswer: 'trabalhamos', points: 2 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "Tengo treinta años."', correctAnswer: 'Tenho trinta anos.', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Prazer em conhecer" significa:', options: ['Hasta luego', 'Mucho gusto', 'Gracias', 'Por favor'], correctAnswer: 'Mucho gusto', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"___ mãe é professora." (minha/meu — fem.)', correctAnswer: 'Minha', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Dois" se usa con sustantivos:', options: ['Femeninos', 'Masculinos', 'Ambos géneros', 'Solo plurales'], correctAnswer: 'Masculinos', explanation: '"Dois" es masculino. "Duas" es femenino.', points: 2 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  ITALIAN EVALUATIONS
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'it', level: 'A1', type: 'level',
    title: 'Italiano A1 — Test di Certificazione',
    titleEs: 'Italiano A1 — Examen de certificación',
    description: 'Test completo per certificare il livello A1 in italiano.',
    timeLimitMinutes: 35, passingScore: 70, xpReward: 300, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'multiple-choice', section: 'vocabulary', prompt: '¿Qué palabra se usa tanto para "hola" como para "adiós" en italiano (informal)?', options: ['Buongiorno', 'Arrivederci', 'Ciao', 'Prego'], correctAnswer: 'Ciao', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"Noi ___ studenti." (essere)', correctAnswer: 'siamo', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"Io ___ ventidue anni." (avere — edad)', options: ['sono', 'sei', 'ho', 'ha'], correctAnswer: 'ho', points: 1 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Ventuno" es en números:', options: ['12', '20', '21', '22'], correctAnswer: '21', points: 2 },
      { type: 'translation', section: 'vocabulary', prompt: 'Translate to Italian: "Me llamo Marco y soy de Italia."', correctAnswer: 'Mi chiamo Marco e sono dell\'Italia. / Mi chiamo Marco e sono italiano.', points: 2 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"___ libro è interessante." (il/la/l\')', correctAnswer: 'Il', points: 1 },
      { type: 'multiple-choice', section: 'reading', readingPassage: 'Mi chiamo Giulia. Ho 24 anni e abito a Roma. Sono studentessa di architettura.', prompt: '¿Qué estudia Giulia?', options: ['Medicina', 'Arquitectura', 'Ingeniería', 'Matemáticas'], correctAnswer: 'Arquitectura', points: 1 },
      { type: 'fill-in-blank', section: 'grammar', prompt: '"___ sorella si chiama Laura." (possessivo — fem.)', correctAnswer: 'Mia', points: 2 },
      { type: 'translation', section: 'grammar', prompt: 'Translate: "Tengo una hermana y dos hermanos."', correctAnswer: 'Ho una sorella e due fratelli.', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"La moglie" significa:', options: ['La madre', 'La hermana', 'La esposa', 'La hija'], correctAnswer: 'La esposa', points: 1 },
      { type: 'multiple-choice', section: 'grammar', prompt: '"Il mio padre" es incorrecto porque:', options: ['El posesivo está mal', 'La familia inmediata no usa artículo', 'El género está mal', 'El verbo está mal'], correctAnswer: 'La familia inmediata no usa artículo', explanation: 'Correcto: "Mio padre" (sin artículo para familia inmediata singular)', points: 2 },
      { type: 'multiple-choice', section: 'vocabulary', prompt: '"Trentotto" es en números:', options: ['28', '38', '33', '83'], correctAnswer: '38', explanation: 'trenta + otto → trentotto (se elimina la "a" de trenta)', points: 2 }
    ]
  }
];
