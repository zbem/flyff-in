<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card class="pa-6">
          <v-card-title class="text-h3 mb-4">
            🏰 幻想RPG游戏 🏰
          </v-card-title>
          <v-card-text>
            <p class="text-h6 mb-4">欢迎来到西方魔幻世界！</p>
            <v-divider class="my-6"></v-divider>
            
            <v-row>
              <v-col cols="12" md="4">
                <v-card variant="outlined" class="pa-3">
                  <v-card-title>🎯 角色系统</v-card-title>
                  <v-card-text>
                    <p>5大职业选择</p>
                    <p>技能学习和升级</p>
                    <p>装备收集和强化</p>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="4">
                <v-card variant="outlined" class="pa-3">
                  <v-card-title>🗺️ 探索世界</v-card-title>
                  <v-card-text>
                    <p>13个独特地图区域</p>
                    <p>城市、沼泽、沙漠、冰原</p>
                    <p>丰富的怪物和宝藏</p>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="4">
                <v-card variant="outlined" class="pa-3">
                  <v-card-title>⚔️ 战斗系统</v-card-title>
                  <v-card-text>
                    <p>实时战斗日志</p>
                    <p>技能冷却管理</p>
                    <p>佣兵协同作战</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-divider class="my-6"></v-divider>

            <v-btn 
              color="primary" 
              size="large" 
              @click="goToSkillsTest"
              class="mr-4"
            >
              测试技能系统
            </v-btn>
            
            <v-btn 
              color="secondary" 
              size="large" 
              @click="createCharacter"
              class="mr-4"
            >
              创建新角色
            </v-btn>
            
            <v-btn 
              color="warning" 
              size="large" 
              @click="runTests"
              class="mr-4"
            >
              运行系统测试
            </v-btn>
            
            <v-btn 
              color="success" 
              size="large" 
              @click="quickTest"
              class="mr-4"
            >
              快速测试
            </v-btn>
            
            <v-btn 
              color="red" 
              size="large" 
              @click="battleDemo"
            >
              战斗演示
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { usePlayerStore } from '../stores/player'
import { testSkillSystem, testClassChange } from '../utils/skillTester'
import { quickTest } from '../utils/gameTester'
import { battleDemo } from '../utils/battleTester'

const router = useRouter()
const playerStore = usePlayerStore()

const goToSkillsTest = () => {
  router.push('/test-skills')
}

const createCharacter = () => {
  // 初始化玩家数据
  playerStore.$reset()
  playerStore.name = '新冒险者'
  playerStore.level = 1
  playerStore.skillPoints = 3
  playerStore.updateAvailableSkills()
  
  goToSkillsTest()
}

const runTests = () => {
  console.clear()
  console.log('🚀 开始运行技能系统测试...')
  
  // 保存当前状态
  const originalState = { ...playerStore.$state }
  
  try {
    testSkillSystem()
    testClassChange()
    console.log('✅ 所有测试完成！请查看浏览器控制台输出。')
  } catch (error) {
    console.error('❌ 测试失败:', error)
  } finally {
    // 恢复原始状态
    playerStore.$state = originalState
  }
}
</script>

<style scoped>
.mr-4 {
  margin-right: 16px;
}
</style>