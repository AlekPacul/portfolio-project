import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // Brotli (preferred by modern browsers — smaller than gzip)
    compression({ algorithms: ['brotliCompress'], exclude: [/\.(png|jpe?g|gif|webp|ico|svg)$/] }),
    // gzip fallback for older hosts
    compression({ algorithms: ['gzip'], exclude: [/\.(png|jpe?g|gif|webp|ico|svg)$/] }),
  ],
  build: {
    // Terser: more aggressive minification than esbuild default
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,   // strip all console.* calls from production
        drop_debugger: true,
        passes: 2,            // two compression passes for smaller output
      },
      mangle: {
        toplevel: true,       // mangle top-level variable and function names
      },
      format: {
        comments: false,      // strip all comments
      },
    },
    // Warn if any single chunk exceeds 300 kB
    chunkSizeWarningLimit: 300,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
