<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RemoteModuleComponentLoader, translationService } from 'utility'
import PageHeader from '../components/PageHeader.vue'

const route = useRoute()

const remoteModule = ref(route.meta.remoteModule as string)
const pathToModule = ref(route.meta.pathToModule as string)
const pageComponent = ref(route.meta.pageComponent as string)
const pageIcon = ref(route.meta.pageIcon as string)
const pageName = ref(translationService.translate(route.meta.pageName as string))

watch(
  () => [route.meta.pathToModule, route.meta.pageComponent, route.meta.pageName, route.meta.pageIcon],
  () => {
    remoteModule.value = route.meta.remoteModule as string
    pathToModule.value = route.meta.pathToModule as string
    pageComponent.value = route.meta.pageComponent as string
    pageIcon.value = route.meta.pageIcon as string
    pageName.value = translationService.translate(route.meta.pageName as string)
  }
)
</script>

<template>
  <div>
    <PageHeader :icon="pageIcon" :title="pageName" />
    <div class="page-content">
      <RemoteModuleComponentLoader
        :key="`${remoteModule}-${pathToModule}-${pageComponent}`"
        :pathToModule="pathToModule"
        :remoteName="remoteModule"
        :exposeModule="pageComponent"
      />
    </div>
  </div>
</template>

<style scoped>
.page-content {
  padding: 16px;
}
</style>
