// data/lessons/en_B1.js — English B1 Lessons (8 lecciones)
module.exports = [

  {
    languageCode: 'en', level: 'B1', module: 'grammar',
    order: 1, unitNumber: 9,
    title: 'Present Perfect vs. Past Simple',
    titleEs: 'Presente perfecto vs. Pasado simple',
    description: 'Master the distinction between these two key tenses.',
    descriptionEs: 'Domina la distinción entre estos dos tiempos clave.',
    objectives: ['Understand when to use each tense', 'Use time expressions correctly', 'Form Present Perfect with have/has + past participle'],
    objectivesEs: ['Comprender cuándo usar cada tiempo', 'Usar expresiones de tiempo correctamente', 'Formar el presente perfecto con have/has + participio'],
    content: [
      { type: 'text', content: 'Present Perfect: have/has + past participle', contentEs: 'Presente perfecto: have/has + participio pasado' },
      { type: 'grammar-table', content: 'USE PRESENT PERFECT for:\n✓ Life experiences (no specific time): I have visited Paris.\n✓ Recent events: She has just arrived.\n✓ Unfinished time: I have lived here for 5 years.\n✓ With: already, yet, ever, never, just, recently\n\nUSE PAST SIMPLE for:\n✓ Finished action + specific time: I visited Paris in 2019.\n✓ With: yesterday, last week, ago, in [year], when' },
      { type: 'example', content: 'Contrast:\n"I have eaten sushi." (experience, no time given)\n"I ate sushi last Friday." (specific past time)\n\n"Have you ever been to London?"\n"Yes, I went there in 2021."' },
      { type: 'tip', content: 'Key question: Do you know WHEN it happened? If yes → Past Simple. If no/not important → Present Perfect.', contentEs: 'Pregunta clave: ¿Sabes CUÁNDO ocurrió? Si sí → Pasado Simple. Si no/no importa → Presente Perfecto.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"I ___ to Japan twice." (life experience, no specific time)', options: ['went', 'have been', 'was', 'go'], correctAnswer: 'have been', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"She ___ home an hour ago." (specific past time)', options: ['has arrived', 'arrived', 'arrive', 'has arrive'], correctAnswer: 'arrived', explanation: '"An hour ago" indicates a specific past time → Past Simple.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Have you ever ___ (eat) Indian food?"', correctAnswer: 'eaten', explanation: 'Present Perfect uses the past participle: eat → eaten.', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Nunca he visto esa película."', correctAnswer: 'I have never seen that film/movie.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"___ you finish the project yet?" Which auxiliary?', options: ['Do', 'Did', 'Have', 'Are'], correctAnswer: 'Have', explanation: '"Yet" signals Present Perfect.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"I ___ (live) in this city since 2018." (ongoing situation)', correctAnswer: 'have lived', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "¿Has estado alguna vez en Colombia?"', correctAnswer: 'Have you ever been to Colombia?', xpReward: 15 },
      { type: 'true-false', prompt: '"I have seen that movie yesterday." is correct.', correctAnswer: false, explanation: '"Yesterday" requires Past Simple: "I SAW that movie yesterday."', xpReward: 15 }
    ],
    xpReward: 80, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'present-perfect', 'past-simple', 'tense-contrast']
  },

  {
    languageCode: 'en', level: 'B1', module: 'grammar',
    order: 2, unitNumber: 9,
    title: 'Future Forms: Will, Going To & Present Continuous',
    titleEs: 'Formas del futuro: Will, Going To y Presente Continuo',
    description: 'Learn the different ways to express future in English.',
    descriptionEs: 'Aprende las diferentes formas de expresar el futuro en inglés.',
    objectives: ['Distinguish will, going to and present continuous for future', 'Make predictions and plans', 'Express decisions made at the moment'],
    objectivesEs: ['Distinguir will, going to y presente continuo para futuro', 'Hacer predicciones y planes', 'Expresar decisiones tomadas en el momento'],
    content: [
      { type: 'grammar-table', content: 'WILL: Predictions / Spontaneous decisions\n→ "I think it will rain tomorrow."\n→ "I\'ll have the soup, please." (deciding now)\n\nGOING TO: Plans / Intentions / Evidence-based predictions\n→ "I\'m going to visit my parents next week." (arranged plan)\n→ "Look at those clouds — it\'s going to rain!" (evidence)\n\nPRESENT CONTINUOUS: Fixed future arrangements\n→ "I\'m meeting John at 6 pm tomorrow." (in diary)' },
      { type: 'tip', content: 'Trick: WILL = decision NOW. GOING TO = decision BEFORE. Present Continuous = event in calendar/diary.', contentEs: 'Truco: WILL = decisión AHORA. GOING TO = decisión ANTES. Presente Continuo = evento en agenda.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'Waiter: "Are you ready to order?" → You: "I ___ have the steak." (deciding now)', options: ['\'m going to', '\'ll', '\'m having', 'will be having'], correctAnswer: '\'ll', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"I ___ visit Madrid next summer — I already booked the flight!" (plan made before)', options: ['\'ll', '\'m going to', 'will', '\'m'], correctAnswer: '\'m going to', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Creo que va a llover esta tarde." (prediction with evidence)', correctAnswer: 'I think it\'s going to rain this afternoon.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"I ___ (meet) the director at 10 am tomorrow." (fixed appointment)', correctAnswer: '\'m meeting / am meeting', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "¿Qué harás este fin de semana?"', correctAnswer: 'What will you do this weekend? / What are you going to do this weekend?', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammar', 'future', 'will', 'going-to']
  },

  {
    languageCode: 'en', level: 'B1', module: 'vocabulary',
    order: 1, unitNumber: 9,
    title: 'Work & Careers',
    titleEs: 'Trabajo y carreras',
    description: 'Vocabulary for jobs, workplaces and professional life.',
    descriptionEs: 'Vocabulario para trabajos, lugares de trabajo y vida profesional.',
    objectives: ['Name 25+ professions', 'Describe job responsibilities', 'Talk about work experience'],
    objectivesEs: ['Nombrar 25+ profesiones', 'Describir responsabilidades laborales', 'Hablar sobre experiencia laboral'],
    content: [
      { type: 'example', content: 'Professions: doctor=médico, nurse=enfermero/a, engineer=ingeniero/a\nteacher=maestro/a, lawyer=abogado/a, accountant=contador/a\narchitect=arquitecto/a, programmer=programador/a, designer=diseñador/a\nmanager=gerente, director=director/a, CEO=director ejecutivo\nchef=chef/cocinero, mechanic=mecánico, electrician=electricista' },
      { type: 'example', content: 'Work vocabulary:\nto work for a company=trabajar para una empresa\nto be self-employed=ser independiente/autónomo\nto work from home=trabajar desde casa\nsalary=salario, wage=jornal, overtime=horas extra\ndeadline=fecha límite, meeting=reunión, colleague=colega' },
      { type: 'example', content: 'Talking about work:\n"What do you do for a living?" = ¿A qué te dedicas?\n"I work as a... / I am a..." = Trabajo como... / Soy...\n"I\'m responsible for..." = Soy responsable de...' }
    ],
    exercises: [
      { type: 'translation', prompt: 'Translate: "Trabajo como ingeniero de software en una empresa multinacional."', correctAnswer: 'I work as a software engineer at a multinational company.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"What do you do for a living?" means:', options: ['¿Cuánto ganas?', '¿Dónde vives?', '¿A qué te dedicas?', '¿Cuántos años tienes?'], correctAnswer: '¿A qué te dedicas?', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"I\'m ___ for the marketing department." (responsible)', correctAnswer: 'responsible', xpReward: 10 },
      { type: 'matching', prompt: 'Match professions to Spanish', options: ['Lawyer', 'Accountant', 'Architect', 'Nurse'], correctAnswer: { 'Lawyer': 'Abogado', 'Accountant': 'Contador', 'Architect': 'Arquitecto', 'Nurse': 'Enfermero' }, xpReward: 20 },
      { type: 'translation', prompt: 'Translate: "Tenemos una reunión mañana a las 10."', correctAnswer: 'We have a meeting tomorrow at 10.', xpReward: 15 }
    ],
    xpReward: 70, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'work', 'careers', 'professional']
  },

  {
    languageCode: 'en', level: 'B1', module: 'reading',
    order: 1, unitNumber: 9,
    title: 'Reading: News Articles',
    titleEs: 'Lectura: Artículos de noticias',
    description: 'Read and understand simplified news articles.',
    descriptionEs: 'Lee y comprende artículos de noticias simplificados.',
    objectives: ['Understand the structure of a news article', 'Identify the 5 Ws (who, what, where, when, why)', 'Infer meaning from context'],
    objectivesEs: ['Comprender la estructura de una noticia', 'Identificar las 5 preguntas clave (quién, qué, dónde, cuándo, por qué)', 'Inferir significado del contexto'],
    content: [
      { type: 'example', content: 'NEWS ARTICLE:\n\nCOLOMBIA WINS GOLD IN CYCLING\n\nBogotá, Colombia — Colombian cyclist Egan Bernal has won a gold medal at the international cycling championships held in Madrid, Spain, last Saturday.\n\nBernal, 27, from Zipaquirá, Colombia, completed the race in record time, finishing ahead of cyclists from 18 countries. It was his third major international victory this year.\n\n"I trained very hard for this competition," said Bernal after the race. "This medal is for all Colombians."\n\nThe Colombian Olympic Committee congratulated Bernal and said the result was "a great achievement for the country".' },
      { type: 'tip', content: '5 Ws for news: WHO did it? WHAT happened? WHERE did it happen? WHEN? WHY/HOW? Always ask these questions when reading news.', contentEs: '5 preguntas para noticias: QUIÉN lo hizo? QUÉ pasó? DÓNDE? CUÁNDO? POR QUÉ/CÓMO?' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'WHO won the gold medal?', options: ['A Spanish cyclist', 'A Colombian cyclist', 'The Olympic Committee', 'A Brazilian cyclist'], correctAnswer: 'A Colombian cyclist', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'WHERE did the championship take place?', options: ['Bogotá', 'Zipaquirá', 'Madrid, Spain', 'Colombia'], correctAnswer: 'Madrid, Spain', xpReward: 10 },
      { type: 'fill-in-blank', prompt: 'Bernal is from ___, Colombia.', correctAnswer: 'Zipaquirá', xpReward: 10 },
      { type: 'true-false', prompt: 'It was Bernal\'s first international victory.', correctAnswer: false, explanation: 'The article says it was his THIRD major international victory this year.', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'What does "record time" mean in the article?', options: ['Un tiempo grabado', 'El tiempo más rápido hasta ahora', 'Un tiempo muy lento', 'El tiempo promedio'], correctAnswer: 'El tiempo más rápido hasta ahora', xpReward: 15 },
      { type: 'translation', prompt: 'Translate from the article: "This medal is for all Colombians."', correctAnswer: 'Esta medalla es para todos los colombianos.', xpReward: 15 }
    ],
    xpReward: 70, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['reading', 'news', 'comprehension', 'journalism']
  },

  {
    languageCode: 'en', level: 'B1', module: 'writing',
    order: 1, unitNumber: 10,
    title: 'Writing: Opinion Paragraphs',
    titleEs: 'Escritura: Párrafos de opinión',
    description: 'Learn to express and support opinions in writing.',
    descriptionEs: 'Aprende a expresar y apoyar opiniones por escrito.',
    objectives: ['State your opinion clearly', 'Give reasons and examples', 'Use opinion phrases and linking words'],
    objectivesEs: ['Expresar tu opinión claramente', 'Dar razones y ejemplos', 'Usar frases de opinión y palabras de enlace'],
    content: [
      { type: 'grammar-table', content: 'Opinion phrases:\nIn my opinion, ... / I think that ... / I believe that ...\nFrom my point of view, ... / As I see it, ...\nIn my view, ... / It seems to me that ...\n\nReason phrases:\nThis is because ... / The reason is that ...\nDue to this, ... / As a result, ...\n\nExample phrases:\nFor example, ... / For instance, ... / Such as ...' },
      { type: 'example', content: 'SAMPLE OPINION PARAGRAPH:\n"In my opinion, learning a foreign language is one of the best investments you can make in yourself. This is because it opens doors to new cultures, improves your memory, and increases your job opportunities. For example, many international companies require employees to speak at least two languages. Furthermore, speaking another language can help you understand your own culture better. Therefore, I strongly recommend that everyone try to learn a new language."' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'Which phrase introduces an opinion?', options: ['For example,', 'In my opinion,', 'As a result,', 'However,'], correctAnswer: 'In my opinion,', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"___ example, many people work from home today." (introducing an example)', correctAnswer: 'For', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Desde mi punto de vista, la tecnología ha cambiado nuestras vidas."', correctAnswer: 'From my point of view, technology has changed our lives.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Due to this" is used to:', options: ['Give an example', 'State an opinion', 'Show a result/consequence', 'Contradict an idea'], correctAnswer: 'Show a result/consequence', xpReward: 15 },
      { type: 'essay', prompt: 'Write an opinion paragraph (80–100 words) about this topic: "Is social media good or bad for young people?" Use at least 3 opinion and linking phrases.', correctAnswer: 'open', explanation: 'Check: opinion phrase + reason + example + conclusion.', xpReward: 40 }
    ],
    xpReward: 75, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['writing', 'opinion', 'argumentative', 'linking-words']
  },

  {
    languageCode: 'en', level: 'B1', module: 'speaking',
    order: 1, unitNumber: 10,
    title: 'Discussing Pros and Cons',
    titleEs: 'Discutir ventajas y desventajas',
    description: 'Practice presenting both sides of an argument in English.',
    descriptionEs: 'Practica presentar los dos lados de un argumento en inglés.',
    objectives: ['Present advantages and disadvantages', 'Use discourse markers', 'Give a balanced spoken opinion'],
    objectivesEs: ['Presentar ventajas y desventajas', 'Usar marcadores del discurso', 'Dar una opinión oral equilibrada'],
    content: [
      { type: 'grammar-table', content: 'Adding points: Furthermore, / Moreover, / In addition, / Also,\nContrasting: However, / On the other hand, / Nevertheless, / Although,\nConcluding: In conclusion, / To sum up, / Overall, / To conclude,' },
      { type: 'example', content: 'Topic: "Working from home"\nPROS: save commute time, flexible schedule, better work-life balance\nCONS: isolation, distractions, blurred work/home boundary\n\nSAMPLE: "Working from home has advantages and disadvantages. On the one hand, it saves time and allows flexibility. On the other hand, it can feel isolating and it\'s hard to separate work from personal life. In my opinion, a hybrid model works best."' }
    ],
    exercises: [
      { type: 'voice-record', prompt: 'Give your opinion on this topic for 30 seconds: "Is it better to live in a city or in the countryside?"', correctAnswer: 'open - balanced argument with pros and cons', xpReward: 35 },
      { type: 'multiple-choice', prompt: 'Which marker shows CONTRAST?', options: ['Furthermore', 'However', 'In addition', 'Also'], correctAnswer: 'However', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"___ the other hand, living in the city can be stressful."', correctAnswer: 'On', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Por otro lado, hay muchas desventajas."', correctAnswer: 'On the other hand, there are many disadvantages.', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['speaking', 'debate', 'discourse-markers', 'opinion']
  },

  {
    languageCode: 'en', level: 'B1', module: 'listening',
    order: 1, unitNumber: 10,
    title: 'Understanding Radio & Podcasts',
    titleEs: 'Comprender radio y podcasts',
    description: 'Develop skills to understand spoken English in media contexts.',
    descriptionEs: 'Desarrolla habilidades para comprender inglés hablado en contextos de medios.',
    objectives: ['Identify the topic and main idea of a talk', 'Understand speaker attitudes', 'Take notes while listening'],
    objectivesEs: ['Identificar el tema e idea principal de una charla', 'Comprender actitudes del hablante', 'Tomar notas mientras escuchas'],
    content: [
      { type: 'text', content: 'PODCAST TRANSCRIPT (read carefully):', contentEs: 'TRANSCRIPCIÓN DE PODCAST (lee con cuidado):' },
      { type: 'example', content: 'HOST: Good morning and welcome to "Language Matters". I\'m your host, Sarah Chen. Today we\'re talking about the best ways to learn a new language as an adult. I have a special guest, Dr. Marco Pérez, a linguistics professor from the University of Bogotá.\n\nDr. Pérez, what\'s the number one mistake adult language learners make?\n\nDR. PÉREZ: Great question! I think the biggest mistake is focusing too much on grammar and not enough on real communication. Adults tend to be perfectionists — they\'re afraid to make mistakes. But actually, making mistakes is how we learn. You need to speak from day one, even if you\'re not perfect.\n\nHOST: That\'s really interesting. What strategies do you recommend?\n\nDR. PÉREZ: Three things: First, find a language partner or join a conversation group. Second, consume content in the language — films, music, podcasts. And third — most importantly — don\'t translate in your head. Try to think directly in the new language.' },
      { type: 'tip', content: 'Listening strategy: 1st listen → What is the topic? 2nd listen → Details. 3rd listen → Opinions/attitudes.', contentEs: 'Estrategia: 1er escucha → ¿Cuál es el tema? 2da → Detalles. 3ra → Opiniones/actitudes.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: 'What is the topic of the podcast?', options: ['Learning grammar', 'Best ways to learn a language as an adult', 'The history of Spanish', 'Technology in education'], correctAnswer: 'Best ways to learn a language as an adult', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'According to Dr. Pérez, what is the biggest mistake learners make?', options: ['Speaking too much', 'Focusing too much on grammar', 'Learning too many languages', 'Using apps'], correctAnswer: 'Focusing too much on grammar', xpReward: 10 },
      { type: 'true-false', prompt: 'Dr. Pérez recommends not translating in your head.', correctAnswer: true, xpReward: 10 },
      { type: 'multiple-choice', prompt: 'How many strategies does Dr. Pérez recommend?', options: ['1', '2', '3', '4'], correctAnswer: '3', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Making mistakes is how we learn."', correctAnswer: 'Cometer errores es cómo aprendemos.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: 'Dr. Pérez says adults are "___" — afraid to make mistakes.', correctAnswer: 'perfectionists', xpReward: 15 }
    ],
    xpReward: 70, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['listening', 'media', 'podcast', 'comprehension']
  },

  {
    languageCode: 'en', level: 'B1', module: 'vocabulary',
    order: 2, unitNumber: 10,
    title: 'Health & Medicine',
    titleEs: 'Salud y medicina',
    description: 'Vocabulary for health, illnesses, symptoms and medical visits.',
    descriptionEs: 'Vocabulario para salud, enfermedades, síntomas y visitas médicas.',
    objectives: ['Describe symptoms and illnesses', 'Talk to a doctor', 'Understand medical advice'],
    objectivesEs: ['Describir síntomas y enfermedades', 'Hablar con un médico', 'Comprender consejos médicos'],
    content: [
      { type: 'example', content: 'Body parts: head=cabeza, throat=garganta, chest=pecho, stomach=estómago\nback=espalda, arm=brazo, leg=pierna, knee=rodilla' },
      { type: 'example', content: 'Symptoms: fever=fiebre, headache=dolor de cabeza, cough=tos\nsore throat=dolor de garganta, runny nose=nariz mocosa/moqueada\nnausea=náuseas, dizziness=mareo, rash=sarpullido' },
      { type: 'example', content: 'At the doctor:\nPatient: I have a terrible headache and a fever.\nDoctor: How long have you had these symptoms?\nPatient: Since yesterday morning.\nDoctor: I\'ll prescribe some antibiotics. Take one tablet twice a day for 7 days.\nPatient: Should I rest?\nDoctor: Yes, drink plenty of water and get some rest.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"Fiebre" in English is:', options: ['Flu', 'Fever', 'Cough', 'Rash'], correctAnswer: 'Fever', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Tengo dolor de cabeza desde esta mañana."', correctAnswer: 'I have had a headache since this morning.', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"___ you had any allergies?" (doctor asking — present perfect)', correctAnswer: 'Have', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Take one tablet twice a day" means:', options: ['Toma dos pastillas por día', 'Toma una pastilla dos veces al día', 'Toma dos pastillas dos veces al día', 'Toma una pastilla al día'], correctAnswer: 'Toma una pastilla dos veces al día', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "¿Desde cuándo tienes estos síntomas?"', correctAnswer: 'How long have you had these symptoms?', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Drink plenty of ___." (doctor\'s advice)', correctAnswer: 'water', xpReward: 5 }
    ],
    xpReward: 70, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['vocabulary', 'health', 'medicine', 'body']
  }
];
