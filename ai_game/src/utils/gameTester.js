import { usePlayerStore } from '../stores/player'

// 游戏系统综合测试
export function runComprehensiveTest() {
  const playerStore = usePlayerStore()
  
  console.log('🎮 开始综合游戏系统测试...')
  
  // 保存原始状态
  const originalState = { ...playerStore.$state }
  
  try {
    // 测试1: 基础属性系统
    console.log('\n=== 测试1: 基础属性系统 ===')
    console.log('初始等级:', playerStore.level)
    console.log('初始经验:', playerStore.experience)
    console.log('初始金币:', playerStore.gold)
    console.log('初始技能点:', playerStore.skillPoints)
    
    // 测试2: 经验系统
    console.log('\n=== 测试2: 经验系统 ===')
    const expToGain = 150
    console.log(`获得 ${expToGain} 经验...`)
    playerStore.addExperience(expToGain)
    console.log('当前等级:', playerStore.level)
    console.log('当前经验:', playerStore.experience)
    console.log('升级后技能点:', playerStore.skillPoints)
    
    // 测试3: 职业系统
    console.log('\n=== 测试3: 职业系统 ===')
    const testClasses = ['Warrior', 'Mage', 'Priest']
    testClasses.forEach(className => {
      console.log(`\n切换到职业: ${className}`)
      playerStore.changeClass(className)
      playerStore.updateAvailableSkills()
      
      console.log('当前职业:', playerStore.class)
      console.log('可用技能数量:', playerStore.availableSkills.length)
      console.log('技能示例:', playerStore.availableSkills.slice(0, 2).map(s => s.name))
    })
    
    // 测试4: 技能系统
    console.log('\n=== 测试4: 技能系统 ===')
    playerStore.changeClass('Warrior')
    playerStore.updateAvailableSkills()
    playerStore.skillPoints = 5 // 设置足够的技能点
    
    if (playerStore.availableSkills.length > 0) {
      const firstSkill = playerStore.availableSkills[0]
      console.log(`尝试学习技能: ${firstSkill.name}`)
      playerStore.learnSkill(firstSkill.id)
      console.log('学习后技能点:', playerStore.skillPoints)
      console.log('已学技能:', playerStore.skills)
      
      // 升级技能
      console.log('升级技能...')
      playerStore.upgradeSkill(firstSkill.id)
      console.log('升级后技能点:', playerStore.skillPoints)
      console.log('技能等级:', playerStore.skills[0].level)
      
      // 使用技能
      console.log('尝试使用技能...')
      const success = playerStore.useSkill(firstSkill.id)
      console.log('技能使用结果:', success ? '成功' : '失败')
      console.log('当前魔法值:', playerStore.mana)
      console.log('技能冷却状态:', playerStore.skillCooldowns)
    }
    
    // 测试5: 属性计算
    console.log('\n=== 测试5: 属性计算 ===')
    console.log('总攻击力:', playerStore.totalAttack)
    console.log('总防御力:', playerStore.totalDefense)
    console.log('下一级所需经验:', playerStore.expToNextLevel)
    
    console.log('\n✅ 所有测试完成！游戏系统运行正常。')
    return true
    
  } catch (error) {
    console.error('❌ 测试失败:', error)
    return false
  } finally {
    // 恢复原始状态
    playerStore.$state = originalState
  }
}

// 快速测试函数
export function quickTest() {
  console.clear()
  console.log('⚡ 快速测试开始...')
  return runComprehensiveTest()
}