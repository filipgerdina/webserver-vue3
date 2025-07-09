import { importShared } from './__federation_fn_import-054b33c3.js';
import { P as PAGE_PERMISSIONS_DATA_GRID, p as pagePermissionsEntity, a as rolePagesEntity, b as GetPagesOfRoleQueryDTOCoreListResponseFields, u as useRolesManagementStore } from './rolesManagement.entities-dabe9795.js';

const {GetPagesQueryDTOCoreListResponseFields,VisualizationType} = await importShared('utility');
const pagePermissionsDataGrid = {
  id: PAGE_PERMISSIONS_DATA_GRID,
  title: "s:pagePermissions",
  newFormTitle: "s:addPagePermission",
  entity: pagePermissionsEntity,
  columns: [
    {
      field: GetPagesQueryDTOCoreListResponseFields.id,
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    {
      field: GetPagesQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    {
      field: { _field: "pageId", _caption: "s:page", _type: "number" },
      visible: false,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: rolePagesEntity.dataSource,
        displayDataMemeber: GetPagesOfRoleQueryDTOCoreListResponseFields.name,
        idDataMember: GetPagesOfRoleQueryDTOCoreListResponseFields.id
      }
    }
  ]
};

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {DataGrid} = await importShared('shared-components');
const {ref} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "PagePermissionsDataGrid",
  setup(__props) {
    const pageStore = useRolesManagementStore();
    const dataGridRef = ref();
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
      return _openBlock(), _createBlock(_unref(DataGrid), {
        ref_key: "dataGridRef",
        ref: dataGridRef,
        config: _unref(pagePermissionsDataGrid),
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
//# sourceMappingURL=PagePermissionsDataGrid-3a68c602.js.map
