// data/lessons/pt_A1.js — Portuguese A1 Lessons (6 lecciones)
module.exports = [

  {
    languageCode: 'pt', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Cumprimentos e Apresentações',
    titleEs: 'Saludos y presentaciones en portugués',
    description: 'Learn basic Portuguese greetings and self-introductions.',
    descriptionEs: 'Aprende saludos básicos en portugués y presentaciones.',
    objectives: ['Greet people in Portuguese (Brazilian)', 'Introduce yourself', 'Ask and answer basic questions'],
    objectivesEs: ['Saludar personas en portugués (brasileño)', 'Presentarte', 'Hacer y responder preguntas básicas'],
    content: [
      { type: 'example', content: 'Saudações (Saludos):\nOlá / Oi = Hola\nBom dia = Buenos días\nBoa tarde = Buenas tardes\nBoa noite = Buenas noches\nTchau / Até logo = Adiós / Hasta luego\nObrigado (m) / Obrigada (f) = Gracias\nDe nada = De nada\nCom licença = Con permiso\nDesculpe = Disculpe' },
      { type: 'example', content: 'Apresentações:\nMeu nome é... = Mi nombre es...\nEu me chamo... = Me llamo...\nTenho [idade] anos. = Tengo [edad] años.\nSou de... = Soy de...\nComo você se chama? = ¿Cómo te llamas? (Brazil)\nPrazer em conhecer! = ¡Mucho gusto!' },
      { type: 'tip', content: 'Portuguese from Brazil (Português Brasileiro) is different from Portugal! Brazil uses "você" (you), Portugal uses "tu". In this course we study Brazilian Portuguese.', contentEs: '¡El portugués de Brasil es diferente al de Portugal! Brasil usa "você" (tú), Portugal usa "tu". En este curso estudiamos portugués brasileño.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "Buenos días" en portugués?', options: ['Boa tarde', 'Boa noite', 'Bom dia', 'Olá'], correctAnswer: 'Bom dia', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Meu ___ é João." (nombre)', correctAnswer: 'nome', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to Portuguese: "Me llamo María y soy de Colombia."', correctAnswer: 'Meu nome é María e sou da Colômbia. / Eu me chamo María e sou da Colômbia.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Obrigado" lo dice:', options: ['Una mujer', 'Un hombre', 'Cualquier persona', 'Solo en Portugal'], correctAnswer: 'Un hombre', explanation: '"Obrigado" (m.) para hombres, "Obrigada" (f.) para mujeres.', xpReward: 10 },
      { type: 'matching', prompt: 'Match Portuguese to Spanish', options: ['Olá', 'Tchau', 'Obrigada', 'Prazer'], correctAnswer: { 'Olá': 'Hola', 'Tchau': 'Adiós', 'Obrigada': 'Gracias (f.)', 'Prazer': 'Mucho gusto' }, xpReward: 20 },
      { type: 'true-false', prompt: '"Obrigada" lo diría un hombre para dar gracias.', correctAnswer: false, explanation: 'Un hombre dice "Obrigado". Una mujer dice "Obrigada".', xpReward: 10 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'cumprimentos', 'básico', 'português-brasileiro']
  },

  {
    languageCode: 'pt', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Verbo Ser e Estar',
    titleEs: 'Verbos Ser y Estar en portugués',
    description: 'Learn when to use "ser" and "estar" in Portuguese.',
    descriptionEs: 'Aprende cuándo usar "ser" y "estar" en portugués.',
    objectives: ['Conjugate ser and estar in present tense', 'Understand when to use each verb', 'Form basic sentences'],
    objectivesEs: ['Conjugar ser y estar en presente', 'Comprender cuándo usar cada verbo', 'Formar oraciones básicas'],
    content: [
      { type: 'grammar-table', content: 'SER (permanent characteristics):\neu sou = yo soy\nvocê é / ele é / ela é = tú eres / él es / ella es\nnós somos = nosotros somos\nvocês são = ustedes son' },
      { type: 'grammar-table', content: 'ESTAR (temporary states/location):\neu estou = yo estoy\nvocê está / ele está / ela está = tú estás / él está / ella está\nnós estamos = nosotros estamos\nvocês estão = ustedes están' },
      { type: 'example', content: 'SER: Eu sou brasileiro. (permanent nationality)\nESTAR: Eu estou em Bogotá. (temporary location)\nSER: Ela é médica. (profession)\nESTAR: Ela está cansada. (temporary state)' },
      { type: 'tip', content: 'Like Spanish: SER = permanent (identity, nationality, profession). ESTAR = temporary (location, emotions, states).', contentEs: 'Como en español: SER = permanente (identidad, nacionalidad, profesión). ESTAR = temporal (ubicación, emociones, estados).' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"Eu ___ de Bogotá." (ser — origen permanente)', options: ['estou', 'sou', 'é', 'são'], correctAnswer: 'sou', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Ela ___ muito feliz hoje." (estar — estado temporal)', correctAnswer: 'está', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Somos estudiantes de portugués."', correctAnswer: 'Nós somos estudantes de português.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"O João ___ médico." (profesión — permanente)', options: ['está', 'estão', 'é', 'somos'], correctAnswer: 'é', xpReward: 10 },
      { type: 'true-false', prompt: 'Para decir "Estoy en casa" en portugués se usa ESTAR.', correctAnswer: true, explanation: '"Estou em casa." — La ubicación usa ESTAR.', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "¿Cómo estás hoy?"', correctAnswer: 'Como você está hoje? / Tudo bem?', xpReward: 15 }
    ],
    xpReward: 55, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['gramática', 'ser', 'estar', 'verbos-essenciais']
  },

  {
    languageCode: 'pt', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Números em Português',
    titleEs: 'Los números en portugués',
    description: 'Learn to count and use numbers in Portuguese.',
    descriptionEs: 'Aprende a contar y usar números en portugués.',
    objectives: ['Count from 0 to 100', 'Use numbers in context', 'Say ages and prices'],
    objectivesEs: ['Contar del 0 al 100', 'Usar números en contexto', 'Decir edades y precios'],
    content: [
      { type: 'example', content: '1-10: um/uma, dois/duas, três, quatro, cinco, seis, sete, oito, nove, dez\n11-20: onze, doze, treze, quatorze, quinze, dezesseis, dezessete, dezoito, dezenove, vinte' },
      { type: 'example', content: 'Tens: vinte(20), trinta(30), quarenta(40), cinquenta(50)\nsessenta(60), setenta(70), oitenta(80), noventa(90), cem(100)' },
      { type: 'tip', content: 'Portuguese has masculine and feminine numbers! Um (1 masc.) / Uma (1 fem.), Dois (2 masc.) / Duas (2 fem.). Example: dois livros (2 books, masc.) / duas casas (2 houses, fem.)', contentEs: '¡El portugués tiene números masculinos y femeninos! Um/Uma (1), Dois/Duas (2). Ej: dois livros (2 libros, masc.) / duas casas (2 casas, fem.)' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Cómo se dice "70" en portugués?', options: ['sessenta', 'setenta', 'sete', 'settanta'], correctAnswer: 'setenta', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Tenho ___ (25) anos."', correctAnswer: 'vinte e cinco', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Duas casas" es correcto porque "casas" es:', options: ['Masculino', 'Femenino', 'Neutro', 'Plural'], correctAnswer: 'Femenino', explanation: '"Casa" es femenino → "duas casas". Si fuera masculino sería "dois".', xpReward: 15 },
      { type: 'translation', prompt: 'Translate: "Tengo treinta y tres años."', correctAnswer: 'Tenho trinta e três anos.', xpReward: 15 }
    ],
    xpReward: 50, totalDurationMinutes: 10, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'números', 'gênero']
  },

  {
    languageCode: 'pt', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'A Família',
    titleEs: 'La familia en portugués',
    description: 'Learn Portuguese vocabulary for family members.',
    descriptionEs: 'Aprende vocabulario en portugués para miembros de la familia.',
    objectives: ['Name family members in Portuguese', 'Use possessives meu/minha', 'Describe relationships'],
    objectivesEs: ['Nombrar miembros de la familia en portugués', 'Usar posesivos meu/minha', 'Describir relaciones'],
    content: [
      { type: 'example', content: 'A família:\no pai = el padre\na mãe = la madre\no irmão = el hermano\na irmã = la hermana\no filho = el hijo\na filha = la hija\no avô = el abuelo\na avó = la abuela\no tio = el tío\na tia = la tía\no marido = el esposo\na esposa/mulher = la esposa' },
      { type: 'grammar-table', content: 'Possessives:\nmeu (masc.) / minha (fem.) = mi\nO pai → meu pai (my father)\nA mãe → minha mãe (my mother)\nOs filhos → meus filhos (my children - masc.)\nAs filhas → minhas filhas (my daughters)' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"___ mãe é professora." (mi mamá — fem.)', correctAnswer: 'Minha', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to Portuguese: "Tengo una hermana y dos hermanos."', correctAnswer: 'Tenho uma irmã e dois irmãos.', xpReward: 15 },
      { type: 'matching', prompt: 'Match Portuguese to Spanish', options: ['pai', 'mãe', 'irmão', 'avó'], correctAnswer: { 'pai': 'padre', 'mãe': 'madre', 'irmão': 'hermano', 'avó': 'abuela' }, xpReward: 20 },
      { type: 'multiple-choice', prompt: '¿Cómo se dice "mi abuelo" en portugués?', options: ['minha avó', 'meu avô', 'meu irmão', 'minha tia'], correctAnswer: 'meu avô', xpReward: 10 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'família', 'possessivos']
  },

  {
    languageCode: 'pt', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 2,
    title: 'Verbos Regulares em -AR',
    titleEs: 'Verbos regulares en -AR en portugués',
    description: 'Learn to conjugate regular -AR verbs in Portuguese.',
    descriptionEs: 'Aprende a conjugar verbos regulares en -AR en portugués.',
    objectives: ['Identify -AR verbs', 'Conjugate them in present tense', 'Use them in sentences'],
    objectivesEs: ['Identificar verbos en -AR', 'Conjugarlos en presente', 'Usarlos en oraciones'],
    content: [
      { type: 'grammar-table', content: 'FALAR (hablar) — endings: -o, -a, -a, -amos, -am\neu falo = yo hablo\nvocê fala = tú hablas\nele/ela fala = él/ella habla\nnós falamos = nosotros hablamos\nvocês falam = ustedes hablan\neles/elas falam = ellos/ellas hablan' },
      { type: 'example', content: 'Common -AR verbs:\nfalar=hablar, trabalhar=trabajar, morar=vivir/residir\namar=amar, escutar=escuchar, comprar=comprar\nchamar=llamar, estudar=estudiar, gostar=gustar' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Nós ___ (trabalhar) em São Paulo."', correctAnswer: 'trabalhamos', xpReward: 10 },
      { type: 'translation', prompt: 'Translate to Portuguese: "Ella estudia inglés."', correctAnswer: 'Ela estuda inglês.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Vocês ___ (gostar) de música?" (a ustedes les gusta)', options: ['gosto', 'gosta', 'gostam', 'gostamos'], correctAnswer: 'gostam', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Yo hablo portugués y español."', correctAnswer: 'Eu falo português e espanhol.', xpReward: 15 },
      { type: 'true-false', prompt: '"Eu falo" tiene la misma terminación que "ele fala" en portugués.', correctAnswer: false, explanation: '"eu falo" (-o) vs "ele fala" (-a). Son terminaciones diferentes.', xpReward: 10 }
    ],
    xpReward: 55, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['gramática', 'verbos-AR', 'presente', 'conjugação']
  },

  {
    languageCode: 'pt', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Leitura: Um Dia no Brasil',
    titleEs: 'Lectura: Un día en Brasil',
    description: 'Read a short text about daily life in Brazil.',
    descriptionEs: 'Lee un texto corto sobre la vida cotidiana en Brasil.',
    objectives: ['Understand a simple descriptive text', 'Identify daily routine actions', 'Answer comprehension questions'],
    objectivesEs: ['Comprender un texto descriptivo simple', 'Identificar acciones de rutina diaria', 'Responder preguntas de comprensión'],
    content: [
      { type: 'example', content: 'TEXTO:\nOlá! Meu nome é Lucas e eu moro em São Paulo, no Brasil. Eu tenho 26 anos e sou engenheiro.\n\nDe manhã, eu acordo às seis horas e tomo café. Depois, vou trabalhar de metrô. No trabalho, eu falo muito em inglês porque a empresa é internacional.\n\nÀ noite, eu gosto de assistir futebol na televisão. No fim de semana, eu visito minha família ou saio com amigos.\n\nO Brasil é um país incrível! Tem muito sol, música e comida deliciosa. Eu adoro morar aqui!' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '¿Dónde vive Lucas?', options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'], correctAnswer: 'São Paulo', xpReward: 10 },
      { type: 'multiple-choice', prompt: '¿Cómo va Lucas al trabajo?', options: ['De carro', 'De autobús', 'De metrô', 'A pie'], correctAnswer: 'De metrô', xpReward: 10 },
      { type: 'true-false', prompt: 'Lucas habla inglés en el trabajo.', correctAnswer: true, xpReward: 10 },
      { type: 'multiple-choice', prompt: '¿A qué hora se despierta Lucas?', options: ['7 horas', '6 horas', '8 horas', '5 horas'], correctAnswer: '6 horas', xpReward: 10 },
      { type: 'translation', prompt: 'Translate: "Eu adoro morar aqui!"', correctAnswer: '¡Me encanta vivir aquí!', xpReward: 15 }
    ],
    xpReward: 50, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['leitura', 'cotidiano', 'brasil', 'compreensão']
  }
];
