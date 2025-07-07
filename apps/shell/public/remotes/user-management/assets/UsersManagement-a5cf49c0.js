import { _ as __vitePreload } from './preload-helper-1a9bd443.js';
import { u as user_mf_2_management__loadShare__vue__loadShare__ } from './user_mf_2_management__loadShare__vue__loadShare__-2c98848e.js';
import { u as user_mf_2_management__loadShare__shared_mf_2_components__loadShare__, m as module } from './module-617be610.js';
import { i as index_cjs, u as user_mf_2_management__mf_v__runtimeInit__mf_v__ } from './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import { E as Entity, D as DataSource, V as VisualizationType, s as settingsService } from './index.es-9142de90.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = user_mf_2_management__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("pinia", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^3.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var user_mf_2_management__loadShare__pinia__loadShare__ = exportModule;

const USERS_DATA_GRID = "usersDataGrid";
const USER_ROLES_DATA_GRID = "userRolesDataGrid";

const refreshDependencies = {
  [USERS_DATA_GRID]: [USER_ROLES_DATA_GRID],
  [USER_ROLES_DATA_GRID]: []
};

const useUserManagementStore = user_mf_2_management__loadShare__pinia__loadShare__.defineStore("userManagementStore", () => {
  const usersDataGridStore = user_mf_2_management__loadShare__shared_mf_2_components__loadShare__.useGridStore(USERS_DATA_GRID)(user_mf_2_management__loadShare__pinia__loadShare__.getActivePinia());
  const userRolesDataGridStore = user_mf_2_management__loadShare__shared_mf_2_components__loadShare__.useGridStore(USER_ROLES_DATA_GRID)(user_mf_2_management__loadShare__pinia__loadShare__.getActivePinia());
  const refreshListeners = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
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

const userRoles = new Entity({
  entityCode: "USER_ROLES",
  module,
  dataSource: new DataSource({
    name: "userRoles",
    method: "GET",
    translatableResponseFields: ["data.defaultPage"]
  })
});
const UserEntity = new Entity({
  dataSource: new DataSource({
    name: "users",
    method: "GET"
  }),
  entityCode: "USERS",
  module,
  subEntities: {
    userRoles
  }
});

const pageStore = useUserManagementStore();
const userEntity = UserEntity;
userEntity.subEntities.userRoles.dataSource.getQueryParams = () => ({
  Id: pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? void 0
});

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

const _sfc_main$1 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "UsersDataGrid",
  setup(__props) {
    const pageStore = useUserManagementStore();
    const dataGridRef = user_mf_2_management__loadShare__vue__loadShare__.ref();
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
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare__shared_mf_2_components__loadShare__.DataGrid), {
        ref_key: "dataGridRef",
        ref: dataGridRef,
        config: user_mf_2_management__loadShare__vue__loadShare__.unref(userGridConfig),
        "can-delete": false,
        "can-update": false,
        onRefresh,
        onSelected: onUserSelected,
        onViewChanged
      }, null, 8, ["config"]);
    };
  }
});

const _hoisted_1 = { style: { "width": "100%" } };
const _sfc_main = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "UsersManagement",
  setup(__props) {
    const UserRolesDataGrid = user_mf_2_management__loadShare__vue__loadShare__.defineAsyncComponent(
      () => __vitePreload(() => import('./UserRolesDataGrid-c6aa43ba.js'),true?["assets/UserRolesDataGrid-c6aa43ba.js","assets/user_mf_2_management__loadShare__vue__loadShare__-2c98848e.js","assets/user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js","assets/preload-helper-1a9bd443.js","assets/module-617be610.js","assets/index.es-9142de90.js"]:void 0)
    );
    const pageStore = useUserManagementStore();
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", _hoisted_1, [
        user_mf_2_management__loadShare__vue__loadShare__.createVNode(_sfc_main$1),
        user_mf_2_management__loadShare__vue__loadShare__.unref(settingsService).activeModules.value.map((m) => m.moduleName).includes("rolesManagement") && user_mf_2_management__loadShare__vue__loadShare__.unref(pageStore).usersDataGridStore.GetDataGridView()?.selectedRowKeys?.length ? (user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(UserRolesDataGrid), { key: 0 })) : user_mf_2_management__loadShare__vue__loadShare__.createCommentVNode("", true)
      ]);
    };
  }
});

const UsersManagement = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: 'Module' }));

export { GetRolesOfUserQueryDTOCoreListResponseFields as G, USER_ROLES_DATA_GRID as U, useUserManagementStore as a, UsersManagement as b, userEntity as u };
//# sourceMappingURL=UsersManagement-a5cf49c0.js.map
