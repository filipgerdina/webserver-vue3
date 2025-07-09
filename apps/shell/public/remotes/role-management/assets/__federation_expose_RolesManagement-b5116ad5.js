import { _ as __vitePreload } from './preload-helper-376741aa.js';
import { importShared } from './__federation_fn_import-054b33c3.js';
import { R as ROLES_DATA_GRID, r as rolesEntity, G as GetRolesQueryDTOCoreListResponseFields, u as useRolesManagementStore } from './rolesManagement.entities-dabe9795.js';

const {GetPagesQueryDTOCoreListResponseFields,pagesDataSource,VisualizationType} = await importShared('utility');

const rolesGridConfig = {
  id: ROLES_DATA_GRID,
  title: "s:rolessss",
  newFormTitle: "s:newRole",
  entity: rolesEntity,
  columns: [
    {
      field: GetRolesQueryDTOCoreListResponseFields.id,
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    {
      field: GetRolesQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value11
    },
    {
      field: GetRolesQueryDTOCoreListResponseFields.defaultPage,
      visible: true,
      addedInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    {
      field: { _field: "defaultPageId", _caption: "s:defaultPage", _type: "number" },
      visible: false,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: pagesDataSource,
        displayDataMemeber: GetPagesQueryDTOCoreListResponseFields.name,
        idDataMember: GetPagesQueryDTOCoreListResponseFields.id
      }
    }
  ]
};

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createBlock:_createBlock} = await importShared('vue');

const {DataGrid} = await importShared('shared-components');
const {ref} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "RolesDataGrid",
  setup(__props) {
    const pageStore = useRolesManagementStore();
    const dataGridRef = ref();
    function onRefresh() {
      pageStore.triggerRefresh(ROLES_DATA_GRID);
    }
    function onSelection(user) {
      const id = user?.id ?? null;
      let view = pageStore.rolesDataGridStore.GetDataGridView();
      view.selectedRowKeys = [id];
      pageStore.rolesDataGridStore.SaveDataGridView(view);
      onRefresh();
    }
    function onViewChanged(newState) {
      pageStore.rolesDataGridStore.SaveDataGridView(newState);
    }
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock(_unref$1(DataGrid), {
        ref_key: "dataGridRef",
        ref: dataGridRef,
        config: _unref$1(rolesGridConfig),
        "can-delete": false,
        "can-update": false,
        onRefresh,
        onSelected: onSelection,
        onViewChanged
      }, null, 8, ["config"]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = { class: "container-fluid" };
const _hoisted_2 = {
  key: 0,
  class: "row mt-4"
};
const _hoisted_3 = { class: "col-md-6" };
const _hoisted_4 = { class: "col-md-6" };
const {defineAsyncComponent} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "RolesManagement",
  setup(__props) {
    const PagePermissionsDataGrid = defineAsyncComponent(
      () => __vitePreload(() => import('./PagePermissionsDataGrid-3a68c602.js'),true?["assets/PagePermissionsDataGrid-3a68c602.js","assets/__federation_fn_import-054b33c3.js","assets/rolesManagement.entities-dabe9795.js"]:void 0)
    );
    const DataSourcePermissionsDataGrid = defineAsyncComponent(
      () => __vitePreload(() => import('./DataSourcePermissionsDataGrid-84bcec2b.js'),true?["assets/DataSourcePermissionsDataGrid-84bcec2b.js","assets/__federation_fn_import-054b33c3.js","assets/rolesManagement.entities-dabe9795.js"]:void 0)
    );
    const pageStore = useRolesManagementStore();
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_sfc_main$1),
        _unref(pageStore).rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.length ? (_openBlock(), _createElementBlock("div", _hoisted_2, [
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_unref(PagePermissionsDataGrid))
          ]),
          _createElementVNode("div", _hoisted_4, [
            _createVNode(_unref(DataSourcePermissionsDataGrid))
          ])
        ])) : _createCommentVNode("", true)
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=__federation_expose_RolesManagement-b5116ad5.js.map
