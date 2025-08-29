﻿<template>
  <div>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.title"
          @click="selectView(item.component, item.route)"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider></v-divider>
        <v-list-item
          :prepend-icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
          :title="rail ? '' : i18nStore.$t('menu.collapse')"
          @click="rail = !rail"
        ></v-list-item>
      </template>
    </v-navigation-drawer>

    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ i18nStore.$t('app.title') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip class="ma-2" color="primary" variant="outlined">
        <v-icon start>mdi-account</v-icon>
        Lv.{{ player.level }} {{ player.name }}
      </v-chip>
      <v-chip class="ma-2" color="red" variant="outlined">
        <v-icon start>mdi-heart</v-icon>
        {{ player.health }}/{{ player.maxHealth }}
      </v-chip>
      <v-chip class="ma-2" color="blue" variant="outlined">
        <v-icon start>mdi-auto-fix</v-icon>
        {{ player.mana }}/{{ player.maxMana }}
      </v-chip>
      <v-chip class="ma-2" color="amber" variant="outlined">
        <v-icon start>mdi-coin</v-icon>
        {{ player.gold }}
      </v-chip>
      <LanguageSwitcher />
    </v-app-bar>

    <v-main>
      <v-container fluid class="main-content">
        <router-view />
      </v-container>
      
      <!-- 可折叠的后台战斗状态组件 -->
      <MinimizableBattleStatus v-if="showBackgroundBattle" />
    </v-main>
  </div>
</template>

<script setup>
import { ref, shallowRef, computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from '../../stores/player'
import { useI18nStore } from '../../stores/i18n'
import { useBattleStore } from '../../stores/battle'
import { useMercenaryStore } from '../../stores/mercenary'
import CharacterView from '../../views/CharacterView.vue'
import InventoryView from '../../views/InventoryView.vue'
import BattleView from '../../views/BattleView.vue'
import MapView from '../../views/MapView.vue'
import SkillsView from '../../views/SkillsView.vue'
import SaveLoadView from '../../views/SaveLoadView.vue'
import ShopView from '../../views/ShopView.vue'
import AlchemyView from '../../views/AlchemyView.vue'
import QuestHallView from '../../views/QuestHallView.vue'
import MercenaryView from '../../views/MercenaryView.vue'
import TeamView from '../../views/TeamView.vue'
import TavernView from '../../views/TavernView.vue'
import SettingsView from '../../views/SettingsView.vue'
import LanguageSwitcher from '../LanguageSwitcher.vue'
import MinimizableBattleStatus from '../battle/MinimizableBattleStatus.vue'

const player = usePlayerStore()
const i18nStore = useI18nStore()
const battleStore = useBattleStore()
const mercenaryStore = useMercenaryStore()
const drawer = ref(true)
const rail = ref(false)
const currentView = shallowRef(CharacterView)

const menuItems = computed(() => [
  // 角色相关
  { title: i18nStore.$t('menu.character'), icon: 'mdi-account', route: '/character' },
  { title: i18nStore.$t('menu.inventory'), icon: 'mdi-backpack', route: '/inventory' },
  { title: i18nStore.$t('menu.skills'), icon: 'mdi-auto-fix', route: '/skills' },
  
  // 佣兵相关
  { title: '队伍', icon: 'mdi-account-group', route: '/team' },
  { title: '佣兵', icon: 'mdi-account-multiple', route: '/mercenaries' },
  { title: '酒馆', icon: 'mdi-glass-mug-variant', route: '/tavern' },
  
  // 游戏内容
  { title: i18nStore.$t('menu.map'), icon: 'mdi-map', route: '/map' },
  { title: i18nStore.$t('menu.battle'), icon: 'mdi-sword', route: '/battle' },
  { title: i18nStore.$t('menu.shop'), icon: 'mdi-store', route: '/shop' },
  { title: i18nStore.$t('menu.gameplay'), icon: 'mdi-gamepad-variant', route: '/alchemy' },
  { title: i18nStore.$t('menu.quests'), icon: 'mdi-castle', route: '/quests' },
  
  // 系统
  { title: i18nStore.$t('menu.saveLoad'), icon: 'mdi-content-save', route: '/saves' },
  { title: i18nStore.$t('menu.settings'), icon: 'mdi-cog', route: '/settings' }
])

// 计算属性：是否在战斗页面
const isInBattleView = computed(() => {
  return router.currentRoute.value.path === '/battle'
})

// 计算属性：是否显示后台战斗组件
const showBackgroundBattle = computed(() => {
  // 只有在非战斗页面且正在战斗时才显示
  return battleStore.isBattling && !isInBattleView.value
})

// 导入路由
const router = useRouter()

// 更新selectView方法，全部使用路由导航
const selectView = (component, route) => {
  if (route) {
    router.push(route)
  }
}
</script>

<style scoped>
.main-content {
  height: calc(100vh - 64px);
  padding: 0;
}
</style>