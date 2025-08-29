<template>
  <v-card class="shop-container" elevation="2">
    <v-card-title class="bg-primary text-white">
      <v-icon left>mdi-store</v-icon>
      商城系统
    </v-card-title>

    <v-card-text class="pa-0">
      <v-container fluid class="pa-4">
        <!-- 货币信息 -->
        <v-row class="mb-4">
          <v-col cols="12" sm="4">
            <v-card color="amber" variant="flat" class="text-center">
              <v-card-text class="pa-3">
                <v-icon large color="white">mdi-coin</v-icon>
                <div class="text-h6 font-weight-bold text-white">{{ playerStore.gold }}</div>
                <div class="text-caption text-white">金币</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card color="blue" variant="flat" class="text-center">
              <v-card-text class="pa-3">
                <v-icon large color="white">mdi-diamond</v-icon>
                <div class="text-h6 font-weight-bold text-white">{{ playerStore.diamonds }}</div>
                <div class="text-caption text-white">钻石</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card color="purple" variant="flat" class="text-center">
              <v-card-text class="pa-3">
                <v-icon large color="white">mdi-star</v-icon>
                <div class="text-h6 font-weight-bold text-white">{{ playerStore.points }}</div>
                <div class="text-caption text-white">积分</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 商城选择 -->
        <v-row class="mb-4">
          <v-col cols="12">
            <v-btn-toggle v-model="selectedShop" mandatory color="primary" class="w-100">
              <v-btn value="generalShop" class="flex-grow-1">
                <v-icon left>mdi-cart</v-icon>
                普通商城
              </v-btn>
              <v-btn value="premiumShop" class="flex-grow-1">
                <v-icon left>mdi-diamond</v-icon>
                高级商城
              </v-btn>
              <v-btn value="pointsShop" class="flex-grow-1">
                <v-icon left>mdi-star</v-icon>
                积分商城
              </v-btn>
              <v-btn value="exchangeShop" class="flex-grow-1">
                <v-icon left>mdi-swap-horizontal</v-icon>
                兑换商城
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>

        <!-- 商品列表 -->
        <v-row>
          <v-col cols="12">
            <v-card elevation="1">
              <v-card-title class="bg-grey-lighten-3">
                <v-icon left>{{ getShopIcon(selectedShop) }}</v-icon>
                {{ getShopName(selectedShop) }}
              </v-card-title>
              <v-card-text class="pa-0">
                <v-list three-line>
                  <v-list-item
                    v-for="item in shopItems"
                    :key="item.id"
                    :class="{ 'disabled-item': !canAfford(item) }"
                  >
                    <template v-slot:prepend>
                      <v-avatar size="56" :color="getItemColor(item.type)" class="mr-3">
                        <v-icon dark size="large">{{ item.icon || 'mdi-package' }}</v-icon>
                      </v-avatar>
                    </template>

                    <v-list-item-title class="text-body-1 font-weight-medium">
                      {{ item.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-caption">
                      {{ item.description }}
                    </v-list-item-subtitle>

                    <template v-slot:append>
                      <div class="d-flex flex-column align-end">
                        <!-- 价格显示 -->
                        <div class="d-flex align-center mb-1">
                          <v-icon
                            v-if="selectedShop !== 'exchangeShop'"
                            :color="getCurrencyColor(shopCurrency)"
                            size="small"
                            class="mr-1"
                          >
                            {{ getCurrencyIcon(shopCurrency) }}
                          </v-icon>
                          <span
                            :class="{
                              'text-success font-weight-medium': canAfford(item),
                              'text-error': !canAfford(item)
                            }"
                          >
                            {{ getItemPrice(item) }}
                          </span>
                        </div>

                        <!-- 兑换商城的多种货币价格 -->
                        <template v-if="selectedShop === 'exchangeShop' && item.price">
                          <div
                            v-for="([currency, amount], index) in Object.entries(item.price)"
                            :key="index"
                            class="d-flex align-center text-caption"
                          >
                            <v-icon
                              :color="getCurrencyColor(currency)"
                              size="small"
                              class="mr-1"
                            >
                              {{ getCurrencyIcon(currency) }}
                            </v-icon>
                            <span :class="{ 'text-error': !hasEnoughCurrency(currency, amount) }">
                              {{ amount }}
                            </span>
                          </div>
                        </template>

                        <v-btn
                          color="primary"
                          size="small"
                          :disabled="!canAfford(item)"
                          @click="selectedItem = item; confirmDialog = true"
                          class="mt-2"
                        >
                          购买
                        </v-btn>
                      </div>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <!-- 购买确认对话框 -->
    <v-dialog v-model="confirmDialog" max-width="400">
      <v-card>
        <v-card-title class="bg-primary text-white">
          <v-icon left>mdi-cart-check</v-icon>
          确认购买
        </v-card-title>
        <v-card-text class="pt-4">
          <div class="text-body-1 mb-2">确定要购买 <strong>{{ selectedItem?.name }}</strong> 吗？</div>
          <div class="text-caption text-grey">价格: {{ getItemPrice(selectedItem) }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="confirmDialog = false" color="grey">取消</v-btn>
          <v-btn @click="confirmPurchase" color="primary">确认购买</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 购买成功提示 -->
    <v-snackbar v-model="purchaseSuccess" color="success" timeout="2000">
      <v-icon left>mdi-check</v-icon>
      购买成功！
    </v-snackbar>

    <!-- 购买失败提示 -->
    <v-snackbar v-model="purchaseError" color="error" timeout="2000">
      <v-icon left>mdi-alert</v-icon>
      {{ errorMessage }}
    </v-snackbar>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePlayerStore } from '../stores/player'
import { 
  shopConfig, 
  getShopItems, 
  getShopInfo, 
  canAffordItem, 
  purchaseItem,
  getCurrencyName,
  getCurrencyIcon
} from '../config/shop'

const playerStore = usePlayerStore()
const selectedShop = ref('generalShop')
const confirmDialog = ref(false)
const selectedItem = ref(null)
const purchaseSuccess = ref(false)
const purchaseError = ref(false)
const errorMessage = ref('')

// 当前商城的物品
const shopItems = computed(() => {
  return getShopItems(selectedShop.value)
})

// 当前商城的货币类型
const shopCurrency = computed(() => {
  const shop = getShopInfo(selectedShop.value)
  return shop?.currency || 'gold'
})

// 获取商城名称
const getShopName = (shopType) => {
  const shop = shopConfig[shopType]
  return shop?.name || '商城'
}

// 获取商城图标
const getShopIcon = (shopType) => {
  const icons = {
    generalShop: 'mdi-cart',
    premiumShop: 'mdi-diamond',
    pointsShop: 'mdi-star',
    exchangeShop: 'mdi-swap-horizontal'
  }
  return icons[shopType] || 'mdi-store'
}

// 获取物品颜色
const getItemColor = (itemType) => {
  const colors = {
    weapon: 'red',
    armor: 'blue',
    shield: 'green',
    consumable: 'orange',
    potion: 'purple',
    skill: 'cyan',
    boost: 'pink',
    special: 'amber'
  }
  return colors[itemType] || 'grey'
}

// 获取货币颜色
const getCurrencyColor = (currency) => {
  const colors = {
    gold: 'amber',
    diamond: 'blue',
    points: 'purple',
    items: 'green'
  }
  return colors[currency] || 'grey'
}

// 获取物品价格显示
const getItemPrice = (item) => {
  if (!item) return '0'
  
  if (selectedShop.value === 'exchangeShop' && item.price) {
    return Object.entries(item.price)
      .map(([currency, amount]) => `${amount} ${getCurrencyName(currency)}`)
      .join(' + ')
  }
  
  return item.price?.toString() || '0'
}

// 检查是否能够购买
const canAfford = (item) => {
  return canAffordItem(playerStore, selectedShop.value, item.id)
}

// 检查货币是否足够（用于兑换商城）
const hasEnoughCurrency = (currency, amount) => {
  if (currency === 'gold') return playerStore.gold >= amount
  if (currency === 'diamonds') return playerStore.diamonds >= amount
  if (currency === 'points') return playerStore.points >= amount
  // 道具数量检查
  return playerStore.getItemCount(currency) >= amount
}

// 确认购买
const confirmPurchase = () => {
  if (!selectedItem.value) return

  const success = purchaseItem(playerStore, selectedShop.value, selectedItem.value.id)
  
  if (success) {
    purchaseSuccess.value = true
    // 更新玩家数据
    playerStore.$patch({})
  } else {
    errorMessage.value = '购买失败，请检查货币或道具是否足够'
    purchaseError.value = true
  }
  
  confirmDialog.value = false
  selectedItem.value = null
}

onMounted(() => {
  // 初始化商城数据
})
</script>

<style scoped>
.shop-container {
  min-height: 600px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.disabled-item {
  opacity: 0.6;
  filter: grayscale(1);
}

.disabled-item .v-btn {
  pointer-events: none;
}

.w-100 {
  width: 100%;
}

/* 美化列表项 */
.v-list-item {
  border-radius: 8px;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.v-list-item:hover {
  background-color: #f8f9fa;
  transform: translateX(4px);
}

/* 美化卡片 */
.v-card {
  border-radius: 12px;
  overflow: hidden;
}

/* 美化按钮 */
.v-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.v-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

/* 响应式设计 */
@media (max-width: 960px) {
  .shop-container {
    min-height: auto;
  }
  
  .v-list-item {
    flex-direction: column;
    align-items: stretch;
  }
  
  .v-list-item .v-list-item__append {
    margin-left: 0;
    margin-top: 12px;
    align-items: flex-start !important;
  }
}
</style>