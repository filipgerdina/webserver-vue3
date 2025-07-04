<template>
  <DataGrid
    ref="dataGridRef"
    :config="rolesGridConfig"
    :can-delete="false"
    :can-update="false"
    @refresh="onRefresh"
    @selected="onSelection"
    @view-changed="onViewChanged"
  />
  <DxButton 
  text="hlsdfhsl"/>
</template>

<script setup lang="ts">
import { DataGrid, DataGridStore } from 'shared-components';
import { useRolesManagementStore } from '../../rolesManagement.store';
import { ROLES_DATA_GRID } from '../../componentIds';
import { rolesGridConfig } from './rolesDataGrid.config'
import { ref } from 'vue';
import { DxButton } from '@metronik/devextreme';

const pageStore = useRolesManagementStore();
const dataGridRef = ref();

function onRefresh() {
  pageStore.triggerRefresh(ROLES_DATA_GRID);
}

function onSelection(user: any) {
  const id = user?.id ?? null;
  let view = pageStore.rolesDataGridStore.GetDataGridView();
  view.selectedRowKeys = [id];
  pageStore.rolesDataGridStore.SaveDataGridView(view);
  onRefresh();
}

function onViewChanged(newState: DataGridStore) {
  pageStore.rolesDataGridStore.SaveDataGridView(newState);
}
</script>
