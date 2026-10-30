import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const entry = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Multi-page: /jt builds to dist/jt/index.html, so the QR on the flyer
    // lands on a real page instead of needing a client-side router.
    rollupOptions: {
      input: {
        main: entry('./index.html'),
        jt: entry('./jt/index.html'),
      },
    },
  },
})
