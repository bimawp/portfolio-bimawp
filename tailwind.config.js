/** @type {import('tailwindcss').Config} */
export default {
  content: [
  
    './src/**/*.{js,ts,jsx,tsx}' // Pastikan mencakup semua file
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B7280', // gray-500
          light: '#9CA3AF',   // gray-400
          dark: '#4B5563'     // gray-600
        }
      }
    }
  },
  plugins: [], // Tambahkan plugin jika diperlukan
};
