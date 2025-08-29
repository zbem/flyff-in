<template>
  <v-card>
    <v-card-title>{{ i18nStore.$t('character.title') }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <v-card variant="outlined">
            <v-card-title class="text-center">{{ i18nStore.$t('character.avatar') }}</v-card-title>
            <v-card-text class="text-center">
              <v-avatar size="120" color="primary">
                <v-icon size="64">mdi-account</v-icon>
              </v-avatar>
              <div class="mt-4">
                <h3>{{ i18nStore.$t('character.adventurer') }}</h3>
                <p>{{ i18nStore.$t('character.level') }}: {{ playerStore.level }}</p>
              </div>
            </v-card-text>
          </v-card>
          
          <v-card variant="outlined" class="mt-4">
            <v-card-title>{{ i18nStore.$t('character.attributes') }}</v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  <v-icon color="red">mdi-heart</v-icon>
                  <v-list-item-title>{{ i18nStore.$t('character.health') }}: {{ playerStore.health }}/{{ playerStore.maxHealth }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-icon color="blue">mdi-auto-fix</v-icon>
                  <v-list-item-title>{{ i18nStore.$t('character.mana') }}: {{ playerStore.mana }}/{{ playerStore.maxMana }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-icon color="orange">mdi-sword</v-icon>
                  <v-list-item-title>{{ i18nStore.$t('character.strength') }}: {{ playerStore.strength }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-icon color="green">mdi-run</v-icon>
                  <v-list-item-title>{{ i18nStore.$t('character.agility') }}: {{ playerStore.agility }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-icon color="purple">mdi-brain</v-icon>
                  <v-list-item-title>{{ i18nStore.$t('character.intelligence') }}: {{ playerStore.intelligence }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="8">
          <v-card variant="outlined">
            <v-card-title>{{ i18nStore.$t('character.battleAttributes') }}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-list density="compact">
                    <v-list-item>{{ i18nStore.$t('character.attack') }}: {{ playerStore.totalAttack }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.defense') }}: {{ playerStore.totalDefense }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.magicAttack') }}: {{ playerStore.magicAttack }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.magicDefense') }}: {{ playerStore.magicDefense }}</v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="6">
                  <v-list density="compact">
                    <v-list-item>{{ i18nStore.$t('character.experience') }}: {{ playerStore.experience }}/{{ playerStore.expToNextLevel }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.gold') }}: {{ playerStore.gold }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.diamonds') }}: {{ playerStore.diamonds }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.skillPoints') }}: {{ playerStore.skillPoints }}</v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card variant="outlined" class="mt-4">
            <v-card-title>{{ i18nStore.$t('character.reputationProgress') }}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-list density="compact">
                    <v-list-item>{{ i18nStore.$t('character.citiesReputation') }}: {{ playerStore.reputation?.cities || 0 }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.activeQuests') }}: {{ playerStore.activeQuests?.length || 0 }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.completedQuests') }}: {{ playerStore.completedQuests?.length || 0 }}</v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="6">
                  <v-list density="compact">
                    <v-list-item>{{ i18nStore.$t('character.alchemyExp') }}: {{ playerStore.alchemyExp }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.inventorySlots') }}: {{ playerStore.inventory?.length || 0 }}/{{ playerStore.inventorySlots }}</v-list-item>
                    <v-list-item>{{ i18nStore.$t('character.currentLocation') }}: {{ playerStore.currentMap }}</v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { usePlayerStore } from '../stores/player'
import { useI18nStore } from '../stores/i18n'

const playerStore = usePlayerStore()
const i18nStore = useI18nStore()
</script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>
