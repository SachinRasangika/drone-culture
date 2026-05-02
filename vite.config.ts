import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://<user>.github.io/drone-culture/
export default defineConfig({
  base: '/drone-culture/',
  plugins: [react()],
});
