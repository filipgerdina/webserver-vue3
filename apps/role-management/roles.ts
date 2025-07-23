// ===== Module DTOs =====
export enum FormType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */

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

export enum ActionFormEventType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export interface ActionFormEvent {
  name?: string | null;
  dataField?: string | null;
  type?: ActionFormEventType;
  properties?: any;
}

export enum ActionFormValidationType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */

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

export type GetRolesQuery = object;

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
// Auto-generated from Roles.ts for grouped fields and types

export const ActionFormQueryDTOCoreResponseFields = {
  id: {
    _field: "id",
    _type: "string",
    _caption: "s:id",
    _translationField: "data.id",
  },
  isWizard: {
    _field: "isWizard",
    _type: "boolean",
    _caption: "s:isWizard",
    _translationField: "data.isWizard",
  },
  formType: {
    _field: "formType",
    _type: "string",
    _caption: "s:formType",
    _translationField: "data.formType",
  },
  title: {
    _field: "title",
    _type: "string",
    _caption: "s:title",
    _translationField: "data.title",
  },
  width: {
    _field: "width",
    _type: "number",
    _caption: "s:width",
    _translationField: "data.width",
  },
  controls: {
    _field: "controls",
    _type: "array",
    _caption: "s:controls",
    _translationField: "data.controls",
    dataField: {
      _field: "dataField",
      _type: "string",
      _caption: "s:dataField",
      _translationField: "data.controls.dataField",
    },
    dataFieldArray: {
      _field: "dataFieldArray",
      _type: "array",
      _caption: "s:dataFieldArray",
      _translationField: "data.controls.dataFieldArray",
    },
    visualizationType: {
      _field: "visualizationType",
      _type: "string",
      _caption: "s:visualizationType",
      _translationField: "data.controls.visualizationType",
    },
    valueDataType: {
      _field: "valueDataType",
      _type: "string",
      _caption: "s:valueDataType",
      _translationField: "data.controls.valueDataType",
    },
    valueType: {
      _field: "valueType",
      _type: "string",
      _caption: "s:valueType",
      _translationField: "data.controls.valueType",
    },
    label: {
      _field: "label",
      _type: "string",
      _caption: "s:label",
      _translationField: "data.controls.label",
    },
    required: {
      _field: "required",
      _type: "boolean",
      _caption: "s:required",
      _translationField: "data.controls.required",
    },
    properties: {
      _field: "properties",
      _type: "any",
      _caption: "s:properties",
      _translationField: "data.controls.properties",
    },
    width: {
      _field: "width",
      _type: "number",
      _caption: "s:width",
      _translationField: "data.controls.width",
    },
    description: {
      _field: "description",
      _type: "string",
      _caption: "s:description",
      _translationField: "data.controls.description",
    },
    visible: {
      _field: "visible",
      _type: "boolean",
      _caption: "s:visible",
      _translationField: "data.controls.visible",
    },
    sendValueAsString: {
      _field: "sendValueAsString",
      _type: "boolean",
      _caption: "s:sendValueAsString",
      _translationField: "data.controls.sendValueAsString",
    },
    labelIconUrl: {
      _field: "labelIconUrl",
      _type: "string",
      _caption: "s:labelIconUrl",
      _translationField: "data.controls.labelIconUrl",
    },
    labelIconColor: {
      _field: "labelIconColor",
      _type: "string",
      _caption: "s:labelIconColor",
      _translationField: "data.controls.labelIconColor",
    },
    cssClass: {
      _field: "cssClass",
      _type: "string",
      _caption: "s:cssClass",
      _translationField: "data.controls.cssClass",
    },
    colSpan: {
      _field: "colSpan",
      _type: "number",
      _caption: "s:colSpan",
      _translationField: "data.controls.colSpan",
    },
  },
  events: {
    _field: "events",
    _type: "array",
    _caption: "s:events",
    _translationField: "data.events",
    name: {
      _field: "name",
      _type: "string",
      _caption: "s:name",
      _translationField: "data.events.name",
    },
    dataField: {
      _field: "dataField",
      _type: "string",
      _caption: "s:dataField",
      _translationField: "data.events.dataField",
    },
    type: {
      _field: "type",
      _type: "string",
      _caption: "s:type",
      _translationField: "data.events.type",
    },
    properties: {
      _field: "properties",
      _type: "any",
      _caption: "s:properties",
      _translationField: "data.events.properties",
    },
  },
  validations: {
    _field: "validations",
    _type: "array",
    _caption: "s:validations",
    _translationField: "data.validations",
    type: {
      _field: "type",
      _type: "string",
      _caption: "s:type",
      _translationField: "data.validations.type",
    },
    dataFieldPath1: {
      _field: "dataFieldPath1",
      _type: "string",
      _caption: "s:dataFieldPath1",
      _translationField: "data.validations.dataFieldPath1",
    },
    dataFieldPath2: {
      _field: "dataFieldPath2",
      _type: "string",
      _caption: "s:dataFieldPath2",
      _translationField: "data.validations.dataFieldPath2",
    },
    message: {
      _field: "message",
      _type: "string",
      _caption: "s:message",
      _translationField: "data.validations.message",
    },
  },
  defaultValues: {
    _field: "defaultValues",
    _type: "any",
    _caption: "s:defaultValues",
    _translationField: "data.defaultValues",
  },
  dynamicValues: {
    _field: "dynamicValues",
    _type: "object",
    _caption: "s:dynamicValues",
    _translationField: "data.dynamicValues",
  },
  cancelEndpoint: {
    _field: "cancelEndpoint",
    _type: "string",
    _caption: "s:cancelEndpoint",
    _translationField: "data.cancelEndpoint",
  },
  cancelConfirmationMessage: {
    _field: "cancelConfirmationMessage",
    _type: "string",
    _caption: "s:cancelConfirmationMessage",
    _translationField: "data.cancelConfirmationMessage",
  },
  readOnly: {
    _field: "readOnly",
    _type: "boolean",
    _caption: "s:readOnly",
    _translationField: "data.readOnly",
  },
  compactDesign: {
    _field: "compactDesign",
    _type: "boolean",
    _caption: "s:compactDesign",
    _translationField: "data.compactDesign",
  },
  popupNoPadding: {
    _field: "popupNoPadding",
    _type: "boolean",
    _caption: "s:popupNoPadding",
    _translationField: "data.popupNoPadding",
  },
  submitAction: {
    _field: "submitAction",
    _type: "ActionsQueryDTO",
    _caption: "s:submitAction",
    _translationField: "data.submitAction",
    recordTypeId: {
      _field: "recordTypeId",
      _type: "number",
      _caption: "s:recordTypeId",
      _translationField: "data.submitAction.recordTypeId",
    },
    recordTypeName: {
      _field: "recordTypeName",
      _type: "string",
      _caption: "s:recordTypeName",
      _translationField: "data.submitAction.recordTypeName",
    },
    recordTypeDescription: {
      _field: "recordTypeDescription",
      _type: "string",
      _caption: "s:recordTypeDescription",
      _translationField: "data.submitAction.recordTypeDescription",
    },
    actionId: {
      _field: "actionId",
      _type: "number",
      _caption: "s:actionId",
      _translationField: "data.submitAction.actionId",
    },
    actionName: {
      _field: "actionName",
      _type: "string",
      _caption: "s:actionName",
      _translationField: "data.submitAction.actionName",
    },
    actionCode: {
      _field: "actionCode",
      _type: "string",
      _caption: "s:actionCode",
      _translationField: "data.submitAction.actionCode",
    },
    actionDescription: {
      _field: "actionDescription",
      _type: "string",
      _caption: "s:actionDescription",
      _translationField: "data.submitAction.actionDescription",
    },
    baseActionCode: {
      _field: "baseActionCode",
      _type: "string",
      _caption: "s:baseActionCode",
      _translationField: "data.submitAction.baseActionCode",
    },
    recordTypeCode: {
      _field: "recordTypeCode",
      _type: "string",
      _caption: "s:recordTypeCode",
      _translationField: "data.submitAction.recordTypeCode",
    },
    currentStateCode: {
      _field: "currentStateCode",
      _type: "string",
      _caption: "s:currentStateCode",
      _translationField: "data.submitAction.currentStateCode",
    },
    baseActionName: {
      _field: "baseActionName",
      _type: "string",
      _caption: "s:baseActionName",
      _translationField: "data.submitAction.baseActionName",
    },
    actionType: {
      _field: "actionType",
      _type: "string",
      _caption: "s:actionType",
      _translationField: "data.submitAction.actionType",
    },
    actionPurpose: {
      _field: "actionPurpose",
      _type: "string",
      _caption: "s:actionPurpose",
      _translationField: "data.submitAction.actionPurpose",
    },
    actionEntity: {
      _field: "actionEntity",
      _type: "string",
      _caption: "s:actionEntity",
      _translationField: "data.submitAction.actionEntity",
    },
    actionProcedure: {
      _field: "actionProcedure",
      _type: "string",
      _caption: "s:actionProcedure",
      _translationField: "data.submitAction.actionProcedure",
    },
    actionProcedureMultiple: {
      _field: "actionProcedureMultiple",
      _type: "string",
      _caption: "s:actionProcedureMultiple",
      _translationField: "data.submitAction.actionProcedureMultiple",
    },
    extraParamsFormUrl: {
      _field: "extraParamsFormUrl",
      _type: "string",
      _caption: "s:extraParamsFormUrl",
      _translationField: "data.submitAction.extraParamsFormUrl",
    },
    needsESign: {
      _field: "needsESign",
      _type: "boolean",
      _caption: "s:needsESign",
      _translationField: "data.submitAction.needsESign",
    },
    commentRequired: {
      _field: "commentRequired",
      _type: "boolean",
      _caption: "s:commentRequired",
      _translationField: "data.submitAction.commentRequired",
    },
    confirmationMsg: {
      _field: "confirmationMsg",
      _type: "string",
      _caption: "s:confirmationMsg",
      _translationField: "data.submitAction.confirmationMsg",
    },
    verb: {
      _field: "verb",
      _type: "string",
      _caption: "s:verb",
      _translationField: "data.submitAction.verb",
    },
    imageUrl: {
      _field: "imageUrl",
      _type: "string",
      _caption: "s:imageUrl",
      _translationField: "data.submitAction.imageUrl",
    },
    imageColor: {
      _field: "imageColor",
      _type: "string",
      _caption: "s:imageColor",
      _translationField: "data.submitAction.imageColor",
    },
    menuGroup: {
      _field: "menuGroup",
      _type: "string",
      _caption: "s:menuGroup",
      _translationField: "data.submitAction.menuGroup",
    },
    menuImageUrl: {
      _field: "menuImageUrl",
      _type: "string",
      _caption: "s:menuImageUrl",
      _translationField: "data.submitAction.menuImageUrl",
    },
    menuImageColor: {
      _field: "menuImageColor",
      _type: "string",
      _caption: "s:menuImageColor",
      _translationField: "data.submitAction.menuImageColor",
    },
    menuDescription: {
      _field: "menuDescription",
      _type: "string",
      _caption: "s:menuDescription",
      _translationField: "data.submitAction.menuDescription",
    },
    dataFormat: {
      _field: "dataFormat",
      _type: "string",
      _caption: "s:dataFormat",
      _translationField: "data.submitAction.dataFormat",
    },
    appModuleCode: {
      _field: "appModuleCode",
      _type: "string",
      _caption: "s:appModuleCode",
      _translationField: "data.submitAction.appModuleCode",
    },
    refreshRecords: {
      _field: "refreshRecords",
      _type: "number",
      _caption: "s:refreshRecords",
      _translationField: "data.submitAction.refreshRecords",
    },
    primaryDisplayOrder: {
      _field: "primaryDisplayOrder",
      _type: "number",
      _caption: "s:primaryDisplayOrder",
      _translationField: "data.submitAction.primaryDisplayOrder",
    },
    secondaryDisplayOrder: {
      _field: "secondaryDisplayOrder",
      _type: "number",
      _caption: "s:secondaryDisplayOrder",
      _translationField: "data.submitAction.secondaryDisplayOrder",
    },
  },
  visibilities: {
    _field: "visibilities",
    _type: "array",
    _caption: "s:visibilities",
    _translationField: "data.visibilities",
    dataField: {
      _field: "dataField",
      _type: "string",
      _caption: "s:dataField",
      _translationField: "data.visibilities.dataField",
    },
    values: {
      _field: "values",
      _type: "array",
      _caption: "s:values",
      _translationField: "data.visibilities.values",
      expressionUsedComponents: {
        _field: "expressionUsedComponents",
        _type: "string",
        _caption: "s:expressionUsedComponents",
        _translationField: "data.visibilities.values.expressionUsedComponents",
      },
      valueForVisible: {
        _field: "valueForVisible",
        _type: "string",
        _caption: "s:valueForVisible",
        _translationField: "data.visibilities.values.valueForVisible",
      },
    },
  },
} as const;

export const ActionsQueryDTOCoreListResponseFields = {
  recordTypeId: {
    _field: "recordTypeId",
    _type: "number",
    _caption: "s:recordTypeId",
    _translationField: "data.recordTypeId",
  },
  recordTypeName: {
    _field: "recordTypeName",
    _type: "string",
    _caption: "s:recordTypeName",
    _translationField: "data.recordTypeName",
  },
  recordTypeDescription: {
    _field: "recordTypeDescription",
    _type: "string",
    _caption: "s:recordTypeDescription",
    _translationField: "data.recordTypeDescription",
  },
  actionId: {
    _field: "actionId",
    _type: "number",
    _caption: "s:actionId",
    _translationField: "data.actionId",
  },
  actionName: {
    _field: "actionName",
    _type: "string",
    _caption: "s:actionName",
    _translationField: "data.actionName",
  },
  actionCode: {
    _field: "actionCode",
    _type: "string",
    _caption: "s:actionCode",
    _translationField: "data.actionCode",
  },
  actionDescription: {
    _field: "actionDescription",
    _type: "string",
    _caption: "s:actionDescription",
    _translationField: "data.actionDescription",
  },
  baseActionCode: {
    _field: "baseActionCode",
    _type: "string",
    _caption: "s:baseActionCode",
    _translationField: "data.baseActionCode",
  },
  recordTypeCode: {
    _field: "recordTypeCode",
    _type: "string",
    _caption: "s:recordTypeCode",
    _translationField: "data.recordTypeCode",
  },
  currentStateCode: {
    _field: "currentStateCode",
    _type: "string",
    _caption: "s:currentStateCode",
    _translationField: "data.currentStateCode",
  },
  baseActionName: {
    _field: "baseActionName",
    _type: "string",
    _caption: "s:baseActionName",
    _translationField: "data.baseActionName",
  },
  actionType: {
    _field: "actionType",
    _type: "string",
    _caption: "s:actionType",
    _translationField: "data.actionType",
  },
  actionPurpose: {
    _field: "actionPurpose",
    _type: "string",
    _caption: "s:actionPurpose",
    _translationField: "data.actionPurpose",
  },
  actionEntity: {
    _field: "actionEntity",
    _type: "string",
    _caption: "s:actionEntity",
    _translationField: "data.actionEntity",
  },
  actionProcedure: {
    _field: "actionProcedure",
    _type: "string",
    _caption: "s:actionProcedure",
    _translationField: "data.actionProcedure",
  },
  actionProcedureMultiple: {
    _field: "actionProcedureMultiple",
    _type: "string",
    _caption: "s:actionProcedureMultiple",
    _translationField: "data.actionProcedureMultiple",
  },
  extraParamsFormUrl: {
    _field: "extraParamsFormUrl",
    _type: "string",
    _caption: "s:extraParamsFormUrl",
    _translationField: "data.extraParamsFormUrl",
  },
  needsESign: {
    _field: "needsESign",
    _type: "boolean",
    _caption: "s:needsESign",
    _translationField: "data.needsESign",
  },
  commentRequired: {
    _field: "commentRequired",
    _type: "boolean",
    _caption: "s:commentRequired",
    _translationField: "data.commentRequired",
  },
  confirmationMsg: {
    _field: "confirmationMsg",
    _type: "string",
    _caption: "s:confirmationMsg",
    _translationField: "data.confirmationMsg",
  },
  verb: {
    _field: "verb",
    _type: "string",
    _caption: "s:verb",
    _translationField: "data.verb",
  },
  imageUrl: {
    _field: "imageUrl",
    _type: "string",
    _caption: "s:imageUrl",
    _translationField: "data.imageUrl",
  },
  imageColor: {
    _field: "imageColor",
    _type: "string",
    _caption: "s:imageColor",
    _translationField: "data.imageColor",
  },
  menuGroup: {
    _field: "menuGroup",
    _type: "string",
    _caption: "s:menuGroup",
    _translationField: "data.menuGroup",
  },
  menuImageUrl: {
    _field: "menuImageUrl",
    _type: "string",
    _caption: "s:menuImageUrl",
    _translationField: "data.menuImageUrl",
  },
  menuImageColor: {
    _field: "menuImageColor",
    _type: "string",
    _caption: "s:menuImageColor",
    _translationField: "data.menuImageColor",
  },
  menuDescription: {
    _field: "menuDescription",
    _type: "string",
    _caption: "s:menuDescription",
    _translationField: "data.menuDescription",
  },
  dataFormat: {
    _field: "dataFormat",
    _type: "string",
    _caption: "s:dataFormat",
    _translationField: "data.dataFormat",
  },
  appModuleCode: {
    _field: "appModuleCode",
    _type: "string",
    _caption: "s:appModuleCode",
    _translationField: "data.appModuleCode",
  },
  refreshRecords: {
    _field: "refreshRecords",
    _type: "number",
    _caption: "s:refreshRecords",
    _translationField: "data.refreshRecords",
  },
  primaryDisplayOrder: {
    _field: "primaryDisplayOrder",
    _type: "number",
    _caption: "s:primaryDisplayOrder",
    _translationField: "data.primaryDisplayOrder",
  },
  secondaryDisplayOrder: {
    _field: "secondaryDisplayOrder",
    _type: "number",
    _caption: "s:secondaryDisplayOrder",
    _translationField: "data.secondaryDisplayOrder",
  },
} as const;

export const GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
    _translationField: "data.utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
    _translationField: "data.userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
    _translationField: "data.userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
    _translationField: "data.utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
    _translationField: "data.userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
    _translationField: "data.userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
    _translationField: "data.id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
    _translationField: "data.name",
  },
} as const;

export const GetPagePermissionsOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
    _translationField: "data.utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
    _translationField: "data.userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
    _translationField: "data.userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
    _translationField: "data.utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
    _translationField: "data.userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
    _translationField: "data.userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
    _translationField: "data.id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
    _translationField: "data.name",
  },
} as const;

export const GetPagesOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
    _translationField: "data.utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
    _translationField: "data.userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
    _translationField: "data.userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
    _translationField: "data.utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
    _translationField: "data.userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
    _translationField: "data.userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
    _translationField: "data.id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
    _translationField: "data.name",
  },
} as const;

export const GetRolesQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp",
    _translationField: "data.utcRecordTimestamp",
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId",
    _translationField: "data.userId",
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo",
    _translationField: "data.userInfo",
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd",
    _translationField: "data.utcRecordTimestampUpd",
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd",
    _translationField: "data.userIdUpd",
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd",
    _translationField: "data.userInfoUpd",
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
    _translationField: "data.id",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
    _translationField: "data.name",
  },
  defaultPage: {
    _field: "defaultPage",
    _type: "string",
    _caption: "s:defaultPage",
    _translationField: "data.defaultPage",
  },
} as const;

export const RecordIDResponseFields = {
  recordId: {
    _field: "recordId",
    _type: "number",
    _caption: "s:recordId",
    _translationField: "data.recordId",
  },
} as const;

