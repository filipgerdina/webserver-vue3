import { i as index_cjs, r as role_mf_2_management__mf_v__runtimeInit__mf_v__ } from './role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = role_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@metronik/devextreme", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: undefined,
      requiredVersion: "^0.0.1"
    }}}));
    const exportModule = await res.then(factory => factory());
    var role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__ = exportModule;

export { role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__ as r };
//# sourceMappingURL=role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__-59bba195.js.map
