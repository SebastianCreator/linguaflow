// src/screens/Lessons/LessonsScreen.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { lessonsAPI } from '../../services/api';
import useAuthStore from '../../store/authStore';
import { Card, LevelBadge, Badge, ProgressBar, EmptyState, Skeleton } from '../../components/common/Card';
import Button from '../../components/common/Button';
import styles from './Lessons.module.css';

const LEVELS = ['A1','A2','B1','B2','C1','C2'];
const MODULE_ICONS = { vocabulary:'📚', grammar:'✏️', listening:'🎧', reading:'📖', writing:'📝', speaking:'🎤', academic:'🎓', cultural:'🌍' };
const MODULE_LABELS = { vocabulary:'Vocabulario', grammar:'Gramática', listening:'Comprensión Auditiva', reading:'Lectura', writing:'Escritura', speaking:'Expresión Oral', academic:'Académico', cultural:'Cultura' };
const LANG_FLAGS = { en:'🇬🇧', fr:'🇫🇷', de:'🇩🇪', pt:'🇧🇷', it:'🇮🇹' };
const LANG_NAMES = { en:'Inglés', fr:'Francés', de:'Alemán', pt:'Portugués', it:'Italiano' };

export default function LessonsScreen() {
  const { language } = useParams();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const enrollment = user?.enrollments?.find(e => e.languageCode === language);
  const [selectedLevel, setSelectedLevel] = useState(enrollment?.currentLevel || 'A1');
  const [selectedModule, setSelectedModule] = useState('all');
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = { language, level: selectedLevel };
    if (selectedModule !== 'all') params.module = selectedModule;
    lessonsAPI.getAll(params)
      .then(res => setLessons(res.data.lessons))
      .catch(() => toast.error('Error al cargar lecciones'))
      .finally(() => setLoading(false));
  }, [language, selectedLevel, selectedModule]);

  const completedIds = new Set(enrollment?.completedLessons?.map(id => id.toString()) || []);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.langHeader}>
          <span className={styles.langFlag}>{LANG_FLAGS[language] || '🌍'}</span>
          <div>
            <h1 className={styles.title}>{LANG_NAMES[language] || language} — Lecciones</h1>
            <p className={styles.subtitle}>
              Nivel actual: <strong style={{ color: 'var(--brand-primary)' }}>{enrollment?.currentLevel || 'A1'}</strong>
              {' · '}{enrollment?.totalXP || 0} XP
            </p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <Button variant="secondary" size="sm" onClick={() => navigate(`/evaluations/${language}`)}>
            📝 Evaluaciones
          </Button>
        </div>
      </div>

      {/* Level tabs */}
      <div className={styles.levelTabs}>
        {LEVELS.map(lvl => (
          <button
            key={lvl}
            className={[styles.levelTab, selectedLevel === lvl ? styles.levelTabActive : ''].join(' ')}
            onClick={() => setSelectedLevel(lvl)}
          >
            <LevelBadge level={lvl} size="sm" />
            {lvl === enrollment?.currentLevel && <span className={styles.currentDot} />}
          </button>
        ))}
      </div>

      {/* Module filters */}
      <div className={styles.moduleFilters}>
        <button
          className={[styles.moduleBtn, selectedModule === 'all' ? styles.moduleBtnActive : ''].join(' ')}
          onClick={() => setSelectedModule('all')}
        >Todos</button>
        {Object.keys(MODULE_ICONS).map(mod => (
          <button
            key={mod}
            className={[styles.moduleBtn, selectedModule === mod ? styles.moduleBtnActive : ''].join(' ')}
            onClick={() => setSelectedModule(mod)}
          >
            {MODULE_ICONS[mod]} {MODULE_LABELS[mod]}
          </button>
        ))}
      </div>

      {/* Lesson grid */}
      {loading ? (
        <div className={styles.grid}>
          {[1,2,3,4,5,6].map(i => <Skeleton key={i} height={180} />)}
        </div>
      ) : !lessons.length ? (
        <EmptyState icon="📭" title="Sin lecciones" description="No hay lecciones disponibles para este filtro." />
      ) : (
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {lessons.map((lesson, i) => {
            const isCompleted = completedIds.has(lesson._id);
            const progress = lesson.progress;
            const isInProgress = progress?.status === 'in-progress';

            return (
              <motion.div
                key={lesson._id}
                variants={{ hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0 } }}
              >
                <Card
                  hover
                  className={[styles.lessonCard, isCompleted ? styles.completedCard : ''].join(' ')}
                  onClick={() => navigate(`/lessons/${language}/${lesson._id}`)}
                >
                  <div className={styles.lessonTop}>
                    <div className={styles.moduleIcon}>{MODULE_ICONS[lesson.module] || '📖'}</div>
                    <div className={styles.lessonBadges}>
                      {isCompleted && <Badge variant="success" size="sm">✓ Completada</Badge>}
                      {isInProgress && <Badge variant="warning" size="sm">En progreso</Badge>}
                    </div>
                  </div>

                  <div className={styles.lessonMeta}>
                    <span className={styles.lessonModule}>{MODULE_LABELS[lesson.module]}</span>
                    <LevelBadge level={lesson.level} size="sm" />
                  </div>

                  <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                  {lesson.descriptionEs && (
                    <p className={styles.lessonDesc}>{lesson.descriptionEs}</p>
                  )}

                  <div className={styles.lessonFooter}>
                    <span className={styles.lessonInfo}>⏱ {lesson.totalDurationMinutes} min</span>
                    <span className={styles.lessonInfo}>📝 {lesson.exercises?.length || 0} ejercicios</span>
                    <span className={styles.xpReward}>+{lesson.xpReward} XP</span>
                  </div>

                  {isCompleted && progress?.score !== undefined && (
                    <ProgressBar value={progress.score} color="var(--accent-emerald)" showLabel={false} />
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
