import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use absolute base — custom app:// protocol in Electron resolves root-relative paths
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
