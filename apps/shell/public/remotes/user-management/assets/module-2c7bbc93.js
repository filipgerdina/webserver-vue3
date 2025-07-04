import { importShared } from './__federation_fn_import-054b33c3.js';

const {DataSource,Module} = await importShared('utility');

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
//# sourceMappingURL=module-2c7bbc93.js.map
