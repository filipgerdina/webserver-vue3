import { defineStore, getActivePinia } from 'pinia';
import { ref } from 'vue';
import { USERS_DATA_GRID, USER_ROLES_DATA_GRID } from './componentIds';
import { useGridStore } from 'shared-components'
import refreshDependencies from './refreshDependencies';

export const useUserManagementStore = defineStore('userManagementStore', () => {

  const usersDataGridStore = useGridStore(USERS_DATA_GRID)(getActivePinia());
  const userRolesDataGridStore = useGridStore(USER_ROLES_DATA_GRID)(getActivePinia());

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

  function triggerRefresh(componentId: string) {

    if (!refreshDependencies[componentId]) {
      return;
    }

    let filteredCallbacks: (() => void)[] = [];
    filteredCallbacks = refreshListeners.value.filter(rl => refreshDependencies[componentId].includes(rl.componentId)).map(rl => rl.callback);
    filteredCallbacks.forEach(cb => {
      cb();
    });
  }

  return {
    onRefresh,
    triggerRefresh,
    usersDataGridStore,
    userRolesDataGridStore
  };
});

export default { useUserManagementStore };
