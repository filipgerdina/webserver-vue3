import { u as user_mf_2_management__loadShare__vue__loadShare__ } from './user_mf_2_management__loadShare__vue__loadShare__-e47a04a9.js';
import { u as user_mf_2_management__loadShare__shared_mf_2_components__loadShare__ } from './module-00833208.js';
import { U as USER_ROLES_DATA_GRID, u as userEntity, G as GetRolesOfUserQueryDTOCoreListResponseFields, a as useUserManagementStore } from './UsersManagement-dd38c191.js';
import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-ba6f8ca5.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import './preload-helper-1a9bd443.js';

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

const _sfc_main = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "UserRolesDataGrid",
  setup(__props) {
    const pageStore = useUserManagementStore();
    const rolesGridRef = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
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
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare__shared_mf_2_components__loadShare__.DataGrid), {
        ref_key: "rolesGridRef",
        ref: rolesGridRef,
        config: user_mf_2_management__loadShare__vue__loadShare__.unref(rolesByUserGridConfig),
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
//# sourceMappingURL=UserRolesDataGrid-65f5a5cd.js.map
