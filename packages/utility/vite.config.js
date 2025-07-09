import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  root: 'packages/utility',
  plugins: [
    vue(),
    !process.env.IS_WATCH &&
      dts({
        // include: ['src'], // optional
        // skipDiagnostics: true, // optional
      }),
  ].filter(Boolean),
  build: {
    sourcemap: true,
    minify: true,
    target: 'es2022',
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'utility',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },   
    emptyOutDir: !process.env.IS_WATCH,
    rollupOptions: {
      external: ['vue', 'vue-router', 'virtual:__federation__', '@metronik/devextreme'],
    },
    cssCodeSplit: true,
  }
})
