// data/evaluations/evaluations_active.js — Evaluaciones con métodos adaptativos y activos
module.exports = [

  // ══════════════════════════════════════════════════════
  //  ENGLISH A1 — Adaptive Assessment
  // ══════════════════════════════════════════════════════
  {
    languageCode: 'en', level: 'A1', type: 'level',
    title: 'English A1 — Adaptive Active Assessment',
    titleEs: 'Inglés A1 — Evaluación adaptativa activa',
    description: 'Assessment using dictation, scramble, cloze and conversation simulation. Adapts difficulty based on performance.',
    timeLimitMinutes: 40, passingScore: 65, xpReward: 400, certificateAwarded: true, isPublished: true,
    questions: [
      // BLOCK 1: Dictation (Listening + Writing)
      { type: 'dictation', section: 'listening', prompt: 'Listen and write: "My name is John. I am twenty-five years old."', correctAnswer: 'My name is John. I am twenty-five years old.', points: 3 },
      { type: 'dictation', section: 'listening', prompt: 'Listen and write: "She doesn\'t work on Saturdays. She goes to the park."', correctAnswer: 'She doesn\'t work on Saturdays. She goes to the park.', points: 3 },
      // BLOCK 2: Scramble (Grammar + Word order)
      { type: 'scramble', section: 'grammar', prompt: 'Rearrange: "from / I / Colombia / am"', correctAnswer: 'I am from Colombia.', points: 2 },
      { type: 'scramble', section: 'grammar', prompt: 'Rearrange: "you / Do / English / speak"', correctAnswer: 'Do you speak English?', points: 2 },
      // BLOCK 3: Cloze (Contextual grammar)
      { type: 'cloze', section: 'vocabulary', prompt: 'Complete: "I have ___ apple. ___ apple is green."', correctAnswer: ['an', 'The'], points: 2 },
      { type: 'cloze', section: 'grammar', prompt: 'Complete: "She ___ (work) at a hospital. She ___ (not/like) coffee."', correctAnswer: ['works', 'doesn\'t like'], points: 3 },
      // BLOCK 4: Conversation Simulation
      { type: 'conversation-sim', section: 'speaking', prompt: 'You enter a shop. The clerk says "Can I help you?" What do you say to ask for a black t-shirt?', options: ['I want black t-shirt.', 'I would like a black t-shirt, please.', 'Give me black t-shirt.', 'Black t-shirt.'], correctAnswer: 'I would like a black t-shirt, please.', points: 2 },
      { type: 'conversation-sim', section: 'speaking', prompt: 'Someone says "Nice to meet you!" Best response:', options: ['Yes.', 'Nice to meet you too!', 'Thank you.', 'Goodbye.'], correctAnswer: 'Nice to meet you too!', points: 2 },
      // BLOCK 5: Image Context (Reading)
      { type: 'image-match', section: 'reading', prompt: 'A restaurant sign shows: "Soup of the Day $5". What is the price?', options: ['$3', '$5', '$10', 'Free'], correctAnswer: '$5', points: 1 },
      // BLOCK 6: Task-Based
      { type: 'task-based', section: 'writing', prompt: 'Write a text message to your boss: "I am sick. I cannot come to work today. I will come tomorrow."', correctAnswer: 'open', points: 3 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  ENGLISH A1 — Placement Test (Adaptive)
  // ══════════════════════════════════════════════════════
  {
    languageCode: 'en', level: 'A1', type: 'placement',
    title: 'English Placement — Active Skills Test',
    titleEs: 'Test de colocación — Inglés (habilidades activas)',
    description: 'Find your level using dictation, scramble and conversation tasks. Difficulty adjusts based on your answers.',
    timeLimitMinutes: 25, passingScore: 50, xpReward: 200, certificateAwarded: false, isPublished: true,
    questions: [
      // Level A1 questions
      { type: 'dictation', section: 'listening', prompt: 'Listen: "Hello, how are you?"', correctAnswer: 'Hello, how are you?', points: 1 },
      { type: 'scramble', section: 'grammar', prompt: 'Rearrange: "name / My / is / Ana"', correctAnswer: 'My name is Ana.', points: 1 },
      // Level A2 questions (unlock if A1 correct)
      { type: 'cloze', section: 'grammar', prompt: 'Complete: "Yesterday I ___ (go) to the cinema."', correctAnswer: 'went', points: 2 },
      { type: 'conversation-sim', section: 'speaking', prompt: 'You want to book a table for 2 at 8 PM. What do you say?', options: ['I want table.', 'I would like to book a table for two at eight, please.', 'Table two eight.', 'Give me table.'], correctAnswer: 'I would like to book a table for two at eight, please.', points: 2 },
      // Level B1 questions (unlock if A2 correct)
      { type: 'dictation', section: 'listening', prompt: 'Listen: "I have never been to Europe, but I would love to visit Italy someday."', correctAnswer: 'I have never been to Europe, but I would love to visit Italy someday.', points: 3 },
      { type: 'task-based', section: 'writing', prompt: 'Write 3 sentences about your last vacation using past tense.', correctAnswer: 'open', points: 3 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  FRENCH A1 — Adaptive Active
  // ══════════════════════════════════════════════════════
  {
    languageCode: 'fr', level: 'A1', type: 'level',
    title: 'Français A1 — Évaluation active adaptative',
    titleEs: 'Francés A1 — Evaluación activa adaptativa',
    description: 'Test adaptatif utilisant dictée, phrases à reconstituer et simulations.',
    timeLimitMinutes: 35, passingScore: 65, xpReward: 400, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'dictation', section: 'listening', prompt: 'Écoutez et écrivez: "Je m\'appelle Pierre. J\'ai trente ans."', correctAnswer: 'Je m\'appelle Pierre. J\'ai trente ans.', points: 3 },
      { type: 'scramble', section: 'grammar', prompt: 'Reconstituer: "étudiants / Nous / sommes"', correctAnswer: 'Nous sommes étudiants.', points: 2 },
      { type: 'cloze', section: 'grammar', prompt: 'Compléter: "___ chat est noir. J\'ai ___ ami à Paris."', correctAnswer: ['Le', 'un'], points: 2 },
      { type: 'conversation-sim', section: 'speaking', prompt: 'Vous entrez dans un café. Que dites-vous pour commander un café?', options: ['Donnez-moi café.', 'Je voudrais un café, s\'il vous plaît.', 'Café.', 'Je veux café.'], correctAnswer: 'Je voudrais un café, s\'il vous plaît.', points: 2 },
      { type: 'image-match', section: 'reading', prompt: 'Un panneau montre: 🚫🚬. Que dit-il?', options: ['Fumer autorisé', 'Défense de fumer', 'Zone fumeur', 'Cigarettes'], correctAnswer: 'Défense de fumer', points: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  GERMAN A1 — Adaptive Active
  // ══════════════════════════════════════════════════════
  {
    languageCode: 'de', level: 'A1', type: 'level',
    title: 'Deutsch A1 — Aktive adaptive Prüfung',
    titleEs: 'Alemán A1 — Examen activo adaptativo',
    description: 'Aktive Bewertung mit Diktat, Satzrekonstruktion und Gesprächssimulation.',
    timeLimitMinutes: 35, passingScore: 65, xpReward: 400, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'dictation', section: 'listening', prompt: 'Hören und schreiben: "Ich heiße Tobias. Ich bin achtundzwanzig Jahre alt."', correctAnswer: 'Ich heiße Tobias. Ich bin achtundzwanzig Jahre alt.', points: 3 },
      { type: 'scramble', section: 'grammar', prompt: 'Rekonstruieren: "Studenten / Wir / sind"', correctAnswer: 'Wir sind Studenten.', points: 2 },
      { type: 'cloze', section: 'grammar', prompt: 'Vervollständigen: "___ Buch ist interessant. Ich habe ___ Schwester."', correctAnswer: ['Das', 'eine'], points: 2 },
      { type: 'conversation-sim', section: 'speaking', prompt: 'Sie sind im Restaurant. Was sagen Sie, um die Rechnung zu bitten?', options: ['Geben Sie mir Rechnung.', 'Die Rechnung, bitte.', 'Ich möchte zahlen, bitte.', 'Geld.'], correctAnswer: 'Die Rechnung, bitte.', points: 2 },
      { type: 'image-match', section: 'reading', prompt: 'Ein Schild zeigt: 🚫🚬. Was steht da?', options: ['Rauchen erlaubt', 'Rauchen verboten', 'Raucherzone', 'Zigaretten'], correctAnswer: 'Rauchen verboten', points: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  PORTUGUESE A1 — Adaptive Active
  // ══════════════════════════════════════════════════════
  {
    languageCode: 'pt', level: 'A1', type: 'level',
    title: 'Português A1 — Avaliação ativa adaptativa',
    titleEs: 'Portugués A1 — Evaluación activa adaptativa',
    description: 'Avaliação ativa com ditado, reorganização de frases e simulação de conversa.',
    timeLimitMinutes: 35, passingScore: 65, xpReward: 400, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'dictation', section: 'listening', prompt: 'Ouça e escreva: "Meu nome é Lucas. Eu tenho vinte e seis anos."', correctAnswer: 'Meu nome é Lucas. Eu tenho vinte e seis anos.', points: 3 },
      { type: 'scramble', section: 'grammar', prompt: 'Reorganizar: "estudantes / Nós / somos"', correctAnswer: 'Nós somos estudantes.', points: 2 },
      { type: 'cloze', section: 'grammar', prompt: 'Completar: "___ mãe é professora. Eu tenho ___ carro."', correctAnswer: ['Minha', 'um'], points: 2 },
      { type: 'conversation-sim', section: 'speaking', prompt: 'Você está num restaurante. O que diz para pedir a conta?', options: ['Quero conta.', 'A conta, por favor.', 'Me dá a conta.', 'Dinheiro.'], correctAnswer: 'A conta, por favor.', points: 2 },
      { type: 'image-match', section: 'reading', prompt: 'Uma placa mostra: 🚫🚬. O que diz?', options: ['Fumar permitido', 'Proibido fumar', 'Área de fumantes', 'Cigarros'], correctAnswer: 'Proibido fumar', points: 1 }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  ITALIAN A1 — Adaptive Active
  // ══════════════════════════════════════════════════════
  {
    languageCode: 'it', level: 'A1', type: 'level',
    title: 'Italiano A1 — Valutazione attiva adattativa',
    titleEs: 'Italiano A1 — Evaluación activa adaptativa',
    description: 'Valutazione attiva con dettato, ricostruzione frasi e simulazione conversazione.',
    timeLimitMinutes: 35, passingScore: 65, xpReward: 400, certificateAwarded: true, isPublished: true,
    questions: [
      { type: 'dictation', section: 'listening', prompt: 'Ascolta e scrivi: "Mi chiamo Giulia. Ho ventiquattro anni."', correctAnswer: 'Mi chiamo Giulia. Ho ventiquattro anni.', points: 3 },
      { type: 'scramble', section: 'grammar', prompt: 'Ricostruire: "studenti / Noi / siamo"', correctAnswer: 'Noi siamo studenti.', points: 2 },
      { type: 'cloze', section: 'grammar', prompt: 'Completa: "___ libro è interessante. Ho ___ sorella."', correctAnswer: ['Il', 'una'], points: 2 },
      { type: 'conversation-sim', section: 'speaking', prompt: 'Sei in un ristorante. Cosa dici per chiedere il conto?', options: ['Voglio conto.', 'Il conto, per favore.', 'Dammi il conto.', 'Soldi.'], correctAnswer: 'Il conto, per favore.', points: 2 },
      { type: 'image-match', section: 'reading', prompt: 'Un cartello mostra: 🚫🚬. Cosa dice?', options: ['Fumare permesso', 'Vietato fumare', 'Area fumatori', 'Sigarette'], correctAnswer: 'Vietato fumare', points: 1 }
    ]
  }
];

