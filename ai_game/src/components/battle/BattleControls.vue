<template>
  <v-card class="mb-4" elevation="1">
    <v-card-title class="bg-orange-lighten-4">
      <v-icon left>mdi-gamepad-variant</v-icon>
      战斗控制
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-btn
            block
            color="primary"
            :disabled="!canAttack"
            @click="$emit('attack')"
            class="mb-2"
          >
            <v-icon left>mdi-sword</v-icon>
            普通攻击
          </v-btn>
          
          <v-btn
            block
            color="secondary"
            :disabled="!canUseSkills"
            @click="$emit('open-skills')"
            class="mb-2"
          >
            <v-icon left>mdi-magic-staff</v-icon>
            使用技能
          </v-btn>
          
          <v-btn
            block
            color="green"
            :disabled="!canUseItems"
            @click="$emit('open-items')"
            class="mb-2"
          >
            <v-icon left>mdi-potion</v-icon>
            使用物品
          </v-btn>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-btn
            block
            color="warning"
            :disabled="!canEscape"
            @click="$emit('escape')"
            class="mb-2"
          >
            <v-icon left>mdi-run</v-icon>
            逃跑
          </v-btn>
          
          <v-btn
            block
            :color="isAutoBattle ? 'error' : 'teal'"
            @click="$emit('toggle-auto-battle')"
            class="mb-2"
          >
            <v-icon left>{{ isAutoBattle ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            {{ isAutoBattle ? '停止自动' : '自动战斗' }}
          </v-btn>
          
          <v-btn
            block
            color="grey"
            @click="$emit('reset-battle')"
            class="mb-2"
          >
            <v-icon left>mdi-refresh</v-icon>
            重置战斗
          </v-btn>
        </v-col>
      </v-row>
      
      <!-- 自动战斗设置 -->
      <v-expand-transition>
        <div v-if="isAutoBattle" class="mt-3">
          <v-divider class="mb-3" />
          <v-row>
            <v-col cols="12">
              <v-slider
                v-model="delay"
                label="战斗间隔(毫秒)"
                min="1000"
                max="10000"
                step="500"
                thumb-label
                @update:model-value="$emit('update-delay', delay)"
              >
                <template v-slot:append>
                  <span class="text-caption">{{ delay }}ms</span>
                </template>
              </v-slider>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  canAttack: Boolean,
  canUseSkills: Boolean,
  canUseItems: Boolean,
  canEscape: Boolean,
  isAutoBattle: Boolean,
  autoBattleDelay: Number
})

const emit = defineEmits([
  'attack',
  'open-skills',
  'open-items',
  'escape',
  'toggle-auto-battle',
  'reset-battle',
  'update-delay'
])

const delay = ref(props.autoBattleDelay || 3000)
</script>

<style scoped>
.v-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.v-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
</style>