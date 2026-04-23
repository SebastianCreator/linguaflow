// src/components/common/AppLayout.jsx
import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useAuthStore from '../../store/authStore';
import styles from './AppLayout.module.css';

const NAV_ITEMS = [
  { to: '/dashboard',  icon: '⊞', label: 'Inicio' },
  { to: '/languages',  icon: '🌐', label: 'Idiomas' },
  { to: '/profile',    icon: '◎', label: 'Perfil' },
];

export default function AppLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Extract current language from URL for dynamic nav items
  const langMatch = location.pathname.match(/\/(lessons|evaluations)\/([a-z]+)/);
  const currentLang = langMatch?.[2];
  const dynamicItems = currentLang ? [
    { to: `/lessons/${currentLang}`,     icon: '📖', label: 'Lecciones' },
    { to: `/evaluations/${currentLang}`, icon: '📝', label: 'Evaluaciones' },
  ] : [];

  const allNavItems = [...NAV_ITEMS.slice(0, 2), ...dynamicItems, NAV_ITEMS[2]];

  return (
    <div className={styles.layout}>
      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          {/* Logo */}
          <NavLink to="/dashboard" className={styles.logo}>
            <span className={styles.logoIcon}>🌐</span>
            <span className={styles.logoText}>LinguaFlow</span>
          </NavLink>

          {/* Navigation */}
          <nav className={styles.nav}>
            {allNavItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
                }
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* User section */}
          <div className={styles.userSection}>
            <div className={styles.userAvatar}>
              {user?.name?.[0]?.toUpperCase() || '?'}
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>{user?.name}</div>
              <div className={styles.userLevel}>
                {user?.enrollments?.[0]?.currentLevel || 'A1'} ·{' '}
                {user?.enrollments?.[0]?.totalXP || 0} XP
              </div>
            </div>
            <button className={styles.logoutBtn} onClick={handleLogout} title="Cerrar sesión">
              ⎋
            </button>
          </div>
        </div>
      </aside>

      {/* ── Mobile Header ── */}
      <header className={styles.mobileHeader}>
        <NavLink to="/dashboard" className={styles.mobileLogo}>
          <span>🌐</span>
          <span>LinguaFlow</span>
        </NavLink>
        <button
          className={styles.menuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {allNavItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${styles.mobileNavItem} ${isActive ? styles.navItemActive : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
            <button className={styles.mobileLogout} onClick={handleLogout}>
              ⎋ Cerrar sesión
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Content ── */}
      <main className={styles.main}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={styles.pageWrapper}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* ── Mobile Bottom Nav ── */}
      <nav className={styles.bottomNav}>
        {allNavItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `${styles.bottomNavItem} ${isActive ? styles.bottomNavItemActive : ''}`
            }
          >
            <span className={styles.bottomNavIcon}>{item.icon}</span>
            <span className={styles.bottomNavLabel}>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
