// mobile/src/services/notificationService.js
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export const setupNotifications = () => {
  PushNotification.configure({
    onRegister: (token) => { console.log('Push token:', token.token); },
    onNotification: (notification) => {
      console.log('Notification:', notification);
      notification.finish?.(PushNotification.FetchResult.NoData);
    },
    permissions: { alert: true, badge: true, sound: true },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
  });

  // Create default channel for Android
  PushNotification.createChannel(
    { channelId:'linguaflow-reminders', channelName:'Recordatorios de estudio', importance:4, vibrate:true },
    () => {}
  );
};

export const scheduleStudyReminder = (hour = 9, minute = 0) => {
  PushNotification.cancelAllLocalNotifications();
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  if (date < new Date()) date.setDate(date.getDate() + 1);

  PushNotification.localNotificationSchedule({
    channelId:   'linguaflow-reminders',
    title:       '📚 LinguaFlow',
    message:     '¡Es hora de tu sesión de estudio! Tu racha te espera.',
    date,
    repeatType: 'day',
    allowWhileIdle: true,
    userInfo: { type: 'study_reminder' },
  });
};

export const cancelReminders = () => {
  PushNotification.cancelAllLocalNotifications();
};

// mobile/src/services/api.js — re-exports the same API client configured for mobile
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://api.linguaflow.app/api'; // Change to your backend URL

const api = axios.create({ baseURL: API_URL, timeout: 15000, headers: { 'Content-Type': 'application/json' } });

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('linguaflow_token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  res => res,
  async (err) => {
    if (err.response?.status === 401 && !err.config._retry) {
      err.config._retry = true;
      const rt = await AsyncStorage.getItem('linguaflow_refresh');
      if (rt) {
        try {
          const { data } = await axios.post(`${API_URL}/auth/refresh`, { refreshToken: rt });
          await AsyncStorage.setItem('linguaflow_token', data.token);
          err.config.headers['Authorization'] = `Bearer ${data.token}`;
          return api(err.config);
        } catch {
          await AsyncStorage.multiRemove(['linguaflow_token','linguaflow_refresh']);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default api;
