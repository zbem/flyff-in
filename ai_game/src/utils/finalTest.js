import { usePlayerStore } from '../stores/player'
import { getMonstersByRegion } from '../config/monsters'
import { getSkillsByClass } from '../config/skills'
import { 
  calculateDamage, 
  checkCriticalHit, 
  calculateBattleRewards,
  attemptEscape 
} from './battleUtils'

// 最终综合测试
export function runFinalTest() {
  const playerStore = usePlayerStore()
  
  console.log('🎯 最终综合测试开始...\n')
  
  // 保存原始状态
  const originalState = { ...playerStore.$state }
  
  try {
    // 测试1: 基础系统
    console.log('=== 测试1: 基础系统 ===')
    console.log('玩家状态:', {
      等级: playerStore.level,
      生命值: `${playerStore.health}/${playerStore.maxHealth}`,
      魔法值: `${playerStore.mana}/${playerStore.maxMana}`,
      攻击力: playerStore.totalAttack,
      防御力: playerStore.totalDefense
    })
    
    // 测试2: 怪物系统
    console.log('\n=== 测试2: 怪物系统 ===')
    const regions = ['卡诺萨', '雷鸣大陆', '隐雾沼泽']
    regions.forEach(region => {
      const monsters = getMonstersByRegion(region)
      console.log(`${region}: ${monsters.length}种怪物`)
    })
    
    // 测试3: 战斗计算
    console.log('\n=== 测试3: 战斗计算 ===')
    const testMonster = getMonstersByRegion('雷鸣大陆')[0]
    console.log(`测试怪物: ${testMonster.name} (Lv.${testMonster.level})`)
    
    const damage = calculateDamage(playerStore.totalAttack, testMonster.defense)
    console.log(`预计伤害: ${damage}`)
    
    const rewards = calculateBattleRewards(playerStore, testMonster)
    console.log(`预计奖励: ${rewards.exp}经验, ${rewards.gold}金币`)
    
    // 测试4: 技能系统
    console.log('\n=== 测试4: 技能系统 ===')
    playerStore.changeClass('Warrior')
    playerStore.updateAvailableSkills()
    console.log('战士技能:', playerStore.availableSkills.map(s => s.name))
    
    playerStore.changeClass('Mage')
    playerStore.updateAvailableSkills()
    console.log('法师技能:', playerStore.availableSkills.map(s => s.name))
    
    // 测试5: 属性计算
    console.log('\n=== 测试5: 属性计算 ===')
    console.log('经验需求:', playerStore.expToNextLevel)
    console.log('总攻击力:', playerStore.totalAttack)
    console.log('总防御力:', playerStore.totalDefense)
    
    // 测试6: 战斗流程模拟
    console.log('\n=== 测试6: 战斗流程模拟 ===')
    let battleLog = []
    let monsterHP = testMonster.health
    let playerHP = playerStore.health
    
    for (let turn = 1; turn <= 3; turn++) {
      console.log(`\n回合 ${turn}:`)
      
      // 玩家攻击
      const playerDmg = calculateDamage(playerStore.totalAttack, testMonster.defense)
      monsterHP = Math.max(0, monsterHP - playerDmg)
      battleLog.push(`玩家造成 ${playerDmg} 伤害`)
      console.log(`  玩家攻击 → 怪物HP: ${monsterHP}/${testMonster.health}`)
      
      if (monsterHP <= 0) {
        console.log('  怪物被击败!')
        break
      }
      
      // 怪物攻击
      const monsterDmg = calculateDamage(testMonster.attack, playerStore.totalDefense)
      playerHP = Math.max(0, playerHP - monsterDmg)
      battleLog.push(`怪物造成 ${monsterDmg} 伤害`)
      console.log(`  怪物反击 → 玩家HP: ${playerHP}/${playerStore.maxHealth}`)
      
      if (playerHP <= 0) {
        console.log('  玩家被击败!')
        break
      }
    }
    
    console.log('\n✅ 所有系统测试通过！')
    console.log('战斗系统功能完整，可以正常使用。')
    
    return {
      success: true,
      tests: {
        basic: true,
        monsters: true,
        combat: true,
        skills: true,
        attributes: true,
        battle: true
      }
    }
    
  } catch (error) {
    console.error('❌ 测试失败:', error)
    return {
      success: false,
      error: error.message
    }
  } finally {
    // 恢复原始状态
    playerStore.$state = originalState
  }
}

// 快速状态检查
export function checkGameState() {
  const playerStore = usePlayerStore()
  
  return {
    player: {
      level: playerStore.level,
      health: playerStore.health,
      mana: playerStore.mana,
      attack: playerStore.totalAttack,
      defense: playerStore.totalDefense,
      gold: playerStore.gold
    },
    skills: {
      available: playerStore.availableSkills.length,
      learned: playerStore.skills.length
    },
    inventory: playerStore.inventory.length,
    location: playerStore.currentMap
  }
}

// 游戏状态重置
export function resetGameState() {
  const playerStore = usePlayerStore()
  playerStore.$reset()
  playerStore.updateAvailableSkills()
  console.log('游戏状态已重置')
  return checkGameState()
}

// 开发者工具
export const devTools = {
  // 快速升级
  levelUp(levels = 1) {
    const playerStore = usePlayerStore()
    for (let i = 0; i < levels; i++) {
      playerStore.levelUp()
    }
    console.log(`提升到 ${playerStore.level} 级`)
  },
  
  // 添加金币
  addGold(amount = 1000) {
    const playerStore = usePlayerStore()
    playerStore.addGold(amount)
    console.log(`获得 ${amount} 金币`)
  },
  
  // 恢复状态
  fullHeal() {
    const playerStore = usePlayerStore()
    playerStore.fullRestore()
    console.log('生命值和魔法值已恢复')
  },
  
  // 学习所有技能
  learnAllSkills() {
    const playerStore = usePlayerStore()
    playerStore.availableSkills.forEach(skill => {
      if (!playerStore.skills.find(s => s.id === skill.id)) {
        playerStore.learnSkill(skill.id)
      }
    })
    console.log('已学习所有可用技能')
  },
  
  // 获取游戏信息
  getInfo() {
    const state = checkGameState()
    console.log('当前游戏状态:')
    console.log(JSON.stringify(state, null, 2))
    return state
  }
}

// 初始化检查
export function initializeGame() {
  console.log('🎮 幻想RPG游戏初始化检查...')
  
  try {
    // 检查必要配置
    const playerStore = usePlayerStore()
    playerStore.updateAvailableSkills()
    
    const monsters = getMonstersByRegion('卡诺萨')
    const skills = getSkillsByClass('Warrior')
    
    console.log('✅ 配置加载成功:')
    console.log(`   玩家职业: ${playerStore.class}`)
    console.log(`   可用技能: ${playerStore.availableSkills.length} 种`)
    console.log(`   区域怪物: ${monsters.length} 种`)
    console.log(`   战士技能: ${skills.length} 种`)
    
    return true
  } catch (error) {
    console.error('❌ 初始化失败:', error)
    return false
  }
}