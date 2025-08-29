// 任务系统配置
export const questsConfig = {
  // 任务类型
  types: [
    { id: 'collect', name: '收集任务', icon: 'mdi-package-variant' },
    { id: 'kill', name: '讨伐任务', icon: 'mdi-sword-cross' },
    { id: 'deliver', name: '运送任务', icon: 'mdi-truck-delivery' },
    { id: 'escort', name: '护送任务', icon: 'mdi-shield-account' },
    { id: 'explore', name: '探索任务', icon: 'mdi-map-marker' },
    { id: 'craft', name: '制作任务', icon: 'mdi-hammer-wrench' },
    { id: 'talk', name: '对话任务', icon: 'mdi-forum' }
  ],

  // 任务难度配置
  difficulties: [
    { id: 'D', name: 'D级', color: 'grey', rewardMultiplier: 1.0 },
    { id: 'C', name: 'C级', color: 'blue', rewardMultiplier: 1.5 },
    { id: 'B', name: 'B级', color: 'green', rewardMultiplier: 2.0 },
    { id: 'A', name: 'A级', color: 'purple', rewardMultiplier: 3.0 },
    { id: 'S', name: 'S级', color: 'orange', rewardMultiplier: 5.0 },
    { id: 'SS', name: 'SS级', color: 'red', rewardMultiplier: 8.0 },
    { id: 'SSS', name: 'SSS级', color: 'gold', rewardMultiplier: 15.0 }
  ],

  // 任务列表
  quests: [
    // D级任务
    {
      id: 1001,
      name: '收集野狼皮毛',
      type: 'collect',
      difficulty: 'D',
      description: '收集5张野狼皮毛，裁缝店需要这些材料制作皮甲。',
      requirements: [
        { type: 'item', target: 501, quantity: 5 } // 野狼皮毛
      ],
      rewards: {
        gold: 50,
        exp: 100,
        items: []
      },
      minLevel: 1,
      area: '雷鸣大陆',
      npc: '裁缝艾米丽'
    },
    {
      id: 1002,
      name: '讨伐巨鼠',
      type: 'kill',
      difficulty: 'D',
      description: '消灭10只巨鼠，它们正在破坏农田。',
      requirements: [
        { type: 'monster', target: 1, quantity: 10 } // 巨鼠
      ],
      rewards: {
        gold: 40,
        exp: 80,
        items: []
      },
      minLevel: 1,
      area: '卡诺萨周边',
      npc: '农夫约翰'
    },

    // C级任务
    {
      id: 1003,
      name: '运送医疗物资',
      type: 'deliver',
      difficulty: 'C',
      description: '将医疗物资运送到树心城的精灵医疗所。',
      requirements: [
        { type: 'item', target: 1001, quantity: 3 }, // 火焰草
        { type: 'item', target: 1004, quantity: 5 }  // 大地根
      ],
      rewards: {
        gold: 120,
        exp: 200,
        items: [{ id: 3001, quantity: 2 }] // 初级治疗药水
      },
      minLevel: 5,
      area: '树心城',
      npc: '药剂师莉娜'
    },
    {
      id: 1004,
      name: '讨伐哥布林小队',
      type: 'kill',
      difficulty: 'C',
      description: '消灭一队哥布林，它们正在骚扰商队。',
      requirements: [
        { type: 'monster', target: 2, quantity: 8 } // 哥布林
      ],
      rewards: {
        gold: 150,
        exp: 250,
        items: []
      },
      minLevel: 6,
      area: '隐雾沼泽',
      npc: '商队护卫队长'
    },

    // B级任务
    {
      id: 1005,
      name: '护送商队',
      type: 'escort',
      difficulty: 'B',
      description: '护送商队安全通过砺风戈壁。',
      requirements: [
        { type: 'monster', target: 5, quantity: 3 },  // 沙漠强盗
        { type: 'monster', target: 6, quantity: 2 }  // 沙虫
      ],
      rewards: {
        gold: 300,
        exp: 500,
        items: [{ id: 102, quantity: 1 }] // 精钢长剑
      },
      minLevel: 10,
      area: '砺风戈壁',
      npc: '商人哈桑'
    },
    {
      id: 1006,
      name: '探索迷梦沼泽',
      type: 'explore',
      difficulty: 'B',
      description: '探索迷梦沼泽深处并绘制地图。',
      requirements: [
        { type: 'area', target: '迷梦沼泽', quantity: 1 }
      ],
      rewards: {
        gold: 250,
        exp: 400,
        items: [{ id: 1003, quantity: 5 }] // 雷电菇
      },
      minLevel: 12,
      area: '迷梦沼泽',
      npc: '地理学家马克'
    },

    // A级任务
    {
      id: 1007,
      name: '制作治疗药水',
      type: 'craft',
      difficulty: 'A',
      description: '为军队制作20瓶高级治疗药水。',
      requirements: [
        { type: 'item', target: 3006, quantity: 20 } // 高级治疗药水
      ],
      rewards: {
        gold: 800,
        exp: 1000,
        items: [{ id: 1008, quantity: 2 }] // 龙血晶
      },
      minLevel: 15,
      area: '卡诺萨',
      npc: '军需官理查德'
    },
    {
      id: 1008,
      name: '讨伐石巨人',
      type: 'kill',
      difficulty: 'A',
      description: '消灭3只石巨人，它们阻塞了重要道路。',
      requirements: [
        { type: 'monster', target: 8, quantity: 3 } // 石巨人
      ],
      rewards: {
        gold: 1000,
        exp: 1200,
        items: [{ id: 103, quantity: 1 }] // 魔法法杖
      },
      minLevel: 18,
      area: '生命之源',
      npc: '道路工程师汤姆'
    },

    // S级任务
    {
      id: 1009,
      name: '暗影猎手的威胁',
      type: 'kill',
      difficulty: 'S',
      description: '消灭暗影猎手首领，它正在策划袭击村庄。',
      requirements: [
        { type: 'monster', target: 7, quantity: 1 } // 暗影猎手
      ],
      rewards: {
        gold: 2000,
        exp: 2500,
        items: [{ id: 201, quantity: 1 }, { id: 3006, quantity: 5 }] // 皮甲 + 高级治疗药水
      },
      minLevel: 25,
      area: '亚维特岛',
      npc: '村长艾尔莎'
    },
    {
      id: 1010,
      name: '火山探险',
      type: 'explore',
      difficulty: 'S',
      description: '探索自然女神之怒火山内部，收集岩浆样本。',
      requirements: [
        { type: 'item', target: 503, quantity: 10 }, // 魔法水晶
        { type: 'area', target: '自然女神之怒', quantity: 1 }
      ],
      rewards: {
        gold: 1800,
        exp: 2200,
        items: [{ id: 1008, quantity: 3 }] // 龙血晶
      },
      minLevel: 28,
      area: '自然女神之怒',
      npc: '火山学家博士'
    },
    // SS级任务
    {
      id: 1011,
      name: '巨龙讨伐',
      type: 'kill',
      difficulty: 'SS',
      description: '讨伐冰霜巨龙，它威胁着整个北方地区。',
      requirements: [
        { type: 'monster', target: 9, quantity: 1 } // 冰霜巨龙
      ],
      rewards: {
        gold: 5000,
        exp: 6000,
        items: [{ id: 3009, quantity: 1 }, { id: 1008, quantity: 5 }] // 全能药剂 + 龙血晶
      },
      minLevel: 35,
      area: '雪狼冰原',
      npc: '北方领主'
    },
    {
      id: 1012,
      name: '深渊入侵',
      type: 'kill',
      difficulty: 'SS',
      description: '阻止深渊领主打开通往深渊的传送门。',
      requirements: [
        { type: 'monster', target: 10, quantity: 1 } // 深渊领主
      ],
      rewards: {
        gold: 4500,
        exp: 5500,
        items: [{ id: 3008, quantity: 2 }, { id: 1006, quantity: 10 }] // 复活药水 + 圣光果
      },
      minLevel: 38,
      area: '失落之地',
      npc: '大法师安东尼'
    },

    // SSS级任务
    {
      id: 1013,
      name: '时空守护者',
      type: 'kill',
      difficulty: 'SSS',
      description: '挑战时光守护者，维护时间线的稳定。',
      requirements: [
        { type: 'monster', target: 11, quantity: 1 } // 时光守护者
      ],
      rewards: {
        gold: 10000,
        exp: 12000,
        items: [
          { id: 3009, quantity: 3 }, // 全能药剂
          { id: 1008, quantity: 10 }, // 龙血晶
          { id: 103, quantity: 1 }    // 魔法法杖
        ]
      },
      minLevel: 45,
      area: '冰封走廊',
      npc: '时间法师克罗诺斯'
    },
    {
      id: 1014,
      name: '神之试炼',
      type: 'composite',
      difficulty: 'SSS',
      description: '完成诸神设下的终极试炼，证明你的实力。',
      requirements: [
        { type: 'monster', target: 9, quantity: 1 },  // 冰霜巨龙
        { type: 'monster', target: 10, quantity: 1 }, // 深渊领主
        { type: 'monster', target: 11, quantity: 1 }, // 时光守护者
        { type: 'item', target: 3006, quantity: 20 }, // 高级治疗药水
        { type: 'item', target: 3009, quantity: 5 }   // 全能药剂
      ],
      rewards: {
        gold: 15000,
        exp: 20000,
        items: [
          { id: 1008, quantity: 20 }, // 龙血晶
          { id: 1006, quantity: 15 }, // 圣光果
          { id: 1009, quantity: 15 }, // 月华露
          { id: 1010, quantity: 15 }  // 太阳石
        ]
      },
      minLevel: 50,
      area: '天界阶梯',
      npc: '神使雅典娜'
    }
  ]
}

// 获取所有任务
export function getAllQuests() {
  return questsConfig.quests
}

// 根据难度获取任务
export function getQuestsByDifficulty(difficulty) {
  return questsConfig.quests.filter(quest => quest.difficulty === difficulty)
}

// 根据类型获取任务
export function getQuestsByType(type) {
  return questsConfig.quests.filter(quest => quest.type === type)
}

// 根据玩家等级获取可接受的任务
export function getAvailableQuests(playerLevel) {
  return questsConfig.quests.filter(quest => quest.minLevel <= playerLevel)
}

// 获取任务类型信息
export function getQuestTypeInfo(typeId) {
  return questsConfig.types.find(type => type.id === typeId)
}

// 获取难度信息
export function getDifficultyInfo(difficultyId) {
  return questsConfig.difficulties.find(diff => diff.id === difficultyId)
}

// 检查任务是否完成
export function isQuestComplete(playerProgress, quest) {
  return quest.requirements.every(requirement => {
    switch (requirement.type) {
      case 'item':
        const itemCount = playerProgress.questProgress?.collectedItems[requirement.target] || 0
        return itemCount >= requirement.quantity
      
      case 'monster':
        const killCount = playerProgress.questProgress?.monsterKills?.[requirement.target] || 0
        return killCount >= requirement.quantity
      
      case 'area':
        return playerProgress.visitedAreas.includes(requirement.target)
      
      default:
        return false
    }
  })
}

// 获取任务进度
export function getQuestProgress(playerProgress, quest) {
  return quest.requirements.map(requirement => {
    let current = 0
    let target = requirement.quantity
    
    switch (requirement.type) {
      case 'item':
        current = playerProgress.questProgress?.collectedItems[requirement.target] || 0
        break
      
      case 'monster':
        current = playerProgress.questProgress?.monsterKills?.[requirement.target] || 0
        break
      
      case 'area':
        current = playerProgress.questProgress?.visitedAreas?.includes(requirement.target) ? 1 : 0
        target = 1
        break
      
      default:
        current = 0
    }
    
    return {
      type: requirement.type,
      target: requirement.target,
      current,
      target,
      completed: current >= target
    }
  })
}

// 领取任务奖励
export function claimQuestRewards(player, quest) {
  const difficulty = getDifficultyInfo(quest.difficulty)
  const multiplier = difficulty ? difficulty.rewardMultiplier : 1
  
  // 奖励金币和经验
  player.gold += Math.floor(quest.rewards.gold * multiplier)
  player.experience += Math.floor(quest.rewards.exp * multiplier)
  
  // 奖励物品
  quest.rewards.items.forEach(rewardItem => {
    const existingItem = player.inventory.find(item => item.id === rewardItem.id)
    if (existingItem) {
      existingItem.quantity += rewardItem.quantity
    } else {
      player.inventory.push({
        id: rewardItem.id,
        quantity: rewardItem.quantity
      })
    }
  })
  
  return {
    gold: Math.floor(quest.rewards.gold * multiplier),
    exp: Math.floor(quest.rewards.exp * multiplier),
    items: quest.rewards.items
  }
}