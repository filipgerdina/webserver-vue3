<template>
  <div class="profile-card">
    <ExtraParamsFormHolder
      :visible="true"
      :loading="false"
      actionCode="CHANGE_PASSWORD"
      :module="module"
      :recordParams="[]"
      @submit="changePassword"
    />
  </div>
</template>

<script setup lang="ts">
import { ExtraParamsFormHolder } from 'shared-components';
import { module } from '../../module';
import { DataSource, translationService } from 'utility';

const submitPasswordDs = new DataSource({
  method: 'POST',
  name: 'changePassword',
});

async function changePassword(formData: Record<string, any>) {
  submitPasswordDs.getBodyParams = () => ({
    data: {
      actionCode: 'CHANGE_PASSWORD',
      recordTypeCode: 'fsdfds',
      extraParamsFormValues: formData,
    },
  });

  await submitPasswordDs.retrieveData();
}
</script>

<style scoped>
@import './profile-card.css';
</style>
