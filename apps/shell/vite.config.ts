import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import fs from 'fs';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  console.log(`Running in ${isDev ? 'development' : 'production'} mode`);

  return {
  root: isDev ? undefined : 'apps/shell',
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  optimizeDeps: {
    include: ['vue', 'vue-router']
  },
  plugins: [
    {
      name: 'watch-public',
      configureServer(server) {
        // Watch a subdirectory of /public
        const dirToWatch = './public/remotes';

        fs.readdirSync(dirToWatch).forEach((file) => {
          server.watcher.add(`${dirToWatch}/${file}`);
        });

        server.watcher.on('change', (path) => {
          if (path.startsWith(dirToWatch)) {
            console.log(`File changed in public: ${path}`);
            server.ws.send({ type: 'full-reload' });
          }
        });
      }
    },
    vue(),
    federation({
      name: 'shell',
      remotes: {
        //this must be here, otherwise it does not share libraries properly
        dummy: '/this/is/never/accessed',
      },

      shared: {
        vue: {},
        'vue-router': {},
        pinia: {},
        utility: { import: true },
        'shared-components': { import: true},
        '@metronik/devextreme': { import: true},
      }
    }),
  ],
  css: {
    postcss: {
      plugins: [
        require('./postcss-remove-google-fonts')(),
      ],
    }
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
    },
    sourcemap: true,
    minify: false,
    target: 'esnext',
    outDir: '../../dist/apps/shell',
    cssCodeSplit: true
  },
}})
