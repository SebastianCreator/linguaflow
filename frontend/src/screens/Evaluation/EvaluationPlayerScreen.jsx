// src/screens/Evaluation/EvaluationPlayerScreen.jsx
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { evaluationsAPI } from '../../services/api';
import { speak } from '../../services/speechService';
import { LevelBadge, Badge } from '../../components/common/Card';
import { ProgressBar } from '../../components/common/Card';
import Button from '../../components/common/Button';
import styles from './Evaluations.module.css';

const SECTION_LABELS = { grammar:'Gramática', vocabulary:'Vocabulario', reading:'Lectura', listening:'Comprensión Auditiva', writing:'Escritura', speaking:'Expresión Oral' };

export default function EvaluationPlayerScreen() {
  const { language, id } = useParams();
  const navigate = useNavigate();

  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const startTimeRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    evaluationsAPI.getById(id)
      .then(res => {
        setEvaluation(res.data.evaluation);
        setTimeLeft(res.data.evaluation.timeLimitMinutes * 60);
      })
      .catch(() => { toast.error('Error al cargar la evaluación'); navigate(-1); })
      .finally(() => setLoading(false));
  }, [id]);

  // Timer
  useEffect(() => {
    if (!started || finished) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); handleSubmit(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [started, finished]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStart = () => {
    setStarted(true);
    startTimeRef.current = Date.now();
  };

  const setAnswer = (val) => setAnswers(prev => ({ ...prev, [currentQ]: val }));

  const handleSubmit = useCallback(async (auto = false) => {
    if (submitting) return;
    clearInterval(timerRef.current);
    setSubmitting(true);
    setConfirmSubmit(false);

    const timeSpent = startTimeRef.current ? Math.round((Date.now() - startTimeRef.current) / 1000) : 0;
    const answersArr = (evaluation?.questions || []).map((_, i) => answers[i] !== undefined ? answers[i] : null);

    try {
      const res = await evaluationsAPI.submit(id, { answers: answersArr, timeSpentSeconds: timeSpent });
      setResult(res.data);
      setFinished(true);
      if (res.data.passed) toast.success('¡Evaluación aprobada! 🎉', { duration: 4000 });
    } catch (err) {
      toast.error(err.response?.data?.error || 'Error al enviar evaluación');
      setSubmitting(false);
    }
  }, [id, evaluation, answers, submitting]);

  if (loading) return <div className={styles.loading}><div className={styles.spinner} /></div>;
  if (!evaluation) return null;

  const questions = evaluation.questions || [];
  const q = questions[currentQ];
  const answeredCount = Object.keys(answers).length;

  // ── PRE-START SCREEN ──
  if (!started) {
    return (
      <motion.div className={styles.resultScreen} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
        <div style={{ fontSize: 64 }}>📝</div>
        <h2 className={styles.resultTitle}>{evaluation.titleEs || evaluation.title}</h2>
        <LevelBadge level={evaluation.level} size="lg" />
        <div className={styles.resultBreakdown}>
          <div className={styles.breakdownRow}><span>Preguntas</span><span>{questions.length}</span></div>
          <div className={styles.breakdownRow}><span>Tiempo límite</span><span>{evaluation.timeLimitMinutes} min</span></div>
          <div className={styles.breakdownRow}><span>Puntaje mínimo</span><span>{evaluation.passingScore}%</span></div>
          <div className={styles.breakdownRow}><span>XP al aprobar</span><span>+{evaluation.xpReward}</span></div>
          {evaluation.certificateAwarded && <div className={styles.breakdownRow}><span>🏅 Certifica nivel</span><span>{evaluation.level}</span></div>}
        </div>
        <p style={{ fontSize:13, color:'var(--text-muted)', maxWidth:360, lineHeight:1.6 }}>
          Una vez iniciada, el temporizador no se puede pausar. Asegúrate de tener tiempo suficiente.
        </p>
        <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
          <Button variant="ghost" onClick={() => navigate(`/evaluations/${language}`)}>← Volver</Button>
          <Button size="lg" onClick={handleStart} icon="🚀">Iniciar evaluación</Button>
        </div>
      </motion.div>
    );
  }

  // ── RESULT SCREEN ──
  if (finished && result) {
    const passed = result.passed;
    const correct = result.feedback?.filter(f => f.correct).length || 0;
    return (
      <motion.div className={styles.resultScreen} initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}>
        <div className={styles.resultIcon}>{passed ? '🏆' : '📚'}</div>
        <h2 className={styles.resultTitle}>{passed ? '¡Nivel certificado!' : 'Sigue estudiando'}</h2>
        <LevelBadge level={evaluation.level} size="lg" />
        <div className={styles.resultScore} style={{ color: passed ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>
          {result.score}%
        </div>
        <p className={styles.resultSub}>{correct} de {questions.length} preguntas correctas</p>
        {result.xpEarned > 0 && <div className={styles.resultXP}>⚡ +{result.xpEarned} XP ganados</div>}
        {passed && evaluation.certificateAwarded && (
          <Badge variant="success" size="md">🏅 Certificado de nivel {evaluation.level} desbloqueado</Badge>
        )}
        <div className={styles.resultBreakdown}>
          <div className={styles.breakdownTitle}>Desglose por respuesta</div>
          {(result.feedback || []).slice(0, 8).map((f, i) => (
            <div key={i} className={styles.breakdownRow}>
              <span>Pregunta {i + 1}</span>
              <span style={{ color: f.correct ? 'var(--accent-emerald)' : 'var(--accent-rose)' }}>
                {f.correct ? '✓ Correcta' : '✗ Incorrecta'} ({f.points || 0} pts)
              </span>
            </div>
          ))}
          <div className={styles.breakdownRow}>
            <span>Total</span>
            <span>{result.score}% — {passed ? 'APROBADO' : 'NO APROBADO'}</span>
          </div>
        </div>
        <div className={styles.resultActions}>
          <Button variant="ghost" onClick={() => navigate(`/evaluations/${language}`)}>← Evaluaciones</Button>
          <Button onClick={() => navigate(`/lessons/${language}`)}>📖 Seguir estudiando</Button>
          {!passed && (
            <Button variant="secondary" onClick={() => { setFinished(false); setStarted(false); setAnswers({}); setCurrentQ(0); setTimeLeft(evaluation.timeLimitMinutes * 60); setResult(null); setSubmitting(false); }}>
              🔄 Intentar de nuevo
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  // ── ACTIVE EVALUATION ──
  const isUrgent = timeLeft !== null && timeLeft < 120;

  return (
    <div className={styles.playerPage}>
      {/* Top bar */}
      <div className={styles.playerTopBar}>
        <div className={styles.timer + (isUrgent ? ` ${styles.urgent}` : '')}>
          ⏱ {formatTime(timeLeft || 0)}
        </div>
        <div style={{ flex:1 }}>
          <ProgressBar value={answeredCount} max={questions.length} showLabel={false} color="var(--brand-primary)" />
        </div>
        <span style={{ fontSize:13, color:'var(--text-muted)', whiteSpace:'nowrap' }}>
          {answeredCount}/{questions.length}
        </span>
      </div>

      {/* Navigation dots */}
      <div className={styles.navDots}>
        {questions.map((_, i) => (
          <button
            key={i}
            className={[styles.navDot, i === currentQ ? styles.current : answers[i] !== undefined ? styles.answered : ''].join(' ')}
            onClick={() => setCurrentQ(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity:0, x:30 }}
          animate={{ opacity:1, x:0 }}
          exit={{ opacity:0, x:-30 }}
          transition={{ duration: 0.2 }}
        >
          {q?.section && (
            <div className={styles.sectionLabel}>{SECTION_LABELS[q.section] || q.section}</div>
          )}

          {/* Reading passage */}
          {q?.readingPassage && (
            <div className={styles.passage}>{q.readingPassage}</div>
          )}

          <p className={styles.questionPrompt}>{q?.prompt}</p>

          {/* Multiple choice */}
          {q?.type === 'multiple-choice' && (
            <div className={styles.evalOptions}>
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={[styles.evalOption, answers[currentQ] === opt ? styles.evalOptionSel : ''].join(' ')}
                  onClick={() => setAnswer(opt)}
                >
                  <span className={styles.evalOptionLetter}>{String.fromCharCode(65+i)}</span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* True/False */}
          {q?.type === 'true-false' && (
            <div className={styles.evalTf}>
              {[true, false].map(val => (
                <button
                  key={String(val)}
                  className={[styles.evalTfBtn, answers[currentQ] === val ? styles.evalOptionSel : ''].join(' ')}
                  onClick={() => setAnswer(val)}
                >
                  {val ? '✓ Verdadero' : '✗ Falso'}
                </button>
              ))}
            </div>
          )}

          {/* Fill-in / Translation / Essay / Cloze */}
          {['fill-in-blank', 'translation', 'essay', 'interleaved'].includes(q?.type) && (
            <input
              type="text"
              className={styles.evalInput}
              value={answers[currentQ] || ''}
              onChange={e => setAnswer(e.target.value)}
              placeholder="Tu respuesta..."
            />
          )}

          {/* Dictation */}
          {q?.type === 'dictation' && (
            <div className={styles.dictationWrap}>
              <button className={styles.audioBtn} onClick={() => speak(q.prompt.replace(/Listen and write: |Listen: /gi, ''), language)}>🔊 Escuchar audio</button>
              <input
                type="text"
                className={styles.evalInput}
                value={answers[currentQ] || ''}
                onChange={e => setAnswer(e.target.value)}
                placeholder="Escribe lo que escuchaste..."
              />
            </div>
          )}

          {/* Matching */}
          {q?.type === 'matching' && (
            <div className={styles.evalOptions}>
              {q.options?.map((opt, i) => (
                <button
                  key={i}
                  className={[styles.evalOption, answers[currentQ] === opt ? styles.evalOptionSel : ''].join(' ')}
                  onClick={() => setAnswer(opt)}
                >
                  <span className={styles.evalOptionLetter}>{String.fromCharCode(65+i)}</span>
                  {opt}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom navigation */}
      <div className={styles.evalBottomBar}>
        <Button variant="ghost" size="sm" onClick={() => setCurrentQ(i => Math.max(0, i - 1))} disabled={currentQ === 0}>
          ← Anterior
        </Button>

        {currentQ < questions.length - 1 ? (
          <Button size="sm" onClick={() => setCurrentQ(i => i + 1)}>Siguiente →</Button>
        ) : (
          <Button
            variant={answeredCount < questions.length ? 'secondary' : 'primary'}
            size="sm"
            onClick={() => setConfirmSubmit(true)}
            loading={submitting}
          >
            {answeredCount < questions.length ? `Enviar (${questions.length - answeredCount} sin responder)` : 'Enviar evaluación ✓'}
          </Button>
        )}
      </div>

      {/* Confirm submit dialog */}
      <AnimatePresence>
        {confirmSubmit && (
          <motion.div
            style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:200, display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
          >
            <motion.div
              style={{ background:'var(--bg-surface)', border:'1px solid rgba(99,102,241,0.2)', borderRadius:16, padding:28, maxWidth:380, width:'100%', textAlign:'center' }}
              initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
            >
              <div style={{ fontSize:40, marginBottom:12 }}>📤</div>
              <h3 style={{ marginBottom:8 }}>¿Enviar evaluación?</h3>
              <p style={{ fontSize:14, color:'var(--text-muted)', marginBottom:20, lineHeight:1.6 }}>
                Has respondido {answeredCount} de {questions.length} preguntas.
                {answeredCount < questions.length && ` Las ${questions.length - answeredCount} preguntas sin respuesta se contarán como incorrectas.`}
              </p>
              <div style={{ display:'flex', gap:10, justifyContent:'center' }}>
                <Button variant="ghost" onClick={() => setConfirmSubmit(false)}>Cancelar</Button>
                <Button onClick={() => handleSubmit(false)} loading={submitting}>Enviar ahora</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
