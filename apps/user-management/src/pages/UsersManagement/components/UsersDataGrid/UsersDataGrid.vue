<template>
  <DataGrid
    ref="dataGridRef"
    :config="userGridConfig"
    :can-delete="false"
    :can-update="false"
    @refresh="onRefresh"
    @selected="onUserSelected"
    @view-changed="onViewChanged"
  />
</template>

<script setup lang="ts">
import { DataGrid, DataGridStore } from 'shared-components';
import { useUserManagementStore } from '../../store';
import { USERS_DATA_GRID } from '../../componentIds';
import { userGridConfig } from './usersDataGrid.config'
import { ref } from 'vue';

const pageStore = useUserManagementStore();
const dataGridRef = ref();

function onUserSelected(user: any) {
  const id = user?.id ?? null;
  let view = pageStore.usersDataGridStore.GetDataGridView();
  view.selectedRowKeys = [id];
  pageStore.usersDataGridStore.SaveDataGridView(view);
  onRefresh();
}

function onRefresh() {
  pageStore.triggerRefresh(USERS_DATA_GRID);
}

function onViewChanged(newState: DataGridStore) {
  pageStore.usersDataGridStore.SaveDataGridView(newState);
}
</script>
