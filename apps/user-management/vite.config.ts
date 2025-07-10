import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig(({ mode }) => {

  console.log(`Running in ${mode} mode`);
  let isDev = mode === 'development';
  return {
  root: isDev ? undefined : 'apps/user-management',
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
    exclude: ["@metronik/devextreme"]
  },
  plugins: [
    vue(),
    federation({
      remotes: {
        dummy: "ke tk neki"
      },
      name: 'user-management',
      filename: 'remoteEntry.js',
      exposes: {
        './UsersManagement': (isDev ? "." : "./apps/user-management") + '/src/pages/UsersManagement/UsersManagement.vue',
        './UserMenu': (isDev ? "." : "./apps/user-management") + '/src/components/UserMenu.vue',
        './Profile': (isDev ? "." : "./apps/user-management") + '/src/pages/Profile/MySettings.vue',
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
    outDir: '../../apps/shell/public/remotes/user-management',
    cssCodeSplit: true,
  },
}
})
