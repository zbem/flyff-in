import { usePlayerStore } from '../stores/player'

// 技能系统测试工具
export function testSkillSystem() {
  const playerStore = usePlayerStore()
  
  console.log('=== 技能系统测试开始 ===')
  
  // 重置玩家状态
  playerStore.$reset()
  playerStore.level = 5
  playerStore.skillPoints = 3
  playerStore.updateAvailableSkills()
  
  console.log('初始状态:')
  console.log('等级:', playerStore.level)
  console.log('技能点:', playerStore.skillPoints)
  console.log('职业:', playerStore.class)
  console.log('可用技能:', playerStore.availableSkills.map(s => s.name))
  
  // 测试学习技能
  const availableSkill = playerStore.availableSkills[0]
  if (availableSkill) {
    console.log('\n尝试学习技能:', availableSkill.name)
    playerStore.learnSkill(availableSkill.id)
    console.log('学习后技能点:', playerStore.skillPoints)
    console.log('已学技能:', playerStore.skills)
  }
  
  // 测试升级技能
  if (playerStore.skills.length > 0) {
    console.log('\n尝试升级技能')
    playerStore.upgradeSkill(playerStore.skills[0].id)
    console.log('升级后技能点:', playerStore.skillPoints)
    console.log('技能等级:', playerStore.skills[0].level)
  }
  
  // 测试使用技能
  if (playerStore.skills.length > 0) {
    console.log('\n尝试使用技能')
    const success = playerStore.useSkill(playerStore.skills[0].id)
    console.log('技能使用结果:', success ? '成功' : '失败')
    console.log('当前魔法值:', playerStore.mana)
    console.log('技能冷却状态:', playerStore.skillCooldowns)
  }
  
  console.log('=== 技能系统测试完成 ===')
  return true
}

// 职业切换测试
export function testClassChange() {
  const playerStore = usePlayerStore()
  
  console.log('\n=== 职业切换测试开始 ===')
  
  const classes = ['Warrior', 'Mage', 'Priest', 'Hunter', 'Assassin']
  
  classes.forEach(className => {
    console.log(`\n切换到职业: ${className}`)
    playerStore.changeClass(className)
    playerStore.updateAvailableSkills()
    
    console.log('当前职业:', playerStore.class)
    console.log('可用技能数量:', playerStore.availableSkills.length)
    console.log('技能名称:', playerStore.availableSkills.map(s => s.name))
  })
  
  console.log('=== 职业切换测试完成 ===')
  return true
}