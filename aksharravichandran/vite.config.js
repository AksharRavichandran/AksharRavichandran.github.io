import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/aksharravichandran/' // <-- IMPORTANT: replace with your repo name
});
