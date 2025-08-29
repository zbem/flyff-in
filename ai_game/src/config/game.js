// 游戏配置数据
export const gameConfig = {
  // 游戏基础设置
  version: '1.0.0',
  gameName: '西方魔幻文字游戏',
  
  // 角色初始属性
  initialStats: {
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
    vitality: 10
  },
  
  // 属性成长系数
  statGrowth: {
    healthPerLevel: 20,
    manaPerLevel: 10,
    strengthPerPoint: 2,    // 每点力量增加2点攻击
    agilityPerPoint: 1,     // 每点敏捷增加1点闪避
    intelligencePerPoint: 2, // 每点智力增加2点魔法攻击
    vitalityPerPoint: 1.5    // 每点体力增加1.5点防御
  },
  
  // 经验值需求曲线
  experienceCurve: (level) => level * 100,
  
  // 装备品质加成
  rarityMultipliers: {
    common: 1.0,
    uncommon: 1.2,
    rare: 1.5,
    epic: 2.0,
    legendary: 3.0,
    mythic: 5.0
  },
  
  // 战斗设置
  battle: {
    baseHitChance: 0.8,      // 基础命中率
    criticalChance: 0.1,     // 暴击几率
    criticalMultiplier: 1.5, // 暴击倍率
    fleeChance: 0.3,         // 逃跑成功率
    turnTime: 1000           // 每回合时间(ms)
  },
  
  // 掉落率设置
  dropRates: {
    common: 0.7,    // 普通物品掉落率
    uncommon: 0.2,  // 优秀物品掉落率
    rare: 0.08,     // 稀有物品掉落率
    epic: 0.015,    // 史诗物品掉落率
    legendary: 0.004, // 传说物品掉落率
    mythic: 0.001   // 神话物品掉落率
  },
  
  // 地图区域等级范围
  regionLevels: {
    '卡诺萨': { min: 1, max: 1 },
    '雷鸣大陆': { min: 1, max: 10 },
    '树心城': { min: 10, max: 20 },
    '隐雾沼泽': { min: 15, max: 25 },
    '双心湖': { min: 8, max: 15 },
    '沙城': { min: 20, max: 30 },
    '砺风戈壁': { min: 25, max: 35 },
    '生命之源': { min: 30, max: 40 },
    '雪狼冰原': { min: 35, max: 45 },
    '迷梦沼泽': { min: 40, max: 50 },
    '亚维特岛': { min: 45, max: 55 },
    '自然女神之怒': { min: 50, max: 60 },
    '失落之地': { min: 55, max: 65 },
    '冰封走廊': { min: 60, max: 70 }
  },
  
  // 职业配置
  classes: {
    warrior: {
      name: '战士',
      baseStats: {
        strength: 15,
        agility: 8,
        intelligence: 5,
        vitality: 12
      },
      statGrowth: {
        strength: 3,
        agility: 1,
        intelligence: 0.5,
        vitality: 2
      }
    },
    mage: {
      name: '法师',
      baseStats: {
        strength: 5,
        agility: 8,
        intelligence: 15,
        vitality: 8
      },
      statGrowth: {
        strength: 0.5,
        agility: 1,
        intelligence: 3,
        vitality: 1
      }
    },
    priest: {
      name: '牧师',
      baseStats: {
        strength: 8,
        agility: 8,
        intelligence: 12,
        vitality: 10
      },
      statGrowth: {
        strength: 1,
        agility: 1,
        intelligence: 2,
        vitality: 1.5
      }
    },
    hunter: {
      name: '猎人',
      baseStats: {
        strength: 10,
        agility: 15,
        intelligence: 8,
        vitality: 8
      },
      statGrowth: {
        strength: 1.5,
        agility: 3,
        intelligence: 0.5,
        vitality: 1
      }
    },
    assassin: {
      name: '刺客',
      baseStats: {
        strength: 12,
        agility: 15,
        intelligence: 8,
        vitality: 8
      },
      statGrowth: {
        strength: 2,
        agility: 3,
        intelligence: 0.5,
        vitality: 1
      }
    }
  },
  
  // 技能配置
  skills: {
    // 战士技能
    powerStrike: {
      name: '强力打击',
      type: 'physical',
      cost: 10,
      damage: 1.5,
      cooldown: 2,
      description: '强力的物理攻击，造成150%伤害'
    },
    
    // 法师技能
    fireball: {
      name: '火球术',
      type: 'magic',
      cost: 15,
      damage: 2.0,
      cooldown: 3,
      description: '发射火球，造成200%魔法伤害'
    },
    
    // 牧师技能
    heal: {
      name: '治疗术',
      type: 'heal',
      cost: 20,
      amount: 50,
      cooldown: 4,
      description: '恢复目标50点生命值'
    },
    
    // 猎人技能
    rapidShot: {
      name: '快速射击',
      type: 'physical',
      cost: 12,
      damage: 1.2,
      hits: 2,
      cooldown: 2,
      description: '快速射击两次，每次造成120%伤害'
    },
    
    // 刺客技能
    poisonStrike: {
      name: '毒刃',
      type: 'magic',
      cost: 18,
      damage: 1.0,
      dot: 0.3,
      duration: 3,
      cooldown: 3,
      description: '造成100%伤害并使目标中毒，每回合受到30%额外伤害'
    }
  }
}

export default gameConfig