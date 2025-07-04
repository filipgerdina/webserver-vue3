import { i as index_cjs, r as role_mf_2_management__mf_v__runtimeInit__mf_v__ } from './role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = role_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("vue", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: undefined,
      requiredVersion: "^3.4.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var role_mf_2_management__loadShare__vue__loadShare__ = exportModule;

export { role_mf_2_management__loadShare__vue__loadShare__ as r };
//# sourceMappingURL=role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js.map
