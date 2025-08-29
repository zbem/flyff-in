<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="bg-primary text-white">
        <v-icon start>mdi-auto-fix</v-icon>
        {{ mercenary?.name || '佣兵' }}的技能
      </v-card-title>
      
      <v-card-text class="pt-4">
        <v-list>
          <v-list-item
            v-for="skill in skills"
            :key="skill.id"
            @click="selectSkill(skill)"
            :disabled="!canUseSkill(skill)"
          >
            <template v-slot:prepend>
              <v-avatar :color="getSkillColor(skill)" size="36">
                <v-icon>{{ getSkillIcon(skill) }}</v-icon>
              </v-avatar>
            </template>
            
            <v-list-item-title>{{ skill.name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ skill.description }}
            </v-list-item-subtitle>
            
            <template v-slot:append>
              <v-chip
                size="small"
                :color="canUseSkill(skill) ? 'blue' : 'grey'"
              >
                <v-icon start size="x-small">mdi-flash</v-icon>
                {{ skill.manaCost || 0 }}
              </v-chip>
            </template>
          </v-list-item>
        </v-list>
        
        <div v-if="skills.length === 0" class="text-center py-4">
          <v-icon size="large" class="mb-2">mdi-alert</v-icon>
          <div>该佣兵没有可用的技能</div>
        </div>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="grey"
          variant="text"
          @click="closeDialog"
        >
          取消
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  mercenary: {
    type: Object,
    default: null
  },
  skills: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue', 'select-skill']);

const dialog = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  dialog.value = newValue;
});

watch(dialog, (newValue) => {
  emit('update:modelValue', newValue);
});

function selectSkill(skill) {
  if (!canUseSkill(skill)) return;
  emit('select-skill', skill);
  closeDialog();
}

function closeDialog() {
  dialog.value = false;
}

function canUseSkill(skill) {
  if (!props.mercenary) return false;
  return (skill.manaCost || 0) <= (props.mercenary.mana || 100);
}

function getSkillIcon(skill) {
  const icons = {
    'attack': 'mdi-sword',
    'magic': 'mdi-auto-fix',
    'heal': 'mdi-heart-plus',
    'buff': 'mdi-shield-plus',
    'debuff': 'mdi-shield-minus'
  };
  
  return icons[skill.type] || 'mdi-star';
}

function getSkillColor(skill) {
  const colors = {
    'attack': 'red',
    'magic': 'blue',
    'heal': 'green',
    'buff': 'amber',
    'debuff': 'purple'
  };
  
  return colors[skill.type] || 'grey';
}
</script>

<style scoped>
.v-list-item {
  margin-bottom: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.v-list-item:hover:not(.v-list-item--disabled) {
  background-color: rgba(0, 0, 255, 0.05);
}
</style>