// src/services/speechService.js
/**
 * Frontend speech service.
 * Uses Web Speech API when available, falls back gracefully.
 */

// ── Text-to-Speech ──────────────────────────
const LANG_MAP = {
  en: 'en-US', fr: 'fr-FR', de: 'de-DE',
  pt: 'pt-BR', it: 'it-IT', es: 'es-ES',
  zh: 'zh-CN', ja: 'ja-JP'
};

export const speak = (text, languageCode = 'en', rate = 0.9, pitch = 1) => {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Web Speech API not supported'));
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = LANG_MAP[languageCode] || 'en-US';
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Try to find a native voice for the language
    const voices = window.speechSynthesis.getVoices();
    const native = voices.find(v => v.lang.startsWith(utterance.lang.split('-')[0]));
    if (native) utterance.voice = native;

    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e);
    window.speechSynthesis.speak(utterance);
  });
};

export const stopSpeaking = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
};

// ── Speech Recognition ───────────────────────
let mediaRecorder = null;
let audioChunks = [];

export const startRecording = async () => {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('Microphone not supported');
  }
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  audioChunks = [];
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) audioChunks.push(e.data);
  };
  mediaRecorder.start(100);
  return true;
};

export const stopRecording = () => {
  return new Promise((resolve) => {
    if (!mediaRecorder) { resolve(null); return; }
    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunks, { type: 'audio/webm' });
      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(',')[1];
        resolve({ blob, base64, url: URL.createObjectURL(blob) });
      };
      reader.readAsDataURL(blob);
      // Stop all tracks
      mediaRecorder.stream.getTracks().forEach(t => t.stop());
    };
    mediaRecorder.stop();
  });
};

// ── Browser Speech Recognition (real-time) ──
export const recognizeSpeech = (languageCode = 'en') => {
  return new Promise((resolve, reject) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      reject(new Error('Speech recognition not supported in this browser'));
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = LANG_MAP[languageCode] || 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;
      resolve({ transcript, confidence });
    };
    recognition.onerror = (e) => reject(new Error(e.error));
    recognition.start();
  });
};

// ── Score pronunciation locally ──────────────
export const scorePronunciation = (transcript, expected) => {
  if (!transcript || !expected) return 0;
  const t = transcript.toLowerCase().trim();
  const e = expected.toLowerCase().trim();
  if (t === e) return 100;
  const tWords = new Set(t.split(/\s+/));
  const eWords = e.split(/\s+/);
  const matches = eWords.filter(w => tWords.has(w)).length;
  return Math.round((matches / eWords.length) * 100);
};

export const isSpeechSynthesisSupported = () => 'speechSynthesis' in window;
export const isSpeechRecognitionSupported = () => !!(window.SpeechRecognition || window.webkitSpeechRecognition);
export const isMicrophoneSupported = () => !!(navigator.mediaDevices?.getUserMedia);
