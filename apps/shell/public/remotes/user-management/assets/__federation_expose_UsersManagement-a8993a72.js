import { _ as __vitePreload } from './preload-helper-1a9bd443.js';
import { importShared } from './__federation_fn_import-054b33c3.js';
import { m as module } from './module-2c7bbc93.js';

const USERS_DATA_GRID = "usersDataGrid";
const USER_ROLES_DATA_GRID = "userRolesDataGrid";

const refreshDependencies = {
  [USERS_DATA_GRID]: [USER_ROLES_DATA_GRID],
  [USER_ROLES_DATA_GRID]: []
};

const {defineStore,getActivePinia} = await importShared('pinia');

const {ref: ref$1} = await importShared('vue');
const {useGridStore} = await importShared('shared-components');
const useUserManagementStore = defineStore("userManagementStore", () => {
  const usersDataGridStore = useGridStore(USERS_DATA_GRID)(getActivePinia());
  const userRolesDataGridStore = useGridStore(USER_ROLES_DATA_GRID)(getActivePinia());
  const refreshListeners = ref$1([]);
  function onRefresh(componentId, listener) {
    refreshListeners.value.push({
      componentId,
      callback: listener
    });
  }
  function triggerRefresh(componentId) {
    let filteredCallbacks = [];
    filteredCallbacks = refreshListeners.value.filter((rl) => refreshDependencies[componentId].includes(rl.componentId)).map((rl) => rl.callback);
    filteredCallbacks.forEach((cb) => {
      cb();
    });
  }
  return {
    onRefresh,
    triggerRefresh,
    usersDataGridStore,
    userRolesDataGridStore
  };
});

const GetRolesOfUserQueryDTOCoreListResponseFields = {
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
  roleId: {
    _field: "roleId",
    _type: "number",
    _caption: "s:roleId"
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
const GetUsersQueryDTOCoreListResponseFields = {
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
  username: {
    _field: "username",
    _type: "string",
    _caption: "s:username"
  },
  displayName: {
    _field: "displayName",
    _type: "string",
    _caption: "s:displayName"
  },
  email: {
    _field: "email",
    _type: "string",
    _caption: "s:email"
  },
  isSystem: {
    _field: "isSystem",
    _type: "boolean",
    _caption: "s:isSystem"
  },
  isLocked: {
    _field: "isLocked",
    _type: "boolean",
    _caption: "s:isLocked"
  },
  added: {
    _field: "added",
    _type: "string",
    _caption: "s:added"
  },
  domain: {
    _field: "domain",
    _type: "string",
    _caption: "s:domain"
  }
};

const {DataSource: DataSource$1,Entity: Entity$1} = await importShared('utility');
const UserEntity = new Entity$1({
  dataSource: new DataSource$1({
    name: "users",
    method: "GET"
  }),
  entityCode: "USERS",
  module
});

const {DataSource,Entity} = await importShared('utility');
const UserRolesEntity = new Entity({
  entityCode: "USER_ROLES",
  module,
  dataSource: new DataSource({
    name: "userRoles",
    method: "GET",
    translatableResponseFields: ["data.defaultPage"]
  })
});

const pageStore = useUserManagementStore();
const userEntity = UserEntity;
const userRolesEntity = UserRolesEntity;
userRolesEntity.dataSource.getQueryParams = () => ({
  Id: pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? void 0
});

const {VisualizationType} = await importShared('utility');

const userGridConfig = {
  id: USERS_DATA_GRID,
  title: "s:users",
  entity: userEntity,
  newFormTitle: "s:addUser",
  columns: [
    {
      field: GetUsersQueryDTOCoreListResponseFields.id,
      visible: false,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: false
    },
    {
      field: GetUsersQueryDTOCoreListResponseFields.username,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: true
    },
    {
      field: { _caption: "s:password", _field: "password", _type: "string" },
      visible: false,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: true
    },
    {
      field: GetUsersQueryDTOCoreListResponseFields.displayName,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    {
      field: GetUsersQueryDTOCoreListResponseFields.email,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    {
      field: GetUsersQueryDTOCoreListResponseFields.isSystem,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    {
      field: GetUsersQueryDTOCoreListResponseFields.isLocked,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    }
    // { 
    //   field: GetUsersQueryDTOCoreListResponseFields.domain,
    //   visible: true,
    //   visualizationType: VisualizationType.Value11,
    //   addedInEditMode: false,
    //   visibleInEditMode: false
    // }
  ]
};

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const {DataGrid} = await importShared('shared-components');
const {ref} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "UsersDataGrid",
  setup(__props) {
    const pageStore = useUserManagementStore();
    const dataGridRef = ref();
    function onUserSelected(user) {
      const id = user?.id ?? null;
      let view = pageStore.usersDataGridStore.GetDataGridView();
      view.selectedRowKeys = [id];
      pageStore.usersDataGridStore.SaveDataGridView(view);
      onRefresh();
    }
    function onRefresh() {
      pageStore.triggerRefresh(USERS_DATA_GRID);
    }
    function onViewChanged(newState) {
      pageStore.usersDataGridStore.SaveDataGridView(newState);
    }
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_unref$1(DataGrid), {
        ref_key: "dataGridRef",
        ref: dataGridRef,
        config: _unref$1(userGridConfig),
        "can-delete": false,
        "can-update": false,
        onRefresh,
        onSelected: onUserSelected,
        onViewChanged
      }, null, 8, ["config"]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,unref:_unref,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { style: { "width": "100%" } };
const {settingsService} = await importShared('utility');

const {defineAsyncComponent} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "UsersManagement",
  setup(__props) {
    const UserRolesDataGrid = defineAsyncComponent(
      () => __vitePreload(() => import('./UserRolesDataGrid-71ed5f67.js'),true?["assets/UserRolesDataGrid-71ed5f67.js","assets/__federation_fn_import-054b33c3.js"]:void 0)
    );
    const pageStore = useUserManagementStore();
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_sfc_main$1),
        _unref(settingsService).activeModules.value.map((m) => m.moduleName).includes("rolesManagement") && _unref(pageStore).usersDataGridStore.GetDataGridView()?.selectedRowKeys?.length ? (_openBlock(), _createBlock(_unref(UserRolesDataGrid), { key: 0 })) : _createCommentVNode("", true)
      ]);
    };
  }
});

export { GetRolesOfUserQueryDTOCoreListResponseFields as G, USER_ROLES_DATA_GRID as U, useUserManagementStore as a, _sfc_main as default, userRolesEntity as u };
//# sourceMappingURL=__federation_expose_UsersManagement-a8993a72.js.map
