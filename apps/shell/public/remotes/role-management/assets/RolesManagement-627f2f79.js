import { _ as __vitePreload } from './preload-helper-376741aa.js';
import { r as role_mf_2_management__loadShare__vue__loadShare__ } from './role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js';
import { R as ROLES_DATA_GRID, r as rolesEntity, G as GetRolesQueryDTOCoreListResponseFields, u as useRolesManagementStore, a as role_mf_2_management__loadShare__shared_mf_2_components__loadShare__ } from './rolesManagement.entities-c935b81a.js';
import { r as role_mf_2_management__loadShare__utility__loadShare__ } from './role_mf_2_management__loadShare__utility__loadShare__-ef83b0bf.js';
import { r as role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__ } from './role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__-59bba195.js';
import './role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js';

const rolesGridConfig = {
  id: ROLES_DATA_GRID,
  title: "s:rolesss",
  newFormTitle: "s:newRole",
  entity: rolesEntity,
  columns: [
    {
      field: GetRolesQueryDTOCoreListResponseFields.id,
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11
    },
    {
      field: GetRolesQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: true,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11
    },
    {
      field: GetRolesQueryDTOCoreListResponseFields.defaultPage,
      visible: true,
      addedInEditMode: false,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value11
    },
    {
      field: { _field: "defaultPageId", _caption: "s:defaultPage", _type: "number" },
      visible: false,
      addedInEditMode: true,
      visualizationType: role_mf_2_management__loadShare__utility__loadShare__.VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: role_mf_2_management__loadShare__utility__loadShare__.pagesDataSource,
        displayDataMemeber: role_mf_2_management__loadShare__utility__loadShare__.GetPagesQueryDTOCoreListResponseFields.name,
        idDataMember: role_mf_2_management__loadShare__utility__loadShare__.GetPagesQueryDTOCoreListResponseFields.id
      }
    }
  ]
};

const _sfc_main$1 = /* @__PURE__ */ role_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "RolesDataGrid",
  setup(__props) {
    const pageStore = useRolesManagementStore();
    const dataGridRef = role_mf_2_management__loadShare__vue__loadShare__.ref();
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
      return role_mf_2_management__loadShare__vue__loadShare__.openBlock(), role_mf_2_management__loadShare__vue__loadShare__.createElementBlock(role_mf_2_management__loadShare__vue__loadShare__.Fragment, null, [
        role_mf_2_management__loadShare__vue__loadShare__.createVNode(role_mf_2_management__loadShare__vue__loadShare__.unref(role_mf_2_management__loadShare__shared_mf_2_components__loadShare__.DataGrid), {
          ref_key: "dataGridRef",
          ref: dataGridRef,
          config: role_mf_2_management__loadShare__vue__loadShare__.unref(rolesGridConfig),
          "can-delete": false,
          "can-update": false,
          onRefresh,
          onSelected: onSelection,
          onViewChanged
        }, null, 8, ["config"]),
        role_mf_2_management__loadShare__vue__loadShare__.createVNode(role_mf_2_management__loadShare__vue__loadShare__.unref(role_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxButton), { text: "hlsdfhsl" })
      ], 64);
    };
  }
});

const _hoisted_1 = { class: "container-fluid" };
const _hoisted_2 = {
  key: 0,
  class: "row mt-4"
};
const _hoisted_3 = { class: "col-md-6" };
const _hoisted_4 = { class: "col-md-6" };
const _sfc_main = /* @__PURE__ */ role_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "RolesManagement",
  setup(__props) {
    const PagePermissionsDataGrid = role_mf_2_management__loadShare__vue__loadShare__.defineAsyncComponent(
      () => __vitePreload(() => import('./PagePermissionsDataGrid-8c31a550.js'),true?["assets/PagePermissionsDataGrid-8c31a550.js","assets/role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js","assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js","assets/preload-helper-376741aa.js","assets/rolesManagement.entities-c935b81a.js","assets/role_mf_2_management__loadShare__utility__loadShare__-ef83b0bf.js"]:void 0)
    );
    const DataSourcePermissionsDataGrid = role_mf_2_management__loadShare__vue__loadShare__.defineAsyncComponent(
      () => __vitePreload(() => import('./DataSourcePermissionsDataGrid-871d9a83.js'),true?["assets/DataSourcePermissionsDataGrid-871d9a83.js","assets/role_mf_2_management__loadShare__vue__loadShare__-3b7775e3.js","assets/role_mf_2_management__mf_v__runtimeInit__mf_v__-5faca542.js","assets/preload-helper-376741aa.js","assets/rolesManagement.entities-c935b81a.js","assets/role_mf_2_management__loadShare__utility__loadShare__-ef83b0bf.js"]:void 0)
    );
    const pageStore = useRolesManagementStore();
    return (_ctx, _cache) => {
      return role_mf_2_management__loadShare__vue__loadShare__.openBlock(), role_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", _hoisted_1, [
        role_mf_2_management__loadShare__vue__loadShare__.createVNode(_sfc_main$1),
        role_mf_2_management__loadShare__vue__loadShare__.unref(pageStore).rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.length ? (role_mf_2_management__loadShare__vue__loadShare__.openBlock(), role_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", _hoisted_2, [
          role_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_3, [
            role_mf_2_management__loadShare__vue__loadShare__.createVNode(role_mf_2_management__loadShare__vue__loadShare__.unref(PagePermissionsDataGrid))
          ]),
          role_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_4, [
            role_mf_2_management__loadShare__vue__loadShare__.createVNode(role_mf_2_management__loadShare__vue__loadShare__.unref(DataSourcePermissionsDataGrid))
          ])
        ])) : role_mf_2_management__loadShare__vue__loadShare__.createCommentVNode("", true)
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=RolesManagement-627f2f79.js.map
