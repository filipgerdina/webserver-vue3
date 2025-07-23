import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'
import pkg from './package.json' assert { type: 'json' }

const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
  'virtual:__federation__'
]

export default defineConfig({
  root: "packages/utility",
  plugins: [
    vue(),
    !process.env.VITE_WATCH_MODE && dts({ include: ['src'] }),
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
    emptyOutDir: !process.env.VITE_WATCH_MODE,
    rollupOptions: {
      external: externals,
    },
    cssCodeSplit: true,
    outDir: 'dist',
  },
})
