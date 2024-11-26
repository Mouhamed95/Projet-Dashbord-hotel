import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  // resolve: {
  //   // Ensure that Vite resolves the correct module format
  //   alias: {
  //     // This can help if there are issues with module resolution
  //     'date-fns': 'date-fns/esm/index.js',
  //   },
  // },
  // // Optional: If you want to enable some additional optimizations
  // build: {
  //   target: 'esnext', // Ensure modern JS features are supported
  // },
})
