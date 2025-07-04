<template>
  <div class="profile-card">
    <h4 class="profile-title">
      {{ translationService.translate('s:profile') }}
    </h4>

    <ExtraParamsFormHolder 
      :visible="true"
      :loading="false"
      actionCode="EDIT_PROFILE"
      :module="module"
      :recordParams="[]"
      @submit="editUserProfile"
    />
  </div>
  <div class="profile-card">
    <h4 class="profile-title">
      {{ translationService.translate('s:changePassword') }}
    </h4>
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
import { module } from "../../module"
import { authService, DataSource, routingService, settingsService, translationService } from 'utility';
import { useRouter } from 'vue-router';

var submitProfileDs = new DataSource({
  method: "POST",
  name: "editProfile",
})

var submitPasswordDs = new DataSource({
  method: "POST",
  name: "changePassword",
})

const router = useRouter();
async function editUserProfile(formData) {
  submitProfileDs.getBodyParams = () => ({
    data: {
      actionCode: "EDIT_PROFILE",
      recordTypeCode: "fsdfds",
      extraParamsFormValues: formData
    }
  });
  await submitProfileDs.retrieveData(() => {
    settingsService.setUserSettings(formData["languageId"], formData["dateTimeFormatId"], formData["decimalSeperatorId"])
  });

  window.location.reload()
}

async function changePassword(formData) {
  submitPasswordDs.getBodyParams = () => ({
    data: {
      actionCode: "CHANGE_PASSWORD",
      recordTypeCode: "fsdfds",
      extraParamsFormValues: formData
    }
  });

  await submitPasswordDs.retrieveData();
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
  font-size: 2rem;
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

