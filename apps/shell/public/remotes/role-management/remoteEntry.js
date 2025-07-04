import { i as index_cjs, r as role_mf_2_management__mf_v__runtimeInit__mf_v__ } from './assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js';
import exposesMap from './assets/virtualExposes-9582c2db.js';
import { _ as __vitePreload } from './assets/preload-helper-376741aa.js';

const importMap = {
      
        "vue": async () => {
          let pkg = await __vitePreload(() => import('./assets/vue.runtime.esm-bundler-1bd18d7f.js'),true?[]:void 0);
          return pkg
        }
      ,
        "pinia": async () => {
          let pkg = await __vitePreload(() => import('./assets/pinia-edd2dba5.js'),true?["assets/pinia-edd2dba5.js","assets/role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js","assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js","assets/preload-helper-376741aa.js"]:void 0);
          return pkg
        }
      ,
        "shared-components": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-58bc32a0.js'),true?["assets/index.es-58bc32a0.js","assets/role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js","assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js","assets/preload-helper-376741aa.js","assets/role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__-59bba195.js","assets/role_mf_2_management__loadShare__utility__loadShare__-ef83b0bf.js"]:void 0);
          return pkg
        }
      ,
        "@metronik/devextreme": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-c78a5977.js'),true?[]:void 0);
          return pkg
        }
      ,
        "utility": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-3163aafe.js'),true?["assets/index.es-3163aafe.js","assets/role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js","assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js","assets/preload-helper-376741aa.js","assets/role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__-59bba195.js"]:void 0);
          return pkg
        }
      ,
        "vue-router": async () => {
          let pkg = await __vitePreload(() => import('./assets/vue-router-effb0331.js'),true?["assets/vue-router-effb0331.js","assets/role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js","assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js","assets/preload-helper-376741aa.js"]:void 0);
          return pkg
        }
      
    };
      const usedShared = {
      
          "vue": {
            name: "vue",
            version: "3.4.0",
            scope: ["default"],
            loaded: false,
            from: "role-management",
            async get () {
              usedShared["vue"].loaded = true;
              const {"vue": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.4.0"
            }
          }
        ,
          "pinia": {
            name: "pinia",
            version: "3.0.2",
            scope: ["default"],
            loaded: false,
            from: "role-management",
            async get () {
              usedShared["pinia"].loaded = true;
              const {"pinia": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.0.2"
            }
          }
        ,
          "shared-components": {
            name: "shared-components",
            version: "0.0.1",
            scope: ["default"],
            loaded: false,
            from: "role-management",
            async get () {
              usedShared["shared-components"].loaded = true;
              const {"shared-components": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^0.0.1"
            }
          }
        ,
          "@metronik/devextreme": {
            name: "@metronik/devextreme",
            version: "0.0.1",
            scope: ["default"],
            loaded: false,
            from: "role-management",
            async get () {
              usedShared["@metronik/devextreme"].loaded = true;
              const {"@metronik/devextreme": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^0.0.1"
            }
          }
        ,
          "utility": {
            name: "utility",
            version: "0.0.1",
            scope: ["default"],
            loaded: false,
            from: "role-management",
            async get () {
              usedShared["utility"].loaded = true;
              const {"utility": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^0.0.1"
            }
          }
        ,
          "vue-router": {
            name: "vue-router",
            version: "4.5.1",
            scope: ["default"],
            loaded: false,
            from: "role-management",
            async get () {
              usedShared["vue-router"].loaded = true;
              const {"vue-router": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^4.5.1"
            }
          }
        
    };
      const usedRemotes = [
      ];

const initTokens = {};
  const shareScopeName = "default";
  const mfName = "role-management";
  async function init(shared = {}, initScope = []) {
    const initRes = index_cjs.init({
      name: mfName,
      remotes: usedRemotes,
      shared: usedShared,
      plugins: [],
      shareStrategy: 'version-first'
    });
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken)
      initToken = initTokens[shareScopeName] = { from: mfName };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    initRes.initShareScopeMap('default', shared);
    try {
      await Promise.all(await initRes.initializeSharing('default', {
        strategy: 'version-first',
        from: "build",
        initScope
      }));
    } catch (e) {
      console.error(e);
    }
    role_mf_2_management__mf_v__runtimeInit__mf_v__.initResolve(initRes);
    return initRes
  }

  function getExposes(moduleName) {
    if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
//# sourceMappingURL=remoteEntry.js.map
