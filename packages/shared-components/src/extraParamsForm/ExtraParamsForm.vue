<template>
  <DxPopup
    :visible="visible"
    @update:visible="$emit('update:visible', $event)"
    :title="dynamicTitle"
    :show-close-button="true"
    :width="700"
    height="auto"
  >
    <ExtraParamsFormHolder
      :visible="visible"
      :loading="loading"
      :module="module"
      :action-code="actionCode"
      :record-params="recordParams"
      :additional-extra-params-request-params="props.additionalExtraParamsRequestParams"
      @submit="$emit('submit', $event)"
      @update:title="dynamicTitle = $event"
    />
  </DxPopup>
</template>


<script setup lang="ts">
import ExtraParamsFormHolder from './ExtraParamsFormHolder.vue';
import { DxPopup } from '@metronik/devextreme';
import type { Module, RecordParams } from 'utility';
import { ref } from 'vue';

const props = defineProps<{
  visible: boolean;
  loading: boolean;
  module: Module;
  actionCode: string;
  recordParams: RecordParams[];
  additionalExtraParamsRequestParams?: () => Map<string, any>
}>();

const dynamicTitle = ref('');

const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void;
  (e: 'submit', v: Record<string, any>): void;
}>();
</script>
