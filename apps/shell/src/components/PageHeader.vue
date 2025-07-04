<!-- PageHeader.vue -->
<script setup lang="ts">
import { GetImageUrl } from 'utility'
import { defineProps } from 'vue'

const props = defineProps<{
  icon: string | undefined
  title: string
}>()
</script>

<template>
  <div class="page-header">
    <div
      class="page-icon"
      v-if="props.icon"
      :style="{
        maskImage: 'url(' + GetImageUrl(props.icon) + ')',
        WebkitMaskImage: 'url(' + GetImageUrl(props.icon) + ')',
      }"
    ></div>
    <div class="header-title">{{ props.title }}</div>
  </div>
</template>

<style scoped>
.page-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--primaryColorPageHeader);
  color: white;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-title {
  font-size: 18px;
  font-weight: bold;
}

.page-icon {
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background-color: white;
  width: 30px;
  height: 30px;
  margin-right: 8px;
}
</style>
