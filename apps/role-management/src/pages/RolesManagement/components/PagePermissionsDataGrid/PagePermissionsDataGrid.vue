<template>
  <DataGrid
    ref="dataGridRef"
    :config="pagePermissionsDataGrid"
    :can-delete="false"
    :can-update="false"
    :additional-extra-params-request-params="getAdditionalActionsParams"
    @refresh="onRefresh"
    @view-changed="onViewChanged"
  />
</template>

<script setup lang="ts">
import { DataGrid, DataGridStore } from 'shared-components';
import { useRolesManagementStore } from '../../rolesManagement.store';
import { PAGE_PERMISSIONS_DATA_GRID } from '../../componentIds';
import { pagePermissionsDataGrid } from './pagePermissionsDataGrid.config';
import { ref } from 'vue';

const pageStore = useRolesManagementStore();
const dataGridRef = ref();

pageStore.onRefresh(PAGE_PERMISSIONS_DATA_GRID, () => {
    dataGridRef.value?.refresh();
});

function onRefresh() {
  pageStore.triggerRefresh(PAGE_PERMISSIONS_DATA_GRID);
}

function onViewChanged(newState: DataGridStore) {
  pageStore.pagePermissionsDataGridStore.SaveDataGridView(newState);
}

function getAdditionalActionsParams(): Map<string, any> {
  return new Map<string, any>([
    ['roleId', pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? null]
  ]);
}
</script>
