<template>
    <PageHeader :icon="pageIcon" :title="pageName" />
  <div class="profile-card">
    <h4 class="profile-title">
      {{ translationService.translate('s:applicationSettings') }}
    </h4>
    <ExtraParamsFormHolder 
      :visible="true"
      :loading="false"
      actionCode="EDIT_APPLICATION_SETTINGS"
      :module="module"
      :recordParams="[]"
      @submit="editApplicationSettings"
    />
  </div>
</template>
<script setup lang="ts">
import { ExtraParamsFormHolder } from 'shared-components';
import { authService, DataSource, routingService, settingsService, translationService } from 'utility';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PageHeader from '../components/PageHeader.vue'
import {module} from '../module'
var submitDs = new DataSource({
  method: "POST",
  name: "editApplicationSettings",
})

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

const router = useRouter();
async function editApplicationSettings(formData) {
      submitDs.getBodyParams = () => ({
        data: {
          actionCode: "EDIT_APPLICATION_SETTINGS",
          recordTypeCode: "fsdfds",
          extraParamsFormValues: formData
        }
      });
      await submitDs.retrieveData(() => {
        settingsService.setAppSettings(formData["languageId"], formData["dateTimeFormatId"], formData["decimalSeperatorId"])
      });

      window.location.reload()
}
</script>

<style scoped>
.profile-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  max-width: 900px;
  margin: 2rem auto;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
}

/* Header */
.profile-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
}

/* Roles list (tags) */
.role-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.role-badge {
  background-color: #e0f2fe;
  color: #0369a1;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid #bae6fd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* Save button alignment */
.save-button-container {
  text-align: right;
  padding-top: 1.5rem;
}

/* Save button styling */
.save-button {
  padding: 0.6rem 1.5rem;
  background-color: #10b981;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.save-button:hover {
  background-color: #059669;
}
</style>

