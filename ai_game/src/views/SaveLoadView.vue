<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="bg-primary">
            <v-icon left>mdi-content-save</v-icon>
            存档管理
          </v-card-title>
          
          <v-tabs v-model="tab" color="primary">
            <v-tab value="load">加载存档</v-tab>
            <v-tab value="save">保存游戏</v-tab>
            <v-tab value="import">导入/导出</v-tab>
          </v-tabs>

          <v-window v-model="tab">
            <!-- 加载存档标签页 -->
            <v-window-item value="load">
              <v-card-text>
                <v-alert type="info" class="mb-4">
                  选择存档位加载游戏进度
                </v-alert>

                <v-row>
                  <v-col v-for="slot in saveSlots" :key="slot.slot" cols="12" md="6" lg="4">
                    <v-card :color="slot.exists ? 'surface' : 'grey-lighten-4'" class="pa-3">
                      <v-card-title class="text-h6">
                        {{ slot.exists ? slot.name : `存档位 ${slot.slot}` }}
                      </v-card-title>
                      
                      <v-card-text>
                        <template v-if="slot.exists">
                          <div class="text-body-2">
                            <v-icon small>mdi-account</v-icon>
                            等级 {{ slot.level }} {{ getClassName(slot.class) }}
                          </div>
                          <div class="text-caption text-grey">
                            <v-icon small>mdi-clock</v-icon>
                            最后保存: {{ formatDate(slot.updatedAt) }}
                          </div>
                        </template>
                        <template v-else>
                          <div class="text-body-2 text-grey">
                            空存档位
                          </div>
                        </template>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn 
                          v-if="slot.exists"
                          color="primary"
                          @click="loadGame(slot.slot)"
                          :loading="loadingSlot === slot.slot"
                        >
                          <v-icon left>mdi-download</v-icon>
                          加载
                        </v-btn>
                        
                        <v-btn 
                          v-if="slot.exists"
                          color="error"
                          @click="deleteSave(slot.slot)"
                          variant="text"
                        >
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>

                        <v-btn 
                          v-else
                          color="secondary"
                          @click="newGame(slot.slot)"
                        >
                          <v-icon left>mdi-plus</v-icon>
                          新建
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-window-item>

            <!-- 保存游戏标签页 -->
            <v-window-item value="save">
              <v-card-text>
                <v-alert type="warning" class="mb-4">
                  选择存档位保存当前游戏进度
                </v-alert>

                <v-row>
                  <v-col v-for="slot in saveSlots" :key="slot.slot" cols="12" md="6" lg="4">
                    <v-card :color="slot.exists ? 'surface' : 'grey-lighten-4'" class="pa-3">
                      <v-card-title class="text-h6">
                        <v-text-field
                          v-if="editingSlot === slot.slot"
                          v-model="newSlotName"
                          density="compact"
                          hide-details
                          autofocus
                          @keyup.enter="confirmSave(slot.slot)"
                          @keyup.escape="editingSlot = null"
                        />
                        <span v-else>
                          {{ slot.exists ? slot.name : `存档位 ${slot.slot}` }}
                        </span>
                      </v-card-title>
                      
                      <v-card-text>
                        <template v-if="slot.exists">
                          <div class="text-body-2">
                            <v-icon small>mdi-account</v-icon>
                            等级 {{ slot.level }} {{ getClassName(slot.class) }}
                          </div>
                          <div class="text-caption text-grey">
                            <v-icon small>mdi-clock</v-icon>
                            最后保存: {{ formatDate(slot.updatedAt) }}
                          </div>
                        </template>
                        <template v-else>
                          <div class="text-body-2 text-grey">
                            空存档位
                          </div>
                        </template>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn 
                          color="success"
                          @click="startSave(slot.slot, slot.name)"
                          :loading="savingSlot === slot.slot"
                        >
                          <v-icon left>mdi-content-save</v-icon>
                          {{ slot.exists ? '覆盖' : '保存' }}
                        </v-btn>

                        <v-btn 
                          v-if="slot.exists"
                          color="error"
                          @click="deleteSave(slot.slot)"
                          variant="text"
                        >
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>

                <v-divider class="my-4" />

                <div class="text-center">
                  <v-btn color="primary" @click="quickSave" class="mr-2">
                    <v-icon left>mdi-flash</v-icon>
                    快速保存
                  </v-btn>
                  
                  <v-btn color="secondary" @click="autoSave">
                    <v-icon left>mdi-auto-fix</v-icon>
                    自动保存
                  </v-btn>
                </div>
              </v-card-text>
            </v-window-item>

            <!-- 导入导出标签页 -->
            <v-window-item value="import">
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card class="pa-4">
                      <v-card-title class="text-h6">
                        <v-icon left>mdi-export</v-icon>
                        导出存档
                      </v-card-title>
                      
                      <v-card-text>
                        <p class="text-body-2 mb-4">
                          将当前游戏进度导出为JSON文件，可以备份或分享给其他玩家。
                        </p>
                        
                        <v-text-field
                          v-model="exportFileName"
                          label="文件名"
                          density="compact"
                          hide-details
                          class="mb-2"
                        />
                        
                        <v-btn 
                          color="primary" 
                          @click="exportGame" 
                          block
                          :loading="exporting"
                        >
                          <v-icon left>mdi-download</v-icon>
                          导出存档
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-card class="pa-4">
                      <v-card-title class="text-h6">
                        <v-icon left>mdi-import</v-icon>
                        导入存档
                      </v-card-title>
                      
                      <v-card-text>
                        <p class="text-body-2 mb-4">
                          从JSON文件导入游戏进度。请注意这会覆盖当前游戏状态。
                        </p>
                        
                        <v-file-input
                          v-model="importFile"
                          label="选择存档文件"
                          accept=".json"
                          density="compact"
                          hide-details
                          class="mb-2"
                        />
                        
                        <v-btn 
                          color="warning" 
                          @click="importGame" 
                          block
                          :disabled="!importFile"
                          :loading="importing"
                        >
                          <v-icon left>mdi-upload</v-icon>
                          导入存档
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>

                <v-alert type="info" class="mt-4">
                  <template v-slot:prepend>
                    <v-icon>mdi-information</v-icon>
                  </template>
                  存档文件包含所有游戏进度，请妥善保管。导入时会验证文件格式。
                </v-alert>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>

    <!-- 操作结果提示 -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { usePlayerStore } from '../stores/player'
import { useRouter } from 'vue-router'
import { 
  saveManager, 
  loadFromLocal, 
  saveToLocal, 
  deleteLocalSave,
  exportSave, 
  importSave,
  createNewSave,
  loadSave
} from '../utils/saveUtils'

const playerStore = usePlayerStore()
const router = useRouter()

const tab = ref('load')
const saveSlots = ref([])
const loadingSlot = ref(null)
const savingSlot = ref(null)
const editingSlot = ref(null)
const newSlotName = ref('')
const exportFileName = ref('')
const exporting = ref(false)
const importing = ref(false)
const importFile = ref(null)

const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
})

// 获取职业名称
const getClassName = (classType) => {
  const classes = {
    Warrior: '战士',
    Mage: '法师', 
    Priest: '牧师',
    Hunter: '猎人',
    Assassin: '刺客'
  }
  return classes[classType] || classType
}

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '未知'
  return new Date(dateString).toLocaleString()
}

// 显示消息
const showMessage = (message, color = 'success') => {
  snackbar.value = {
    show: true,
    message,
    color
  }
}

// 刷新存档列表
const refreshSaveSlots = () => {
  saveSlots.value = saveManager.getSaveSlots()
}

// 加载游戏
const loadGame = async (slotIndex) => {
  try {
    loadingSlot.value = slotIndex
    await loadFromLocal(slotIndex)
    showMessage('游戏加载成功！')
    
    // 延迟跳转回首页
    setTimeout(() => {
      router.push('/')
    }, 1000)
    
  } catch (error) {
    showMessage(`加载失败: ${error.message}`, 'error')
  } finally {
    loadingSlot.value = null
  }
}

// 新建游戏
const newGame = (slotIndex) => {
  try {
    const newSave = createNewSave(`新游戏_${slotIndex}`)
    loadSave(newSave)
    saveToLocal(slotIndex, `新游戏_${slotIndex}`)
    showMessage('新游戏创建成功！')
    refreshSaveSlots()
    
    // 跳转回首页
    setTimeout(() => {
      router.push('/')
    }, 1000)
    
  } catch (error) {
    showMessage(`创建失败: ${error.message}`, 'error')
  }
}

// 删除存档
const deleteSave = async (slotIndex) => {
  if (!confirm('确定要删除这个存档吗？此操作不可恢复。')) {
    return
  }
  
  try {
    deleteLocalSave(slotIndex)
    showMessage('存档已删除')
    refreshSaveSlots()
  } catch (error) {
    showMessage(`删除失败: ${error.message}`, 'error')
  }
}

// 开始保存（进入编辑模式）
const startSave = (slotIndex, currentName) => {
  editingSlot.value = slotIndex
  newSlotName.value = currentName || `存档${slotIndex}`
}

// 确认保存
const confirmSave = async (slotIndex) => {
  try {
    savingSlot.value = slotIndex
    const slotName = newSlotName.value.trim() || `存档${slotIndex}`
    await saveToLocal(slotIndex, slotName)
    showMessage('游戏保存成功！')
    editingSlot.value = null
    refreshSaveSlots()
  } catch (error) {
    showMessage(`保存失败: ${error.message}`, 'error')
  } finally {
    savingSlot.value = null
  }
}

// 快速保存
const quickSave = async () => {
  try {
    const result = saveManager.quickSave()
    showMessage(`快速保存成功: ${result.data.metadata.slotName}`)
    refreshSaveSlots()
  } catch (error) {
    showMessage(`快速保存失败: ${error.message}`, 'error')
  }
}

// 自动保存
const autoSave = async () => {
  try {
    const result = saveManager.autoSave()
    showMessage(`自动保存成功: ${result.data.metadata.slotName}`)
    refreshSaveSlots()
  } catch (error) {
    showMessage(`自动保存失败: ${error.message}`, 'error')
  }
}

// 导出游戏
const exportGame = async () => {
  try {
    exporting.value = true
    await exportSave()
    showMessage('存档导出成功！')
  } catch (error) {
    showMessage(`导出失败: ${error.message}`, 'error')
  } finally {
    exporting.value = false
  }
}

// 导入游戏
const importGame = async () => {
  if (!importFile.value) {
    showMessage('请选择存档文件', 'warning')
    return
  }

  if (!confirm('导入存档将覆盖当前游戏进度，确定要继续吗？')) {
    return
  }

  try {
    importing.value = true
    const saveData = await importSave(importFile.value)
    await loadSave(saveData)
    showMessage('存档导入成功！')
    importFile.value = null
    
    // 跳转回首页
    setTimeout(() => {
      router.push('/')
    }, 1000)
    
  } catch (error) {
    showMessage(`导入失败: ${error.message}`, 'error')
  } finally {
    importing.value = false
  }
}

// 初始化
onMounted(() => {
  refreshSaveSlots()
  exportFileName.value = `fantasy_rpg_save_${new Date().getTime()}`
})
</script>

<style scoped>
.v-card {
  transition: all 0.3s ease;
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>