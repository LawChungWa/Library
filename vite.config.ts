import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Library/', // <-- 加上呢行，確保 GitHub Pages 順利讀取資產路徑
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {}, __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true, // or false
  __VUE_OPTIONS_API__: true, // or false if you want to disable Options API
  __VUE_PROD_DEVTOOLS__: false, },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})