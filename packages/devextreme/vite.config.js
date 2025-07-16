import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  root: "packages/devextreme",
  plugins: [
    vue(),
      dts({
      }),
  ].filter(Boolean),
  build: {
    sourcemap: false,
    minify: true,
    target: 'es2022',
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'devextreme',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },   
    emptyOutDir: !process.env.IS_WATCH,
    cssCodeSplit: true,
    outDir: "dist",
    rollupOptions: {
      external: ['vue'],
    }
  }
})
