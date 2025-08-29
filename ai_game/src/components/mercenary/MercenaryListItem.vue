<template>
  <v-list-item
    :active="isSelected"
    @click="$emit('select', mercenary)"
    class="mercenary-list-item"
  >
    <template v-slot:prepend>
      <v-avatar :color="getMercenaryClassColor(mercenary.class)" size="40">
        <v-icon color="white">{{ getMercenaryClassIcon(mercenary.class) }}</v-icon>
      </v-avatar>
    </template>
    
    <v-list-item-title class="font-weight-medium">
      {{ mercenary.name }}
      <v-chip
        v-if="isInTeam"
        size="x-small"
        color="green"
        class="ml-2"
      >
        队伍中
      </v-chip>
    </v-list-item-title>
    
    <v-list-item-subtitle>
      {{ getMercenaryClassName(mercenary.class) }} · 等级 {{ mercenary.level || 1 }}
    </v-list-item-subtitle>
    
    <template v-slot:append>
      <v-btn
        color="primary"
        variant="text"
        size="small"
        :disabled="isInTeam"
        @click.stop="$emit('add-to-team', mercenary)"
      >
        <v-icon>{{ isInTeam ? 'mdi-check' : 'mdi-account-plus' }}</v-icon>
        {{ isInTeam ? '已在队伍' : '添加' }}
      </v-btn>
    </template>
  </v-list-item>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  mercenary: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  isInTeam: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select', 'add-to-team'])

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
</script>

<style scoped>
.mercenary-list-item {
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.mercenary-list-item:hover {
  background-color: #f5f5f5;
}
</style>