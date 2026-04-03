import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/Wedding-Diary-React-Web/' : '/',

  build: {
    // Smaller chunks = faster loading on slow connections
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — cached long-term
          'vendor-react': ['react', 'react-dom'],
          // Router — separate chunk
          'vendor-router': ['react-router-dom'],
          // Icons — large library, isolated
          'vendor-icons': ['lucide-react'],
          // Animation library — only needed on public pages
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    // Better compression
    target: 'es2018',
    // Warn if any chunk > 500kb
    chunkSizeWarningLimit: 500,
  },
}))