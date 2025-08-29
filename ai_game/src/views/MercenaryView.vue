<template>
  <v-card class="mercenary-container" elevation="2">
    <v-card-title class="bg-primary text-white">
      <v-icon left>mdi-account-group</v-icon>
      佣兵管理
    </v-card-title>

    <v-card-text class="pa-0">
      <v-container fluid class="pa-4">
        <v-row>
          <!-- 左侧面板：佣兵列表 -->
          <v-col cols="12" md="4" class="left-panel">
            <v-card elevation="1" class="mb-4">
              <v-card-title class="bg-grey-lighten-3">
                <v-icon left>mdi-format-list-bulleted</v-icon>
                我的佣兵
                <v-spacer></v-spacer>
                <v-chip color="primary" size="small">
                  {{ mercenaryStore.mercenaries.length }} / {{ playerStore.mercenarySlots }}
                </v-chip>
              </v-card-title>
              <v-card-text class="pa-0">
                <v-list class="mercenary-list">
                  <v-list-item
                    v-for="mercenary in mercenaryStore.mercenaries"
                    :key="mercenary.id"
                    :active="selectedMercenary && selectedMercenary.id === mercenary.id"
                    @click="selectMercenary(mercenary)"
                    class="mercenary-item"
                  >
                    <template v-slot:prepend>
                      <v-avatar :color="getMercenaryClassColor(mercenary.class)" size="36">
                        <v-icon color="white">{{ getMercenaryClassIcon(mercenary.class) }}</v-icon>
                      </v-avatar>
                    </template>
                    
                    <v-list-item-title class="font-weight-medium">
                      {{ mercenary.name }}
                      <v-chip
                        v-if="isInTeam(mercenary.id)"
                        size="x-small"
                        color="green"
                        class="ml-2"
                      >
                        队伍中
                      </v-chip>
                    </v-list-item-title>
                    
                    <v-list-item-subtitle>
                      Lv.{{ mercenary.level }} {{ getMercenaryClassName(mercenary.class) }}
                    </v-list-item-subtitle>
                    
                    <template v-slot:append>
                      <v-chip color="red" variant="outlined" size="small">
                        HP: {{ mercenary.health }}/{{ mercenary.maxHealth }}
                      </v-chip>
                    </template>
                  </v-list-item>
                  
                  <div v-if="mercenaryStore.mercenaries.length === 0" class="text-center pa-4 text-grey">
                    <v-icon size="large" class="mb-2">mdi-account-question</v-icon>
                    <div>你还没有招募任何佣兵</div>
                    <div class="text-caption">前往城市酒馆招募佣兵</div>
                  </div>
                </v-list>
              </v-card-text>
            </v-card>
            
            <!-- 队伍管理 -->
            <v-card elevation="1">
              <v-card-title class="bg-grey-lighten-3">
                <v-icon left>mdi-account-group</v-icon>
                当前队伍
                <v-spacer></v-spacer>
                <v-chip color="primary" size="small">
                  {{ mercenaryStore.activeTeam ? mercenaryStore.activeTeam.length : 0 }} / {{ mercenaryStore.maxTeamSize }}
                </v-chip>
              </v-card-title>
              <v-card-text>
                <v-list class="team-list">
                  <!-- 玩家自己 -->
                  <v-list-item class="team-item">
                    <template v-slot:prepend>
                      <v-avatar color="blue" size="36">
                        <v-icon color="white">mdi-account</v-icon>
                      </v-avatar>
                    </template>
                    
                    <v-list-item-title class="font-weight-medium">
                      {{ playerStore.name }} (你)
                    </v-list-item-title>
                    
                    <v-list-item-subtitle>
                      Lv.{{ playerStore.level }} {{ getMercenaryClassName(playerStore.class) }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  
                  <!-- 队伍中的佣兵 -->
                  <v-list-item
                    v-for="teamMemberId in mercenaryStore.activeTeam || []"
                    :key="teamMemberId"
                    class="team-item"
                  >
                    <template v-slot:prepend>
                      <v-avatar :color="getMercenaryClassColor(getMercenaryById(teamMemberId)?.class)" size="36">
                        <v-icon color="white">{{ getMercenaryClassIcon(getMercenaryById(teamMemberId)?.class) }}</v-icon>
                      </v-avatar>
                    </template>
                    
                    <v-list-item-title class="font-weight-medium">
                      {{ getMercenaryById(teamMemberId)?.name }}
                    </v-list-item-title>
                    
                    <v-list-item-subtitle>
                      Lv.{{ getMercenaryById(teamMemberId)?.level }} 
                      {{ getMercenaryClassName(getMercenaryById(teamMemberId)?.class) }}
                    </v-list-item-subtitle>
                    
                    <template v-slot:append>
                      <v-btn
                        icon
                        size="small"
                        color="red"
                        variant="text"
                        @click.stop="removeFromTeam(teamMemberId)"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                  </v-list-item>
                  
                  <div v-if="!mercenaryStore.activeTeam || mercenaryStore.activeTeam.length === 0" class="text-center pa-4 text-grey">
                    <v-icon size="large" class="mb-2">mdi-account-group-outline</v-icon>
                    <div>队伍中没有佣兵</div>
                    <div class="text-caption">选择佣兵并添加到队伍中</div>
                  </div>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          
          <!-- 右侧面板：佣兵详情 -->
          <v-col cols="12" md="8" class="right-panel">
            <template v-if="selectedMercenary">
              <v-card elevation="1" class="mb-4">
                <v-card-title class="bg-grey-lighten-3 d-flex justify-space-between">
                  <div>
                    <v-icon left>mdi-account-details</v-icon>
                    佣兵详情
                  </div>
                  <div>
                    <v-btn
                      v-if="!isInTeam(selectedMercenary.id)"
                      color="primary"
                      size="small"
                      :disabled="mercenaryStore.isTeamFull"
                      @click="addToTeam(selectedMercenary.id)"
                    >
                      <v-icon start>mdi-account-plus</v-icon>
                      添加到队伍
                    </v-btn>
                    <v-btn
                      v-else
                      color="red"
                      size="small"
                      @click="removeFromTeam(selectedMercenary.id)"
                    >
                      <v-icon start>mdi-account-minus</v-icon>
                      移出队伍
                    </v-btn>
                  </div>
                </v-card-title>
                
                <v-card-text>
                  <v-row>
                    <!-- 佣兵基本信息 -->
                    <v-col cols="12" md="6">
                      <v-card variant="outlined" class="mb-4">
                        <v-card-title class="bg-grey-lighten-4">
                          <v-avatar :color="getMercenaryClassColor(selectedMercenary.class)" size="36" class="mr-2">
                            <v-icon color="white">{{ getMercenaryClassIcon(selectedMercenary.class) }}</v-icon>
                          </v-avatar>
                          {{ selectedMercenary.name }}
                        </v-card-title>
                        <v-card-text>
                          <div class="d-flex align-center mb-2">
                            <div class="text-subtitle-1 font-weight-bold">等级:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.level }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <div class="text-subtitle-1 font-weight-bold">职业:</div>
                            <v-spacer></v-spacer>
                            <div>{{ getMercenaryClassName(selectedMercenary.class) }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <div class="text-subtitle-1 font-weight-bold">招募地:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.recruitedFrom || '未知' }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <div class="text-subtitle-1 font-weight-bold">碎片:</div>
                            <v-spacer></v-spacer>
                            <div>{{ mercenaryStore.mercenaryShardCount(selectedMercenary.id) }}</div>
                          </div>
                          
                          <v-divider class="my-3"></v-divider>
                          
                          <!-- 经验条 -->
                          <div class="text-subtitle-1 font-weight-bold mb-1">经验:</div>
                          <v-progress-linear
                            :model-value="(selectedMercenary.experience / calculateExpRequired(selectedMercenary.level)) * 100"
                            color="blue"
                            height="8"
                            rounded
                            class="mb-1"
                          ></v-progress-linear>
                          <div class="text-caption text-right">
                            {{ selectedMercenary.experience }} / {{ calculateExpRequired(selectedMercenary.level) }}
                          </div>
                          
                          <v-divider class="my-3"></v-divider>
                          
                          <!-- 升级按钮 -->
                          <v-btn
                            block
                            color="amber"
                            :disabled="!canUpgradeWithShards(selectedMercenary.id)"
                            @click="upgradeMercenary(selectedMercenary.id)"
                          >
                            <v-icon start>mdi-arrow-up-bold</v-icon>
                            使用碎片升级 (需要 {{ shardsRequiredForUpgrade }} 碎片)
                          </v-btn>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    
                    <!-- 佣兵属性 -->
                    <v-col cols="12" md="6">
                      <v-card variant="outlined" class="mb-4">
                        <v-card-title class="bg-grey-lighten-4">
                          <v-icon left>mdi-chart-box</v-icon>
                          属性
                        </v-card-title>
                        <v-card-text>
                          <div class="d-flex align-center mb-2">
                            <v-icon color="red" size="small" class="mr-2">mdi-heart</v-icon>
                            <div class="text-subtitle-1 font-weight-bold">生命值:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.health }} / {{ selectedMercenary.maxHealth }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <v-icon color="blue" size="small" class="mr-2">mdi-flash</v-icon>
                            <div class="text-subtitle-1 font-weight-bold">魔法值:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.mana }} / {{ selectedMercenary.maxMana }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <v-icon color="orange" size="small" class="mr-2">mdi-sword</v-icon>
                            <div class="text-subtitle-1 font-weight-bold">攻击力:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.attack }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <v-icon color="green" size="small" class="mr-2">mdi-shield</v-icon>
                            <div class="text-subtitle-1 font-weight-bold">防御力:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.defense }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <v-icon color="purple" size="small" class="mr-2">mdi-magic-staff</v-icon>
                            <div class="text-subtitle-1 font-weight-bold">魔法攻击:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.magicAttack }}</div>
                          </div>
                          
                          <div class="d-flex align-center mb-2">
                            <v-icon color="cyan" size="small" class="mr-2">mdi-shield-star</v-icon>
                            <div class="text-subtitle-1 font-weight-bold">魔法防御:</div>
                            <v-spacer></v-spacer>
                            <div>{{ selectedMercenary.magicDefense }}</div>
                          </div>
                          
                          <v-divider class="my-3"></v-divider>
                          
                          <!-- 治疗按钮 -->
                          <v-btn
                            block
                            color="green"
                            :disabled="selectedMercenary.health >= selectedMercenary.maxHealth"
                            @click="healMercenary(selectedMercenary.id)"
                          >
                            <v-icon start>mdi-medical-bag</v-icon>
                            治疗 ({{ healCost }} 金币)
                          </v-btn>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    
                    <!-- 佣兵技能 -->
                    <v-col cols="12">
                      <v-card variant="outlined">
                        <v-card-title class="bg-grey-lighten-4">
                          <v-icon left>mdi-auto-fix</v-icon>
                          技能
                        </v-card-title>
                        <v-card-text>
                          <v-row>
                            <v-col
                              v-for="skill in selectedMercenary.skills"
                              :key="skill.id"
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-card variant="outlined" class="skill-card">
                                <v-card-title class="text-subtitle-1 py-2" :style="`background-color: ${getSkillTypeColor(skill.type)}1A`">
                                  {{ getSkillName(skill.id) }}
                                  <v-chip size="x-small" :color="getSkillTypeColor(skill.type)" class="ml-2">
                                    Lv.{{ skill.level }}
                                  </v-chip>
                                </v-card-title>
                                <v-card-text class="py-2">
                                  <div class="text-caption">{{ getSkillDescription(skill.id) }}</div>
                                </v-card-text>
                              </v-card>
                            </v-col>
                            
                            <v-col cols="12" v-if="selectedMercenary.skills.length === 0">
                              <div class="text-center pa-4 text-grey">
                                <v-icon size="large" class="mb-2">mdi-book-outline</v-icon>
                                <div>该佣兵还没有学习任何技能</div>
                              </div>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </template>
            
            <template v-else>
              <v-card elevation="1" class="text-center pa-8">
                <v-icon size="x-large" color="grey" class="mb-4">mdi-account-question</v-icon>
                <h3 class="text-h5 mb-2">选择一个佣兵查看详情</h3>
                <p class="text-body-1 text-grey">
                  从左侧列表中选择一个佣兵来查看详细信息、管理技能和装备
                </p>
                <v-btn
                  color="primary"
                  class="mt-4"
                  to="/map"
                >
                  <v-icon start>mdi-map-marker</v-icon>
                  前往城市酒馆招募佣兵
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
import { ref, computed } from 'vue'
import { usePlayerStore } from '../stores/player'
import { useMercenaryStore } from '../stores/mercenary'
import { useToast } from 'vue-toastification'

const playerStore = usePlayerStore()
const mercenaryStore = useMercenaryStore()
const toast = useToast()

// 选中的佣兵
const selectedMercenary = ref(null)

// 升级所需碎片
const shardsRequiredForUpgrade = 20

// 治疗费用
const healCost = 50

// 选择佣兵
const selectMercenary = (mercenary) => {
  selectedMercenary.value = mercenary
}

// 获取佣兵职业名称
const getMercenaryClassName = (classType) => {
  const classes = {
    warrior: '战士',
    mage: '法师',
    priest: '牧师',
    hunter: '猎人',
    assassin: '刺客',
    Warrior: '战士',
    Mage: '法师',
    Priest: '牧师',
    Hunter: '猎人',
    Assassin: '刺客'
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
    assassin: 'mdi-knife',
    Warrior: 'mdi-sword',
    Mage: 'mdi-magic-staff',
    Priest: 'mdi-cross',
    Hunter: 'mdi-bow-arrow',
    Assassin: 'mdi-knife'
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
    assassin: 'purple',
    Warrior: 'red',
    Mage: 'blue',
    Priest: 'amber',
    Hunter: 'green',
    Assassin: 'purple'
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

// 计算升级所需经验
const calculateExpRequired = (level) => {
  return Math.floor(100 * Math.pow(1.2, level - 1))
}

// 检查是否在队伍中
const isInTeam = (mercenaryId) => {
  return mercenaryStore.activeTeam && mercenaryStore.activeTeam.includes(mercenaryId)
}

// 添加到队伍
const addToTeam = (mercenaryId) => {
  const result = mercenaryStore.addToTeam(mercenaryId)
  
  if (result.success) {
    toast.success('佣兵已添加到队伍')
  } else {
    if (result.reason === 'team_full') {
      toast.error('队伍已满')
    } else if (result.reason === 'already_in_team') {
      toast.error('该佣兵已在队伍中')
    } else {
      toast.error('无法添加佣兵到队伍')
    }
  }
}

// 从队伍中移除
const removeFromTeam = (mercenaryId) => {
  const result = mercenaryStore.removeFromTeam(mercenaryId)
  
  if (result.success) {
    toast.success('佣兵已从队伍中移除')
  } else {
    toast.error('无法从队伍中移除佣兵')
  }
}

// 通过ID获取佣兵
const getMercenaryById = (id) => {
  return mercenaryStore.mercenaries.find(m => m.id === id)
}

// 检查是否可以使用碎片升级
const canUpgradeWithShards = (mercenaryId) => {
  return mercenaryStore.mercenaryShardCount(mercenaryId) >= shardsRequiredForUpgrade
}

// 使用碎片升级佣兵
const upgradeMercenary = (mercenaryId) => {
  const result = mercenaryStore.upgradeMercenaryWithShards(mercenaryId, shardsRequiredForUpgrade)
  
  if (result.success) {
    toast.success(`佣兵升级到 ${result.newLevel} 级`)
  } else {
    if (result.reason === 'not_enough_shards') {
      toast.error(`碎片不足，需要 ${result.required} 个，当前有 ${result.available} 个`)
    } else {
      toast.error('升级失败')
    }
  }
}

// 治疗佣兵
const healMercenary = (mercenaryId) => {
  if (playerStore.gold < healCost) {
    toast.error(`金币不足，需要 ${healCost} 金币`)
    return
  }
  
  const mercenary = mercenaryStore.mercenaries.find(m => m.id === mercenaryId)
  if (!mercenary) return
  
  // 扣除金币
  playerStore.gold -= healCost
  
  // 治疗佣兵
  mercenaryStore.healMercenary(mercenaryId, mercenary.maxHealth)
  mercenaryStore.restoreMercenaryMana(mercenaryId, mercenary.maxMana)
  
  toast.success('佣兵已完全恢复')
}
</script>

<style scoped>
.mercenary-container {
  min-height: 600px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.left-panel,
.right-panel {
  min-height: 500px;
}

.mercenary-list,
.team-list {
  max-height: 300px;
  overflow-y: auto;
  border-radius: 8px;
}

.mercenary-item {
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  border-radius: 6px;
  margin: 4px;
}

.mercenary-item:hover {
  background-color: #f0f8ff;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.team-item {
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  border-radius: 6px;
  margin: 4px;
}

.team-item:hover {
  background-color: #f0f8ff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
.team-list::-webkit-scrollbar {
  width: 6px;
}

.mercenary-list::-webkit-scrollbar-track,
.team-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.mercenary-list::-webkit-scrollbar-thumb,
.team-list::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.mercenary-list::-webkit-scrollbar-thumb:hover,
.team-list::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>