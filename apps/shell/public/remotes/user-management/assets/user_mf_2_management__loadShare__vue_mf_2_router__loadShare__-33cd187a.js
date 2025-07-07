import { i as index_cjs, u as user_mf_2_management__mf_v__runtimeInit__mf_v__ } from './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = user_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("vue-router", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^4.5.1"
    }}}));
    const exportModule = await res.then(factory => factory());
    var user_mf_2_management__loadShare__vue_mf_2_router__loadShare__ = exportModule;

export { user_mf_2_management__loadShare__vue_mf_2_router__loadShare__ as u };
//# sourceMappingURL=user_mf_2_management__loadShare__vue_mf_2_router__loadShare__-33cd187a.js.map
