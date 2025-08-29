<template>
  <v-card elevation="1">
    <v-card-title class="bg-grey-lighten-3">
      <v-icon left>mdi-scroll-text</v-icon>
      战斗日志
      <v-spacer />
      <v-btn
        v-if="logs.length > 0"
        icon
        size="small"
        @click="clearLogs"
        title="清空日志"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="battle-log-container">
        <div 
          v-for="(log, index) in logs" 
          :key="index"
          class="log-entry"
          :class="getLogClass(log.type)"
        >
          <v-icon small class="mr-2">{{ getLogIcon(log.type) }}</v-icon>
          {{ log.message }}
          <span v-if="log.damage" class="damage-text">
            {{ log.damage }}
          </span>
        </div>
        <div v-if="logs.length === 0" class="text-center py-8 text-grey">
          <v-icon large>mdi-information-outline</v-icon>
          <div>战斗日志将在这里显示</div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  logs: Array
})

const emit = defineEmits(['clear-logs'])

const getLogClass = (type) => {
  const classes = {
    info: 'log-info',
    damage: 'log-damage',
    heal: 'log-heal',
    critical: 'log-critical',
    death: 'log-death',
    reward: 'log-reward'
  }
  return classes[type] || 'log-info'
}

const getLogIcon = (type) => {
  const icons = {
    info: 'mdi-information',
    damage: 'mdi-sword',
    heal: 'mdi-heart-plus',
    critical: 'mdi-star',
    death: 'mdi-skull',
    reward: 'mdi-treasure-chest'
  }
  return icons[type] || 'mdi-information'
}

const clearLogs = () => {
  emit('clear-logs')
}
</script>

<style scoped>
.battle-log-container {
  max-height: 300px;
  overflow-y: auto;
  padding: 8px;
}

.log-entry {
  padding: 8px 12px;
  margin-bottom: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.log-info {
  background-color: #e3f2fd;
  color: #1976d2;
}

.log-damage {
  background-color: #ffebee;
  color: #d32f2f;
}

.log-heal {
  background-color: #e8f5e8;
  color: #2e7d32;
}

.log-critical {
  background-color: #fff3e0;
  color: #f57c00;
  font-weight: bold;
}

.log-death {
  background-color: #424242;
  color: white;
}

.log-reward {
  background-color: #fff9c4;
  color: #fbc02d;
}

.damage-text {
  margin-left: 8px;
  font-weight: bold;
  font-size: 1.1em;
}
</style>