// src/screens/Lessons/LessonPlayerScreen.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { lessonsAPI } from '../../services/api';
import { savePendingProgress } from '../../services/offlineStorage';
import { speak, recognizeSpeech, isSpeechSynthesisSupported, isSpeechRecognitionSupported } from '../../services/speechService';
import Button from '../../components/common/Button';
import { ProgressBar } from '../../components/common/Card';
import styles from './LessonPlayer.module.css';

const FEEDBACK_DELAY = 1400;

export default function LessonPlayerScreen() {
  const { language, id } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [listening, setListening] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    lessonsAPI.getById(id)
      .then(res => setLesson(res.data.lesson))
      .catch(() => { toast.error('Error al cargar lección'); navigate(-1); })
      .finally(() => setLoading(false));
  }, [id]);

  const exercise = lesson?.exercises?.[currentIdx];
  const total = lesson?.exercises?.length || 0;
  const progress = total ? (currentIdx / total) * 100 : 0;

  const checkAnswer = useCallback((userAns) => {
    const correct = exercise?.correctAnswer;
    if (Array.isArray(correct)) return correct.map(s => s.toLowerCase().trim()).includes((userAns||'').toLowerCase().trim());
    if (typeof correct === 'boolean') return userAns === correct;
    return (userAns||'').toLowerCase().trim() === (correct||'').toString().toLowerCase().trim();
  }, [exercise]);

  const handleSubmit = useCallback(() => {
    if (submitted || !answer && answer !== false) return;
    const correct = checkAnswer(answer);
    setIsCorrect(correct);
    setSubmitted(true);
    setResults(prev => [...prev, { exerciseIndex: currentIdx, correct, userAnswer: answer, timeSeconds: Math.round((Date.now() - startTime) / 1000) }]);

    if (correct) toast.success('¡Correcto! 🎉', { duration: 1200, icon: '✅' });
    else toast.error(`Respuesta: ${exercise?.correctAnswer?.toString()}`, { duration: 2500, icon: '❌' });
  }, [submitted, answer, checkAnswer, currentIdx, exercise, startTime]);

  const handleNext = useCallback(async () => {
    const isLast = currentIdx >= total - 1;
    if (isLast) {
      // Calculate final score
      const correctCount = [...results, { correct: isCorrect }].filter(r => r.correct).length;
      const score = Math.round((correctCount / total) * 100);
      setFinalScore(score);
      setSubmitting(true);

      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      try {
        const res = await lessonsAPI.complete(id, { score, exerciseResults: results, timeSpentSeconds: timeSpent });
        setXpEarned(res.data.xpEarned);
        if (res.data.newAchievements?.length) {
          res.data.newAchievements.forEach(a => toast.success(`🏅 Logro desbloqueado: ${a.name}!`, { duration: 4000 }));
        }
      } catch {
        // Offline: save locally
        await savePendingProgress({ lessonId: id, languageCode: language, score, exerciseResults: results, timeSpentSeconds: timeSpent, localCompletedAt: new Date().toISOString() });
        toast('Progreso guardado localmente (sin conexión)', { icon: '📥' });
      }

      setFinished(true);
      setSubmitting(false);
    } else {
      setCurrentIdx(i => i + 1);
      setAnswer('');
      setSubmitted(false);
      setIsCorrect(null);
    }
  }, [currentIdx, total, results, isCorrect, id, language, startTime]);

  // Auto-advance after correct answer
  useEffect(() => {
    if (submitted && isCorrect) {
      const t = setTimeout(handleNext, FEEDBACK_DELAY);
      return () => clearTimeout(t);
    }
  }, [submitted, isCorrect, handleNext]);

  if (loading) return <div className={styles.loading}><div className={styles.spinner} /></div>;

  // ── FINISHED screen ──
  if (finished) {
    const passed = finalScore >= 60;
    return (
      <motion.div className={styles.finishScreen} initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}>
        <div className={styles.finishIcon}>{passed ? '🏆' : '📚'}</div>
        <h2 className={styles.finishTitle}>{passed ? '¡Lección completada!' : '¡Sigue practicando!'}</h2>
        <div className={styles.finishScore} style={{ color: passed ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>
          {finalScore}%
        </div>
        <p className={styles.finishSub}>
          {results.filter(r => r.correct).length} de {total} correctas
        </p>
        {xpEarned > 0 && (
          <div className={styles.xpEarned}>
            <span>⚡ +{xpEarned} XP ganados</span>
          </div>
        )}
        <div className={styles.finishActions}>
          <Button onClick={() => navigate(`/lessons/${language}`)}>← Ver lecciones</Button>
          {!passed && <Button variant="secondary" onClick={() => window.location.reload()}>🔄 Intentar de nuevo</Button>}
        </div>
      </motion.div>
    );
  }

  // ── EXERCISE screen ──
  return (
    <div className={styles.playerPage}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.exitBtn} onClick={() => navigate(`/lessons/${language}/${id}`)}>✕</button>
        <div className={styles.progressWrap}>
          <ProgressBar value={currentIdx} max={total} showLabel={false} color="var(--brand-primary)" />
        </div>
        <span className={styles.counter}>{currentIdx + 1}/{total}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          className={styles.exerciseWrap}
          initial={{ opacity:0, x:40 }}
          animate={{ opacity:1, x:0 }}
          exit={{ opacity:0, x:-40 }}
          transition={{ duration: 0.25 }}
        >
          {/* Prompt */}
          <div className={styles.exerciseType}>{exercise?.type?.replace('-', ' ')}</div>
          <h2 className={styles.prompt}>{exercise?.prompt}</h2>

          {/* Audio button if available */}
          {exercise?.promptAudio && (
            <button className={styles.audioBtn} onClick={() => speak(exercise.prompt, language)}>
              🔊 Escuchar
            </button>
          )}

          {/* ── Exercise types ── */}
          {exercise?.type === 'multiple-choice' && (
            <div className={styles.options}>
              {exercise.options.map((opt, i) => (
                <motion.button
                  key={i}
                  className={[
                    styles.option,
                    answer === opt ? styles.optionSelected : '',
                    submitted && opt === exercise.correctAnswer ? styles.optionCorrect : '',
                    submitted && answer === opt && answer !== exercise.correctAnswer ? styles.optionWrong : '',
                  ].join(' ')}
                  onClick={() => !submitted && setAnswer(opt)}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.optionLetter}>{String.fromCharCode(65+i)}</span>
                  {opt}
                </motion.button>
              ))}
            </div>
          )}

          {exercise?.type === 'true-false' && (
            <div className={styles.tfOptions}>
              {[true, false].map((val) => (
                <motion.button
                  key={String(val)}
                  className={[
                    styles.tfOption,
                    answer === val ? styles.optionSelected : '',
                    submitted && val === exercise.correctAnswer ? styles.optionCorrect : '',
                    submitted && answer === val && val !== exercise.correctAnswer ? styles.optionWrong : '',
                  ].join(' ')}
                  onClick={() => !submitted && setAnswer(val)}
                  whileTap={{ scale: 0.97 }}
                >
                  {val ? '✓ Verdadero' : '✗ Falso'}
                </motion.button>
              ))}
            </div>
          )}

          {(exercise?.type === 'fill-in-blank' || exercise?.type === 'translation' || exercise?.type === 'essay') && (
            <div className={styles.inputWrap}>
              <input
                type="text"
                value={answer}
                onChange={e => !submitted && setAnswer(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !submitted && handleSubmit()}
                placeholder={exercise.type === 'essay' ? 'Escribe tu respuesta...' : 'Tu respuesta...'}
                className={[styles.textInput, submitted ? (isCorrect ? styles.inputCorrect : styles.inputWrong) : ''].join(' ')}
                disabled={submitted}
                autoFocus
              />
              {isSpeechSynthesisSupported() && exercise.type === 'translation' && (
                <button className={styles.listenHint} onClick={() => speak(exercise.prompt.replace('Translate to English: ','').replace('Traduce al francés: ',''), 'es')}>
                  🔉 Escuchar en español
                </button>
              )}
            </div>
          )}

          {exercise?.type === 'voice-record' && (
            <div className={styles.voiceSection}>
              <p className={styles.targetText}>{exercise.correctAnswer}</p>
              {isSpeechSynthesisSupported() && (
                <Button variant="secondary" size="sm" onClick={() => speak(exercise.correctAnswer, language)}>🔊 Modelo</Button>
              )}
              {isSpeechRecognitionSupported() ? (
                <Button
                  variant={listening ? 'danger' : 'primary'}
                  size="lg"
                  icon={listening ? '⏹' : '🎤'}
                  onClick={async () => {
                    if (listening) { setListening(false); return; }
                    setListening(true);
                    try {
                      const { transcript } = await recognizeSpeech(language);
                      setAnswer(transcript);
                      setListening(false);
                    } catch (err) {
                      toast.error('No se pudo reconocer el audio');
                      setListening(false);
                    }
                  }}
                >
                  {listening ? 'Detener' : 'Grabar respuesta'}
                </Button>
              ) : (
                <p className={styles.notSupported}>Reconocimiento de voz no disponible en este navegador</p>
              )}
              {answer && <p className={styles.transcript}>Detectado: "{answer}"</p>}
            </div>
          )}

          {/* Explanation on submit */}
          <AnimatePresence>
            {submitted && exercise?.explanation && (
              <motion.div
                className={[styles.explanation, isCorrect ? styles.explanationCorrect : styles.explanationWrong].join(' ')}
                initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
              >
                <span className={styles.explIcon}>{isCorrect ? '💡' : '📖'}</span>
                <span>{exercise.explanationEs || exercise.explanation}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Bottom actions */}
      <div className={styles.bottomBar}>
        {!submitted ? (
          <Button
            fullWidth size="lg"
            disabled={answer === '' && answer !== false}
            onClick={handleSubmit}
          >
            Comprobar respuesta
          </Button>
        ) : !isCorrect ? (
          <Button fullWidth size="lg" onClick={handleNext} loading={submitting}>
            {currentIdx >= total - 1 ? 'Ver resultado' : 'Siguiente →'}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
