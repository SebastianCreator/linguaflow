// src/store/authStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import api from '../services/api';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      isLoading: false,
      isAuthenticated: false,

      setAuth: (token, refreshToken, user) => {
        set({ token, refreshToken, user, isAuthenticated: true });
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      },

      clearAuth: () => {
        set({ token: null, refreshToken: null, user: null, isAuthenticated: false });
        delete api.defaults.headers.common['Authorization'];
      },

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const { data } = await api.post('/auth/login', { email, password });
          get().setAuth(data.token, data.refreshToken, data.user);
          return { success: true };
        } catch (err) {
          return { success: false, error: err.response?.data?.error || 'Error al iniciar sesión' };
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (name, email, password, nativeLanguage) => {
        set({ isLoading: true });
        try {
          const { data } = await api.post('/auth/register', { name, email, password, nativeLanguage });
          get().setAuth(data.token, data.refreshToken, data.user);
          return { success: true };
        } catch (err) {
          return { success: false, error: err.response?.data?.error || 'Error al registrarse' };
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        get().clearAuth();
      },

      updateUser: (updates) => {
        set(state => ({ user: { ...state.user, ...updates } }));
      },

      refreshAccessToken: async () => {
        const rt = get().refreshToken;
        if (!rt) return false;
        try {
          const { data } = await api.post('/auth/refresh', { refreshToken: rt });
          set({ token: data.token, refreshToken: data.refreshToken });
          api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
          return true;
        } catch {
          get().clearAuth();
          return false;
        }
      }
    }),
    {
      name: 'linguaflow-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        refreshToken: state.refreshToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default useAuthStore;
