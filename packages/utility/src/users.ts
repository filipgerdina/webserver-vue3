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

export interface AddRoleToUserCommandParametersDataFields {
  /** @format int32 */
  id: number;
  /** @format int32 */
  roleId: number;
}

export interface AddRoleToUserCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: AddRoleToUserCommandParametersDataFields;
}

export interface ESign {
  username?: string | null;
  comment?: string | null;
  /** @format int64 */
  applicationESignId?: number | null;
}

export interface AddRoleToUserCommand {
  data?: AddRoleToUserCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface EditUserCommandParametersDataFields {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  username: string;
  rolesIds?: number[] | null;
}

export interface EditUserCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: EditUserCommandParametersDataFields;
}

export interface EditUserCommand {
  data?: EditUserCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface GetRolesOfUserQueryDTO {
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
  /** @format int32 */
  roleId?: number;
}

export interface GetRolesOfUserQueryDTOCoreListResponse {
  data?: GetRolesOfUserQueryDTO[] | null;
  messages?: Message[] | null;
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

export interface RecordParams {
  /** @format int32 */
  recordId: number;
  currentStateCode?: string | null;
}

export interface UserActionFormQuery {
  actionCode?: string | null;
  recordTypeCode?: string | null;
  recordParams?: RecordParams[] | null;
  extraParamsPageValues?: any;
  extraParamsFormValues?: any;
  /** @minLength 1 */
  formCode: string;
}

export interface GetUserActionFormQuery {
  data?: UserActionFormQuery;
}

export interface GetUserInformationQueryDTO {
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
  username?: string | null;
  displayName?: string | null;
  domainUserName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format date-time */
  added?: string;
  roleNames?: string[] | null;
  defaultPage?: string | null;
}

export interface GetUserInformationQueryDTOCoreListResponse {
  data?: GetUserInformationQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetUsersQueryDTO {
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
  username?: string | null;
  displayName?: string | null;
  email?: string | null;
  isSystem?: boolean;
  isLocked?: boolean;
  /** @format date-time */
  added?: string;
  domain?: string | null;
}

export interface GetUsersQueryDTOCoreListResponse {
  data?: GetUsersQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface LockUserCommandParametersDataFields {
  /** @format int32 */
  id: number;
}

export interface LockUserCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: LockUserCommandParametersDataFields;
}

export interface LockUserCommand {
  data?: LockUserCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface NewRoleCommandParametersDataFields {
  name?: string | null;
  defaultPage?: string | null;
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

export interface NewUserCommandParametersDataFields {
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  password: string;
}

export interface NewUserCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: NewUserCommandParametersDataFields;
}

export interface NewUserCommand {
  data?: NewUserCommandParametersDataFieldsActionRequestExtraParam;
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

export interface RemoveRoleFromUserCommandParametersDataFields {
  /** @format int32 */
  id: number;
}

export interface RemoveRoleFromUserCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: RemoveRoleFromUserCommandParametersDataFields;
}

export interface RemoveRoleFromUserCommand {
  data?: RemoveRoleFromUserCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface SyncDomainUsersCommandParametersDataFields {
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  password: string;
  domain?: string | null;
}

export interface SyncDomainUsersCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: SyncDomainUsersCommandParametersDataFields;
}

export interface SyncDomainUsersCommand {
  data?: SyncDomainUsersCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface UnlockUserCommandParametersDataFields {
  /** @format int32 */
  id: number;
}

export interface UnlockUserCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: UnlockUserCommandParametersDataFields;
}

export interface UnlockUserCommand {
  data?: UnlockUserCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}


// ===== Request DTOs =====
// Auto-generated request DTOs for Users

export interface UsersUsersListQuery {
  getUsersQuery?: object;
}

export interface UsersUserInformationCreateQuery {
  Username?: string;
}

export interface UsersUsersCreate2PathParams {
  id: number;
}

export interface UsersLockCreatePathParams {
  id: number;
}

export interface UsersUnlockCreatePathParams {
  id: number;
}

export interface UsersUserRolesListQuery {
  Id?: number;
}

export interface UsersUserRolesCreate2PathParams {
  id: number;
}

export interface UsersRolesListQuery {
  getRolesQuery?: object;
}

export interface UsersActionsListQuery {
  RecordTypeCode?: string;
  RecordId?: number;
  CurrentStateCode?: string;
  AllActions?: boolean;
}



// ===== Generated Types & Fields =====
// Auto-generated from users.ts for grouped fields and types

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

export const GetRolesOfUserQueryDTOCoreListResponseFields = {
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
  roleId: {
    _field: "roleId",
    _type: "number",
    _caption: "s:roleId",
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

export const GetUserInformationQueryDTOCoreListResponseFields = {
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
  username: {
    _field: "username",
    _type: "string",
    _caption: "s:username",
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName",
  },
  domainUserName: {
    _field: "domainUserName",
    _type: "string",
    _caption: "s:domainUserName",
  },
  email: {
    _field: "email",
    _type: "string",
    _caption: "s:email",
  },
  firstName: {
    _field: "firstName",
    _type: "string",
    _caption: "s:firstName",
  },
  lastName: {
    _field: "lastName",
    _type: "string",
    _caption: "s:lastName",
  },
  added: {
    _field: "added",
    _type: "string",
    _caption: "s:added",
  },
  roleNames: {
    _field: "roleNames",
    _type: "array",
    _caption: "s:roleNames",
  },
  defaultPage: {
    _field: "defaultPage",
    _type: "string",
    _caption: "s:defaultPage",
  },
} as const;

export const GetUsersQueryDTOCoreListResponseFields = {
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
  username: {
    _field: "username",
    _type: "string",
    _caption: "s:username",
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName",
  },
  email: {
    _field: "email",
    _type: "string",
    _caption: "s:email",
  },
  isSystem: {
    _field: "isSystem",
    _type: "boolean",
    _caption: "s:isSystem",
  },
  isLocked: {
    _field: "isLocked",
    _type: "boolean",
    _caption: "s:isLocked",
  },
  added: {
    _field: "added",
    _type: "string",
    _caption: "s:added",
  },
  domain: {
    _field: "domain",
    _type: "string",
    _caption: "s:domain",
  },
} as const;

export const RecordIDResponseFields = {
  recordId: {
    _field: "recordId",
    _type: "number",
    _caption: "s:recordId",
  },
} as const;

