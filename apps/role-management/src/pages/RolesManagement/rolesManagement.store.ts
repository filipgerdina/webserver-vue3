import { defineStore, getActivePinia } from 'pinia';
import { ref } from 'vue';
import { NAVIGATION_GROUP_PERMISSIONS_DATA_GRID, PAGE_PERMISSIONS_DATA_GRID, ROLES_DATA_GRID } from './componentIds';
import { useGridStore } from 'shared-components'
import refreshDependencies from './refreshDependencies';

export const useRolesManagementStore = defineStore('rolesManagementStore', () => {

  const rolesDataGridStore = useGridStore(ROLES_DATA_GRID)(getActivePinia());
  const pagePermissionsDataGridStore = useGridStore(PAGE_PERMISSIONS_DATA_GRID)(getActivePinia());
    const dataSourcePermissionsDataGrid = useGridStore(NAVIGATION_GROUP_PERMISSIONS_DATA_GRID)(getActivePinia());

  interface RefreshListener {
    componentId: string;
    callback: () => void;
  }

  const refreshListeners = ref<RefreshListener[]>([])

  function onRefresh(componentId, listener: () => void) {
    refreshListeners.value.push({
      componentId: componentId,
      callback: listener
    });
  }

  // Trigger the even
  function triggerRefresh(componentId: string) {
    let filteredCallbacks: (() => void)[] = [];
    
    if(!refreshDependencies[componentId])
      return;
    filteredCallbacks = refreshListeners.value.filter(rl => refreshDependencies[componentId].includes(rl.componentId)).map(rl => rl.callback);

    filteredCallbacks.forEach(cb => {
      cb();
    });

  }

  return {
    onRefresh,
    triggerRefresh,
    rolesDataGridStore,
    pagePermissionsDataGridStore,
    navigationGroupPermissionsDataGrid: dataSourcePermissionsDataGrid
  };
});

export default { useRolesManagementStore };
