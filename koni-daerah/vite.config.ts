import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: './index.source.html'
      }
    }
  },
  server: {
    port: 3001,
    open: false
  }
});
