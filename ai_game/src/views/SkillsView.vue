<template>
  <v-card>
    <v-card-title>{{ i18nStore.$t('skills.title') }}</v-card-title>
    <v-card-text>
      <!-- 选项卡 -->
      <v-tabs v-model="activeTab" grow>
        <v-tab value="learned">
          <v-icon left>mdi-check</v-icon>
          {{ i18nStore.$t('skills.learnedSkills') }}
        </v-tab>
        <v-tab value="available">
          <v-icon left>mdi-star</v-icon>
          {{ i18nStore.$t('skills.availableSkills') }}
        </v-tab>
        <v-tab value="all">
          <v-icon left>mdi-view-list</v-icon>
          所有技能
        </v-tab>
      </v-tabs>

      <v-window v-model="activeTab" class="mt-4">
        <!-- 已学习技能 -->
        <v-window-item value="learned">
          <v-card variant="outlined">
            <v-card-title>
              <v-icon left color="green">mdi-check</v-icon>
              {{ i18nStore.$t('skills.learnedSkills') }}
              <v-chip color="green" class="ml-2">{{ learnedSkills.length }}</v-chip>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item 
                  v-for="skill in learnedSkills" 
                  :key="skill.id"
                >
                  <template v-slot:prepend>
                    <v-icon :color="getSkillClassColor(getSkillClass(skill.id))">
                      {{ getSkillIcon(skill.id) }}
                    </v-icon>
                  </template>
                  
                  <v-list-item-title>
                    {{ getSkillName(skill.id) }}
                    <v-chip size="x-small" color="green" class="ml-2">
                      Lv.{{ skill.level }}
                    </v-chip>
                  </v-list-item-title>
                  
                  <v-list-item-subtitle>
                    {{ getSkillDescription(skill.id) }}
                    <div class="skill-details mt-1">
                      <template v-if="getSkillDetails(skill.id)">
                        <div v-for="(detail, index) in getSkillDetails(skill.id)" :key="index" 
                             :class="getDetailColorClass(detail.type)">
                          {{ detail.text }}
                        </div>
                      </template>
                    </div>
                  </v-list-item-subtitle>
                  
                  <template v-slot:append>
                    <v-btn 
                      size="small" 
                      color="green"
                      :disabled="playerStore.skillPoints <= 0"
                      @click="upgradeSkill(skill.id)"
                    >
                      {{ i18nStore.$t('skills.upgrade') }}
                    </v-btn>
                  </template>
                </v-list-item>
              </v-list>
              
              <div v-if="learnedSkills.length === 0" class="text-center text-grey py-8">
                <v-icon size="large" class="mb-2">mdi-book-open-blank-variant</v-icon>
                <div>暂无已学习技能</div>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- 可学习技能 -->
        <v-window-item value="available">
          <v-card variant="outlined">
            <v-card-title>
              <v-icon left color="primary">mdi-star</v-icon>
              {{ i18nStore.$t('skills.availableSkills') }}
              <v-chip color="primary" class="ml-2">{{ availableSkills.length }}</v-chip>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item 
                  v-for="skill in availableSkills" 
                  :key="skill.id"
                  :class="{ 'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id) }"
                >
                  <template v-slot:prepend>
                    <v-icon 
                      :color="getSkillClassColor(getSkillClass(skill.id))"
                      :class="{ 'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id) }"
                    >
                      {{ skill.icon }}
                    </v-icon>
                  </template>
                  
                  <v-list-item-title>
                    <span :class="{ 'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id) }">
                      {{ skill.name }}
                    </span>
                    <v-chip size="x-small" :color="getRequirementColor(skill)" class="ml-2">
                      Lv.{{ skill.levelRequirement }}
                    </v-chip>
                    <v-chip size="x-small" color="blue" class="ml-1" v-if="playerStore.class.toLowerCase() !== getSkillClass(skill.id)">
                      {{ getSkillClass(skill.id) }}
                    </v-chip>
                  </v-list-item-title>
                  
                  <v-list-item-subtitle :class="{ 'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id) }">
                    {{ skill.description }}
                    <div class="skill-details mt-1">
                      <template v-if="getSkillDetails(skill.id)">
                        <div v-for="(detail, index) in getSkillDetails(skill.id)" :key="index" 
                             :class="getDetailColorClass(detail.type)">
                          {{ detail.text }}
                        </div>
                      </template>
                    </div>
                    <div class="text-caption text-blue mt-1">
                      {{ i18nStore.$t('skills.requirements.level', { level: skill.levelRequirement }) }}
                      <template v-if="playerStore.class.toLowerCase() !== getSkillClass(skill.id)">
                        , {{ i18nStore.$t('skills.requirements.class', { class: i18nStore.$t(`classes.${getSkillClass(skill.id)}`) }) }}
                      </template>
                    </div>
                  </v-list-item-subtitle>
                  
                  <template v-slot:append>
                    <div v-if="!canLearnSkill(skill)" class="text-caption text-red">
                      {{ getLearnRequirementText(skill) }}
                    </div>
                    <v-btn 
                      v-else
                      size="small" 
                      color="primary"
                      :disabled="!canLearnSkill(skill)"
                      @click="learnSkill(skill.id)"
                    >
                      {{ i18nStore.$t('skills.learn') }}
                    </v-btn>
                  </template>
                </v-list-item>
              </v-list>
              
              <div v-if="availableSkills.length === 0" class="text-center text-grey py-8">
                <v-icon size="large" class="mb-2">mdi-star-off</v-icon>
                <div>暂无可学习技能</div>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- 所有技能 -->
        <v-window-item value="all">
          <v-card variant="outlined">
            <v-card-title>
              <v-icon left>mdi-view-list</v-icon>
              所有技能
              <v-chip class="ml-2">{{ allSkills.length }}</v-chip>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item 
                  v-for="skill in allSkills" 
                  :key="skill.id"
                  :class="{ 
                    'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id),
                    'text-green': hasLearnedSkill(skill.id)
                  }"
                >
                  <template v-slot:prepend>
                    <v-icon 
                      :color="getSkillClassColor(getSkillClass(skill.id))"
                      :class="{ 'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id) }"
                    >
                      {{ skill.icon }}
                    </v-icon>
                  </template>
                  
                  <v-list-item-title>
                    <span :class="{ 'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id) }">
                      {{ skill.name }}
                    </span>
                    <v-chip size="x-small" :color="getRequirementColor(skill)" class="ml-2">
                      Lv.{{ skill.levelRequirement }}
                    </v-chip>
                    <v-chip size="x-small" color="blue" class="ml-1" v-if="playerStore.class.toLowerCase() !== getSkillClass(skill.id)">
                      {{ getSkillClass(skill.id) }}
                    </v-chip>
                    <v-chip size="x-small" color="green" class="ml-1" v-if="hasLearnedSkill(skill.id)">
                      已学
                    </v-chip>
                  </v-list-item-title>
                  
                  <v-list-item-subtitle :class="{ 'text-grey': playerStore.level < skill.levelRequirement || playerStore.class.toLowerCase() !== getSkillClass(skill.id) }">
                    {{ skill.description }}
                    <div class="skill-details mt-1">
                      <template v-if="getSkillDetails(skill.id)">
                        <div v-for="(detail, index) in getSkillDetails(skill.id)" :key="index" 
                             :class="getDetailColorClass(detail.type)">
                          {{ detail.text }}
                        </div>
                      </template>
                    </div>
                    <div class="text-caption text-blue mt-1">
                      {{ i18nStore.$t('skills.requirements.level', { level: skill.levelRequirement }) }}
                      <template v-if="playerStore.class.toLowerCase() !== getSkillClass(skill.id)">
                        , {{ i18nStore.$t('skills.requirements.class', { class: i18nStore.$t(`classes.${getSkillClass(skill.id)}`) }) }}
                      </template>
                    </div>
                  </v-list-item-subtitle>
                  
                  <template v-slot:append>
                    <div v-if="hasLearnedSkill(skill.id)" class="text-success">
                      <v-icon color="green">mdi-check</v-icon>
                      {{ i18nStore.$t('skills.learned') }}
                    </div>
                    <v-btn 
                      v-else
                      size="small" 
                      color="primary"
                      :disabled="playerStore.level < skill.levelRequirement || playerStore.skillPoints <= 0 || playerStore.class.toLowerCase() !== getSkillClass(skill.id)"
                      @click="learnSkill(skill.id)"
                    >
                      {{ i18nStore.$t('skills.learn') }}
                    </v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>

      <!-- 技能点信息 -->
      <v-card variant="outlined" class="mt-4">
        <v-card-title>{{ i18nStore.$t('skills.skillInfo') }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title>{{ i18nStore.$t('skills.skillPoints') }}: {{ playerStore.skillPoints }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>{{ i18nStore.$t('skills.totalSkills') }}: {{ learnedSkills.length }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6">
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title>{{ i18nStore.$t('skills.class') }}: {{ playerStore.class }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>{{ i18nStore.$t('skills.level') }}: {{ playerStore.level }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { usePlayerStore } from '../stores/player'
import { useI18nStore } from '../stores/i18n'
import { skillsConfig, getSkillById } from '../config/skills'
import { ref, computed, onMounted } from 'vue'

const playerStore = usePlayerStore()
const i18nStore = useI18nStore()
const activeTab = ref('learned') // 默认显示已学习技能

// 组件挂载时初始化可用技能
onMounted(() => {
  playerStore.updateAvailableSkills()
})

// 获取所有技能（所有职业）
const allSkills = computed(() => {
  return Object.values(skillsConfig).flat()
})

// 获取当前职业的可用技能
const availableSkills = computed(() => {
  return allSkills.value.filter(skill => 
    !playerStore.skills.some(s => s.id === skill.id)
  )
})

// 获取已学习的技能
const learnedSkills = computed(() => {
  return playerStore.skills
})

// 检查是否已学习某个技能
const hasLearnedSkill = (skillId) => {
  return playerStore.skills.some(s => s.id === skillId)
}

// 获取技能的职业
const getSkillClass = (skillId) => {
  for (const [className, skills] of Object.entries(skillsConfig)) {
    if (skills.some(skill => skill.id === skillId)) {
      return className
    }
  }
  return 'unknown'
}

// 获取技能的职业颜色
const getSkillClassColor = (className) => {
  const colors = {
    warrior: 'red',
    mage: 'blue', 
    priest: 'green',
    hunter: 'orange',
    assassin: 'purple'
  }
  return colors[className] || 'grey'
}

// 获取需求颜色
const getRequirementColor = (skill) => {
  if (playerStore.level < skill.levelRequirement) return 'red'
  if (playerStore.class.toLowerCase() !== getSkillClass(skill.id)) return 'orange'
  return 'primary'
}

// 检查是否可以学习技能
const canLearnSkill = (skill) => {
  return playerStore.level >= skill.levelRequirement && 
         playerStore.skillPoints > 0 && 
         playerStore.class.toLowerCase() === getSkillClass(skill.id)
}

// 获取学习需求文本
const getLearnRequirementText = (skill) => {
  const requirements = []
  
  if (playerStore.level < skill.levelRequirement) {
    requirements.push(i18nStore.$t('skills.requirements.level', { level: skill.levelRequirement }))
  }
  
  if (playerStore.skillPoints <= 0) {
    requirements.push(i18nStore.$t('skills.requirements.skillPoints'))
  }
  
  if (playerStore.class.toLowerCase() !== getSkillClass(skill.id)) {
    const classText = i18nStore.$t(`classes.${getSkillClass(skill.id)}`)
    requirements.push(i18nStore.$t('skills.requirements.class', { class: classText }))
  }
  
  return requirements.join(', ')
}

// 获取技能信息
const getSkillName = (skillId) => {
  const skill = getSkillById(skillId)
  return skill ? skill.name : '未知技能'
}

const getSkillDescription = (skillId) => {
  const skill = getSkillById(skillId)
  return skill ? skill.description : ''
}

const getSkillIcon = (skillId) => {
  const skill = getSkillById(skillId)
  return skill ? skill.icon : 'mdi-help'
}

// 学习技能
const learnSkill = (skillId) => {
  const skillClass = getSkillClass(skillId)
  if (skillClass === playerStore.class.toLowerCase()) {
    const success = playerStore.learnSkill(skillId)
    if (success) {
      // 学习成功，可以添加提示
      console.log('技能学习成功:', skillId)
    } else {
      // 学习失败，可以添加提示
      console.log('技能学习失败:', skillId)
    }
  }
}

// 升级技能
const upgradeSkill = (skillId) => {
  playerStore.upgradeSkill(skillId)
}

// 获取技能详细信息
const getSkillDetails = (skillId) => {
  const skill = getSkillById(skillId)
  if (!skill) return null
  
  const details = []
  
  // 基础伤害
  if (skill.damage) {
    details.push({
      type: 'damage',
      text: `伤害: ${skill.damage}`
    })
  }
  
  // 治疗量
  if (skill.heal) {
    details.push({
      type: 'heal',
      text: `治疗: ${skill.heal}`
    })
  }
  
  // 魔法消耗
  if (skill.manaCost) {
    details.push({
      type: 'mana',
      text: `魔法消耗: ${skill.manaCost}`
    })
  }
  
  // 冷却时间
  if (skill.cooldown) {
    details.push({
      type: 'cooldown',
      text: `冷却: ${skill.cooldown}回合`
    })
  }
  
  // 特殊效果
  if (skill.burnChance) {
    details.push({
      type: 'fire',
      text: `${Math.round(skill.burnChance * 100)}%几率造成燃烧`
    })
  }
  
  if (skill.freezeChance) {
    details.push({
      type: 'ice',
      text: `${Math.round(skill.freezeChance * 100)}%几率冻结敌人`
    })
  }
  
  if (skill.stunChance) {
    details.push({
      type: 'stun',
      text: `${Math.round(skill.stunChance * 100)}%几率眩晕敌人`
    })
  }
  
  if (skill.dotDamage) {
    details.push({
      type: 'poison',
      text: `每回合造成${skill.dotDamage}点毒伤害，持续${skill.dotDuration}回合`
    })
  }
  
  // 群体攻击
  if (skill.aoe) {
    details.push({
      type: 'aoe',
      text: '群体攻击'
    })
  }
  
  // 连锁攻击
  if (skill.chainTargets) {
    details.push({
      type: 'chain',
      text: `连锁攻击${skill.chainTargets}个目标`
    })
  }
  
  return details
}

// 获取详细信息的颜色类
const getDetailColorClass = (type) => {
  const colorMap = {
    damage: 'text-red',
    heal: 'text-green',
    mana: 'text-blue',
    cooldown: 'text-grey',
    fire: 'text-deep-orange',
    ice: 'text-light-blue',
    stun: 'text-amber',
    poison: 'text-green-darken-2',
    aoe: 'text-purple',
    chain: 'text-indigo'
  }
  
  return colorMap[type] || 'text-grey'
}
</script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}

.skill-details {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  font-size: 0.85rem;
}

.skill-details div {
  padding: 2px 6px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.05);
  display: inline-block;
}

.text-red {
  color: #f44336 !important;
}

.text-green {
  color: #4caf50 !important;
}

.text-blue {
  color: #2196f3 !important;
}

.text-deep-orange {
  color: #ff5722 !important;
}

.text-light-blue {
  color: #03a9f4 !important;
}

.text-amber {
  color: #ffc107 !important;
}

.text-green-darken-2 {
  color: #388e3c !important;
}

.text-purple {
  color: #9c27b0 !important;
}

.text-indigo {
  color: #3f51b5 !important;
}
</style>
