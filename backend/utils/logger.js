// utils/logger.js
const winston = require('winston');
const path = require('path');

const { combine, timestamp, printf, colorize, errors } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: combine(colorize(), timestamp({ format: 'HH:mm:ss' }), logFormat)
    }),
    ...(process.env.NODE_ENV === 'production' ? [
      new winston.transports.File({ filename: path.join('logs', 'error.log'), level: 'error' }),
      new winston.transports.File({ filename: path.join('logs', 'combined.log') })
    ] : [])
  ]
});

logger.stream = {
  write: (message) => logger.info(message.trim())
};

module.exports = logger;
