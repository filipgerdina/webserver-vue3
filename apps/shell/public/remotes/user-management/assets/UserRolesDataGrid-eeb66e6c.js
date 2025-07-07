import { defineComponent, ref, openBlock, createBlock, unref } from 'vue';
import { DataGrid } from 'shared-components';
import { U as USER_ROLES_DATA_GRID, u as userEntity, G as GetRolesOfUserQueryDTOCoreListResponseFields, a as useUserManagementStore } from './UsersManagement-794794f1.js';
import { settingsService, loadRemoteModule, VisualizationType } from 'utility';
import './preload-helper-1a9bd443.js';
import 'pinia';
import './module-d9a2103b.js';

let module = settingsService.activeModules.value.find((m) => m.moduleName == "rolesManagement");
if (!module) {
  throw new Error("Module is undefined or null");
}
let selectionFromDS = await loadRemoteModule({
  remoteUrl: module.pathToModule,
  remoteName: module.moduleName,
  exposedModule: "./rolesSelectionFromDataSource"
});
const rolesByUserGridConfig = {
  id: USER_ROLES_DATA_GRID,
  title: "s:userRoles",
  newFormTitle: "s:assignRoleToUser",
  entity: userEntity.subEntities.userRoles,
  columns: [
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.id,
      visible: false,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: false
    },
    {
      field: { _field: "roleId", _caption: "s:role", _type: "number" },
      visible: false,
      visualizationType: VisualizationType.Value3,
      addedInEditMode: true,
      visibleInEditMode: true,
      selectionFromDataSource: selectionFromDS.selectionFromDataSource
    },
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.name,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.defaultPage,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    }
  ]
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserRolesDataGrid",
  setup(__props) {
    const pageStore = useUserManagementStore();
    const rolesGridRef = ref(null);
    pageStore.onRefresh(USER_ROLES_DATA_GRID, () => {
      rolesGridRef.value?.refresh();
    });
    function onViewChanged(newState) {
      pageStore.userRolesDataGridStore.SaveDataGridView(newState);
    }
    function onRefresh() {
      pageStore.triggerRefresh(USER_ROLES_DATA_GRID);
    }
    function getAdditionalActionsParams() {
      return /* @__PURE__ */ new Map([
        ["userId", pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? null]
      ]);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DataGrid), {
        ref_key: "rolesGridRef",
        ref: rolesGridRef,
        config: unref(rolesByUserGridConfig),
        "can-delete": false,
        "can-update": false,
        "additional-extra-params-request-params": getAdditionalActionsParams,
        onRefresh,
        onViewChanged
      }, null, 8, ["config"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=UserRolesDataGrid-eeb66e6c.js.map
