import { QueryDataSource } from "../dataSource/dataSource.config";
import { ActionFormQueryDTOCoreResponse, ActionFormQueryDTOCoreResponseFields, ActionsQueryDTOCoreListResponse, ActionsQueryDTOCoreListResponseFields, UtlActionFormQuery, UtlActionsListQuery } from "../utl";

export class Module{
    public moduleActionsDS: QueryDataSource<UtlActionsListQuery, ActionsQueryDTOCoreListResponse>;
    public moduleActionFormsDS: QueryDataSource<UtlActionFormQuery, ActionFormQueryDTOCoreResponse>;
    public moduleDynamicFiltersDS: QueryDataSource<{}, {}> | undefined;
    public moduleESignDS: QueryDataSource<{}, {}>  | undefined;

    constructor(options: {
        moduleActionsDS: QueryDataSource<UtlActionsListQuery, ActionsQueryDTOCoreListResponse>;
        moduleActionFormsDS: QueryDataSource<UtlActionFormQuery, ActionFormQueryDTOCoreResponse>;
    }) {
        this.moduleActionsDS = options.moduleActionsDS;
        this.moduleActionFormsDS = options.moduleActionFormsDS;
        
        this.moduleActionsDS.translatableResponseFields = [ActionsQueryDTOCoreListResponseFields.actionName];
        this.moduleActionFormsDS.translatableResponseFields = [
            ActionFormQueryDTOCoreResponseFields.title,
            ActionFormQueryDTOCoreResponseFields.controls.description,
            "data.controls.properties.values.displayValue",
            "data.controls.properties.values.name",
        ]
    }
}