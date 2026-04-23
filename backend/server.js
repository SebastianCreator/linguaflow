// ─────────────────────────────────────────────
//  LinguaFlow · server.js  — Express entry point
// ─────────────────────────────────────────────
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const connectDB = require('./config/database');
const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const lessonRoutes = require('./routes/lessons');
const evaluationRoutes = require('./routes/evaluations');
const languageRoutes = require('./routes/languages');
const progressRoutes = require('./routes/progress');
const notificationRoutes = require('./routes/notifications');

const app = express();

// ── Connect to MongoDB ──
connectDB();

// ── Security middleware ──
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ── Rate limiting ──
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many auth attempts, please try again later.' }
});

app.use('/api/', limiter);
app.use('/api/auth/', authLimiter);

// ── Body parsers ──
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── Logging ──
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined', { stream: logger.stream }));
}

// ── Health check ──
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.0.0' });
});

// ── API Routes ──
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/evaluations', evaluationRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/notifications', notificationRoutes);

// ── 404 ──
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

// ── Global error handler ──
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`🚀 LinguaFlow server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
});

module.exports = app;
