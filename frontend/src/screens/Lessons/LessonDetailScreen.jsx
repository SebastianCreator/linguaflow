// src/screens/Lessons/LessonDetailScreen.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { lessonsAPI } from '../../services/api';
import { Card, LevelBadge, Badge, ProgressBar } from '../../components/common/Card';
import Button from '../../components/common/Button';
import { speak, isSpeechSynthesisSupported } from '../../services/speechService';
import styles from './Lessons.module.css';

const MODULE_LABELS = { vocabulary:'Vocabulario', grammar:'Gramática', listening:'Comprensión Auditiva', reading:'Lectura', writing:'Escritura', speaking:'Expresión Oral', academic:'Académico', cultural:'Cultura' };

export default function LessonDetailScreen() {
  const { language, id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    lessonsAPI.getById(id)
      .then(res => { setLesson(res.data.lesson); setProgress(res.data.progress); })
      .catch(() => toast.error('Error al cargar la lección'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSpeak = async (text) => {
    if (!isSpeechSynthesisSupported()) { toast.error('TTS no disponible en este navegador'); return; }
    setSpeaking(true);
    await speak(text, language).catch(() => {});
    setSpeaking(false);
  };

  if (loading) return <div className={styles.loading}><div className={styles.spinner} /></div>;
  if (!lesson) return <div>Lección no encontrada</div>;

  return (
    <div className={styles.detailPage}>
      <Button variant="ghost" size="sm" onClick={() => navigate(`/lessons/${language}`)}>← Volver</Button>

      <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className={styles.detailHeader}>
        <div className={styles.detailMeta}>
          <LevelBadge level={lesson.level} size="md" />
          <Badge variant="default" size="md">{MODULE_LABELS[lesson.module]}</Badge>
          <span className={styles.lessonInfo}>⏱ {lesson.totalDurationMinutes} min</span>
          <span className={styles.lessonInfo}>+{lesson.xpReward} XP</span>
        </div>

        <h1 className={styles.detailTitle}>{lesson.title}</h1>
        {lesson.descriptionEs && <p className={styles.detailDesc}>{lesson.descriptionEs}</p>}

        {/* Objectives */}
        {lesson.objectivesEs?.length > 0 && (
          <div className={styles.objectives}>
            <h3 className={styles.objTitle}>Al completar esta lección podrás:</h3>
            <ul className={styles.objList}>
              {lesson.objectivesEs.map((obj, i) => (
                <li key={i} className={styles.objItem}><span className={styles.checkMark}>✓</span>{obj}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Lesson content preview */}
      <div className={styles.contentSection}>
        {lesson.content?.map((block, i) => (
          <motion.div
            key={i}
            className={[styles.contentBlock, styles[`block-${block.type}`]].join(' ')}
            initial={{ opacity:0, x:-16 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay: i * 0.1 }}
          >
            {block.type === 'tip' && <span className={styles.tipIcon}>💡</span>}
            {block.type === 'example' && <span className={styles.exIcon}>📌</span>}
            <div className={styles.blockContent}>
              {block.contentEs || block.content}
              {block.content && block.contentEs && (
                <button className={styles.speakBtn} onClick={() => handleSpeak(block.content)} disabled={speaking}>
                  {speaking ? '🔊' : '🔉'}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Previous progress */}
      {progress?.status === 'completed' && (
        <div className={styles.prevProgress}>
          <span>Puntuación anterior: <strong>{progress.score}%</strong></span>
          <ProgressBar value={progress.score} color="var(--accent-emerald)" showLabel={false} />
        </div>
      )}

      {/* CTA */}
      <div className={styles.detailCTA}>
        <Button
          size="lg"
          onClick={() => navigate(`/play/${language}/${id}`)}
          icon="🚀"
        >
          {progress?.status === 'completed' ? 'Repasar lección' : progress?.status === 'in-progress' ? 'Continuar lección' : 'Comenzar lección'}
        </Button>
        {lesson.offlineAvailable && (
          <Badge variant="default" size="sm">📥 Disponible sin conexión</Badge>
        )}
      </div>
    </div>
  );
}
