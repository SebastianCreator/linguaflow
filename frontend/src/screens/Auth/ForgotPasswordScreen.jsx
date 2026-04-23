// src/screens/Auth/ForgotPasswordScreen.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authAPI } from '../../services/api';
import Button from '../../components/common/Button';
import styles from './Auth.module.css';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authAPI.forgotPassword(email);
      setSent(true);
    } catch {
      toast.error('Error al enviar el correo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Recuperar contraseña</h2>
        <p className={styles.formSubtitle}>Te enviaremos un enlace para restablecer tu contraseña</p>
      </div>
      {sent ? (
        <div className={styles.successBox}>
          <h3>📧 Correo enviado</h3>
          <p>Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>Correo electrónico</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@correo.com" required />
          </div>
          <Button type="submit" loading={loading} fullWidth size="lg">Enviar enlace</Button>
        </form>
      )}
      <p className={styles.switchAuth}>
        <Link to="/login" className={styles.switchLink}>← Volver al inicio de sesión</Link>
      </p>
    </div>
  );
}
