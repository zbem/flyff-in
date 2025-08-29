import { usePlayerStore } from '../stores/player'
import { getMonstersByRegion } from '../config/monsters'
import { 
  calculateDamage, 
  checkCriticalHit, 
  processBattleTurn, 
  calculateBattleRewards,
  attemptEscape 
} from './battleUtils'

// 战斗系统测试
export function testBattleSystem() {
  const playerStore = usePlayerStore()
  
  console.log('⚔️ 开始战斗系统测试...')
  
  // 保存原始状态
  const originalState = { ...playerStore.$state }
  
  try {
    // 测试1: 基础战斗计算
    console.log('\n=== 测试1: 基础战斗计算 ===')
    const damage = calculateDamage(20, 5)
    console.log('伤害计算 (攻击20 vs 防御5):', damage)
    
    const crit = checkCriticalHit(0.1)
    console.log('暴击检查 (10%几率):', crit)
    
    const escape = attemptEscape(playerStore, { level: 5 })
    console.log('逃跑判定:', escape)
    
    // 测试2: 战斗奖励计算
    console.log('\n=== 测试2: 战斗奖励计算 ===')
    const monster = getMonstersByRegion('雷鸣大陆')[0]
    const rewards = calculateBattleRewards(playerStore, monster)
    console.log('战斗奖励:', rewards)
    
    // 测试3: 完整战斗流程
    console.log('\n=== 测试3: 完整战斗流程 ===')
    const testMonster = { ...monster }
    console.log('初始怪物血量:', testMonster.health)
    
    // 模拟战斗回合
    const battleResults = []
    let battleState = 'ongoing'
    let turn = 1
    
    while (battleState === 'ongoing' && turn <= 10) {
      console.log(`\n--- 回合 ${turn} ---`)
      
      // 玩家攻击
      const playerDamage = calculateDamage(playerStore.totalAttack, testMonster.defense)
      testMonster.health = Math.max(0, testMonster.health - playerDamage)
      battleResults.push({
        turn,
        action: 'player_attack',
        damage: playerDamage,
        monsterHealth: testMonster.health
      })
      console.log(`玩家攻击: 造成${playerDamage}伤害, 怪物血量: ${testMonster.health}`)
      
      if (testMonster.health <= 0) {
        battleState = 'monster_defeated'
        console.log('怪物被击败!')
        break
      }
      
      // 怪物反击
      const monsterDamage = calculateDamage(testMonster.attack, playerStore.totalDefense)
      playerStore.health = Math.max(0, playerStore.health - monsterDamage)
      battleResults.push({
        turn,
        action: 'monster_attack',
        damage: monsterDamage,
        playerHealth: playerStore.health
      })
      console.log(`怪物反击: 造成${monsterDamage}伤害, 玩家血量: ${playerStore.health}`)
      
      if (playerStore.health <= 0) {
        battleState = 'player_defeated'
        console.log('玩家被击败!')
        break
      }
      
      turn++
    }
    
    console.log('\n战斗结果:', battleState)
    console.log('战斗统计:', battleResults)
    
    // 测试4: 技能战斗
    console.log('\n=== 测试4: 技能战斗测试 ===')
    playerStore.skillPoints = 3
    playerStore.learnSkill(1) // 学习第一个技能
    
    if (playerStore.skills.length > 0) {
      const skill = playerStore.availableSkills.find(s => s.id === playerStore.skills[0].id)
      console.log('已学技能:', skill.name)
      
      // 测试技能使用
      const canUse = playerStore.mana >= skill.manaCost
      console.log('技能可用:', canUse)
      
      if (canUse) {
        console.log('模拟技能使用...')
        // 这里可以添加更详细的技能效果测试
      }
    }
    
    console.log('\n✅ 战斗系统测试完成！')
    return true
    
  } catch (error) {
    console.error('❌ 战斗系统测试失败:', error)
    return false
  } finally {
    // 恢复原始状态
    playerStore.$state = originalState
  }
}

// 快速战斗测试
export function quickBattleTest() {
  console.clear()
  console.log('⚡ 快速战斗测试开始...')
  return testBattleSystem()
}

// 怪物数据测试
export function testMonsterData() {
  console.log('👹 怪物数据测试...')
  
  const regions = ['卡诺萨', '雷鸣大陆', '隐雾沼泽', '砺风戈壁']
  
  regions.forEach(region => {
    const monsters = getMonstersByRegion(region)
    console.log(`\n${region}区域怪物:`)
    monsters.forEach(monster => {
      console.log(`  ${monster.name} (Lv.${monster.level}) - HP:${monster.health} ATK:${monster.attack}`)
    })
  })
  
  return true
}

// 综合战斗演示
export function battleDemo() {
  console.clear()
  console.log('🎬 战斗演示开始...\n')
  
  const playerStore = usePlayerStore()
  const originalState = { ...playerStore.$state }
  
  try {
    // 设置演示状态
    playerStore.level = 10
    playerStore.health = 100
    playerStore.maxHealth = 100
    playerStore.attack = 25
    playerStore.defense = 15
    playerStore.skillPoints = 2
    
    // 选择怪物
    const monster = getMonstersByRegion('雷鸣大陆')[1] // 哥布林
    console.log(`玩家: Lv.${playerStore.level} ${playerStore.name}`)
    console.log(`怪物: ${monster.name} (Lv.${monster.level})`)
    console.log('--- 战斗开始 ---\n')
    
    let monsterHealth = monster.health
    let playerHealth = playerStore.health
    let turn = 1
    
    while (monsterHealth > 0 && playerHealth > 0 && turn <= 5) {
      console.log(`回合 ${turn}:`)
      
      // 玩家攻击
      const playerDamage = calculateDamage(playerStore.totalAttack, monster.defense)
      monsterHealth = Math.max(0, monsterHealth - playerDamage)
      console.log(`  💥 玩家攻击: 造成${playerDamage}伤害`)
      console.log(`     怪物血量: ${monsterHealth}/${monster.health}`)
      
      if (monsterHealth <= 0) {
        console.log('\n🎉 玩家获胜！')
        const rewards = calculateBattleRewards(playerStore, monster)
        console.log(`获得奖励: ${rewards.exp}经验, ${rewards.gold}金币`)
        break
      }
      
      // 怪物攻击
      const monsterDamage = calculateDamage(monster.attack, playerStore.totalDefense)
      playerHealth = Math.max(0, playerHealth - monsterDamage)
      console.log(`  👹 怪物反击: 造成${monsterDamage}伤害`)
      console.log(`     玩家血量: ${playerHealth}/${playerStore.maxHealth}`)
      
      if (playerHealth <= 0) {
        console.log('\n💀 玩家被击败！')
        break
      }
      
      console.log('')
      turn++
    }
    
    if (monsterHealth > 0 && playerHealth > 0) {
      console.log('\n⏹️ 战斗超时，双方存活')
    }
    
    return true
    
  } catch (error) {
    console.error('演示失败:', error)
    return false
  } finally {
    playerStore.$state = originalState
  }
}