import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';

// import fs from 'fs';
// import path from 'path';
// function filterSharedSourcemaps(sharedLibs: string[]) {
//   return {
//     name: 'filter-shared-sourcemaps',
//     generateBundle(_, bundle) {
//       for (const [fileName, chunk] of Object.entries(bundle)) {
//         if (fileName.endsWith('.map')) {
//           const shouldDelete = sharedLibs.some(lib => fileName.includes(lib));
//           if (shouldDelete) {
//             delete bundle[fileName]; // Prevent writing the .map file
//             console.log(`⏩ Skipped sourcemap for shared: ${fileName}`);
//           }
//         }
//       }
//     }
//   };
// }

export default defineConfig({
  root: 'apps/role-management',
  base: '/remotes/role-management/',
  server: {
    port: 5174,
    strictPort: true
  },
  preview: {
    port: 4174,
    strictPort: true,
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
          singleton: true,
        },
        'vue-router': {
          singleton: true,
        },
        pinia: {
          singleton: true,
          
        },
        "utility": {
          singleton: true,
        },
        "shared-components": {
          singleton: true,
          strictVersion: false,
        },
        "@metronik/devextreme": {
        }
      },
    })
  ],
  build: {
    emptyOutDir: true,
    target: 'esnext',
    minify: false,
    sourcemap: true, 
    //outDir: 'dist'
    outDir: '../../apps/shell/public/remotes/role-management',
    cssCodeSplit: true,
  },
})
