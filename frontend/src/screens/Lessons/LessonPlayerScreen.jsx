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
  const [playingAudio, setPlayingAudio] = useState(false);
  const [startTime] = useState(Date.now());

  // ── Estado para tipos especiales ──
  const [clozeAnswers, setClozeAnswers] = useState([]);
  const [scramblePool, setScramblePool] = useState([]);
  const [scrambleSelected, setScrambleSelected] = useState([]);

  useEffect(() => {
    lessonsAPI.getById(id)
      .then(res => setLesson(res.data.lesson))
      .catch(() => { toast.error('Error al cargar lección'); navigate(-1); })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const exercise = lesson?.exercises?.[currentIdx];
  const total = lesson?.exercises?.length || 0;

  // Reset estados especiales al cambiar de ejercicio
  useEffect(() => {
    if (!exercise) return;
    if (exercise.type === 'cloze') {
      const blanks = (exercise.prompt.match(/___/g) || []).length;
      setClozeAnswers(Array(blanks).fill(''));
    }
    if (exercise.type === 'scramble') {
      const words = exercise.correctAnswer
        ? exercise.correctAnswer.split(' ').sort(() => Math.random() - 0.5)
        : [];
      setScramblePool(words);
      setScrambleSelected([]);
    }
  }, [currentIdx, exercise]);

  const checkAnswer = useCallback((userAns) => {
    const correct = exercise?.correctAnswer;
    if (!exercise) return false;
    if (exercise.type === 'cloze' && Array.isArray(correct)) {
      return correct.every((expected, i) =>
        (userAns[i] || '').toLowerCase().trim() === expected.toLowerCase().trim()
      );
    }
    if (Array.isArray(correct)) return correct.map(s => s.toLowerCase().trim()).includes((userAns || '').toLowerCase().trim());
    if (typeof correct === 'boolean') return userAns === correct;
    if (exercise.type === 'mnemonic' || exercise.type === 'task-based' || exercise.type === 'essay') return true; // open ended
    return (userAns || '').toLowerCase().trim() === (correct || '').toString().toLowerCase().trim();
  }, [exercise]);

  const currentAnswer = () => {
    if (exercise?.type === 'cloze') return clozeAnswers;
    if (exercise?.type === 'scramble') return scrambleSelected.join(' ');
    return answer;
  };

  const isAnswerEmpty = () => {
    if (exercise?.type === 'cloze') return clozeAnswers.some(a => !a.trim());
    if (exercise?.type === 'scramble') return scrambleSelected.length === 0;
    return answer === '' && answer !== false;
  };

  const handleSubmit = useCallback(() => {
    if (submitted || isAnswerEmpty()) return;
    const ans = currentAnswer();
    const correct = checkAnswer(ans);
    setIsCorrect(correct);
    setSubmitted(true);
    setResults(prev => [...prev, { exerciseIndex: currentIdx, correct, userAnswer: ans, timeSeconds: Math.round((Date.now() - startTime) / 1000) }]);

    if (correct) toast.success('¡Correcto! 🎉', { duration: 1200, icon: '✅' });
    else toast.error(`Respuesta: ${Array.isArray(exercise?.correctAnswer) ? exercise.correctAnswer.join(' / ') : exercise?.correctAnswer?.toString()}`, { duration: 2500, icon: '❌' });
  }, [submitted, exercise, currentIdx, startTime, checkAnswer, answer, clozeAnswers, scrambleSelected]);

  const handleNext = useCallback(async () => {
    const isLast = currentIdx >= total - 1;
    if (isLast) {
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

  useEffect(() => {
    if (submitted && isCorrect) {
      const t = setTimeout(handleNext, FEEDBACK_DELAY);
      return () => clearTimeout(t);
    }
  }, [submitted, isCorrect, handleNext]);

  // ── Helpers ──
  const handlePlayAudio = async (text) => {
    setPlayingAudio(true);
    await speak(text, language);
    setPlayingAudio(false);
  };

  if (loading) return <div className={styles.loading}><div className={styles.spinner} /></div>;

  // ── FINISHED ──
  if (finished) {
    const passed = finalScore >= 60;
    return (
      <motion.div className={styles.finishScreen} initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}>
        <div className={styles.finishIcon}>{passed ? '🏆' : '📚'}</div>
        <h2 className={styles.finishTitle}>{passed ? '¡Lección completada!' : '¡Sigue practicando!'}</h2>
        <div className={styles.finishScore} style={{ color: passed ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>{finalScore}%</div>
        <p className={styles.finishSub}>{results.filter(r => r.correct).length} de {total} correctas</p>
        {xpEarned > 0 && <div className={styles.xpEarned}><span>⚡ +{xpEarned} XP ganados</span></div>}
        <div className={styles.finishActions}>
          <Button onClick={() => navigate(`/lessons/${language}`)}>← Ver lecciones</Button>
          {!passed && <Button variant="secondary" onClick={() => window.location.reload()}>🔄 Intentar de nuevo</Button>}
        </div>
      </motion.div>
    );
  }

  const isTextType = ['fill-in-blank', 'translation', 'essay', 'interleaved', 'task-based', 'mnemonic'].includes(exercise?.type);

  return (
    <div className={styles.playerPage}>
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
          <div className={styles.exerciseType}>{exercise?.type?.replace(/-/g, ' ')}</div>
          <h2 className={styles.prompt}>{exercise?.prompt}</h2>

          {/* Audio general */}
          {exercise?.promptAudio && (
            <button className={styles.audioBtn} onClick={() => speak(exercise.prompt, language)}>🔊 Escuchar</button>
          )}

          {/* ── DICTATION ── */}
          {exercise?.type === 'dictation' && (
            <div className={styles.dictationWrap}>
              <Button
                variant="secondary"
                size="lg"
                icon={playingAudio ? '🔊' : '▶️'}
                onClick={() => handlePlayAudio(exercise.prompt.replace('Listen and write: ', '').replace('Listen: ', ''))}
                disabled={playingAudio}
              >
                {playingAudio ? 'Reproduciendo...' : '▶️ Escuchar audio'}
              </Button>
              <input
                type="text"
                value={answer}
                onChange={e => !submitted && setAnswer(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !submitted && handleSubmit()}
                placeholder="Escribe lo que escuchaste..."
                className={[styles.textInput, submitted ? (isCorrect ? styles.inputCorrect : styles.inputWrong) : ''].join(' ')}
                disabled={submitted}
                autoFocus
              />
            </div>
          )}

          {/* ── SCRAMBLE ── */}
          {exercise?.type === 'scramble' && (
            <div className={styles.scrambleWrap}>
              <div className={styles.scrambleSentence}>
                {scrambleSelected.map((word, i) => (
                  <motion.button
                    key={`sel-${i}`}
                    className={styles.scrambleWordActive}
                    onClick={() => {
                      if (submitted) return;
                      const w = scrambleSelected[i];
                      setScrambleSelected(prev => prev.filter((_, idx) => idx !== i));
                      setScramblePool(prev => [...prev, w]);
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {word}
                  </motion.button>
                ))}
                {scrambleSelected.length === 0 && <span className={styles.scramblePlaceholder}>Haz clic en las palabras para formar la oración</span>}
              </div>
              <div className={styles.scramblePool}>
                {scramblePool.map((word, i) => (
                  <motion.button
                    key={`pool-${i}-${word}`}
                    className={styles.scrambleWord}
                    onClick={() => {
                      if (submitted) return;
                      setScrambleSelected(prev => [...prev, word]);
                      setScramblePool(prev => prev.filter((_, idx) => idx !== i));
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {word}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* ── CLOZE ── */}
          {exercise?.type === 'cloze' && (
            <div className={styles.clozeWrap}>
              {(() => {
                const parts = exercise.prompt.split('___');
                return (
                  <div className={styles.clozeText}>
                    {parts.map((part, i) => (
                      <React.Fragment key={i}>
                        <span>{part}</span>
                        {i < parts.length - 1 && (
                          <input
                            type="text"
                            className={[
                              styles.clozeInput,
                              submitted
                                ? (clozeAnswers[i]?.toLowerCase().trim() === (exercise.correctAnswer[i] || '').toLowerCase().trim()
                                    ? styles.clozeCorrect : styles.clozeWrong)
                                : ''
                            ].join(' ')}
                            value={clozeAnswers[i] || ''}
                            onChange={e => {
                              if (submitted) return;
                              setClozeAnswers(prev => {
                                const next = [...prev];
                                next[i] = e.target.value;
                                return next;
                              });
                            }}
                            disabled={submitted}
                            autoFocus={i === 0}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}

          {/* ── IMAGE-MATCH ── */}
          {exercise?.type === 'image-match' && (
            <div className={styles.imageMatchWrap}>
              {exercise.options?.map((opt, i) => (
                <motion.button
                  key={i}
                  className={[
                    styles.imageMatchOption,
                    answer === opt ? styles.optionSelected : '',
                    submitted && opt === exercise.correctAnswer ? styles.optionCorrect : '',
                    submitted && answer === opt && answer !== exercise.correctAnswer ? styles.optionWrong : '',
                  ].join(' ')}
                  onClick={() => !submitted && setAnswer(opt)}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className={styles.imageMatchEmoji}>{opt}</span>
                </motion.button>
              ))}
            </div>
          )}

          {/* ── CONVERSATION-SIM ── */}
          {exercise?.type === 'conversation-sim' && (
            <div className={styles.conversationWrap}>
              <div className={styles.conversationBubbleBot}>
                <span className={styles.conversationAvatar}>🤖</span>
                <div className={styles.conversationMsg}>{exercise.prompt.replace(/^.*?:\s*/, '')}</div>
              </div>
              <div className={styles.conversationChoices}>
                {exercise.options?.map((opt, i) => (
                  <motion.button
                    key={i}
                    className={[
                      styles.conversationChoice,
                      answer === opt ? styles.optionSelected : '',
                      submitted && opt === exercise.correctAnswer ? styles.optionCorrect : '',
                      submitted && answer === opt && answer !== exercise.correctAnswer ? styles.optionWrong : '',
                    ].join(' ')}
                    onClick={() => !submitted && setAnswer(opt)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* ── SHADOWING ── */}
          {exercise?.type === 'shadowing' && (
            <div className={styles.shadowingWrap}>
              <div className={styles.shadowingModel}>
                <p className={styles.targetText}>{exercise.correctAnswer}</p>
                <Button variant="secondary" size="sm" onClick={() => handlePlayAudio(exercise.correctAnswer)} disabled={playingAudio}>
                  {playingAudio ? '🔊 Reproduciendo...' : '🔊 Escuchar modelo'}
                </Button>
              </div>
              <div className={styles.shadowingRecord}>
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
                      } catch {
                        toast.error('No se pudo reconocer el audio');
                        setListening(false);
                      }
                    }}
                  >
                    {listening ? 'Detener' : '🎤 Repetir (shadowing)'}
                  </Button>
                ) : (
                  <p className={styles.notSupported}>Reconocimiento de voz no disponible</p>
                )}
                {answer && <p className={styles.transcript}>Tu repetición: "{answer}"</p>}
              </div>
            </div>
          )}

          {/* ── MULTIPLE-CHOICE ── */}
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

          {/* ── TRUE-FALSE ── */}
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

          {/* ── TEXT INPUT types ── */}
          {(exercise?.type === 'fill-in-blank' || exercise?.type === 'translation' || exercise?.type === 'essay' || exercise?.type === 'interleaved' || exercise?.type === 'task-based') && (
            <div className={styles.inputWrap}>
              <input
                type="text"
                value={answer}
                onChange={e => !submitted && setAnswer(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !submitted && handleSubmit()}
                placeholder={exercise.type === 'essay' || exercise.type === 'task-based' ? 'Escribe tu respuesta...' : 'Tu respuesta...'}
                className={[styles.textInput, submitted ? (isCorrect ? styles.inputCorrect : styles.inputWrong) : ''].join(' ')}
                disabled={submitted}
                autoFocus
              />
              {isSpeechSynthesisSupported() && exercise.type === 'translation' && (
                <button className={styles.listenHint} onClick={() => speak(exercise.prompt.replace(/Translate to English: |Traduce al inglés: /gi, ''), 'es')}>
                  🔉 Escuchar en español
                </button>
              )}
            </div>
          )}

          {/* ── MNEMONIC (open creative) ── */}
          {exercise?.type === 'mnemonic' && (
            <div className={styles.inputWrap}>
              <textarea
                rows={4}
                value={answer}
                onChange={e => !submitted && setAnswer(e.target.value)}
                placeholder="Escribe tu historia, imagen o frase mnemotécnica..."
                className={[styles.textInput, styles.textarea, submitted ? styles.inputCorrect : ''].join(' ')}
                disabled={submitted}
                autoFocus
              />
              <p className={styles.mnemonicHint}>💡 No hay respuesta única — crea algo que funcione para TI.</p>
            </div>
          )}

          {/* ── VOICE-RECORD ── */}
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
                    } catch {
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

          {/* Explanation */}
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
          <Button fullWidth size="lg" disabled={isAnswerEmpty()} onClick={handleSubmit}>
            {exercise?.type === 'mnemonic' || exercise?.type === 'task-based' ? 'Continuar' : 'Comprobar respuesta'}
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

