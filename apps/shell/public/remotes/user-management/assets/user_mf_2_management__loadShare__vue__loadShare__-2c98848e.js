import { i as index_cjs, u as user_mf_2_management__mf_v__runtimeInit__mf_v__ } from './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = user_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("vue", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^3.4.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var user_mf_2_management__loadShare__vue__loadShare__ = exportModule;

export { user_mf_2_management__loadShare__vue__loadShare__ as u };
//# sourceMappingURL=user_mf_2_management__loadShare__vue__loadShare__-2c98848e.js.map
