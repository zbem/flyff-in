import { useI18nStore } from '../stores/i18n'

export default {
  install: (app) => {
    const i18nStore = useI18nStore()
    
    // 全局注入 $t 函数
    app.config.globalProperties.$t = (key) => i18nStore.$t(key)
    
    // 提供 i18n store
    app.provide('i18n', i18nStore)
  }
}