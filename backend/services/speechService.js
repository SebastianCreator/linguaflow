// services/speechService.js
/**
 * Text-to-Speech and Speech Recognition service.
 * Supports Google Cloud TTS/STT and Web Speech API fallback.
 */
const logger = require('../utils/logger');

/**
 * Get TTS audio URL for a given text and language.
 * In production, calls Google Cloud TTS API.
 * Returns a URL to the audio file.
 */
exports.synthesizeSpeech = async (text, languageCode, voiceGender = 'FEMALE') => {
  if (!process.env.GOOGLE_TTS_API_KEY) {
    // Return a placeholder — the frontend will use Web Speech API
    return null;
  }

  try {
    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.GOOGLE_TTS_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: mapToGoogleLang(languageCode), ssmlGender: voiceGender },
          audioConfig: { audioEncoding: 'MP3', speakingRate: 0.9, pitch: 0 }
        })
      }
    );
    const data = await response.json();
    // Returns base64 MP3 — client can use as data URL
    return `data:audio/mp3;base64,${data.audioContent}`;
  } catch (err) {
    logger.error(`TTS synthesis failed: ${err.message}`);
    return null;
  }
};

/**
 * Evaluate speech recording against expected text.
 * Returns { score, feedback, transcript }.
 * Uses Google Cloud STT in production, placeholder in dev.
 */
exports.evaluateSpeech = async (audioBase64, expectedText, languageCode) => {
  if (!process.env.GOOGLE_STT_API_KEY) {
    return {
      transcript: '[Speech recognition requires Google Cloud STT API key]',
      score: null,
      feedback: 'Configure GOOGLE_STT_API_KEY to enable speech evaluation.'
    };
  }

  try {
    const response = await fetch(
      `https://speech.googleapis.com/v1/speech:recognize?key=${process.env.GOOGLE_STT_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          config: {
            encoding: 'WEBM_OPUS',
            sampleRateHertz: 48000,
            languageCode: mapToGoogleLang(languageCode),
            enableAutomaticPunctuation: true
          },
          audio: { content: audioBase64 }
        })
      }
    );
    const data = await response.json();
    const transcript = data.results?.[0]?.alternatives?.[0]?.transcript || '';
    const score = calculatePronunciationScore(transcript, expectedText);
    return { transcript, score, feedback: generateFeedback(score) };
  } catch (err) {
    logger.error(`STT evaluation failed: ${err.message}`);
    return { transcript: '', score: 0, feedback: 'Error processing audio.' };
  }
};

// ── Helpers ──────────────────────────────────

const LANG_MAP = {
  en: 'en-US', fr: 'fr-FR', de: 'de-DE',
  pt: 'pt-BR', it: 'it-IT', es: 'es-ES',
  zh: 'zh-CN', ja: 'ja-JP'
};

function mapToGoogleLang(code) {
  return LANG_MAP[code] || `${code}-${code.toUpperCase()}`;
}

function calculatePronunciationScore(transcript, expected) {
  if (!transcript || !expected) return 0;
  const t = transcript.toLowerCase().trim();
  const e = expected.toLowerCase().trim();
  if (t === e) return 100;
  // Simple word-overlap score
  const tWords = new Set(t.split(/\s+/));
  const eWords = e.split(/\s+/);
  const matches = eWords.filter(w => tWords.has(w)).length;
  return Math.round((matches / eWords.length) * 100);
}

function generateFeedback(score) {
  if (score >= 90) return '¡Excelente pronunciación!';
  if (score >= 70) return 'Buena pronunciación. ¡Sigue practicando!';
  if (score >= 50) return 'Pronunciación aceptable. Intenta de nuevo.';
  return 'Necesitas más práctica. Escucha el audio modelo y repite.';
}

exports.mapToGoogleLang = mapToGoogleLang;
