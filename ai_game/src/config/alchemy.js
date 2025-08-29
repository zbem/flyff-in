// 炼金系统配置
export const alchemyConfig = {
  // 炼金材料
  materials: [
    {
      id: 1001,
      name: '火焰草',
      type: 'herb',
      rarity: 'common',
      element: 'fire',
      description: '生长在火山地区的红色草药，蕴含火焰能量。',
      value: 15
    },
    {
      id: 1002,
      name: '冰霜花',
      type: 'herb',
      rarity: 'common',
      element: 'ice',
      description: '在寒冷地区生长的蓝色花朵，带有冰霜气息。',
      value: 18
    },
    {
      id: 1003,
      name: '雷电菇',
      type: 'mushroom',
      rarity: 'uncommon',
      element: 'lightning',
      description: '在雷暴后出现的蘑菇，充满雷电能量。',
      value: 25
    },
    {
      id: 1004,
      name: '大地根',
      type: 'root',
      rarity: 'common',
      element: 'earth',
      description: '深埋地下的植物根茎，富含大地能量。',
      value: 12
    },
    {
      id: 1005,
      name: '风之叶',
      type: 'leaf',
      rarity: 'uncommon',
      element: 'wind',
      description: '在高山地区飘落的叶子，蕴含风之力量。',
      value: 20
    },
    {
      id: 1006,
      name: '圣光果',
      type: 'fruit',
      rarity: 'rare',
      element: 'holy',
      description: '神圣之地生长的金色果实，充满光明能量。',
      value: 35
    },
    {
      id: 1007,
      name: '暗影苔',
      type: 'moss',
      rarity: 'uncommon',
      element: 'dark',
      description: '在阴暗洞穴生长的苔藓，带有暗影气息。',
      value: 22
    },
    {
      id: 1008,
      name: '龙血晶',
      type: 'crystal',
      rarity: 'epic',
      element: 'dragon',
      description: '巨龙血液凝结而成的红色晶体，蕴含强大能量。',
      value: 80
    },
    {
      id: 1009,
      name: '月华露',
      type: 'liquid',
      rarity: 'rare',
      element: 'moon',
      description: '在满月之夜收集的露水，蕴含月之精华。',
      value: 45
    },
    {
      id: 1010,
      name: '太阳石',
      type: 'stone',
      rarity: 'rare',
      element: 'sun',
      description: '吸收阳光能量的金色石头，温暖而强大。',
      value: 40
    }
  ],

  // 炼金配方
  recipes: [
    // 基础治疗药水
    {
      id: 2001,
      name: '初级治疗药水',
      type: 'potion',
      rarity: 'common',
      description: '恢复少量生命值的初级药水。',
      ingredients: [
        { id: 1001, quantity: 2 }, // 火焰草
        { id: 1004, quantity: 1 }  // 大地根
      ],
      result: {
        id: 3001,
        name: '初级治疗药水',
        quantity: 1
      },
      successRate: 0.8,
      requiredLevel: 1,
      expGain: 10
    },
    // 魔法恢复药水
    {
      id: 2002,
      name: '魔法恢复药水',
      type: 'potion',
      rarity: 'uncommon',
      description: '恢复魔法能量的蓝色药水。',
      ingredients: [
        { id: 1003, quantity: 1 }, // 雷电菇
        { id: 1005, quantity: 2 }  // 风之叶
      ],
      result: {
        id: 3002,
        name: '魔法恢复药水',
        quantity: 1
      },
      successRate: 0.7,
      requiredLevel: 5,
      expGain: 15
    },
    // 力量药剂
    {
      id: 2003,
      name: '力量药剂',
      type: 'potion',
      rarity: 'uncommon',
      description: '暂时提升攻击力的红色药剂。',
      ingredients: [
        { id: 1001, quantity: 3 }, // 火焰草
        { id: 1008, quantity: 1 }  // 龙血晶
      ],
      result: {
        id: 3003,
        name: '力量药剂',
        quantity: 1
      },
      successRate: 0.6,
      requiredLevel: 10,
      expGain: 20
    },
    // 防御药剂
    {
      id: 2004,
      name: '防御药剂',
      type: 'potion',
      rarity: 'uncommon',
      description: '暂时提升防御力的土黄色药剂。',
      ingredients: [
        { id: 1004, quantity: 3 }, // 大地根
        { id: 1010, quantity: 1 }  // 太阳石
      ],
      result: {
        id: 3004,
        name: '防御药剂',
        quantity: 1
      },
      successRate: 0.65,
      requiredLevel: 8,
      expGain: 18
    },
    // 敏捷药剂
    {
      id: 2005,
      name: '敏捷药剂',
      type: 'potion',
      rarity: 'uncommon',
      description: '暂时提升敏捷度的绿色药剂。',
      ingredients: [
        { id: 1005, quantity: 3 }, // 风之叶
        { id: 1003, quantity: 1 }  // 雷电菇
      ],
      result: {
        id: 3005,
        name: '敏捷药剂',
        quantity: 1
      },
      successRate: 0.7,
      requiredLevel: 7,
      expGain: 16
    },
    // 高级治疗药水
    {
      id: 2006,
      name: '高级治疗药水',
      type: 'potion',
      rarity: 'rare',
      description: '恢复大量生命值的高级药水。',
      ingredients: [
        { id: 1006, quantity: 1 }, // 圣光果
        { id: 1009, quantity: 2 }, // 月华露
        { id: 1001, quantity: 2 }  // 火焰草
      ],
      result: {
        id: 3006,
        name: '高级治疗药水',
        quantity: 1
      },
      successRate: 0.5,
      requiredLevel: 15,
      expGain: 30
    },
    // 毒药
    {
      id: 2007,
      name: '致命毒药',
      type: 'poison',
      rarity: 'rare',
      description: '涂抹在武器上的致命毒药。',
      ingredients: [
        { id: 1007, quantity: 2 }, // 暗影苔
        { id: 1003, quantity: 1 }, // 雷电菇
        { id: 1008, quantity: 1 }  // 龙血晶
      ],
      result: {
        id: 3007,
        name: '致命毒药',
        quantity: 1
      },
      successRate: 0.4,
      requiredLevel: 12,
      expGain: 25
    },
    // 复活药水
    {
      id: 2008,
      name: '复活药水',
      type: 'potion',
      rarity: 'epic',
      description: '能够复活队友的神圣药水。',
      ingredients: [
        { id: 1006, quantity: 3 }, // 圣光果
        { id: 1009, quantity: 2 }, // 月华露
        { id: 1010, quantity: 1 }  // 太阳石
      ],
      result: {
        id: 3008,
        name: '复活药水',
        quantity: 1
      },
      successRate: 0.3,
      requiredLevel: 20,
      expGain: 50
    },
    // 全属性药剂
    {
      id: 2009,
      name: '全能药剂',
      type: 'potion',
      rarity: 'legendary',
      description: '全面提升所有属性的神奇药剂。',
      ingredients: [
        { id: 1008, quantity: 2 }, // 龙血晶
        { id: 1006, quantity: 1 }, // 圣光果
        { id: 1009, quantity: 1 }, // 月华露
        { id: 1010, quantity: 1 }  // 太阳石
      ],
      result: {
        id: 3009,
        name: '全能药剂',
        quantity: 1
      },
      successRate: 0.2,
      requiredLevel: 25,
      expGain: 80
    }
  ],

  // 炼金产物
  products: [
    {
      id: 3001,
      name: '初级治疗药水',
      type: 'potion',
      rarity: 'common',
      effect: { health: 50 },
      description: '恢复50点生命值。',
      value: 30
    },
    {
      id: 3002,
      name: '魔法恢复药水',
      type: 'potion',
      rarity: 'uncommon',
      effect: { mana: 40 },
      description: '恢复40点魔法值。',
      value: 40
    },
    {
      id: 3003,
      name: '力量药剂',
      type: 'potion',
      rarity: 'uncommon',
      effect: { attack: 15, duration: 300 },
      description: '30分钟内提升15点攻击力。',
      value: 60
    },
    {
      id: 3004,
      name: '防御药剂',
      type: 'potion',
      rarity: 'uncommon',
      effect: { defense: 12, duration: 300 },
      description: '30分钟内提升12点防御力。',
      value: 55
    },
    {
      id: 3005,
      name: '敏捷药剂',
      type: 'potion',
      rarity: 'uncommon',
      effect: { agility: 10, duration: 300 },
      description: '30分钟内提升10点敏捷度。',
      value: 50
    },
    {
      id: 3006,
      name: '高级治疗药水',
      type: 'potion',
      rarity: 'rare',
      effect: { health: 150 },
      description: '恢复150点生命值。',
      value: 80
    },
    {
      id: 3007,
      name: '致命毒药',
      type: 'poison',
      rarity: 'rare',
      effect: { poisonDamage: 20, duration: 180 },
      description: '3分钟内武器攻击附带20点毒伤害。',
      value: 70
    },
    {
      id: 3008,
      name: '复活药水',
      type: 'potion',
      rarity: 'epic',
      effect: { revive: true },
      description: '复活一名队友并恢复50%生命值。',
      value: 150
    },
    {
      id: 3009,
      name: '全能药剂',
      type: 'potion',
      rarity: 'legendary',
      effect: { allStats: 20, duration: 600 },
      description: '10分钟内全面提升20点所有属性。',
      value: 250
    }
  ]
}

// 获取所有炼金材料
export function getAllAlchemyMaterials() {
  return alchemyConfig.materials
}

// 获取所有炼金配方
export function getAllRecipes() {
  return alchemyConfig.recipes
}

// 根据ID获取配方
export function getRecipeById(id) {
  return alchemyConfig.recipes.find(recipe => recipe.id === id)
}

// 根据玩家等级获取可学习的配方
export function getAvailableRecipes(playerLevel) {
  return alchemyConfig.recipes.filter(recipe => recipe.requiredLevel <= playerLevel)
}

// 检查玩家是否有足够的材料
export function hasEnoughMaterials(playerMaterials, recipe) {
  return recipe.ingredients.every(ingredient => {
    const playerItem = playerMaterials.find(item => item.id === ingredient.id)
    return playerItem && playerItem.quantity >= ingredient.quantity
  })
}

// 执行炼金操作
export function performAlchemy(player, recipe) {
  const success = Math.random() <= recipe.successRate
  
  if (success) {
    // 成功：获得经验和产品
    player.alchemyExp += recipe.expGain
    return {
      success: true,
      product: recipe.result,
      expGain: recipe.expGain
    }
  } else {
    // 失败：消耗材料但无产品
    return {
      success: false,
      expGain: Math.floor(recipe.expGain * 0.3) // 失败获得少量经验
    }
  }
}

// 获取炼金等级称号
export function getAlchemyTitle(exp) {
  if (exp < 100) return '炼金学徒'
  if (exp < 300) return '初级炼金师'
  if (exp < 600) return '中级炼金师'
  if (exp < 1000) return '高级炼金师'
  if (exp < 1500) return '炼金大师'
  if (exp < 2500) return '炼金宗师'
  return '炼金之神'
}