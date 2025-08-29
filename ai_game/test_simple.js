// 简单测试技能学习逻辑
function getSkillClass(skillId) {
  if (skillId.startsWith('warrior_')) return 'warrior'
  if (skillId.startsWith('mage_')) return 'mage'
  if (skillId.startsWith('priest_')) return 'priest'
  if (skillId.startsWith('hunter_')) return 'hunter'
  if (skillId.startsWith('assassin_')) return 'assassin'
  return ''
}

// 模拟战士技能
const warriorSkills = [
  { id: 'warrior_1', name: '狂暴打击', levelRequirement: 1 },
  { id: 'warrior_2', name: '盾牌猛击', levelRequirement: 3 },
  { id: 'warrior_3', name: '旋风斩', levelRequirement: 5 }
]

// 模拟玩家
const player = {
  class: 'Warrior', // 注意：首字母大写
  skillPoints: 5,
  level: 6,
  skills: [],
  availableSkills: warriorSkills
}

function learnSkill(skillId) {
  const skill = player.availableSkills.find(s => s.id === skillId)
  const skillClass = getSkillClass(skillId)
  
  console.log('=== 技能学习测试 ===')
  console.log('技能ID:', skillId)
  console.log('玩家职业:', player.class)
  console.log('技能职业:', skillClass)
  console.log('玩家职业(小写):', player.class.toLowerCase())
  console.log('技能点:', player.skillPoints)
  console.log('技能等级要求:', skill?.levelRequirement)
  console.log('玩家等级:', player.level)
  console.log('职业匹配:', player.class.toLowerCase() === skillClass)
  
  if (skill && player.skillPoints > 0 && player.level >= skill.levelRequirement && player.class.toLowerCase() === skillClass) {
    if (!player.skills.find(s => s.id === skillId)) {
      player.skills.push({ id: skillId, level: 1 })
      player.skillPoints -= 1
      console.log('✅ 技能学习成功!')
      return true
    }
  }
  console.log('❌ 技能学习失败!')
  return false
}

// 测试学习战士技能
console.log('测试1: 学习战士技能')
const result1 = learnSkill('warrior_1')
console.log('结果:', result1)
console.log('剩余技能点:', player.skillPoints)
console.log('已学技能:', player.skills)

// 测试学习法师技能（应该失败）
console.log('\n测试2: 学习法师技能（应该失败）')
const result2 = learnSkill('mage_1')
console.log('结果:', result2)

// 测试再次学习相同技能（应该失败）
console.log('\n测试3: 再次学习相同技能（应该失败）')
const result3 = learnSkill('warrior_1')
console.log('结果:', result3)