// src/screens/Profile/ProfileScreen.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';
import { usersAPI, notificationsAPI } from '../../services/api';
import { saveLessonsOffline, saveBundleMetadata } from '../../services/offlineStorage';
import { progressAPI } from '../../services/api';
import { Card, StatCard, LevelBadge, Badge } from '../../components/common/Card';
import Button from '../../components/common/Button';
import styles from './Profile.module.css';

const LANG_FLAGS = { en:'🇬🇧', fr:'🇫🇷', de:'🇩🇪', pt:'🇧🇷', it:'🇮🇹' };
const LANG_NAMES = { en:'Inglés', fr:'Francés', de:'Alemán', pt:'Portugués', it:'Italiano' };
const CEFR_NAMES = { A1:'Principiante', A2:'Elemental', B1:'Intermedio', B2:'Interm. Alto', C1:'Avanzado', C2:'Maestría' };
const CEFR_COLORS = { A1:'#4ADE80', A2:'#86EFAC', B1:'#60A5FA', B2:'#818CF8', C1:'#E879F9', C2:'#FB923C' };

export default function ProfileScreen() {
  const { user, updateUser, logout } = useAuthStore();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user?.name || '', interfaceLanguage: user?.interfaceLanguage || 'es', dailyGoalMinutes: user?.dailyGoalMinutes || 15, reminderTime: user?.reminderTime || '09:00' });
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [notifEnabled, setNotifEnabled] = useState(user?.notificationsEnabled || false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await usersAPI.updateProfile(form);
      updateUser(res.data.user);
      setEditing(false);
      toast.success('Perfil actualizado');
    } catch {
      toast.error('Error al guardar');
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadOffline = async (langCode) => {
    setDownloading(langCode);
    try {
      const res = await usersAPI.getOfflineBundle(langCode);
      await saveLessonsOffline(res.data.lessons);
      await saveBundleMetadata(langCode, { totalLessons: res.data.lessons.length, level: res.data.level });
      toast.success(`${LANG_NAMES[langCode] || langCode}: ${res.data.lessons.length} lecciones descargadas para uso sin conexión 📥`);
    } catch (err) {
      toast.error('Error al descargar para uso sin conexión');
    } finally {
      setDownloading(null);
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      const { syncPendingProgress } = await import('../../services/offlineStorage');
      const result = await syncPendingProgress(async (pending) => {
        const res = await progressAPI.sync({ offlineProgress: pending });
        return res.data;
      });
      if (result.synced > 0) toast.success(`${result.synced} actividades sincronizadas ✓`);
      else toast('No hay datos pendientes de sincronización', { icon: 'ℹ️' });
    } catch {
      toast.error('Error al sincronizar');
    } finally {
      setSyncing(false);
    }
  };

  const handleNotifications = async () => {
    if (!('Notification' in window)) { toast.error('Las notificaciones no están disponibles en este navegador'); return; }
    if (!notifEnabled) {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') { toast.error('Permiso denegado'); return; }
      try {
        const { data } = await notificationsAPI.getVapidKey();
        if (!data.publicKey) { toast('Notificaciones configuradas localmente'); setNotifEnabled(true); return; }
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: data.publicKey });
        await notificationsAPI.subscribe(sub);
        setNotifEnabled(true);
        updateUser({ notificationsEnabled: true });
        toast.success('Notificaciones activadas 🔔');
      } catch { toast.error('Error al activar notificaciones'); }
    } else {
      await notificationsAPI.unsubscribe().catch(() => {});
      setNotifEnabled(false);
      updateUser({ notificationsEnabled: false });
      toast('Notificaciones desactivadas');
    }
  };

  const totalXP = user?.enrollments?.reduce((s, e) => s + (e.totalXP || 0), 0) || 0;
  const totalLessons = user?.enrollments?.reduce((s, e) => s + (e.completedLessons?.length || 0), 0) || 0;

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Mi Perfil</h1>

      {/* User card */}
      <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}>
        <Card padding="lg" className={styles.userCard}>
          <div className={styles.userTop}>
            <div className={styles.avatar}>
              {user?.name?.[0]?.toUpperCase() || '?'}
            </div>
            <div className={styles.userInfo}>
              {editing ? (
                <input value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} className={styles.nameInput} />
              ) : (
                <h2 className={styles.userName}>{user?.name}</h2>
              )}
              <p className={styles.userEmail}>{user?.email}</p>
              <div className={styles.userMeta}>
                <span className={styles.metaTag}>🌐 {user?.enrollments?.length || 0} idiomas</span>
                <span className={styles.metaTag}>⚡ {totalXP.toLocaleString()} XP total</span>
                <span className={styles.metaTag}>🔥 {user?.loginStreak || 0} días de racha</span>
              </div>
            </div>
            <div className={styles.editBtn}>
              {editing ? (
                <div style={{ display:'flex', gap:8 }}>
                  <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>Cancelar</Button>
                  <Button size="sm" onClick={handleSave} loading={saving}>Guardar</Button>
                </div>
              ) : (
                <Button size="sm" variant="secondary" onClick={() => setEditing(true)}>✏️ Editar</Button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <StatCard icon="⚡" label="XP Total" value={totalXP.toLocaleString()} color="var(--accent-amber)" />
        <StatCard icon="📖" label="Lecciones completadas" value={totalLessons} color="var(--accent-emerald)" />
        <StatCard icon="🏅" label="Logros" value={user?.achievements?.length || 0} color="var(--accent-violet)" />
        <StatCard icon="🔥" label="Racha" value={`${user?.loginStreak || 0}d`} color="var(--accent-rose)" />
      </div>

      <div className={styles.sectionsGrid}>
        {/* Preferences */}
        <Card padding="lg">
          <h3 className={styles.sectionTitle}>Preferencias</h3>
          <div className={styles.prefList}>
            <div className={styles.prefItem}>
              <span className={styles.prefLabel}>Idioma de interfaz</span>
              {editing ? (
                <select value={form.interfaceLanguage} onChange={e => setForm(p=>({...p,interfaceLanguage:e.target.value}))}>
                  <option value="es">🇨🇴 Español</option>
                  <option value="en">🇺🇸 English</option>
                </select>
              ) : (
                <span className={styles.prefValue}>{user?.interfaceLanguage === 'en' ? '🇺🇸 English' : '🇨🇴 Español'}</span>
              )}
            </div>
            <div className={styles.prefItem}>
              <span className={styles.prefLabel}>Meta diaria</span>
              {editing ? (
                <select value={form.dailyGoalMinutes} onChange={e => setForm(p=>({...p,dailyGoalMinutes:+e.target.value}))}>
                  {[5,10,15,20,30,45,60].map(m => <option key={m} value={m}>{m} minutos</option>)}
                </select>
              ) : (
                <span className={styles.prefValue}>⏱ {user?.dailyGoalMinutes || 15} min/día</span>
              )}
            </div>
            <div className={styles.prefItem}>
              <span className={styles.prefLabel}>Recordatorio</span>
              {editing ? (
                <input type="time" value={form.reminderTime} onChange={e => setForm(p=>({...p,reminderTime:e.target.value}))} style={{ width:120 }} />
              ) : (
                <span className={styles.prefValue}>🕘 {user?.reminderTime || '09:00'}</span>
              )}
            </div>
          </div>
        </Card>

        {/* Notifications & Sync */}
        <Card padding="lg">
          <h3 className={styles.sectionTitle}>Notificaciones y sincronización</h3>
          <div className={styles.actionList}>
            <div className={styles.actionItem}>
              <div>
                <div className={styles.actionName}>Notificaciones push</div>
                <div className={styles.actionDesc}>Recibe recordatorios de estudio</div>
              </div>
              <button
                className={[styles.toggle, notifEnabled ? styles.toggleOn : ''].join(' ')}
                onClick={handleNotifications}
              >
                <div className={styles.toggleThumb} />
              </button>
            </div>
            <div className={styles.actionItem}>
              <div>
                <div className={styles.actionName}>Sincronizar progreso</div>
                <div className={styles.actionDesc}>Sube actividades offline al servidor</div>
              </div>
              <Button size="sm" variant="secondary" onClick={handleSync} loading={syncing}>
                🔄 Sincronizar
              </Button>
            </div>
          </div>
        </Card>

        {/* Languages progress */}
        <Card padding="lg" className={styles.fullWidth}>
          <h3 className={styles.sectionTitle}>Mis idiomas y progreso</h3>
          {!user?.enrollments?.length ? (
            <p style={{ color:'var(--text-muted)', fontSize:14 }}>Aún no estás inscrito en ningún idioma.</p>
          ) : (
            <div className={styles.langProgressList}>
              {user.enrollments.map(enr => (
                <div key={enr.languageCode} className={styles.langProgressItem}>
                  <span style={{ fontSize:28 }}>{LANG_FLAGS[enr.languageCode] || '🌍'}</span>
                  <div style={{ flex:1 }}>
                    <div className={styles.langProgName}>{LANG_NAMES[enr.languageCode] || enr.languageCode}</div>
                    <div className={styles.langProgMeta}>
                      <LevelBadge level={enr.currentLevel} size="sm" />
                      <span style={{ fontSize:11, color:'var(--text-muted)' }}>{CEFR_NAMES[enr.currentLevel]}</span>
                      <span style={{ fontSize:11, color:'var(--accent-amber)', fontWeight:700 }}>{(enr.totalXP||0).toLocaleString()} XP</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDownloadOffline(enr.languageCode)}
                    loading={downloading === enr.languageCode}
                  >
                    📥 Offline
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Achievements */}
        {!!user?.achievements?.length && (
          <Card padding="lg" className={styles.fullWidth}>
            <h3 className={styles.sectionTitle}>Logros desbloqueados</h3>
            <div className={styles.achievementGrid}>
              {user.achievements.map((a, i) => (
                <motion.div key={i} className={styles.achievementCard}
                  initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay: i*0.05 }}>
                  <div className={styles.achieveIcon}>🏅</div>
                  <div className={styles.achieveName}>{a.name}</div>
                  <div className={styles.achieveXP}>+{a.xpAwarded} XP</div>
                </motion.div>
              ))}
            </div>
          </Card>
        )}
      </div>

      {/* Logout */}
      <div className={styles.dangerZone}>
        <Button variant="danger" onClick={() => { logout(); window.location.href = '/login'; }}>
          ⎋ Cerrar sesión
        </Button>
      </div>
    </div>
  );
}
