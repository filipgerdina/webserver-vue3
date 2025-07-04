<template>
  <div class="profile-card">
    <ExtraParamsFormHolder
      :visible="true"
      :loading="false"
      actionCode="EDIT_PROFILE"
      :module="module"
      :recordParams="[]"
      @submit="editUserProfile"
    />
  </div>
</template>

<script setup lang="ts">
import { ExtraParamsFormHolder } from 'shared-components';
import { module } from '../../module';
import {
  DataSource,
  settingsService,
  translationService,
} from 'utility';
import { useRouter } from 'vue-router';

const router = useRouter();

const submitProfileDs = new DataSource({
  method: 'POST',
  name: 'editProfile',
});

async function editUserProfile(formData: Record<string, any>) {
  submitProfileDs.getBodyParams = () => ({
    data: {
      actionCode: 'EDIT_PROFILE',
      recordTypeCode: 'fsdfds',
      extraParamsFormValues: formData,
    },
  });

  await submitProfileDs.retrieveData(() => {
    settingsService.setUserSettings(
      formData.languageId,
      formData.dateTimeFormatId,
      formData.decimalSeperatorId,
    );
  });

  window.location.reload();
}
</script>

<style scoped>
@import './profile-card.css'; /* Re-use shared styles */
</style>
