import { ref } from 'vue';

export interface DataGridStore {
    selectedRowKeys?: number[];
}
import { defineStore } from 'pinia';

export const useGridStore = (id: string) => defineStore(
  id,
  () => {
    const gridViewState = ref<DataGridStore>({});
    function resetGridView() { gridViewState.value = {}; }

    function SaveDataGridView(viewState: DataGridStore) {
        gridViewState.value = viewState;
    }

    function GetDataGridView(): DataGridStore {
        return gridViewState.value;
    }

    function ResetDataGridView() {
        gridViewState.value = {};
    }
    return { gridViewState, resetGridView, SaveDataGridView, GetDataGridView, ResetDataGridView };
  },
);

