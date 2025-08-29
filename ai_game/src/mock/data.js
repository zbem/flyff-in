// Mock数据 - 模拟游戏数据
export const mockData = {
  // 初始玩家数据
  initialPlayer: {
    level: 1,
    experience: 0,
    gold: 1000,
    health: 100,
    maxHealth: 100,
    mana: 50,
    maxMana: 50,
    strength: 10,
    agility: 10,
    intelligence: 10,
    vitality: 10,
    equipment: {
      weapon: null,
      armor: null,
      helmet: null,
      gloves: null,
      boots: null,
      ring: null,
      amulet: null,
      shield: null
    },
    inventory: [
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
        id: 401,
        name: '治疗药水',
        type: 'consumable',
        rarity: 'common',
        effect: '恢复50点生命值',
        value: 25,
        description: '红色的治疗药水，可以恢复生命值。',
        quantity: 3
      },
      {
        id: 402,
        name: '魔法药水',
        type: 'consumable',
        rarity: 'common',
        effect: '恢复30点魔法值',
        value: 20,
        description: '蓝色的魔法药水，可以恢复魔法值。',
        quantity: 2
      }
    ],
    skills: [],
    currentMap: '卡诺萨',
    currentRegion: '人类城市'
  },

  // 怪物数据
  monsters: {
    // 雷鸣大陆怪物
    '雷鸣大陆': [
      {
        id: 1001,
        name: '野狼',
        level: 3,
        health: 50,
        maxHealth: 50,
        attack: 8,
        defense: 3,
        expReward: 30,
        goldReward: 15,
        drops: [
          { itemId: 501, chance: 0.6 }, // 狼皮
          { itemId: 401, chance: 0.3 }   // 治疗药水
        ]
      },
      {
        id: 1002,
        name: '哥布林',
        level: 5,
        health: 70,
        maxHealth: 70,
        attack: 12,
        defense: 5,
        expReward: 50,
        goldReward: 25,
        drops: [
          { itemId: 502, chance: 0.7 }, // 哥布林牙齿
          { itemId: 401, chance: 0.4 }  // 治疗药水
        ]
      },
      {
        id: 1003,
        name: '巨鼠',
        level: 2,
        health: 30,
        maxHealth: 30,
        attack: 5,
        defense: 2,
        expReward: 20,
        goldReward: 10,
        drops: [
          { itemId: 501, chance: 0.4 }, // 狼皮
          { itemId: 402, chance: 0.2 }  // 魔法药水
        ]
      }
    ],

    // 隐雾沼泽怪物
    '隐雾沼泽': [
      {
        id: 2001,
        name: '沼泽巨鳄',
        level: 12,
        health: 120,
        maxHealth: 120,
        attack: 25,
        defense: 15,
        expReward: 120,
        goldReward: 60,
        drops: [
          { itemId: 503, chance: 0.3 }, // 魔法水晶
          { itemId: 403, chance: 0.5 }  // 强力治疗药水
        ]
      },
      {
        id: 2002,
        name: '毒蜘蛛',
        level: 10,
        health: 90,
        maxHealth: 90,
        attack: 20,
        defense: 8,
        expReward: 100,
        goldReward: 50,
        drops: [
          { itemId: 502, chance: 0.8 }, // 哥布林牙齿
          { itemId: 401, chance: 0.6 }  // 治疗药水
        ]
      }
    ]
  },

  // NPC数据
  npcs: {
    '卡诺萨': [
      {
        id: 3001,
        name: '武器商人',
        type: 'merchant',
        items: [101, 102, 103], // 出售的武器ID
        dialogue: '欢迎来到我的武器店！需要什么武器吗？'
      },
      {
        id: 3002,
        name: '防具商人',
        type: 'merchant',
        items: [201, 202, 203], // 出售的防具ID
        dialogue: '看看这些优质的护甲，能保护你在冒险中安全！'
      },
      {
        id: 3003,
        name: '药剂师',
        type: 'merchant',
        items: [401, 402, 403], // 出售的药水ID
        dialogue: '需要药水吗？我这里各种药水都有！'
      }
    ],
    '树心城': [
      {
        id: 3004,
        name: '精灵长老',
        type: 'quest',
        dialogue: '年轻的冒险者，森林需要你的帮助...'
      },
      {
        id: 3005,
        name: '魔法导师',
        type: 'trainer',
        dialogue: '想要学习魔法吗？我可以教你一些基础法术。'
      }
    ]
  },

  // 任务数据
  quests: [
    {
      id: 4001,
      name: '清理野狼',
      description: '消灭5只野狼，它们威胁着村庄的安全。',
      requiredLevel: 1,
      rewardExp: 100,
      rewardGold: 50,
      objectives: [
        { type: 'kill', target: '野狼', count: 5 }
      ],
      requiredItems: [],
      startNpc: 3001,
      completeNpc: 3001
    },
    {
      id: 4002,
      name: '收集狼皮',
      description: '收集10张狼皮，用于制作护甲。',
      requiredLevel: 2,
      rewardExp: 150,
      rewardGold: 80,
      objectives: [
        { type: 'collect', target: '狼皮', count: 10 }
      ],
      requiredItems: [501],
      startNpc: 3002,
      completeNpc: 3002
    }
  ],

  // 商店物品价格系数
  shopMultipliers: {
    buy: 1.2,   // 购买价格是原价的1.2倍
    sell: 0.6    // 出售价格是原价的0.6倍
  }
}

export default mockData