import { i as index_cjs, u as user_mf_2_management__mf_v__runtimeInit__mf_v__ } from './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';

const {loadShare} = index_cjs;
    const {initPromise} = user_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("vue", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^3.4.0"
    }}}));
    const exportModule = /*mf top-level-await placeholder replacement mf*/res.then(factory => factory());
    var user_mf_2_management__loadShare__vue__loadShare__ = exportModule;

export { user_mf_2_management__loadShare__vue__loadShare__ as u };
//# sourceMappingURL=user_mf_2_management__loadShare__vue__loadShare__-e47a04a9.js.map
