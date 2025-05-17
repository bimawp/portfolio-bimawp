import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 3,
    //     interlaced: false,
    //   },
    //   mozjpeg: {
    //     quality: 75,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   webp: {
    //     quality: 75,
    //   },
    // }),
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
