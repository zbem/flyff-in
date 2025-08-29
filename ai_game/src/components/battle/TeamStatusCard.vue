<template>
  <v-card elevation="2">
    <v-card-title class="bg-primary text-white">
      <v-icon start>mdi-account-group</v-icon>
      队伍状态
    </v-card-title>
    
    <v-card-text class="pa-0">
      <!-- 玩家状态 -->
      <v-list>
        <v-list-subheader>玩家</v-list-subheader>
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar color="blue" size="36">
              <v-icon>mdi-account</v-icon>
            </v-avatar>
          </template>
          
          <v-list-item-title>{{ playerStore.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Lv.{{ playerStore.level }} {{ getClassName(playerStore.class) }}
          </v-list-item-subtitle>
          
          <template v-slot:append>
            <div class="status-bars">
              <div class="status-bar">
                <div class="status-label">HP</div>
                <v-progress-linear
                  :model-value="getHealthPercent(playerStore.health, playerStore.maxHealth)"
                  :color="getHealthColor(playerStore.health, playerStore.maxHealth)"
                  height="8"
                  rounded
                ></v-progress-linear>
                <div class="status-value">{{ playerStore.health }}/{{ playerStore.maxHealth }}</div>
              </div>
              
              <div class="status-bar">
                <div class="status-label">MP</div>
                <v-progress-linear
                  :model-value="getManaPercent(playerStore.mana, playerStore.maxMana)"
                  color="blue"
                  height="8"
                  rounded
                ></v-progress-linear>
                <div class="status-value">{{ playerStore.mana }}/{{ playerStore.maxMana }}</div>
              </div>
            </div>
          </template>
        </v-list-item>
      </v-list>
      
      <!-- 佣兵状态 -->
      <v-list v-if="playerStore.activeTeam && playerStore.activeTeam.filter(Boolean).length > 0">
        <v-list-subheader>佣兵</v-list-subheader>
        <v-list-item
          v-for="(member, index) in playerStore.activeTeam.filter(Boolean)"
          :key="index"
        >
          <template v-slot:prepend>
            <v-avatar :color="getMercenaryClassColor(member.class)" size="36">
              <v-icon>{{ getMercenaryClassIcon(member.class) }}</v-icon>
            </v-avatar>
          </template>
          
          <v-list-item-title>{{ member.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Lv.{{ member.level || 1 }} {{ getMercenaryClassName(member.class) }}
          </v-list-item-subtitle>
          
          <template v-slot:append>
            <div class="status-bars">
              <div class="status-bar">
                <div class="status-label">HP</div>
                <v-progress-linear
                  :model-value="getHealthPercent(member.currentHealth || getMercenaryCurrentHealth(member), getMercenaryMaxHealth(member))"
                  :color="getHealthColor(member.currentHealth || getMercenaryCurrentHealth(member), getMercenaryMaxHealth(member))"
                  height="8"
                  rounded
                ></v-progress-linear>
                <div class="status-value">{{ member.currentHealth || getMercenaryCurrentHealth(member) }}/{{ getMercenaryMaxHealth(member) }}</div>
              </div>
              
              <div class="status-bar">
                <div class="status-label">MP</div>
                <v-progress-linear
                  :model-value="getManaPercent(member.currentMana || getMercenaryCurrentMana(member), getMercenaryMaxMana(member))"
                  color="blue"
                  height="8"
                  rounded
                ></v-progress-linear>
                <div class="status-value">{{ member.currentMana || getMercenaryCurrentMana(member) }}/{{ getMercenaryMaxMana(member) }}</div>
              </div>
            </div>
          </template>
        </v-list-item>
      </v-list>
      
      <!-- 没有佣兵时显示 -->
      <div v-if="!playerStore.activeTeam || playerStore.activeTeam.filter(Boolean).length === 0" class="text-center py-4">
        <v-icon size="large" class="mb-2">mdi-account-alert</v-icon>
        <div class="text-body-2">没有佣兵加入队伍</div>
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
      
      <!-- 队伍统计 -->
      <v-card-text v-if="playerStore.activeTeam && playerStore.activeTeam.filter(Boolean).length > 0" class="pt-0">
        <v-divider class="my-2"></v-divider>
        <div class="d-flex justify-space-between align-center">
          <div class="text-caption">队伍成员</div>
          <v-chip size="small" color="primary">
            {{ (playerStore.activeTeam ? playerStore.activeTeam.filter(Boolean).length : 0) + 1 }}/{{ playerStore.maxTeamSize + 1 }}
          </v-chip>
        </div>
        
        <div class="d-flex justify-space-between align-center mt-2">
          <div class="text-caption">队伍总攻击力</div>
          <v-chip size="small" color="red">
            {{ calculateTeamTotalAttack() }}
          </v-chip>
        </div>
        
        <div class="d-flex justify-space-between align-center mt-2">
          <div class="text-caption">队伍总防御力</div>
          <v-chip size="small" color="blue">
            {{ calculateTeamTotalDefense() }}
          </v-chip>
        </div>
      </v-card-text>
    </v-card-text>
    
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        variant="text"
        to="/team"
      >
        <v-icon start>mdi-account-group</v-icon>
        管理队伍
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';
import { usePlayerStore } from '@/stores/player';
import { useMercenaryStore } from '@/stores/mercenary';

const playerStore = usePlayerStore();
const mercenaryStore = useMercenaryStore();

// 辅助方法
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

function getHealthPercent(current, max) {
  return (current / max) * 100;
}

function getManaPercent(current, max) {
  return (current / max) * 100;
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

function getMercenaryMaxHealth(mercenary) {
  return mercenary.maxHealth || 100;
}

function getMercenaryCurrentMana(mercenary) {
  return mercenary.mana || mercenary.maxMana || 50;
}

function getMercenaryMaxMana(mercenary) {
  return mercenary.maxMana || 50;
}

function calculateTeamTotalAttack() {
  let total = playerStore.attack;
  
  if (playerStore.activeTeam) {
    playerStore.activeTeam.forEach(member => {
      if (member) {
        total += member.attack || 10;
      }
    });
  }
  
  return total;
}

function calculateTeamTotalDefense() {
  let total = playerStore.defense;
  
  if (playerStore.activeTeam) {
    playerStore.activeTeam.forEach(member => {
      if (member) {
        total += member.defense || 5;
      }
    });
  }
  
  return total;
}
</script>

<style scoped>
.status-bars {
  width: 150px;
}

.status-bar {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.status-label {
  width: 30px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.status-value {
  width: 70px;
  font-size: 12px;
  text-align: right;
  color: rgba(0, 0, 0, 0.6);
}

.v-progress-linear {
  flex: 1;
  margin: 0 8px;
}
</style>