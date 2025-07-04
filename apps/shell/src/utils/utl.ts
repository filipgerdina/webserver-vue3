// ===== Module DTOs =====
export interface DataSourcePost {
  name?: string | null;
  urlParams?: any;
  queryParams?: any;
  bodyParams?: any;
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

export interface ModuleClass {
  /** @format int32 */
  id?: number;
  moduleName?: string | null;
  pathToModue?: string | null;
}

export interface NavigationGroupClass {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  parentGroupId?: number | null;
  name?: string | null;
  iconUrl?: string | null;
}

export interface GetPagesQueryDTO {
  /** @format int32 */
  id?: number;
  path?: string | null;
  pageComponent?: string | null;
  name?: string | null;
  iconUrl?: string | null;
  module?: ModuleClass;
  navigationGroup?: NavigationGroupClass;
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


// ===== Request DTOs =====
// Auto-generated request DTOs for Utl

export interface UtlPagesListQuery {
  getPagesQuery?: object;
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
  module: {
    _field: "module",
    _type: "ModuleClass",
    _caption: "s:module",
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
    pathToModue: {
      _field: "pathToModue",
      _type: "string",
      _caption: "s:pathToModue",
    },
  },
  navigationGroup: {
    _field: "navigationGroup",
    _type: "NavigationGroupClass",
    _caption: "s:navigationGroup",
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

