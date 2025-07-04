// routerService.ts
import { createRouter, createWebHistory, RouteLocationNormalizedLoadedGeneric, type Router } from 'vue-router'
import { authService } from './authService'

// --- Router instance
const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: [
  ]
})

let setRoutesFunc: Function | null = null

function setBeforeEach(func: Function) {
  router.beforeEach((to, from, next) => {
    func(to, from, next)
  });
}

function setAfterEach(func: Function) {
  router.afterEach((to, from, next) => {
    func(to, from, next)
  });
}

function currentRoute() : RouteLocationNormalizedLoadedGeneric  {
  return router.currentRoute.value;
}

async function setSetRoutes(func: Function) {
  setRoutesFunc = func;
  if(authService.isLoggedIn.value)
    await func();
}

async function setRoutes() {
  if(setRoutesFunc)
    await setRoutesFunc();
}

export const routingService = {
    router,
    setRoutes,
    setBeforeEach,
    currentRoute,
    setAfterEach,
    setSetRoutes
  }
