// src/screens/Landing/LandingScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Landing.module.css';

const FEATURES = [
  { icon:'🎓', title:'Niveles CEFR / MCER', desc:'A1 hasta C2 con lecciones académicas estructuradas y certificaciones por nivel.' },
  { icon:'🎧', title:'Audio nativo', desc:'Texto a voz y reconocimiento de voz para pronunciación real usando Web Speech API.' },
  { icon:'📱', title:'Offline total', desc:'Descarga lecciones completas con IndexedDB y sincroniza cuando recuperes conexión.' },
  { icon:'🔥', title:'Gamificación', desc:'XP, rachas diarias, logros y progreso visual para mantenerte motivado.' },
  { icon:'🌐', title:'5 idiomas', desc:'Inglés, Francés, Alemán, Portugués e Italiano. Con soporte para añadir más.' },
  { icon:'📝', title:'Evaluaciones', desc:'Exámenes por nivel con corrección automática y certificado digital al aprobar.' },
];

const LEVELS = [
  { code:'A1', name:'Principiante', color:'#4ADE80', desc:'Expresiones básicas cotidianas' },
  { code:'A2', name:'Elemental', color:'#86EFAC', desc:'Frases de uso frecuente' },
  { code:'B1', name:'Intermedio', color:'#60A5FA', desc:'Situaciones habituales de viaje' },
  { code:'B2', name:'Interm. Alto', color:'#818CF8', desc:'Textos complejos y abstractos' },
  { code:'C1', name:'Avanzado', color:'#E879F9', desc:'Expresión fluida y espontánea' },
  { code:'C2', name:'Maestría', color:'#FB923C', desc:'Comprensión total de todo' },
];

export default function LandingScreen() {
  return (
    <div className={styles.page}>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <span>🌐</span>
          <span className={styles.logoText}>Fluenta</span>
        </div>
        <div className={styles.navLinks}>
          <Link to="/login" className={styles.navLink}>Iniciar sesión</Link>
          <Link to="/register" className={styles.navCta}>Empezar gratis →</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <motion.div className={styles.heroContent} initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
          <div className={styles.heroBadge}>🏛️ Basado en el Marco Común Europeo (MCER / CEFR)</div>
          <h1 className={styles.heroTitle}>
            Aprende idiomas con<br/>
            <span className={styles.gradientText}>rigor académico</span>
          </h1>
          <p className={styles.heroDesc}>
            La plataforma que lleva el sistema europeo de certificación de idiomas a tu dispositivo. Aprende inglés, francés, alemán y más con lecciones estructuradas del A1 al C2.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/register" className={styles.ctaPrimary}>Comenzar gratis — Es gratis</Link>
            <Link to="/login" className={styles.ctaSecondary}>Ya tengo cuenta</Link>
          </div>
          <div className={styles.heroFlags}>
            {['🇬🇧','🇫🇷','🇩🇪','🇧🇷','🇮🇹'].map((f,i) => (
              <motion.span key={i} style={{ fontSize:32 }} initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ delay: 0.5 + i*0.08 }}>{f}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* Floating level cards */}
        <motion.div className={styles.heroVisual} initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.2 }}>
          <div className={styles.levelCards}>
            {LEVELS.map((l, i) => (
              <motion.div
                key={l.code}
                className={styles.levelCard}
                style={{ '--lvl-c': l.color }}
                initial={{ opacity:0, x:30 }}
                animate={{ opacity:1, x:0 }}
                transition={{ delay: 0.4 + i*0.1 }}
                whileHover={{ scale:1.05, x:8 }}
              >
                <span className={styles.levelCode} style={{ color: l.color }}>{l.code}</span>
                <div>
                  <div className={styles.levelName}>{l.name}</div>
                  <div className={styles.levelDesc}>{l.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Todo lo que necesitas para dominar un idioma</h2>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              className={styles.featureCard}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i*0.07 }}
            >
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className={styles.ctaTitle}>¿Listo para tu primera lección?</h2>
          <p className={styles.ctaDesc}>Únete a miles de estudiantes que ya aprenden con Fluenta.</p>
          <Link to="/register" className={styles.ctaPrimary}>Crear cuenta gratis →</Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>🌐 Fluenta</div>
        <p className={styles.footerText}>Plataforma académica de idiomas basada en el MCER / CEFR</p>
        <div className={styles.footerLinks}>
          <Link to="/login">Acceder</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      </footer>
    </div>
  );
}
