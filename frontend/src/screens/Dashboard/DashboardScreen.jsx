// src/screens/Dashboard/DashboardScreen.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';
import { usersAPI } from '../../services/api';
import { Card, StatCard, LevelBadge, ProgressBar, Skeleton, EmptyState } from '../../components/common/Card';
import Button from '../../components/common/Button';
import styles from './Dashboard.module.css';

const CEFR_COLORS = { A1:'#4ADE80', A2:'#86EFAC', B1:'#60A5FA', B2:'#818CF8', C1:'#E879F9', C2:'#FB923C' };
const CEFR_XP = { A1:0, A2:500, B1:1200, B2:2500, C1:4500, C2:8000 };
const CEFR_NEXT = { A1:500, A2:1200, B1:2500, B2:4500, C1:8000, C2:null };

const MODULE_ICONS = {
  vocabulary:'📚', grammar:'✏️', listening:'🎧',
  reading:'📖', writing:'📝', speaking:'🎤', academic:'🎓', cultural:'🌍'
};

const LANG_FLAGS = { en:'🇬🇧', fr:'🇫🇷', de:'🇩🇪', pt:'🇧🇷', it:'🇮🇹' };
const LANG_NAMES = { en:'Inglés', fr:'Francés', de:'Alemán', pt:'Portugués', it:'Italiano' };

export default function DashboardScreen() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersAPI.getDashboard()
      .then(res => setDashboard(res.data))
      .catch(() => toast.error('Error al cargar el panel'))
      .finally(() => setLoading(false));
  }, []);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <motion.div className={styles.hero} initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>{greeting},</p>
          <h1 className={styles.heroName}>{user?.name?.split(' ')[0]} 👋</h1>
          <p className={styles.heroSub}>
            {user?.enrollments?.length
              ? `Tienes ${user.enrollments.length} idioma${user.enrollments.length > 1 ? 's' : ''} activo${user.enrollments.length > 1 ? 's' : ''}. ¡Sigue adelante!`
              : '¡Empieza eligiendo tu primer idioma!'}
          </p>
        </div>
        {(dashboard?.loginStreak || 0) > 0 && (
          <div className={styles.streakPill}>
            <span className={styles.streakFire}>🔥</span>
            <span className={styles.streakNum}>{dashboard?.loginStreak}</span>
            <span className={styles.streakLabel}>días de racha</span>
          </div>
        )}
      </motion.div>

      {/* Stats */}
      {loading ? (
        <div className={styles.statsGrid}>
          {[1,2,3,4].map(i => <Skeleton key={i} height={88} />)}
        </div>
      ) : (
        <motion.div className={styles.statsGrid} variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <StatCard icon="⚡" label="XP Total" value={dashboard?.totalXP?.toLocaleString() || '0'} color="var(--accent-amber)" sub="puntos de experiencia" />
          </motion.div>
          <motion.div variants={item}>
            <StatCard icon="🌐" label="Idiomas" value={dashboard?.enrollments?.length || 0} color="var(--brand-primary)" sub="activos" />
          </motion.div>
          <motion.div variants={item}>
            <StatCard icon="📖" label="Lecciones" value={dashboard?.enrollments?.reduce((s,e) => s + (e.completedLessons?.length||0),0) || 0} color="var(--accent-emerald)" sub="completadas" />
          </motion.div>
          <motion.div variants={item}>
            <StatCard icon="🏆" label="Logros" value={dashboard?.achievements?.length || 0} color="var(--accent-violet)" sub="desbloqueados" />
          </motion.div>
        </motion.div>
      )}

      <div className={styles.mainGrid}>
        {/* My Languages */}
        <div className={styles.mainLeft}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Mis Idiomas</h2>
            <Button variant="ghost" size="sm" onClick={() => navigate('/languages')}>+ Añadir</Button>
          </div>

          {loading ? (
            <div className={styles.langCards}>{[1,2].map(i => <Skeleton key={i} height={140} />)}</div>
          ) : !dashboard?.enrollments?.length ? (
            <EmptyState icon="🌐" title="Sin idiomas aún" description="Elige un idioma para comenzar tu aprendizaje CEFR."
              action={<Button onClick={() => navigate('/languages')} size="sm">Elegir idioma</Button>} />
          ) : (
            <div className={styles.langCards}>
              {dashboard.enrollments.map((enr, i) => {
                const xp = enr.totalXP || 0;
                const nextXP = CEFR_NEXT[enr.currentLevel];
                const baseXP = CEFR_XP[enr.currentLevel] || 0;
                const pct = nextXP ? Math.min(100, ((xp - baseXP) / (nextXP - baseXP)) * 100) : 100;

                return (
                  <motion.div key={enr.languageCode} initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay: i*0.1 }}>
                    <Card hover onClick={() => navigate(`/lessons/${enr.languageCode}`)}>
                      <div className={styles.langCardHeader}>
                        <div className={styles.langInfo}>
                          <span className={styles.langFlag}>{LANG_FLAGS[enr.languageCode] || '🌍'}</span>
                          <div>
                            <div className={styles.langName}>{LANG_NAMES[enr.languageCode] || enr.languageCode.toUpperCase()}</div>
                            <div className={styles.langXP}>{xp.toLocaleString()} XP</div>
                          </div>
                        </div>
                        <LevelBadge level={enr.currentLevel} size="lg" />
                      </div>
                      <ProgressBar
                        value={xp - baseXP}
                        max={nextXP ? nextXP - baseXP : 100}
                        color={CEFR_COLORS[enr.currentLevel]}
                        label={nextXP ? `Hacia ${Object.keys(CEFR_NEXT)[Object.keys(CEFR_NEXT).indexOf(enr.currentLevel)+1] || enr.currentLevel}` : 'Nivel máximo'}
                      />
                      <div className={styles.langActions}>
                        <Button size="sm" onClick={e => { e.stopPropagation(); navigate(`/lessons/${enr.languageCode}`); }}>
                          📖 Lecciones
                        </Button>
                        <Button size="sm" variant="secondary" onClick={e => { e.stopPropagation(); navigate(`/evaluations/${enr.languageCode}`); }}>
                          📝 Evaluar
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right side: achievements + activity */}
        <div className={styles.mainRight}>
          {/* Recent Activity */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Actividad reciente</h2>
          </div>
          <Card padding="sm">
            {loading ? (
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {[1,2,3].map(i => <Skeleton key={i} height={56} />)}
              </div>
            ) : !dashboard?.recentActivity?.length ? (
              <EmptyState icon="📅" title="Sin actividad" description="Completa lecciones para ver tu historial." />
            ) : (
              <div className={styles.activityList}>
                {dashboard.recentActivity.slice(0,5).map((a, i) => (
                  <div key={i} className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      {MODULE_ICONS[a.lessonId?.module] || '📖'}
                    </div>
                    <div className={styles.activityInfo}>
                      <div className={styles.activityName}>{a.lessonId?.title || 'Lección'}</div>
                      <div className={styles.activityMeta}>
                        <LevelBadge level={a.lessonId?.level || 'A1'} size="sm" />
                        <span className={styles.activityScore}>{a.score}%</span>
                      </div>
                    </div>
                    <div className={styles.activityXP}>+{a.xpEarned} XP</div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Achievements */}
          {!!dashboard?.achievements?.length && (
            <>
              <div className={styles.sectionHeader} style={{ marginTop: 24 }}>
                <h2 className={styles.sectionTitle}>Logros</h2>
              </div>
              <div className={styles.achievementsList}>
                {dashboard.achievements.slice(0,6).map((a, i) => (
                  <motion.div
                    key={i}
                    className={styles.achievement}
                    initial={{ opacity:0, scale:0.8 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{ delay: i * 0.06 }}
                    title={a.name}
                  >
                    🏅
                    <span className={styles.achievementName}>{a.name}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
