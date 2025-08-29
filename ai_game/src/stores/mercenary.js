import { defineStore } from 'pinia'
import { usePlayerStore } from './player'
import { saveGame as saveGameUtil } from '../utils/autoSave'

export const useMercenaryStore = defineStore('mercenary', {
  state: () => ({
    // 佣兵列表
    mercenaries: [],
    
    // 佣兵碎片
    mercenaryShards: {},
    
    // 队伍配置 - 注意：实际队伍数据现在存储在playerStore中
    
    // 佣兵招募相关
    tavernRefreshTime: null, // 酒馆刷新时间
    tavernMercenaries: {}, // 各城市酒馆可招募的佣兵 {cityName: [mercenaries]}
    
    // 统计数据
    totalMercenariesRecruited: 0,
    totalShardsCollected: 0
  }),

  getters: {
    // 获取当前激活的佣兵对象
    activeTeamMembers() {
      const playerStore = usePlayerStore()
      return playerStore.activeTeam.map(id => this.mercenaries.find(m => m.id === id)).filter(Boolean)
    },
    
    // 获取指定城市的可招募佣兵
    availableMercenariesInCity: (state) => (cityName) => {
      return state.tavernMercenaries[cityName] || []
    },
    
    // 获取指定佣兵的碎片数量
    mercenaryShardCount: (state) => (mercenaryId) => {
      return state.mercenaryShards[mercenaryId] || 0
    },
    
    // 检查队伍是否已满
    isTeamFull() {
      const playerStore = usePlayerStore()
      return playerStore.activeTeam.length >= playerStore.maxTeamSize
    },
    
    // 获取指定佣兵的等级
    getMercenaryLevel: (state) => (mercenaryId) => {
      const mercenary = state.mercenaries.find(m => m.id === mercenaryId)
      return mercenary ? mercenary.level : 0
    },
    
    // 获取指定佣兵的技能
    getMercenarySkills: (state) => (mercenaryId) => {
      const mercenary = state.mercenaries.find(m => m.id === mercenaryId)
      return mercenary ? mercenary.skills : []
    }
  },

  actions: {
    // 招募新佣兵
    recruitMercenary(mercenary, cityName) {
      // 检查是否已拥有该佣兵
      const existingMercenary = this.mercenaries.find(m => m.id === mercenary.id)
      
      if (existingMercenary) {
        // 已拥有该佣兵，转换为碎片
        this.addMercenaryShards(mercenary.id, 10) // 假设每个重复佣兵给10个碎片
        return {
          success: true,
          isNew: false,
          shards: 10
        }
      } else {
        // 新佣兵，添加到列表
        const newMercenary = {
          ...mercenary,
          level: 1,
          experience: 0,
          skills: mercenary.baseSkills || [],
          equipment: {
            weapon: null,
            armor: null,
            helmet: null,
            accessory: null
          },
          health: mercenary.baseHealth || 100,
          maxHealth: mercenary.baseHealth || 100,
          mana: mercenary.baseMana || 50,
          maxMana: mercenary.baseMana || 50,
          attack: mercenary.baseAttack || 10,
          defense: mercenary.baseDefense || 5,
          magicAttack: mercenary.baseMagicAttack || 8,
          magicDefense: mercenary.baseMagicDefense || 4,
          recruitedFrom: cityName,
          recruitedAt: new Date().toISOString()
        }
        
        this.mercenaries.push(newMercenary)
        this.totalMercenariesRecruited++
        
        // 从酒馆列表中移除
        if (this.tavernMercenaries[cityName]) {
          this.tavernMercenaries[cityName] = this.tavernMercenaries[cityName].filter(
            m => m.id !== mercenary.id
          )
        }
        
        this.autoSave()
        
        return {
          success: true,
          isNew: true,
          mercenary: newMercenary
        }
      }
    },
    
    // 添加佣兵碎片
    addMercenaryShards(mercenaryId, amount) {
      if (!this.mercenaryShards[mercenaryId]) {
        this.mercenaryShards[mercenaryId] = 0
      }
      
      this.mercenaryShards[mercenaryId] += amount
      this.totalShardsCollected += amount
      this.autoSave()
      
      return this.mercenaryShards[mercenaryId]
    },
    
    // 使用碎片升级佣兵
    upgradeMercenaryWithShards(mercenaryId, shardsRequired = 20) {
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      const availableShards = this.mercenaryShards[mercenaryId] || 0
      
      if (!mercenary) {
        return {
          success: false,
          reason: 'mercenary_not_found'
        }
      }
      
      if (availableShards < shardsRequired) {
        return {
          success: false,
          reason: 'not_enough_shards',
          required: shardsRequired,
          available: availableShards
        }
      }
      
      // 升级佣兵
      mercenary.level += 1
      
      // 提升属性
      mercenary.maxHealth += 10
      mercenary.health = mercenary.maxHealth
      mercenary.maxMana += 5
      mercenary.mana = mercenary.maxMana
      mercenary.attack += 2
      mercenary.defense += 1
      mercenary.magicAttack += 2
      mercenary.magicDefense += 1
      
      // 消耗碎片
      this.mercenaryShards[mercenaryId] -= shardsRequired
      
      this.autoSave()
      
      return {
        success: true,
        newLevel: mercenary.level
      }
    },
    
    // 将佣兵添加到队伍
    addToTeam(mercenaryId) {
      const playerStore = usePlayerStore()
      
      if (playerStore.activeTeam.length >= playerStore.maxTeamSize) {
        return {
          success: false,
          reason: 'team_full'
        }
      }
      
      if (playerStore.activeTeam.includes(mercenaryId)) {
        return {
          success: false,
          reason: 'already_in_team'
        }
      }
      
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      if (!mercenary) {
        return {
          success: false,
          reason: 'mercenary_not_found'
        }
      }
      
      playerStore.activeTeam.push(mercenaryId)
      playerStore.autoSave()
      
      return {
        success: true
      }
    },
    
    // 从队伍中移除佣兵
    removeFromTeam(mercenaryId) {
      const playerStore = usePlayerStore()
      const index = playerStore.activeTeam.indexOf(mercenaryId)
      
      if (index === -1) {
        return {
          success: false,
          reason: 'not_in_team'
        }
      }
      
      playerStore.activeTeam.splice(index, 1)
      playerStore.autoSave()
      
      return {
        success: true
      }
    },
    
    // 佣兵学习技能
    learnMercenarySkill(mercenaryId, skillId) {
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      if (!mercenary) {
        return {
          success: false,
          reason: 'mercenary_not_found'
        }
      }
      
      // 检查是否已学习该技能
      if (mercenary.skills.some(s => s.id === skillId)) {
        return {
          success: false,
          reason: 'skill_already_learned'
        }
      }
      
      // 检查技能是否适合该佣兵职业
      // 这里需要根据实际游戏设计添加逻辑
      
      // 添加技能
      mercenary.skills.push({
        id: skillId,
        level: 1
      })
      
      this.autoSave()
      
      return {
        success: true
      }
    },
    
    // 佣兵装备物品
    equipItem(mercenaryId, itemId, slot) {
      const playerStore = usePlayerStore()
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      
      if (!mercenary) {
        return {
          success: false,
          reason: 'mercenary_not_found'
        }
      }
      
      // 检查物品是否存在于玩家背包
      const itemIndex = playerStore.inventory.findIndex(item => item.id === itemId)
      if (itemIndex === -1) {
        return {
          success: false,
          reason: 'item_not_found'
        }
      }
      
      const item = playerStore.inventory[itemIndex]
      
      // 检查物品类型是否匹配装备槽
      if (!this.isItemValidForSlot(item, slot)) {
        return {
          success: false,
          reason: 'invalid_slot'
        }
      }
      
      // 如果该槽位已有装备，先卸下
      if (mercenary.equipment[slot]) {
        const oldItem = mercenary.equipment[slot]
        playerStore.addToInventory(oldItem)
      }
      
      // 装备新物品
      mercenary.equipment[slot] = item
      
      // 从背包移除
      playerStore.removeFromInventory(itemId, 1)
      
      // 更新佣兵属性
      this.updateMercenaryStats(mercenary)
      
      this.autoSave()
      
      return {
        success: true
      }
    },
    
    // 卸下佣兵装备
    unequipItem(mercenaryId, slot) {
      const playerStore = usePlayerStore()
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      
      if (!mercenary || !mercenary.equipment[slot]) {
        return {
          success: false,
          reason: 'no_equipment'
        }
      }
      
      // 将装备添加回背包
      const item = mercenary.equipment[slot]
      playerStore.addToInventory(item)
      
      // 清空装备槽
      mercenary.equipment[slot] = null
      
      // 更新佣兵属性
      this.updateMercenaryStats(mercenary)
      
      this.autoSave()
      
      return {
        success: true
      }
    },
    
    // 更新佣兵属性（基于装备等）
    updateMercenaryStats(mercenary) {
      // 重置为基础属性
      mercenary.attack = mercenary.baseAttack || 10
      mercenary.defense = mercenary.baseDefense || 5
      mercenary.magicAttack = mercenary.baseMagicAttack || 8
      mercenary.magicDefense = mercenary.baseMagicDefense || 4
      
      // 应用装备加成
      Object.values(mercenary.equipment).forEach(item => {
        if (item) {
          if (item.stats) {
            if (item.stats.attack) mercenary.attack += item.stats.attack
            if (item.stats.defense) mercenary.defense += item.stats.defense
            if (item.stats.magicAttack) mercenary.magicAttack += item.stats.magicAttack
            if (item.stats.magicDefense) mercenary.magicDefense += item.stats.magicDefense
            if (item.stats.maxHealth) {
              mercenary.maxHealth += item.stats.maxHealth
              mercenary.health = Math.min(mercenary.health, mercenary.maxHealth)
            }
            if (item.stats.maxMana) {
              mercenary.maxMana += item.stats.maxMana
              mercenary.mana = Math.min(mercenary.mana, mercenary.maxMana)
            }
          }
        }
      })
    },
    
    // 检查物品是否适合装备槽
    isItemValidForSlot(item, slot) {
      const slotTypeMap = {
        weapon: ['weapon', 'sword', 'axe', 'dagger', 'staff', 'bow'],
        armor: ['armor', 'robe', 'leather', 'plate'],
        helmet: ['helmet', 'hat', 'crown'],
        accessory: ['accessory', 'ring', 'necklace', 'amulet']
      }
      
      return slotTypeMap[slot] && slotTypeMap[slot].includes(item.type)
    },
    
    // 刷新酒馆佣兵
    refreshTavernMercenaries(cityName, mercenaryPool) {
      // 根据城市特性选择可招募的佣兵
      const availableMercenaries = this.selectMercenariesForCity(cityName, mercenaryPool)
      
      if (!this.tavernMercenaries[cityName]) {
        this.tavernMercenaries[cityName] = []
      }
      
      this.tavernMercenaries[cityName] = availableMercenaries
      this.tavernRefreshTime = new Date().toISOString()
      
      this.autoSave()
      
      return availableMercenaries
    },
    
    // 根据城市选择佣兵
    selectMercenariesForCity(cityName, mercenaryPool) {
      // 这里可以根据城市特性筛选佣兵
      // 例如，某些城市可能更容易出现特定职业的佣兵
      
      // 简单实现：随机选择3-5个佣兵
      const count = Math.floor(Math.random() * 3) + 3 // 3-5个
      const shuffled = [...mercenaryPool].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, count)
    },
    
    // 佣兵参与战斗获得经验
    addMercenaryExperience(mercenaryId, amount) {
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      if (!mercenary) return false
      
      mercenary.experience += amount
      
      // 检查是否升级
      const expRequired = this.calculateExpRequired(mercenary.level)
      if (mercenary.experience >= expRequired) {
        mercenary.experience -= expRequired
        this.levelUpMercenary(mercenary)
      }
      
      this.autoSave()
      return true
    },
    
    // 计算升级所需经验
    calculateExpRequired(level) {
      return Math.floor(100 * Math.pow(1.2, level - 1))
    },
    
    // 佣兵升级
    levelUpMercenary(mercenary) {
      mercenary.level += 1
      
      // 根据佣兵职业提升不同属性
      switch (mercenary.class) {
        case 'warrior':
          mercenary.maxHealth += 15
          mercenary.attack += 3
          mercenary.defense += 2
          break
        case 'mage':
          mercenary.maxHealth += 8
          mercenary.maxMana += 10
          mercenary.magicAttack += 4
          break
        case 'priest':
          mercenary.maxHealth += 10
          mercenary.maxMana += 8
          mercenary.magicDefense += 3
          break
        case 'hunter':
          mercenary.maxHealth += 12
          mercenary.attack += 3
          mercenary.agility += 2
          break
        case 'assassin':
          mercenary.maxHealth += 10
          mercenary.attack += 4
          mercenary.agility += 3
          break
        default:
          // 默认提升
          mercenary.maxHealth += 10
          mercenary.attack += 2
          mercenary.defense += 1
      }
      
      // 恢复满血满蓝
      mercenary.health = mercenary.maxHealth
      mercenary.mana = mercenary.maxMana
      
      return mercenary.level
    },
    
    // 佣兵治疗
    healMercenary(mercenaryId, amount) {
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      if (!mercenary) return false
      
      mercenary.health = Math.min(mercenary.health + amount, mercenary.maxHealth)
      return true
    },
    
    // 佣兵恢复魔法
    restoreMercenaryMana(mercenaryId, amount) {
      const mercenary = this.mercenaries.find(m => m.id === mercenaryId)
      if (!mercenary) return false
      
      mercenary.mana = Math.min(mercenary.mana + amount, mercenary.maxMana)
      return true
    },
    
    // 佣兵全部恢复
    fullRestoreMercenaries() {
      this.mercenaries.forEach(mercenary => {
        mercenary.health = mercenary.maxHealth
        mercenary.mana = mercenary.maxMana
      })
      this.autoSave()
    },
    
    // 保存游戏
    saveGame() {
      try {
        const success = saveGameUtil(this.$state)
        return success
      } catch (error) {
        console.error('保存佣兵数据失败:', error)
        return false
      }
    },
    
    // 自动保存
    autoSave() {
      if (!this._autoSave) {
        this._autoSave = () => {
          this.saveGame()
        }
      }
      this._autoSave()
    }
  },
  
  persist: {
    key: 'mercenary-storage',
    paths: [
      'mercenaries',
      'mercenaryShards',
      'tavernRefreshTime',
      'tavernMercenaries',
      'totalMercenariesRecruited',
      'totalShardsCollected'
    ]
  }
})