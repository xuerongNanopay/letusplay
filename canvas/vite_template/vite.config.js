import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  preview: {
    port: 8080,
  },
  server: {
    port: 3030,
  },
})