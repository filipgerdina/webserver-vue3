<template>
  <DxForm
    ref="formRef"
    :form-data="formData"
    :items="[]"
    :labelLocation="'left'"

  >
    <DxItem
      v-for="control in props.controls"
      :data-field="control.dataField ?? undefined"
      :label="{ text: translationService.translate(control.label ?? '') }"
      :is-required="control.required || false"
      :editor-type="getEditorType(control.visualizationType)"
      :editor-options="getEditorOptions(control, formData)"
      :help-text="control.description ?? undefined"
      :visible="control.visible !== null ? control.visible : undefined"

    />
  </DxForm>

  <DxButton :text="translationService.translate('s:submit')" :disabled="loading" @click="handleSubmit" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { DxForm, DxItem, DxButton } from '@metronik/devextreme';
import { getEditorType } from '../editors/getEditorType';
import { getEditorOptions } from '../editors/getEditorOptions';
import { ActionFormControl, translationService } from 'utility';

const props = defineProps<{
  formData: Record<string, any>;
  controls?: ActionFormControl[];
  columns?: any[];
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: 'submit', v: Record<string, any>): void;
}>();

const formRef = ref();

function handleSubmit() {
  const formInstance = formRef.value?.instance;
  if (!formInstance) return;
  const result = formInstance.validate();
  if (!result.isValid) return;

  emit('submit', props.formData);
}
</script>
