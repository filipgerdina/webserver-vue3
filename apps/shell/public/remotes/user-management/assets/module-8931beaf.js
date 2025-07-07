import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-319ee11e.js';

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

export { module as m };
//# sourceMappingURL=module-8931beaf.js.map
