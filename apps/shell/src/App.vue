<script setup lang="ts">
import { CrossTabLock, ErrorPopupContainer } from 'utility';

import { ref, provide } from 'vue'

/* Save the ref so any child can grab it with inject() if you like. */
const errorPopups = ref()
provide('errorPopups', errorPopups)

const PAGE_GUID = crypto.randomUUID(); // Or reuse your global one

const idleLock = new CrossTabLock({
  lockKey: 'auth_idle_lock',
  lockTtl: 5000,        // Keep this shorter than your idle timer interval
  guid: PAGE_GUID,
  verifyDelay: 80
});

import { onMounted, onUnmounted } from "vue";
import { authService, routingService, signalRService } from 'utility'

let timer: ReturnType<typeof setTimeout> | undefined;

function resetTimerAllTabs() {
  //if(localStorage.getItem('isLoggedIn') == "true") {
    localStorage.setItem('auth-timer-event', JSON.stringify({ ts: Date.now() }));
  //}
}

function resetTimer() {
  clearTimeout(timer);

  if(routingService.currentRoute().path.includes("login"))
    return;

  timer = setTimeout(async () => {
    if (await idleLock.acquire()) {
      // Only this tab will make the backend call!
      await authService.autologout();
      idleLock.release();
      // Optionally: also broadcast "autoLogout" to all tabs here (if not already in your logic)
    }
    else {
      await authService.autologout(false);
    }
    clearTimeout(timer);
  }, 2000 * 1000);
}

function handleActivity() {
  resetTimerAllTabs();
  resetTimer();
}

onMounted(async () => {
  if(!routingService.currentRoute().path.includes("login"))
    handleActivity();
  
  routingService.setAfterEach((to, from) => {
    if(!(to.path == "/login"))
      handleActivity()
  });

  window.addEventListener("mousemove", handleActivity);
  window.addEventListener("keydown", handleActivity);
  window.addEventListener("click", handleActivity);

  window.addEventListener("storage", (e) => {
    if (e.key === "auth-timer-event") {
      resetTimer();
    }

    if (e.key === "auth-event" && e.newValue) {
      const { event } = JSON.parse(e.newValue);
      if (event === "autoLogout" || event === "logout") {
        clearTimeout(timer);
    }
  }
  });

  
  resetTimer();
});
onUnmounted(() => {
  window.removeEventListener("mousemove", handleActivity);
  window.removeEventListener("keydown", handleActivity);
  window.removeEventListener("click", handleActivity);
  clearTimeout(timer);
  window.removeEventListener("storage", () => {});
});
</script>

<template>
  <RouterView />
  <ErrorPopupContainer ref="errorPopups" />
</template>

<style scoped>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
