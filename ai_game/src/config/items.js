// 物品配置数据
export const itemsConfig = {
  weapons: [
    {
      id: 101,
      name: '生锈的铁剑',
      type: 'weapon',
      equipSlot: 'weapon',
      rarity: 'common',
      attack: 8,
      durability: 50,
      description: '一把生锈的铁剑，攻击力一般。',
      value: 20
    },
    {
      id: 102,
      name: '精钢长剑',
      type: 'weapon',
      equipSlot: 'weapon',
      rarity: 'uncommon',
      attack: 15,
      durability: 80,
      description: '精钢打造的长剑，锋利耐用。',
      value: 50
    },
    {
      id: 103,
      name: '魔法法杖',
      type: '极速',
      equipSlot: 'weapon',
      rarity: 'rare',
      attack: 12,
      magicAttack: 20,
      durability: 60,
      description: '蕴含魔力的法杖，适合法师使用。',
      value: 100
    }
  ],

  armor: [
    {
      id: 201,
      name: '皮甲',
      type: 'armor',
      equipSlot: 'armor',
      rarity: 'common',
      defense: 5,
      durability: 40,
      description: '基本的皮制护甲，提供少量防御。',
      value: 30
    },
    {
      id: 202,
      name: '锁子甲',
      type: 'armor',
      equipSlot: 'armor',
      rarity: 'uncommon',
      defense: 12,
      durability: 70,
      description: '金属环编织的护甲，防御力不错。',
      value: 80
    },
    {
      id: 203,
      name: '板甲',
      type: 'armor',
      equipSlot: 'armor',
      rarity: 'rare',
      defense: 20,
      durability: 100,
      description: '厚重的金属板甲，提供优秀的防御。',
      value: 200
    }
  ],

  helmets: [
    {
      id: 301,
      name: '皮帽',
      type: 'helmet',
      equipSlot: 'helmet',
      rarity: 'common',
      defense: 2,
      durability: 30,
      description: '简单的皮制帽子。',
      value: 15
    },
    {
      id: 302,
      name: '铁头盔',
      type: 'helmet',
      equipSlot: 'helmet',
      rarity: 'uncommon',
      defense: 6,
      durability: 60,
      description: '金属打造的头盔，保护头部安全。',
      value: 40
    }
  ],

  consumables: [
    {
      id: 401,
      name: '治疗药水',
      type: 'consumable',
      rarity: 'common',
      effect: '恢复50点生命值',
      value: 25,
      description: '红色的治疗药水，可以恢复生命值。',
      quantity: 1
    },
    {
      id: 402,
      name: '魔法药水',
      type: 'consumable',
      rarity: 'common',
      effect: '恢复30点魔法值',
      value: 20,
      description: '蓝色的魔法药水，可以恢复魔法值。',
      quantity: 1
    },
    {
      id: 403,
      name: '强力治疗药水',
      type: 'consumable',
      rarity: 'uncommon',
      effect: '恢复100点生命值',
      value: 50,
      description: '强效的治疗药水，恢复更多生命值。',
      quantity: 1
    }
  ],

  materials: [
    {
      id: 501,
      name: '狼皮',
      type: 'material',
      rarity: 'common',
      value: 5,
      description: '从野狼身上获得的皮毛，可用于制作。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 502,
      name: '哥布林牙齿',
      type: 'material',
      rarity: 'common',
      value: 3,
      description: '哥布林的牙齿，有些收藏价值。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 503,
      name: '魔法水晶',
      type: 'material',
      rarity: '极速',
      value: 100,
      description: '蕴含魔力的水晶，用于附魔和炼金。',
      stackable: true,
      maxStack: 50
    },
    // 炼金材料
    {
      id: 1001,
      name: '火焰草',
      type: 'alchemy',
      rarity: 'common',
      value: 15,
      description: '生长极速火山地区的红色草药，蕴含火焰能量。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 1002,
      name: '冰霜花',
      type: 'alchemy',
      rarity: 'common',
      value: 18,
      description: '在寒冷地区生长的蓝色花朵，带有冰霜气息。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 1003,
      name: '雷电菇',
      type: 'alchemy',
      rarity: 'uncommon',
      value: 25,
      description: '在雷暴后出现的蘑菇，充满雷电能量。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 1004,
      name: '大地根',
      type: 'alchemy',
      rarity: 'common',
      value: 12,
      description: '深埋地下的植物根茎，富含大地能量。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 1005,
      name: '风之叶',
      type: 'alchemy',
      rarity: 'uncommon',
      value: 20,
      description: '在高山地区飘落的叶子，蕴含风之力量。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 1006,
      name: '圣光果',
      type: 'alchemy',
      rarity: 'rare',
      value: 35,
      description: '神圣之地生长的金色果实，充满光明能量。',
      stackable: true,
      maxStack: 50
    },
    {
      id: 1007,
      name: '暗影苔',
      type: 'alchemy',
      rarity: 'uncommon',
      value: 22,
      description: '在阴暗洞穴生长的苔藓，带有暗影气息。',
      stackable: true,
      maxStack: 99
    },
    {
      id: 1008,
      name: '龙血极速',
      type: 'alchemy',
      rarity: 'epic',
      value: 80,
      description: '巨龙血液凝结而成的红色晶体，蕴含强大能量。',
      stackable: true,
      maxStack: 20
    },
    {
      id: 1009,
      name: '月华露',
      type: 'alchemy',
      rarity: 'rare',
      value: 45,
      description: '在满月之夜收集的露水，蕴含月之精华。',
      stackable: true,
      maxStack: 50
    },
    {
      id: 1010,
      name: '太阳石',
      type: 'alchemy',
      rarity: 'rare',
      value: 40,
      description: '吸收阳光能量的金色石头，温暖而强大。',
      stackable: true,
      maxStack: 50
    },
    // 炼金产物
    {
      id: 3001,
      name: '初级治疗药水',
      type: 'potion',
      rarity: 'common',
      value: 30,
      description: '恢复50点生命值。',
      quantity: 1
    },
    {
      id: 3002,
      name: '魔法恢复药水',
      type: 'potion',
      rarity: 'uncommon',
      value: 40,
      description: '恢复40点魔法值。',
      quantity: 1
    },
    {
      id: 3003,
      name: '力量药剂',
      type: 'potion',
      rarity: 'uncommon',
      value: 60,
      description: '30分钟内提升15点攻击力。',
      quantity: 1
    },
    {
      id: 3004,
      name: '防御药剂',
      type: 'potion',
      rarity: 'uncommon',
      value: 55,
      description: '30分钟内提升12点防御力。',
      quantity: 1
    },
    {
      id: 3005,
      name: '敏捷药剂',
      type: 'potion',
      rarity: 'uncommon',
      value: 50,
      description: '30分钟内提升10点敏捷度。',
      quantity: 1
    },
    {
      id: 3006,
      name: '高级治疗药水',
      type: 'potion',
      rarity: 'rare',
      value: 80,
      description: '恢复150点生命值。',
      quantity: 1
    },
    {
      id: 3007,
      name: '致命毒药',
      type: 'poison',
      rarity: 'rare',
      value: 70,
      description: '3分钟内武器攻击附带20点毒伤害。',
      quantity: 1
    },
    {
      id: 3008,
      name: '复活药水',
      type: 'potion',
      rarity: 'epic',
      value: 150,
      description: '复活一名队友并恢复50%生命值。',
      quantity: 1
    },
    {
      id: 3009,
      name: '全能药剂',
      type: 'potion',
      rarity: 'legendary',
      value: 250,
      description: '10分钟内全面提升20点所有属性。',
      quantity: 1
    }
  ],

  // 获取所有物品的扁平列表
  getAllItems() {
    return [
      ...this.weapons,
      ...this.armor,
      ...this.helmets,
      ...this.consumables,
      ...this.materials
    ]
  },

  // 根据ID获取物品
  getItemById(id) {
    return this.getAllItems().find(item => item.id === id)
  },

  // 根据类型获取物品
  getItemsByType(type) {
    return this.getAllItems().filter(item => item.type === type)
  },

  // 根据稀有度获取物品
  getItemsByRarity(rarity) {
    return this.getAllItems().filter(item => item.rarity === rarity)
  }
}

export default itemsConfig