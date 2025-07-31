<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import { RemoteModuleComponentLoader, GetImageUrl, settingsService } from 'utility'

const userModule = settingsService.activeModules.value.find(m => m.moduleName == "user-management")
</script>



<template>
  <div class="mainLayout">
    <!-- TOP BAR -->
    <div class="topBar">
      <img :src="GetImageUrl('ital_logo_black.png')" alt="Logo" class="logo" style="width: 300px" />
      <div class="spacer"></div>
      <RemoteModuleComponentLoader   
        v-if="userModule"
        :pathToModule="userModule.pathToModule!"
        :remoteName="userModule.moduleName!"
        :exposeModule="'./UserMenu'"
      />
    </div>

    <!-- MAIN CONTENT -->
    <div class="mainDiv">
      <Navbar></Navbar>
      <div class="page">
        <RouterView />
      </div>
    </div>
  </div>
</template>


<style scoped>
.mainLayout {
  display: flex;
  flex-direction: column;
  height: calc(100vh);
  font-family: "Segoe UI", Tahoma, sans-serif;
}

.topBar {
  display: flex;
  align-items: center;
  padding: 4px 16px;
  /* color: white; */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.spacer {
  flex: 1;
}

.mainDiv {
  display: flex;
  height: calc(100% - 49px);
  font-family: "Segoe UI", Tahoma, sans-serif;
}

.page {
  flex: 1;
  overflow-y: auto;
}

.caretIcon {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.caretIcon.rotated {
  transform: rotate(180deg);
}

</style>

<style>
:root {
    --elSigDialogBackground: #ec9a1e;
    --elSigDialogBorder: 1px solid #ec9a1e;
    --elSigDialogButtonColor: white;
    --elSigDialogButtonTextShadow: 0px 0px 1px #000;
    --elSigDialogButtonHoverBackground: rgb(255, 185, 90) !important;
    --primaryColor: rgba(255, 175, 66, 0.9);
    --primaryColorLight: #FFC27B;
    --primaryColorLighter: #f9ecde;
    --primaryBoxShadow: inset 0px 0px 0px 1px #bebebe, inset 0px 0px 0px 1000px #ED8B00;
    --primaryColorDark: #ED8B00;
    --primaryColorDarker: #b56b02;
    --primaryColorBorder: 1px solid #ED8B00;
    --primaryColorPageHeader: #ec9a1e;
}
</style>