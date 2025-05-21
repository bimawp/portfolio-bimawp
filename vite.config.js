import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),

  ],
  base: '/', // ← GANTI ke '/' untuk deployment di Vercel
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Misalnya, pisahkan dependensi besar
        }
      },
    },
  },
});
