import { DataSource, Module } from "utility"

export const module = new Module({
    moduleActionsDS: new DataSource({
        name: 'utlModuleActions',
        method: 'GET',
        translatableResponseFields: ["data.actionName"]
    }),
    moduleActionFormsDS: new DataSource({
        name: 'utlModuleActionForms',
        method: 'GET',
        translatableResponseFields: ["data.controls.properties.values.displayValue", "data.controls.properties.values.name", "data.title", "data.controls.description"]
    }),
})

