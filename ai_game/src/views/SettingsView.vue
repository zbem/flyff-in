<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="bg-primary text-white">
            <v-icon start>mdi-cog</v-icon>
            设置
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="mb-4">
                  <v-card-title class="bg-grey-lighten-3">
                    <v-icon start>mdi-volume-high</v-icon>
                    音频设置
                  </v-card-title>
                  <v-card-text>
                    <v-slider
                      v-model="settings.masterVolume"
                      label="主音量"
                      thumb-label
                      :max="100"
                      :min="0"
                      @update:model-value="updateSettings"
                    ></v-slider>
                    
                    <v-slider
                      v-model="settings.musicVolume"
                      label="音乐音量"
                      thumb-label
                      :max="100"
                      :min="0"
                      @update:model-value="updateSettings"
                    ></v-slider>
                    
                    <v-slider
                      v-model="settings.sfxVolume"
                      label="音效音量"
                      thumb-label
                      :max="100"
                      :min="0"
                      @update:model-value="updateSettings"
                    ></v-slider>
                    
                    <v-switch
                      v-model="settings.muteAudio"
                      label="静音"
                      @update:model-value="updateSettings"
                    ></v-switch>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="mb-4">
                  <v-card-title class="bg-grey-lighten-3">
                    <v-icon start>mdi-monitor</v-icon>
                    显示设置
                  </v-card-title>
                  <v-card-text>
                    <v-select
                      v-model="settings.theme"
                      label="主题"
                      :items="themeOptions"
                      @update:model-value="updateSettings"
                    ></v-select>
                    
                    <v-switch
                      v-model="settings.darkMode"
                      label="深色模式"
                      @update:model-value="updateSettings"
                    ></v-switch>
                    
                    <v-switch
                      v-model="settings.showFps"
                      label="显示FPS"
                      @update:model-value="updateSettings"
                    ></v-switch>
                  </v-card-text>
                </v-card>
                
                <v-card variant="outlined">
                  <v-card-title class="bg-grey-lighten-3">
                    <v-icon start>mdi-gamepad-variant</v-icon>
                    游戏设置
                  </v-card-title>
                  <v-card-text>
                    <v-select
                      v-model="settings.difficulty"
                      label="游戏难度"
                      :items="difficultyOptions"
                      @update:model-value="updateSettings"
                    ></v-select>
                    
                    <v-switch
                      v-model="settings.autosave"
                      label="自动保存"
                      @update:model-value="updateSettings"
                    ></v-switch>
                    
                    <v-select
                      v-model="settings.autosaveInterval"
                      label="自动保存间隔"
                      :items="autosaveIntervalOptions"
                      :disabled="!settings.autosave"
                      @update:model-value="updateSettings"
                    ></v-select>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveSettings">
              保存设置
            </v-btn>
            <v-btn color="error" @click="resetSettings">
              重置默认
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

// 设置选项
const themeOptions = ['默认', '经典', '未来', '复古'];
const difficultyOptions = ['简单', '普通', '困难', '噩梦'];
const autosaveIntervalOptions = ['5分钟', '10分钟', '15分钟', '30分钟', '1小时'];

// 设置状态
const settings = ref({
  // 音频设置
  masterVolume: 80,
  musicVolume: 70,
  sfxVolume: 90,
  muteAudio: false,
  
  // 显示设置
  theme: '默认',
  darkMode: false,
  showFps: false,
  
  // 游戏设置
  difficulty: '普通',
  autosave: true,
  autosaveInterval: '10分钟'
});

// 初始化设置
const initSettings = () => {
  // 从本地存储加载设置
  const savedSettings = localStorage.getItem('game-settings');
  if (savedSettings) {
    try {
      const parsedSettings = JSON.parse(savedSettings);
      settings.value = { ...settings.value, ...parsedSettings };
    } catch (error) {
      console.error('Failed to parse settings:', error);
    }
  }
};

// 保存设置
const saveSettings = () => {
  localStorage.setItem('game-settings', JSON.stringify(settings.value));
  toast.success('设置已保存');
};

// 重置设置
const resetSettings = () => {
  settings.value = {
    masterVolume: 80,
    musicVolume: 70,
    sfxVolume: 90,
    muteAudio: false,
    theme: '默认',
    darkMode: false,
    showFps: false,
    difficulty: '普通',
    autosave: true,
    autosaveInterval: '10分钟'
  };
  saveSettings();
  toast.info('设置已重置为默认值');
};

// 更新设置
const updateSettings = () => {
  // 这里可以添加实时应用设置的逻辑
  // 例如，如果更改了音量，可以立即应用
};

// 初始化
initSettings();
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>