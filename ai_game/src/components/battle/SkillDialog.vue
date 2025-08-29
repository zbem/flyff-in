<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title class="bg-primary text-white">
        <v-icon left>mdi-magic-staff</v-icon>
        选择技能
      </v-card-title>
      
      <v-card-text class="pa-0">
        <v-list>
          <v-list-item
            v-for="skill in skills"
            :key="skill.id"
            @click="selectSkill(skill)"
            :disabled="!canUseSkill(skill)"
          >
            <template v-slot:prepend>
              <v-avatar :color="getSkillColor(skill.type)" size="40">
                <v-icon dark>{{ skill.icon || 'mdi-star' }}</v-icon>
              </v-avatar>
            </template>
            
            <v-list-item-title class="font-weight-medium">
              {{ skill.name }}
            </v-list-item-title>
            
            <v-list-item-subtitle>
              {{ skill.description }}
            </v-list-item-subtitle>
            
            <template v-slot:append>
              <div class="text-right">
                <div class="text-caption text-grey">
                  消耗: {{ skill.manaCost }} MP
                </div>
                <div class="text-caption text-grey">
                  冷却: {{ skill.cooldown }}回合
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
  skills: Array,
  playerMana: Number
})

const emit = defineEmits(['update:modelValue', 'select-skill'])

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const canUseSkill = (skill) => {
  return props.playerMana >= skill.manaCost
}

const selectSkill = (skill) => {
  if (canUseSkill(skill)) {
    emit('select-skill', skill)
    dialog.value = false
  }
}

const getSkillColor = (type) => {
  const colors = {
    attack: 'red',
    heal: 'green',
    buff: 'blue',
    debuff: 'orange',
    summon: 'purple'
  }
  return colors[type] || 'grey'
}
</script>