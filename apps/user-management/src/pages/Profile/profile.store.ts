import { defineStore } from 'pinia'
import { DataSource } from 'utility'
import { ref } from 'vue'
import { GetUserInformationQueryDTO, GetUserInformationQueryDTOCoreResponse, UsersUserInformationCreateQuery } from '../../../users'

interface RefreshListener {
  componentId: string
  callback: () => void
}

export const useProfileStore = defineStore('profileStore', () => {
  const profile = ref<GetUserInformationQueryDTO | null>(null)
  const loading = ref(false)
  const refreshListeners = ref<RefreshListener[]>([])

  async function loadProfile() {
    loading.value = true
    try {
        const userInformationDataSource = new DataSource<{}, UsersUserInformationCreateQuery, null, GetUserInformationQueryDTOCoreResponse>({
            name: "userInformation",
            method: "GET"
        });
      const res = await userInformationDataSource.retrieveData();
      profile.value = res?.data ?? null;
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function saveProfile() {
    if (!profile.value) return false
    try {
        const userInformationDataSource = new DataSource<{}, UsersUserInformationCreateQuery, null, GetUserInformationQueryDTOCoreResponse>({
            name: "userInformation",
            method: "GET"
        });
      const res = await userInformationDataSource.retrieveData();
      return res?.data;
    } catch (err) {
      console.error('Error saving profile:', err)
      return false
    }
  }

  function onRefresh(componentId: string, listener: () => void) {
    refreshListeners.value.push({ componentId, callback: listener })
  }

  function triggerRefresh(componentId: string) {
    refreshListeners.value
      .filter(r => r.componentId === componentId)
      .forEach(r => r.callback())
  }

  return {
    profile,
    loading,
    loadProfile,
    saveProfile,
    onRefresh,
    triggerRefresh
  }
})
