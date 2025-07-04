<template>
  <DxPopup
    :visible="visible"
    @update:visible="$emit('update:visible', $event)"
    :title="title"
    :show-close-button="true"
    :width="700"
    height="auto"
  >
    <DynamicForm
      :form-data="props.formData || {}"
      :controls="controls"
      :loading="loading"
      @submit="$emit('submit', $event)"
    />
  </DxPopup>
</template>

<script setup lang="ts">
import { DxPopup } from '@metronik/devextreme';
import DynamicForm from './DynamicForm.vue';
import type { ActionFormControl } from 'utility';

const props = defineProps<{
  visible: boolean;
  loading: boolean;
  controls: ActionFormControl[];
  formData?: Record<string, any>;
  title?: string;
}>();

const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void;
  (e: 'submit', v: Record<string, any>): void;
}>();
</script>
