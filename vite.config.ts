import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  build:{
    outDir: 'docs', // 输出目录
    emptyOutDir: true, // 在构建前清空输出目录
  },
  base: '/picstream/', // 确保这里的路径与您的仓库名称匹配
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
