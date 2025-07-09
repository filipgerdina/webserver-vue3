import { authService } from "./authService"
import { CrossTabLock } from "./crossTabLock"
import { Message } from '../utl'
import { errorBus } from "../errorBus"

const lock = new CrossTabLock({
  lockKey: 'auth_refresh_lock',
  guid: 'fetch-service',
  lockTtl: 15000
})

type CoreResponse = {
  data?: any
  messages: Message[]
}

export async function fetchService<TResponse = any>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  headers: Record<string, string> = {},
  body?: any,
  skipAuth:boolean = false
) {
  try {
    return await tryFetch<TResponse>(url, method, headers, body, skipAuth)
  } catch (error) {
    if (error instanceof Error && error.message.includes('401') && !skipAuth) {
      if (lock.isLockedPublic()) {
        await lock.waitForUnlock()
        let newToken = authService.getToken()
        if (newToken) {
          return await tryFetch<TResponse>(url, method, headers, body)
        }
      }
      const refreshed = await authService.tryRefreshToken()
      if (refreshed) {
        return await tryFetch<TResponse>(url, method, headers, body)
      } else {
        authService.logout()
        throw new Error('Session expired, please log in again.')
      }
    }
    throw error
  }
}

export async function tryFetch<TResponse = any>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  headers: Record<string, string> = {},
  body?: any,
  skipAuth:boolean = false
): Promise<TResponse> {

  const finalHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    ...( !skipAuth && authService.getToken() ? { 'Authorization': 'Bearer ' + authService.getToken() } : {}),
    ...headers
  }

  const options: RequestInit = {
    method,
    headers: finalHeaders,
    credentials: 'include'
  }

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url.toString(), options)
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized access: 401')
      } 

      const errorText = await response.json()
      throw new Error(`${errorText.message}`)
    }
    if (response.status === 204) return {} as TResponse

    let res = await response.json() as CoreResponse
    if(res.messages?.length) {
      console.log(res.messages[0]);
      errorBus.emit('error', res.messages[0].code ?? 'An unknown error occurred')
      //throw new Error(res.messages[0].details ?? 'An unknown error occurred')
      return {} as TResponse;
    }
    else
      return res as TResponse
  } catch (error) {
    throw error
  }
}
