import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dashboard2.0/',
  css: {
    postcss,
  },
  plugins: [react()],
 
});
