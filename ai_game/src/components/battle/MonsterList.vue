<template>
  <v-card class="mb-4" elevation="1">
    <v-card-title class="bg-blue-lighten-4">
      <v-icon left>mdi-skull</v-icon>
      区域怪物
    </v-card-title>
    <v-card-text class="pa-0">
      <v-list density="comfortable" class="monster-list">
        <v-list-item
          v-for="monster in monsters"
          :key="monster.name"
          @click="$emit('select-monster', monster)"
          :class="[
            'monster-item',
            { 
              'selected-monster': selectedMonster?.name === monster.name,
              'disabled-monster': disabled
            }
          ]"
          :disabled="disabled"
        >
          <template v-slot:prepend>
            <v-avatar size="40" :color="getMonsterColor(monster.level)">
              <v-icon dark>mdi-skull</v-icon>
            </v-avatar>
          </template>
          
          <v-list-item-title class="text-body-1 font-weight-medium">
            {{ monster.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            Lv.{{ monster.level }} | HP: {{ monster.health }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  monsters: Array,
  selectedMonster: Object,
  disabled: Boolean
})

const emit = defineEmits(['select-monster'])

const getMonsterColor = (level) => {
  if (level <= 5) return 'green'
  if (level <= 10) return 'blue'
  if (level <= 15) return 'orange'
  if (level <= 20) return 'red'
  return 'purple'
}
</script>

<style scoped>
.monster-list {
  max-height: 400px;
  overflow-y: auto;
}

.monster-item {
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
}

.monster-item:hover {
  background-color: #f5f5f5;
  border-left-color: #2196f3;
}

.selected-monster {
  background-color: #e3f2fd !important;
  border-left-color: #2196f3 !important;
}

.disabled-monster {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>