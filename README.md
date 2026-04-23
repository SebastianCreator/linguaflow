# 🌐 LinguaFlow — Plataforma Académica de Idiomas (CEFR/MCER)

<div align="center">

![LinguaFlow](https://img.shields.io/badge/LinguaFlow-v1.0.0-6366F1?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb)
![React Native](https://img.shields.io/badge/React_Native-0.73-61DAFB?style=for-the-badge&logo=react)

**Plataforma full-stack para aprender idiomas con estructura académica CEFR del A1 al C2.**

</div>

---

## 📋 Tabla de contenidos

1. [Características](#características)
2. [Arquitectura del proyecto](#arquitectura)
3. [Tecnologías](#tecnologías)
4. [Instalación y configuración](#instalación)
5. [Variables de entorno](#variables-de-entorno)
6. [Ejecutar en desarrollo](#desarrollo)
7. [Despliegue en producción (web)](#despliegue-web)
8. [Empaquetado para móviles](#móviles)
9. [API Reference](#api-reference)
10. [Idiomas soportados](#idiomas)
11. [Estructura CEFR](#cefr)

---

## ✨ Características

| Área | Funcionalidades |
|------|----------------|
| 🔐 **Autenticación** | JWT + Refresh tokens, registro con verificación de email, recuperación de contraseña |
| 📊 **Panel de usuario** | Progreso por idioma, XP, rachas, logros académicos, actividad reciente |
| 📚 **Lecciones** | Vocabulario, gramática, comprensión auditiva, lectura, escritura, expresión oral por nivel CEFR |
| 📝 **Evaluaciones** | Exámenes cronometrados por nivel con corrección automática y certificación |
| 📱 **Offline** | IndexedDB (web) + AsyncStorage (móvil), sincronización diferida al recuperar conexión |
| 🔔 **Notificaciones** | Push notifications web (Service Worker + VAPID) y móviles (PushNotification) |
| 🎧 **Audio** | Text-to-Speech (Web Speech API / Google TTS), reconocimiento de voz (Web Speech API / Google STT) |
| 🌐 **Multi-idioma** | Inglés 🇬🇧, Francés 🇫🇷, Alemán 🇩🇪, Portugués 🇧🇷, Italiano 🇮🇹 — extensible |
| 📱 **PWA** | Instalable en Android/iOS/Desktop desde el navegador |
| 🎮 **Gamificación** | XP por ejercicio, niveles CEFR, rachas, 6+ tipos de logros |

---

## 🏗 Arquitectura

```
linguaflow/
│
├── backend/                    # API REST — Node.js + Express + MongoDB
│   ├── config/
│   │   ├── database.js         # Conexión MongoDB (Mongoose)
│   │   └── cefr.js             # Constantes CEFR, idiomas, logros
│   ├── controllers/
│   │   ├── authController.js   # Login, registro, JWT, verificación
│   │   └── lessonController.js # CRUD lecciones, completar, currículum
│   ├── middleware/
│   │   ├── auth.js             # protect / optionalAuth / requireRole
│   │   └── errorHandler.js     # Manejador global de errores
│   ├── models/
│   │   ├── User.js             # Usuario, inscripciones, logros, push subs
│   │   ├── Lesson.js           # Lecciones con ejercicios y contenido
│   │   └── index.js            # Evaluation, LessonProgress, EvaluationResult, Language
│   ├── routes/
│   │   ├── auth.js             # POST /auth/login|register|refresh...
│   │   ├── users.js            # GET|PUT /users/profile, /dashboard, /offline-bundle
│   │   ├── lessons.js          # GET /lessons, POST /lessons/:id/complete
│   │   ├── evaluations.js      # GET /evaluations, POST /evaluations/:id/submit
│   │   ├── languages.js        # GET /languages
│   │   ├── progress.js         # GET|POST /progress
│   │   └── notifications.js    # Push subscribe/unsubscribe/test
│   ├── services/
│   │   ├── achievementService.js  # Detección y otorgamiento de logros
│   │   ├── emailService.js        # Nodemailer: verificación, reset, certificados
│   │   └── speechService.js       # Google TTS/STT (backend proxy)
│   ├── utils/
│   │   ├── logger.js           # Winston logger
│   │   └── seedData.js         # Script para poblar MongoDB con datos iniciales
│   ├── server.js               # Entry point Express
│   ├── .env.example
│   └── package.json
│
├── frontend/                   # SPA — React 18 + Vite + PWA
│   ├── public/
│   │   └── icons/              # Iconos PWA (192px, 512px)
│   ├── src/
│   │   ├── components/
│   │   │   └── common/         # Button, Card, Badge, LevelBadge, ProgressBar, Skeleton, EmptyState, StatCard
│   │   ├── screens/
│   │   │   ├── Auth/           # LoginScreen, RegisterScreen, ForgotPasswordScreen
│   │   │   ├── Dashboard/      # DashboardScreen, LanguagesScreen
│   │   │   ├── Lessons/        # LessonsScreen, LessonDetailScreen, LessonPlayerScreen
│   │   │   ├── Evaluation/     # EvaluationsScreen, EvaluationPlayerScreen
│   │   │   ├── Profile/        # ProfileScreen (ajustes, offline, sync)
│   │   │   └── Landing/        # LandingScreen
│   │   ├── services/
│   │   │   ├── api.js          # Axios + interceptors JWT + endpoints tipados
│   │   │   ├── i18n.js         # Traducciones ES/EN
│   │   │   ├── offlineStorage.js # IndexedDB via idb
│   │   │   └── speechService.js  # Web Speech API TTS/STT
│   │   ├── store/
│   │   │   └── authStore.js    # Zustand con persistencia localStorage
│   │   ├── styles/
│   │   │   └── globals.css     # Tokens de diseño, reset, utilidades
│   │   ├── App.jsx             # Router con rutas protegidas
│   │   └── main.jsx            # Entry point + Service Worker
│   ├── vite.config.js          # Vite + PWA + proxy API
│   ├── .env.example
│   └── package.json
│
├── mobile/                     # React Native 0.73
│   ├── App.js                  # Navigation + StatusBar
│   ├── src/
│   │   ├── screens/            # Mismas pantallas adaptadas a RN
│   │   ├── services/
│   │   │   ├── api.js          # Axios + AsyncStorage para tokens
│   │   │   └── notificationService.js # react-native-push-notification
│   │   └── store/
│   │       └── authStore.js    # Zustand con AsyncStorage
│   ├── android/                # Proyecto Android Gradle
│   ├── ios/                    # Proyecto Xcode
│   └── package.json
│
├── docs/                       # Documentación adicional
├── package.json                # Workspace root
└── README.md
```

---

## 🛠 Tecnologías

### Backend
| Paquete | Uso |
|---------|-----|
| Express 4 | Framework HTTP |
| Mongoose 8 | ODM para MongoDB |
| bcryptjs | Hashing de contraseñas |
| jsonwebtoken | Autenticación JWT |
| express-validator | Validación de inputs |
| helmet + cors + rate-limit | Seguridad HTTP |
| nodemailer | Correos transaccionales |
| web-push | Notificaciones push VAPID |
| winston | Logging estructurado |
| node-cron | Tareas programadas |

### Frontend
| Paquete | Uso |
|---------|-----|
| React 18 | UI |
| React Router 6 | Navegación SPA |
| Vite 5 | Build tool |
| vite-plugin-pwa | PWA + Service Worker |
| Framer Motion | Animaciones |
| Zustand | Estado global |
| Axios | HTTP client |
| idb | IndexedDB wrapper |
| react-hot-toast | Notificaciones UI |

### Mobile
| Paquete | Uso |
|---------|-----|
| React Native 0.73 | Framework móvil |
| React Navigation 6 | Navegación nativa |
| react-native-push-notification | Push local + remoto |
| react-native-voice | Reconocimiento de voz |
| react-native-sound | Audio nativo |

---

## ⚙️ Instalación

### Requisitos previos
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **MongoDB** ≥ 6.x (local o Atlas)
- **Git**

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/linguaflow.git
cd linguaflow
```

### 2. Instalar dependencias

```bash
# Instalar todas las dependencias (backend + frontend)
npm run install:all

# O manualmente:
cd backend  && npm install
cd ../frontend && npm install
```

### 3. Configurar variables de entorno

```bash
# Backend
cp backend/.env.example backend/.env
# Edita backend/.env con tus valores

# Frontend
cp frontend/.env.example frontend/.env
# Edita frontend/.env con la URL de tu API
```

### 4. Poblar la base de datos con datos de ejemplo

```bash
cd backend
npm run seed
```

Esto creará:
- 5 idiomas (Inglés, Francés, Alemán, Portugués, Italiano)
- 5+ lecciones de ejemplo (A1→B1 Inglés, A1 Francés)
- 1 evaluación de nivel A1 en Inglés

---

## 🔑 Variables de entorno

### Backend (`backend/.env`)

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# MongoDB
MONGO_URI=mongodb://localhost:27017/linguaflow
# O con MongoDB Atlas:
# MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/linguaflow

# JWT — genera claves seguras con: openssl rand -base64 64
JWT_SECRET=tu_clave_jwt_super_secreta
JWT_REFRESH_SECRET=tu_clave_refresh_super_secreta

# Email (Gmail: usa App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu@gmail.com
SMTP_PASS=tu_app_password

# Web Push — genera con: npx web-push generate-vapid-keys
VAPID_PUBLIC_KEY=
VAPID_PRIVATE_KEY=
VAPID_EMAIL=admin@tudominio.com

# Opcional: Google Cloud (TTS/STT de alta calidad)
GOOGLE_TTS_API_KEY=
GOOGLE_STT_API_KEY=
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Ejecutar en desarrollo

```bash
# Desde la raíz — inicia backend y frontend simultáneamente
npm run dev

# O por separado:
npm run dev:backend    # http://localhost:5000
npm run dev:frontend   # http://localhost:3000
```

**Credenciales de demo:**
```
Email:    demo@linguaflow.app
Password: Demo1234
```
*(Si ejecutaste el seed, crea manualmente este usuario o usa el formulario de registro)*

---

## 🌍 Despliegue web (producción)

### Opción A: Docker Compose

```bash
# Construir y levantar todo
docker-compose up -d

# El archivo docker-compose.yml necesitas crearlo con:
# - servicio mongodb
# - servicio backend (NODE_ENV=production)
# - servicio frontend (nginx sirviendo el build)
```

### Opción B: Manual en VPS (Ubuntu)

```bash
# 1. Build del frontend
cd frontend
npm run build
# Los archivos quedan en frontend/dist/

# 2. Servir con Nginx
# Copia frontend/dist/ a /var/www/linguaflow/
# Configura nginx para SPA (try_files $uri /index.html)

# 3. Backend con PM2
cd backend
npm install -g pm2
pm2 start server.js --name linguaflow-api
pm2 save && pm2 startup
```

### Opción C: Plataformas cloud

**Backend:**
- **Railway** / **Render**: Conecta el repo, configura variables de entorno, auto-deploy
- **Heroku**: `heroku create && git push heroku main`
- **AWS EC2** / **DigitalOcean**: Manual con PM2 + Nginx

**Frontend (PWA):**
- **Vercel**: `vercel deploy` (detecta Vite automáticamente)
- **Netlify**: `netlify deploy --prod --dir=dist`
- **Cloudflare Pages**: Conecta el repo, `dist` como output

**Base de datos:**
- **MongoDB Atlas**: Free tier disponible en cloud.mongodb.com

```bash
# Variables en producción
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/linguaflow
NODE_ENV=production
CLIENT_URL=https://tudominio.com
```

---

## 📱 Empaquetado para móviles

### Requisitos adicionales
- **Android**: Android Studio + JDK 17 + Android SDK
- **iOS**: macOS + Xcode 14+ + CocoaPods

### Configuración inicial React Native

```bash
cd mobile
npm install

# iOS (solo macOS)
cd ios && pod install && cd ..

# Android
# Abre android/ en Android Studio y sincroniza Gradle
```

### Cambiar la URL del API

Edita `mobile/src/services/api.js`:
```js
const API_URL = 'https://tuapi.tudominio.com/api';
```

### Ejecutar en simulador

```bash
# Android
npm run android

# iOS
npm run ios
```

### Build de producción

#### Android APK / AAB

```bash
cd mobile

# Generar keystore (solo primera vez)
keytool -genkeypair -v -storetype PKCS12 \
  -keystore android/app/linguaflow.keystore \
  -alias linguaflow -keyalg RSA -keysize 2048 -validity 10000

# Build release AAB (recomendado para Play Store)
cd android
./gradlew bundleRelease

# O APK
./gradlew assembleRelease

# Output: android/app/build/outputs/
```

#### iOS IPA

```bash
cd mobile

# Build en Xcode:
# 1. Abre ios/LinguaFlow.xcworkspace en Xcode
# 2. Selecciona "Any iOS Device"
# 3. Product → Archive
# 4. Distribute App → App Store Connect / Ad Hoc

# O con CLI:
npx react-native build-ios --configuration Release
```

### PWA (instalable desde el navegador)

La versión web ya es una PWA completa. Los usuarios pueden instalarla:
- **Android Chrome**: Menú → "Añadir a pantalla de inicio"
- **iOS Safari**: Compartir → "Añadir a pantalla de inicio"
- **Desktop Chrome/Edge**: Icono de instalación en la barra de direcciones

---

## 📡 API Reference

### Autenticación

```
POST   /api/auth/register        Crear cuenta
POST   /api/auth/login           Iniciar sesión
POST   /api/auth/refresh         Renovar access token
GET    /api/auth/me              Perfil actual (requiere token)
GET    /api/auth/verify/:token   Verificar email
POST   /api/auth/forgot-password Solicitar reset
POST   /api/auth/reset-password/:token Cambiar contraseña
```

### Usuarios

```
GET    /api/users/profile        Perfil del usuario
PUT    /api/users/profile        Actualizar perfil
POST   /api/users/enroll         Inscribirse en idioma
GET    /api/users/dashboard      Panel con estadísticas
GET    /api/users/offline-bundle/:lang Bundle para uso offline
```

### Lecciones

```
GET    /api/lessons               Listar lecciones (?language=en&level=A1&module=vocabulary)
GET    /api/lessons/:id           Obtener lección con ejercicios
GET    /api/lessons/curriculum/:language/:level  Currículum agrupado por módulo
POST   /api/lessons/:id/complete  Registrar finalización { score, exerciseResults, timeSpentSeconds }
```

### Evaluaciones

```
GET    /api/evaluations           Listar evaluaciones (?language=en&level=A1)
GET    /api/evaluations/:id       Obtener evaluación con preguntas
POST   /api/evaluations/:id/submit Enviar respuestas { answers[], timeSpentSeconds }
```

### Progreso

```
GET    /api/progress/:language    Progreso del usuario en un idioma
POST   /api/progress/sync         Sincronizar progreso offline { offlineProgress[] }
```

### Notificaciones

```
POST   /api/notifications/subscribe    Suscribir push subscription
DELETE /api/notifications/unsubscribe  Cancelar suscripción
POST   /api/notifications/test         Enviar notificación de prueba
GET    /api/notifications/vapid-public-key VAPID public key
```

---

## 🌐 Idiomas soportados

| Código | Idioma | Estado | Dificultad* |
|--------|--------|--------|------------|
| `en` | Inglés 🇬🇧 | ✅ Activo | ⭐⭐ |
| `fr` | Francés 🇫🇷 | ✅ Activo | ⭐⭐⭐ |
| `de` | Alemán 🇩🇪 | ✅ Activo | ⭐⭐⭐⭐ |
| `pt` | Portugués 🇧🇷 | ✅ Activo | ⭐ |
| `it` | Italiano 🇮🇹 | ✅ Activo | ⭐⭐ |
| `zh` | Mandarín 🇨🇳 | 🔜 Próximo | ⭐⭐⭐⭐⭐ |
| `ja` | Japonés 🇯🇵 | 🔜 Próximo | ⭐⭐⭐⭐⭐ |

*Dificultad para hispanohablantes

### Añadir un nuevo idioma

1. Añadir en `backend/config/cefr.js` → `SUPPORTED_LANGUAGES`
2. Insertar documento en la colección `languages` de MongoDB
3. Crear lecciones con `languageCode: 'xx'` usando el seed script o la API admin
4. Añadir el flag y nombre en los componentes frontend (`LANG_FLAGS`, `LANG_NAMES`)

---

## 🎓 Estructura CEFR

| Nivel | Nombre | XP Requerido | Módulos |
|-------|--------|-------------|---------|
| **A1** | Principiante | 0 XP | Vocabulario, Gramática, Comprensión, Lectura |
| **A2** | Elemental | 500 XP | + Escritura |
| **B1** | Intermedio | 1.200 XP | + Expresión Oral |
| **B2** | Interm. Alto | 2.500 XP | Todos |
| **C1** | Avanzado | 4.500 XP | + Académico |
| **C2** | Maestría | 8.000 XP | + Cultural |

### Tipos de ejercicios

- `multiple-choice` — Selección múltiple (4 opciones)
- `fill-in-blank` — Completar espacios en blanco
- `translation` — Traducción libre
- `matching` — Emparejar columnas
- `true-false` — Verdadero o Falso
- `audio-listen` — Escuchar y responder
- `voice-record` — Grabar pronunciación
- `essay` — Redacción libre

---

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Con cobertura
npm test -- --coverage
```

---

## 🤝 Contribuir

1. Fork del repositorio
2. Crea tu rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m "feat: añadir nueva funcionalidad"`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

MIT License — libre para uso personal y comercial.

---

<div align="center">
  Hecho con ❤️ para el aprendizaje de idiomas
  <br/>
  <strong>LinguaFlow</strong> — Domina cualquier idioma a tu ritmo
</div>
