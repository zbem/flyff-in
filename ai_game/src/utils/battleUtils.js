// 战斗工具函数
import { getSkillsByClass } from '../config/skills'

// 计算伤害
export function calculateDamage(attack, defense, isCritical = false, isMagic = false) {
  // 基础伤害计算
  let baseDamage = Math.max(1, attack - defense)
  
  // 暴击伤害
  if (isCritical) {
    baseDamage = Math.floor(baseDamage * 1.5)
  }
  
  // 魔法伤害有额外波动
  if (isMagic) {
    const variance = baseDamage * 0.3
    baseDamage += Math.random() * variance - variance / 2
  } else {
    const variance = baseDamage * 0.2
    baseDamage += Math.random() * variance - variance / 2
  }
  
  return Math.max(1, Math.round(baseDamage))
}

// 检查是否暴击
export function checkCriticalHit(critChance) {
  return Math.random() <= critChance
}

// 检查是否命中
export function checkHit(accuracy, evasion) {
  const hitChance = Math.min(0.95, Math.max(0.05, 0.8 + (accuracy - evasion) * 0.01))
  return Math.random() <= hitChance
}

// 计算技能伤害
export function calculateSkillDamage(skill, player, target, skillLevel = 1) {
  const basePower = skill.power || 100
  const levelBonus = (skillLevel - 1) * (skill.powerGrowth || 20)
  const totalPower = basePower + levelBonus
  
  let damage = 0
  
  switch (skill.type) {
    case 'attack':
      damage = calculateDamage(
        player.totalAttack * (totalPower / 100),
        target.defense,
        checkCriticalHit(player.critChance || 0.05)
      )
      break
      
    case 'magic':
      damage = calculateDamage(
        player.magicAttack * (totalPower / 100),
        target.magicDefense,
        checkCriticalHit(player.critChance || 0.05),
        true
      )
      break
      
    case 'heal':
      damage = Math.round(player.totalAttack * (totalPower / 100))
      break
      
    case 'buff':
    case 'debuff':
      damage = Math.round(totalPower / 10)
      break
  }
  
  return damage
}

// 应用技能效果
export function applySkillEffect(skill, player, target, skillLevel = 1) {
  const effect = {
    damage: 0,
    heal: 0,
    buffs: [],
    debuffs: []
  }
  
  const power = calculateSkillDamage(skill, player, target, skillLevel)
  
  switch (skill.type) {
    case 'attack':
    case 'magic':
      effect.damage = power
      break
      
    case 'heal':
      effect.heal = power
      break
      
    case 'buff':
      effect.buffs.push({
        type: skill.buffType || 'attack',
        amount: power,
        duration: skill.duration || 3
      })
      break
      
    case 'debuff':
      effect.debuffs.push({
        type: skill.debuffType || 'defense',
        amount: power,
        duration: skill.duration || 3
      })
      break
  }
  
  return effect
}

// 处理战斗回合
export async function processBattleTurn(player, monster, action) {
  const results = []
  
  // 玩家行动
  if (action.type === 'attack') {
    const damage = calculateDamage(player.totalAttack, monster.defense)
    monster.health = Math.max(0, monster.health - damage)
    results.push({
      type: 'player_attack',
      damage,
      message: `你对${monster.name}造成了${damage}点伤害！`
    })
  }
  else if (action.type === 'skill') {
    const skill = getSkillsByClass(player.class).find(s => s.id === action.skillId)
    if (skill) {
      const skillLevel = player.skills.find(s => s.id === action.skillId)?.level || 1
      const effect = applySkillEffect(skill, player, monster, skillLevel)
      
      if (effect.damage > 0) {
        monster.health = Math.max(0, monster.health - effect.damage)
        results.push({
          type: 'player_skill',
          damage: effect.damage,
          skill: skill.name,
          message: `你的${skill.name}对${monster.name}造成了${effect.damage}点伤害！`
        })
      }
      
      if (effect.heal > 0) {
        player.health = Math.min(player.maxHealth, player.health + effect.heal)
        results.push({
          type: 'player_heal',
          heal: effect.heal,
          skill: skill.name,
          message: `你的${skill.name}恢复了${effect.heal}点生命值！`
        })
      }
    }
  }
  
  // 检查怪物是否被击败
  if (monster.health <= 0) {
    results.push({
      type: 'monster_defeated',
      message: `你击败了${monster.name}！`
    })
    return results
  }
  
  // 怪物反击
  const monsterDamage = calculateDamage(monster.attack, player.totalDefense)
  player.health = Math.max(0, player.health - monsterDamage)
  results.push({
    type: 'monster_attack',
    damage: monsterDamage,
    message: `${monster.name}对你造成了${monsterDamage}点伤害！`
  })
  
  // 检查玩家是否被击败
  if (player.health <= 0) {
    results.push({
      type: 'player_defeated',
      message: '你被击败了！'
    })
  }
  
  return results
}

// 计算战斗奖励
export function calculateBattleRewards(player, monster) {
  const baseExp = monster.exp || monster.level * 10
  const baseGold = monster.gold || monster.level * 5
  
  // 等级差修正
  const levelDiff = player.level - monster.level
  let expMultiplier = 1
  let goldMultiplier = 1
  
  if (levelDiff > 5) {
    expMultiplier = 0.5
    goldMultiplier = 0.5
  } else if (levelDiff < -5) {
    expMultiplier = 2.0
    goldMultiplier = 1.5
  } else if (levelDiff < 0) {
    expMultiplier = 1.5
    goldMultiplier = 1.2
  }
  
  const expReward = Math.round(baseExp * expMultiplier)
  const goldReward = Math.round(baseGold * goldMultiplier)
  
  return {
    exp: expReward,
    gold: goldReward,
    message: `获得${expReward}经验值和${goldReward}金币！`
  }
}

// 生成战斗日志
export function generateBattleLog(result, type = 'info') {
  return {
    message: result.message,
    type: type,
    timestamp: new Date()
  }
}

// 检查战斗状态
export function checkBattleStatus(player, monster) {
  if (player.health <= 0) {
    return 'player_defeated'
  }
  if (monster.health <= 0) {
    return 'monster_defeated'
  }
  return 'ongoing'
}

// 逃跑判定
export function attemptEscape(player, monster) {
  const escapeChance = 0.7 + (player.agility - monster.level) * 0.02
  return Math.random() <= Math.min(0.95, Math.max(0.05, escapeChance))
}

// 战斗AI（用于怪物行为）
export function getMonsterAction(monster, player) {
  const actions = ['attack']
  
  // 根据怪物类型添加特殊行为
  if (monster.magicAttack > 0 && Math.random() < 0.3) {
    actions.push('magic_attack')
  }
  
  if (monster.health < monster.maxHealth * 0.3 && Math.random() < 0.2) {
    actions.push('flee')
  }
  
  return actions[Math.floor(Math.random() * actions.length)]
}

// 战斗结果处理
export function processBattleResult(result, playerStore) {
  switch (result.type) {
    case 'monster_defeated':
      const rewards = calculateBattleRewards(playerStore, result.monster)
      playerStore.addExperience(rewards.exp)
      playerStore.addGold(rewards.gold)
      return rewards.message
      
    case 'player_defeated':
      // 玩家死亡处理
      playerStore.health = 1
      playerStore.mana = Math.floor(playerStore.maxMana * 0.1)
      return '你被击败了，生命值降为1点'
      
    default:
      return result.message
  }
}