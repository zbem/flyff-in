import { defineStore } from 'pinia'
import { getCurrentLanguage, setCurrentLanguage, t, languages } from '../config/i18n'

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    currentLanguage: getCurrentLanguage(),
    availableLanguages: languages
  }),

  getters: {
    // 翻译函数
    $t: (state) => (key, params = {}) => t(key, state.currentLanguage, params),
    
    // 当前语言名称
    currentLanguageName: (state) => state.availableLanguages[state.currentLanguage] || '中文'
  },

  actions: {
    // 切换语言
    setLanguage(lang) {
      if (this.availableLanguages[lang]) {
        this.currentLanguage = lang
        setCurrentLanguage(lang)
      }
    },

    // 切换中英文
    toggleLanguage() {
      const newLang = this.currentLanguage === 'zh' ? 'en' : 'zh'
      this.setLanguage(newLang)
    }
  }
})