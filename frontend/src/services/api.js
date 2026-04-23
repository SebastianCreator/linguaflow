// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
});

// Request interceptor — attach token
api.interceptors.request.use(
  (config) => {
    // Token is set via authStore.setAuth
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 &&
        error.response?.data?.code === 'TOKEN_EXPIRED' &&
        !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Dynamically import to avoid circular dependency
        const { default: useAuthStore } = await import('../store/authStore');
        const refreshed = await useAuthStore.getState().refreshAccessToken();
        if (refreshed) {
          const token = useAuthStore.getState().token;
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return api(originalRequest);
        }
      } catch {
        // Refresh failed — user will be redirected to login
      }
    }
    return Promise.reject(error);
  }
);

export default api;

// ── Typed API helpers ──────────────────────────────────

export const authAPI = {
  login:          (data) => api.post('/auth/login', data),
  register:       (data) => api.post('/auth/register', data),
  getMe:          ()     => api.get('/auth/me'),
  refreshToken:   (rt)   => api.post('/auth/refresh', { refreshToken: rt }),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword:  (token, password) => api.post(`/auth/reset-password/${token}`, { password }),
};

export const lessonsAPI = {
  getAll:       (params) => api.get('/lessons', { params }),
  getById:      (id)     => api.get(`/lessons/${id}`),
  getCurriculum:(lang, level) => api.get(`/lessons/curriculum/${lang}/${level}`),
  complete:     (id, data) => api.post(`/lessons/${id}/complete`, data),
};

export const evaluationsAPI = {
  getAll:  (params) => api.get('/evaluations', { params }),
  getById: (id)     => api.get(`/evaluations/${id}`),
  submit:  (id, data) => api.post(`/evaluations/${id}/submit`, data),
};

export const usersAPI = {
  getProfile:   ()     => api.get('/users/profile'),
  updateProfile:(data) => api.put('/users/profile', data),
  enroll:       (languageCode) => api.post('/users/enroll', { languageCode }),
  getDashboard: ()     => api.get('/users/dashboard'),
  getOfflineBundle: (lang) => api.get(`/users/offline-bundle/${lang}`),
};

export const progressAPI = {
  getByLanguage: (lang) => api.get(`/progress/${lang}`),
  sync:          (data) => api.post('/progress/sync', data),
};

export const languagesAPI = {
  getAll: () => api.get('/languages'),
};

export const notificationsAPI = {
  subscribe:     (sub)  => api.post('/notifications/subscribe', { subscription: sub }),
  unsubscribe:   ()     => api.delete('/notifications/unsubscribe'),
  test:          ()     => api.post('/notifications/test'),
  getVapidKey:   ()     => api.get('/notifications/vapid-public-key'),
};
