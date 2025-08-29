﻿<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-card class="battle-container" elevation="2">
        <v-card-title class="bg-primary text-white">
          <v-icon left>mdi-sword-cross</v-icon>
          战斗界面
          <v-chip class="ml-4" color="white" text-color="primary" small>
            {{ playerStore.currentMap }}
          </v-chip>
        </v-card-title>

        <v-card-text class="pa-0">
          <v-container fluid class="pa-4">
            <v-row>
              <!-- 左侧面板 -->
              <v-col cols="12" md="4" class="left-panel">
                <!-- 怪物选择 -->
                <MonsterList
                  :monsters="currentMonsters"
                  :selected-monster="selectedMonster"
                  :disabled="isBattling"
                  @select-monster="selectMonster"
                />

                <!-- 玩家状态 -->
                <BattleStatus
                  :player="playerStore"
                  :monster="selectedMonster"
                />
              </v-col>

              <!-- 右侧面板 -->
              <v-col cols="12" md="8" class="right-panel">
                <v-row>
                  <!-- 战斗控制 -->
                  <v-col cols="12">
                    <v-card elevation="1" class="mb-4">
                      <v-card-title class="bg-grey-lighten-3">
                        <v-icon left>mdi-gamepad</v-icon>
                        战斗控制
                      </v-card-title>
                      <v-card-text>
                        <v-row dense>
                          <v-col cols="6" sm="3">
                            <v-btn
                              block
                              color="red"
                              :disabled="!selectedMonster || isBattling"
                              @click="startBattle"
                              size="large"
                              class="mb-2"
                            >
                              <v-icon start>mdi-sword</v-icon>
                              攻击
                            </v-btn>
                          </v-col>
                          
                          <v-col cols="6" sm="3">
                            <v-btn
                              block
                              color="blue"
                              :disabled="!selectedMonster || isBattling || playerStore.skills.length === 0"
                              @click="openSkillDialog"
                              size="large"
                              class="mb-2"
                            >
                              <v-icon start>mdi-auto-fix</v-icon>
                              技能
                            </v-btn>
                          </v-col>
                          
                          <v-col cols="6" sm="3">
                            <v-btn
                              block
                              color="green"
                              :disabled="!selectedMonster || isBattling || playerStore.inventory.length === 0"
                              @click="openItemDialog"
                              size="large"
                              class="mb-2"
                            >
                              <v-icon start>mdi-potion</v-icon>
                              物品
                            </v-btn>
                          </v-col>
                          
                          <v-col cols="6" sm="3">
                            <v-btn
                              block
                              color="grey"
                              :disabled="!isBattling"
                              @click="fleeBattle"
                              size="large"
                              class="mb-2"
                            >
                              <v-icon start>mdi-run</v-icon>
                              逃跑
                            </v-btn>
                          </v-col>

                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>

                  <!-- 战斗信息 -->
                  <v-col cols="12">
                    <v-card elevation="1" class="mb-4">
                      <v-card-title class="bg-grey-lighten-3">
                        <v-icon left>mdi-account-group</v-icon>
                        战斗信息
                      </v-card-title>
                      <v-card-text>
                        <v-row>
                          <!-- 玩家队伍 -->
                          <v-col cols="12" md="6">
                            <v-card variant="outlined" class="h-100">
                              <v-card-title class="bg-blue-lighten-5">
                                <v-icon left color="blue">mdi-account</v-icon>
                                玩家队伍
                              </v-card-title>
                              <v-card-text>
                                <!-- 玩家角色 -->
                                <div class="d-flex align-center mb-3">
                                  <v-avatar size="48" color="blue" class="mr-3">
                                    <v-icon dark>mdi-account</v-icon>
                                  </v-avatar>
                                  <div>
                                    <div class="text-body-1 font-weight-medium">{{ playerStore.name }}</div>
                                    <div class="text-caption text-grey">
                                      Lv.{{ playerStore.level }} {{ getClassName(playerStore.class) }}
                                    </div>
                                  </div>
                                  <v-spacer></v-spacer>
                                  <v-chip color="red" variant="outlined">
                                    HP: {{ playerStore.health }}
                                  </v-chip>
                                </div>
                                
                                <!-- 佣兵队伍成员 -->
                                <div 
                                  v-for="(member, index) in playerStore.activeTeam.filter(Boolean)" 
                                  :key="index"
                                  class="d-flex align-center mb-3"
                                >
                                  <v-avatar :size="40" :color="getMercenaryClassColor(member.class)" class="mr-3">
                                    <v-icon dark>{{ getMercenaryClassIcon(member.class) }}</v-icon>
                                  </v-avatar>
                                  <div>
                                    <div class="text-body-1 font-weight-medium">{{ member.name }}</div>
                                    <div class="text-caption text-grey">
                                      Lv.{{ member.level || 1 }} {{ getMercenaryClassName(member.class) }}
                                    </div>
                                  </div>
                                  <v-spacer></v-spacer>
                                  <v-chip :color="getHealthColor(member.currentHealth || getMercenaryCurrentHealth(member), getMercenaryCurrentHealth(member))" variant="outlined">
                                    HP: {{ member.currentHealth || getMercenaryCurrentHealth(member) }}
                                  </v-chip>
                                </div>
                                
                                <div v-if="playerStore.activeTeam.filter(Boolean).length === 0" class="text-center text-grey py-2">
                                  <div class="text-caption">没有佣兵加入队伍</div>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-col>

                          <!-- 怪物队伍 -->
                          <v-col cols="12" md="6">
                            <v-card variant="outlined" class="h-100">
                              <v-card-title class="bg-red-lighten-5">
                                <v-icon left color="red">mdi-skull</v-icon>
                                敌方队伍
                              </v-card-title>
                              <v-card-text>
                                <template v-if="selectedMonster">
                                  <div class="d-flex align-center mb-3">
                                    <v-avatar size="48" color="red" class="mr-3">
                                      <v-icon dark>mdi-skull</v-icon>
                                    </v-avatar>
                                    <div>
                                      <div class="text-body-1 font-weight-medium">{{ selectedMonster.name }}</div>
                                      <div class="text-caption text-grey">
                                        Lv.{{ selectedMonster.level }}
                                      </div>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-chip :color="getHealthColor(selectedMonster.health, selectedMonster.maxHealth)" variant="outlined">
                                      HP: {{ selectedMonster.health }}
                                    </v-chip>
                                  </div>
                                </template>
                                <template v-else>
                                  <div class="text-center text-grey py-4">
                                    <v-icon size="large" class="mb-2">mdi-selection-ellipse</v-icon>
                                    <div>请选择要战斗的怪物</div>
                                  </div>
                                </template>
                              </v-card-text>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>

                  <!-- 战斗日志 -->
                  <v-col cols="12">
                    <v-card elevation="1">
                      <v-card-title class="bg-grey-lighten-3">
                        <v-icon left>mdi-text-box</v-icon>
                        战斗日志
                      </v-card-title>
                      <v-card-text class="battle-log pa-0">
                        <div class="log-container">
                          <div
                            v-for="(log, index) in battleLogs"
                            :key="index"
                            :class="['log-entry', log.type]"
                          >
                            <v-icon size="small" class="mr-2">
                              {{ getLogIcon(log.type) }}
                            </v-icon>
                            <span class="log-message" v-html="log.message"></span>
                          </div>
                          <div v-if="battleLogs.length === 0" class="text-center text-grey py-8">
                            <v-icon size="large" class="mb-2">mdi-text</v-icon>
                            <div>战斗日志将在这里显示</div>
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <!-- 技能选择对话框 -->
        <SkillDialog
          v-model="skillDialog"
          :skills="availableSkills"
          :player-mana="playerStore.mana"
          @select-skill="useSelectedSkill"
        />

        <!-- 物品选择对话框 -->
        <ItemDialog
          v-model="itemDialog"
          :items="usableItems"
          @select-item="useSelectedItem"
        />
        
        <!-- 佣兵技能选择对话框 -->
        <MercenarySkillDialog
          v-model="mercenarySkillDialog"
          :mercenary="selectedMercenary"
          :skills="selectedMercenarySkills"
          @select-skill="useMercenarySkill"
        />
      </v-card>
    </v-col>
    
    <v-col cols="12" md="4">
      <!-- 队伍状态卡片 -->
      <TeamStatusCard />
      
      <!-- 佣兵技能按钮 -->
      <v-card class="mt-4" elevation="2">
        <v-card-title class="bg-primary text-white">
          <v-icon start>mdi-account-group</v-icon>
          佣兵技能
        </v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col 
              v-for="(member, index) in playerStore.activeTeam.filter(Boolean)" 
              :key="index"
              cols="12" sm="6"
            >
              <v-btn
                block
                :color="getMercenaryClassColor(member.class)"
                :disabled="!selectedMonster || isBattling"
                @click="openMercenarySkillDialog(member)"
                class="mb-2"
              >
                <v-icon start>{{ getMercenaryClassIcon(member.class) }}</v-icon>
                {{ member.name }} 技能
              </v-btn>
            </v-col>
            
            <v-col cols="12" v-if="playerStore.activeTeam.filter(Boolean).length === 0">
              <div class="text-center text-grey py-2">
                <v-icon size="large" class="mb-2">mdi-account-alert</v-icon>
                <div>没有佣兵可以使用技能</div>
                <v-btn
                  color="primary"
                  variant="text"
                  class="mt-2"
                  to="/team"
                >
                  <v-icon start>mdi-account-group</v-icon>
                  管理队伍
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { usePlayerStore } from '@/stores/player';
import { useBattleStore } from '@/stores/battle';
import { useMercenaryStore } from '@/stores/mercenary';
import MonsterList from '@/components/battle/MonsterList.vue';
import BattleStatus from '@/components/battle/BattleStatus.vue';
import SkillDialog from '@/components/battle/SkillDialog.vue';
import ItemDialog from '@/components/battle/ItemDialog.vue';
import TeamStatusCard from '@/components/battle/TeamStatusCard.vue';
import MercenarySkillDialog from '@/components/battle/MercenarySkillDialog.vue';
import { getMonstersByMap } from '@/config/monsters';
import { useToast } from 'vue-toastification';

const playerStore = usePlayerStore();
const battleStore = useBattleStore();
const mercenaryStore = useMercenaryStore();
const toast = useToast();

// 状态
const selectedMonster = ref(null);
const isBattling = computed(() => battleStore.isBattling);
const battleLogs = computed(() => battleStore.battleLog || []);
const currentMonsters = ref([]);

// 对话框状态
const skillDialog = ref(false);
const itemDialog = ref(false);
const mercenarySkillDialog = ref(false);
const selectedMercenary = ref(null);
const selectedMercenarySkills = ref([]);

// 计算属性
const availableSkills = computed(() => {
  return playerStore.skills.filter(skill => {
    const skillData = playerStore.getSkillById(skill.id);
    return skillData && skillData.manaCost <= playerStore.mana;
  });
});

const usableItems = computed(() => {
  return playerStore.inventory.filter(item => {
    return item.type === 'consumable' && item.quantity > 0;
  });
});

// 生命周期钩子
onMounted(() => {
  loadMonsters();
  
  // 如果正在战斗，恢复战斗状态
  if (battleStore.isBattling && battleStore.currentMonster) {
    selectedMonster.value = battleStore.currentMonster;
  }
});

onUnmounted(() => {
  // 清理工作
});

// 方法
function loadMonsters() {
  const monsters = getMonstersByMap(playerStore.currentMap);
  // 只显示前三个怪物，与地图视图保持一致
  currentMonsters.value = monsters.slice(0, 3).map(monster => ({
    ...monster,
    health: monster.maxHealth,
    level: monster.level || 1
  }));
}

function selectMonster(monster) {
  selectedMonster.value = { ...monster };
}

function startBattle() {
  if (!selectedMonster.value) return;
  
  battleStore.startBattle(selectedMonster.value);
  toast.info(`开始与 ${selectedMonster.value.name} 战斗！`);
}

function openSkillDialog() {
  if (availableSkills.value.length === 0) {
    toast.warning('你没有可用的技能！');
    return;
  }
  skillDialog.value = true;
}

function useSelectedSkill(skill) {
  battleStore.useSkill(skill);
  skillDialog.value = false;
}

function openItemDialog() {
  if (usableItems.value.length === 0) {
    toast.warning('你没有可用的物品！');
    return;
  }
  itemDialog.value = true;
}

function useSelectedItem(item) {
  battleStore.useItem(item);
  itemDialog.value = false;
}

function fleeBattle() {
  battleStore.fleeBattle();
  toast.info('你逃离了战斗！');
}

function openMercenarySkillDialog(mercenary) {
  selectedMercenary.value = mercenary;
  selectedMercenarySkills.value = mercenaryStore.getMercenarySkills(mercenary.id);
  
  if (selectedMercenarySkills.value.length === 0) {
    toast.warning(`${mercenary.name} 没有可用的技能！`);
    return;
  }
  
  mercenarySkillDialog.value = true;
}

function useMercenarySkill(skill) {
  if (!selectedMercenary.value) return;
  
  battleStore.useMercenarySkill(selectedMercenary.value, skill);
  mercenarySkillDialog.value = false;
}

// 辅助方法
function getLogIcon(type) {
  switch (type) {
    case 'player-attack': return 'mdi-sword';
    case 'monster-attack': return 'mdi-skull';
    case 'player-skill': return 'mdi-auto-fix';
    case 'player-item': return 'mdi-potion';
    case 'mercenary-attack': return 'mdi-account-sword';
    case 'mercenary-skill': return 'mdi-account-star';
    case 'critical': return 'mdi-star';
    case 'heal': return 'mdi-heart-plus';
    case 'death': return 'mdi-skull-crossbones';
    case 'reward': return 'mdi-treasure-chest';
    case 'system': return 'mdi-information';
    default: return 'mdi-text';
  }
}

function getClassName(classId) {
  const classes = {
    1: '战士',
    2: '法师',
    3: '猎人',
    4: '刺客',
    5: '牧师'
  };
  return classes[classId] || '未知职业';
}

function getMercenaryClassName(classId) {
  return getClassName(classId);
}

function getMercenaryClassColor(classId) {
  const colors = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'purple',
    5: 'amber'
  };
  return colors[classId] || 'grey';
}

function getMercenaryClassIcon(classId) {
  const icons = {
    1: 'mdi-shield-sword',
    2: 'mdi-magic-staff',
    3: 'mdi-bow-arrow',
    4: 'mdi-knife',
    5: 'mdi-medical-cross'
  };
  return icons[classId] || 'mdi-account';
}

function getHealthColor(current, max) {
  const percent = (current / max) * 100;
  if (percent > 60) return 'green';
  if (percent > 30) return 'orange';
  return 'red';
}

function getMercenaryCurrentHealth(mercenary) {
  return mercenary.health || mercenary.maxHealth || 100;
}
</script>

<style scoped>
.battle-container {
  min-height: 600px;
}

.battle-log {
  height: 300px;
  overflow-y: auto;
}

.log-container {
  padding: 10px;
}

.log-entry {
  padding: 5px 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.log-entry.player-attack {
  background-color: rgba(0, 0, 255, 0.1);
}

.log-entry.monster-attack {
  background-color: rgba(255, 0, 0, 0.1);
}

.log-entry.player-skill {
  background-color: rgba(128, 0, 255, 0.1);
}

.log-entry.player-item {
  background-color: rgba(0, 255, 0, 0.1);
}

.log-entry.mercenary-attack,
.log-entry.mercenary-skill {
  background-color: rgba(255, 165, 0, 0.1);
}

.log-entry.critical {
  background-color: rgba(255, 215, 0, 0.1);
  font-weight: bold;
}

.log-entry.heal {
  background-color: rgba(144, 238, 144, 0.1);
}

.log-entry.death {
  background-color: rgba(0, 0, 0, 0.1);
  font-weight: bold;
}

.log-entry.reward {
  background-color: rgba(255, 215, 0, 0.1);
}

.log-entry.system {
  background-color: rgba(192, 192, 192, 0.1);
  font-style: italic;
}

.log-message {
  flex: 1;
}
</style>