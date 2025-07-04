import { r as role_mf_2_management__loadShare__vue__loadShare__ } from './role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js';
import { P as PAGE_PERMISSIONS_DATA_GRID, p as pagePermissionsEntity, b as rolePagesEntity, c as GetPagesOfRoleQueryDTOCoreListResponseFields, u as useRolesManagementStore, a as role_mf_2_management__loadShare__shared_mf_2_components__loadShare__ } from './rolesManagement.entities-c935b81a.js';
import { r as role_mf_2_management__loadShare__utility__loadShare__ } from './role_mf_2_management__loadShare__utility__loadShare__-ef83b0bf.js';
import './role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js';
import './preload-helper-376741aa.js';

const pagePermissionsDataGrid = {
  id: PAGE_PERMISSIONS_DATA_GRID,
  title: "s:pagePermissions",
  newFormTitle: "s:addPagePermission",
  entity: pagePermissionsEntity,
  columns: [
    {
      field: role_mf_2_management__loadShare__utility__loadShare__.GetPagesQueryDTOCoreListResponseFields.id,
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11
    },
    {
      field: role_mf_2_management__loadShare__utility__loadShare__.GetPagesQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: false,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11
    },
    {
      field: { _field: "pageId", _caption: "s:page", _type: "number" },
      visible: false,
      addedInEditMode: true,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: rolePagesEntity.dataSource,
        displayDataMemeber: GetPagesOfRoleQueryDTOCoreListResponseFields.name,
        idDataMember: GetPagesOfRoleQueryDTOCoreListResponseFields.id
      }
    }
  ]
};

const _sfc_main = /* @__PURE__ */ role_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "PagePermissionsDataGrid",
  setup(__props) {
    const pageStore = useRolesManagementStore();
    const dataGridRef = role_mf_2_management__loadShare__vue__loadShare__.ref();
    pageStore.onRefresh(PAGE_PERMISSIONS_DATA_GRID, () => {
      dataGridRef.value?.refresh();
    });
    function onRefresh() {
      pageStore.triggerRefresh(PAGE_PERMISSIONS_DATA_GRID);
    }
    function onViewChanged(newState) {
      pageStore.pagePermissionsDataGridStore.SaveDataGridView(newState);
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
        config: role_mf_2_management__loadShare__vue__loadShare__.unref(pagePermissionsDataGrid),
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
//# sourceMappingURL=PagePermissionsDataGrid-8c31a550.js.map
