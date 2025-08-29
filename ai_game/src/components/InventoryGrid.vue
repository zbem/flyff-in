<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="6"
        sm="4"
        md="3"
        lg="2"
      >
        <v-card
          variant="outlined"
          :class="['inventory-item', item.rarity]"
          @click="showItemDetails(item)"
        >
          <v-card-text class="text-center">
            <v-icon large :color="getRarityColor(item.rarity)">
              {{ getItemIcon(item.type) }}
            </v-icon>
            <div class="item-name">{{ item.name }}</div>
            <div class="text-caption">{{ item.description }}</div>
            <v-chip v-if="item.quantity > 1" size="small" color="primary">
              x{{ item.quantity }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 空格子 -->
      <v-col
        v-for="n in emptySlots"
        :key="`empty-${n}`"
        cols="6"
        sm="4"
        md="3"
        lg="2"
      >
        <v-card variant="outlined" class="empty-slot">
          <v-card-text class="text-center">
            <v-icon>mdi-plus</v-icon>
            <div class="text-caption">空</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 物品详情对话框 -->
    <v-dialog v-model="showDetails" max-width="500">
      <v-card v-if="selectedItem">
        <v-card-title class="d-flex justify-space-between align-center">
          <span>{{ selectedItem.name }}</span>
          <v-chip :color="getRarityColor(selectedItem.rarity)" small>
            {{ selectedItem.rarity }}
          </v-chip>
        </v-card-title>
        
        <v-card-text>
          <v-row>
            <v-col cols="3" class="text-center">
              <v-icon x-large :color="getRarityColor(selectedItem.rarity)">
                {{ getItemIcon(selectedItem.type) }}
              </v-icon>
            </v-col>
            <v-col cols="9">
              <p>{{ selectedItem.description }}</p>
              
              <!-- 装备属性 -->
              <div v-if="selectedItem.attack">
                <strong>攻击:</strong> {{ selectedItem.attack }}
              </div>
              <div v-if="selectedItem.defense">
                <strong>防御:</strong> {{ selectedItem.defense }}
              </div>
              <div v-if="selectedItem.durability">
                <strong>耐久:</strong> {{ selectedItem.durability }}
              </div>
              
              <!-- 消耗品效果 -->
              <div v-if="selectedItem.effect">
                <strong>效果:</strong> {{ selectedItem.effect }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="selectedItem.equipSlot"
            color="primary"
            @click="equipItem(selectedItem)"
          >
            装备
          </v-btn>
          <v-btn
            v-if="selectedItem.type === 'consumable'"
            color="green"
            @click="useItem(selectedItem)"
          >
            使用
          </v-btn>
          <v-btn color="error" @click="discardItem(selectedItem)">
            丢弃
          </v-btn>
          <v-btn color="grey" @click="showDetails = false">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePlayerStore } from '../stores/player'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const playerStore = usePlayerStore()
const showDetails = ref(false)
const selectedItem = ref(null)

const emptySlots = computed(() => {
  return Math.max(0, 50 - props.items.length)
})

const showItemDetails = (item) => {
  selectedItem.value = item
  showDetails.value = true
}

const equipItem = (item) => {
  playerStore.equipItem(item)
  showDetails.value = false
}

const useItem = (item) => {
  // 使用消耗品逻辑
  console.log('使用物品:', item.name)
  showDetails.value = false
}

const discardItem = (item) => {
  playerStore.removeFromInventory(item.id)
  showDetails.value = false
}

const getItemIcon = (type) => {
  const icons = {
    weapon: 'mdi-sword',
    armor: 'mdi-shield',
    helmet: 'mdi-hat-fedora',
    gloves: 'mdi-hand-back-right',
    boots: 'mdi-shoe-formal',
    ring: 'mdi-ring',
    amulet: 'mdi-necklace',
    shield: 'mdi-shield',
    consumable: 'mdi-potion',
    material: 'mdi-crystal-ball',
    quest: 'mdi-scroll'
  }
  return icons[type] || 'mdi-package-variant'
}

const getRarityColor = (rarity) => {
  const colors = {
    common: 'grey',
    uncommon: 'green',
    rare: 'blue',
    epic: 'purple',
    legendary: 'orange',
    mythic: 'red'
  }
  return colors[rarity] || 'grey'
}
</script>

<style scoped>
.inventory-item {
  cursor: pointer;
  transition: transform 0.2s;
}

.inventory-item:hover {
  transform: translateY(-2px);
}

.empty-slot {
  opacity: 0.5;
}

.item-name {
  font-weight: bold;
  margin-top: 4px;
}
</style>