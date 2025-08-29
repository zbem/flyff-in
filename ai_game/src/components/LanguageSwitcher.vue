<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        variant="text"
        size="small"
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in availableLanguages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
      >
        <v-list-item-title>{{ lang.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useI18nStore } from '../stores/i18n'

const i18nStore = useI18nStore()

const availableLanguages = computed(() => [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' }
])

const changeLanguage = (langCode) => {
  i18nStore.setLanguage(langCode)
}
</script>