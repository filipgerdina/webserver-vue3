import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  root: __dirname,
  plugins: [
    vue(),
    !process.env.IS_WATCH &&
      dts({
        // include: ['src'], // optional
        // skipDiagnostics: true, // optional
      }),
  ].filter(Boolean),
  build: {
    sourcemap: !process.env.IS_PRODUCTION,
    minify: true,
    target: 'es2022',
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'shared-components',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },   
    emptyOutDir: !process.env.IS_WATCH,
    rollupOptions: {
      external: ['vue', '@metronik/devextreme', 'utility'],
    },
    cssCodeSplit: true,
  }
})