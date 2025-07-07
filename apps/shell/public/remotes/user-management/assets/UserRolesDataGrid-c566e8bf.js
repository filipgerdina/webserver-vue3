import { defineComponent, ref, openBlock, createBlock, unref } from 'vue';
import { DataGrid } from 'shared-components';
import { U as USER_ROLES_DATA_GRID, u as userEntity, G as GetRolesOfUserQueryDTOCoreListResponseFields, a as useUserManagementStore } from './UsersManagement-ae2f625c.js';
import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-319ee11e.js';
import './preload-helper-1a9bd443.js';
import 'pinia';
import './module-8931beaf.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';

let module = user_mf_2_management__loadShare__utility__loadShare__.settingsService.activeModules.value.find((m) => m.moduleName == "rolesManagement");
if (!module) {
  throw new Error("Module is undefined or null");
}
let selectionFromDS = await user_mf_2_management__loadShare__utility__loadShare__.loadRemoteModule({
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
      visualizationType: user_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: false
    },
    {
      field: { _field: "roleId", _caption: "s:role", _type: "number" },
      visible: false,
      visualizationType: user_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value3,
      addedInEditMode: true,
      visibleInEditMode: true,
      selectionFromDataSource: selectionFromDS.selectionFromDataSource
    },
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.name,
      visible: true,
      visualizationType: user_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.defaultPage,
      visible: true,
      visualizationType: user_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11,
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
//# sourceMappingURL=UserRolesDataGrid-c566e8bf.js.map
