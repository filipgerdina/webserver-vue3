<template>
  <div class="login-container">
    <div class="login-card">
      <h1>{{ translationService.translate('s:login') }}</h1>

      <!-- USERNAME ------------------------------------------>
      <input
        v-model="username"
        :name="userReady || passReady ? 'username' : 'fakeUser'"
        :autocomplete="userReady || passReady ? 'username' : 'off'"
        :placeholder="translationService.translate('s:username')"
        @focus="unlock('user', $event)"
      />

      <!-- PASSWORD ------------------------------------------>
      <input
        v-model="password"
        type="password"
        :name="passReady || userReady ? 'current-password' : 'fakePass'"
        :autocomplete="passReady || userReady ? 'current-password' : 'off'"
        :placeholder="translationService.translate('s:password')"
        @focus="unlock('pass', $event)"
      />

      <button @click="tryLogin" :disabled="loading">
        <span v-if="loading">{{translationService.translate('s:loggingIn')}}</span>
        <span v-else>{{translationService.translate('s:login')}}</span>
      </button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>

    <div v-if="loading" class="overlay">
      <div class="spinner">Loading…</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { authService, translationService } from 'utility'

const username      = ref('')
const password      = ref('')
const loading       = ref(false)
const errorMessage  = ref('')

const userReady = ref(false)
const passReady = ref(false)

function unlock(type: 'user' | 'pass', e: Event) {
  const input = e.target as HTMLInputElement
  input.readOnly = false 

  if (type === 'user')  userReady.value = true
  if (type === 'pass')  passReady.value = true
}

async function tryLogin() {
  errorMessage.value = ''
  loading.value      = true

  await authService.login(
    username.value,
    password.value,
    ()    => {},           
    (err) => (errorMessage.value = translationService.translate(err.message))
  )

  loading.value = false
}
</script>



<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f8;
  font-family: "Segoe UI", Tahoma, sans-serif;
  position: relative;
}

.login-card {
  background-color: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 360px;
  text-align: center;
  border-top: 6px solid #f39c12;
}

.login-card h1 {
  margin-bottom: 24px;
  color: #2c3e50;
  font-size: 24px;
}

.login-card input {
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 18px;
  border: 1px solid #dcdde1;
  border-radius: 6px;
  font-size: 15px;
  transition: border-color 0.3s;
}

.login-card input:focus {
  border-color: #f39c12;
  outline: none;
}

.login-card button {
  width: 100%;
  padding: 12px;
  background-color: #f39c12;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.login-card button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.login-card button:hover:enabled {
  background-color: #e67e22;
}

.error {
  color: #e74c3c;
  margin-top: 10px;
  font-size: 14px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spinner {
  background-color: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  color: #333;
}
</style>
