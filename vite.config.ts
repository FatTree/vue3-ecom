import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
  base: '/vue3-ecom/',
  plugins: [
    VueRouter(),
    vue(),
    vueDevTools(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
    }), 
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/plugins/auto-import.js"
    }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/main.scss" as *;`
      }
    }
  }
})
