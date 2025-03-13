import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080', // Proxy all /api calls to backend
    },
  },
});
