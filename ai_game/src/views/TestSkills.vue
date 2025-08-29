<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>技能系统测试</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <h3>玩家信息</h3>
                <p>等级: {{ player.level }}</p>
                <p>职业: {{ player.class }}</p>
                <p>技能点: {{ player.skillPoints }}</p>
                <p>生命值: {{ player.health }}/{{ player.maxHealth }}</p>
                <p>魔法值: {{ player.mana }}/{{ player.maxMana }}</p>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="selectedClass"
                  :items="classes"
                  label="选择职业"
                  @update:model-value="changeClass"
                ></v-select>
                <v-btn @click="addExperience(100)" color="primary" class="mr-2">获得100经验</v-btn>
                <v-btn @click="resetSkills" color="error">重置技能</v-btn>
              </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>

            <h3>可用技能</h3>
            <v-row>
              <v-col v-for="skill in availableSkills" :key="skill.id" cols="12" md="6">
                <v-card variant="outlined">
                  <v-card-title>{{ skill.name }}</v-card-title>
                  <v-card-text>
                    <p>等级要求: {{ skill.levelRequirement }}</p>
                    <p>魔法消耗: {{ skill.manaCost }}</p>
                    <p>冷却时间: {{ skill.cooldown }}秒</p>
                    <p>描述: {{ skill.description }}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn 
                      @click="learnSkill(skill.id)" 
                      :disabled="player.skillPoints <= 0 || player.level < skill.levelRequirement"
                      color="primary"
                    >
                      学习技能 (消耗1技能点)
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>

            <h3>已学技能</h3>
            <v-row v-if="player.skills.length > 0">
              <v-col v-for="skill in learnedSkills" :key="skill.id" cols="12" md="6">
                <v-card variant="elevated">
                  <v-card-title>{{ skill.name }} (等级 {{ skill.level }})</v-card-title>
                  <v-card-text>
                    <p>冷却状态: {{ isSkillOnCooldown(skill.id) ? '冷却中' : '可用' }}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn 
                      @click="upgradeSkill(skill.id)" 
                      :disabled="player.skillPoints <= 0"
                      color="secondary"
                      class="mr-2"
                    >
                      升级 (消耗1技能点)
                    </v-btn>
                    <v-btn 
                      @click="useSkill(skill.id)" 
                      :disabled="player.mana < skill.manaCost || isSkillOnCooldown(skill.id)"
                      color="success"
                    >
                      使用技能
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <p v-else>尚未学习任何技能</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePlayerStore } from '../stores/player'
import { getSkillsByClass } from '../config/skills'

const playerStore = usePlayerStore()
const selectedClass = ref('Warrior')

const classes = [
  'Warrior', 'Mage', 'Priest', 'Hunter', 'Assassin'
]

const player = computed(() => playerStore)
const availableSkills = computed(() => getSkillsByClass(playerStore.class))

const learnedSkills = computed(() => {
  return playerStore.skills.map(skillInfo => {
    const skill = availableSkills.value.find(s => s.id === skillInfo.id)
    return {
      ...skill,
      level: skillInfo.level
    }
  })
})

const isSkillOnCooldown = (skillId) => {
  return playerStore.skillCooldowns[skillId] > 0
}

const changeClass = (className) => {
  playerStore.changeClass(className)
}

const learnSkill = (skillId) => {
  playerStore.learnSkill(skillId)
}

const upgradeSkill = (skillId) => {
  playerStore.upgradeSkill(skillId)
}

const useSkill = (skillId) => {
  const success = playerStore.useSkill(skillId)
  if (success) {
    console.log('技能使用成功!')
  }
}

const addExperience = (amount) => {
  playerStore.addExperience(amount)
}

const resetSkills = () => {
  playerStore.resetSkillPoints()
}
</script>

<style scoped>
.mr-2 {
  margin-right: 8px;
}
</style>