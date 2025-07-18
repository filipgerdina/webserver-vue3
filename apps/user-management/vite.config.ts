import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  root: 'apps/user-management',
  base: '/remotes/user-management/',
  server: {
    port: 5175,
    strictPort: true
  },
  preview: {
    port: 4175,
    strictPort: true,
  },
  optimizeDeps: {
    exclude: ['vue', 'vue-router', 'utility']
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
          generate: false
        },
      },
    })
  ],
  build: {
    emptyOutDir: true,
    target: 'esnext',
    minify: true,
    sourcemap: true,
    //outDir: 'dist'
    outDir: '../../apps/shell/public/remotes/user-management',
    cssCodeSplit: true,
    rollupOptions: {
      external: ['virtual:__federation__'],
    },
  },
})
