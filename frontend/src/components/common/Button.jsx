// src/components/common/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

export default function Button({
  children, onClick, type = 'button', variant = 'primary',
  size = 'md', disabled = false, loading = false,
  icon, fullWidth = false, className = ''
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className
      ].join(' ')}
    >
      {loading ? (
        <span className={styles.spinner} />
      ) : icon ? (
        <span className={styles.icon}>{icon}</span>
      ) : null}
      {children}
    </motion.button>
  );
}
