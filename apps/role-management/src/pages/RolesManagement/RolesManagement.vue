<template>
  <div class="container-fluid">
    <RolesDataGrid />

    <div v-if="pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.length" class="row mt-4">
      <div class="col-md-6">
        <PagePermissionsDataGrid />
      </div>
      <div class="col-md-6">
        <DataSourcePermissionsDataGrid />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import RolesDataGrid from './components/RolesDataGrid/RolesDataGrid.vue';
import { useRolesManagementStore } from './rolesManagement.store';


const PagePermissionsDataGrid = defineAsyncComponent(() => 
  import('./components/PagePermissionsDataGrid/PagePermissionsDataGrid.vue')
)


const DataSourcePermissionsDataGrid = defineAsyncComponent(() => 
  import('./components/DataSourcePermissionsDataGrid/DataSourcePermissionsDataGrid.vue')
)

const pageStore = useRolesManagementStore();
</script>
