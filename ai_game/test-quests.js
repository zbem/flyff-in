// 测试任务系统
import { getAllQuests, getAvailableQuests, getDifficultyInfo, getQuestTypeInfo } from './src/config/quests.js'

console.log('=== 任务系统测试 ===\n')

// 测试获取所有任务
console.log('所有任务:')
const allQuests = getAllQuests()
allQuests.forEach(quest => {
  const difficulty = getDifficultyInfo(quest.difficulty)
  const type = getQuestTypeInfo(quest.type)
  console.log(`- ${quest.name} [${difficulty.name}] (${type.name})`)
})

console.log('\n=== 按等级获取可用任务 ===')
console.log('Lv.1 可用任务:')
const lv1Quests = getAvailableQuests(1)
lv1Quests.forEach(quest => {
  console.log(`- ${quest.name} (最低等级: ${quest.minLevel})`)
})

console.log('\nLv.10 可用任务:')
const lv10Quests = getAvailableQuests(10)
lv10Quests.forEach(quest => {
  console.log(`- ${quest.name} (最低等级: ${quest.minLevel})`)
})

console.log('\n=== 难度等级信息 ===')
const difficulties = ['D', 'C', 'B', 'A', 'S', 'SS', 'SSS']
difficulties.forEach(diff => {
  const info = getDifficultyInfo(diff)
  console.log(`${diff}: ${info.name} - 颜色: ${info.color}, 奖励倍数: ${info.rewardMultiplier}`)
})

console.log('\n=== 任务类型信息 ===')
const types = [1, 2, 3]
types.forEach(type => {
  const info = getQuestTypeInfo(type)
  console.log(`类型 ${type}: ${info.name} - 图标: ${info.icon}`)
})

console.log('\n测试完成！')