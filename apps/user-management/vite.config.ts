import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

function filterSharedSourcemaps(sharedLibs: string[]) {
  return {
    name: 'filter-shared-sourcemaps',
    generateBundle(_, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {

        // 🗺️ Skip sourcemaps for shared libraries
        if (fileName.endsWith('.map')) {
          const shouldDelete = sharedLibs.some(lib => fileName.includes(lib));
          if (shouldDelete) {
            delete bundle[fileName];
            console.log(`⏩ Skipped sourcemap for shared: ${fileName}`);
          }
        }

        // 🧼 Skip CSS files starting with 'index'
        if (fileName.endsWith('.css') && fileName.startsWith('index')) {
          delete bundle[fileName];
          console.log(`⏩ Skipped index CSS: ${fileName}`);
        }
      }
    }
  };
}

const isWatchMode = process.env.VITE_WATCH_MODE === 'true';

export default defineConfig({
  root: 'apps/user-management',
  base: isWatchMode ? 'http://localhost:4175/remotes/user-management/' : '/remotes/user-management/',
  server: {
    port: 5175,
    strictPort: true
  },
  preview: {
    port: 4175,
    strictPort: true,
  },
  optimizeDeps: {
    include: []
  },
  plugins: [
    vue(),
    federation({
      name: 'user-management',
      filename: 'remoteEntry.js',
      exposes: {
        './UsersManagement': './apps/user-management/src/pages/UsersManagement/UsersManagement.vue',
        './UserMenu': './apps/user-management/src/components/UserMenu.vue',
        './Profile': './apps/user-management/src/pages/Profile/MySettings.vue',
      },
      shared: {
        vue: {
          generate: false,
        },
        'vue-router': {
          generate: false,
        },
        pinia: {
          generate: false
        },
        utility: {
          generate: false,
        },
        'shared-components': {
          generate: false,
        },
        '@metronik/devextreme': {
          generate: false,
        },
      },
    }),
    filterSharedSourcemaps(['vue', 'vue-router', 'pinia', 'utility', 'shared-components', '@metronik/devextreme']),
  ],
  build: {
    emptyOutDir: true,
    target: 'esnext',
    minify: true,
    sourcemap: true,
    outDir: 'dist',
    cssCodeSplit: true,
    assetsDir: '',
    rollupOptions: {
      external: ['virtual:__federation__'],
    },
  },
})
