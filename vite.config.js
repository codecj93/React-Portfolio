import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['/Users/cjosephs93/Desktop/Bootcamp/challenges/React Portfolio/React-Portfolio/src/']
    }
  }
});
