import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../components/layout/AppLayout.vue'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import InventoryView from '../views/InventoryView.vue'
import MapView from '../views/MapView.vue'
import BattleView from '../views/BattleView.vue'
import ShopView from '../views/ShopView.vue'
import AlchemyView from '../views/AlchemyView.vue'
import QuestHallView from '../views/QuestHallView.vue'
import TestSkills from '../views/TestSkills.vue'
import SkillsView from '../views/SkillsView.vue'
import SaveLoadView from '../views/SaveLoadView.vue'
import MercenaryView from '../views/MercenaryView.vue'
import TeamView from '../views/TeamView.vue'
import TavernView from '../views/TavernView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/alchemy',
        name: 'Alchemy',
        component: AlchemyView
      },
      {
        path: '/quests',
        name: 'Quests',
        component: QuestHallView
      },
      {
        path: '/skills',
        name: 'Skills',
        component: SkillsView
      },
      {
        path: '/test',
        name: 'Test',
        component: TestSkills
      },
      {
        path: '/saves',
        name: 'Saves',
        component: SaveLoadView
      },
      {
        path: '/mercenaries',
        name: 'Mercenaries',
        component: MercenaryView
      },
      {
        path: '/team',
        name: 'Team',
        component: TeamView
      },
      {
        path: '/tavern',
        name: 'Tavern',
        component: TavernView
      },
      {
        path: '/battle',
        name: 'Battle',
        component: BattleView
      },
      {
        path: '/character',
        name: 'Character',
        component: CharacterView
      },
      {
        path: '/inventory',
        name: 'Inventory',
        component: InventoryView
      },
      {
        path: '/map',
        name: 'Map',
        component: MapView
      },
      {
        path: '/shop',
        name: 'Shop',
        component: ShopView
      },
      {
        path: '/settings',
        name: 'Settings',
        component: SettingsView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router