// src/screens/Evaluation/EvaluationsScreen.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { evaluationsAPI } from '../../services/api';
import { Card, LevelBadge, Badge, EmptyState, Skeleton } from '../../components/common/Card';
import Button from '../../components/common/Button';
import styles from './Evaluations.module.css';

const LANG_FLAGS = { en:'🇬🇧', fr:'🇫🇷', de:'🇩🇪', pt:'🇧🇷', it:'🇮🇹' };
const LANG_NAMES = { en:'Inglés', fr:'Francés', de:'Alemán', pt:'Portugués', it:'Italiano' };
const TYPE_LABELS = { unit:'Unidad', level:'Nivel Completo', placement:'Colocación', practice:'Práctica' };

export default function EvaluationsScreen() {
  const { language } = useParams();
  const navigate = useNavigate();
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    evaluationsAPI.getAll({ language })
      .then(res => setEvaluations(res.data.evaluations))
      .catch(() => toast.error('Error al cargar evaluaciones'))
      .finally(() => setLoading(false));
  }, [language]);

  const filtered = filter === 'all' ? evaluations : evaluations.filter(e => e.level === filter || e.type === filter);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.langHeader}>
          <span style={{ fontSize: 36 }}>{LANG_FLAGS[language] || '🌍'}</span>
          <div>
            <h1 className={styles.title}>{LANG_NAMES[language] || language} — Evaluaciones</h1>
            <p className={styles.subtitle}>Certifica tu nivel según el Marco Común Europeo de Referencia</p>
          </div>
        </div>
        <Button variant="secondary" size="sm" onClick={() => navigate(`/lessons/${language}`)}>← Lecciones</Button>
      </div>

      {/* Level filter */}
      <div className={styles.filters}>
        {['all','A1','A2','B1','B2','C1','C2'].map(f => (
          <button key={f} className={[styles.filterBtn, filter === f ? styles.filterActive : ''].join(' ')} onClick={() => setFilter(f)}>
            {f === 'all' ? 'Todas' : f}
          </button>
        ))}
      </div>

      {loading ? (
        <div className={styles.grid}>{[1,2,3].map(i => <Skeleton key={i} height={200} />)}</div>
      ) : !filtered.length ? (
        <EmptyState icon="📝" title="Sin evaluaciones" description="No hay evaluaciones disponibles para este filtro." />
      ) : (
        <motion.div className={styles.grid} initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          {filtered.map((ev, i) => (
            <motion.div key={ev._id} variants={{ hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0 } }}>
              <Card hover>
                <div className={styles.evTop}>
                  <LevelBadge level={ev.level} size="md" />
                  <Badge variant={ev.type === 'level' ? 'primary' : 'default'} size="sm">
                    {TYPE_LABELS[ev.type] || ev.type}
                  </Badge>
                  {ev.certificateAwarded && <Badge variant="success" size="sm">🏅 Certificado</Badge>}
                </div>
                <h3 className={styles.evTitle}>{ev.titleEs || ev.title}</h3>
                {ev.description && <p className={styles.evDesc}>{ev.description}</p>}
                <div className={styles.evMeta}>
                  <span>⏱ {ev.timeLimitMinutes} min</span>
                  <span>✅ Aprueba con {ev.passingScore}%</span>
                  <span>⚡ +{ev.xpReward} XP</span>
                </div>
                <Button fullWidth size="sm" onClick={() => navigate(`/evaluations/${language}/${ev._id}/play`)}>
                  Iniciar evaluación →
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
