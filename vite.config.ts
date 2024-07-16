import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/colors.scss";',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  base: '/grid/',
  build: {
    minify: true,
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
})
