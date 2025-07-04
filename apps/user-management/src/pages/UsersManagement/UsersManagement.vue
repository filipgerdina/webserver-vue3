<template>
  <div style="width: 100%;">
    <UsersDataGrid/>
    
    <UserRolesDataGrid v-if="settingsService.activeModules.value.map(m => m.moduleName).includes('rolesManagement') && pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.length"/>
  </div>
</template>

<script setup lang="ts">
import UsersDataGrid from './components/UsersDataGrid/UsersDataGrid.vue';
import { useUserManagementStore } from './userManagement.store';
import { settingsService } from 'utility';
import { defineAsyncComponent } from 'vue';

const UserRolesDataGrid = defineAsyncComponent(() => 
  import('./components/UserRolesDataGrid/UserRolesDataGrid.vue')
)

const pageStore = useUserManagementStore();
</script>