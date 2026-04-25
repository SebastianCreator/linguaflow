// src/components/common/AuthLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './AuthLayout.module.css';

export default function AuthLayout() {
  return (
    <div className={styles.layout}>
      {/* Decorative background */}
      <div className={styles.bgDecor}>
        {['A1','A2','B1','B2','C1','C2'].map((lvl, i) => (
          <div key={lvl} className={styles.floatingBadge} style={{
            '--delay': `${i * 0.8}s`,
            '--x': `${10 + i * 15}%`,
            '--y': `${20 + (i % 3) * 25}%`,
          }}>{lvl}</div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Left panel */}
        <motion.div
          className={styles.leftPanel}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className={styles.logo}>
            <span className={styles.logoEmoji}>🌐</span>
            <span className={styles.logoText}>Fluenta</span>
          </Link>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Domina<br/>
              <span className={styles.gradientText}>cualquier idioma</span>
              <br/>a tu ritmo
            </h1>
            <p className={styles.heroDesc}>
              Plataforma académica estructurada en los niveles del Marco Común Europeo de Referencia (MCER/CEFR). Inglés, Francés, Alemán y más.
            </p>
            <div className={styles.features}>
              {[
                { icon: '🎓', text: 'Certificados por nivel CEFR' },
                { icon: '🎧', text: 'Audio nativo y reconocimiento de voz' },
                { icon: '📱', text: 'Funciona sin conexión a internet' },
                { icon: '🔥', text: 'Rachas y logros académicos' },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <span>{f.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.langFlags}>
            {['🇬🇧','🇫🇷','🇩🇪','🇧🇷','🇮🇹'].map((flag, i) => (
              <motion.span
                key={i}
                className={styles.flag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.07 }}
              >{flag}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right panel (form) */}
        <motion.div
          className={styles.rightPanel}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}
