import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'
import pkg from './package.json' assert { type: 'json' }

const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
  'virtual:__federation__'
]

console.log(externals)

export default defineConfig({
  root: "packages/utility",
  plugins: [
    vue(),
    !process.env.IS_WATCH && dts({ include: ['src'] }),
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
      external: externals,
    },
    cssCodeSplit: true,
    outDir: 'dist',
  },
})
