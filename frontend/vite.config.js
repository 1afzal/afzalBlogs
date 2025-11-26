import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Vite config is an ES module (because of "type": "module" in package.json)
// so we use import.meta.url to build an alias for "@/..."
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})