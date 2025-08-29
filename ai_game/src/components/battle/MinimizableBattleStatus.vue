<template>
  <div class="minimizable-battle-status" :class="{ 'minimized': isMinimized }">
    <template v-if="isMinimized">
      <!-- 最小化状态 -->
      <v-tooltip location="left" text="展开战斗状态 (快捷键: B)">
        <template v-slot:activator="{ props }">
          <v-btn
            color="red"
            icon
            class="floating-battle-icon"
            @click="toggleMinimize"
            elevation="4"
            v-bind="props"
          >
            <v-badge
              :content="battleStore.totalKills.toString()"
              color="green"
              :model-value="battleStore.totalKills > 0"
              location="top end"
            >
              <div class="d-flex flex-column align-center">
                <v-icon size="large">mdi-sword-cross</v-icon>
                <span class="text-caption mt-1" v-if="battleStore.currentMonster">
                  {{ battleStore.currentMonster.currentHealth }}/{{ battleStore.currentMonster.health }}
                </span>
              </div>
            </v-badge>
          </v-btn>
        </template>
      </v-tooltip>
    </template>

    <!-- 展开状态 -->
    <v-card v-else class="battle-status-card" elevation="4">
      <v-card-title class="bg-red-darken-1 text-white d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-sword-cross</v-icon>
          后台战斗
          <v-chip class="ml-2" size="small" color="green" variant="outlined">
            击杀: {{ battleStore.totalKills }}
          </v-chip>
        </div>
        <div>
          <v-tooltip location="top" text="最小化 (快捷键: B)">
            <template v-slot:activator="{ props }">
              <v-btn icon size="small" color="white" @click="toggleMinimize" v-bind="props">
                <v-icon>mdi-window-minimize</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
          <v-tooltip location="top" text="停止战斗">
            <template v-slot:activator="{ props }">
              <v-btn icon size="small" color="white" @click="stopBattle" v-bind="props">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </div>
      </v-card-title>

      <v-card-text class="pa-3">
        <div v-if="battleStore.resurrectionTime > 0" class="resurrection-timer mb-3">
          <v-progress-linear
            :model-value="(battleStore.resurrectionTime / 10) * 100"
            color="amber"
            height="20"
            striped
          >
            <template v-slot:default>
              复活倒计时: {{ battleStore.resurrectionTime }}秒
            </template>
          </v-progress-linear>
        </div>

        <div class="d-flex align-center mb-3">
          <v-avatar color="red" size="36" class="mr-2">
            <v-icon color="white">mdi-skull</v-icon>
          </v-avatar>
          <div class="flex-grow-1">
            <div class="text-subtitle-2 font-weight-bold">
              {{ battleStore.currentMonster?.name || '无目标' }}
            </div>
            <v-progress-linear
              v-if="battleStore.currentMonster"
              :model-value="(battleStore.currentMonster.currentHealth / battleStore.currentMonster.health) * 100"
              color="red"
              height="8"
              rounded
            ></v-progress-linear>
          </div>
        </div>

        <v-divider class="mb-3"></v-divider>

        <div class="battle-stats">
          <div class="stat-item">
            <v-icon color="green" size="small">mdi-skull</v-icon>
            击杀: {{ battleStore.totalKills }}
          </div>
          <div class="stat-item">
            <v-icon color="amber" size="small">mdi-coin</v-icon>
            金币: {{ battleStore.totalGoldEarned }}
          </div>
          <div class="stat-item">
            <v-icon color="blue" size="small">mdi-star</v-icon>
            经验: {{ battleStore.totalExpEarned }}
          </div>
          <div class="stat-item">
            <v-icon color="red" size="small">mdi-skull-crossbones</v-icon>
            死亡: {{ battleStore.totalDefeats }}
          </div>
        </div>

        <v-divider class="my-3"></v-divider>

        <!-- 最近的战斗日志 -->
        <div class="battle-log-preview">
          <div class="text-subtitle-2 font-weight-bold mb-2">战斗日志:</div>
          <div
            v-for="(log, index) in recentLogs"
            :key="index"
            class="log-entry"
          >
            <small class="text-grey">[{{ log.timestamp }}]</small>
            <span v-html="log.message"></span>
          </div>
        </div>
      </v-card-text>

      <v-card-actions class="bg-grey-lighten-4">
        <v-btn
          color="red"
          variant="tonal"
          block
          @click="stopBattle"
        >
          <v-icon start>mdi-stop</v-icon>
          停止战斗
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useBattleStore } from '../../stores/battle'
import { useRoute } from 'vue-router'

const battleStore = useBattleStore()
const route = useRoute()

// 最小化状态 - 默认为展开
const isMinimized = ref(false)

// 获取最近的战斗日志
const recentLogs = computed(() => {
  return battleStore.battleLog ? battleStore.battleLog.slice(-5) : []
})

// 切换最小化状态
const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value
  // 保存最小化状态到localStorage
  localStorage.setItem('battle-minimized-state', isMinimized.value.toString())
}

// 停止战斗
const stopBattle = () => {
  battleStore.stopBackgroundBattle()
}

// 在战斗页面隐藏，在其他页面显示并保持用户设置的状态
watch(
  () => route.path,
  (newPath) => {
    // 在战斗页面不显示此组件，由AppLayout控制
    if (newPath === '/battle') {
      // 不做任何操作，因为在战斗页面不会显示此组件
    } else {
      // 在其他页面默认展开，除非用户手动最小化过
      if (localStorage.getItem('battle-minimized-state') === 'true') {
        isMinimized.value = true
      } else {
        isMinimized.value = false
      }
    }
  },
  { immediate: true }
)

// 组件挂载时检查当前路由和保存的状态
onMounted(() => {
  // 加载保存的最小化状态
  if (localStorage.getItem('battle-minimized-state') === 'true') {
    isMinimized.value = true
  } else {
    isMinimized.value = false
  }
  
  // 添加键盘快捷键
  window.addEventListener('keydown', handleKeyDown)
})

// 键盘事件处理函数
const handleKeyDown = (e) => {
  // 按 'B' 键切换最小化状态
  if (e.key === 'b' && route.path !== '/battle') {
    toggleMinimize()
  }
}

// 组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.minimizable-battle-status {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
}

.minimizable-battle-status.minimized {
  transform: translateY(0);
}

.floating-battle-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
  background-color: #d32f2f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.floating-battle-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

.battle-status-card {
  width: 320px;
  max-height: 500px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: slide-in 0.3s ease;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.battle-log-preview {
  max-height: 150px;
  overflow-y: auto;
  font-size: 0.85rem;
  padding-right: 5px;
}

.battle-log-preview::-webkit-scrollbar {
  width: 4px;
}

.battle-log-preview::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.battle-log-preview::-webkit-scrollbar-thumb {
  background: #d32f2f;
  border-radius: 4px;
}

.log-entry {
  padding: 4px 0;
  border-bottom: 1px dashed #eee;
  animation: fade-in 0.3s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.battle-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.stat-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  padding: 4px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.03);
}

.stat-item .v-icon {
  margin-right: 4px;
}

.resurrection-timer {
  border-radius: 4px;
  overflow: hidden;
}

/* 技能名称样式 */
:deep(.skill-name) {
  font-weight: bold;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
</style>
