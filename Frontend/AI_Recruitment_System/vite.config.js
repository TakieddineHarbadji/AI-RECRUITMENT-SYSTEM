import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react(),tailwindcss()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // this makes `@` point to `src` folder
      'Components': path.resolve(__dirname, 'src/Components'), // Optional extra alias
      'assets': path.resolve(__dirname, 'src/assets'), // Optional extra alias
    },
  },
});
