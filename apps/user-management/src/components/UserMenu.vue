<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService, DataSource, GetImageUrl, routingService } from 'utility'
import { GetUserInformationQueryDTOCoreResponse } from '../../users'
import { translationService, settingsService } from 'utility'

const t = translationService.translate
const router = useRouter();
const displayName = ref("")
const userRoles = ref<string[]>([])

const userMenuExpanded = ref(false)

const userInformationDataSource = new DataSource<{}, {}, null, GetUserInformationQueryDTOCoreResponse>({
  name: "userInformation",
  method: "GET"
});

// userInformationDataSource.getQueryParams = () => (
// {
//   Username: authService.username.value ?? undefined
// });

function toggleUserMenu() {
  userMenuExpanded.value = !userMenuExpanded.value
}

function closeUserMenu() {
  userMenuExpanded.value = false
}

function goToSettings() {
  closeUserMenu()
  router.push('/profile')
  console.log(router)
}
  
async function retrieveUserInformation() {
  let res = await userInformationDataSource.retrieveData((data) => {
    settingsService.setUserSettings(data.data?.languageId, data.data?.dateTimeFormatId, data.data?.decimalSeperatorId);
  });
  if(res) {
    displayName.value = res.data?.displayName ?? res.data?.username ?? "";
    userRoles.value = res.data?.roleNames ?? [];
  }

}
onMounted(async () => {

  if(!authService.currentUser.value)
    authService.onLoaded(async () => {
      await retrieveUserInformation();
    })
  else {
    await retrieveUserInformation();
  }
})
</script>

<template>
  <div class="userMenu" @click="toggleUserMenu">
    <div class="userSummary">
      <img :src="GetImageUrl('userIcon.png')" style="width: 35px;" />
      <div class="userText">
        <div class="userName">{{ displayName }}</div>
        <div class="userRoles">{{ userRoles?.join(', ') }}</div>
      </div>
      <i
        class="fa-solid fa-chevron-down caretIcon"
        :class="{ rotated: userMenuExpanded }"
      ></i>
    </div>

    <div v-if="userMenuExpanded" class="userMenuDropdown" @click.stop>
      <button @click="goToSettings">
        <i class="fa-solid fa-user"></i>
        {{ t('s:mySettings') }}
      </button>

      <button @click="authService.logout()">
        <i class="fa-solid fa-right-from-bracket"></i>
       {{ t('s:signOut') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.userMenu {
  position: relative;
  cursor: pointer;
  user-select: none;
}

.userSummary {
  display: flex;
  min-width: 220px;
  align-items: center;
  padding: 0px 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.userText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
}

.userName {
  font-weight: 500;
}

.userRoles {
  font-size: 12px;
  font-weight: 300;
}

.caretIcon {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.caretIcon.rotated {
  transform: rotate(180deg);
}

.userMenuDropdown {
  z-index: 1001;
  position: absolute;
  right: 0;
  top: 100%;
  min-width: 220px;
  margin-top: 5px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0px;
  display: flex;
  flex-direction: column;
}

.userMenuDropdown button {
  background-color: transparent;
  border: none;
  text-align: left;
  padding: 6px 10px;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
}

.userMenuDropdown button:hover {
  background-color: var(--primaryColorDark);
  color: white;
}

.userMenuDropdown button i {
  margin-right: 8px;
}
</style>
