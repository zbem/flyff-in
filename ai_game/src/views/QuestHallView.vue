<template>
  <v-card>
    <v-card-title>
      <v-icon left>mdi-castle</v-icon>
      冒险者大厅
    </v-card-title>
    
    <v-card-subtitle>
      接受任务，证明你的实力！当前声望: {{ playerStore?.reputation?.cities || 0 }}
    </v-card-subtitle>

    <v-card-text>
      <v-tabs v-model="tab" grow>
        <v-tab value="available">可接任务</v-tab>
        <v-tab value="active">进行中任务</v-tab>
        <v-tab value="completed">已完成任务</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <!-- 可接任务 -->
        <v-window-item value="available">
          <v-row class="mt-4">
            <v-col
              v-for="quest in availableQuests"
              :key="quest.id"
              cols="12"
              md="6"
              lg="4"
            >
              <v-card 
                :color="getDifficultyColor(quest.difficulty)"
                variant="outlined"
                :class="['quest-card', `difficulty-${quest.difficulty}`]"
              >
                <v-card-title class="d-flex align-center">
                  <v-icon left>{{ getQuestTypeIcon(quest.type) }}</v-icon>
                  {{ quest.name }}
                  <v-spacer></v-spacer>
                  <v-chip size="small" :color="getDifficultyColor(quest.difficulty)">
                    {{ getDifficultyName(quest.difficulty) }}
                  </v-chip>
                </v-card-title>

                <v-card-text>
                  <p class="text-body-2">{{ quest.description }}</p>
                  
                  <v-divider class="my-2"></v-divider>

                  <div class="text-caption">
                    <div><strong>发布者:</strong> {{ quest.npc }}</div>
                    <div><strong>地区:</strong> {{ quest.area }}</div>
                    <div><strong>等级要求:</strong> Lv.{{ quest.minLevel }}</div>
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <div class="text-caption">
                    <strong>任务要求:</strong>
                    <ul class="mt-1">
                      <li v-for="(req, index) in quest.requirements" :key="index">
                        {{ getRequirementText(req) }}
                      </li>
                    </ul>
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <div class="text-caption">
                    <strong>任务奖励:</strong>
                    <ul class="mt-1">
                      <li>金币: {{ quest.rewards.gold }}</li>
                      <li>经验: {{ quest.rewards.exp }}</li>
                      <li v-for="(item, index) in quest.rewards.items" :key="index">
                        {{ getItemName(item.id) }} ×{{ item.quantity }}
                      </li>
                    </ul>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    color="primary"
                    @click="acceptQuest(quest)"
                    :disabled="playerStore.level < quest.minLevel"
                    block
                  >
                    <v-icon left>mdi-check</v-icon>
                    接受任务
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col v-if="availableQuests.length === 0" cols="12">
              <v-alert type="info" variant="outlined">
                暂无可用任务。提升等级或完成现有任务来解锁更多任务。
              </v-alert>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- 进行中任务 -->
        <v-window-item value="active">
          <v-row class="mt-4">
            <v-col
              v-for="quest in activeQuests"
              :key="quest.id"
              cols="12"
              md="6"
              lg="4"
            >
              <v-card variant="outlined">
                <v-card-title class="d-flex align-center">
                  <v-icon left>{{ getQuestTypeIcon(quest.type) }}</v-icon>
                  {{ quest.name }}
                  <v-spacer></v-spacer>
                  <v-chip size="small" :color="getDifficultyColor(quest.difficulty)">
                    {{ getDifficultyName(quest.difficulty) }}
                  </v-chip>
                </v-card-title>

                <v-card-text>
                  <p class="text-body-2">{{ quest.description }}</p>
                  
                  <v-divider class="my-2"></v-divider>

                  <div class="text-caption">
                    <strong>任务进度:</strong>
                    <v-progress-linear
                      v-for="(progress, index) in getCurrentQuestProgress(quest)"
                      :key="index"
                      :model-value="(progress.current / progress.target) * 100"
                      color="primary"
                      height="8"
                      class="my-1"
                    >
                      <template v-slot:default>
                        <span class="text-caption">
                          {{ getProgressText(progress) }} ({{ progress.current }}/{{ progress.target }})
                        </span>
                      </template>
                    </v-progress-linear>
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <div class="text-caption">
                    <strong>任务奖励:</strong>
                    <ul class="mt-1">
                      <li>金币: {{ quest.rewards.gold }}</li>
                      <li>经验: {{ quest.rewards.exp }}</li>
                      <li v-for="(item, index) in quest.rewards.items" :key="index">
                        {{ getItemName(item.id) }} ×{{ item.quantity }}
                      </li>
                    </ul>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    color="success"
                    @click="completeQuest(quest)"
                    :disabled="!checkQuestComplete(quest)"
                    block
                  >
                    <v-icon left>mdi-trophy</v-icon>
                    完成任务
                  </v-btn>
                  
                  <v-btn
                    color="error"
                    @click="abandonQuest(quest)"
                    variant="outlined"
                    block
                    class="mt-2"
                  >
                    <v-icon left>mdi-close</v-icon>
                    放弃任务
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col v-if="activeQuests.length === 0" cols="12">
              <v-alert type="info" variant="outlined">
                没有进行中的任务。去接受一些挑战吧！
              </v-alert>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- 已完成任务 -->
        <v-window-item value="completed">
          <v-row class="mt-4">
            <v-col
              v-for="quest in completedQuests"
              :key="quest.id"
              cols="12"
              md="6"
              lg="4"
            >
              <v-card variant="outlined" color="success-lighten-5">
                <v-card-title class="d-flex align-center">
                  <v-icon left color="success">mdi-check-circle</v-icon>
                  {{ quest.name }}
                  <v-spacer></v-spacer>
                  <v-chip size="small" :color="getDifficultyColor(quest.difficulty)">
                    {{ getDifficultyName(quest.difficulty) }}
                  </v-chip>
                </v-card-title>

                <v-card-text>
                  <p class="text-body-2">{{ quest.description }}</p>
                  
                  <v-divider class="my-2"></v-divider>

                  <div class="text-caption text-success">
                    <v-icon small color="success">mdi-check</v-icon>
                    已完成此任务
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <div class="text-caption">
                    <strong>获得奖励:</strong>
                    <ul class="mt-1">
                      <li>金币: {{ quest.rewards.gold }}</li>
                      <li>经验: {{ quest.rewards.exp }}</li>
                      <li v-for="(item, index) in quest.rewards.items" :key="index">
                        {{ getItemName(item.id) }} ×{{ item.quantity }}
                      </li>
                    </ul>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col v-if="completedQuests.length === 0" cols="12">
              <v-alert type="info" variant="outlined">
                还没有完成任何任务。快去接受你的第一个挑战吧！
              </v-alert>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePlayerStore } from '../stores/player'
import { 
  getAllQuests, 
  getAvailableQuests, 
  getQuestTypeInfo, 
  getDifficultyInfo,
  isQuestComplete,
  getQuestProgress,
  claimQuestRewards
} from '../config/quests'
import itemsConfig from '../config/items'
import { getMonsterById } from '../config/monsters'

const playerStore = usePlayerStore()
const tab = ref('available')

// 计算属性
const player = computed(() => playerStore || { 
  level: 1, 
  reputation: { cities: 0, factions: {} }, 
  activeQuests: [], 
  completedQuests: [],
  questProgress: { monsterKills: {}, visitedAreas: [], collectedItems: {} }
})

const availableQuests = computed(() => {
  const allQuests = getAllQuests()
  const available = getAvailableQuests(playerStore.level)
  return available.filter(quest => 
    !playerStore.activeQuests.includes(quest.id) && 
    !playerStore.completedQuests.includes(quest.id)
  )
})

const activeQuests = computed(() => {
  const allQuests = getAllQuests()
  return allQuests.filter(quest => 
    playerStore.activeQuests.includes(quest.id)
  )
})

const completedQuests = computed(() => {
  const allQuests = getAllQuests()
  return allQuests.filter(quest => 
    playerStore.completedQuests.includes(quest.id)
  )
})

// 方法
const getDifficultyColor = (difficulty) => {
  const info = getDifficultyInfo(difficulty)
  return info ? info.color : 'grey'
}

const getDifficultyName = (difficulty) => {
  const info = getDifficultyInfo(difficulty)
  return info ? info.name : '未知'
}

const getQuestTypeIcon = (typeId) => {
  const info = getQuestTypeInfo(typeId)
  return info ? info.icon : 'mdi-help'
}

const getRequirementText = (requirement) => {
  switch (requirement.type) {
    case 'item':
      const item = itemsConfig.getItemById(requirement.target)
      return `收集 ${item?.name || '未知物品'} ×${requirement.quantity}`
    
    case 'monster':
      const monster = getMonsterById(requirement.target)
      return `击败 ${monster?.name || '未知怪物'} ×${requirement.quantity}`
    
    case 'area':
      return `探索区域: ${requirement.target}`
    
    default:
      return '未知要求'
  }
}

const getItemName = (itemId) => {
  const item = itemsConfig.getItemById(itemId)
  return item ? item.name : '未知物品'
}

const getProgressText = (progress) => {
  switch (progress.type) {
    case 'item':
      const item = itemsConfig.getItemById(progress.target)
      return item ? item.name : '收集物品'
    
    case 'monster':
      const monster = getMonsterById(progress.target)
      return monster ? monster.name : '击败怪物'
    
    case 'area':
      return '探索区域'
    
    default:
      return '进度'
  }
}

const acceptQuest = (quest) => {
  // 直接使用新添加的方法接取任务
  const success = playerStore.acceptQuest(quest.id)
  
  if (success) {
    // 检查并更新任务进度（如果已经有物品）
    quest.requirements.forEach(requirement => {
      if (requirement.type === 'item') {
        const currentCount = playerStore.getItemCount(requirement.target)
        if (currentCount > 0) {
          // 使用新添加的方法更新任务进度
          playerStore.updateQuestItemProgress(requirement.target, currentCount)
        }
      }
    })
    
    // 添加提示信息
    alert(`成功接取任务: ${quest.name}`)
  }
}

const completeQuest = (quest) => {
  if (isQuestComplete(playerStore, quest)) {
    const rewards = claimQuestRewards(playerStore, quest)
    
    // 使用新添加的方法完成任务
    playerStore.completeQuest(quest.id)
    
    // 增加声望
    if (!playerStore.reputation) {
      playerStore.reputation = { cities: 0, factions: {} }
    }
    playerStore.reputation.cities += getDifficultyInfo(quest.difficulty).rewardMultiplier * 10
    playerStore.autoSave()
    
    // 显示奖励信息
    alert(`任务完成！获得: ${rewards.gold}金币, ${rewards.exp}经验`)
  }
}

const abandonQuest = (quest) => {
  if (confirm('确定要放弃这个任务吗？放弃后需要重新接受。')) {
    // 使用新添加的方法放弃任务
    const success = playerStore.abandonQuest(quest.id)
    if (success) {
      alert(`已放弃任务: ${quest.name}`)
    }
  }
}

const checkQuestComplete = (quest) => {
  // 确保 quest 存在
  if (!quest) return false
  return isQuestComplete(playerStore, quest)
}

const getCurrentQuestProgress = (quest) => {
  // 确保 quest 存在
  if (!quest) return []
  return getQuestProgress(playerStore, quest)
}

onMounted(() => {
  // 确保玩家对象存在
  if (!playerStore.player) {
    playerStore.player = {}
  }
  
  // 确保玩家有所有必要字段
  if (!playerStore.player.level) playerStore.player.level = 1
  if (!playerStore.player.inventory) playerStore.player.inventory = []
  if (!playerStore.player.activeQuests) playerStore.player.activeQuests = []
  if (!playerStore.player.completedQuests) playerStore.player.completedQuests = []
  if (!playerStore.player.questProgress) playerStore.player.questProgress = { 
    monsterKills: {}, 
    visitedAreas: [], 
    collectedItems: {} 
  }
  if (!playerStore.player.reputation) playerStore.player.reputation = { cities: 0, factions: {} }
  
  // 调试信息 - 更详细的日志
  console.log('=== 玩家状态调试 ===')
  console.log('玩家存储状态:', JSON.stringify(playerStore.player, null, 2))
  console.log('玩家等级:', playerStore.player.level || 1)
  console.log('进行中任务:', playerStore.player.activeQuests)
  console.log('已完成任务:', playerStore.player.completedQuests)
  
  const allQuests = getAllQuests()
  console.log('所有任务数量:', allQuests.length)
  console.log('所有任务ID:', allQuests.map(q => q.id))
  
  const available = getAvailableQuests(playerStore.player.level || 1)
  console.log('根据等级可用的任务:', available.map(q => `${q.id}: ${q.name} (Lv.${q.minLevel})`))
  
  console.log('最终可用任务:', availableQuests.value.map(q => `${q.id}: ${q.name}`))
  console.log('可用任务数量:', availableQuests.value.length)
  
  // 检查 computed 属性
  console.log('player.value.level:', player.value.level)
  console.log('player.value.activeQuests:', player.value.activeQuests)
  console.log('player.value.completedQuests:', player.value.completedQuests)
  console.log('========================')
  
  // 强制刷新视图（如果有缓存问题）
  setTimeout(() => {
    tab.value = 'available'
  }, 100)
})
</script>

<style scoped>
.quest-card {
  transition: transform 0.2s ease;
}

.quest-card:hover {
  transform: translateY(-2px);
}

.difficulty-D {
  border-left: 4px solid #9e9e9e;
}

.difficulty-C {
  border-left: 4px solid #2196f3;
}

.difficulty-B {
  border-left: 4px solid #4caf50;
}

.difficulty-A {
  border-left: 4px solid #9c27b0;
}

.difficulty-S {
  border-left: 4px solid #ff9800;
}

.difficulty-SS {
  border-left: 4px solid #f44336;
}

.difficulty-SSS {
  border-left: 4px solid #ffd700;
}
</style>