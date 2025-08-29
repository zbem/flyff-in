import { defineStore } from 'pinia'
import { getSkillsByClass, getSkillById } from '../config/skills'
import { loadSave, createAutoSave, saveGame as saveGameUtil } from '../utils/autoSave'
import { itemsConfig } from '../config/items'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    // 从本地存储加载数据
    ...loadSave(),
    // 基础属性
    name: '冒险者',
    level: 1,
    experience: 0,
    gold: 100,
    diamonds: 0,
    points: 0,
    
    // 战斗属性
    health: 100,
    maxHealth: 100,
    mana: 50,
    maxMana: 50,
    attack: 10,
    defense: 5,
    magicAttack: 8,
    magicDefense: 4,
    
    // 基础属性
    strength: 10,
    agility: 10,
    intelligence: 10,
    vitality: 10,
    
    // 职业和技能
    class: 'Warrior',
    skillPoints: 0,
    skills: [],
    skillCooldowns: {},
    
    // 装备
    equipment: {
      weapon: null,
      armor: null,
      helmet: null,
      gloves: null,
      boots: null,
      accessory1: null,
      accessory2: null,
      accessory3: null
    },
    
    // 背包
    inventory: [],
    inventorySlots: 20,
    
    // 生活技能
    alchemyExp: 0,
    
    // 位置信息
    currentMap: '卡诺萨',
    currentRegion: '城市',
    
    // 佣兵和队伍系统
    mercenaries: [],
    mercenarySlots: 1,
    activeTeam: [], // 当前上阵队伍（佣兵ID数组）
    maxTeamSize: 3, // 最大队伍大小（不包括玩家自己）
    
    // 可用技能（根据职业）
    availableSkills: [],
    
    // 任务系统
    activeQuests: [],
    completedQuests: [],
    questProgress: {
      monsterKills: {},
      visitedAreas: [],
      collectedItems: {}
    },
    reputation: {
      cities: 0,
      factions: {}
    }
  }),

  getters: {
    experienceRequired: (state) => {
      return Math.floor(100 * Math.pow(1.2, state.level - 1))
    },
    
    isSkillAvailable: (state) => (skillId) => {
      return !state.skillCooldowns[skillId] || state.skillCooldowns[skillId] <= 0
    },
    
    classSkills: (state) => {
      return getSkillsByClass(state.class)
    },
    
    totalAttack: (state) => {
      return state.attack + Math.floor(state.strength * 0.5)
    },
    
    totalDefense: (state) => {
      return state.defense + Math.floor(state.vitality * 0.3)
    },
    
    expToNextLevel: (state) => {
      return Math.floor(100 * Math.pow(1.2, state.level - 1))
    }
  },

  actions: {
    addExperience(amount) {
      this.experience += amount
      while (this.experience >= this.experienceRequired) {
        this.experience -= this.experienceRequired
        this.levelUp()
      }
    },
    
    levelUp() {
      this.level += 1
      this.skillPoints += 1
      this.maxHealth += 10
      this.maxMana += 5
      this.health = this.maxHealth
      this.mana = this.maxMana
      
      switch (this.class) {
        case 'Warrior':
          this.attack += 3
          this.defense += 2
          break
        case 'Mage':
          this.magicAttack += 4
          this.magicDefense += 2
          break
        case 'Priest':
          this.magicAttack += 2
          this.magicDefense += 3
          break
        case 'Hunter':
          this.attack += 2
          this.defense += 1
          break
        case 'Assassin':
          this.attack += 3
          this.defense += 1
          break
      }
    },
    
    changeMap(mapName, regionType) {
      this.currentMap = mapName
      this.currentRegion = regionType
    },
    
    getSkillClass(skillId) {
      if (skillId.startsWith('warrior_')) return 'warrior'
      if (skillId.startsWith('mage_')) return 'mage'
      if (skillId.startsWith('priest_')) return 'priest'
      if (skillId.startsWith('hunter_')) return 'hunter'
      if (skillId.startsWith('assassin_')) return 'assassin'
      return ''
    },
    
    learnSkill(skillId) {
      const skillClass = this.getSkillClass(skillId)
      // 从配置中获取技能信息，而不是从 availableSkills 中
      const skill = getSkillsByClass(this.class).find(s => s.id === skillId) || 
                   getSkillById(skillId)
      
      if (skill && this.skillPoints > 0 && this.level >= skill.levelRequirement && this.class.toLowerCase() === skillClass.toLowerCase()) {
        if (!this.skills.find(s => s.id === skillId)) {
          this.skills.push({ id: skillId, level: 1 })
          this.skillPoints -= 1
          this.autoSave()
          return true
        }
      }
      return false
    },
    
    upgradeSkill(skillId) {
      const skill = this.skills.find(s => s.id === skillId)
      if (skill && this.skillPoints > 0) {
        skill.level += 1
        this.skillPoints -= 1
      }
    },
    
    useSkill(skillId) {
      const skill = getSkillsByClass(this.class).find(s => s.id === skillId)
      const learnedSkill = this.skills.find(s => s.id === skillId)
      
      if (skill && learnedSkill && this.mana >= skill.manaCost && this.isSkillAvailable(skillId)) {
        this.mana -= skill.manaCost
        this.skillCooldowns[skillId] = skill.cooldown
        return true
      }
      return false
    },
    
    reduceCooldowns() {
      Object.keys(this.skillCooldowns).forEach(skillId => {
        if (this.skillCooldowns[skillId] > 0) {
          this.skillCooldowns[skillId] -= 1
        }
      })
    },
    
    changeClass(className) {
      this.class = className
      this.skills = []
      this.skillCooldowns = {}
    },
    
    resetSkillPoints() {
      this.skillPoints = 0
      this.skills = []
      this.skillCooldowns = {}
    },
    
    updateAvailableSkills() {
      this.availableSkills = getSkillsByClass(this.class)
    },
    
    addGold(amount) {
      this.gold += amount
      this.autoSave()
    },

    addDiamonds(amount) {
      this.diamonds += amount
      this.autoSave()
    },

    addPoints(amount) {
      this.points += amount
      this.autoSave()
    },

    addToInventory(item, quantity = 1) {
      const itemConfig = itemsConfig.getItemById(item.id)
      const isStackable = itemConfig?.stackable
      
      if (isStackable) {
        const existingStack = this.inventory.find(i => i.id === item.id && i.quantity < itemConfig.maxStack)
        
        if (existingStack) {
          existingStack.quantity += quantity
          if (existingStack.quantity > itemConfig.maxStack) {
            const remaining = existingStack.quantity - itemConfig.maxStack
            existingStack.quantity = itemConfig.maxStack
            if (this.inventory.length < this.inventorySlots) {
              this.inventory.push({ ...item, quantity: remaining })
            }
          }
        } else {
          if (this.inventory.length < this.inventorySlots) {
            this.inventory.push({ ...item, quantity })
          }
        }
      } else {
        for (let i = 0; i < quantity; i++) {
          if (this.inventory.length < this.inventorySlots) {
            this.inventory.push({ ...item })
          }
        }
      }
      
      this.updateQuestItemProgress(item.id, quantity)
      this.autoSave()
    },
    
    // 任务相关方法
    acceptQuest(questId) {
      if (!this.activeQuests.includes(questId)) {
        this.activeQuests.push(questId)
        this.autoSave()
        return true
      }
      return false
    },
    
    completeQuest(questId) {
      if (this.activeQuests.includes(questId)) {
        this.activeQuests = this.activeQuests.filter(id => id !== questId)
        this.completedQuests.push(questId)
        this.autoSave()
        return true
      }
      return false
    },
    
    abandonQuest(questId) {
      if (this.activeQuests.includes(questId)) {
        this.activeQuests = this.activeQuests.filter(id => id !== questId)
        this.autoSave()
        return true
      }
      return false
    },
    
    updateQuestItemProgress(itemId, quantity = 1) {
      if (this.questProgress.collectedItems[itemId]) {
        this.questProgress.collectedItems[itemId] += quantity
      } else {
        this.questProgress.collectedItems[itemId] = quantity
      }
      this.autoSave()
    },
    
    updateQuestMonsterProgress(monsterId, quantity = 1) {
      if (this.questProgress.monsterKills[monsterId]) {
        this.questProgress.monsterKills[monsterId] += quantity
      } else {
        this.questProgress.monsterKills[monsterId] = quantity
      }
      this.autoSave()
    },
    
    updateQuestAreaProgress(areaId) {
      if (!this.questProgress.visitedAreas.includes(areaId)) {
        this.questProgress.visitedAreas.push(areaId)
        this.autoSave()
      }
    },

    removeFromInventory(itemId, amount = 1) {
      let count = amount
      this.inventory = this.inventory.filter(item => {
        if (item.id === itemId) {
          if (item.quantity) {
            if (item.quantity > count) {
              item.quantity -= count
              count = 0
              return true
            } else {
              count -= item.quantity
              return false
            }
          } else {
            if (count > 0) {
              count--
              return false
            }
            return true
          }
        }
        return true
      })
    },

    getItemCount(itemId) {
      return this.inventory.reduce((total, item) => {
        if (item.id === itemId) {
          return total + (item.quantity || 1)
        }
        return total
      }, 0)
    },

    expandInventory(slots = 5) {
      this.inventorySlots += slots
      this.autoSave()
    },
    
    heal(amount) {
      this.health = Math.min(this.health + amount, this.maxHealth)
    },
    
    restoreMana(amount) {
      this.mana = Math.min(this.mana + amount, this.maxMana)
    },
    
    fullRestore() {
      this.health = this.maxHealth
      this.mana = this.maxMana
    },
    
    
    saveGame() {
      try {
        const success = saveGameUtil(this.$state)
        if (success) {
          console.log('游戏已保存')
        }
        return success
      } catch (error) {
        console.error('保存游戏失败:', error)
        return false
      }
    },
    
    autoSave() {
      if (!this._autoSave) {
        this._autoSave = createAutoSave(this, 100)
      }
      this._autoSave()
    },
    
    clearSave() {
      localStorage.removeItem('player-storage')
      location.reload()
    }
  },
  
  persist: {
    key: 'player-storage',
    paths: [
      'name', 'level', 'experience', 'gold', 'diamonds', 'points',
      'health', 'maxHealth', 'mana', 'maxMana', 'attack', 'defense',
      'magicAttack', 'magicDefense', 'strength', 'agility', 'intelligence',
      'vitality', 'class', 'skillPoints', 'skills', 'skillCooldowns',
      'equipment', 'inventory', 'inventorySlots', 'alchemyExp',
      'currentMap', 'currentRegion', 'mercenaries', 'mercenarySlots', 'activeTeam', 'maxTeamSize',
      'activeQuests', 'completedQuests', 'questProgress', 'reputation',
      'availableSkills'
    ]
  }
})