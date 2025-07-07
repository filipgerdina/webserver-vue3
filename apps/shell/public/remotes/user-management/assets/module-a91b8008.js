import { i as index_cjs, u as user_mf_2_management__mf_v__runtimeInit__mf_v__ } from './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-319ee11e.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = user_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("shared-components", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^0.0.1"
    }}}));
    const exportModule = await res.then(factory => factory());
    var user_mf_2_management__loadShare__shared_mf_2_components__loadShare__ = exportModule;

const module = new user_mf_2_management__loadShare__utility__loadShare__.Module({
  moduleActionsDS: new user_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "userModuleActions",
    method: "GET",
    translatableResponseFields: ["data.actionName"]
  }),
  moduleActionFormsDS: new user_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "userModuleActionForms",
    method: "GET",
    translatableResponseFields: ["data.controls.properties.values.displayValue", "data.controls.properties.values.name", "data.title", "data.controls.description"]
  })
});

export { module as m, user_mf_2_management__loadShare__shared_mf_2_components__loadShare__ as u };
//# sourceMappingURL=module-a91b8008.js.map
