// ===== Module DTOs =====
export interface AddRoleToUserCommandParametersDataFields {
  /** @format int32 */
  userId: number;
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

export interface EditProfileCommandParametersDataFields {
  username?: string | null;
  domainUsername?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format int32 */
  defaultPageId?: number | null;
  /** @format int32 */
  languageId?: number | null;
  /** @format int32 */
  dateTimeFormatId?: number | null;
  /** @format int32 */
  decimalSeperatorId?: number | null;
}

export interface EditProfileCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: EditProfileCommandParametersDataFields;
}

export interface EditProfileCommand {
  data?: EditProfileCommandParametersDataFieldsActionRequestExtraParam;
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
  /** @format int32 */
  roleId?: number;
  name?: string | null;
  defaultPage?: string | null;
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

export interface GetRolesOfUserQueryDTOCoreListResponse {
  data?: GetRolesOfUserQueryDTO[] | null;
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
  /** @format int32 */
  userId?: number | null;
  /** @format int32 */
  roleId?: number | null;
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
  defaultPagePath?: string | null;
  /** @format int32 */
  languageId?: number | null;
  /** @format int32 */
  dateTimeFormatId?: number | null;
  /** @format int32 */
  decimalSeperatorId?: number | null;
}

export interface GetUserInformationQueryDTOCoreResponse {
  data?: GetUserInformationQueryDTO;
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
  firstName?: string | null;
  lastName?: string | null;
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
  getUserInformationQuery?: object;
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

export interface UsersActionsListQuery {
  RecordTypeCode?: string;
  RecordId?: number;
  CurrentStateCode?: string;
  AllActions?: boolean;
}



// ===== Generated Types & Fields =====
// Auto-generated from users.ts for grouped fields and types

export const GetRolesOfUserQueryDTOCoreListResponseFields = {
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
  roleId: {
    _field: "roleId",
    _type: "number",
    _caption: "s:roleId",
    _translationField: "data.roleId",
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

export const GetUserInformationQueryDTOCoreResponseFields = {
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
  username: {
    _field: "username",
    _type: "string",
    _caption: "s:username",
    _translationField: "data.username",
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName",
    _translationField: "data.displayName",
  },
  domainUserName: {
    _field: "domainUserName",
    _type: "string",
    _caption: "s:domainUserName",
    _translationField: "data.domainUserName",
  },
  email: {
    _field: "email",
    _type: "string",
    _caption: "s:email",
    _translationField: "data.email",
  },
  firstName: {
    _field: "firstName",
    _type: "string",
    _caption: "s:firstName",
    _translationField: "data.firstName",
  },
  lastName: {
    _field: "lastName",
    _type: "string",
    _caption: "s:lastName",
    _translationField: "data.lastName",
  },
  added: {
    _field: "added",
    _type: "string",
    _caption: "s:added",
    _translationField: "data.added",
  },
  roleNames: {
    _field: "roleNames",
    _type: "array",
    _caption: "s:roleNames",
    _translationField: "data.roleNames",
  },
  defaultPagePath: {
    _field: "defaultPagePath",
    _type: "string",
    _caption: "s:defaultPagePath",
    _translationField: "data.defaultPagePath",
  },
  languageId: {
    _field: "languageId",
    _type: "number",
    _caption: "s:languageId",
    _translationField: "data.languageId",
  },
  dateTimeFormatId: {
    _field: "dateTimeFormatId",
    _type: "number",
    _caption: "s:dateTimeFormatId",
    _translationField: "data.dateTimeFormatId",
  },
  decimalSeperatorId: {
    _field: "decimalSeperatorId",
    _type: "number",
    _caption: "s:decimalSeperatorId",
    _translationField: "data.decimalSeperatorId",
  },
} as const;

export const GetUsersQueryDTOCoreListResponseFields = {
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
  username: {
    _field: "username",
    _type: "string",
    _caption: "s:username",
    _translationField: "data.username",
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName",
    _translationField: "data.displayName",
  },
  firstName: {
    _field: "firstName",
    _type: "string",
    _caption: "s:firstName",
    _translationField: "data.firstName",
  },
  lastName: {
    _field: "lastName",
    _type: "string",
    _caption: "s:lastName",
    _translationField: "data.lastName",
  },
  email: {
    _field: "email",
    _type: "string",
    _caption: "s:email",
    _translationField: "data.email",
  },
  isSystem: {
    _field: "isSystem",
    _type: "boolean",
    _caption: "s:isSystem",
    _translationField: "data.isSystem",
  },
  isLocked: {
    _field: "isLocked",
    _type: "boolean",
    _caption: "s:isLocked",
    _translationField: "data.isLocked",
  },
  added: {
    _field: "added",
    _type: "string",
    _caption: "s:added",
    _translationField: "data.added",
  },
  domain: {
    _field: "domain",
    _type: "string",
    _caption: "s:domain",
    _translationField: "data.domain",
  },
} as const;

