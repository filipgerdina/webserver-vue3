import { importShared } from './__federation_fn_import-054b33c3.js';

const ROLES_DATA_GRID = "rolesDataGrid";
const PAGE_PERMISSIONS_DATA_GRID = "pagePermissionsDataGrid";
const NAVIGATION_GROUP_PERMISSIONS_DATA_GRID = "navigationGroupPermissionsDataGrid";

const refreshDependencies = {
  [ROLES_DATA_GRID]: [PAGE_PERMISSIONS_DATA_GRID, NAVIGATION_GROUP_PERMISSIONS_DATA_GRID]
};

const {defineStore,getActivePinia} = await importShared('pinia');

const {ref} = await importShared('vue');
const {useGridStore} = await importShared('shared-components');
const useRolesManagementStore = defineStore("rolesManagementStore", () => {
  const rolesDataGridStore = useGridStore(ROLES_DATA_GRID)(getActivePinia());
  const pagePermissionsDataGridStore = useGridStore(PAGE_PERMISSIONS_DATA_GRID)(getActivePinia());
  const dataSourcePermissionsDataGrid = useGridStore(NAVIGATION_GROUP_PERMISSIONS_DATA_GRID)(getActivePinia());
  const refreshListeners = ref([]);
  function onRefresh(componentId, listener) {
    refreshListeners.value.push({
      componentId,
      callback: listener
    });
  }
  function triggerRefresh(componentId) {
    let filteredCallbacks = [];
    if (!refreshDependencies[componentId])
      return;
    filteredCallbacks = refreshListeners.value.filter((rl) => refreshDependencies[componentId].includes(rl.componentId)).map((rl) => rl.callback);
    filteredCallbacks.forEach((cb) => {
      cb();
    });
  }
  return {
    onRefresh,
    triggerRefresh,
    rolesDataGridStore,
    pagePermissionsDataGridStore,
    navigationGroupPermissionsDataGrid: dataSourcePermissionsDataGrid
  };
});

const GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp"
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId"
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo"
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd"
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd"
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd"
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id"
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name"
  }
};
const GetPagesOfRoleQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp"
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId"
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo"
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd"
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd"
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd"
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id"
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name"
  }
};
const GetRolesQueryDTOCoreListResponseFields = {
  utcRecordTimestamp: {
    _field: "utcRecordTimestamp",
    _type: "string",
    _caption: "s:utcRecordTimestamp"
  },
  userId: {
    _field: "userId",
    _type: "number",
    _caption: "s:userId"
  },
  userInfo: {
    _field: "userInfo",
    _type: "string",
    _caption: "s:userInfo"
  },
  utcRecordTimestampUpd: {
    _field: "utcRecordTimestampUpd",
    _type: "string",
    _caption: "s:utcRecordTimestampUpd"
  },
  userIdUpd: {
    _field: "userIdUpd",
    _type: "number",
    _caption: "s:userIdUpd"
  },
  userInfoUpd: {
    _field: "userInfoUpd",
    _type: "string",
    _caption: "s:userInfoUpd"
  },
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id"
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name"
  },
  defaultPage: {
    _field: "defaultPage",
    _type: "string",
    _caption: "s:defaultPage"
  }
};

const {DataSource: DataSource$5,Module} = await importShared('utility');

const module = new Module({
  moduleActionsDS: new DataSource$5({
    name: "rolesModuleActions",
    method: "GET",
    translatableResponseFields: ["data.actionName"]
  }),
  moduleActionFormsDS: new DataSource$5({
    name: "rolesModuleActionForms",
    method: "GET",
    translatableResponseFields: ["data.controls.properties.values.displayValue", "data.controls.properties.values.name", "data.title", "data.controls.description"]
  })
});

const {DataSource: DataSource$4} = await importShared('utility');

const {Entity: Entity$4} = await importShared('utility');
const NavigationGroupPermissionsEntity = new Entity$4({
  dataSource: new DataSource$4({
    name: "navigationGroupPermissions",
    method: "GET",
    translatableResponseFields: ["data.name"]
  }),
  entityCode: "ROLE_NAVIGATION_GROUP_PERMISSIONS",
  module
});

const {DataSource: DataSource$3} = await importShared('utility');

const {Entity: Entity$3} = await importShared('utility');
const PagePermissionsEntity = new Entity$3({
  dataSource: new DataSource$3({
    name: "pagePermissions",
    method: "GET",
    translatableResponseFields: ["data.name"]
  }),
  entityCode: "ROLE_PAGE_PERMISSIONS",
  module
});

const {DataSource: DataSource$2} = await importShared('utility');

const {Entity: Entity$2} = await importShared('utility');
const RolesEntity = new Entity$2({
  dataSource: new DataSource$2({
    name: "roles",
    method: "GET",
    translatableResponseFields: ["data.defaultPage"]
  }),
  entityCode: "ROLES",
  module
});

const {DataSource: DataSource$1} = await importShared('utility');

const {Entity: Entity$1} = await importShared('utility');
const RoleNavigationGroupsEntity = new Entity$1({
  dataSource: new DataSource$1({
    name: "roleNavigationGroups",
    method: "GET",
    translatableResponseFields: ["data.name"]
  }),
  entityCode: "ROLE_NAVIGATION_GROUPS",
  module
});

const {DataSource} = await importShared('utility');

const {Entity} = await importShared('utility');
const RolePagesEntity = new Entity({
  dataSource: new DataSource({
    name: "rolePages",
    method: "GET",
    translatableResponseFields: ["data.name"]
  }),
  entityCode: "ROLE_PAGES",
  module
});

const rolesEntity = RolesEntity;
const pagePermissionsEntity = PagePermissionsEntity;
const navigationGroupPermissionsEntity = NavigationGroupPermissionsEntity;
const rolePagesEntity = RolePagesEntity;
const rolesNavigationGroupsEntity = RoleNavigationGroupsEntity;
const pageStore = useRolesManagementStore();
pagePermissionsEntity.dataSource.getQueryParams = () => ({
  RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? void 0
});
navigationGroupPermissionsEntity.dataSource.getQueryParams = () => ({
  RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? void 0
});
rolePagesEntity.dataSource.getQueryParams = () => ({
  RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? void 0
});
rolesNavigationGroupsEntity.dataSource.getQueryParams = () => ({
  RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? void 0
});

export { GetRolesQueryDTOCoreListResponseFields as G, NAVIGATION_GROUP_PERMISSIONS_DATA_GRID as N, PAGE_PERMISSIONS_DATA_GRID as P, ROLES_DATA_GRID as R, rolePagesEntity as a, GetPagesOfRoleQueryDTOCoreListResponseFields as b, GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields as c, rolesNavigationGroupsEntity as d, navigationGroupPermissionsEntity as n, pagePermissionsEntity as p, rolesEntity as r, useRolesManagementStore as u };
//# sourceMappingURL=rolesManagement.entities-dabe9795.js.map
