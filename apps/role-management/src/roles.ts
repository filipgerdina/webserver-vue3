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

export interface AddNavigationGroupPermissionCommandParametersDataFields {
  /** @format int32 */
  roleId?: number | null;
  /** @format int32 */
  navigationGroupId?: number | null;
}

export interface AddNavigationGroupPermissionCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: AddNavigationGroupPermissionCommandParametersDataFields;
}

export interface ESign {
  username?: string | null;
  comment?: string | null;
  /** @format int64 */
  applicationESignId?: number | null;
}

export interface AddNavigationGroupPermissionCommand {
  data?: AddNavigationGroupPermissionCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface AddPagePermissionCommandParametersDataFields {
  /** @format int32 */
  roleId?: number | null;
  /** @format int32 */
  pageId?: number | null;
}

export interface AddPagePermissionCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: AddPagePermissionCommandParametersDataFields;
}

export interface AddPagePermissionCommand {
  data?: AddPagePermissionCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface EditRoleCommandParametersDataFields {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  defaultPageId?: number;
}

export interface EditRoleCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: EditRoleCommandParametersDataFields;
}

export interface EditRoleCommand {
  data?: EditRoleCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface GetNavigationGroupPermissionsOfRoleQueryDTO {
  /** @format date-time */
  utcRecordTimestamp?: string | null;
  /** @format int32 */
  userId?: number | null;
  userInfo?: string | null;
  /** @format date-time */
  utcRecordTimestampUpd?: string | null;
  /** @format int32 */
  userIdUpd?: number | null;
  userInfoUpd?: string | null;
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponse {
  data?: GetNavigationGroupPermissionsOfRoleQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetPagePermissionsOfRoleQueryDTO {
  /** @format date-time */
  utcRecordTimestamp?: string | null;
  /** @format int32 */
  userId?: number | null;
  userInfo?: string | null;
  /** @format date-time */
  utcRecordTimestampUpd?: string | null;
  /** @format int32 */
  userIdUpd?: number | null;
  userInfoUpd?: string | null;
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface GetPagePermissionsOfRoleQueryDTOCoreListResponse {
  data?: GetPagePermissionsOfRoleQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetPagesOfRoleQueryDTO {
  /** @format date-time */
  utcRecordTimestamp?: string | null;
  /** @format int32 */
  userId?: number | null;
  userInfo?: string | null;
  /** @format date-time */
  utcRecordTimestampUpd?: string | null;
  /** @format int32 */
  userIdUpd?: number | null;
  userInfoUpd?: string | null;
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface GetPagesOfRoleQueryDTOCoreListResponse {
  data?: GetPagesOfRoleQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface RecordParams {
  /** @format int32 */
  recordId: number;
  currentStateCode?: string | null;
}

export interface RolesActionFormQuery {
  actionCode?: string | null;
  recordTypeCode?: string | null;
  recordParams?: RecordParams[] | null;
  /** @format int32 */
  userId?: number | null;
  /** @format int32 */
  roleId?: number | null;
  extraParamsPageValues?: any;
  extraParamsFormValues?: any;
  /** @minLength 1 */
  formCode: string;
}

export interface GetRolesActionFormQuery {
  data?: RolesActionFormQuery;
}

export interface GetRolesQueryDTO {
  /** @format date-time */
  utcRecordTimestamp?: string | null;
  /** @format int32 */
  userId?: number | null;
  userInfo?: string | null;
  /** @format date-time */
  utcRecordTimestampUpd?: string | null;
  /** @format int32 */
  userIdUpd?: number | null;
  userInfoUpd?: string | null;
  /** @format int32 */
  id?: number;
  name?: string | null;
  defaultPage?: string | null;
}

export interface GetRolesQueryDTOCoreListResponse {
  data?: GetRolesQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface NewRoleCommandParametersDataFields {
  name?: string | null;
  /** @format int32 */
  defaultPageId?: number | null;
}

export interface NewRoleCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: NewRoleCommandParametersDataFields;
}

export interface NewRoleCommand {
  data?: NewRoleCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface RecordIDResponseData {
  /** @format int64 */
  recordId?: number;
}

export interface RecordIDResponse {
  data?: RecordIDResponseData;
  messages?: Message[] | null;
}

export type RemoveDataSourcePerrmissionCommandParametersDataFields = object;

export interface RemoveDataSourcePerrmissionCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: RemoveDataSourcePerrmissionCommandParametersDataFields;
}

export interface RemoveNavigationGroupPerrmissionCommand {
  data?: RemoveDataSourcePerrmissionCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export type RemovePagePerrmissionCommandParametersDataFields = object;

export interface RemovePagePerrmissionCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: RemovePagePerrmissionCommandParametersDataFields;
}

export interface RemovePagePerrmissionCommand {
  data?: RemovePagePerrmissionCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}


// ===== Request DTOs =====
// Auto-generated request DTOs for Roles

export interface RolesRolesListQuery {
  getRolesQuery?: object;
}

export interface RolesRolesCreate2PathParams {
  id: number;
}

export interface RolesRolesPagesListQuery {
  RoleId?: number;
}

export interface RolesRolesNavigationGroupsListQuery {
  RoleId?: number;
}

export interface RolesPagePermissionsListQuery {
  RoleId?: number;
}

export interface RolesPagePermissionsDeletePathParams {
  id: number;
}

export interface RolesNavigationGroupPermissionsListQuery {
  RoleId?: number;
}

export interface RolesNavigationGroupPermissionsDeletePathParams {
  id: number;
}

export interface RolesActionsListQuery {
  RecordTypeCode?: string;
  RecordId?: number;
  CurrentStateCode?: string;
  AllActions?: boolean;
}



// ===== Generated Types & Fields =====
// Auto-generated from roles.ts for grouped fields and types

export const ActionFormQueryDTOCoreResponseFields = {
  id: {
    _field: "id",
    _type: "string",
    _caption: "s:id",
  },
  isWizard: {
    _field: "isWizard",
    _type: "boolean",
    _caption: "s:isWizard",
  },
  formType: {
    _field: "formType",
    _type: "string",
    _caption: "s:formType",
  },
  title: {
    _field: "title",
    _type: "string",
    _caption: "s:title",
  },
  width: {
    _field: "width",
    _type: "number",
    _caption: "s:width",
  },
  controls: {
    _field: "controls",
    _type: "array",
    _caption: "s:controls",
    dataField: {
      _field: "dataField",
      _type: "string",
      _caption: "s:dataField",
    },
    dataFieldArray: {
      _field: "dataFieldArray",
      _type: "array",
      _caption: "s:dataFieldArray",
    },
    visualizationType: {
      _field: "visualizationType",
      _type: "string",
      _caption: "s:visualizationType",
    },
    valueDataType: {
      _field: "valueDataType",
      _type: "string",
      _caption: "s:valueDataType",
    },
    valueType: {
      _field: "valueType",
      _type: "string",
      _caption: "s:valueType",
    },
    label: {
      _field: "label",
      _type: "string",
      _caption: "s:label",
    },
    required: {
      _field: "required",
      _type: "boolean",
      _caption: "s:required",
    },
    properties: {
      _field: "properties",
      _type: "any",
      _caption: "s:properties",
    },
    width: {
      _field: "width",
      _type: "number",
      _caption: "s:width",
    },
    description: {
      _field: "description",
      _type: "string",
      _caption: "s:description",
    },
    visible: {
      _field: "visible",
      _type: "boolean",
      _caption: "s:visible",
    },
    sendValueAsString: {
      _field: "sendValueAsString",
      _type: "boolean",
      _caption: "s:sendValueAsString",
    },
    labelIconUrl: {
      _field: "labelIconUrl",
      _type: "string",
      _caption: "s:labelIconUrl",
    },
    labelIconColor: {
      _field: "labelIconColor",
      _type: "string",
      _caption: "s:labelIconColor",
    },
    cssClass: {
      _field: "cssClass",
      _type: "string",
      _caption: "s:cssClass",
    },
    colSpan: {
      _field: "colSpan",
      _type: "number",
      _caption: "s:colSpan",
    },
  },
  events: {
    _field: "events",
    _type: "array",
    _caption: "s:events",
    name: {
      _field: "name",
      _type: "string",
      _caption: "s:name",
    },
    dataField: {
      _field: "dataField",
      _type: "string",
      _caption: "s:dataField",
    },
    type: {
      _field: "type",
      _type: "string",
      _caption: "s:type",
    },
    properties: {
      _field: "properties",
      _type: "any",
      _caption: "s:properties",
    },
  },
  validations: {
    _field: "validations",
    _type: "array",
    _caption: "s:validations",
    type: {
      _field: "type",
      _type: "string",
      _caption: "s:type",
    },
    dataFieldPath1: {
      _field: "dataFieldPath1",
      _type: "string",
      _caption: "s:dataFieldPath1",
    },
    dataFieldPath2: {
      _field: "dataFieldPath2",
      _type: "string",
      _caption: "s:dataFieldPath2",
    },
    message: {
      _field: "message",
      _type: "string",
      _caption: "s:message",
    },
  },
  defaultValues: {
    _field: "defaultValues",
    _type: "any",
    _caption: "s:defaultValues",
  },
  dynamicValues: {
    _field: "dynamicValues",
    _type: "object",
    _caption: "s:dynamicValues",
  },
  cancelEndpoint: {
    _field: "cancelEndpoint",
    _type: "string",
    _caption: "s:cancelEndpoint",
  },
  cancelConfirmationMessage: {
    _field: "cancelConfirmationMessage",
    _type: "string",
    _caption: "s:cancelConfirmationMessage",
  },
  readOnly: {
    _field: "readOnly",
    _type: "boolean",
    _caption: "s:readOnly",
  },
  compactDesign: {
    _field: "compactDesign",
    _type: "boolean",
    _caption: "s:compactDesign",
  },
  popupNoPadding: {
    _field: "popupNoPadding",
    _type: "boolean",
    _caption: "s:popupNoPadding",
  },
  submitAction: {
    _field: "submitAction",
    _type: "ActionsQueryDTO",
    _caption: "s:submitAction",
    recordTypeId: {
      _field: "recordTypeId",
      _type: "number",
      _caption: "s:recordTypeId",
    },
    recordTypeName: {
      _field: "recordTypeName",
      _type: "string",
      _caption: "s:recordTypeName",
    },
    recordTypeDescription: {
      _field: "recordTypeDescription",
      _type: "string",
      _caption: "s:recordTypeDescription",
    },
    actionId: {
      _field: "actionId",
      _type: "number",
      _caption: "s:actionId",
    },
    actionName: {
      _field: "actionName",
      _type: "string",
      _caption: "s:actionName",
    },
    actionCode: {
      _field: "actionCode",
      _type: "string",
      _caption: "s:actionCode",
    },
    actionDescription: {
      _field: "actionDescription",
      _type: "string",
      _caption: "s:actionDescription",
    },
    baseActionCode: {
      _field: "baseActionCode",
      _type: "string",
      _caption: "s:baseActionCode",
    },
    recordTypeCode: {
      _field: "recordTypeCode",
      _type: "string",
      _caption: "s:recordTypeCode",
    },
    currentStateCode: {
      _field: "currentStateCode",
      _type: "string",
      _caption: "s:currentStateCode",
    },
    baseActionName: {
      _field: "baseActionName",
      _type: "string",
      _caption: "s:baseActionName",
    },
    actionType: {
      _field: "actionType",
      _type: "string",
      _caption: "s:actionType",
    },
    actionPurpose: {
      _field: "actionPurpose",
      _type: "string",
      _caption: "s:actionPurpose",
    },
    actionEntity: {
      _field: "actionEntity",
      _type: "string",
      _caption: "s:actionEntity",
    },
    actionProcedure: {
      _field: "actionProcedure",
      _type: "string",
      _caption: "s:actionProcedure",
    },
    actionProcedureMultiple: {
      _field: "actionProcedureMultiple",
      _type: "string",
      _caption: "s:actionProcedureMultiple",
    },
    extraParamsFormUrl: {
      _field: "extraParamsFormUrl",
      _type: "string",
      _caption: "s:extraParamsFormUrl",
    },
    needsESign: {
      _field: "needsESign",
      _type: "boolean",
      _caption: "s:needsESign",
    },
    commentRequired: {
      _field: "commentRequired",
      _type: "boolean",
      _caption: "s:commentRequired",
    },
    confirmationMsg: {
      _field: "confirmationMsg",
      _type: "string",
      _caption: "s:confirmationMsg",
    },
    verb: {
      _field: "verb",
      _type: "string",
      _caption: "s:verb",
    },
    imageUrl: {
      _field: "imageUrl",
      _type: "string",
      _caption: "s:imageUrl",
    },
    imageColor: {
      _field: "imageColor",
      _type: "string",
      _caption: "s:imageColor",
    },
    menuGroup: {
      _field: "menuGroup",
      _type: "string",
      _caption: "s:menuGroup",
    },
    menuImageUrl: {
      _field: "menuImageUrl",
      _type: "string",
      _caption: "s:menuImageUrl",
    },
    menuImageColor: {
      _field: "menuImageColor",
      _type: "string",
      _caption: "s:menuImageColor",
    },
    menuDescription: {
      _field: "menuDescription",
      _type: "string",
      _caption: "s:menuDescription",
    },
    dataFormat: {
      _field: "dataFormat",
      _type: "string",
      _caption: "s:dataFormat",
    },
    appModuleCode: {
      _field: "appModuleCode",
      _type: "string",
      _caption: "s:appModuleCode",
    },
    refreshRecords: {
      _field: "refreshRecords",
      _type: "number",
      _caption: "s:refreshRecords",
    },
    primaryDisplayOrder: {
      _field: "primaryDisplayOrder",
      _type: "number",
      _caption: "s:primaryDisplayOrder",
    },
    secondaryDisplayOrder: {
      _field: "secondaryDisplayOrder",
      _type: "number",
      _caption: "s:secondaryDisplayOrder",
    },
  },
  visibilities: {
    _field: "visibilities",
    _type: "array",
    _caption: "s:visibilities",
    dataField: {
      _field: "dataField",
      _type: "string",
      _caption: "s:dataField",
    },
    values: {
      _field: "values",
      _type: "array",
      _caption: "s:values",
      expressionUsedComponents: {
        _field: "expressionUsedComponents",
        _type: "string",
        _caption: "s:expressionUsedComponents",
      },
      valueForVisible: {
        _field: "valueForVisible",
        _type: "string",
        _caption: "s:valueForVisible",
      },
    },
  },
} as const;

export const ActionsQueryDTOCoreListResponseFields = {
  recordTypeId: {
    _field: "recordTypeId",
    _type: "number",
    _caption: "s:recordTypeId",
  },
  recordTypeName: {
    _field: "recordTypeName",
    _type: "string",
    _caption: "s:recordTypeName",
  },
  recordTypeDescription: {
    _field: "recordTypeDescription",
    _type: "string",
    _caption: "s:recordTypeDescription",
  },
  actionId: {
    _field: "actionId",
    _type: "number",
    _caption: "s:actionId",
  },
  actionName: {
    _field: "actionName",
    _type: "string",
    _caption: "s:actionName",
  },
  actionCode: {
    _field: "actionCode",
    _type: "string",
    _caption: "s:actionCode",
  },
  actionDescription: {
    _field: "actionDescription",
    _type: "string",
    _caption: "s:actionDescription",
  },
  baseActionCode: {
    _field: "baseActionCode",
    _type: "string",
    _caption: "s:baseActionCode",
  },
  recordTypeCode: {
    _field: "recordTypeCode",
    _type: "string",
    _caption: "s:recordTypeCode",
  },
  currentStateCode: {
    _field: "currentStateCode",
    _type: "string",
    _caption: "s:currentStateCode",
  },
  baseActionName: {
    _field: "baseActionName",
    _type: "string",
    _caption: "s:baseActionName",
  },
  actionType: {
    _field: "actionType",
    _type: "string",
    _caption: "s:actionType",
  },
  actionPurpose: {
    _field: "actionPurpose",
    _type: "string",
    _caption: "s:actionPurpose",
  },
  actionEntity: {
    _field: "actionEntity",
    _type: "string",
    _caption: "s:actionEntity",
  },
  actionProcedure: {
    _field: "actionProcedure",
    _type: "string",
    _caption: "s:actionProcedure",
  },
  actionProcedureMultiple: {
    _field: "actionProcedureMultiple",
    _type: "string",
    _caption: "s:actionProcedureMultiple",
  },
  extraParamsFormUrl: {
    _field: "extraParamsFormUrl",
    _type: "string",
    _caption: "s:extraParamsFormUrl",
  },
  needsESign: {
    _field: "needsESign",
    _type: "boolean",
    _caption: "s:needsESign",
  },
  commentRequired: {
    _field: "commentRequired",
    _type: "boolean",
    _caption: "s:commentRequired",
  },
  confirmationMsg: {
    _field: "confirmationMsg",
    _type: "string",
    _caption: "s:confirmationMsg",
  },
  verb: {
    _field: "verb",
    _type: "string",
    _caption: "s:verb",
  },
  imageUrl: {
    _field: "imageUrl",
    _type: "string",
    _caption: "s:imageUrl",
  },
  imageColor: {
    _field: "imageColor",
    _type: "string",
    _caption: "s:imageColor",
  },
  menuGroup: {
    _field: "menuGroup",
    _type: "string",
    _caption: "s:menuGroup",
  },
  menuImageUrl: {
    _field: "menuImageUrl",
    _type: "string",
    _caption: "s:menuImageUrl",
  },
  menuImageColor: {
    _field: "menuImageColor",
    _type: "string",
    _caption: "s:menuImageColor",
  },
  menuDescription: {
    _field: "menuDescription",
    _type: "string",
    _caption: "s:menuDescription",
  },
  dataFormat: {
    _field: "dataFormat",
    _type: "string",
    _caption: "s:dataFormat",
  },
  appModuleCode: {
    _field: "appModuleCode",
    _type: "string",
    _caption: "s:appModuleCode",
  },
  refreshRecords: {
    _field: "refreshRecords",
    _type: "number",
    _caption: "s:refreshRecords",
  },
  primaryDisplayOrder: {
    _field: "primaryDisplayOrder",
    _type: "number",
    _caption: "s:primaryDisplayOrder",
  },
  secondaryDisplayOrder: {
    _field: "secondaryDisplayOrder",
    _type: "number",
    _caption: "s:secondaryDisplayOrder",
  },
} as const;

export const GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
  },
} as const;

export const GetPagePermissionsOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
  },
} as const;

export const GetPagesOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
  },
} as const;

export const GetRolesQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
  },
  defaultPage: {
    _field: "defaultPage",
    _type: "string",
    _caption: "s:defaultPage",
  },
} as const;

export const RecordIDResponseFields = {
  recordId: {
    _field: "recordId",
    _type: "number",
    _caption: "s:recordId",
  },
} as const;

