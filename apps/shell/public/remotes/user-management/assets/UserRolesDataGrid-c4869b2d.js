import { importShared } from './__federation_fn_import-054b33c3.js';
import { U as USER_ROLES_DATA_GRID, u as userEntity, G as GetRolesOfUserQueryDTOCoreListResponseFields, a as useUserManagementStore } from './__federation_expose_UsersManagement-fb9ebe3a.js';

const {loadRemoteModule,settingsService,VisualizationType} = await importShared('utility');

let module = settingsService.activeModules.value.find((m) => m.moduleName == "rolesManagement");
if (!module) {
  throw new Error("Module is undefined or null");
}
let selectionFromDS = await loadRemoteModule(module.pathToModule, module.moduleName, "./rolesSelectionFromDataSource");
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

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {DataGrid} = await importShared('shared-components');
const {ref} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
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
      return _openBlock(), _createBlock(_unref(DataGrid), {
        ref_key: "rolesGridRef",
        ref: rolesGridRef,
        config: _unref(rolesByUserGridConfig),
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
//# sourceMappingURL=UserRolesDataGrid-c4869b2d.js.map
