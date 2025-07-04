<template>
  <div class="tabs-wrapper">
    <!-- Tab header -->
    <DxTabs
      :data-source="normalizedLabels"
      :selected-index="internalIndex"
      :no-data-text="''"
      @selection-changed="onChange"
    />

    <!-- Tab body -->
    <div class="tabs-body">
      <!-- Expose the currently-selected index so the parent can decide what to show -->
      <slot :selected="internalIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { DxTabs } from '@metronik/devextreme';

/** Props */
interface Props {
  /** Array of strings or objects accepted by DxTabs */
  labels: (string | { text: string })[];
  /** Two-way binding (v-model) for the active tab index */
  modelValue?: number;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

/* local state, kept in-sync with v-model */
const internalIndex = ref(props.modelValue ?? 0);

watch(
  () => props.modelValue,
  v => v !== undefined && v !== internalIndex.value && (internalIndex.value = v),
);

/* Convert plain strings → objects so DxTabs is happy */
const normalizedLabels = computed(() =>
  props.labels.map(l => (typeof l === 'string' ? { text: l } : l)),
);

function onChange(e: any) {
  internalIndex.value = e.component.option('selectedIndex');
  emit('update:modelValue', internalIndex.value); // v-model
  emit('change', internalIndex.value);            // optional “change” event
}
</script>

<style scoped>
.tabs-body {
  margin-top: 1.5rem;
}
</style>
