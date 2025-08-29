// 测试技能学习功能
const { usePlayerStore } = require('./src/stores/player')
const { skillsConfig } = require('./src/config/skills')

// 模拟玩家存储
const playerStore = {
  class: 'Warrior',
  skillPoints: 5,
  level: 6,
  skills: [],
  availableSkills: skillsConfig.warrior,
  
  learnSkill(skillId) {
    const skill = this.availableSkills.find(s => s.id === skillId)
    const skillClass = this.getSkillClass(skillId)
    
    console.log('尝试学习技能:', skillId)
    console.log('玩家职业:', this.class)
    console.log('技能职业:', skillClass)
    console.log('技能点:', this.skillPoints)
    console.log('技能等级要求:', skill?.levelRequirement)
    console.log('玩家等级:', this.level)
    
    if (skill && this.skillPoints > 0 && this.level >= skill.levelRequirement && this.class.toLowerCase() === skillClass) {
      if (!this.skills.find(s => s.id === skillId)) {
        this.skills.push({ id: skillId, level: 1 })
        this.skillPoints -= 1
        console.log('✅ 技能学习成功!')
        return true
      }
    }
    console.log('❌ 技能学习失败!')
    return false
  },
  
  getSkillClass(skillId) {
    if (skillId.startsWith('warrior_')) return 'warrior'
    if (skillId.startsWith('mage_')) return 'mage'
    if (skillId.startsWith('priest_')) return 'priest'
    if (skillId.startsWith('hunter_')) return 'hunter'
    if (skillId.startsWith('assassin_')) return 'assassin'
    return ''
  }
}

// 测试学习战士技能
console.log('=== 测试战士技能学习 ===')
const warriorSkillId = 'warrior_1'
const result = playerStore.learnSkill(warriorSkillId)
console.log('学习结果:', result)
console.log('剩余技能点:', playerStore.skillPoints)
console.log('已学技能:', playerStore.skills)

// 测试学习法师技能（应该失败）
console.log('\n=== 测试法师技能学习（应该失败）===')
const mageSkillId = 'mage_1'
const result2 = playerStore.learnSkill(mageSkillId)
console.log('学习结果:', result2)