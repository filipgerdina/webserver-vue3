<template>
<div @click="toggleExpand(props.navigationGroup.displayName)" class="nav-item">
  <div
  class="page-icon"
  :style="{
    maskImage: 'url(' + props.navigationGroup.iconUrl + ')',
    WebkitMaskImage: 'url(' + props.navigationGroup.iconUrl + ')',
    backgroundColor: '#abb4be',
    width: '30px',
    height: '30px',
  }"
></div>
  <span style="flex-grow: 1;">{{ props.navigationGroup.displayName }}</span>
  <i
    class="fa-solid fa-chevron-down caretIcon"
    :class="{ rotated: props.expanded }"
  ></i>
</div>

  <transition name="expand">
    <div v-if="props.expanded">
      <li
        v-for="item in props.navigationGroup.navigationGroups"
        :key="item.displayName"
      >
        <NavbarItem
          :navigationGroup="item"
          :expanded="props.expandedGroups[item.displayName] || false"
          :expandedGroups="props.expandedGroups"
          @toggleExpand="$emit('toggleExpand', item.displayName)"
          @toggleExpandChild="$emit('toggleExpand', $event)"
        />
      </li>
      <li
        v-for="item in props.navigationGroup.pages"
        :key="item.name"
        class="page-item"
        :class="{ 'router-link-active-icon': $route.path === item.path }"
      >
        <div
          class="page-icon"
          :style="{
            maskImage: 'url(' + item.iconUrl + ')',
            WebkitMaskImage: 'url(' + item.iconUrl + ')',
          }"
        ></div>
        <RouterLink :to="item.path" class="nav-link">{{ item.name }}</RouterLink>
      </li>

    </div>
  </transition>
</template>



<script setup lang="ts">
type NavigationGroup = {
  displayName: string
  pages?: Page[]
  navigationGroups?: NavigationGroup[]
  iconUrl?: string
}

type Page = {
  name: string,
  path: string,
  pageComponent: string,
  module: Module
  iconUrl?: string
}

type Module = {
  remoteModule: string
  pathToModule: string
}

const props = defineProps<{
  navigationGroup: NavigationGroup
  expanded: boolean
  expandedGroups: Record<string, boolean>
}>()

const emit = defineEmits(['toggleExpand', 'toggleExpandChild'])

function toggleExpand(name) {
  emit('toggleExpand', name)
}

function toggleExpandChild(name: string) {
  emit('toggleExpandChild', name)
}

</script>


<style scoped>
div:first-of-type {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.caretIcon {
  margin-left: auto; /* arrow will stay at right edge */
  transition: transform 0.3s ease;
  font-size: 0.8em;
}



div:first-of-type:hover {
  background-color: #3a3a3a;
  color: white;
}

/* Expanded content container */
div + div {
  padding-left: 12px;
  margin-top: 5px;
  transition: padding-left 0.3s ease;
}

li a {
  display: block;
  padding: 6px 10px;
  color: #abb4be;
  background-color: transparent;
  text-decoration: none;
  border-radius: 0;
  font-weight: normal;
  transition: color 0.3s ease, text-decoration 0.3s ease, font-weight 0.2s ease;
}

li a:hover {
  font-weight: bold;
  text-decoration: none;
}

/* Active link (current path) */
li a.router-link-active {
  color: var(--primaryColor);
  font-weight: bold;
  /* border-left: 2px solid var(--primaryColor); */
  padding-left: 8px;
}


/* Caret */
.caretIcon {
  margin-left: 8px;
  transition: transform 0.3s ease;
  font-size: 0.8em;
}

.caretIcon.rotated {
  transform: rotate(180deg);
}

/* Transition for expanding/collapsing content */
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.expand-enter-to, .expand-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}

.page-item {
  display: flex;
  align-items: center;
  padding: 2px 10px;
  color: #abb4be;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.page-item:hover {
  background-color: #3a3a3a;
}

/* Ensure the RouterLink fills remaining space */
.page-item .nav-link {
  flex-grow: 1;
  color: #abb4be;
  text-decoration: none;
  font-weight: normal;
  transition: color 0.3s ease, text-decoration 0.3s ease, font-weight 0.2s ease;
}

.page-item .nav-link:hover {
  font-weight: bold;
  text-decoration: none;
}

/* Active link (current path) */
.page-item .nav-link.router-link-active {
  color: var(--primaryColor);
  font-weight: bold;
  /* border-left: 2px solid var(--primaryColor); */
  padding-left: 8px;
}

.page-icon {
  width: 22px; /* or desired size */
  height: 22px;
  padding: 0px !important;
  background-color: #abb4be;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  margin-right: 4px;
}

/* ACTIVE item: icon always primaryColor */
.page-item.router-link-active-icon .page-icon {
  background-color: var(--primaryColor);
}

/* ACTIVE item: text always primaryColor */
.page-item.router-link-active-icon .nav-link {
  color: var(--primaryColor);
}

/* HOVER on INACTIVE item: icon → white */
.page-item:not(.router-link-active-icon):hover .page-icon {
  background-color: white;
}

/* HOVER on INACTIVE item: text → white */
.page-item:not(.router-link-active-icon):hover .nav-link {
  color: white;
}
</style>


