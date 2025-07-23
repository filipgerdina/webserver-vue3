import { DataSource, Module } from "utility"

export const module = new Module({
    moduleActionsDS: new DataSource({
        name: 'utlModuleActions',
    }),
    moduleActionFormsDS: new DataSource({
        name: 'utlModuleActionForms',
    }),
})

