// ===== Module DTOs =====
export interface DataSourcePost {
  name?: string | null;
  urlParams?: any;
  queryParams?: any;
  bodyParams?: any;
}

export interface EditApplicationSettingsCommandParametersDataFields {
  useStrongPassword?: boolean | null;
  /** @format int32 */
  languageId?: number | null;
  /** @format int32 */
  dateTimeFormatId?: number | null;
  /** @format int32 */
  decimalSeperatorId?: number | null;
}

export interface EditApplicationSettingsCommandParametersDataFieldsActionRequestExtraParam {
  currentStateCode?: string | null;
  /** @minLength 1 */
  actionCode: string;
  /** @minLength 1 */
  recordTypeCode: string;
  extraParamsFormValues?: EditApplicationSettingsCommandParametersDataFields;
}

export interface ESign {
  username?: string | null;
  comment?: string | null;
  /** @format int64 */
  applicationESignId?: number | null;
}

export interface EditApplicationSettingsCommand {
  data?: EditApplicationSettingsCommandParametersDataFieldsActionRequestExtraParam;
  eSign?: ESign;
}

export interface SettingsDTO {
  /** @format int32 */
  id?: number;
  value?: string | null;
  displayValue?: string | null;
}

export interface GetApplicationSettingsQueryDTO {
  language?: SettingsDTO;
  dateFormat?: SettingsDTO;
  decimalSeperator?: SettingsDTO;
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

export interface GetApplicationSettingsQueryDTOCoreResponse {
  data?: GetApplicationSettingsQueryDTO;
  messages?: Message[] | null;
}

export interface GetDataSourceQueryDTO {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface GetDataSourceQueryDTOCoreListResponse {
  data?: GetDataSourceQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetDateTimeFormatsQueryDTO {
  /** @format int32 */
  id?: number;
  value?: string | null;
  displayName?: string | null;
}

export interface GetDateTimeFormatsQueryDTOCoreListResponse {
  data?: GetDateTimeFormatsQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetDecimalSeperatorsQueryDTO {
  /** @format int32 */
  id?: number;
  value?: string | null;
  displayName?: string | null;
}

export interface GetDecimalSeperatorsQueryDTOCoreListResponse {
  data?: GetDecimalSeperatorsQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetLanguagesQueryDTO {
  /** @format int32 */
  id?: number;
  value?: string | null;
  displayName?: string | null;
}

export interface GetLanguagesQueryDTOCoreListResponse {
  data?: GetLanguagesQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetModulesQueryDTO {
  /** @format int32 */
  id?: number;
  moduleName?: string | null;
  pathToModule?: string | null;
}

export interface GetModulesQueryDTOCoreListResponse {
  data?: GetModulesQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetNavigationGroupsQueryDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  parentGroupId?: number | null;
  name?: string | null;
  iconUrl?: string | null;
}

export interface GetNavigationGroupsQueryDTOCoreListResponse {
  data?: GetNavigationGroupsQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetPagesQueryDTO {
  /** @format int32 */
  id?: number;
  path?: string | null;
  pageComponent?: string | null;
  name?: string | null;
  iconUrl?: string | null;
  /** @format int32 */
  moduleId?: number | null;
  /** @format int32 */
  navigationGroupId?: number | null;
}

export interface GetPagesQueryDTOCoreListResponse {
  data?: GetPagesQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface GetTranslationsQueryDTO {
  /** @format int32 */
  id?: number;
  key?: string | null;
  value?: string | null;
}

export interface GetTranslationsQueryDTOCoreListResponse {
  data?: GetTranslationsQueryDTO[] | null;
  messages?: Message[] | null;
}

export interface RecordParams {
  /** @format int32 */
  recordId: number;
  currentStateCode?: string | null;
}

export interface UtlActionFormQuery {
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

export interface GetUtlActionFormQuery {
  data?: UtlActionFormQuery;
}

export interface ProcessEndPointActionPost {
  name?: string | null;
  method?: string | null;
  urlParams?: any;
  queryParams?: any;
  bodyParams?: any;
}


// ===== Request DTOs =====
// Auto-generated request DTOs for Utl

export interface UtlPagesListQuery {
  getPagesQuery?: object;
}

export interface UtlModulesListQuery {
  getModuleQuery?: object;
}

export interface UtlDataSourcesListQuery {
  getDataSourcesQuery?: object;
}

export interface UtlTranslationsListQuery {
  langId?: number;
}

export interface UtlNavigationGroupsListQuery {
  getNavigationGroupsQuery?: object;
}

export interface UtlApplicationSettingsListQuery {
  getApplicationSettingsQuery?: object;
}

export interface UtlLanguagesListQuery {
  getLanguagesQuery?: object;
}

export interface UtlDateTimeFormatsListQuery {
  getDateTimeFormatsQuery?: object;
}

export interface UtlDecimalSeperatorsListQuery {
  getDecimalSeperatorsQuery?: object;
}

export interface UtlActionsListQuery {
  RecordTypeCode?: string;
  RecordId?: number;
  CurrentStateCode?: string;
  AllActions?: boolean;
}



// ===== Generated Types & Fields =====
// Auto-generated from utl.ts for grouped fields and types

export const GetApplicationSettingsQueryDTOCoreResponseFields = {
  language: {
    _field: "language",
    _type: "SettingsDTO",
    _caption: "s:language",
    id: {
      _field: "id",
      _type: "number",
      _caption: "s:id",
    },
    value: {
      _field: "value",
      _type: "string",
      _caption: "s:value",
    },
    displayValue: {
      _field: "displayValue",
      _type: "string",
      _caption: "s:displayValue",
    },
  },
  dateFormat: {
    _field: "dateFormat",
    _type: "SettingsDTO",
    _caption: "s:dateFormat",
    id: {
      _field: "id",
      _type: "number",
      _caption: "s:id",
    },
    value: {
      _field: "value",
      _type: "string",
      _caption: "s:value",
    },
    displayValue: {
      _field: "displayValue",
      _type: "string",
      _caption: "s:displayValue",
    },
  },
  decimalSeperator: {
    _field: "decimalSeperator",
    _type: "SettingsDTO",
    _caption: "s:decimalSeperator",
    id: {
      _field: "id",
      _type: "number",
      _caption: "s:id",
    },
    value: {
      _field: "value",
      _type: "string",
      _caption: "s:value",
    },
    displayValue: {
      _field: "displayValue",
      _type: "string",
      _caption: "s:displayValue",
    },
  },
} as const;

export const GetDataSourceQueryDTOCoreListResponseFields = {
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

export const GetDateTimeFormatsQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  value: {
    _field: "value",
    _type: "string",
    _caption: "s:value",
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName",
  },
} as const;

export const GetDecimalSeperatorsQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  value: {
    _field: "value",
    _type: "string",
    _caption: "s:value",
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName",
  },
} as const;

export const GetLanguagesQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  value: {
    _field: "value",
    _type: "string",
    _caption: "s:value",
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName",
  },
} as const;

export const GetModulesQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  moduleName: {
    _field: "moduleName",
    _type: "string",
    _caption: "s:moduleName",
  },
  pathToModule: {
    _field: "pathToModule",
    _type: "string",
    _caption: "s:pathToModule",
  },
} as const;

export const GetNavigationGroupsQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  parentGroupId: {
    _field: "parentGroupId",
    _type: "number",
    _caption: "s:parentGroupId",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
  },
  iconUrl: {
    _field: "iconUrl",
    _type: "string",
    _caption: "s:iconUrl",
  },
} as const;

export const GetPagesQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  path: {
    _field: "path",
    _type: "string",
    _caption: "s:path",
  },
  pageComponent: {
    _field: "pageComponent",
    _type: "string",
    _caption: "s:pageComponent",
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name",
  },
  iconUrl: {
    _field: "iconUrl",
    _type: "string",
    _caption: "s:iconUrl",
  },
  moduleId: {
    _field: "moduleId",
    _type: "number",
    _caption: "s:moduleId",
  },
  navigationGroupId: {
    _field: "navigationGroupId",
    _type: "number",
    _caption: "s:navigationGroupId",
  },
} as const;

export const GetTranslationsQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id",
  },
  key: {
    _field: "key",
    _type: "string",
    _caption: "s:key",
  },
  value: {
    _field: "value",
    _type: "string",
    _caption: "s:value",
  },
} as const;