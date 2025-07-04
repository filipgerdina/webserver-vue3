import { _ as __vitePreload } from './preload-helper-376741aa.js';

const remoteEntryPromise = __vitePreload(() => import('../remoteEntry.js'),true?["remoteEntry.js","assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js","assets/preload-helper-376741aa.js","assets/virtualExposes-9582c2db.js"]:void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
//# sourceMappingURL=hostInit-263e2f31.js.map
