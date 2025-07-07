import { i as index_cjs, u as user_mf_2_management__mf_v__runtimeInit__mf_v__ } from './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = user_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@metronik/devextreme", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^0.0.1"
    }}}));
    const exportModule = await res.then(factory => factory());
    var user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__ = exportModule;

export { user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__ as u };
//# sourceMappingURL=user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__-a51aee12.js.map
