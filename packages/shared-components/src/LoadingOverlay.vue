<!-- LoadingOverlay.vue -->
<template>
  <div class="overlay">
    <div class="spinner">Loading...</div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spinner {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
