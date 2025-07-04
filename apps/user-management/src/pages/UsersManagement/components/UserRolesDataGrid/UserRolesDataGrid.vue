<template>
    <DataGrid
      ref="rolesGridRef"
      :config="rolesByUserGridConfig"
      :can-delete="false"
      :can-update="false"
      :additional-extra-params-request-params="getAdditionalActionsParams"
      @refresh="onRefresh"
      @view-changed="onViewChanged"     
    />
</template>

<script setup lang="ts">
import { DataGrid, DataGridStore } from 'shared-components';
import { useUserManagementStore } from '../../userManagement.store';
import { USER_ROLES_DATA_GRID } from '../../componentIds';
import { rolesByUserGridConfig } from './userRolesDataGrid.config'
import { ref } from 'vue';


const pageStore = useUserManagementStore();

const rolesGridRef = ref<typeof DataGrid | null>(null);

pageStore.onRefresh(USER_ROLES_DATA_GRID, () => {
    rolesGridRef.value?.refresh();
});

function onViewChanged(newState: DataGridStore) {
  pageStore.userRolesDataGridStore.SaveDataGridView(newState);
}

function onRefresh() {
    pageStore.triggerRefresh(USER_ROLES_DATA_GRID);
}

function getAdditionalActionsParams(): Map<string, any> {
  return new Map<string, any>([
    ['userId', pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? null]
  ]);
}
</script>