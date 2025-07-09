import { importShared } from './__federation_fn_import-054b33c3.js';
import { N as NAVIGATION_GROUP_PERMISSIONS_DATA_GRID, n as navigationGroupPermissionsEntity, c as GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields, d as rolesNavigationGroupsEntity, u as useRolesManagementStore } from './rolesManagement.entities-dabe9795.js';

const {VisualizationType} = await importShared('utility');
const navigationGroupPermissionsDataGrid = {
  id: NAVIGATION_GROUP_PERMISSIONS_DATA_GRID,
  title: "s:navigationGroupPermissions",
  newFormTitle: "s:addNavigationGroupPermission",
  entity: navigationGroupPermissionsEntity,
  columns: [
    {
      field: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.id,
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    {
      field: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    {
      field: { _field: "navigationGroupId", _caption: "s:navigationGroup", _type: "number" },
      visible: false,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: rolesNavigationGroupsEntity.dataSource,
        displayDataMemeber: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.name,
        idDataMember: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.id
      }
    }
  ]
};

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {DataGrid} = await importShared('shared-components');
const {ref} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DataSourcePermissionsDataGrid",
  setup(__props) {
    const pageStore = useRolesManagementStore();
    const dataGridRef = ref();
    pageStore.onRefresh(NAVIGATION_GROUP_PERMISSIONS_DATA_GRID, () => {
      dataGridRef.value?.refresh();
    });
    function onRefresh() {
      pageStore.triggerRefresh(NAVIGATION_GROUP_PERMISSIONS_DATA_GRID);
    }
    function onViewChanged(newState) {
      pageStore.navigationGroupPermissionsDataGrid.SaveDataGridView(newState);
    }
    function getAdditionalActionsParams() {
      return /* @__PURE__ */ new Map([
        ["roleId", pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? null]
      ]);
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(DataGrid), {
        ref_key: "dataGridRef",
        ref: dataGridRef,
        config: _unref(navigationGroupPermissionsDataGrid),
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
//# sourceMappingURL=DataSourcePermissionsDataGrid-84bcec2b.js.map
