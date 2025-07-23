import { DataSource, Module } from "utility"

export const module = new Module({
    moduleActionsDS: new DataSource({
        name: 'userModuleActions'
    }),
    moduleActionFormsDS: new DataSource({
        name: 'userModuleActionForms'
    }),
})

