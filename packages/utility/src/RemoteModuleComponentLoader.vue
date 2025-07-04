<template>
  <component :is="remoteComponent" v-if="remoteComponent" />
  <p v-else>Loading remote module...</p>
</template>

<script setup lang="ts">
import { shallowRef, watch, onMounted, defineAsyncComponent } from 'vue'
import { loadRemoteModule } from './RemoteModuleLoader';

const remoteComponent = shallowRef();

const props = defineProps<{
  pathToModule: string;
  remoteName: string;
  exposeModule: string;
}>();

const loadComponent = async () => {
    remoteComponent.value = defineAsyncComponent(async () => await loadRemoteModule(props.pathToModule, props.remoteName, props.exposeModule));
};

onMounted(loadComponent);

</script>
