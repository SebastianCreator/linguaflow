// src/components/common/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

export function Card({ children, className = '', hover = false, onClick, padding = 'md' }) {
  const Tag = onClick ? motion.div : 'div';
  const props = onClick ? {
    onClick,
    whileHover: { y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.4)' },
    whileTap: { scale: 0.99 },
    style: { cursor: 'pointer' }
  } : {};
  return (
    <Tag className={[styles.card, styles[`pad-${padding}`], hover ? styles.hover : '', className].join(' ')} {...props}>
      {children}
    </Tag>
  );
}

// src/components/common/LevelBadge.jsx
export function LevelBadge({ level, size = 'md' }) {
  const colors = {
    A1: '#4ADE80', A2: '#86EFAC', B1: '#60A5FA',
    B2: '#818CF8', C1: '#E879F9', C2: '#FB923C'
  };
  const color = colors[level] || '#94A3B8';
  return (
    <span className={[styles.levelBadge, styles[`level-${size}`]].join(' ')}
      style={{ '--lvl-color': color }}>
      {level}
    </span>
  );
}

// src/components/common/ProgressBar.jsx
export function ProgressBar({ value, max = 100, color, label, showLabel = true }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={styles.progressWrap}>
      {showLabel && (
        <div className={styles.progressHeader}>
          {label && <span className={styles.progressLabel}>{label}</span>}
          <span className={styles.progressPct}>{pct}%</span>
        </div>
      )}
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          style={{ '--progress-color': color || 'var(--brand-primary)' }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

// src/components/common/Badge.jsx
export function Badge({ children, variant = 'default', size = 'md' }) {
  return (
    <span className={[styles.badge, styles[`badge-${variant}`], styles[`badge-${size}`]].join(' ')}>
      {children}
    </span>
  );
}

// src/components/common/Skeleton.jsx
export function Skeleton({ width, height, rounded = false, className = '' }) {
  return (
    <div
      className={[styles.skeleton, rounded ? styles.skeletonRounded : '', className].join(' ')}
      style={{ width, height }}
    />
  );
}

// src/components/common/EmptyState.jsx
export function EmptyState({ icon = '📭', title, description, action }) {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>{icon}</div>
      <h3 className={styles.emptyTitle}>{title}</h3>
      {description && <p className={styles.emptyDesc}>{description}</p>}
      {action}
    </div>
  );
}

// src/components/common/StatCard.jsx
export function StatCard({ icon, label, value, color, sub }) {
  return (
    <div className={styles.statCard} style={{ '--stat-color': color || 'var(--brand-primary)' }}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statContent}>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
        {sub && <div className={styles.statSub}>{sub}</div>}
      </div>
    </div>
  );
}
