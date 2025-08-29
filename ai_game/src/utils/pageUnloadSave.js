// 页面卸载时自动保存
import { saveGame } from './autoSave'

export function setupPageUnloadSave(store) {
  // 页面可见性变化时保存
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveGame(store.$state)
    }
  })

  // 页面卸载前保存
  window.addEventListener('beforeunload', (event) => {
    saveGame(store.$state)
    // 可选：显示确认对话框
    // event.preventDefault()
    // event.returnValue = '确定要离开吗？游戏进度将自动保存。'
  })

  // 定期保存（每30秒）
  setInterval(() => {
    saveGame(store.$state)
  }, 30000)

  console.log('页面卸载自动保存已启用')
}

// 禁用页面刷新提示（可选）
export function disableRefreshWarning() {
  window.onbeforeunload = null
}