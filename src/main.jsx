import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Pastikan file CSS diimpor di sini

//import { defineConfig } from 'vite';//
//import react from '@vitejs/plugin-react';//

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);