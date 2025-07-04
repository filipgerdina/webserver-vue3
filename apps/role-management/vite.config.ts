import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

console.log(__dirname)
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
optimizeDeps: {
  exclude: ['vue', 'vue-router', '@metronik/devextreme', 'utility', "virtual:__federation__"]
},
  cacheDir: "./.cache",
  plugins: [
    vue(),
    federation({
      // remotes: {
      //   dummy: '/this/is/never/accessed',
      // },
      
      name: 'role-management',
      filename: 'remoteEntry.js',
      exposes: {
        './RolesManagement': './apps/role-management/src/pages/RolesManagement/RolesManagement.vue',
        './rolesSelectionFromDataSource': './apps/role-management/src/components/rolesSelectionFromDataSource.ts',
      },
      shared: ["vue", "vue-router", "pinia", "utility", "shared-components", "@metronik/devextreme"],
    })
  ],
  build: {
    emptyOutDir: true,
    target: 'esnext',
    minify: false,
    sourcemap: true,
    outDir: '../../apps/shell/public/remotes/role-management',
    cssCodeSplit: true,
    rollupOptions: {
      external: [ 'virtual:__federation__'],
    }
  },
})
