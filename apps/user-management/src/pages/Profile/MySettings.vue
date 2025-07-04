<template>
  <Tabs :labels="tabLabels" v-model="selectedTab">
    <!-- We decide what to render for each index -->
    <EditProfileForm     v-show="selectedTab === 0" />
    <ChangePasswordForm  v-show="selectedTab === 1" />
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tabs } from 'shared-components';

import EditProfileForm    from './EditProfileForm.vue';
import ChangePasswordForm from './ChangePasswordForm.vue';
import { authService, translationService } from 'utility';

const selectedTab = ref(0);
const tabLabels = ref<string[]>([]);

if(authService.isLoggedIn.value) {
  setTabs();
}
else {
  authService.onLoaded(() => {
    setTabs();
  });
}

function setTabs() {
  tabLabels.value.push(translationService.translate('s:settings'));

  if(!authService.isUserDomain.value)
    tabLabels.value.push(translationService.translate('s:changePassword'));
}
</script>


<style scoped>
.profile-settings-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.tab-content {
  margin-top: 1.5rem;
}
</style>
