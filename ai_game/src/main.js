import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Toast通知
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// 自动保存功能（在玩家存储中已集成）

// 多语言插件
import i18nPlugin from './plugins/i18n'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
pinia.use(createPersistedState({
  auto: true, // 自动为所有store启用持久化
  storage: localStorage,
  key: id => `fantasy-rpg-${id}`
}))

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(i18nPlugin)
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
})
app.mount('#app')
