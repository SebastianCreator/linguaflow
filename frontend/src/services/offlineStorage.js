// src/services/offlineStorage.js
import { openDB } from 'idb';

const DB_NAME = 'linguaflow-offline';
const DB_VERSION = 1;

const initDB = () => openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    // Lessons store
    if (!db.objectStoreNames.contains('lessons')) {
      const ls = db.createObjectStore('lessons', { keyPath: '_id' });
      ls.createIndex('languageCode', 'languageCode');
      ls.createIndex('level', 'level');
    }
    // Progress store (pending sync)
    if (!db.objectStoreNames.contains('pendingProgress')) {
      db.createObjectStore('pendingProgress', { keyPath: 'lessonId' });
    }
    // User data cache
    if (!db.objectStoreNames.contains('userCache')) {
      db.createObjectStore('userCache', { keyPath: 'key' });
    }
    // Offline bundle metadata
    if (!db.objectStoreNames.contains('bundles')) {
      db.createObjectStore('bundles', { keyPath: 'language' });
    }
  }
});

// ── Lessons ──────────────────────────────────

export const saveLessonsOffline = async (lessons) => {
  const db = await initDB();
  const tx = db.transaction('lessons', 'readwrite');
  await Promise.all(lessons.map(l => tx.store.put(l)));
  await tx.done;
};

export const getOfflineLesson = async (id) => {
  const db = await initDB();
  return db.get('lessons', id);
};

export const getOfflineLessons = async (languageCode, level) => {
  const db = await initDB();
  const all = await db.getAllFromIndex('lessons', 'languageCode', languageCode);
  return level ? all.filter(l => l.level === level) : all;
};

// ── Pending Progress ──────────────────────────

export const savePendingProgress = async (progress) => {
  const db = await initDB();
  await db.put('pendingProgress', { ...progress, savedAt: new Date().toISOString() });
};

export const getPendingProgress = async () => {
  const db = await initDB();
  return db.getAll('pendingProgress');
};

export const clearSyncedProgress = async (lessonIds) => {
  const db = await initDB();
  const tx = db.transaction('pendingProgress', 'readwrite');
  await Promise.all(lessonIds.map(id => tx.store.delete(id)));
  await tx.done;
};

// ── User Cache ────────────────────────────────

export const cacheUserData = async (key, data) => {
  const db = await initDB();
  await db.put('userCache', { key, data, cachedAt: new Date().toISOString() });
};

export const getCachedUserData = async (key) => {
  const db = await initDB();
  const record = await db.get('userCache', key);
  return record?.data || null;
};

// ── Bundle Metadata ───────────────────────────

export const saveBundleMetadata = async (language, metadata) => {
  const db = await initDB();
  await db.put('bundles', { language, ...metadata, downloadedAt: new Date().toISOString() });
};

export const getBundleMetadata = async (language) => {
  const db = await initDB();
  return db.get('bundles', language);
};

// ── Sync with server ──────────────────────────

export const syncPendingProgress = async (syncFn) => {
  const pending = await getPendingProgress();
  if (!pending.length) return { synced: 0 };
  try {
    const result = await syncFn(pending);
    await clearSyncedProgress(pending.map(p => p.lessonId));
    return result;
  } catch (err) {
    console.warn('Sync failed, will retry later:', err.message);
    return { synced: 0, error: err.message };
  }
};
