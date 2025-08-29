<template>
  <v-card>
    <v-card-title>
      背包
      <v-chip class="ml-2" color="primary" variant="outlined">
        容量: {{ playerStore.inventory.length }}/50
      </v-chip>
    </v-card-title>
    
    <v-card-text>
      <!-- 标签页分类 -->
      <v-tabs v-model="tab" grow>
        <v-tab value="all">全部</v-tab>
        <v-tab value="weapons">武器</v-tab>
        <v-tab value="armor">防具</v-tab>
        <v-tab value="consumables">消耗品</v-tab>
        <v-tab value="materials">材料</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="all">
          <inventory-grid :items="playerStore.inventory" />
        </v-window-item>
        
        <v-window-item value="weapons">
          <inventory-grid :items="weaponItems" />
        </v-window-item>
        
        <v-window-item value="armor">
          <inventory-grid :items="armorItems" />
        </v-window-item>
        
        <v-window-item value="consumables">
          <inventory-grid :items="consumableItems" />
        </v-window-item>
        
        <v-window-item value="materials">
          <inventory-grid :items="materialItems" />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePlayerStore } from '../stores/player'
import InventoryGrid from '../components/InventoryGrid.vue'

const playerStore = usePlayerStore()
const tab = ref('all')

// 计算分类物品
const weaponItems = computed(() => 
  playerStore.inventory.filter(item => item.type === 'weapon')
)

const armorItems = computed(() => 
  playerStore.inventory.filter(item => item.type === 'armor')
)

const consumableItems = computed(() => 
  playerStore.inventory.filter(item => item.type === 'consumable')
)

const materialItems = computed(() => 
  playerStore.inventory.filter(item => item.type === 'material')
)
</script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>