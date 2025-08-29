// 技能配置数据 - 西方魔幻主题
export const skillsConfig = {
  // 战士技能
  warrior: [
    {
      id: 'warrior_1',
      name: '狂暴打击',
      type: 'physical',
      damage: 25,
      manaCost: 15,
      cooldown: 2,
      levelRequirement: 1,
      description: '猛烈的物理攻击，造成大量伤害',
      icon: 'mdi-sword'
    },
    {
      id: 'warrior_2',
      name: '盾牌猛击',
      type: 'physical',
      damage: 15,
      manaCost: 10,
      cooldown: 1,
      levelRequirement: 3,
      description: '用盾牌猛击敌人，有一定几率眩晕',
      icon: 'mdi-shield',
      stunChance: 0.3 // 30%几率眩晕
    },
    {
      id: 'warrior_3',
      name: '旋风斩',
      type: 'physical',
      damage: 20,
      manaCost: 20,
      cooldown: 3,
      levelRequirement: 5,
      description: '旋转攻击周围所有敌人',
      icon: 'mdi-sword-cross',
      aoe: true // 群体攻击
    }
  ],

  // 法师技能
  mage: [
    {
      id: 'mage_1',
      name: '火球术',
      type: 'fire',
      damage: 30,
      manaCost: 20,
      cooldown: 2,
      levelRequirement: 1,
      description: '发射火球攻击敌人，造成火焰伤害',
      icon: 'mdi-fire',
      burnChance: 0.2 // 20%几率造成燃烧
    },
    {
      id: 'mage_2',
      name: '冰霜新星',
      type: 'ice',
      damage: 15,
      manaCost: 25,
      cooldown: 3,
      levelRequirement: 3,
      description: '释放寒冰冲击，冻结周围敌人',
      icon: 'mdi-snowflake',
      aoe: true, // 群体攻击
      freezeChance: 0.25 // 25%几率冻结
    },
    {
      id: 'mage_3',
      name: '闪电链',
      type: 'lightning',
      damage: 25,
      manaCost: 30,
      cooldown: 4,
      levelRequirement: 5,
      description: '释放连锁闪电，攻击多个目标',
      icon: 'mdi-lightning-bolt',
      aoe: true, // 群体攻击
      chainTargets: 3 // 最多攻击3个目标
    }
  ],

  // 牧师技能
  priest: [
    {
      id: 'priest_1',
      name: '治疗术',
      type: 'heal',
      heal: 20,
      manaCost: 15,
      cooldown: 2,
      levelRequirement: 1,
      description: '恢复目标生命值',
      icon: 'mdi-heart'
    },
    {
      id: 'priest_2',
      name: '神圣打击',
      type: 'holy',
      damage: 18,
      manaCost: 12,
      cooldown: 1,
      levelRequirement: 3,
      description: '神圣力量攻击敌人',
      icon: 'mdi-cross'
    },
    {
      id: 'priest_3',
      name: '复活术',
      type: 'resurrection',
      manaCost: 50,
      cooldown: 10,
      levelRequirement: 5,
      description: '复活死亡的队友',
      icon: 'mdi-lifebuoy'
    }
  ],

  // 猎人技能
  hunter: [
    {
      id: 'hunter_1',
      name: '精准射击',
      type: 'physical',
      damage: 22,
      manaCost: 12,
      cooldown: 1,
      levelRequirement: 1,
      description: '精准的远程攻击',
      icon: 'mdi-bow-arrow'
    },
    {
      id: 'hunter_2',
      name: '陷阱布置',
      type: 'trap',
      damage: 15,
      manaCost: 18,
      cooldown: 4,
      levelRequirement: 3,
      description: '设置陷阱困住敌人',
      icon: 'mdi-trap'
    },
    {
      id: 'hunter_3',
      name: '野兽召唤',
      type: 'summon',
      manaCost: 25,
      cooldown: 6,
      levelRequirement: 5,
      description: '召唤野兽协助战斗',
      icon: 'mdi-paw'
    }
  ],

  // 刺客技能
  assassin: [
    {
      id: 'assassin_1',
      name: '暗影突袭',
      type: 'physical',
      damage: 28,
      manaCost: 18,
      cooldown: 3,
      levelRequirement: 1,
      description: '从暗影中突袭敌人',
      icon: 'mdi-knife'
    },
    {
      id: 'assassin_2',
      name: '毒刃',
      type: 'poison',
      damage: 12,
      dotDamage: 5,
      dotDuration: 3,
      manaCost: 15,
      cooldown: 2,
      levelRequirement: 3,
      description: '涂毒武器攻击，造成持续伤害',
      icon: 'mdi-bottle-tonic'
    },
    {
      id: 'assassin_3',
      name: '隐身',
      type: 'stealth',
      manaCost: 20,
      cooldown: 8,
      levelRequirement: 5,
      description: '进入隐身状态',
      icon: 'mdi-eye-off'
    }
  ]
}

// 获取职业可用技能
export function getSkillsByClass(className) {
  return skillsConfig[className] || []
}

// 根据ID获取技能
export function getSkillById(skillId) {
  for (const classSkills of Object.values(skillsConfig)) {
    const skill = classSkills.find(s => s.id === skillId)
    if (skill) return skill
  }
  return null
}

// 检查技能是否可学习
export function canLearnSkill(playerLevel, skillLevelRequirement) {
  return playerLevel >= skillLevelRequirement
}