import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
        quietDeps: true
      }
    },
    devSourcemap: false,
    postcss: {
      plugins: []
    }
  },
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    reportCompressedSize: false,
    sourcemap: false
  }
})
