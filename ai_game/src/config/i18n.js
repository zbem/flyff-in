// 多语言配置
export const languages = {
  zh: '中文',
  en: 'English'
}

// 默认语言
export const defaultLanguage = 'zh'

// 语言包
export const messages = {
  zh: {
    // 通用
    common: {
      gold: '金币',
      diamonds: '钻石',
      points: '积分',
      level: '等级',
      health: '生命值',
      mana: '魔法值',
      attack: '攻击力',
      defense: '防御力',
      confirm: '确认',
      cancel: '取消',
      buy: '购买',
      sell: '出售',
      use: '使用',
      equip: '装备',
      unequip: '卸下'
    },

    // 导航菜单
    navigation: {
      character: '角色',
      inventory: '背包',
      mercenary: '佣兵',
      map: '地图',
      battle: '战斗',
      shop: '商城',
      gameplay: '玩法',
      settings: '设置'
    },

    // 菜单
    menu: {
      character: '角色',
      inventory: '背包',
      mercenary: '佣兵',
      map: '地图',
      battle: '战斗信息',
      skills: '技能',
      shop: '商城',
      gameplay: '玩法',
      quests: '冒险者大厅',
      saveLoad: '存档',
      settings: '设置',
      collapse: '折叠菜单'
    },

    // 应用
    app: {
      title: '西方魔幻文字游戏'
    },

    // 角色界面
    character: {
      title: '角色信息',
      avatar: '角色形象',
      adventurer: '冒险者',
      level: '等级',
      attributes: '属性',
      health: '生命',
      mana: '魔法',
      strength: '力量',
      agility: '敏捷',
      intelligence: '智力',
      vitality: '体力',
      magicAttack: '魔法攻击',
      magicDefense: '魔法防御',
      equipment: '装备',
      helmet: '头盔',
      amulet: '项链',
      armor: '护甲',
      ring: '戒指',
      weapon: '武器',
      shield: '盾牌',
      gloves: '手套',
      boots: '靴子',
      empty: '空',
      battleAttributes: '战斗属性',
      attack: '攻击力',
      defense: '防御力',
      experience: '经验值',
      gold: '金币',
      diamonds: '钻石',
      skillPoints: '技能点',
      citiesReputation: '城市声望',
      activeQuests: '进行中任务',
      completedQuests: '已完成任务',
      alchemyExp: '炼金经验',
      inventorySlots: '背包空间',
      currentLocation: '当前位置',
      reputationProgress: '声望与进度'
    },

    // 背包界面
    inventory: {
      title: '背包',
      items: '物品',
      materials: '材料',
      equipment: '装备',
      consumables: '消耗品'
    },

    // 战斗界面
    battle: {
      title: '战斗界面',
      selectMonster: '选择怪物',
      battleControls: '战斗控制',
      battleStatus: '战斗状态',
      battleLog: '战斗日志',
      attack: '攻击',
      useSkill: '使用技能',
      useItem: '使用物品',
      escape: '逃跑',
      autoBattle: '自动战斗',
      resetBattle: '重置战斗'
    },

    // 商城界面
    shop: {
      title: '商城系统',
      generalShop: '普通商城',
      premiumShop: '高级商城', 
      exchangeShop: '兑换商城',
      purchase: '购买',
      confirmPurchase: '确认购买',
      notEnoughCurrency: '货币不足'
    },

    // 设置界面
    settings: {
      title: '设置',
      language: '语言',
      sound: '音效',
      music: '音乐',
      graphics: '画面'
    },

    // 职业名称
    classes: {
      warrior: '战士',
      mage: '法师',
      priest: '牧师',
      hunter: '猎人',
      assassin: '刺客'
    },

    // 技能界面
    skills: {
      title: '技能系统',
      availableSkills: '可学技能',
      learnedSkills: '已学技能',
      skillInfo: '技能信息',
      skillPoints: '技能点',
      totalSkills: '总技能数',
      class: '职业',
      level: '等级',
      learn: '学习',
      learned: '已学',
      upgrade: '升级',
      use: '使用',
      cooldown: '冷却',
      manaCost: '魔法消耗',
      requirements: {
        level: '需要等级{level}',
        skillPoints: '技能点不足',
        class: '需要{class}职业'
      }
    }
  },

  en: {
    // Common
    common: {
      gold: 'Gold',
      diamonds: 'Diamonds',
      points: 'Points',
      level: 'Level',
      health: 'Health',
      mana: 'Mana',
      attack: 'Attack',
      defense: 'Defense',
      confirm: 'Confirm',
      cancel: 'Cancel',
      buy: 'Buy',
      sell: 'Sell',
      use: 'Use',
      equip: 'Equip',
      unequip: 'Unequip'
    },

    // Navigation
    navigation: {
      character: 'Character',
      inventory: 'Inventory',
      mercenary: 'Mercenary',
      map: 'Map',
      battle: 'Battle',
      shop: 'Shop',
      gameplay: 'Gameplay',
      settings: 'Settings'
    },

    // Menu
    menu: {
      character: 'Character',
      inventory: 'Inventory',
      mercenary: 'Mercenary',
      map: 'Map',
      battle: 'Battle Info',
      skills: 'Skills',
      shop: 'Shop',
      gameplay: 'Gameplay',
      quests: 'Adventurer Hall',
      saveLoad: 'Save/Load',
      settings: 'Settings',
      collapse: 'Collapse Menu'
    },

    // App
    app: {
      title: 'Fantasy RPG Text Game'
    },

    // Character
    character: {
      title: 'Character Info',
      avatar: 'Character Avatar',
      adventurer: 'Adventurer',
      level: 'Level',
      attributes: 'Attributes',
      health: 'Health',
      mana: 'Mana',
      strength: 'Strength',
      agility: 'Agility',
      intelligence: 'Intelligence',
      vitality: 'Vitality',
      magicAttack: 'Magic Attack',
      magicDefense: 'Magic Defense',
      equipment: 'Equipment',
      helmet: 'Helmet',
      amulet: 'Amulet',
      armor: 'Armor',
      ring: 'Ring',
      weapon: 'Weapon',
      shield: 'Shield',
      gloves: 'Gloves',
      boots: 'Boots',
      empty: 'Empty',
      battleAttributes: 'Battle Attributes',
      attack: 'Attack',
      defense: 'Defense',
      experience: 'Experience',
      gold: 'Gold',
      diamonds: 'Diamonds',
      skillPoints: 'Skill Points',
      citiesReputation: 'Cities Reputation',
      activeQuests: 'Active Quests',
      completedQuests: 'Completed Quests',
      alchemyExp: 'Alchemy Experience',
      inventorySlots: 'Inventory Slots',
      currentLocation: 'Current Location',
      reputationProgress: 'Reputation & Progress'
    },

    // Inventory
    inventory: {
      title: 'Inventory',
      items: 'Items',
      materials: 'Materials',
      equipment: 'Equipment',
      consumables: 'Consumables'
    },

    // Battle
    battle: {
      title: 'Battle Interface',
      selectMonster: 'Select Monster',
      battleControls: 'Battle Controls',
      battleStatus: 'Battle Status',
      battleLog: 'Battle Log',
      attack: 'Attack',
      useSkill: 'Use Skill',
      useItem: 'Use Item',
      escape: 'Escape',
      autoBattle: 'Auto Battle',
      resetBattle: 'Reset Battle'
    },

    // Shop
    shop: {
      title: 'Shop System',
      generalShop: 'General Shop',
      premiumShop: 'Premium Shop',
      exchangeShop: 'Exchange Shop',
      purchase: 'Purchase',
      confirmPurchase: 'Confirm Purchase',
      notEnoughCurrency: 'Not enough currency'
    },

    // Settings
    settings: {
      title: 'Settings',
      language: 'Language',
      sound: 'Sound',
      music: 'Music',
      graphics: 'Graphics'
    },

    // Classes
    classes: {
      warrior: 'Warrior',
      mage: 'Mage',
      priest: 'Priest',
      hunter: 'Hunter',
      assassin: 'Assassin'
    },

    // Skills
    skills: {
      title: 'Skills System',
      availableSkills: 'Available Skills',
      learnedSkills: 'Learned Skills',
      skillInfo: 'Skill Information',
      skillPoints: 'Skill Points',
      totalSkills: 'Total Skills',
      class: 'Class',
      level: 'Level',
      learn: 'Learn',
      learned: 'Learned',
      upgrade: 'Upgrade',
      use: 'Use',
      cooldown: 'Cooldown',
      manaCost: 'Mana Cost',
      requirements: {
        level: 'Requires level {level}',
        skillPoints: 'Not enough skill points',
        class: 'Requires {class} class'
      }
    }
  }
}

// 获取当前语言
export const getCurrentLanguage = () => {
  return localStorage.getItem('language') || defaultLanguage
}

// 设置当前语言
export const setCurrentLanguage = (lang) => {
  if (languages[lang]) {
    localStorage.setItem('language', lang)
    window.location.reload()
  }
}

// 翻译函数
export const t = (key, lang = getCurrentLanguage(), params = {}) => {
  const keys = key.split('.')
  let value = messages[lang]
  
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k]
    } else {
      // 回退到默认语言
      const fallbackValue = messages[defaultLanguage]
      const fallbackResult = keys.reduce((obj, k) => obj && obj[k], fallbackValue)
      return replaceParams(fallbackResult || key, params)
    }
  }
  
  return replaceParams(value, params)
}

// 参数替换函数
const replaceParams = (str, params) => {
  if (typeof str !== 'string') return str
  return str.replace(/{(\w+)}/g, (match, key) => {
    return params[key] !== undefined ? params[key] : match
  })
}
