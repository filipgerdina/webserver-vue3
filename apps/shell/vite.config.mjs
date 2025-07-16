import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import sourcemaps from 'rollup-plugin-sourcemaps'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  //root: 'apps/shell',
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  plugins: [
    {
      name: 'watch-public',
      configureServer(server) {
        const dirToWatch = './public/remotes'

        fs.readdirSync(dirToWatch).forEach((file) => {
          server.watcher.add(`${dirToWatch}/${file}`)
        })

        server.watcher.on('change', (path) => {
          if (path.startsWith(dirToWatch)) {
            console.log(`File changed in public: ${path}`)
            server.ws.send({ type: 'full-reload' })
          }
        })
      },
    },
    vue(),
    federation({
      name: 'shell',
      remotes: {
        dummy: '/this/is/never/accessed',
      },
      shared: {
        vue: {},
        'vue-router': {},
        pinia: {},
        utility: {},
        'shared-components': { import: true },
        '@metronik/devextreme': { import: true },
      },
    }),
  ],

  css: {
    postcss: {
      plugins: [
        require('./postcss-remove-google-fonts')(),
      ],
    },
  },

  build: {
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    target: 'esnext',
    outDir: 'dist',
    cssCodeSplit: false,
    rollupOptions: {
      plugins: [
        sourcemaps(),
      ],
    },
  },
})
