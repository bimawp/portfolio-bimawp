import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      mozjpeg: {
        quality: 75,
      },
      optipng: {
        optimizationLevel: 7,
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  base: './', // Pastikan path relatif
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Misalnya, pisahkan dependensi besar
          }
        },
      },
    },
  },
});
