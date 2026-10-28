import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/',

  build: {
    // Smaller chunks = faster loading on slow connections
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react'
            if (id.includes('react-router-dom')) return 'vendor-router'
            if (id.includes('lucide-react')) return 'vendor-icons'
            if (id.includes('framer-motion')) return 'vendor-motion'
          }
        },
      },
    },
    // Better compression
    target: 'es2018',
    // Warn if any chunk > 500kb
    chunkSizeWarningLimit: 500,
  },
}))