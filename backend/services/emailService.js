// services/emailService.js
const nodemailer = require('nodemailer');
const logger = require('../utils/logger');

const createTransport = () => {
  if (process.env.NODE_ENV === 'production') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
  }
  // Dev: use ethereal
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: { user: process.env.DEV_SMTP_USER || '', pass: process.env.DEV_SMTP_PASS || '' }
  });
};

const BASE_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const FROM = `"LinguaFlow" <${process.env.FROM_EMAIL || 'noreply@linguaflow.app'}>`;

exports.sendVerificationEmail = async (email, name, token) => {
  const url = `${BASE_URL}/verify-email/${token}`;
  const transporter = createTransport();
  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: 'Verifica tu cuenta en LinguaFlow',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px">
        <h1 style="color:#2563EB">LinguaFlow 🌐</h1>
        <p>Hola <strong>${name}</strong>,</p>
        <p>Gracias por registrarte. Haz clic en el botón para verificar tu cuenta:</p>
        <a href="${url}" style="display:inline-block;background:#2563EB;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;margin:16px 0">Verificar cuenta</a>
        <p style="color:#666;font-size:13px">O copia este enlace: ${url}</p>
        <p style="color:#666;font-size:13px">Este enlace expira en 24 horas.</p>
      </div>`
  });
  logger.info(`Verification email sent to ${email}`);
};

exports.sendPasswordResetEmail = async (email, name, token) => {
  const url = `${BASE_URL}/reset-password/${token}`;
  const transporter = createTransport();
  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: 'Restablece tu contraseña — LinguaFlow',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px">
        <h1 style="color:#2563EB">LinguaFlow 🌐</h1>
        <p>Hola <strong>${name}</strong>,</p>
        <p>Recibimos una solicitud para restablecer tu contraseña:</p>
        <a href="${url}" style="display:inline-block;background:#DC2626;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;margin:16px 0">Restablecer contraseña</a>
        <p style="color:#666;font-size:13px">Este enlace expira en 30 minutos. Si no solicitaste esto, ignora este correo.</p>
      </div>`
  });
};

exports.sendLevelCertificate = async (email, name, language, level) => {
  const transporter = createTransport();
  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: `🎓 ¡Felicitaciones! Completaste el nivel ${level} — LinguaFlow`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;text-align:center">
        <h1 style="color:#2563EB">🎓 Certificado de Logro</h1>
        <p style="font-size:18px">¡Felicitaciones, <strong>${name}</strong>!</p>
        <p>Has completado el nivel <strong>${level}</strong> en <strong>${language}</strong> en LinguaFlow.</p>
        <div style="background:#F0F9FF;border:2px solid #2563EB;border-radius:12px;padding:24px;margin:24px 0">
          <p style="font-size:22px;font-weight:bold;color:#2563EB">${level} — ${language}</p>
          <p style="color:#666">Según el Marco Común Europeo de Referencia (CEFR)</p>
        </div>
        <a href="${BASE_URL}/dashboard" style="display:inline-block;background:#2563EB;color:white;padding:12px 24px;border-radius:6px;text-decoration:none">Ver mi progreso</a>
      </div>`
  });
};
