<template>
  <v-card class="team-container" elevation="2">
    <v-card-title class="bg-primary text-white">
      <v-icon left>mdi-account-group</v-icon>
      队伍管理
    </v-card-title>

    <v-card-text class="pa-0">
      <v-container fluid class="pa-4">
        <v-row>
          <!-- 左侧面板：队伍编辑 -->
          <v-col cols="12" md="7" class="left-panel">
            <v-card elevation="1" class="mb-4">
              <v-card-title class="bg-grey-lighten-3">
                <v-icon left>mdi-account-multiple-plus</v-icon>
                当前队伍
              </v-card-title>
              
              <v-card-text>
                <div class="team-slots">
                  <!-- 玩家角色（固定在第一位） -->
                  <div class="team-slot player-slot">
                    <v-avatar size="64" color="primary" class="mb-2">
                      <v-icon color="white" size="large">mdi-account-star</v-icon>
                    </v-avatar>
                    <div class="text-subtitle-1 font-weight-bold">{{ playerStore.name }}</div>
                    <div class="text-caption">玩家角色</div>
                    <v-chip color="primary" size="small" class="mt-1">
                      等级 {{ playerStore.level }}
                    </v-chip>
                  </div>
                  
                  <!-- 佣兵槽位 -->
                  <div 
                    v-for="(member, index) in playerStore.activeTeam || []"
                    :key="index"
                    class="team-slot"
                  >
                    <template v-if="member">
                      <v-avatar 
                        :color="getMercenaryClassColor(member.class)" 
                        size="64" 
                        class="mb-2"
                      >
                        <v-icon color="white" size="large">{{ getMercenaryClassIcon(member.class) }}</v-icon>
                      </v-avatar>
                      <div class="text-subtitle-1 font-weight-bold">{{ member.name }}</div>
                      <div class="text-caption">{{ getMercenaryClassName(member.class) }}</div>
                      <v-chip :color="getMercenaryClassColor(member.class)" size="small" class="mt-1">
                        等级 {{ member.level || 1 }}
                      </v-chip>
                      <v-btn
                        icon="mdi-close"
                        size="small"
                        color="error"
                        variant="text"
                        class="remove-btn"
                        @click="removeMercenaryFromTeam(index)"
                      ></v-btn>
                    </template>
                    <template v-else>
                      <v-avatar size="64" color="grey-lighten-3" class="mb-2">
                        <v-icon color="grey" size="large">mdi-plus</v-icon>
                      </v-avatar>
                      <div class="text-subtitle-1 text-grey">空槽位</div>
                      <div class="text-caption">点击添加佣兵</div>
                      <v-btn
                        color="primary"
                        variant="outlined"
                        size="small"
                        class="mt-2"
                        @click="openMercenarySelector(index)"
                      >
                        添加佣兵
                      </v-btn>
                    </template>
                  </div>
                </div>
                
                <v-alert
                  v-if="!playerStore.activeTeam || playerStore.activeTeam.filter(Boolean).length === 0"
                  type="info"
                  variant="tonal"
                  class="mt-4"
                >
                  你的队伍中没有佣兵，请从佣兵列表中选择佣兵加入队伍
                </v-alert>
                
                <v-alert
                  v-if="playerStore.activeTeam && playerStore.activeTeam.filter(Boolean).length > 0"
                  type="success"
                  variant="tonal"
                  class="mt-4"
                >
                  队伍成员将在战斗中协助你，并获得相应的经验值
                </v-alert>
              </v-card-text>
            </v-card>
          </v-col>
          
          <!-- 右侧面板：佣兵列表 -->
          <v-col cols="12" md="5" class="right-panel">
            <v-card elevation="1">
              <v-card-title class="bg-grey-lighten-3 d-flex justify-space-between">
                <div>
                  <v-icon left>mdi-account-multiple</v-icon>
                  可用佣兵
                </div>
                <v-text-field
                  v-model="searchQuery"
                  append-icon="mdi-magnify"
                  label="搜索佣兵"
                  hide-details
                  dense
                  outlined
                  class="search-field"
                  style="max-width: 200px;"
                ></v-text-field>
              </v-card-title>
              
              <v-card-text class="pa-0">
                <v-tabs v-model="activeTab" bg-color="grey-lighten-4">
                  <v-tab value="all">全部</v-tab>
                  <v-tab value="warrior">战士</v-tab>
                  <v-tab value="mage">法师</v-tab>
                  <v-tab value="priest">牧师</v-tab>
                  <v-tab value="hunter">猎人</v-tab>
                  <v-tab value="assassin">刺客</v-tab>
                </v-tabs>
                
                <v-window v-model="activeTab">
                  <v-window-item value="all">
                    <v-list class="mercenary-list">
                      <mercenary-list-item
                        v-for="mercenary in filteredMercenaries"
                        :key="mercenary.id"
                        :mercenary="mercenary"
                        :is-in-team="isMercenaryInTeam(mercenary.id)"
                        @select="selectMercenary"
                        @add-to-team="addToTeam"
                      />
                    </v-list>
                  </v-window-item>
                  
                  <v-window-item
                    v-for="classType in ['warrior', 'mage', 'priest', 'hunter', 'assassin']"
                    :key="classType"
                    :value="classType"
                  >
                    <v-list class="mercenary-list">
                      <mercenary-list-item
                        v-for="mercenary in getMercenariesByClass(classType)"
                        :key="mercenary.id"
                        :mercenary="mercenary"
                        :is-in-team="isMercenaryInTeam(mercenary.id)"
                        @select="selectMercenary"
                        @add-to-team="addToTeam"
                      />
                    </v-list>
                  </v-window-item>
                </v-window>
                
                <div v-if="filteredMercenaries.length === 0" class="text-center pa-4 text-grey">
                  <v-icon size="large" class="mb-2">mdi-account-search</v-icon>
                  <div>没有找到佣兵</div>
                  <div class="text-caption">前往酒馆招募更多佣兵</div>
                  <v-btn
                    color="primary"
                    variant="text"
                    class="mt-2"
                    to="/tavern"
                  >
                    <v-icon start>mdi-glass-mug-variant</v-icon>
                    前往酒馆
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
            
            <!-- 佣兵详情 -->
            <v-card v-if="selectedMercenary" elevation="1" class="mt-4">
              <v-card-title class="bg-grey-lighten-3">
                <v-icon left>mdi-account-details</v-icon>
                佣兵详情
              </v-card-title>
              
              <v-card-text>
                <div class="d-flex align-center mb-4">
                  <v-avatar :color="getMercenaryClassColor(selectedMercenary.class)" size="64" class="mr-4">
                    <v-icon color="white" size="large">{{ getMercenaryClassIcon(selectedMercenary.class) }}</v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-h5">{{ selectedMercenary.name }}</div>
                    <div class="text-subtitle-1">{{ getMercenaryClassName(selectedMercenary.class) }}</div>
                    <v-chip :color="getMercenaryClassColor(selectedMercenary.class)" size="small" class="mt-1">
                      等级 {{ selectedMercenary.level || 1 }}
                    </v-chip>
                  </div>
                </div>
                
                <v-divider class="mb-4"></v-divider>
                
                <!-- 佣兵属性 -->
                <div class="text-subtitle-1 font-weight-bold mb-2">属性:</div>
                <v-row dense>
                  <v-col cols="6">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="red" size="small" class="mr-2">mdi-heart</v-icon>
                      <div>生命值:</div>
                      <v-spacer></v-spacer>
                      <div>{{ getMercenaryCurrentHealth(selectedMercenary) }}</div>
                    </div>
                  </v-col>
                  
                  <v-col cols="6">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="blue" size="small" class="mr-2">mdi-flash</v-icon>
                      <div>魔法值:</div>
                      <v-spacer></v-spacer>
                      <div>{{ getMercenaryCurrentMana(selectedMercenary) }}</div>
                    </div>
                  </v-col>
                  
                  <v-col cols="6">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="orange" size="small" class="mr-2">mdi-sword</v-icon>
                      <div>攻击力:</div>
                      <v-spacer></v-spacer>
                      <div>{{ getMercenaryCurrentAttack(selectedMercenary) }}</div>
                    </div>
                  </v-col>
                  
                  <v-col cols="6">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="green" size="small" class="mr-2">mdi-shield</v-icon>
                      <div>防御力:</div>
                      <v-spacer></v-spacer>
                      <div>{{ getMercenaryCurrentDefense(selectedMercenary) }}</div>
                    </div>
                  </v-col>
                </v-row>
                
                <v-divider class="my-4"></v-divider>
                
                <!-- 佣兵技能 -->
                <div class="text-subtitle-1 font-weight-bold mb-2">技能:</div>
                <v-row dense>
                  <v-col
                    v-for="skill in getMercenarySkills(selectedMercenary)"
                    :key="skill.id"
                    cols="12"
                    sm="6"
                  >
                    <v-card variant="outlined" class="skill-card">
                      <v-card-title class="text-subtitle-2 py-2" :style="`background-color: ${getSkillTypeColor(skill.type)}1A`">
                        {{ getSkillName(skill.id) }}
                      </v-card-title>
                      <v-card-text class="py-2">
                        <div class="text-caption">{{ getSkillDescription(skill.id) }}</div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  
                  <v-col cols="12" v-if="getMercenarySkills(selectedMercenary).length === 0">
                    <div class="text-center pa-2 text-grey">
                      <div class="text-caption">该佣兵没有技能</div>
                    </div>
                  </v-col>
                </v-row>
                
                <v-divider class="my-4"></v-divider>
                
                <div class="text-center">
                  <v-btn
                    color="primary"
                    :disabled="isMercenaryInTeam(selectedMercenary.id)"
                    @click="addToTeam(selectedMercenary)"
                  >
                    <v-icon start>mdi-account-plus</v-icon>
                    {{ isMercenaryInTeam(selectedMercenary.id) ? '已在队伍中' : '添加到队伍' }}
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
  
  <!-- 佣兵选择对话框 -->
  <v-dialog v-model="mercenaryDialog" max-width="500">
    <v-card>
      <v-card-title class="bg-primary text-white">
        <v-icon start>mdi-account-plus</v-icon>
        选择佣兵
      </v-card-title>
      <v-card-text class="pa-0">
        <v-list class="mercenary-select-list">
          <v-list-item
            v-for="mercenary in availableMercenaries"
            :key="mercenary.id"
            @click="selectMercenaryForSlot(mercenary)"
            :active="selectedMercenaryForSlot && selectedMercenaryForSlot.id === mercenary.id"
            class="mercenary-select-item"
          >
            <template v-slot:prepend>
              <v-avatar :color="getMercenaryClassColor(mercenary.class)" size="36">
                <v-icon color="white">{{ getMercenaryClassIcon(mercenary.class) }}</v-icon>
              </v-avatar>
            </template>
            
            <v-list-item-title class="font-weight-medium">
              {{ mercenary.name }}
            </v-list-item-title>
            
            <v-list-item-subtitle>
              {{ getMercenaryClassName(mercenary.class) }} · 等级 {{ mercenary.level || 1 }}
            </v-list-item-subtitle>
          </v-list-item>
          
          <div v-if="availableMercenaries.length === 0" class="text-center pa-4 text-grey">
            <v-icon size="large" class="mb-2">mdi-account-search</v-icon>
            <div>没有可用的佣兵</div>
            <div class="text-caption">前往酒馆招募更多佣兵</div>
          </div>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" variant="text" @click="mercenaryDialog = false">
          取消
        </v-btn>
        <v-btn
          color="primary"
          :disabled="!selectedMercenaryForSlot"
          @click="confirmSelectMercenary"
        >
          确认
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePlayerStore } from '../stores/player'
import { useMercenaryStore } from '../stores/mercenary'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const playerStore = usePlayerStore()
const mercenaryStore = useMercenaryStore()
const toast = useToast()
const router = useRouter()

// 最大队伍大小（不包括玩家）
const maxTeamSize = 4

// 搜索查询
const searchQuery = ref('')

// 当前激活的标签
const activeTab = ref('all')

// 选中的佣兵
const selectedMercenary = ref(null)

// 佣兵选择对话框
const mercenaryDialog = ref(false)
const selectedSlotIndex = ref(-1)
const selectedMercenaryForSlot = ref(null)

// 可用佣兵（未在队伍中的佣兵）
const availableMercenaries = computed(() => {
  return mercenaryStore.mercenaries.filter(mercenary => 
    !isMercenaryInTeam(mercenary.id)
  )
})

// 根据搜索条件过滤佣兵
const filteredMercenaries = computed(() => {
  if (!searchQuery.value) {
    return mercenaryStore.mercenaries
  }
  
  const query = searchQuery.value.toLowerCase()
  return mercenaryStore.mercenaries.filter(mercenary => 
    mercenary.name.toLowerCase().includes(query) || 
    getMercenaryClassName(mercenary.class).toLowerCase().includes(query)
  )
})

// 根据职业过滤佣兵
const getMercenariesByClass = (classType) => {
  return filteredMercenaries.value.filter(mercenary => 
    mercenary.class === classType
  )
}

// 检查佣兵是否在队伍中
const isMercenaryInTeam = (mercenaryId) => {
  return playerStore.activeTeam && playerStore.activeTeam.some(member => member && member.id === mercenaryId)
}

// 选择佣兵
const selectMercenary = (mercenary) => {
  selectedMercenary.value = mercenary
}

// 添加佣兵到队伍
const addToTeam = (mercenary) => {
  if (isMercenaryInTeam(mercenary.id)) {
    toast.info('该佣兵已在队伍中')
    return
  }
  
  // 确保 activeTeam 已初始化
  if (!playerStore.activeTeam) {
    playerStore.activeTeam = []
  }

  // 查找空槽位
  const emptySlotIndex = playerStore.activeTeam.findIndex(slot => !slot)

  if (emptySlotIndex === -1) {
    if (playerStore.activeTeam.length < maxTeamSize) {
      // 如果队伍未满，添加新槽位
      playerStore.activeTeam.push(mercenary)
      toast.success(`${mercenary.name} 已加入队伍`)
    } else {
      // 队伍已满
      toast.error(`队伍已满，最多只能有 ${maxTeamSize} 名佣兵`)
      // 打开佣兵选择对话框，让用户替换队伍成员
      openMercenarySelector(0)
    }
  } else {
    // 添加到空槽位
    playerStore.activeTeam[emptySlotIndex] = mercenary
    toast.success(`${mercenary.name} 已加入队伍`)
  }
  
  // 自动保存
  playerStore.autoSave()
}

// 从队伍中移除佣兵
const removeMercenaryFromTeam = (index) => {
  if (!playerStore.activeTeam) {
    return
  }
  
  if (index >= 0 && index < playerStore.activeTeam.length) {
    const mercenary = playerStore.activeTeam[index]
    if (mercenary) {
      const name = mercenary.name
      playerStore.activeTeam[index] = null
      toast.success(`${name} 已从队伍中移除`)
      
      // 自动保存
      playerStore.autoSave()
    }
  }
}

// 打开佣兵选择对话框
const openMercenarySelector = (index) => {
  selectedSlotIndex.value = index
  selectedMercenaryForSlot.value = null
  mercenaryDialog.value = true
}

// 为槽位选择佣兵
const selectMercenaryForSlot = (mercenary) => {
  selectedMercenaryForSlot.value = mercenary
}

// 确认选择佣兵
const confirmSelectMercenary = () => {
  if (selectedMercenaryForSlot.value && selectedSlotIndex.value >= 0) {
    if (!playerStore.activeTeam) {
      playerStore.activeTeam = []
    }
    playerStore.activeTeam[selectedSlotIndex.value] = selectedMercenaryForSlot.value
    toast.success(`${selectedMercenaryForSlot.value.name} 已加入队伍`)
    mercenaryDialog.value = false
    
    // 自动保存
    playerStore.autoSave()
  }
}

// 保存队伍配置
const saveTeam = () => {
  // 移除空槽位
  if (playerStore.activeTeam) {
    playerStore.activeTeam = playerStore.activeTeam.filter(Boolean)
  }

  // 自动保存
  playerStore.autoSave()
  
  toast.success('队伍配置已保存')
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

// 获取佣兵当前生命值
const getMercenaryCurrentHealth = (mercenary) => {
  const baseHealth = mercenary.baseHealth || 100
  const level = mercenary.level || 1
  return Math.floor(baseHealth * (1 + (level - 1) * 0.1))
}

// 获取佣兵当前魔法值
const getMercenaryCurrentMana = (mercenary) => {
  const baseMana = mercenary.baseMana || 50
  const level = mercenary.level || 1
  return Math.floor(baseMana * (1 + (level - 1) * 0.1))
}

// 获取佣兵当前攻击力
const getMercenaryCurrentAttack = (mercenary) => {
  const baseAttack = mercenary.baseAttack || 10
  const level = mercenary.level || 1
  return Math.floor(baseAttack * (1 + (level - 1) * 0.1))
}

// 获取佣兵当前防御力
const getMercenaryCurrentDefense = (mercenary) => {
  const baseDefense = mercenary.baseDefense || 5
  const level = mercenary.level || 1
  return Math.floor(baseDefense * (1 + (level - 1) * 0.1))
}

// 获取佣兵技能
const getMercenarySkills = (mercenary) => {
  return mercenary.baseSkills || []
}

// 计算队伍总生命值
const totalTeamHealth = computed(() => {
  let total = playerStore.maxHealth
  
  if (playerStore.activeTeam) {
    playerStore.activeTeam.forEach(member => {
      if (member) {
      total += getMercenaryCurrentHealth(member)
    }
  }
  )}
  
  
  return total
})

// 计算队伍总攻击力
const totalTeamAttack = computed(() => {
  let total = playerStore.attack
  
  if (playerStore.activeTeam) {
    playerStore.activeTeam.forEach(member => {
      if (member) {
        total += getMercenaryCurrentAttack(member)
      }
    })
  }
  
  return total
})

// 计算队伍总防御力
const totalTeamDefense = computed(() => {
  let total = playerStore.defense
  
  if (playerStore.activeTeam) {
    playerStore.activeTeam.forEach(member => {
      if (member) {
        total += getMercenaryCurrentDefense(member)
      }
    })
  }
  
  return total
})

// 计算队伍总魔法值
const totalTeamMana = computed(() => {
  let total = playerStore.maxMana
  
  if (playerStore.activeTeam) {
    playerStore.activeTeam.forEach(member => {
      if (member) {
        total += getMercenaryCurrentMana(member)
      }
    })
  }
  
  return total
})

// 计算队伍平均等级
const averageTeamLevel = computed(() => {
  let totalLevel = playerStore.level
  let count = 1 // 玩家算一个
  
  if (playerStore.activeTeam) {
    playerStore.activeTeam.forEach(member => {
      if (member) {
        totalLevel += member.level || 1
        count++
      }
    })
  }
  
  return Math.floor(totalLevel / count)
})

// 组件挂载时初始化
onMounted(() => {
  // 确保队伍数组已初始化
  if (!Array.isArray(playerStore.activeTeam)) {
    playerStore.activeTeam = []
  }
  
  // 如果队伍为空，添加一些空槽位
  while (playerStore.activeTeam.length < maxTeamSize) {
    playerStore.activeTeam.push(null)
  }
})
</script>

<style scoped>
.team-container {
  min-height: 600px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.team-slots {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.team-slot {
  position: relative;
  width: 120px;
  height: 180px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.team-slot:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.player-slot {
  background-color: #e3f2fd;
  border: 2px solid #2196f3;
}

.remove-btn {
  position: absolute;
  top: 4px;
  right: 4px;
}

.mercenary-list {
  max-height: 400px;
  overflow-y: auto;
}

.mercenary-select-list {
  max-height: 300px;
  overflow-y: auto;
}

.mercenary-select-item {
  transition: all 0.2s ease;
}

.mercenary-select-item:hover {
  background-color: #f5f5f5;
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
.mercenary-list::-webkit-scrollbar,
.mercenary-select-list::-webkit-scrollbar {
  width: 6px;
}

.mercenary-list::-webkit-scrollbar-track,
.mercenary-select-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.mercenary-list::-webkit-scrollbar-thumb,
.mercenary-select-list::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.mercenary-list::-webkit-scrollbar-thumb:hover,
.mercenary-select-list::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>