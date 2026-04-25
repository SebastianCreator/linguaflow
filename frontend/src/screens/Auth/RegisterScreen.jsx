// src/screens/Auth/RegisterScreen.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';
import Button from '../../components/common/Button';
import styles from './Auth.module.css';

const NATIVE_LANGS = [
  { code: 'es', label: '🇨🇴 Español' },
  { code: 'en', label: '🇺🇸 English' },
  { code: 'pt', label: '🇧🇷 Português' },
  { code: 'fr', label: '🇫🇷 Français' },
];

export default function RegisterScreen() {
  const { register, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', nativeLanguage: 'es' });
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length < 8) { toast.error('La contraseña debe tener al menos 8 caracteres'); return; }
    if (!/[A-Z]/.test(form.password)) { toast.error('La contraseña debe tener al menos una mayúscula'); return; }
    if (!/[0-9]/.test(form.password)) { toast.error('La contraseña debe tener al menos un número'); return; }

    const result = await register(form.name, form.email, form.password, form.nativeLanguage);
    if (result.success) {
      toast.success('¡Cuenta creada! Bienvenido a Fluenta 🎉');
      navigate('/languages');
    } else {
      toast.error(result.error);
    }
  };

  const set = (key) => (e) => setForm(p => ({ ...p, [key]: e.target.value }));

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Crear cuenta</h2>
        <p className={styles.formSubtitle}>Empieza tu camino hacia la fluidez</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Nombre completo</label>
          <input type="text" value={form.name} onChange={set('name')} placeholder="María García" required minLength={2} />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Correo electrónico</label>
          <input type="email" value={form.email} onChange={set('email')} placeholder="tu@correo.com" required autoComplete="email" />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Contraseña</label>
          <div className={styles.passwordWrap}>
            <input
              type={showPass ? 'text' : 'password'}
              value={form.password}
              onChange={set('password')}
              placeholder="Mínimo 8 caracteres"
              required
              autoComplete="new-password"
            />
            <button type="button" className={styles.eyeBtn} onClick={() => setShowPass(!showPass)}>{showPass ? '🙈' : '👁️'}</button>
          </div>
          <div className={styles.passwordStrength}>
            {[
              form.password.length >= 8 && '✓ 8+ caracteres',
              /[A-Z]/.test(form.password) && '✓ Mayúscula',
              /[0-9]/.test(form.password) && '✓ Número',
            ].filter(Boolean).map((req, i) => (
              <span key={i} className={styles.reqMet}>{req}</span>
            ))}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Idioma nativo</label>
          <select value={form.nativeLanguage} onChange={set('nativeLanguage')}>
            {NATIVE_LANGS.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>
        </div>

        <Button type="submit" loading={isLoading} fullWidth size="lg">
          Crear cuenta gratis
        </Button>

        <p className={styles.terms}>
          Al registrarte aceptas nuestros <a href="#" className={styles.switchLink}>términos de uso</a> y <a href="#" className={styles.switchLink}>política de privacidad</a>.
        </p>
      </form>

      <p className={styles.switchAuth}>
        ¿Ya tienes cuenta?{' '}
        <Link to="/login" className={styles.switchLink}>Iniciar sesión</Link>
      </p>
    </div>
  );
}
