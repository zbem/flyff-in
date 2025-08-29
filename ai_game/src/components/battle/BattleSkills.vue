<template>
  <v-card v-if="battleStore.isBattling" variant="outlined">
    <v-card-title>战斗技能</v-card-title>
    <v-card-text>
      <v-row>
        <v-col 
          v-for="skill in availableBattleSkills" 
          :key="skill.id"
          cols="6"
          md="4"
        >
          <v-card 
            variant="flat" 
            :class="{ 'skill-disabled': !canUseSkill(skill) }"
            @click="useSkillInBattle(skill.id)"
          >
            <v-card-text class="text-center">
              <v-icon large :color="getSkillColor(skill.type)">{{ skill.icon }}</v-icon>
              <div class="text-subtitle-2 mt-2">{{ skill.name }}</div>
              <div class="text-caption text-grey">
                {{ skill.description }}
              </div>
              <div class="text-caption">
                <v-chip size="x-small" color="blue">
                  {{ skill.manaCost }} MP
                </v-chip>
                <v-chip size="x-small" color="orange" class="ml-1">
                  {{ skill.cooldown }}s CD
                </v-chip>
              </div>
              <div v-if="!canUseSkill(skill)" class="text-caption text-red">
                {{ getSkillStatus(skill) }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <div v-if="availableBattleSkills.length === 0" class="text-center text-grey py-4">
        没有可用的战斗技能
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useBattleStore } from '../../stores/battle'
import { usePlayerStore } from '../../stores/player'
import { computed } from 'vue'

const battleStore = useBattleStore()
const playerStore = usePlayerStore()

// 获取可用的战斗技能
const availableBattleSkills = computed(() => {
  return playerStore.skills.map(learnedSkill => {
    const skill = playerStore.classSkills.find(s => s.id === learnedSkill.id)
    return skill ? { ...skill, level: learnedSkill.level } : null
  }).filter(Boolean)
})

// 检查技能是否可用
const canUseSkill = (skill) => {
  return playerStore.mana >= skill.manaCost && playerStore.isSkillAvailable(skill.id)
}

// 获取技能状态信息
const getSkillStatus = (skill) => {
  if (playerStore.mana < skill.manaCost) return '魔法不足'
  if (!playerStore.isSkillAvailable(skill.id)) return '冷却中'
  return '可用'
}

// 获取技能颜色
const getSkillColor = (skillType) => {
  const colors = {
    physical: 'red',
    fire: 'orange',
    ice: 'blue',
    lightning: 'yellow',
    holy: 'green',
    poison: 'purple',
    heal: 'pink',
    trap: 'brown',
    summon: 'teal',
    stealth: 'grey'
  }
  return colors[skillType] || 'primary'
}

// 在战斗中使用技能
const useSkillInBattle = (skillId) => {
  if (canUseSkill(availableBattleSkills.value.find(s => s.id === skillId))) {
    battleStore.useSkill(skillId)
  }
}
</script>

<style scoped>
.skill-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.v-card {
  transition: all 0.2s ease;
}

.v-card:not(.skill-disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>