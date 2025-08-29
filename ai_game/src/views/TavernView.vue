<template>
  <v-card class="tavern-container" elevation="2">
    <v-card-title class="bg-amber-darken-2 text-white">
      <v-icon left>mdi-glass-mug-variant</v-icon>
      {{ currentCity }} 酒馆
    </v-card-title>

    <v-card-text class="pa-0">
      <v-container fluid class="pa-4">
        <v-row>
          <!-- 左侧面板：可招募佣兵 -->
          <v-col cols="12" md="7" class="left-panel">
            <v-card elevation="1" class="mb-4">
              <v-card-title class="bg-grey-lighten-3 d-flex justify-space-between">
                <div>
                  <v-icon left>mdi-account-search</v-icon>
                  可招募佣兵
                </div>
                <v-btn
                  color="primary"
                  size="small"
                  @click="refreshTavernMercenaries"
                  :loading="isRefreshing"
                  :disabled="isRefreshing"
                >
                  <v-icon start>mdi-refresh</v-icon>
                  刷新 ({{ refreshCost }} 金币)
                </v-btn>
              </v-card-title>
              
              <v-card-text class="pa-0">
                <v-list class="recruit-list">
                  <v-list-item
                    v-for="mercenary in availableMercenaries"
                    :key="mercenary.id"
                    :active="selectedMercenary && selectedMercenary.id === mercenary.id"
                    @click="selectMercenary(mercenary)"
                    class="recruit-item"
                  >
                    <template v-slot:prepend>
                      <v-avatar :color="getMercenaryClassColor(mercenary.class)" size="36">
                        <v-icon color="white">{{ getMercenaryClassIcon(mercenary.class) }}</v-icon>
                      </v-avatar>
                    </template>
                    
                    <v-list-item-title class="font-weight-medium">
                      {{ mercenary.name }}
                      <v-chip
                        v-if="hasMercenary(mercenary.id)"
                        size="x-small"
                        color="green"
                        class="ml-2"
                      >
                        已拥有
                      </v-chip>
                    </v-list-item-title>
                    
                    <v-list-item-subtitle>
                      {{ getMercenaryClassName(mercenary.class) }}
                    </v-list-item-subtitle>
                    
                    <template v-slot:append>
                      <v-chip color="amber" variant="outlined" size="small">
                        {{ mercenary.cost }} 金币
                      </v-chip>
                    </template>
                  </v-list-item>
                  
                  <div v-if="availableMercenaries.length === 0" class="text-center pa-4 text-grey">
                    <v-icon size="large" class="mb-2">mdi-account-search</v-icon>
                    <div>酒馆里没有可招募的佣兵</div>
                    <div class="text-caption">点击刷新按钮寻找新的佣兵</div>
                  </div>
                </v-list>
              </v-card-text>
            </v-card>
            
            <!-- 酒馆氛围 -->
            <v-card elevation="1">
              <v-card-title class="bg-grey-lighten-3">
                <v-icon left>mdi-information</v-icon>
                酒馆信息
              </v-card-title>
              <v-card-text>
                <div class="tavern-atmosphere">
                  <p>{{ getTavernDescription(currentCity) }}</p>
                  <p class="text-caption mt-2">
                    <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
                    上次刷新: {{ lastRefreshTime ? formatTime(lastRefreshTime) : '从未刷新' }}
                  </p>
                </div>
                
                <v-divider class="my-3"></v-divider>
                
                <div class="d-flex align-center">
                  <div>
                    <div class="text-subtitle-1 font-weight-bold">你的金币:</div>
                    <div class="text-h6 text-amber-darken-3">{{ playerStore.gold }}</div>
                  </div>
                  <v-spacer></v-spacer>
                  <div>
                    <div class="text-subtitle-1 font-weight-bold">已招募佣兵:</div>
                    <div class="text-h6 text-primary">{{ mercenaryStore.totalMercenariesRecruited }}</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          
          <!-- 右侧面板：佣兵详情 -->
          <v-col cols="12" md="5" class="right-panel">
            <template v-if="selectedMercenary">
              <v-card elevation="1">
                <v-card-title class="bg-grey-lighten-3 d-flex justify-space-between">
                  <div>
                    <v-icon left>mdi-account-details</v-icon>
                    佣兵详情
                  </div>
                  <v-btn
                    color="success"
                    :disabled="!canRecruit"
                    @click="recruitMercenary"
                  >
                    <v-icon start>mdi-account-plus</v-icon>
                    招募 ({{ selectedMercenary.cost }} 金币)
                  </v-btn>
                </v-card-title>
                
                <v-card-text>
                  <!-- 佣兵头像和基本信息 -->
                  <div class="d-flex align-center mb-4">
                    <v-avatar :color="getMercenaryClassColor(selectedMercenary.class)" size="64" class="mr-4">
                      <v-icon color="white" size="large">{{ getMercenaryClassIcon(selectedMercenary.class) }}</v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-h5">{{ selectedMercenary.name }}</div>
                      <div class="text-subtitle-1">{{ getMercenaryClassName(selectedMercenary.class) }}</div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </template>
            
            <template v-else>
              <v-card elevation="1" class="text-center pa-8">
                <v-icon size="x-large" color="amber" class="mb-4">mdi-glass-mug-variant</v-icon>
                <h3 class="text-h5 mb-2">欢迎来到 {{ currentCity }} 酒馆</h3>
                <p class="text-body-1 text-grey">
                  这里聚集着各种各样的冒险者，选择一位佣兵查看详情并招募他们加入你的队伍
                </p>
                <v-btn
                  color="amber"
                  class="mt-4"
                  @click="refreshTavernMercenaries"
                  :loading="isRefreshing"
                  :disabled="isRefreshing"
                >
                  <v-icon start>mdi-refresh</v-icon>
                  刷新酒馆 ({{ refreshCost }} 金币)
                </v-btn>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePlayerStore } from '../stores/player'
import { useMercenaryStore } from '../stores/mercenary'
import { useToast } from 'vue-toastification'

const playerStore = usePlayerStore()
const mercenaryStore = useMercenaryStore()
const toast = useToast()

// 当前城市
const currentCity = ref(playerStore.currentMap || '卡诺萨')

// 刷新费用
const refreshCost = 100

// 选中的佣兵
const selectedMercenary = ref(null)

// 是否正在刷新
const isRefreshing = ref(false)

// 招募对话框
const recruitDialog = ref(false)
const recruitResult = ref({
  success: false,
  isNew: false,
  mercenary: null,
  shards: 0
})

// 可招募的佣兵
const availableMercenaries = computed(() => {
  return mercenaryStore.availableMercenariesInCity(currentCity.value) || []
})

// 上次刷新时间
const lastRefreshTime = computed(() => {
  return mercenaryStore.tavernRefreshTime
})

// 是否可以招募
const canRecruit = computed(() => {
  if (!selectedMercenary.value) return false
  return playerStore.gold >= selectedMercenary.value.cost
})

// 选择佣兵
const selectMercenary = (mercenary) => {
  selectedMercenary.value = mercenary
}

// 刷新酒馆佣兵
const refreshTavernMercenaries = () => {
  if (playerStore.gold < refreshCost) {
    toast.error(`金币不足，需要 ${refreshCost} 金币`)
    return
  }
  
  isRefreshing.value = true
  
  // 扣除金币
  playerStore.gold -= refreshCost
  
  // 生成随机佣兵
  setTimeout(() => {
    const mercenaries = generateRandomMercenaries()
    mercenaryStore.refreshTavernMercenaries(currentCity.value, mercenaries)
    
    toast.success('酒馆佣兵已刷新')
    isRefreshing.value = false
  }, 1000)
}

// 招募佣兵
const recruitMercenary = () => {
  if (!selectedMercenary.value) return
  
  if (playerStore.gold < selectedMercenary.value.cost) {
    toast.error(`金币不足，需要 ${selectedMercenary.value.cost} 金币`)
    return
  }
  
  // 扣除金币
  playerStore.gold -= selectedMercenary.value.cost
  
  // 招募佣兵
  const result = mercenaryStore.recruitMercenary(selectedMercenary.value, currentCity.value)
  
  if (result.success) {
    recruitResult.value = result
    recruitDialog.value = true
    
    // 从可招募列表中移除
    if (result.isNew) {
      // 自动保存
      playerStore.autoSave()
    }
  } else {
    toast.error('招募失败')
  }
}

// 检查是否已拥有佣兵
const hasMercenary = (mercenaryId) => {
  return mercenaryStore.mercenaries.some(m => m.id === mercenaryId)
}

// 获取佣兵职业名称
const getMercenaryClassName = (classType) => {
  const classes = {
    warrior: '战士',
    mage: '法师',
    priest: '牧师',
    hunter: '猎人',
    assassin: '刺客'
  }
  return classes[classType] || classType
}

// 获取佣兵职业图标
const getMercenaryClassIcon = (classType) => {
  const icons = {
    warrior: 'mdi-sword',
    mage: 'mdi-magic-staff',
    priest: 'mdi-cross',
    hunter: 'mdi-bow-arrow',
    assassin: 'mdi-knife'
  }
  return icons[classType] || 'mdi-account'
}

// 获取佣兵职业颜色
const getMercenaryClassColor = (classType) => {
  const colors = {
    warrior: 'red',
    mage: 'blue',
    priest: 'amber',
    hunter: 'green',
    assassin: 'purple'
  }
  return colors[classType] || 'grey'
}

// 获取技能类型颜色
const getSkillTypeColor = (type) => {
  const colors = {
    physical: '#d32f2f',
    magic: '#2196f3',
    fire: '#ff5722',
    ice: '#03a9f4',
    lightning: '#ffeb3b',
    holy: '#ffc107',
    heal: '#4caf50',
    buff: '#9c27b0',
    debuff: '#795548'
  }
  return colors[type] || '#607d8b'
}

// 获取技能名称
const getSkillName = (skillId) => {
  // 简单处理：将id转换为可读名称
  return skillId.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

// 获取技能描述
const getSkillDescription = (skillId) => {
  // 这里应该从技能配置中获取描述
  // 暂时返回一些默认描述
  if (skillId.includes('slash')) return '对敌人造成物理伤害'
  if (skillId.includes('fireball')) return '对敌人造成火焰伤害'
  if (skillId.includes('heal')) return '恢复队友生命值'
  if (skillId.includes('shield')) return '增加队友防御力'
  if (skillId.includes('arrow')) return '对敌人造成远程伤害'
  return '使用特殊技能攻击敌人'
}

// 获取酒馆描述
const getTavernDescription = (cityName) => {
  const descriptions = {
    '卡诺萨': '卡诺萨酒馆是冒险者们最喜欢的聚集地，这里的麦酒和烤肉闻名遐迩。酒馆老板是一位退役的战士，他总是能讲出许多精彩的冒险故事。',
    '艾尔文': '艾尔文酒馆位于城市的中心广场，是法师学院的学生们经常光顾的地方。这里的魔法饮料能让人暂时获得各种奇妙的能力。',
    '暗影港': '暗影港酒馆隐藏在城市的阴暗角落，是刺客和盗贼们交换情报的秘密场所。这里的老板对每位客人的身份都守口如瓶。',
    '翡翠森林': '翡翠森林酒馆建在一棵巨大的古树上，是猎人和德鲁伊们休息的地方。这里供应的食物全部来自森林的馈赠，新鲜而美味。',
    '圣光城': '圣光城酒馆由教会资助，是牧师和圣骑士们讨论信仰的场所。这里的圣水据说有治愈伤口的神奇功效。'
  }
  
  return descriptions[cityName] || `${cityName}酒馆是当地冒险者们经常光顾的地方，这里可以招募到各种各样的佣兵。`
}

// 获取佣兵默认描述
const getMercenaryDefaultDescription = (mercenary) => {
  const classDescriptions = {
    warrior: '这是一位经验丰富的战士，擅长近战和防御。他的剑术精湛，能够在战场上保护队友。',
    mage: '这是一位精通元素魔法的法师，能够释放强大的魔法攻击。他的智慧和知识使他成为队伍中的重要一员。',
    priest: '这是一位虔诚的牧师，擅长治疗和辅助魔法。他的祈祷能够为队友提供保护和恢复。',
    hunter: '这是一位敏捷的猎人，擅长远程攻击和追踪。他的箭术精准，能够在战斗中造成可观的伤害。',
    assassin: '这是一位神秘的刺客，擅长隐匿和突袭。他的匕首能够给敌人致命一击，是队伍中不可或缺的一员。'
  }
  
  return classDescriptions[mercenary.class] || `${mercenary.name} 是一位经验丰富的冒险者，愿意加入你的队伍一同战斗。`
}

// 格式化时间
const formatTime = (timeString) => {
  const date = new Date(timeString)
  return date.toLocaleString()
}

// 生成随机佣兵
const generateRandomMercenaries = () => {
  // 这里应该从佣兵池中随机选择
  // 暂时返回一些示例佣兵
  const mercenaryPool = [
    {
      id: 'merc_warrior_1',
      name: '罗德里克',
      class: 'warrior',
      cost: 150,
      baseHealth: 120,
      baseAttack: 12,
      baseDefense: 8,
      baseSkills: [
        { id: 'warrior_slash', type: 'physical' }
      ]
    },
    {
      id: 'merc_mage_1',
      name: '艾莉娜',
      class: 'mage',
      cost: 180,
      baseMana: 80,
      baseMagicAttack: 14,
      baseSkills: [
        { id: 'mage_fireball', type: 'fire' }
      ]
    },
    {
      id: 'merc_priest_1',
      name: '莱恩',
      class: 'priest',
      cost: 160,
      baseHealth: 100,
      baseMana: 70,
      baseMagicDefense: 10,
      baseSkills: [
        { id: 'priest_heal', type: 'heal' }
      ]
    },
    {
      id: 'merc_hunter_1',
      name: '塞拉',
      class: 'hunter',
      cost: 170,
      baseAttack: 13,
      baseSkills: [
        { id: 'hunter_arrow', type: 'physical' }
      ]
    },
    {
      id: 'merc_assassin_1',
      name: '卡尔',
      class: 'assassin',
      cost: 200,
      baseAttack: 15,
      baseSkills: [
        { id: 'assassin_backstab', type: 'physical' }
      ]
    }
  ]
  
  // 随机选择3-5个佣兵
  const count = Math.floor(Math.random() * 3) + 3 // 3-5个
  const shuffled = [...mercenaryPool].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// 组件挂载时初始化
onMounted(() => {
  // 如果当前城市没有可招募佣兵，生成一些
  if (!mercenaryStore.availableMercenariesInCity(currentCity.value) || 
      mercenaryStore.availableMercenariesInCity(currentCity.value).length === 0) {
    const mercenaries = generateRandomMercenaries()
    mercenaryStore.refreshTavernMercenaries(currentCity.value, mercenaries)
  }
})
</script>

<style scoped>
.tavern-container {
  min-height: 600px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.left-panel,
.right-panel {
  min-height: 500px;
}

.recruit-list {
  max-height: 300px;
  overflow-y: auto;
  border-radius: 8px;
}

.recruit-item {
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  border-radius: 6px;
  margin: 4px;
}

.recruit-item:hover {
  background-color: #fff8e1;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.tavern-atmosphere {
  font-style: italic;
  color: #555;
  background-color: #fff8e1;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.mercenary-description {
  font-style: italic;
  color: #555;
  background-color: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #9e9e9e;
}

.skill-card {
  height: 100%;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 美化滚动条 */
.recruit-list::-webkit-scrollbar {
  width: 6px;
}

.recruit-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.recruit-list::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.recruit-list::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>