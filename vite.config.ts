import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: relative base so assets resolve correctly under Electron's file:// protocol
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
