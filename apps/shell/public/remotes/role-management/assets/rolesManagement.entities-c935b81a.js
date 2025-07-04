import { r as role_mf_2_management__loadShare__utility__loadShare__ } from './role_mf_2_management__loadShare__utility__loadShare__-ef83b0bf.js';
import { i as index_cjs, r as role_mf_2_management__mf_v__runtimeInit__mf_v__ } from './role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js';
import { r as role_mf_2_management__loadShare__vue__loadShare__ } from './role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare: loadShare$1} = index_cjs;
    const {initPromise: initPromise$1} = role_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res$1 = initPromise$1.then(_ => loadShare$1("shared-components", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: undefined,
      requiredVersion: "^0.0.1"
    }}}));
    const exportModule$1 = await res$1.then(factory => factory());
    var role_mf_2_management__loadShare__shared_mf_2_components__loadShare__ = exportModule$1;

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = role_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("pinia", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: undefined,
      requiredVersion: "^3.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var role_mf_2_management__loadShare__pinia__loadShare__ = exportModule;

const ROLES_DATA_GRID = "rolesDataGrid";
const PAGE_PERMISSIONS_DATA_GRID = "pagePermissionsDataGrid";
const NAVIGATION_GROUP_PERMISSIONS_DATA_GRID = "navigationGroupPermissionsDataGrid";

const refreshDependencies = {
  [ROLES_DATA_GRID]: [PAGE_PERMISSIONS_DATA_GRID, NAVIGATION_GROUP_PERMISSIONS_DATA_GRID]
};

const useRolesManagementStore = role_mf_2_management__loadShare__pinia__loadShare__.defineStore("rolesManagementStore", () => {
  const rolesDataGridStore = role_mf_2_management__loadShare__shared_mf_2_components__loadShare__.useGridStore(ROLES_DATA_GRID)(role_mf_2_management__loadShare__pinia__loadShare__.getActivePinia());
  const pagePermissionsDataGridStore = role_mf_2_management__loadShare__shared_mf_2_components__loadShare__.useGridStore(PAGE_PERMISSIONS_DATA_GRID)(role_mf_2_management__loadShare__pinia__loadShare__.getActivePinia());
  const dataSourcePermissionsDataGrid = role_mf_2_management__loadShare__shared_mf_2_components__loadShare__.useGridStore(NAVIGATION_GROUP_PERMISSIONS_DATA_GRID)(role_mf_2_management__loadShare__pinia__loadShare__.getActivePinia());
  const refreshListeners = role_mf_2_management__loadShare__vue__loadShare__.ref([]);
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

const module = new role_mf_2_management__loadShare__utility__loadShare__.Module({
  moduleActionsDS: new role_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "rolesModuleActions",
    method: "GET",
    translatableResponseFields: ["data.actionName"]
  }),
  moduleActionFormsDS: new role_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "rolesModuleActionForms",
    method: "GET",
    translatableResponseFields: ["data.controls.properties.values.displayValue", "data.controls.properties.values.name", "data.title", "data.controls.description"]
  })
});

const NavigationGroupPermissionsEntity = new role_mf_2_management__loadShare__utility__loadShare__.Entity({
  dataSource: new role_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "navigationGroupPermissions",
    method: "GET",
    translatableResponseFields: ["data.name"]
  }),
  entityCode: "ROLE_NAVIGATION_GROUP_PERMISSIONS",
  module
});

const PagePermissionsEntity = new role_mf_2_management__loadShare__utility__loadShare__.Entity({
  dataSource: new role_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "pagePermissions",
    method: "GET",
    translatableResponseFields: ["data.name"]
  }),
  entityCode: "ROLE_PAGE_PERMISSIONS",
  module
});

const RolesEntity = new role_mf_2_management__loadShare__utility__loadShare__.Entity({
  dataSource: new role_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "roles",
    method: "GET",
    translatableResponseFields: ["data.defaultPage"]
  }),
  entityCode: "ROLES",
  module
});

const RoleNavigationGroupsEntity = new role_mf_2_management__loadShare__utility__loadShare__.Entity({
  dataSource: new role_mf_2_management__loadShare__utility__loadShare__.DataSource({
    name: "roleNavigationGroups",
    method: "GET",
    translatableResponseFields: ["data.name"]
  }),
  entityCode: "ROLE_NAVIGATION_GROUPS",
  module
});

const RolePagesEntity = new role_mf_2_management__loadShare__utility__loadShare__.Entity({
  dataSource: new role_mf_2_management__loadShare__utility__loadShare__.DataSource({
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

export { GetRolesQueryDTOCoreListResponseFields as G, NAVIGATION_GROUP_PERMISSIONS_DATA_GRID as N, PAGE_PERMISSIONS_DATA_GRID as P, ROLES_DATA_GRID as R, role_mf_2_management__loadShare__shared_mf_2_components__loadShare__ as a, rolePagesEntity as b, GetPagesOfRoleQueryDTOCoreListResponseFields as c, GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields as d, rolesNavigationGroupsEntity as e, navigationGroupPermissionsEntity as n, pagePermissionsEntity as p, rolesEntity as r, useRolesManagementStore as u };
//# sourceMappingURL=rolesManagement.entities-c935b81a.js.map
