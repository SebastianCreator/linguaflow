// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from './store/authStore';
import api from './services/api';

// Layouts
import AppLayout from './components/common/AppLayout';
import AuthLayout from './components/common/AuthLayout';

// Screens
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import LanguagesScreen from './screens/Dashboard/LanguagesScreen';
import LessonsScreen from './screens/Lessons/LessonsScreen';
import LessonDetailScreen from './screens/Lessons/LessonDetailScreen';
import LessonPlayerScreen from './screens/Lessons/LessonPlayerScreen';
import EvaluationsScreen from './screens/Evaluation/EvaluationsScreen';
import EvaluationPlayerScreen from './screens/Evaluation/EvaluationPlayerScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import LandingScreen from './screens/Landing/LandingScreen';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default function App() {
  const { token, isAuthenticated } = useAuthStore();

  // Hydrate token into axios on mount
  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <Routes>
      {/* ── Public landing ── */}
      <Route path="/" element={<LandingScreen />} />

      {/* ── Auth routes ── */}
      <Route element={<AuthLayout />}>
        <Route path="/login"    element={<PublicRoute><LoginScreen /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegisterScreen /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordScreen /></PublicRoute>} />
      </Route>

      {/* ── Protected app routes ── */}
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="/dashboard"              element={<DashboardScreen />} />
        <Route path="/languages"              element={<LanguagesScreen />} />
        <Route path="/lessons/:language"      element={<LessonsScreen />} />
        <Route path="/lessons/:language/:id"  element={<LessonDetailScreen />} />
        <Route path="/play/:language/:id"     element={<LessonPlayerScreen />} />
        <Route path="/evaluations/:language"  element={<EvaluationsScreen />} />
        <Route path="/evaluations/:language/:id/play" element={<EvaluationPlayerScreen />} />
        <Route path="/profile"               element={<ProfileScreen />} />
      </Route>

      {/* ── Fallback ── */}
      <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} replace />} />
    </Routes>
  );
}
