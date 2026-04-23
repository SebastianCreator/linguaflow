// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
          style: {
            background: '#1E293B',
            color: '#F1F5F9',
            borderRadius: '12px',
            border: '1px solid rgba(99,102,241,0.3)',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '14px',
          },
          success: { iconTheme: { primary: '#22C55E', secondary: '#F1F5F9' } },
          error: { iconTheme: { primary: '#EF4444', secondary: '#F1F5F9' } },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// Register Service Worker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(console.error);
  });
}
