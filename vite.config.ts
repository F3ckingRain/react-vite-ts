import path from 'path';
import process from 'process';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        app: '/public/index.html',
      },
    },
  },
  root: 'src',
  publicDir: '../public',
  server: {
    open: ' index.html',
    port: 8000,
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
});
