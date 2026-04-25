// data/lessons/en_A1_active.js — English A1 con métodos de aprendizaje activos
module.exports = [

  // ══════════════════════════════════════════════════════
  //  MÓDULO: VOCABULARY — SRS + Image-Match + Mnemonic
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Greetings — Active Recall & SRS',
    titleEs: 'Saludos — Recuerdo activo y SRS',
    description: 'Master greetings using spaced repetition, image association and mnemonics.',
    descriptionEs: 'Domina los saludos usando repetición espaciada, asociación visual y mnemotecnia.',
    objectives: ['Recall greetings without cues', 'Associate words with images', 'Create personal mnemonics'],
    objectivesEs: ['Recordar saludos sin pistas', 'Asociar palabras con imágenes', 'Crear mnemónicos personales'],
    content: [
      { type: 'text', content: 'SRS Method: You will see each word 3 times — immediately, after 2 minutes, then after 10 minutes. This creates long-term memory.', contentEs: 'Método SRS: Verás cada palabra 3 veces — inmediatamente, después de 2 minutos, y luego de 10 minutos. Esto crea memoria a largo plazo.' },
      { type: 'tip', content: 'Mnemonic for "Goodbye": Think "GOOD-BYE" = "Good to see you, BYE!" Imagine waving at a friend.', contentEs: 'Mnemónico para "Goodbye": Piensa "GOOD-BYE" = "Bueno verte, ADIÓS". Imagina saludando a un amigo.' },
      { type: 'example', content: `Image associations:
🌅 "Good morning" → Picture a sunrise
🌇 "Good evening" → Picture a sunset
👋 "Hello" → Picture a waving hand` }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Match the greeting with the correct image', promptEs: 'Empareja el saludo con la imagen correcta', options: ['🌅', '👋', '🌇', '😴'], correctAnswer: { 'Good morning': '🌅', 'Hello': '👋', 'Good evening': '🌇', 'Good night': '😴' }, explanation: 'Associate each greeting with a visual scene.', explanationEs: 'Asocia cada saludo con una imagen visual.', xpReward: 15 },
      { type: 'dictation', prompt: 'Listen and write: "Good morning, how are you?"', correctAnswer: 'Good morning, how are you?', explanation: 'Train your ear and spelling simultaneously.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Create a personal story for "Goodbye": What image helps YOU remember it? Write one sentence.', correctAnswer: 'open', explanation: 'Personal connections improve memory by 40%.', xpReward: 15 },
      { type: 'interleaved', prompt: 'Quick! What greeting would you use at 7 AM? At 9 PM? Saying farewell?', correctAnswer: ['Good morning', 'Good evening', 'Goodbye'], explanation: 'Mixing contexts forces deeper retrieval.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Play the audio and repeat simultaneously: "Hello, nice to meet you!"', correctAnswer: 'Hello, nice to meet you!', explanation: 'Shadowing trains pronunciation muscles and rhythm.', xpReward: 20 }
    ],
    xpReward: 85, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'srs', 'mnemonics', 'active-recall']
  },

  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Numbers — Dictation & Scramble',
    titleEs: 'Números — Dictado y ordenar',
    description: 'Master numbers through listening, writing, and sentence reconstruction.',
    descriptionEs: 'Domina los números a través de escucha, escritura y reconstrucción de frases.',
    objectives: ['Write numbers from audio', 'Reconstruct scrambled sentences', 'Use numbers in real contexts'],
    objectivesEs: ['Escribir números del audio', 'Reconstruir frases desordenadas', 'Usar números en contextos reales'],
    content: [
      { type: 'text', content: 'Dictation trains your brain to connect sounds → spelling → meaning in one step.', contentEs: 'El dictado entrena tu cerebro para conectar sonidos → ortografía → significado en un solo paso.' },
      { type: 'tip', content: 'For "thirteen" vs "thirty": ThirTEEN has a long E sound. ThirTY ends sharply. Listen carefully!', contentEs: 'Para "thirteen" vs "thirty": ThirTEEN tiene sonido E largo. ThirTY termina bruscamente. ¡Escucha con atención!' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Listen and write: "Twenty-five, thirty-eight, seventeen"', correctAnswer: 'Twenty-five, thirty-eight, seventeen', xpReward: 20 },
      { type: 'dictation', prompt: 'Listen and write: "I am twenty-two years old."', correctAnswer: 'I am twenty-two years old.', xpReward: 20 },
      { type: 'scramble', prompt: 'Rearrange: "old / am / I / years / twenty-four"', correctAnswer: 'I am twenty-four years old.', explanation: 'Scramble forces you to understand sentence structure.', xpReward: 15 },
      { type: 'scramble', prompt: 'Rearrange: "phone / my / number / is / five-five-five-one-two-three-four"', correctAnswer: 'My phone number is five-five-five-one-two-three-four.', xpReward: 15 },
      { type: 'task-based', prompt: 'You are at a hotel. Tell the receptionist your room number is 302. Write exactly what you say.', correctAnswer: 'My room number is three oh two.', explanation: 'Real situations improve practical fluency.', xpReward: 20 }
    ],
    xpReward: 90, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'numbers', 'dictation', 'scramble', 'task-based']
  },

  {
    languageCode: 'en', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'Colors — Image Association + Cloze',
    titleEs: 'Colores — Asociación visual + Cloze',
    description: 'Learn colors by connecting them to images and completing real descriptions.',
    descriptionEs: 'Aprende colores conectándolos a imágenes y completando descripciones reales.',
    objectives: ['Name colors from images', 'Complete descriptions with missing colors', 'Describe objects using color'],
    objectivesEs: ['Nombrar colores de imágenes', 'Completar descripciones con colores faltantes', 'Describir objetos usando color'],
    content: [
      { type: 'text', content: 'Instead of translating, THINK in English. See RED → think "red" (not "rojo → red").', contentEs: 'En lugar de traducir, PIENSA en inglés. Ve ROJO → piensa "red" (no "rojo → red").' },
      { type: 'example', content: 'Cloze technique: "The sky is ___ and the grass is ___." You fill gaps from CONTEXT, not translation.' }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Match: "The stop sign is ___"', promptEs: 'Empareja: "La señal de pare es ___"', options: ['red', 'blue', 'green', 'yellow'], correctAnswer: 'red', xpReward: 10 },
      { type: 'image-match', prompt: 'Match: "The ocean is ___"', promptEs: 'Empareja: "El océano es ___"', options: ['red', 'blue', 'green', 'black'], correctAnswer: 'blue', xpReward: 10 },
      { type: 'cloze', prompt: 'Complete: "Bananas are ___, lemons are ___, and strawberries are ___."', correctAnswer: ['yellow', 'yellow', 'red'], explanation: 'Cloze uses context clues instead of direct translation.', xpReward: 20 },
      { type: 'cloze', prompt: 'Complete: "At night the sky is ___. In the day it is ___."', correctAnswer: ['black', 'blue'], xpReward: 15 },
      { type: 'task-based', prompt: 'You are shopping. Ask for "a red shirt, size medium, and blue jeans." Write what you say.', correctAnswer: 'I would like a red shirt, size medium, and blue jeans, please.', xpReward: 20 }
    ],
    xpReward: 75, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'colors', 'image-match', 'cloze']
  },

  // ══════════════════════════════════════════════════════
  //  MÓDULO: GRAMMAR — Scramble + Shadowing + Interleaved
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'en', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Verb "To Be" — Scramble & Shadowing',
    titleEs: 'Verbo "To Be" — Ordenar y Repetir',
    description: 'Master "to be" by reconstructing sentences and shadowing native audio.',
    descriptionEs: 'Domina "to be" reconstruyendo oraciones y repitiendo audio nativo.',
    objectives: ['Form correct sentences with to be', 'Shadow native pronunciation', 'Use contractions naturally'],
    objectivesEs: ['Formar oraciones correctas con to be', 'Repetir pronunciación nativa', 'Usar contracciones naturalmente'],
    content: [
      { type: 'grammar-table', content: 'I am / I\'m | You are / You\'re | He is / He\'s | She is / She\'s | It is / It\'s | We are / We\'re | They are / They\'re' },
      { type: 'tip', content: 'Shadowing tip: Repeat WITH the audio, not after it. Mimic the rhythm, stress, and intonation exactly.', contentEs: 'Consejo de shadowing: Repite CON el audio, no después. Imita el ritmo, acento e intonación exactamente.' }
    ],
    exercises: [
      { type: 'scramble', prompt: 'Rearrange: "doctor / a / she / is"', correctAnswer: 'She is a doctor.', xpReward: 15 },
      { type: 'scramble', prompt: 'Rearrange: "not / I / am / student / a"', correctAnswer: 'I am not a student.', xpReward: 15 },
      { type: 'scramble', prompt: 'Rearrange: "are / where / you / from"', correctAnswer: 'Where are you from?', xpReward: 15 },
      { type: 'shadowing', prompt: 'Shadow: "I\'m from Colombia, and I\'m a teacher."', correctAnswer: 'I\'m from Colombia, and I\'m a teacher.', xpReward: 20 },
      { type: 'shadowing', prompt: 'Shadow: "They\'re not at home right now."', correctAnswer: 'They\'re not at home right now.', xpReward: 20 },
      { type: 'interleaved', prompt: 'Fill the blank (mixing pronouns): "___ am happy. ___ is tired. ___ are friends."', correctAnswer: ['I', 'He', 'We'], explanation: 'Mixing different forms forces active retrieval.', xpReward: 20 }
    ],
    xpReward: 105, totalDurationMinutes: 22, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'to-be', 'scramble', 'shadowing', 'interleaved']
  },

  {
    languageCode: 'en', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 1,
    title: 'Articles A/An/The — Cloze + Dictation',
    titleEs: 'Artículos A/An/The — Cloze + Dictado',
    description: 'Master articles through contextual cloze and listening practice.',
    descriptionEs: 'Domina los artículos a través de cloze contextual y práctica auditiva.',
    objectives: ['Choose articles from context', 'Hear and write articles correctly', 'Understand article rules'],
    objectivesEs: ['Elegir artículos del contexto', 'Oír y escribir artículos correctamente', 'Entender las reglas de artículos'],
    content: [
      { type: 'text', content: 'Cloze method: Your brain fills gaps using grammar patterns, not memorization.', contentEs: 'Método cloze: Tu cerebro llena huecos usando patrones gramaticales, no memorización.' }
    ],
    exercises: [
      { type: 'cloze', prompt: 'Complete: "I have ___ apple and ___ banana. ___ apple is red."', correctAnswer: ['an', 'a', 'The'], explanation: 'First mention = a/an. Second mention (specific) = the.', xpReward: 20 },
      { type: 'cloze', prompt: 'Complete: "She is ___ engineer. He is ___ doctor. ___ engineer works at night."', correctAnswer: ['an', 'a', 'The'], xpReward: 20 },
      { type: 'dictation', prompt: 'Listen: "An honest man and a university student walked into the museum."', correctAnswer: 'An honest man and a university student walked into the museum.', xpReward: 25 },
      { type: 'interleaved', prompt: 'Choose: "I need ___ new car. ___ car I saw yesterday was expensive."', options: ['a / A', 'a / The', 'the / A', 'an / The'], correctAnswer: 'a / The', xpReward: 15 }
    ],
    xpReward: 80, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'articles', 'cloze', 'dictation']
  },

  {
    languageCode: 'en', level: 'A1', module: 'grammar',
    order: 3, unitNumber: 2,
    title: 'Present Simple — Task-Based + Conversation Sim',
    titleEs: 'Presente Simple — Tareas + Simulación de Conversación',
    description: 'Use present simple in real tasks and simulated conversations.',
    descriptionEs: 'Usa el presente simple en tareas reales y conversaciones simuladas.',
    objectives: ['Complete real-life tasks', 'Navigate conversation choices', 'Form questions and negatives'],
    objectivesEs: ['Completar tareas de la vida real', 'Navegar opciones de conversación', 'Formar preguntas y negaciones'],
    content: [
      { type: 'text', content: 'Task-based learning: You complete a goal (order food, book a room) using ONLY English.', contentEs: 'Aprendizaje basado en tareas: Completas un objetivo (pedir comida, reservar habitación) usando SOLO inglés.' }
    ],
    exercises: [
      { type: 'task-based', prompt: 'You are at a café. Order: coffee, no sugar. Write your order.', correctAnswer: 'I would like a coffee, please. No sugar.', xpReward: 20 },
      { type: 'task-based', prompt: 'Write an email to a friend: "I work from Monday to Friday. I start at 9."', correctAnswer: 'I work from Monday to Friday. I start at 9.', xpReward: 20 },
      { type: 'conversation-sim', prompt: 'Barista: "What would you like?" You: (choose response)', options: ['I am coffee.', 'I like coffee.', 'I would like a coffee, please.', 'Coffee is good.'], correctAnswer: 'I would like a coffee, please.', xpReward: 20 },
      { type: 'conversation-sim', prompt: 'Friend: "Do you play sports?" You: (choose if you play tennis)', options: ['Yes, I play tennis.', 'Yes, I am play tennis.', 'Yes, I plays tennis.', 'Yes, playing tennis.'], correctAnswer: 'Yes, I play tennis.', xpReward: 20 },
      { type: 'scramble', prompt: 'Rearrange: "work / she / doesn\'t / Saturdays / on"', correctAnswer: 'She doesn\'t work on Saturdays.', xpReward: 15 }
    ],
    xpReward: 95, totalDurationMinutes: 22, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'present-simple', 'task-based', 'conversation-sim']
  },

  // ══════════════════════════════════════════════════════
  //  MÓDULO: LISTENING — Dictation + Shadowing + Cloze
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'en', level: 'A1', module: 'listening',
    order: 1, unitNumber: 1,
    title: 'Listening: People & Places — Dictation Intensive',
    titleEs: 'Listening: Personas y Lugares — Dictado Intensivo',
    description: 'Train your ear with intensive dictation of real conversations.',
    descriptionEs: 'Entrena tu oído con dictado intensivo de conversaciones reales.',
    objectives: ['Write exactly what you hear', 'Identify key information', 'Recognize connected speech'],
    objectivesEs: ['Escribir exactamente lo que escuchas', 'Identificar información clave', 'Reconocer habla conectada'],
    content: [
      { type: 'text', content: 'Dictation is the #1 method for improving listening. You catch sounds your brain normally ignores.', contentEs: 'El dictado es el método #1 para mejorar la escucha. Atrapa sonidos que tu cerebro normalmente ignora.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Listen: "My name is Sarah. I\'m from London. I\'m a nurse."', correctAnswer: 'My name is Sarah. I\'m from London. I\'m a nurse.', xpReward: 25 },
      { type: 'dictation', prompt: 'Listen: "Excuse me, where is the train station?" "Go straight and turn left."', correctAnswer: 'Excuse me, where is the train station? Go straight and turn left.', xpReward: 25 },
      { type: 'cloze', prompt: 'Audio: "I live in ___ apartment near ___ park. ___ apartment is small but nice."', correctAnswer: ['an', 'a', 'The'], xpReward: 20 },
      { type: 'shadowing', prompt: 'Shadow: "Excuse me, could you tell me where the bathroom is?"', correctAnswer: 'Excuse me, could you tell me where the bathroom is?', xpReward: 20 }
    ],
    xpReward: 90, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['listening', 'dictation', 'shadowing', 'connected-speech']
  },

  // ══════════════════════════════════════════════════════
  //  MÓDULO: SPEAKING — Shadowing + Conversation Sim
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'en', level: 'A1', module: 'speaking',
    order: 1, unitNumber: 1,
    title: 'Speaking: Introductions — Shadow & Simulate',
    titleEs: 'Speaking: Presentaciones — Repetir y Simular',
    description: 'Practice speaking through shadowing and real conversation scenarios.',
    descriptionEs: 'Practica hablar mediante shadowing y escenarios de conversación reales.',
    objectives: ['Shadow native speakers fluently', 'Handle social introductions', 'Ask and answer naturally'],
    objectivesEs: ['Repetir hablantes nativos fluidamente', 'Manejar presentaciones sociales', 'Preguntar y responder naturalmente'],
    content: [
      { type: 'tip', content: 'Record yourself shadowing, then compare with the original. The gap shows what to improve.', contentEs: 'Grábate haciendo shadowing, luego compara con el original. La diferencia muestra qué mejorar.' }
    ],
    exercises: [
      { type: 'shadowing', prompt: 'Shadow 3 times: "Hi, I\'m Carlos. Nice to meet you!"', correctAnswer: 'Hi, I\'m Carlos. Nice to meet you!', xpReward: 25 },
      { type: 'conversation-sim', prompt: 'You meet someone new. Choose the best opening:', options: ['What is your name?', 'Hi, I\'m [your name]. Nice to meet you!', 'Tell me your name.', 'Name?'], correctAnswer: 'Hi, I\'m [your name]. Nice to meet you!', xpReward: 20 },
      { type: 'conversation-sim', prompt: 'Stranger: "Where are you from?" Best response:', options: ['I am Colombia.', 'I from Colombia.', 'I\'m from Colombia.', 'Colombia is my country.'], correctAnswer: 'I\'m from Colombia.', xpReward: 20 },
      { type: 'voice-record', prompt: 'Record yourself: "Hello, my name is [your name]. I\'m from [your country]. I\'m a [your job]."', correctAnswer: 'open', xpReward: 30 }
    ],
    xpReward: 95, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['speaking', 'shadowing', 'conversation-sim', 'fluency']
  },

  // ══════════════════════════════════════════════════════
  //  MÓDULO: READING — Cloze + Image Context
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'en', level: 'A1', module: 'reading',
    order: 1, unitNumber: 1,
    title: 'Reading: Signs & Menus — Cloze in Context',
    titleEs: 'Reading: Señales y Menús — Cloze en Contexto',
    description: 'Read real-world texts by filling gaps using context clues.',
    descriptionEs: 'Lee textos del mundo real llenando huecos usando pistas del contexto.',
    objectives: ['Infer meaning from context', 'Read signs and menus', 'Understand without translating'],
    objectivesEs: ['Inferir significado del contexto', 'Leer señales y menús', 'Entender sin traducir'],
    content: [
      { type: 'example', content: `MENU CLOZE:
"___ of the Day: Grilled Chicken ___ rice and vegetables. ___: $12.50"
Context clues: "of the Day" → Soup or Special. "rice" → with. Price → Cost.` }
    ],
    exercises: [
      { type: 'cloze', prompt: 'Sign: "___ OPEN ___ 9:00 ___ 18:00. Closed ___ Sundays."', correctAnswer: ['We are', 'from', 'to', 'on'], xpReward: 20 },
      { type: 'cloze', prompt: 'Menu: "___ of the Day: Tomato ___ with bread. ___: $8."', correctAnswer: ['Soup', 'soup', 'Price'], xpReward: 20 },
      { type: 'image-match', prompt: 'A sign shows 🚫 + 🚬. What does it say?', promptEs: 'Una señal muestra 🚫 + 🚬. ¿Qué dice?', options: ['No smoking', 'Smoke here', 'Smoking area', 'Cigarettes for sale'], correctAnswer: 'No smoking', xpReward: 15 },
      { type: 'task-based', prompt: 'You read a train schedule. Your train to Paris leaves at 14:30. Write the time in words.', correctAnswer: 'Two thirty pm / Fourteen thirty.', xpReward: 15 }
    ],
    xpReward: 70, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['reading', 'cloze', 'context', 'real-world']
  },

  // ══════════════════════════════════════════════════════
  //  MÓDULO: WRITING — Dictation + Scramble + Task
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'en', level: 'A1', module: 'writing',
    order: 1, unitNumber: 2,
    title: 'Writing: Messages — Dictation & Reconstruction',
    titleEs: 'Writing: Mensajes — Dictado y Reconstrucción',
    description: 'Write accurately through dictation and sentence reconstruction.',
    descriptionEs: 'Escribe con precisión mediante dictado y reconstrucción de oraciones.',
    objectives: ['Write from dictation', 'Fix scrambled messages', 'Write short texts'],
    objectivesEs: ['Escribir de dictado', 'Arreglar mensajes desordenados', 'Escribir textos cortos'],
    content: [
      { type: 'tip', content: 'Writing improves when you hear → write → read back. Dictation trains this exact loop.', contentEs: 'La escritura mejora cuando escuchas → escribes → lees de vuelta. El dictado entrena exactamente este ciclo.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Listen: "Hi Maria, I am late. See you at the café at 3. Sorry! —John"', correctAnswer: 'Hi Maria, I am late. See you at the café at 3. Sorry! —John', xpReward: 25 },
      { type: 'scramble', prompt: 'Fix this message: "meeting / the / is / at / conference / room / The / 10."', correctAnswer: 'The meeting is at the conference room at 10.', xpReward: 15 },
      { type: 'task-based', prompt: 'Write a WhatsApp message to a friend: "I\'m sick today. I can\'t go to class. See you tomorrow."', correctAnswer: 'open', xpReward: 25 },
      { type: 'cloze', prompt: 'Complete: "Dear ___, Thank you ___ your help. ___ you soon. ___ regards, ___"', correctAnswer: ['Sir/Madam', 'for', 'See', 'Best', 'your name'], xpReward: 20 }
    ],
    xpReward: 85, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['writing', 'dictation', 'scramble', 'messages']
  }
];

