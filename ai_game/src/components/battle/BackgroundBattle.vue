<template>
  <v-card v-if="battleStore.backgroundBattle" class="background-battle-widget">
    <v-card-title class="bg-primary">
      <v-icon>mdi-sword-cross</v-icon>
      后台战斗进行中
      <v-spacer></v-spacer>
      <v-btn icon @click="stopBattle" size="small">
        <v-icon>mdi-stop</v-icon>
      </v-btn>
    </v-card-title>
    
    <v-card-text>
      <div class="battle-status">
        <div class="status-item">
          <v-icon small>mdi-skull</v-icon>
          击败: {{ battleStore.totalKills }}
        </div>
        <div class="status-item">
          <v-icon small>mdi-skull-crossbones</v-icon>
          战败: {{ battleStore.totalDefeats }}
        </div>
        <div class="status-item">
          <v-icon small>mdi-coin</v-icon>
          金币: {{ battleStore.totalGoldEarned }}
        </div>
        <div class="status-item">
          <v-icon small>mdi-star</v-icon>
          经验: {{ battleStore.totalExpEarned }}
        </div>
        <div class="status-item" v-if="battleStore.currentMonster">
          <v-icon small>mdi-alert</v-icon>
          当前: {{ battleStore.currentMonster.name }}
          ({{ Math.max(0, battleStore.currentMonster.currentHealth) }}/{{ battleStore.currentMonster.health }})
        </div>
        <div class="status-item" v-if="battleStore.resurrectionTime > 0">
          <v-icon small>mdi-timer-sand</v-icon>
          复活: {{ battleStore.resurrectionTime }}秒
        </div>
      </div>
      
      <v-progress-linear
        v-if="battleStore.currentMonster"
        :model-value="(battleStore.currentMonster.currentHealth / battleStore.currentMonster.health) * 100"
        color="red"
        height="8"
        class="my-2"
      ></v-progress-linear>
      
      <div class="battle-log" v-if="battleStore.battleLog.length > 0">
        <div v-for="(log, index) in recentLogs" :key="index" class="log-entry">
          [{{ log.timestamp }}] <span v-html="log.message"></span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useBattleStore } from '../../stores/battle'
import { computed } from 'vue'

const battleStore = useBattleStore()

// 只显示最近的5条日志
const recentLogs = computed(() => {
  return battleStore.battleLog.slice(-5)
})

// 停止后台战斗
const stopBattle = () => {
  battleStore.stopBackgroundBattle()
}
</script>

<style scoped>
.background-battle-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.battle-status {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}

.battle-log {
  max-height: 120px;
  overflow-y: auto;
  font-size: 11px;
  line-height: 1.3;
  background: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
}

.log-entry {
  margin-bottom: 2px;
  color: #666;
}
</style>