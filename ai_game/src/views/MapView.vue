<template>
  <v-card>
    <v-card-title>世界地图</v-card-title>
    <v-card-subtitle>当前位置: {{ playerStore.currentMap }} - {{ playerStore.currentRegion }}</v-card-subtitle>
    
    <v-card-text>
      <v-row>
        <!-- 地图区域列表 -->
        <v-col cols="12" md="6">
          <v-list>
            <v-list-item
              v-for="region in regions"
              :key="region.name"
              :class="['region-item', { 'current-region': region.name === playerStore.currentMap }]"
              @click="travelTo(region)"
            >
              <template v-slot:prepend>
                <v-icon :color="getRegionColor(region.type)">{{ getRegionIcon(region.type) }}</v-icon>
              </template>
              
              <v-list-item-title>{{ region.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ region.type }}</v-list-item-subtitle>
              
              <template v-slot:append>
                <v-chip size="small" :color="getRegionColor(region.type)" variant="outlined">
                  {{ region.level }}级
                </v-chip>
              </template>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- 地图详情 -->
        <v-col cols="12" md="6">
          <v-card v-if="selectedRegion" variant="outlined">
            <v-card-title>{{ selectedRegion.name }}</v-card-title>
            <v-card-subtitle>{{ selectedRegion.type }} - {{ selectedRegion.level }}级区域</v-card-subtitle>
            
            <v-card-text>
              <p>{{ selectedRegion.description }}</p>
              
              <v-divider class="my-3"></v-divider>
              
              <h4>区域怪物:</h4>
              <v-chip
                v-for="monster in selectedRegion.monsters"
                :key="monster.name"
                class="ma-1"
                color="red"
                variant="outlined"
                size="small"
              >
                {{ monster.name }} ({{ monster.level }}级)
              </v-chip>
              
              <v-divider class="my-3"></v-divider>
              
              <h4>区域资源:</h4>
              <v-chip
                v-for="resource in selectedRegion.resources"
                :key="resource"
                class="ma-1"
                color="green"
                variant="outlined"
                size="small"
              >
                {{ resource }}
              </v-chip>
            </v-card-text>
            
            <v-card-actions>
              <v-btn
                color="primary"
                variant="tonal"
                :disabled="selectedRegion.name === playerStore.currentMap"
                @click="travelTo(selectedRegion)"
              >
                前往此地
              </v-btn>
              
              <v-btn
                color="red"
                variant="tonal"
                :disabled="selectedRegion.monsters.length === 0"
                @click="enterBattle(selectedRegion)"
              >
                进入战斗
              </v-btn>
            </v-card-actions>
          </v-card>
          
          <v-card v-else variant="outlined">
            <v-card-text class="text-center text-grey">
              选择地图区域查看详情
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePlayerStore } from '../stores/player'
import { maps } from '../config/maps'
import { getMonstersByRegion } from '../config/monsters'

const playerStore = usePlayerStore()
const selectedRegion = ref(null)

// 使用配置的地图数据
const regions = computed(() => {
  return maps.map(map => ({
    name: map.name,
    type: map.type,
    level: map.levelRange.min,
    description: map.description,
    monsters: (getMonstersByRegion(map.name) || []).slice(0, 3).map(monster => ({
      name: monster?.name || '未知怪物',
      level: monster?.level || 1
    })),
    resources: getMapResources(map.type)
  }))
})

// 根据地图类型获取资源
function getMapResources(mapType) {
  const resources = {
    'human_city': ['交易', '任务', '装备修理'],
    'elf_city': ['魔法物品', '炼金材料', '精灵装备'],
    'desert_city': ['沙漠特产', '稀有矿石', '古董'],
    'adventure': ['草药', '皮毛', '矿石'],
    'forest': ['木材', '草药', '动物材料'],
    'swamp': ['毒囊', '皮革', '稀有草药'],
    'desert': ['沙石', '矿物', '沙漠水晶'],
    'oasis': ['生命之水', '稀有草药', '能量水晶'],
    'snow': ['冰晶', '皮毛', '寒铁矿石'],
    'ice_cave': ['远古冰晶', '寒冰核心', '失落技术'],
    'island': ['海岛特产', '珍珠', '珊瑚'],
    'volcano': ['火山岩', '熔岩核心', '火系宝石'],
    'ruins': ['古代文物', '神秘符文', '能量核心'],
    'dragon_valley': ['龙鳞', '龙晶', '远古宝藏'],
    'abyss': ['深渊材料', '黑暗结晶', '恶魔之血'],
    'celestial': ['神圣之水', '天使之羽', '神性材料'],
    'lake': ['鱼类', '珍珠', '水草'],
    'maze': ['幻象水晶', '迷宫地图', '古老符文'],
    'time_rift': ['时光沙漏', '永恒之沙', '时空碎片']
  }
  return resources[mapType] || ['通用材料', '普通资源', '基础物品']
}

const travelTo = (region) => {
  playerStore.changeMap(region.name, region.type)
  selectedRegion.value = region
}

const enterBattle = (region) => {
  // 进入战斗逻辑
  console.log('进入战斗区域:', region.name)
  // 这里可以跳转到战斗界面
}

const getRegionIcon = (type) => {
  const icons = {
    'human_city': 'mdi-city',
    'elf_city': 'mdi-tree',
    'desert_city': 'mdi-desert',
    'adventure': 'mdi-sword-cross',
    'forest': 'mdi-pine-tree',
    'swamp': 'mdi-water',
    'desert': 'mdi-weather-sunny',
    'oasis': 'mdi-palm-tree',
    'snow': 'mdi-snowflake',
    'ice_cave': 'mdi-ice-cream',
    'island': 'mdi-island',
    'volcano': 'mdi-volcano',
    'ruins': 'mdi-castle',
    'dragon_valley': 'mdi-dragon',
    'abyss': 'mdi-ab-testing',
    'celestial': 'mdi-star',
    'lake': 'mdi-waves',
    'maze': 'mdi-map',
    'time_rift': 'mdi-clock'
  }
  return icons[type] || 'mdi-map'
}

const getRegionColor = (type) => {
  const colors = {
    'human_city': 'blue',
    'elf_city': 'green',
    'desert_city': 'orange',
    'adventure': 'red',
    'forest': 'green',
    'swamp': 'teal',
    'desert': 'orange',
    'oasis': 'light-green',
    'snow': 'blue',
    'ice_cave': 'light-blue',
    'island': 'yellow',
    'volcano': 'red',
    'ruins': 'grey',
    'dragon_valley': 'purple',
    'abyss': 'deep-purple',
    'celestial': 'amber',
    'lake': 'blue',
    'maze': 'purple',
    'time_rift': 'cyan'
  }
  return colors[type] || 'grey'
}
</script>

<style scoped>
.region-item {
  cursor: pointer;
  transition: background-color 0.2s;
}

.region-item:hover {
  background-color: #f5f5f5;
}

.current-region {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}
</style>