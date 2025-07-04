<template>
  <DataGrid
    ref="dataGridRef"
    :config="navigationGroupPermissionsDataGrid"
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
import { NAVIGATION_GROUP_PERMISSIONS_DATA_GRID } from '../../componentIds';
import { navigationGroupPermissionsDataGrid } from './dataSourcePermissionsDataGrid.config';
import { ref } from 'vue';

const pageStore = useRolesManagementStore();
const dataGridRef = ref();

pageStore.onRefresh(NAVIGATION_GROUP_PERMISSIONS_DATA_GRID, () => {
    dataGridRef.value?.refresh();
});

function onRefresh() {
  pageStore.triggerRefresh(NAVIGATION_GROUP_PERMISSIONS_DATA_GRID);
}

function onViewChanged(newState: DataGridStore) {
  pageStore.navigationGroupPermissionsDataGrid.SaveDataGridView(newState);
}

function getAdditionalActionsParams(): Map<string, any> {
  return new Map<string, any>([
    ['roleId', pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? null]
  ]);
}
</script>
