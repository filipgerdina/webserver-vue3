<template>
  <div style="max-height: 600px; overflow-y: auto; display: block; width: 100%;">
    <DxDataGrid
      ref="dataGridRef"
      style="max-height: 500px; overflow: hidden;"
      :data-source="data"
      :remote-operations="false"
      :allow-column-reordering="true"
      :row-alternation-enabled="true"
      :show-borders="true"
      :key-expr="'id'"
      width="auto"
      height="auto"
      :no-data-text="translationService.translate('s:noData')"
      @selection-changed="onSelectionChanged"
      @context-menu-preparing="onCtxPreparing"
    >
      <DxSelection mode="single" selectionChange />
      <DxPaging :page-size="0" />
      <DxPager
        :visible="true"
        :show-page-size-selector="true"
        :allowed-page-sizes="[25, 100, 'all']"
      />
      <DxStateStoring
        :enabled="true" 
        type="custom" 
        :custom-load="loadState"
        :custom-save="saveState"
      />
      <DxSearchPanel 
        :visible="true"
        :highlight-case-sensitive="true"
        :placeholder="translationService.translate('s:search') + '...'"
      />
      <DxGroupPanel :visible="true" />
      <DxGrouping :auto-expand-all="false" />

      <DxColumn
        v-for="(colm, index) in props.config.columns"
        :key="index"
        :data-field="colm.field._field"
        :data-type="getDataType(colm.field._type)"
        :caption="translationService.translate(colm.field._caption)"
        :visible="(colm.visible != false)"
      />
      <DxToolbar>
      <DxItem
        location="after"
        locateInMenu="auto"
        showText="inMenu"
        widget="dxButton"
        :options="refreshButtonOptions"
      />
      <DxItem
      location="center">
    <h4 style="margin-bottom: 10px;">
      {{ translationService.translate(props.config.title || 'Title') }}
    </h4>
      </DxItem>
      <DxItem
        name="searchPanel"
      />
      </DxToolbar>
    </DxDataGrid>
  </div>
  
  <component :is="actionsHandlers.renderExtraParamsForm()" />
  

  <DynamicFormPopup
    v-model:visible="dynamicFormVisible"
    :controls="controls"
    :form-data="formData"
    :loading="false"
    :title="translationService.translate(props.config.newFormTitle ?? '')"
    @submit="submitForm"
  />


</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  DxButton,
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxPager,
  DxSearchPanel,
  DxGroupPanel,
  DxGrouping,
  DxSelection,
  ContextMenuPreparingEvent,
  SelectionChangedEvent,
  DxStateStoring,
  DxToolbar,
  DxItem
} from '@metronik/devextreme';

import type { DataGridConfig } from '../types';
import { useGridLogic, getDataType } from './useGridLogic';
import { useActions } from '../actions/useActions';
import { DataGridStore } from './useGridStore';
import { ActionFormControl, translationService } from 'utility';
import DynamicFormPopup from '../extraParamsForm/DynamicFormPopup.vue';

const dynamicFormVisible = ref<boolean>(false);

const formData = ref<Record<string, any>>({})
const controls = ref<ActionFormControl[]>([])

const refreshButtonOptions = {
  icon: 'refresh',
  text: translationService.translate('s:refresh'),
  onClick: () => {
    refresh();
  },
};


function submitForm() {
  if(submitFunction.value)
    submitFunction.value(formData.value)

  dynamicFormVisible.value = false;
}

const submitFunction = ref<Function | null>(null)

async function initializeForm(submitFunc: Function) {
  controls.value = await Promise.all(
    props.config.columns.filter(col => col.addedInEditMode).map(async (col) => {
      let values: any[] = [];
      if(col.selectionFromDataSource?.dataSource) {
        let res = await col.selectionFromDataSource.dataSource.retrieveData();
        values = res.data 
      }
      return {
        dataField: col.field._field,
        label: col.field._caption,
        required: false,
        visualizationType: col.visualizationType,
        visible: col.visibleInEditMode !== false,
        properties: {
          values: values,
          displayDataField: col.selectionFromDataSource?.displayDataMemeber._field,
          valueDataField: col.selectionFromDataSource?.idDataMember._field,
        }
      }
    })
  );

  formData.value = {};

  if (props.additionalExtraParamsRequestParams) {
    props.additionalExtraParamsRequestParams().forEach((value, key) => {
      formData.value[key] = value;
    });
  }

  dynamicFormVisible.value = true;
  submitFunction.value = submitFunc;
}

const props = defineProps<{
  config: DataGridConfig<any>;
  canDelete: boolean;
  canUpdate: boolean;
  additionalExtraParamsRequestParams?: () => Map<string, any>
}>();

const emits = defineEmits<{
  (e: 'refresh'): void;
  (e: 'delete'): void;
  (e: 'update'): void;
  (e: 'selected', row: any): void;
  (e: 'view-changed', state: any): void;
}>();

const { data, refresh } = useGridLogic(props.config, emits);
const dataGridRef = ref();
// //if(props.config.selectFirstByDefault)
  //dataGridRef.value.instance.selectRowsByIndexes([0]);

const store = useGridStore(props.config.id)();

const actionsHandlers = useActions(props.config.entity, refresh, initializeForm);
actionsHandlers.onRecordIdChanged(null);

function onSelectionChanged(e: SelectionChangedEvent) {
  emits('selected', e.selectedRowsData[0]);

  if(e.selectedRowsData[0])
    actionsHandlers.onRecordIdChanged(e.selectedRowsData[0][dataGridRef.value.keyExpr]);
  else
    actionsHandlers.onRecordIdChanged(null);

    emits('view-changed', dataGridRef.value.instance.state());
}

import { useGridStore } from './useGridStore'

function loadState() {
  return store?.GetDataGridView();
}

function saveState(state: DataGridStore) {
  emits('view-changed', state);
}

function onCtxPreparing(e: ContextMenuPreparingEvent) {

  e.component.selectRowsByIndexes([e.rowIndex])
  actionsHandlers.onContextMenuPreparing(e);
}

function loadStateToGrid() {
  //dataGridRef.value.instance.state(store);
}



onMounted(refresh);

defineExpose({ 
  refresh, 
  loadStateToGrid,
  actionsHandlers
  });
</script>
