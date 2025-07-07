import { _ as __vitePreload } from './preload-helper-1a9bd443.js';

const remoteEntryPromise = __vitePreload(() => import('../remoteEntry.js'),true?["remoteEntry.js","assets/user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js","assets/preload-helper-1a9bd443.js","assets/virtualExposes-68ec9723.js"]:void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
//# sourceMappingURL=hostInit-d53fafaa.js.map
