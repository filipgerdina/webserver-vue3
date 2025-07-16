<!-- src/components/ErrorPopupContainer.vue -->
<template>
  <!-- One DxPopup per active error -->
  <DxPopup
    v-for="(p, i) in popups"
    :key="p.id"
    :visible="true"
    :drag-enabled="true"
    :show-title="true"            
    :width="420"
    :height="'auto'"
    :title="translationService.translate('s:errorTitle')"
    :show-close-button="true"
    :wrapperAttr="{ class: 'error-popup' }"
    @hiding="() => (e: any) => remove(p.id)"
  >
    <DxPosition
      my="center center"
      at="center center"
      offset="0 30"
    ></DxPosition>
    <!-- BODY ---------------------------------------------------------- -->
    <div class="flex items-start gap-3 p-5">
      <!-- user‑friendly message -->
      <div class="text-red-700 whitespace-pre-wrap break-words">
        {{ p.message }}
      </div>
    </div>
  </DxPopup>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue'
import { DxPopup, DxPosition } from '@metronik/devextreme';
import { errorBus } from './errorBus'
import { translationService } from './services/translationService';

interface Popup { id: number; message: string }

const popups = reactive<Popup[]>([])

function show(message: string) {
  popups.push({ id: Date.now() + Math.random(), message })
}

function remove(id: number) {
  const idx = popups.findIndex(p => p.id === id)
  if (idx !== -1) popups.splice(idx, 1)
}

onMounted(() => errorBus.on('error', show))
onUnmounted(() => errorBus.off('error', show))
</script>

<style scoped>
/* Rounded corners & subtle shadow for all pop‑ups */
.error-popup .dx-overlay-content {
  border-radius: 0.75rem; /* Tailwind rounded‑lg */
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}
</style>
