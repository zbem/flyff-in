// 存档工具函数
import { usePlayerStore } from '../stores/player'

// 存档数据结构
export const saveSchema = {
  version: '1.0.0',
  player: {
    name: '',
    level: 1,
    experience: 0,
    gold: 0,
    diamonds: 0,
    health: 100,
    maxHealth: 100,
    mana: 50,
    maxMana: 50,
    attack: 10,
    defense: 5,
    magicAttack: 8,
    magicDefense: 4,
    strength: 10,
    agility: 10,
    intelligence: 10,
    vitality: 10,
    class: 'Warrior',
    skillPoints: 0,
    skills: [],
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
    inventory: [],
    currentMap: '卡诺萨',
    currentRegion: '城市',
    mercenaries: [],
    skillCooldowns: {}
  },
  metadata: {
    createdAt: '',
    updatedAt: '',
    playTime: 0,
    version: '1.0.0'
  }
}

// 获取当前时间戳
function getTimestamp() {
  return new Date().toISOString()
}

// 创建新存档
export function createNewSave(slotName = '新存档') {
  const baseSave = JSON.parse(JSON.stringify(saveSchema))
  
  return {
    ...baseSave,
    metadata: {
      ...baseSave.metadata,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
      slotName: slotName
    }
  }
}

// 导出存档
export function exportSave() {
  const playerStore = usePlayerStore()
  
  const saveData = {
    version: '1.0.0',
    player: { ...playerStore.$state },
    metadata: {
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
      playTime: 0, // 可以添加游戏时间跟踪
      version: '1.0.0'
    }
  }
  
  // 转换为JSON字符串
  const jsonString = JSON.stringify(saveData, null, 2)
  
  // 创建Blob对象
  const blob = new Blob([jsonString], { type: 'application/json' })
  
  // 创建下载链接
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `fantasy_rpg_save_${Date.now()}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
  
  return saveData
}

// 导入存档
export function importSave(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const content = e.target.result
        const saveData = JSON.parse(content)
        
        // 验证存档格式
        if (!validateSave(saveData)) {
          throw new Error('无效的存档格式')
        }
        
        resolve(saveData)
      } catch (error) {
        reject(error)
      }
    }
    
    reader.onerror = () => {
      reject(new Error('读取文件失败'))
    }
    
    reader.readAsText(file)
  })
}

// 验证存档格式
export function validateSave(saveData) {
  if (!saveData || typeof saveData !== 'object') return false
  if (!saveData.version || !saveData.player) return false
  if (!saveData.metadata || !saveData.metadata.createdAt) return false
  
  // 检查必要的玩家属性
  const requiredProps = ['name', 'level', 'health', 'maxHealth', 'mana', 'maxMana']
  for (const prop of requiredProps) {
    if (saveData.player[prop] === undefined) return false
  }
  
  return true
}

// 加载存档到游戏
export function loadSave(saveData) {
  const playerStore = usePlayerStore()
  
  if (!validateSave(saveData)) {
    throw new Error('无效的存档数据')
  }
  
  // 更新玩家状态
  playerStore.$patch({
    ...saveData.player,
    // 确保技能冷却对象存在
    skillCooldowns: saveData.player.skillCooldowns || {}
  })
  
  // 更新可用技能
  playerStore.updateAvailableSkills()
  
  return true
}

// 获取本地存储的存档列表
export function getLocalSaves() {
  const saves = []
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith('rpg_save_')) {
      try {
        const saveData = JSON.parse(localStorage.getItem(key))
        if (validateSave(saveData)) {
          saves.push({
            key: key,
            data: saveData,
            slotName: saveData.metadata?.slotName || `存档${key.split('_')[2]}`,
            createdAt: saveData.metadata?.createdAt,
            updatedAt: saveData.metadata?.updatedAt,
            playTime: saveData.metadata?.playTime || 0
          })
        }
      } catch (error) {
        console.warn(`无效的存档数据: ${key}`, error)
      }
    }
  }
  
  // 按更新时间排序
  return saves.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
}

// 保存到本地存储
export function saveToLocal(slotIndex = 1, slotName = '') {
  const playerStore = usePlayerStore()
  
  const saveData = {
    version: '1.0.0',
    player: { ...playerStore.$state },
    metadata: {
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
      playTime: 0,
      slotName: slotName || `存档${slotIndex}`,
      version: '1.0.0'
    }
  }
  
  const storageKey = `rpg_save_${slotIndex}`
  localStorage.setItem(storageKey, JSON.stringify(saveData))
  
  return {
    key: storageKey,
    data: saveData
  }
}

// 从本地存储加载
export function loadFromLocal(slotIndex) {
  const storageKey = `rpg_save_${slotIndex}`
  const saveData = localStorage.getItem(storageKey)
  
  if (!saveData) {
    throw new Error(`存档位 ${slotIndex} 为空`)
  }
  
  try {
    const parsedData = JSON.parse(saveData)
    if (!validateSave(parsedData)) {
      throw new Error('存档数据无效')
    }
    
    loadSave(parsedData)
    return parsedData
  } catch (error) {
    throw new Error(`加载存档失败: ${error.message}`)
  }
}

// 删除本地存档
export function deleteLocalSave(slotIndex) {
  const storageKey = `rpg_save_${slotIndex}`
  localStorage.removeItem(storageKey)
  return true
}

// 清空所有存档
export function clearAllSaves() {
  const keysToRemove = []
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith('rpg_save_')) {
      keysToRemove.push(key)
    }
  }
  
  keysToRemove.forEach(key => {
    localStorage.removeItem(key)
  })
  
  return keysToRemove.length
}

// 存档管理工具
export const saveManager = {
  // 获取所有存档位状态
  getSaveSlots() {
    const slots = []
    
    for (let i = 1; i <= 10; i++) {
      const key = `rpg_save_${i}`
      const saveData = localStorage.getItem(key)
      
      if (saveData) {
        try {
          const parsed = JSON.parse(saveData)
          slots.push({
            slot: i,
            exists: true,
            name: parsed.metadata?.slotName || `存档${i}`,
            level: parsed.player?.level || 1,
            class: parsed.player?.class || 'Warrior',
            createdAt: parsed.metadata?.createdAt,
            updatedAt: parsed.metadata?.updatedAt
          })
        } catch {
          slots.push({ slot: i, exists: false })
        }
      } else {
        slots.push({ slot: i, exists: false })
      }
    }
    
    return slots
  },
  
  // 快速保存
  quickSave() {
    const slots = this.getSaveSlots()
    const emptySlot = slots.find(slot => !slot.exists)
    const slotIndex = emptySlot ? emptySlot.slot : 1 // 如果没有空位，覆盖第一个
    
    return saveToLocal(slotIndex, `快速存档_${new Date().toLocaleTimeString()}`)
  },
  
  // 自动保存
  autoSave() {
    return saveToLocal(0, `自动存档_${new Date().toLocaleString()}`)
  }
}

// 存档验证和迁移
export function migrateSave(oldSave) {
  // 这里可以添加存档版本迁移逻辑
  // 当游戏版本更新时，可以在这里处理旧版存档的兼容性
  
  const currentVersion = '1.0.0'
  
  if (oldSave.version !== currentVersion) {
    console.warn(`存档版本不匹配: ${oldSave.version} -> ${currentVersion}`)
    
    // 简单的版本迁移示例
    const migratedSave = { ...oldSave }
    migratedSave.version = currentVersion
    
    // 确保新字段存在
    if (!migratedSave.player.skillCooldowns) {
      migratedSave.player.skillCooldowns = {}
    }
    
    if (!migratedSave.player.mercenaries) {
      migratedSave.player.mercenaries = []
    }
    
    return migratedSave
  }
  
  return oldSave
}