<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title class="bg-primary text-white">
        <v-icon left>mdi-potion</v-icon>
        选择物品
      </v-card-title>
      
      <v-card-text class="pa-0">
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.id"
            @click="selectItem(item)"
          >
            <template v-slot:prepend>
              <v-avatar :color="getItemColor(item.type)" size="40">
                <v-icon dark>{{ item.icon || 'mdi-package-variant' }}</v-icon>
              </v-avatar>
            </template>
            
            <v-list-item-title class="font-weight-medium">
              {{ item.name }}
            </v-list-item-title>
            
            <v-list-item-subtitle>
              {{ item.description }}
            </v-list-item-subtitle>
            
            <template v-slot:append>
              <div class="text-right">
                <div class="text-caption text-grey">
                  数量: {{ item.quantity || 1 }}
                </div>
                <div v-if="item.effect" class="text-caption text-grey">
                  {{ getEffectText(item.effect) }}
                </div>
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" @click="dialog = false">
          取消
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  items: Array
})

const emit = defineEmits(['update:modelValue', 'select-item'])

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const selectItem = (item) => {
  emit('select-item', item)
  dialog.value = false
}

const getItemColor = (type) => {
  const colors = {
    potion: 'green',
    consumable: 'blue',
    weapon: 'orange',
    armor: 'purple',
    material: 'brown'
  }
  return colors[type] || 'grey'
}

const getEffectText = (effect) => {
  if (effect.heal) return `恢复 ${effect.heal} HP`
  if (effect.mana) return `恢复 ${effect.mana} MP`
  if (effect.buff) return `增益效果`
  return '使用效果'
}
</script>