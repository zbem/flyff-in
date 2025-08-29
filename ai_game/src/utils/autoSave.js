// 自动存档工具函数
export const AUTO_SAVE_KEY = 'fantasy_rpg_auto_save'

// 获取默认玩家状态
export function getDefaultPlayerState() {
  return {
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
    availableSkills: [],
    
    // 装备
    equipment: {
      weapon: null,
      armor: null,
      accessory: null
    },
    
    // 背包
    inventory: [],
    inventorySlots: 20,
    
    // 生活技能
    alchemyExp: 0,
    
    // 位置信息
    currentMap: '卡诺萨',
    currentRegion: '城市',
    
    // 佣兵
    mercenaries: [],
    activeMercenarySlots: 1,
    
    // 任务系统
    activeQuests: [],
    completedQuests: [],
    questProgress: {
      monsterKills: {},
      visitedAreas: [],
      collectedItems: {}
    },
    
    // 声望系统
    reputation: {
      cities: 0,
      factions: {}
    }
  }
}

// 加载存档
export function loadSave() {
  try {
    const savedData = localStorage.getItem(AUTO_SAVE_KEY)
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      // 合并保存的数据和默认值
      return { ...getDefaultPlayerState(), ...parsedData }
    }
  } catch (error) {
    console.error('加载存档失败:', error)
  }
  return getDefaultPlayerState()
}

// 保存存档
export function saveGame(state) {
  try {
    localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(state))
    return true
  } catch (error) {
    console.error('保存游戏失败:', error)
    return false
  }
}

// 清除存档
export function clearSave() {
  localStorage.removeItem(AUTO_SAVE_KEY)
}

// 防抖自动保存
export function createAutoSave(store, delay = 1000) {
  let timeoutId = null
  
  return function() {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    timeoutId = setTimeout(() => {
      saveGame(store.$state)
      timeoutId = null
    }, delay)
  }
}