import { DataSource, Module } from "utility"

export const module = new Module({
    moduleActionsDS: new DataSource({
        name: 'rolesModuleActions',
    }),
    moduleActionFormsDS: new DataSource({
        name: 'rolesModuleActionForms',
    }),
})

