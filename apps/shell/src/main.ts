import { createApp } from 'vue'
import App from './App.vue'
import 'devextreme/dist/css/dx.material.orange.light.compact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createPinia } from 'pinia'
import router from './utils/router'
import { authService } from 'utility';

await authService.tryRefreshToken();

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app');
