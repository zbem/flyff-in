// 怪物配置数据
export const monsters = {
  // 低等级区域怪物
  beginner: [
    {
      id: 1,
      name: '训练假人',
      level: 1,
      health: 30,
      maxHealth: 30,
      attack: 5,
      defense: 2,
      magicAttack: 0,
      magicDefense: 1,
      exp: 15,
      gold: 10,
      drops: [
        { id: 101, name: '破旧绷带', chance: 0.8 },
        { id: 102, name: '初级治疗药水', chance: 0.3 }
      ],
      type: 'humanoid',
      rarity: 'common'
    },
    {
      id: 2,
      name: '野狼',
      level: 3,
      health: 50,
      maxHealth: 50,
      attack: 8,
      defense: 3,
      magicAttack: 0,
      magicDefense: 2,
      exp: 30,
      gold: 20,
      drops: [
        { id: 103, name: '狼皮', chance: 0.6 },
        { id: 104, name: '狼牙', chance: 0.4 }
      ],
      type: 'beast',
      rarity: 'common'
    },
    {
      id: 3,
      name: '巨鼠',
      level: 2,
      health: 30,
      maxHealth: 30,
      attack: 5,
      defense: 2,
      magicAttack: 0,
      magicDefense: 1,
      exp: 20,
      gold: 15,
      drops: [
        { id: 105, name: '老鼠尾巴', chance: 0.7 },
        { id: 106, name: '奶酪', chance: 0.2 }
      ],
      type: 'beast',
      rarity: 'common'
    }
  ],

  // 中级区域怪物
  intermediate: [
    {
      id: 4,
      name: '哥布林',
      level: 5,
      health: 70,
      maxHealth: 70,
      attack: 12,
      defense: 5,
      magicAttack: 0,
      magicDefense: 3,
      exp: 50,
      gold: 35,
      drops: [
        { id: 107, name: '哥布林匕首', chance: 0.4 },
        { id: 108, name: '哥布林头盔', chance: 0.3 },
        { id: 109, name: '绿色血液', chance: 0.8 }
      ],
      type: 'humanoid',
      rarity: 'uncommon'
    },
    {
      id: 5,
      name: '毒蜘蛛',
      level: 10,
      health: 90,
      maxHealth: 90,
      attack: 20,
      defense: 8,
      magicAttack: 5,
      magicDefense: 6,
      exp: 100,
      gold: 50,
      drops: [
        { id: 110, name: '蜘蛛丝', chance: 0.7 },
        { id: 111, name: '毒囊', chance: 0.5 },
        { id: 112, name: '蜘蛛眼', chance: 0.3 }
      ],
      type: 'beast',
      rarity: 'uncommon'
    },
    {
      id: 6,
      name: '沼泽巨鳄',
      level: 12,
      health: 120,
      maxHealth: 120,
      attack: 25,
      defense: 15,
      magicAttack: 0,
      magicDefense: 8,
      exp: 120,
      gold: 60,
      drops: [
        { id: 113, name: '鳄鱼皮', chance: 0.6 },
        { id: 114, name: '锋利的牙齿', chance: 0.4 },
        { id: 115, name: '巨鳄之眼', chance: 0.2 }
      ],
      type: 'beast',
      rarity: 'rare'
    }
  ],

  // 高级区域怪物
  advanced: [
    {
      id: 7,
      name: '沙漠强盗',
      level: 20,
      health: 180,
      maxHealth: 180,
      attack: 35,
      defense: 18,
      magicAttack: 0,
      magicDefense: 12,
      exp: 200,
      gold: 100,
      drops: [
        { id: 116, name: '强盗弯刀', chance: 0.5 },
        { id: 117, name: '沙漠头巾', chance: 0.4 },
        { id: 118, name: '金币袋', chance:  0.3 }
      ],
      type: 'humanoid',
      rarity: 'rare'
    },
    {
      id: 8,
      name: '沙虫',
      level: 22,
      health: 200,
      maxHealth: 200,
      attack: 40,
      defense: 20,
      magicAttack: 10,
      magicDefense: 15,
      exp: 220,
      gold: 110,
      drops: [
        { id: 119, name: '沙虫甲壳', chance: 0.6 },
        { id: 120, name: '沙漠珍珠', chance: 0.3 },
        { id: 121, name: '地底水晶', chance: 0.2 }
      ],
      type: 'beast',
      rarity: 'epic'
    },
    {
      id: 9,
      name: '石巨人',
      level: 28,
      health: 300,
      maxHealth: 300,
      attack: 55,
      defense: 30,
      magicAttack: 15,
      magicDefense: 25,
      exp: 280,
      gold: 140,
      drops: [
        { id: 122, name: '巨人核心', chance: 0.4 },
        { id: 123, name: '石之心', chance: 0.3 },
        { id: 124, name: '古代符文', chance: 0.2 }
      ],
      type: 'elemental',
      rarity: 'epic'
    }
  ],

  // 精英怪物
  elite: [
    {
      id: 10,
      name: '水元素',
      level: 15,
      health: 150,
      maxHealth: 150,
      attack: 30,
      defense: 12,
      magicAttack: 25,
      magicDefense: 20,
      exp: 150,
      gold: 75,
      drops: [
        { id: 125, name: '水之精华', chance: 0.7 },
        { id: 126, name: '元素核心', chance: 0.4 },
        { id: 127, name: '冰晶', chance: 0.3 }
      ],
      type: 'elemental',
      rarity: 'epic'
    },
    {
      id: 11,
      name: '火焰恶魔',
      level: 25,
      health: 250,
      maxHealth: 250,
      attack: 45,
      defense: 22,
      magicAttack: 35,
      magicDefense: 28,
      exp: 250,
      gold: 125,
      drops: [
        { id: 128, name: '火焰之心', chance: 0.5 },
        { id: 129, name: '恶魔之角', chance: 0.4 },
        { id: 130, name: '熔岩核心', chance: 0.3 }
      ],
      type: 'demon',
      rarity: 'legendary'
    },
    {
      id: 12,
      name: '暗影猎手',
      level: 35,
      health: 300,
      maxHealth: 300,
      attack: 60,
      defense: 25,
      magicAttack: 20,
      magicDefense: 30,
      exp: 350,
      gold: 150,
      drops: [
        { id: 131, name: '暗影披风', chance: 0.4 },
        { id: 132, name: '夜行者的匕首', chance: 0.3 },
        { id: 133, name: '阴影精华', chance: 0.5 }
      ],
      type: 'humanoid',
      rarity: 'epic'
    },
    {
      id: 13,
      name: '雷霆巨鹰',
      level: 40,
      health: 350,
      maxHealth: 350,
      attack: 65,
      defense: 28,
      magicAttack: 40,
      magicDefense: 35,
      exp: 400,
      gold: 180,
      drops: [
        { id: 134, name: '雷霆之羽', chance: 0.6 },
        { id: 135, name: '风暴核心', chance: 0.4 },
        { id: 136, name: '鹰眼宝石', chance: 0.3 }
      ],
      type: 'beast',
      rarity: 'epic'
    },
    {
      id: 14,
      name: '冰霜巨龙',
      level: 50,
      health: 500,
      maxHealth: 500,
      attack: 80,
      defense: 40,
      magicAttack: 60,
      magicDefense: 50,
      exp: 600,
      gold: 250,
      drops: [
        { id: 137, name: '龙鳞', chance: 0.7 },
        { id: 138, name: '冰霜龙息', chance: 0.5 },
        { id: 139, name: '巨龙之心', chance: 0.3 }
      ],
      type: 'dragon',
      rarity: 'legendary'
    }
  ],

  // 传说怪物
  legendary: [
    {
      id: 15,
      name: '深渊领主',
      level: 60,
      health: 800,
      maxHealth: 800,
      attack: 100,
      defense: 60,
      magicAttack: 80,
      magicDefense: 70,
      exp: 800,
      gold: 350,
      drops: [
        { id: 140, name: '深渊之核', chance: 0.5 },
        { id: 141, name: '恶魔领主之冠', chance: 0.3 },
        { id: 142, name: '虚空碎片', chance: 0.4 }
      ],
      type: 'demon',
      rarity: 'legendary'
    },
    {
      id: 16,
      name: '时光守护者',
      level: 70,
      health: 1000,
      maxHealth: 1000,
      attack: 90,
      defense: 70,
      magicAttack: 120,
      magicDefense: 90,
      exp: 1000,
      gold: 450,
      drops: [
        { id: 143, name: '时光沙漏', chance: 0.4 },
        { id: 144, name: '永恒之沙', chance: 0.5 },
        { id: 145, name: '守护者印记', chance: 0.3 }
      ],
      type: 'celestial',
      rarity: 'mythic'
    },
    {
      id: 17,
      name: '自然女神化身',
      level: 80,
      health: 1200,
      maxHealth: 1200,
      attack: 110,
      defense: 80,
      magicAttack: 140,
      magicDefense: 110,
      exp: 1200,
      gold: 550,
      drops: [
        { id: 146, name: '生命之种', chance: 0.5 },
        { id: 147, name: '自然神杖', chance: 0.4 },
        { id: 148, name: '女神之泪', chance: 0.3 }
      ],
      type: 'celestial',
      rarity: 'mythic'
    },
    {
      id: 18,
      name: '混沌魔龙',
      level: 90,
      health: 1500,
      maxHealth: 1500,
      attack: 130,
      defense: 100,
      magicAttack: 160,
      magicDefense: 130,
      exp: 1500,
      gold: 700,
      drops: [
        { id: 149, name: '混沌龙鳞', chance: 0.6 },
        { id: 150, name: '魔龙之眼', chance: 0.4 },
        { id: 151, name: '混沌核心', chance: 0.3 }
      ],
      type: 'dragon',
      rarity: 'mythic'
    },
    {
      id: 19,
      name: '创世神使',
      level: 100,
      health: 2000,
      maxHealth: 2000,
      attack: 150,
      defense: 120,
      magicAttack: 200,
      magicDefense: 160,
      exp: 2000,
      gold: 1000,
      drops: [
        { id: 152, name: '神使之羽', chance: 0.5 },
        { id: 153, name: '创世符文', chance: 0.4 },
        { id: 154, name: '神性精华', chance: 0.3 }
      ],
      type: 'celestial',
      rarity: 'mythic'
    }
  ],

  // 新增西方魔幻怪物
  westernFantasy: [
    {
      id: 20,
      name: '圣骑士',
      level: 25,
      health: 200,
      maxHealth: 200,
      attack: 35,
      defense: 25,
      magicAttack: 15,
      magicDefense: 20,
      exp: 180,
      gold: 80,
      drops: [
        { id: 155, name: '圣骑士铠甲', chance: 0.4 },
        { id: 156, name: '神圣徽章', chance: 0.3 },
        { id: 157, name: '祝福之剑', chance: 0.2 }
      ],
      type: 'humanoid',
      rarity: 'rare'
    },
    {
      id: 21,
      name: '暗影刺客',
      level: 30,
      health: 150,
      maxHealth: 150,
      attack: 45,
      defense: 15,
      magicAttack: 10,
      magicDefense: 12,
      exp: 200,
      gold: 90,
      drops: [
        { id: 158, name: '暗影匕首', chance: 0.5 },
        { id: 159, name: '刺客面罩', chance: 0.4 },
        { id: 160, name: '毒药瓶', chance: 0.3 }
      ],
      type: 'humanoid',
      rarity: 'rare'
    },
    {
      id: 22,
      name: '森林德鲁伊',
      level: 35,
      health: 180,
      maxHealth: 180,
      attack: 25,
      defense: 18,
      magicAttack: 35,
      magicDefense: 25,
      exp: 220,
      gold: 100,
      drops: [
        { id: 161, name: '德鲁伊法杖', chance: 0.4 },
        { id: 162, name: '自然护符', chance: 0.3 },
        { id: 163, name: '治疗草药', chance: 0.5 }
      ],
      type: 'humanoid',
      rarity: 'rare'
    },
    {
      id: 23,
      name: '矮人矿工',
      level: 18,
      health: 120,
      maxHealth: 120,
      attack: 28,
      defense: 22,
      magicAttack: 5,
      magicDefense: 8,
      exp: 120,
      gold: 60,
      drops: [
        { id: 164, name: '矿工镐', chance: 0.6 },
        { id: 165, name: '铁矿石', chance: 0.7 },
        { id: 166, name: '矮人啤酒', chance: 0.4 }
      ],
      type: 'humanoid',
      rarity: 'uncommon'
    },
    {
      id: 24,
      name: '精灵弓箭手',
      level: 22,
      health: 100,
      maxHealth: 100,
      attack: 38,
      defense: 12,
      magicAttack: 8,
      magicDefense: 15,
      exp: 150,
      gold: 70,
      drops: [
        { id: 167, name: '精灵长弓', chance: 0.4 },
        { id: 168, name: '魔法箭矢', chance: 0.5 },
        { id: 169, name: '森林披风', chance: 0.3 }
      ],
      type: 'humanoid',
      rarity: 'uncommon'
    },
    {
      id: 25,
      name: '吸血鬼贵族',
      level: 45,
      health: 250,
      maxHealth: 250,
      attack: 50,
      defense: 20,
      magicAttack: 40,
      magicDefense: 30,
      exp: 280,
      gold: 120,
      drops: [
        { id: 170, name: '吸血鬼斗篷', chance: 0.4 },
        { id: 171, name: '血之宝石', chance: 0.3 },
        { id: 172, name: '永生之血', chance: 0.2 }
      ],
      type: 'undead',
      rarity: 'epic'
    },
    {
      id: 26,
      name: '狼人战士',
      level: 28,
      health: 220,
      maxHealth: 220,
      attack: 42,
      defense: 18,
      magicAttack: 5,
      magicDefense: 10,
      exp: 180,
      gold: 85,
      drops: [
        { id: 173, name: '狼人利爪', chance: 0.6 },
        { id: 174, name: '毛皮披肩', chance: 0.4 },
        { id: 175, name: '月之石', chance: 0.3 }
      ],
      type: 'beast',
      rarity: 'rare'
    },
    {
      id: 27,
      name: '巫妖',
      level: 55,
      health: 300,
      maxHealth: 300,
      attack: 40,
      defense: 25,
      magicAttack: 65,
      magicDefense: 45,
      exp: 350,
      gold: 150,
      drops: [
        { id: 176, name: '巫妖法杖', chance: 0.4 },
        { id: 177, name: '死亡之书', chance: 0.3 },
        { id: 178, name: '灵魂碎片', chance: 0.5 }
      ],
      type: 'undead',
      rarity: 'epic'
    },
    {
      id: 28,
      name: '美杜莎',
      level: 38,
      health: 200,
      maxHealth: 200,
      attack: 35,
      defense: 15,
      magicAttack: 45,
      magicDefense: 25,
      exp: 240,
      gold: 110,
      drops: [
        { id: 179, name: '美杜莎之眼', chance: 0.4 },
        { id: 180, name: '蛇发', chance: 0.5 },
        { id: 181, name: '石化护符', chance: 0.3 }
      ],
      type: 'monster',
      rarity: 'epic'
    },
    {
      id: 29,
      name: '独眼巨人',
      level: 32,
      health: 350,
      maxHealth: 350,
      attack: 55,
      defense: 25,
      magicAttack: 10,
      magicDefense: 8,
      exp: 200,
      gold: 95,
      drops: [
        { id: 182, name: '巨人木棒', chance: 0.6 },
        { id: 183, name: '独眼', chance: 0.3 },
        { id: 184, name: '巨人腰带', chance: 0.4 }
      ],
      type: 'giant',
      rarity: 'rare'
    },
    {
      id: 30,
      name: '凤凰',
      level: 65,
      health: 400,
      maxHealth: 400,
      attack: 60,
      defense: 30,
      magicAttack: 80,
      magicDefense: 60,
      exp: 450,
      gold: 180,
      drops: [
        { id: 185, name: '凤凰羽毛', chance: 0.7 },
        { id: 186, name: '火焰之心', chance: 0.5 },
        { id: 187, name: '重生之羽', chance: 0.3 }
      ],
      type: 'celestial',
      rarity: 'legendary'
    },
    {
      id: 31,
      name: '海妖',
      level: 42,
      health: 280,
      maxHealth: 280,
      attack: 38,
      defense: 20,
      magicAttack: 50,
      magicDefense: 35,
      exp: 260,
      gold: 115,
      drops: [
        { id: 188, name: '海妖之鳞', chance: 0.6 },
        { id: 189, name: '珍珠项链', chance: 0.4 },
        { id: 190, name: '魅惑之歌', chance: 0.3 }
      ],
      type: 'monster',
      rarity: 'epic'
    },
    {
      id: 32,
      name: '牛头人',
      level: 26,
      health: 240,
      maxHealth: 240,
      attack: 48,
      defense: 22,
      magicAttack: 8,
      magicDefense: 12,
      exp: 170,
      gold: 80,
      drops: [
        { id: 191, name: '巨斧', chance: 0.5 },
        { id: 192, name: '牛角', chance: 0.6 },
        { id: 193, name: '皮革护甲', chance: 0.4 }
      ],
      type: 'humanoid',
      rarity: 'rare'
    },
    {
      id: 33,
      name: '石像鬼',
      level: 34,
      health: 180,
      maxHealth: 180,
      attack: 40,
      defense: 35,
      magicAttack: 20,
      magicDefense: 30,
      exp: 210,
      gold: 100,
      drops: [
        { id: 194, name: '石像鬼之翼', chance: 0.5 },
        { id: 195, name: '石之心', chance: 0.4 },
        { id: 196, name: '守护雕像', chance: 0.3 }
      ],
      type: 'elemental',
      rarity: 'rare'
    },
    {
      id: 34,
      name: '九头蛇',
      level: 58,
      health: 500,
      maxHealth: 500,
      attack: 70,
      defense: 40,
      magicAttack: 45,
      magicDefense: 35,
      exp: 380,
      gold: 160,
      drops: [
        { id: 197, name: '九头蛇之首', chance: 0.5 },
        { id: 198, name: '剧毒之牙', chance: 0.6 },
        { id: 199, name: '再生之血', chance: 0.4 }
      ],
      type: 'monster',
      rarity: 'epic'
    },
    {
      id: 35,
      name: '天使',
      level: 75,
      health: 450,
      maxHealth: 450,
      attack: 65,
      defense: 40,
      magicAttack: 90,
      magicDefense: 70,
      exp: 500,
      gold: 200,
      drops: [
        { id: 200, name: '天使之羽', chance: 0.7 },
        { id: 201, name: '神圣光环', chance: 0.4 },
        { id: 202, name: '祝福圣水', chance: 0.5 }
      ],
      type: 'celestial',
      rarity: 'legendary'
    }
  ]
}

// 根据区域获取怪物
export function getMonstersByRegion(region) {
  const regionMonsters = {
    '卡诺萨': monsters.beginner,
    '雷鸣大陆': [...monsters.beginner, ...monsters.intermediate.slice(0, 2)],
    '隐雾沼泽': monsters.intermediate,
    '砺风戈壁': monsters.advanced,
    '树心城': monsters.intermediate,
    '双心湖': [...monsters.intermediate, ...monsters.advanced.slice(0, 1)],
    '沙城': monsters.advanced,
    '生命之源': [...monsters.advanced, ...monsters.elite.slice(0, 1)],
    '雪狼冰原': monsters.advanced,
    '迷梦沼泽': [...monsters.advanced, ...monsters.elite.slice(0, 1)],
    '亚维特岛': monsters.elite,
    '自然女神之怒': monsters.elite,
    '失落之地': monsters.elite,
    '冰封走廊': monsters.elite,
    // 新增地图的怪物分配
    '银月森林': [monsters.westernFantasy[3], monsters.westernFantasy[4], monsters.westernFantasy[1]],
    '龙之谷': [monsters.legendary[0], monsters.westernFantasy[9], monsters.westernFantasy[8]],
    '深渊回廊': [monsters.legendary[1], monsters.westernFantasy[11], monsters.westernFantasy[7]],
    '天界阶梯': [monsters.legendary[2], monsters.westernFantasy[13], monsters.westernFantasy[12]],
    '幻影迷宫': [monsters.westernFantasy[7], monsters.westernFantasy[8], monsters.westernFantasy[9]],
    '时光回廊': [monsters.legendary[1], monsters.westernFantasy[11], monsters.westernFantasy[14]]
  }

  return regionMonsters[region] || monsters.beginner
}

// 根据ID获取怪物
export function getMonsterById(id) {
  for (const category of Object.values(monsters)) {
    const monster = category.find(m => m.id === id)
    if (monster) return { ...monster }
  }
  return null
}

// 获取怪物掉落物品
export function getMonsterDrops(monsterId) {
  const monster = getMonsterById(monsterId)
  if (!monster) return []

  const drops = []
  monster.drops.forEach(drop => {
    if (Math.random() <= drop.chance) {
      drops.push({ id: drop.id, name: drop.name })
    }
  })

  // 保证至少有一个基础掉落
  if (drops.length === 0 && monster.drops.length > 0) {
    const basicDrop = monster.drops.find(d => d.chance >= 0.5)
    if (basicDrop) {
      drops.push({ id: basicDrop.id, name: basicDrop.name })
    }
  }

  return drops
}

// 怪物类型颜色
export const monsterTypeColors = {
  humanoid: '#795548',
  beast: '#8d6e63', 
  elemental: '#26a69a',
  demon: '#d32f2f',
  undead: '#616161',
  dragon: '#9c27b0',
  celestial: '#ffd600'
}

// 怪物稀有度颜色
export const monsterRarityColors = {
  common: '#9e9e9e',
  uncommon: '#4caf50',
  rare: '#2196f3',
  epic: '#9c27b0',
  legendary: '#ff9800',
  mythic: '#f44336'
}

// 从 mock/monsters.js 合并的函数
// 根据地图获取怪物 - 使用与 getMonstersByRegion 相同的逻辑以保持一致性
export function getMonstersByMap(map) {
  // 直接调用 getMonstersByRegion 函数以确保一致性
  return getMonstersByRegion(map);
}
