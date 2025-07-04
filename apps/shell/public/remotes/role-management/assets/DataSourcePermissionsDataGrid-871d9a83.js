import { r as role_mf_2_management__loadShare__vue__loadShare__ } from './role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js';
import { N as NAVIGATION_GROUP_PERMISSIONS_DATA_GRID, n as navigationGroupPermissionsEntity, d as GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields, e as rolesNavigationGroupsEntity, u as useRolesManagementStore, a as role_mf_2_management__loadShare__shared_mf_2_components__loadShare__ } from './rolesManagement.entities-c935b81a.js';
import { r as role_mf_2_management__loadShare__utility__loadShare__ } from './role_mf_2_management__loadShare__utility__loadShare__-ef83b0bf.js';
import './role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js';
import './preload-helper-376741aa.js';

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
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11
    },
    {
      field: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: false,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11
    },
    {
      field: { _field: "navigationGroupId", _caption: "s:navigationGroup", _type: "number" },
      visible: false,
      addedInEditMode: true,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: rolesNavigationGroupsEntity.dataSource,
        displayDataMemeber: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.name,
        idDataMember: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.id
      }
    }
  ]
};

const _sfc_main = /* @__PURE__ */ role_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "DataSourcePermissionsDataGrid",
  setup(__props) {
    const pageStore = useRolesManagementStore();
    const dataGridRef = role_mf_2_management__loadShare__vue__loadShare__.ref();
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
      return role_mf_2_management__loadShare__vue__loadShare__.openBlock(), role_mf_2_management__loadShare__vue__loadShare__.createBlock(role_mf_2_management__loadShare__vue__loadShare__.unref(role_mf_2_management__loadShare__shared_mf_2_components__loadShare__.DataGrid), {
        ref_key: "dataGridRef",
        ref: dataGridRef,
        config: role_mf_2_management__loadShare__vue__loadShare__.unref(navigationGroupPermissionsDataGrid),
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
//# sourceMappingURL=DataSourcePermissionsDataGrid-871d9a83.js.map
