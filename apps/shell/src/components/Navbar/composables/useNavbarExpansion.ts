import { reactive, Ref } from 'vue'
import type { NavigationGroup } from '../types'
import { useRoute } from 'vue-router'

export function useNavbarExpansion(navigationGroups: Ref<NavigationGroup[]>) {
    const route = useRoute()
  const expandedGroups = reactive<Record<string, boolean>>({})

  function expandGroupsForCurrentPage() {
    function expandGroupRecursive(group: NavigationGroup): boolean {
      if (group.pages?.some(p => p.path === route.path)) {
        expandedGroups[group.displayName] = true
        return true
      }
      if (group.navigationGroups?.some(child => expandGroupRecursive(child))) {
        expandedGroups[group.displayName] = true
        return true
      }
      return false
    }

    navigationGroups.value.forEach(group => {
      expandGroupRecursive(group)
    })
  }

  return {
    expandedGroups,
    expandGroupsForCurrentPage
  }
}

