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
      remotes: {
        dummy: '/this/is/never/accessed',
      },
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
    emptyOutDir: false,
    target: 'esnext',
    minify: false,
    sourcemap: true,
    //outDir: 'dist'
    outDir: '../../apps/shell/public/remotes/user-management',
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'utility'],
    },
  },
})
