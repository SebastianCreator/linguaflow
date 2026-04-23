// src/screens/Dashboard/LanguagesScreen.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { languagesAPI, usersAPI } from '../../services/api';
import useAuthStore from '../../store/authStore';
import { Card, LevelBadge, Badge } from '../../components/common/Card';
import Button from '../../components/common/Button';
import styles from './Languages.module.css';

const DIFFICULTY_LABELS = { 1:'Muy fácil', 2:'Fácil', 3:'Moderado', 4:'Difícil', 5:'Muy difícil' };
const DIFFICULTY_COLORS = { 1:'#4ADE80', 2:'#86EFAC', 3:'#F59E0B', 4:'#F97316', 5:'#EF4444' };

export default function LanguagesScreen() {
  const { user, updateUser } = useAuthStore();
  const navigate = useNavigate();
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(null);

  const enrolled = new Set(user?.enrollments?.map(e => e.languageCode) || []);

  useEffect(() => {
    languagesAPI.getAll()
      .then(res => setLanguages(res.data.languages))
      .catch(() => toast.error('Error al cargar idiomas'))
      .finally(() => setLoading(false));
  }, []);

  const handleEnroll = async (lang) => {
    if (enrolled.has(lang.code)) {
      navigate(`/lessons/${lang.code}`);
      return;
    }
    setEnrolling(lang.code);
    try {
      await usersAPI.enroll(lang.code);
      const newEnrollments = [...(user?.enrollments || []), { languageCode: lang.code, currentLevel:'A1', totalXP:0 }];
      updateUser({ enrollments: newEnrollments });
      toast.success(`¡Inscrito en ${lang.nameEs}! 🎉`);
      navigate(`/lessons/${lang.code}`);
    } catch (err) {
      toast.error(err.response?.data?.error || 'Error al inscribirse');
    } finally {
      setEnrolling(null);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Elige tu idioma</h1>
          <p className={styles.subtitle}>Selecciona el idioma que deseas aprender, estructurado en niveles CEFR</p>
        </div>
      </div>

      <div className={styles.cefrInfo}>
        <div className={styles.cefrTitle}>Niveles CEFR / MCER</div>
        <div className={styles.cefrLevels}>
          {[
            { level:'A1', desc:'Principiante' }, { level:'A2', desc:'Elemental' },
            { level:'B1', desc:'Intermedio' },  { level:'B2', desc:'Interm. Alto' },
            { level:'C1', desc:'Avanzado' },    { level:'C2', desc:'Maestría' },
          ].map(({ level, desc }) => (
            <div key={level} className={styles.cefrItem}>
              <LevelBadge level={level} size="md" />
              <span className={styles.cefrDesc}>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {loading ? (
        <div className={styles.grid}>
          {[1,2,3,4,5].map(i => (
            <div key={i} className={styles.skeletonCard} />
          ))}
        </div>
      ) : (
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {languages.map((lang, i) => {
            const isEnrolled = enrolled.has(lang.code);
            const enrollment = user?.enrollments?.find(e => e.languageCode === lang.code);

            return (
              <motion.div
                key={lang.code}
                variants={{ hidden:{ opacity:0, y:24 }, visible:{ opacity:1, y:0 } }}
              >
                <Card hover onClick={() => handleEnroll(lang)} className={isEnrolled ? styles.enrolledCard : ''}>
                  <div className={styles.cardTop}>
                    <span className={styles.flag}>{lang.flag}</span>
                    {isEnrolled && (
                      <Badge variant="success" size="sm">Inscrito</Badge>
                    )}
                    {!lang.active && (
                      <Badge variant="default" size="sm">Próximamente</Badge>
                    )}
                  </div>

                  <div className={styles.langName}>{lang.nameEs}</div>
                  <div className={styles.langNative}>{lang.name}</div>

                  {lang.difficultyForSpanish && (
                    <div className={styles.difficulty}>
                      <span className={styles.diffLabel}>Dificultad:</span>
                      <div className={styles.diffDots}>
                        {[1,2,3,4,5].map(d => (
                          <div
                            key={d}
                            className={styles.diffDot}
                            style={{ background: d <= lang.difficultyForSpanish ? DIFFICULTY_COLORS[lang.difficultyForSpanish] : 'var(--bg-elevated)' }}
                          />
                        ))}
                      </div>
                      <span className={styles.diffText} style={{ color: DIFFICULTY_COLORS[lang.difficultyForSpanish] }}>
                        {DIFFICULTY_LABELS[lang.difficultyForSpanish]}
                      </span>
                    </div>
                  )}

                  <div className={styles.levels}>
                    {(lang.levels || ['A1','A2','B1','B2','C1','C2']).map(l => (
                      <LevelBadge key={l} level={l} size="sm" />
                    ))}
                  </div>

                  {isEnrolled && enrollment && (
                    <div className={styles.enrolledInfo}>
                      <span>Nivel actual:</span>
                      <LevelBadge level={enrollment.currentLevel} size="sm" />
                      <span className={styles.xpText}>{enrollment.totalXP} XP</span>
                    </div>
                  )}

                  <Button
                    fullWidth
                    size="sm"
                    variant={isEnrolled ? 'secondary' : 'primary'}
                    loading={enrolling === lang.code}
                    disabled={!lang.active && !isEnrolled}
                  >
                    {isEnrolled ? '📖 Continuar aprendiendo' : lang.active ? '🚀 Comenzar' : '🔒 Próximamente'}
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
