import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

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
    exclude: ['vue', 'vue-router', 'utility']
  },
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
          import: false,
          generate: false,
        },
        'shared-components': {
          generate: false,
        },
        '@metronik/devextreme': {
          generate: false,
        },
      },
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
      external: ['vue', 'virtual:__federation__'],
    },
  },
})
