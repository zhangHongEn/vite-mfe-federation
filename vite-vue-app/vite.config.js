import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'
import cssSandbox from 'vite-plugin-sandbox-css'
import sandbox from 'vite-plugin-sandbox'

// https://vite.dev/config/
export default ({ command }) => defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vite-vue-app",
      manifest: true,
      exposes: {
        "./main": "./src/main",
      },
      shared: ['vue']
    }),
    sandbox({
      code: "vite-vue-app"
    }),
    cssSandbox({
      prefix: ".vite-vue-app"
    })
  ],
  base: command === 'serve' ? 'http://localhost:5001' : "https://zhanghongen.github.io/vite-mfe-federation/vite-vue-app/dist",
  server: {
    origin: "http://localhost:5001",
    cors: true
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
