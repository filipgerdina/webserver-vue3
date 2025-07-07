import { _ as __vitePreload } from './preload-helper-1a9bd443.js';

const exposesMap = {
    
        "./UsersManagement": async () => {
          const importModule = await __vitePreload(() => import('./UsersManagement-794794f1.js').then(n => n.b),true?["assets/UsersManagement-794794f1.js","assets/preload-helper-1a9bd443.js","assets/module-d9a2103b.js"]:void 0);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      ,
        "./UserMenu": async () => {
          const importModule = await __vitePreload(() => import('./UserMenu-97b761cc.js'),true?["assets/UserMenu-97b761cc.js","assets/_plugin-vue_export-helper-c4c0bc37.js","assets/UserMenu-7d042a31.css"]:void 0);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      ,
        "./Profile": async () => {
          const importModule = await __vitePreload(() => import('./MySettings-5f133e7f.js'),true?["assets/MySettings-5f133e7f.js","assets/module-d9a2103b.js","assets/_plugin-vue_export-helper-c4c0bc37.js","assets/MySettings-ca87102c.css"]:void 0);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      
  };

export { exposesMap as default };
//# sourceMappingURL=virtualExposes-87707ce5.js.map
