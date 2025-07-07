import { i as index_cjs, u as user_mf_2_management__mf_v__runtimeInit__mf_v__ } from './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';

const {loadShare} = index_cjs;
    const {initPromise} = user_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("utility", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^0.0.1"
    }}}));
    const exportModule = /*mf top-level-await placeholder replacement mf*/res.then(factory => factory());
    var user_mf_2_management__loadShare__utility__loadShare__ = exportModule;

export { user_mf_2_management__loadShare__utility__loadShare__ as u };
//# sourceMappingURL=user_mf_2_management__loadShare__utility__loadShare__-ba6f8ca5.js.map
