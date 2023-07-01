import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
/* pinia持久化 */
import piniaPluginPersist from 'pinia-plugin-persist'



const store = createPinia()
store.use(piniaPluginPersist)

createApp(App).use(router).use(store).mount('#app')
