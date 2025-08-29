<template>
  <v-card>
    <v-card-title>
      <v-icon left>mdi-flask</v-icon>
      炼金工坊
    </v-card-title>
    
    <v-card-subtitle>
      炼金等级: {{ alchemyTitle }} (经验: {{ player.alchemyExp }})
    </v-card-subtitle>

    <v-card-text>
      <v-row>
        <!-- 材料库存 -->
        <v-col cols="12" md="4">
          <v-card variant="outlined">
            <v-card-title>材料库存</v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item
                  v-for="item in playerMaterials"
                  :key="item.id"
                  :title="item.name"
                  :subtitle="`数量: ${item.quantity}`"
                >
                  <template v-slot:prepend>
                    <v-avatar size="40" color="surface-variant">
                      <v-icon>mdi-leaf</v-icon>
                    </v-avatar>
                  </template>
                </v-list-item>
                
                <v-list-item v-if="playerMaterials.length === 0">
                  <v-list-item-title>暂无材料</v-list-item-title>
                  <v-list-item-subtitle>去野外采集或购买材料</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 炼金配方 -->
        <v-col cols="12" md="4">
          <v-card variant="outlined">
            <v-card-title>可制作配方</v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item
                  v-for="recipe in availableRecipes"
                  :key="recipe.id"
                  :title="recipe.name"
                  :subtitle="`等级: ${recipe.requiredLevel} | 成功率: ${Math.round(recipe.successRate * 100)}%`"
                  @click="selectRecipe(recipe)"
                  :class="{ 'selected-recipe': selectedRecipe?.id === recipe.id }"
                >
                  <template v-slot:prepend>
                    <v-avatar size="40" :color="getRarityColor(recipe.rarity)">
                      <v-icon>mdi-flask</v-icon>
                    </v-avatar>
                  </template>

                  <template v-slot:append>
                    <v-chip
                      size="small"
                      :color="hasEnoughMaterials(recipe) ? 'success' : 'error'"
                      variant="outlined"
                    >
                      {{ hasEnoughMaterials(recipe) ? '可制作' : '材料不足' }}
                    </v-chip>
                  </template>
                </v-list-item>

                <v-list-item v-if="availableRecipes.length === 0">
                  <v-list-item-title>暂无可用配方</v-list-item-title>
                  <v-list-item-subtitle>提升等级解锁更多配方</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 配方详情和制作 -->
        <v-col cols="12" md="4">
          <v-card variant="outlined">
            <v-card-title>配方详情</v-card-title>
            <v-card-text>
              <template v-if="selectedRecipe">
                <v-list density="compact">
                  <v-list-item>
                    <v-list-item-title>{{ selectedRecipe.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      成功率: {{ Math.round(selectedRecipe.successRate * 100) }}% | 
                      经验: {{ selectedRecipe.expGain }}
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-divider class="my-2"></v-divider>

                  <v-list-item>
                    <v-list-item-title>所需材料:</v-list-item-title>
                  </v-list-item>
                  
                  <v-list-item
                    v-for="ingredient in selectedRecipe.ingredients"
                    :key="ingredient.id"
                    :title="getMaterialName(ingredient.id)"
                    :subtitle="`需要: ${ingredient.quantity}个`"
                  >
                    <template v-slot:append>
                      <v-chip
                        size="small"
                        :color="hasIngredient(ingredient) ? 'success' : 'error'"
                        variant="outlined"
                      >
                        {{ getIngredientCount(ingredient.id) }}/{{ ingredient.quantity }}
                      </v-chip>
                    </template>
                  </v-list-item>

                  <v-divider class="my-2"></v-divider>

                  <v-list-item>
                    <v-list-item-title>制作结果:</v-list-item-title>
                    <v-list-item-subtitle>{{ getProductName(selectedRecipe.result.id) }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>

                <v-btn
                  block
                  color="primary"
                  :disabled="!hasEnoughMaterials(selectedRecipe)"
                  @click="performAlchemy"
                  :loading="isCrafting"
                  class="mt-4"
                >
                  <v-icon left>mdi-hammer-wrench</v-icon>
                  开始炼金
                </v-btn>
              </template>

              <template v-else>
                <v-alert type="info" variant="outlined">
                  请选择一个配方查看详情
                </v-alert>
              </template>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- 炼金结果弹窗 -->
      <v-dialog v-model="showResult" max-width="500">
        <v-card>
          <v-card-title>
            <v-icon :color="craftResult.success ? 'success' : 'error'" left>
              {{ craftResult.success ? 'mdi-check' : 'mdi-close' }}
            </v-icon>
            {{ craftResult.success ? '炼金成功!' : '炼金失败' }}
          </v-card-title>

          <v-card-text>
            <p v-if="craftResult.success">
              成功制作了 {{ craftResult.product.quantity }} 个 {{ getProductName(craftResult.product.id) }}!
            </p>
            <p v-else>炼金过程中发生了意外，材料消失了...</p>
            
            <p>获得经验: +{{ craftResult.expGain }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="showResult = false">确定</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePlayerStore } from '../stores/player'
import { 
  getAllAlchemyMaterials, 
  getAllRecipes, 
  getAvailableRecipes, 
  hasEnoughMaterials as checkEnoughMaterials,
  performAlchemy as performAlchemyOperation,
  getAlchemyTitle
} from '../config/alchemy'

const playerStore = usePlayerStore()
const selectedRecipe = ref(null)
const isCrafting = ref(false)
const showResult = ref(false)
const craftResult = ref({})

// 计算属性
const player = computed(() => playerStore.player || { alchemyExp: 0, level: 1, inventory: [] })

const alchemyTitle = computed(() => {
  return getAlchemyTitle(player.value.alchemyExp || 0)
})

const availableRecipes = computed(() => {
  return getAvailableRecipes(player.value.level || 1)
})

const playerMaterials = computed(() => {
  const allMaterials = getAllAlchemyMaterials()
  return allMaterials.map(material => {
    const playerItem = player.value.inventory.find(item => item.id === material.id)
    return {
      ...material,
      quantity: playerItem ? playerItem.quantity : 0
    }
  }).filter(item => item.quantity > 0)
})

// 方法
const selectRecipe = (recipe) => {
  selectedRecipe.value = recipe
}

const hasEnoughMaterials = (recipe) => {
  return checkEnoughMaterials(player.value.inventory, recipe)
}

const hasIngredient = (ingredient) => {
  const playerItem = player.value.inventory.find(item => item.id === ingredient.id)
  return playerItem && playerItem.quantity >= ingredient.quantity
}

const getIngredientCount = (materialId) => {
  const playerItem = player.value.inventory.find(item => item.id === materialId)
  return playerItem ? playerItem.quantity : 0
}

const getMaterialName = (materialId) => {
  const allMaterials = getAllAlchemyMaterials()
  const material = allMaterials.find(m => m.id === materialId)
  return material ? material.name : '未知材料'
}

const getProductName = (productId) => {
  // 这里需要根据产品ID获取产品名称
  // 暂时返回固定值，后续可以扩展
  const productNames = {
    3001: '初级治疗药水',
    3002: '魔法恢复药水',
    3003: '力量药剂',
    3004: '防御药剂',
    3005: '敏捷药剂',
    3006: '高级治疗药水',
    3007: '致命毒药',
    3008: '复活药水',
    3009: '全能药剂'
  }
  return productNames[productId] || '未知产品'
}

const getRarityColor = (rarity) => {
  const colors = {
    common: 'blue-lighten-4',
    uncommon: 'green-lighten-3',
    rare: 'purple-lighten-3',
    epic: 'orange-lighten-2',
    legendary: 'yellow-lighten-2'
  }
  return colors[rarity] || 'grey-lighten-2'
}

const performAlchemy = async () => {
  if (!selectedRecipe.value || !hasEnoughMaterials(selectedRecipe.value)) return

  isCrafting.value = true

  // 模拟炼金过程
  await new Promise(resolve => setTimeout(resolve, 1000))

  // 执行炼金操作
  const result = performAlchemyOperation(player.value, selectedRecipe.value)

  // 消耗材料
  if (result.success) {
    selectedRecipe.value.ingredients.forEach(ingredient => {
      playerStore.removeFromInventory(ingredient.id, ingredient.quantity)
    })
    
    // 添加产品到背包
    playerStore.addToInventory({
      id: result.product.id,
      name: getProductName(result.product.id),
      type: 'potion',
      quantity: result.product.quantity
    })
  } else {
    // 失败也消耗材料
    selectedRecipe.value.ingredients.forEach(ingredient => {
      playerStore.removeFromInventory(ingredient.id, ingredient.quantity)
    })
  }

  craftResult.value = result
  showResult.value = true
  isCrafting.value = false

  // 保存玩家数据
  playerStore.saveGame()
}

onMounted(() => {
  // 确保玩家有炼金经验字段
  if (player.value.alchemyExp === undefined) {
    playerStore.player.alchemyExp = 0
  }
})
</script>

<style scoped>
.selected-recipe {
  background-color: rgba(33, 150, 243, 0.1);
  border-left: 4px solid #2196f3;
}

.region-item:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.current-region {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}
</style>