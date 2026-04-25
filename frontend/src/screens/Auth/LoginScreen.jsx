// src/screens/Auth/LoginScreen.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';
import Button from '../../components/common/Button';
import styles from './Auth.module.css';

export default function LoginScreen() {
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(form.email, form.password);
    if (result.success) {
      toast.success('¡Bienvenido de vuelta!');
      navigate('/dashboard');
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Iniciar sesión</h2>
        <p className={styles.formSubtitle}>Continúa tu aprendizaje donde lo dejaste</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Correo electrónico</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            placeholder="tu@correo.com"
            required
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <div className={styles.labelRow}>
            <label className={styles.label}>Contraseña</label>
            <Link to="/forgot-password" className={styles.forgotLink}>¿Olvidaste tu contraseña?</Link>
          </div>
          <div className={styles.passwordWrap}>
            <input
              type={showPass ? 'text' : 'password'}
              value={form.password}
              onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
            <button type="button" className={styles.eyeBtn} onClick={() => setShowPass(!showPass)}>
              {showPass ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <Button type="submit" loading={isLoading} fullWidth size="lg">
          Iniciar sesión
        </Button>

        <div className={styles.divider}><span>o</span></div>

        {/* Demo login */}
        <button
          type="button"
          className={styles.demoBtn}
          onClick={() => setForm({ email: 'demo@fluenta.app', password: 'Demo1234' })}
        >
          🎯 Usar cuenta demo
        </button>
      </form>

      <p className={styles.switchAuth}>
        ¿No tienes cuenta?{' '}
        <Link to="/register" className={styles.switchLink}>Regístrate gratis</Link>
      </p>
    </div>
  );
}
