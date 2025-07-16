import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

function filterSharedSourcemaps(sharedLibs: string[]) {
  return {
    name: 'filter-shared-sourcemaps',
    generateBundle(_, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.map')) {
          const shouldDelete = sharedLibs.some(lib => fileName.includes(lib));
          if (shouldDelete) {
            delete bundle[fileName]; // Prevent writing the .map file
            console.log(`⏩ Skipped sourcemap for shared: ${fileName}`);
          }
        }
      }
    }
  };
}

export default defineConfig({
  root: 'apps/role-management',
  base: 'http://localhost:4174/',
  preview: {
    port: 4174,
    strictPort: true,
  },
  optimizeDeps: {
    include: []
  },
  plugins: [
    vue(),
    federation({
      name: 'role-management',
      filename: 'remoteEntry.js',
      exposes: {
        './RolesManagement': './apps/role-management/src/pages/RolesManagement/RolesManagement.vue',
        './rolesSelectionFromDataSource': './apps/role-management/src/components/rolesSelectionFromDataSource.ts',
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
    rollupOptions: {
      external: ['virtual:__federation__'],
    },
  },
})
