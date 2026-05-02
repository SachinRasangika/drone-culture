import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production builds target GitHub Pages: https://<user>.github.io/drone-culture/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/drone-culture/' : '/',
  plugins: [react()],
}));
