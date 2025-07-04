<template>
  <div
    class="navbarDiv"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <button
      @click="toggleNavbar"
      style="width: 100%; display: flex; justify-content: right;"
    >
      <i
        :class="showNavbar ? 'fa-solid fa-chevron-left' : 'fa-solid fa-bars'"
        style="margin-right: 8px; margin-top:10px; font-size: 25px; width: 71px; justify-content: center; display: flex;"
      ></i>
    </button>

    <!-- Expanded navbar -->
    <div v-if="showNavbar || isHovered" class="navbar">
      <ul>
        <li v-for="item in navigationGroups" :key="item.displayName">
          <NavbarItem
            :navigationGroup="item"
            :expanded="expandedGroups[item.displayName] || false"
            :expandedGroups="expandedGroups"
            @toggleExpand="toggleExpanded($event)"
            @toggleExpandChild="expandedGroups[$event] = true"
          />
        </li>
      </ul>
    </div>

    <!-- Collapsed navbar -->
    <div v-else>
      <ul class="navbar-list">
        <li
          v-for="item in navigationGroups"
          :key="item.displayName"
          class="page-item"
        >
          <div class="nav-item">
            <div
              class="page-icon"
              :style="{
                maskImage: 'url(' + item.iconUrl + ')',
                WebkitMaskImage: 'url(' + item.iconUrl + ')',
              }"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { navigationGroupsDataSource, pagesDataSource } from '../../utils/dataSources'
import { GetNavigationGroupsQueryDTO, GetPagesQueryDTO } from '../../utils/utl'
import NavbarItem from './NavbarItem.vue'
import { useNavbarExpansion } from './composables/useNavbarExpansion'
import { translationService, GetImageUrl } from 'utility'

const router = useRouter()
const route = useRoute()

type NavigationGroup = {
  displayName: string
  pages?: Page[]
  navigationGroups?: NavigationGroup[]
  iconUrl?: string
}

type Page = {
  name: string
  path: string
  pageComponent: string
  module: Module
  iconUrl?: string
}

type Module = {
  remoteModule: string
  pathToModule: string
}

const showNavbar = ref(false)
const navigationGroups = ref<NavigationGroup[]>([])

function toggleNavbar() {
  showNavbar.value = !showNavbar.value
}

function toggleExpanded(name: string) {
  expandedGroups[name] = !expandedGroups[name]
}

function getNavigationGroup(navigationGroup: GetNavigationGroupsQueryDTO, navigationGroups: GetNavigationGroupsQueryDTO[], pages: GetPagesQueryDTO[]): NavigationGroup {
  return {
    displayName: translationService.translate(navigationGroup.name as string),
    iconUrl: GetImageUrl(navigationGroup.iconUrl as string),
    pages: (pages ?? [])
      .filter(p => p.navigationGroup?.id === navigationGroup.id && p.name && p.path && p.pageComponent)
      .map(p => ({
        name: translationService.translate(p.name as string),
        path: p.path as string,
        pageComponent: p.pageComponent as string,
        iconUrl: GetImageUrl(p.iconUrl as string),
        module: {
          remoteModule: p.module?.moduleName as string,
          pathToModule: p.module?.pathToModue as string
        }
      })),
    navigationGroups: (navigationGroups ?? [])
      .filter(ng => ng.parentGroupId === navigationGroup.id && ng.name)
      .map(ng => getNavigationGroup(ng, navigationGroups, pages))
  }
}

onMounted(async () => {
  const navGroups = await navigationGroupsDataSource.retrieveData()
  const pages = await pagesDataSource.retrieveData()

  navigationGroups.value = (navGroups?.data ?? [])
    .filter(r => !!r.name && r.parentGroupId === null)
    .map(r => getNavigationGroup(r, navGroups?.data ?? [], pages?.data ?? []))

  expandGroupsForCurrentPage()
})

watch(() => route.path, () => {
  expandGroupsForCurrentPage()
})


const { expandedGroups, expandGroupsForCurrentPage } = useNavbarExpansion(navigationGroups);

const isHovered = ref(false)

function onMouseEnter() {
  isHovered.value = true
}

function onMouseLeave() {
  isHovered.value = false
}
</script>

<style scoped>

.navbar-list {
  padding: 0px;
}
.navbarDiv {
  background-color: #515050; /* dark but lighter than #222 */
  color: white;
  min-width: 75px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3); /* stronger shadow */
}


/* Sidebar button */
.navbarDiv button {
  background-color: #515050;
  border: none;
  color: white;
  /* padding: 8px 12px; */
  margin-bottom: 12px;
  cursor: pointer;
  border-radius: 0px;
  height: 40px;
  width: 50px;
  text-align: right;
  transition: background-color 0.2s ease;
}
/* Navbar list */
.navbar {
  /* width: 250px; */
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.page-item {
  list-style: none;
  width: 100%;
}
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}


.page-icon {
  width: 30px;
  height: 30px;
  padding: 0px !important;
  background-color: #abb4be; /* or inherit if active */
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  margin-right: 0px;
  margin-bottom: 5px;
}

</style>