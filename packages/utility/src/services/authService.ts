import { ref, computed } from 'vue'
import { CrossTabLock } from './crossTabLock'
import { signalRService } from './signalRService'
import { routingService } from './routingService'

const PAGE_GUID = crypto.randomUUID()

const token = ref<string | null>(null)
const username = ref<string | null>(null)
const defaultPage = ref<string | null>(null)
const languageId = ref<number | null>(null)
const isLoaded = ref<boolean>(false)
const loadedCallbacks: Function[] = []
export const isDomainUser = ref<boolean>(false)

export const isLoggedIn = computed(() => !!token.value)
export const currentUser = computed(() => username.value)
export const userDefaultPage = computed(() => defaultPage.value)
export const isUserDomain = computed(() => isDomainUser.value)

const authChannel = new BroadcastChannel('auth_channel')
const lock = new CrossTabLock({
  lockKey: 'auth_refresh_lock',
  lockTtl: 15 * 1000,
  guid: PAGE_GUID,
  verifyDelay: 80
})

let refreshPromise: Promise<boolean> | null = null

import { DataSource } from '../dataSource/dataSource.config'
import { settingsService } from './settingsService'
import { translationService } from './translationService'

// Login: POST auth/login
const loginDataSource = new DataSource<{}, {}, { username: string; password: string }, {
  token: string
  roles: string[]
  username: string
  homePage: string,
  isDomainUser: boolean,
  languageId: number
  dateTimeFormatId: number
  decimalSeperatorId: number
}>({
  name: 'auth/login',
  method: 'POST',
  isRealDS: true,
  getBodyParams: () => loginCredentials.value,
  skipAuth: true,
})

// Logout: POST auth/logout
const logoutDataSource = new DataSource<{}, {}, null, any>({
  name: 'auth/logout',
  method: 'POST',
  isRealDS: true
})

// Store login credentials temporarily for loginDataSource
const loginCredentials = ref<{ username: string; password: string }>({ username: '', password: '' })

function broadcastAuthEvent(event: string, data = { guid: PAGE_GUID }) {
  authChannel.postMessage({ event, ...data })
}

async function saveAuth(skipTriggeringEvents = false) {
  await routingService.setRoutes()
  if(routingService.router.currentRoute.value.path == '/login') {
    const redirectPath = routingService.router?.currentRoute.value.query.redirect as string
    if (redirectPath) {
      routingService.router?.push(redirectPath)
    } else if (routingService.router) {
      routingService.router.push(authService.userDefaultPage.value || '/')
    }
  }
  if (!skipTriggeringEvents)
    authChannel.postMessage({event: 'login', jwt: token.value, langId: languageId.value, homePage: defaultPage.value })
}

function getToken(): string | null {
  return token.value
}

function onLoaded(cb: Function) {
  if (isLoaded.value) cb()
  loadedCallbacks.push(cb)
}

async function login(
  user: string,
  pass: string,
  success: (res: any) => void,
  error: (err: any) => void
): Promise<void> {
  try {
    loginCredentials.value = { username: user, password: pass }
    const result = await loginDataSource.retrieveData(
      (res) => {
        // Optionally call the provided success callback
        success(res)
      },
      (err) => {
        // Optionally call the provided error callback
        error(err)
      }
    )

    if(!result)
      return;
    const { token: jwt, username: usrName, homePage, isDomainUser: isDomain, languageId: langId} = result

    token.value = jwt
    username.value = usrName
    defaultPage.value = homePage
    languageId.value = langId;
    isDomainUser.value = isDomain;
    await settingsService.setUserSettings(languageId.value, null, null);
    await markLoaded()
    await saveAuth()
    
    success(result)
  } catch (err: any) {
    console.error('Login error:', err)
    error(err)
  }
}

async function tryRefreshToken() {
  let waited = 0
  while (true) {
    const acquired = await lock.acquire()
    if (acquired) break
    await lock.waitForUnlock()
    waited += 200
    if (getToken()) return true
    if (waited > 15000) return false
  }
  authChannel.postMessage({ event: 'refresh_started' })

  if (refreshPromise) {
    lock.release()
    return refreshPromise
  }

  refreshPromise = (async () => {
    try {
      const res = await fetch('https://localhost:7241/auth/refresh', {
        method: 'POST',
        credentials: 'include'
      })
      if (!res.ok) {
        authChannel.postMessage({ event: 'refresh_failed' })
        lock.release()
        return false
      }

      const { token: jwt, username: usrName, homePage, isDomainUser: isDomain, languageId: langId} = await res.json()

      let oldToken = token.value
      token.value = jwt
      username.value = usrName
      defaultPage.value = homePage
      isDomainUser.value = isDomain;
      languageId.value = langId;
      await settingsService.setUserSettings(languageId.value, null, null);
      if(!oldToken) {
        await markLoaded()
        await saveAuth(true)
      }

      authChannel.postMessage({ event: 'refresh_done' , jwt: token.value})
      lock.release()
      return true
    } catch (err) {
      authChannel.postMessage({ event: 'refresh_failed' })
      lock.release()
      return false
    } finally {
      refreshPromise = null
    }
  })()
  return await refreshPromise
}

async function autologout(skipTriggeringEvents = false) {
  if (!skipTriggeringEvents) {
    broadcastAuthEvent('autoLogout')
    await tryOnlyOneTabLogout()
  }
  logoutBase()
  redirectToLogin(true)
}

async function tryOnlyOneTabLogout() {
  if (await lock.acquire()) {
    try {
      await logoutDataSource.retrieveData()
    } finally {
      lock.release()
    }
  }
}

function logoutBase() {
  token.value = null
  username.value = null
  defaultPage.value = null
  isLoaded.value = false
  languageId.value = settingsService.appSettings.value.language?.id ?? null

  translationService.setLanguage(settingsService.appSettings.value.language?.id ?? 1);
}

async function logout(skipTriggeringEvents = false) {
  if (!skipTriggeringEvents) {
    try{
      await tryOnlyOneTabLogout()
    }
    catch {
      logoutBase()
      if (!skipTriggeringEvents)
        broadcastAuthEvent('logout')
      redirectToLogin(false)
    }
  }
  logoutBase()
  if (!skipTriggeringEvents)
    broadcastAuthEvent('logout')
  redirectToLogin(false)
}

function redirectToLogin(query:boolean) {
  const currentRoute = routingService.router?.currentRoute.value ?? null
  if (currentRoute?.path !== '/login') {
    if(query)
      routingService.router?.push({ path: '/login', query:  { redirect: currentRoute?.fullPath }})      
    else 
      routingService.router?.push({ path: '/login'})
  }
}

async function markLoaded() {
  isLoaded.value = true
  while (loadedCallbacks.length) {
    await loadedCallbacks.pop()?.()
  }
}

(async () => {
  await tryRefreshToken()
  await initializeSignalR();
})();

authChannel.onmessage = async (msg) => {
  const { event, jwt, langId, homePage } = msg.data
  if (event === 'refresh_done') {
    //await loadStoredAuth()
    token.value = jwt;
  }
  if (token.value && (event === 'logout' || event === 'autoLogout')) {
    setTimeout(() => {
      logoutBase()
      redirectToLogin(event === 'autoLogout')
    }, 100)
  }
  if (event === 'login') {  
    if(!token.value) {
      token.value = jwt;
      languageId.value = langId;
      defaultPage.value = homePage
      await settingsService.setUserSettings(languageId.value, null, null);
      await markLoaded()
      saveAuth(true);
    }
  }
}

async function initializeSignalR() {
  await signalRService.startConnection("https://localhost:7241/pageshub");

  signalRService.addEventHandler("https://localhost:7241/pageshub", "RefreshPages", async () => {  
    saveAuth()
  });

  signalRService.addEventHandler("https://localhost:7241/pageshub", "LockUser", async (obj) => {
    if(authService.currentUser.value?.toLowerCase() == obj.username.toLowerCase()) {
      logout();
    }
});
}

export const authService = {
  isLoggedIn,
  currentUser,
  userDefaultPage,
  username,
  login,
  logout,
  autologout,
  getToken,
  tryRefreshToken,
  onLoaded,
  isUserDomain
}
