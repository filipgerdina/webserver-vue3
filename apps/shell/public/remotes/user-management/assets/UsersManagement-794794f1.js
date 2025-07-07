import { _ as __vitePreload } from './preload-helper-1a9bd443.js';
import { ref, defineComponent, openBlock, createBlock, unref, defineAsyncComponent, createElementBlock, createVNode, createCommentVNode } from 'vue';
import { useGridStore, DataGrid } from 'shared-components';
import { defineStore, getActivePinia } from 'pinia';
import { Entity, DataSource, VisualizationType, settingsService } from 'utility';
import { m as module } from './module-d9a2103b.js';

const USERS_DATA_GRID = "usersDataGrid";
const USER_ROLES_DATA_GRID = "userRolesDataGrid";

const refreshDependencies = {
  [USERS_DATA_GRID]: [USER_ROLES_DATA_GRID],
  [USER_ROLES_DATA_GRID]: []
};

const useUserManagementStore = defineStore("userManagementStore", () => {
  const usersDataGridStore = useGridStore(USERS_DATA_GRID)(getActivePinia());
  const userRolesDataGridStore = useGridStore(USER_ROLES_DATA_GRID)(getActivePinia());
  const refreshListeners = ref([]);
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(unref(DataGrid), {
        ref_key: "dataGridRef",
        ref: dataGridRef,
        config: unref(userGridConfig),
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UsersManagement",
  setup(__props) {
    const UserRolesDataGrid = defineAsyncComponent(
      () => __vitePreload(() => import('./UserRolesDataGrid-eeb66e6c.js'),true?["assets/UserRolesDataGrid-eeb66e6c.js","assets/preload-helper-1a9bd443.js","assets/module-d9a2103b.js"]:void 0)
    );
    const pageStore = useUserManagementStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1),
        unref(settingsService).activeModules.value.map((m) => m.moduleName).includes("rolesManagement") && unref(pageStore).usersDataGridStore.GetDataGridView()?.selectedRowKeys?.length ? (openBlock(), createBlock(unref(UserRolesDataGrid), { key: 0 })) : createCommentVNode("", true)
      ]);
    };
  }
});

const UsersManagement = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: 'Module' }));

export { GetRolesOfUserQueryDTOCoreListResponseFields as G, USER_ROLES_DATA_GRID as U, useUserManagementStore as a, UsersManagement as b, userEntity as u };
//# sourceMappingURL=UsersManagement-794794f1.js.map
