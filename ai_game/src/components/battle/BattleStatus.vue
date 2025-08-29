<template>
  <v-card class="mb-4" elevation="1">
    <v-card-title class="bg-green-lighten-4">
      <v-icon left>mdi-heart-pulse</v-icon>
      战斗状态
    </v-card-title>
    <v-card-text>
      <v-row>
        <!-- 玩家状态 -->
        <v-col cols="12" md="6">
          <v-card variant="outlined" class="pa-3">
            <v-card-title class="text-h6 text-primary">
              <v-icon left>mdi-account</v-icon>
              玩家队伍
            </v-card-title>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar color="primary">
                    <v-icon dark>mdi-account</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title>{{ player.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  Lv.{{ player.level }} {{ getClassName(player.class) }}
                </v-list-item-subtitle>
                <template v-slot:append>
                  <v-progress-linear
                    :model-value="(player.currentHealth / player.maxHealth) * 100"
                    color="green"
                    height="8"
                    class="mb-1"
                  />
                  <span class="text-caption">
                    {{ player.currentHealth }}/{{ player.maxHealth }}
                  </span>
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- 怪物状态 -->
        <v-col cols="12" md="6">
          <v-card variant="outlined" class="pa-3" v-if="monster">
            <v-card-title class="text-h6 text-error">
              <v-icon left>mdi-skull</v-icon>
              怪物
            </v-card-title>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar :color="getMonsterColor(monster.level)">
                    <v-icon dark>mdi-skull</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title>{{ monster.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  Lv.{{ monster.level }}
                </v-list-item-subtitle>
                <template v-slot:append>
                  <v-progress-linear
                    :model-value="(monster.currentHealth / monster.health) * 100"
                    color="red"
                    height="8"
                    class="mb-1"
                  />
                  <span class="text-caption">
                    {{ monster.currentHealth }}/{{ monster.health }}
                  </span>
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  player: Object,
  monster: Object
})

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

const getMonsterColor = (level) => {
  if (level <= 5) return 'green'
  if (level <= 10) return 'blue'
  if (level <= 15) return 'orange'
  if (level <= 20) return 'red'
  return 'purple'
}
</script>