import { QueryDataSource } from "../dataSource/dataSource.config";

export class Module{
    public moduleActionsDS: QueryDataSource<ModuleActionsListQuery, ActionsQueryDTOCoreListResponse>;
    public moduleActionFormsDS: QueryDataSource<GetModuleActionFormQuery, ActionFormQueryDTOCoreResponse>;
    public moduleDynamicFiltersDS: QueryDataSource<{}, {}> | undefined;
    public moduleESignDS: QueryDataSource<{}, {}>  | undefined;

    constructor(options: {
        moduleActionsDS: QueryDataSource<ModuleActionsListQuery, ActionsQueryDTOCoreListResponse>;
        moduleActionFormsDS: QueryDataSource<GetModuleActionFormQuery, ActionFormQueryDTOCoreResponse>;
    }) {
        this.moduleActionsDS = options.moduleActionsDS;
        this.moduleActionFormsDS = options.moduleActionFormsDS;
    }
}

export interface ActionFormQueryDTOCoreResponse {
  data?: ActionFormQueryDTO;
  messages?: Message[] | null;
}

export interface ActionFormQueryDTO {
  id?: string | null;
  isWizard?: boolean;
  formType?: FormType;
  title?: string | null;
  /** @format int32 */
  width?: number | null;
  controls?: ActionFormControl[] | null;
  events?: ActionFormEvent[] | null;
  validations?: ActionFormValidation[] | null;
  defaultValues?: any;
  dynamicValues?: Record<string, string>;
  cancelEndpoint?: string | null;
  cancelConfirmationMessage?: string | null;
  readOnly?: boolean | null;
  compactDesign?: boolean | null;
  popupNoPadding?: boolean | null;
  submitAction?: ActionsQueryDTO;
  visibilities?: ActionFormVisibility[] | null;
}


// ===== Module DTOs =====
export enum VisualizationType {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
    Value5 = 5,
    Value6 = 6,
    Value7 = 7,
    Value8 = 8,
    Value9 = 9,
    Value10 = 10,
    Value11 = 11,
    Value12 = 12,
    Value13 = 13,
    Value14 = 14,
    Value15 = 15,
    Value16 = 16,
    Value17 = 17,
    Value18 = 18,
    Value19 = 19,
    Value20 = 20,
    Value21 = 21,
    Value22 = 22,
    Value23 = 23,
    Value24 = 24,
    Value25 = 25,
    Value26 = 26,
    Value27 = 27,
    Value28 = 28,
    Value29 = 29,
    Value30 = 30,
    Value31 = 31,
    Value32 = 32,
    Value33 = 33,
    Value34 = 34,
  }
  
  /** @format int32 */
  
  export enum MessageType {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
    Value5 = 5,
    Value6 = 6,
    Value7 = 7,
    Value8 = 8,
    Value9 = 9,
    Value10 = 10,
  }
  
  /** @format int32 */
  
  export enum FormType {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
  }
  
  /** @format int32 */
  
  export enum ActionFormValidationType {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
  }
  
  /** @format int32 */
  
  export enum ActionFormEventType {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
  }
  
  export interface ActionFormControl {
    dataField?: string | null;
    dataFieldArray?: string[] | null;
    visualizationType?: VisualizationType;
    valueDataType?: string | null;
    valueType?: string | null;
    label?: string | null;
    required?: boolean | null;
    properties?: any;
    /** @format int32 */
    width?: number | null;
    description?: string | null;
    visible?: boolean | null;
    sendValueAsString?: boolean;
    labelIconUrl?: string | null;
    labelIconColor?: string | null;
    cssClass?: string | null;
    /** @format int32 */
    colSpan?: number;
  }
  
  export interface ActionFormEvent {
    name?: string | null;
    dataField?: string | null;
    type?: ActionFormEventType;
    properties?: any;
  }
  
  export interface ActionFormValidation {
    type?: ActionFormValidationType;
    dataFieldPath1?: string | null;
    dataFieldPath2?: string | null;
    message?: string | null;
  }
  
  export interface ActionsQueryDTO {
    /** @format int32 */
    recordTypeId?: number;
    recordTypeName?: string | null;
    recordTypeDescription?: string | null;
    /** @format int32 */
    actionId?: number;
    actionName?: string | null;
    actionCode?: string | null;
    actionDescription?: string | null;
    baseActionCode?: string | null;
    recordTypeCode?: string | null;
    currentStateCode?: string | null;
    baseActionName?: string | null;
    actionType?: string | null;
    actionPurpose?: string | null;
    actionEntity?: string | null;
    actionProcedure?: string | null;
    actionProcedureMultiple?: string | null;
    extraParamsFormUrl?: string | null;
    needsESign?: boolean;
    commentRequired?: boolean;
    confirmationMsg?: string | null;
    verb?: string | null;
    imageUrl?: string | null;
    imageColor?: string | null;
    menuGroup?: string | null;
    menuImageUrl?: string | null;
    menuImageColor?: string | null;
    menuDescription?: string | null;
    dataFormat?: string | null;
    appModuleCode?: string | null;
    /** @format int32 */
    refreshRecords?: number;
    /** @format int32 */
    primaryDisplayOrder?: number;
    /** @format int32 */
    secondaryDisplayOrder?: number | null;
  }
  
  export interface ActionFormVisibilityValue {
    expressionUsedComponents?: string | null;
    valueForVisible?: string | null;
  }
  
  export interface ActionFormVisibility {
    dataField?: string | null;
    values?: ActionFormVisibilityValue[] | null;
  }
  
  export interface ActionFormQueryDTO {
    id?: string | null;
    isWizard?: boolean;
    formType?: FormType;
    title?: string | null;
    /** @format int32 */
    width?: number | null;
    controls?: ActionFormControl[] | null;
    events?: ActionFormEvent[] | null;
    validations?: ActionFormValidation[] | null;
    defaultValues?: any;
    dynamicValues?: Record<string, string>;
    cancelEndpoint?: string | null;
    cancelConfirmationMessage?: string | null;
    readOnly?: boolean | null;
    compactDesign?: boolean | null;
    popupNoPadding?: boolean | null;
    submitAction?: ActionsQueryDTO;
    visibilities?: ActionFormVisibility[] | null;
  }
  
  export interface Message {
    type?: MessageType;
    code?: string | null;
    text?: string | null;
    details?: string | null;
    parameters?: Record<string, string>;
    subMessages?: Message[] | null;
  }
  
  export interface ActionFormQueryDTOCoreResponse {
    data?: ActionFormQueryDTO;
    messages?: Message[] | null;
  }
  
  export interface ActionsQueryDTOCoreListResponse {
    data?: ActionsQueryDTO[] | null;
    messages?: Message[] | null;
  }
  
  export interface ESign {
    username?: string | null;
    comment?: string | null;
    /** @format int64 */
    applicationESignId?: number | null;
  }
  
  export interface RecordParams {
    /** @format int32 */
    recordId: number;
    currentStateCode?: string | null;
  }
  
  export interface ModuleActionFormQuery {
    actionCode?: string | null;
    recordTypeCode?: string | null;
    recordParams?: RecordParams[] | null;
    extraParamsPageValues?: any;
    extraParamsFormValues?: any;
    /** @minLength 1 */
    formCode: string;
  }
  
  export interface GetModuleActionFormQuery {
    data?: ModuleActionFormQuery;
  }
  
  export interface RecordIDResponseData {
    /** @format int64 */
    recordId?: number;
  }
  
  export interface RecordIDResponse {
    data?: RecordIDResponseData;
    messages?: Message[] | null;
  }
  
  export interface ModuleActionsListQuery {
    RecordTypeCode?: string;
    RecordId?: number;
    CurrentStateCode?: string;
    AllActions?: boolean;
  }
  