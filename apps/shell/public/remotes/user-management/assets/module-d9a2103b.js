import { Module, DataSource } from 'utility';

const module = new Module({
  moduleActionsDS: new DataSource({
    name: "userModuleActions",
    method: "GET",
    translatableResponseFields: ["data.actionName"]
  }),
  moduleActionFormsDS: new DataSource({
    name: "userModuleActionForms",
    method: "GET",
    translatableResponseFields: ["data.controls.properties.values.displayValue", "data.controls.properties.values.name", "data.title", "data.controls.description"]
  })
});

export { module as m };
//# sourceMappingURL=module-d9a2103b.js.map
