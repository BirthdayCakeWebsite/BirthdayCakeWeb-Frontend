import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // dùng import '@/...'
    },
  },
  // Khi deploy GitHub Pages cho repo 'birthday-frontend', bật dòng dưới:
  base: '/birthday-frontend/',
});
