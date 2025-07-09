import { authService, routingService, pagesDataSource } from 'utility';

const router = routingService.router;

// Static routes
router.addRoute({
  name: "login",
  path: '/login',
  component: () => import('../views/LoginView.vue')
});

// Placeholder main route—children will be set dynamically
router.addRoute({
  name: 'mainRoute',
  path: '/',
  component: () => import('../views/MainView.vue'),
  children: []
});

// Navigation guard
routingService.setBeforeEach((to, from, next) => {
  if (to.path !== '/login' && !authService.isLoggedIn.value) {
    next('/login');
  } else if (
    (to.path === '/login' && authService.isLoggedIn.value) ||
    (to.path === '/' && authService.userDefaultPage.value)
  ) {
    next(authService.userDefaultPage.value || '/');
  } else {
    next();
  }
});

// Function to set dynamic children routes based on userPages
export async function setRoutes() {
  if(!router.getRoutes().filter(route => route.path === router.currentRoute.value.path).length) {
    console.log("No route found for current path, reloading routes.");
  }
  router.currentRoute.value
  router.removeRoute('login')
  router.removeRoute('mainRoute');

  router.addRoute({
    path: '/login',
    name: "login",
    component: () => import('../views/LoginView.vue')
  });

  if(!authService.isLoggedIn)
    return;

    let routes = await pagesDataSource.retrieveData();
  // Re-add with new children from userPages
  router.addRoute({
    name: 'mainRoute',
    path: '/',
    component: () => import('../views/MainView.vue'),
    children: (routes?.data ?? [])
      .filter(page => typeof page.path === 'string' && page.path)
      .map(page => {
        if (!page.module || !page.module.moduleName || !page.module.pathToModue) {
          return {
              path: page.path,
              name: page.name,
              component: () => {
                //if (page.pageComponent == "ApplicationSettings")
                  return import('../pages/ApplicationSettings.vue')
              },
              meta: {
                pageName: page.name,
                pageIcon: page.iconUrl
            },
          }
        }
        return {
          path: page.path as string,
          component: () => import('../views/RemoteModuleLoader.vue'),
          meta: {
            remoteModule: page.module?.moduleName,
            pathToModule: page.module?.pathToModue,
            pageComponent: page.pageComponent,
            pageName: page.name,
            pageIcon: page.iconUrl
          },
        }
      }) as any,
  });
}

// Provide `setRoutes` to the authService for use after login etc.
await routingService.setSetRoutes(setRoutes);
let r = router;

// Wait until user info loaded, then call setRoutes
authService.onLoaded(() => setRoutes());

window.addEventListener('storage', (e) => {
  if(e.key != "auth-event")
    return;
  if (e.newValue) {
    const { event, guid } = JSON.parse(e.newValue);
      if (event === 'login') {
        authService.onLoaded(() => setRoutes());
    }
  }
});
// Export after configuration
export default r;
