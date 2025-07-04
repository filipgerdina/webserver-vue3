
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "vue": async () => {
          let pkg = await import("__mf__virtual/role_mf_2_management__prebuild__vue__prebuild__.js")
          return pkg
        }
      ,
        "pinia": async () => {
          let pkg = await import("__mf__virtual/role_mf_2_management__prebuild__pinia__prebuild__.js")
          return pkg
        }
      ,
        "shared-components": async () => {
          let pkg = await import("__mf__virtual/role_mf_2_management__prebuild__shared_mf_2_components__prebuild__.js")
          return pkg
        }
      ,
        "@metronik/devextreme": async () => {
          let pkg = await import("__mf__virtual/role_mf_2_management__prebuild___mf_0_metronik_mf_1_devextreme__prebuild__.js")
          return pkg
        }
      ,
        "utility": async () => {
          let pkg = await import("__mf__virtual/role_mf_2_management__prebuild__utility__prebuild__.js")
          return pkg
        }
      ,
        "vue-router": async () => {
          let pkg = await import("__mf__virtual/role_mf_2_management__prebuild__vue_mf_2_router__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "vue": {
            name: "vue",
            version: "3.4.0",
            scope: ["default"],
            loaded: false,
            from: "role-management",
            async get () {
              usedShared["vue"].loaded = true
              const {"vue": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
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
              usedShared["pinia"].loaded = true
              const {"pinia": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
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
              usedShared["shared-components"].loaded = true
              const {"shared-components": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
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
              usedShared["@metronik/devextreme"].loaded = true
              const {"@metronik/devextreme": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
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
              usedShared["utility"].loaded = true
              const {"utility": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
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
              usedShared["vue-router"].loaded = true
              const {"vue-router": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^4.5.1"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      