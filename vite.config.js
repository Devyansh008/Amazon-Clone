import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// The 'base' setting is important for GitHub Pages deployment.
// It must match the repository name so that assets load correctly.
export default defineConfig({
  plugins: [react()],
  base: '/Amazon-Clone/',
})
