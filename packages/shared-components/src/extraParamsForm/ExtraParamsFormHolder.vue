<template>
<DynamicForm
  :form-data="formData"
  :controls="controls"
  :loading="loading"
  @submit="emit('submit', $event)"
/>
</template>

<script setup lang="ts">
import DynamicForm from './DynamicForm.vue'
import { useExtraParamsForm } from './useExtraParamsForm';
import type { Module, RecordParams } from 'utility';

const props = defineProps<{
  visible: boolean;
  loading: boolean;
  module: Module;
  actionCode: string;
  recordParams: RecordParams[];
  additionalExtraParamsRequestParams?: () => Map<string, any>
}>();

const emit = defineEmits<{
  (e: 'submit', v: Record<string, any>): void;
  (e: 'update:title', v: string): void;
}>();

import { toRefs, ref, watch } from 'vue';

const { visible, actionCode, module, recordParams } = toRefs(props);

const { formData, controls, items, title } = useExtraParamsForm(
  visible,
  actionCode,
  module,
  recordParams,
  props.additionalExtraParamsRequestParams
);

watch(title, (newTitle) => {
  emit('update:title', newTitle ?? '');
}, { immediate: true });

</script>
<style>
.dx-texteditor.dx-editor-filled.dx-state-disabled .dx-texteditor-input {
  color: black;
}
</style>