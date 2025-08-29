// 地图配置数据
export const maps = [
  // 新手区域
  {
    id: 1,
    name: '卡诺萨',
    type: 'human_city',
    description: '人类主城，新手冒险者的起点',
    levelRange: { min: 1, max: 5 },
    monsters: [1, 2, 3],
    background: 'city_background',
    music: 'city_theme'
  },
  {
    id: 2,
    name: '雷鸣大陆',
    type: 'adventure',
    description: '广阔的平原，适合新手冒险',
    levelRange: { min: 1, max: 10 },
    monsters: [1, 2, 3, 4],
    background: 'plains_background',
    music: 'adventure_theme'
  },

  // 精灵区域
  {
    id: 3,
    name: '树心城',
    type: 'elf_city',
    description: '建立在巨树上的精灵城市',
    levelRange: { min: 10, max: 20 },
    monsters: [4, 5, 6],
    background: 'forest_city_background',
    music: 'elf_theme'
  },
  {
    id: 4,
    name: '银月森林',
    type: 'forest',
    description: '被月光笼罩的神秘森林',
    levelRange: { min: 15, max: 25 },
    monsters: [5, 6, 7],
    background: 'moonlight_forest_background',
    music: 'mystical_theme'
  },

  // 沼泽区域
  {
    id: 5,
    name: '隐雾沼泽',
    type: 'swamp',
    description: '被浓雾笼罩的危险沼泽',
    levelRange: { min: 15, max: 25 },
    monsters: [6, 7, 8],
    background: 'swamp_background',
    music: 'dark_theme'
  },
  {
    id: 6,
    name: '迷梦沼泽',
    type: 'swamp',
    description: '充满幻象的诡异沼泽',
    levelRange: { min: 40, max: 50 },
    monsters: [8, 9, 10],
    background: 'illusion_swamp_background',
    music: 'illusion_theme'
  },

  // 沙漠区域
  {
    id: 7,
    name: '沙城',
    type: 'desert_city',
    description: '沙漠中的贸易城市',
    levelRange: { min: 20, max: 30 },
    monsters: [7, 8, 9],
    background: 'desert_city_background',
    music: 'desert_theme'
  },
  {
    id: 8,
    name: '砺风戈壁',
    type: 'desert',
    description: '狂风呼啸的戈壁滩',
    levelRange: { min: 25, max: 35 },
    monsters: [8, 9, 10],
    background: 'canyon_background',
    music: 'wind_theme'
  },
  {
    id: 9,
    name: '生命之源',
    type: 'oasis',
    description: '沙漠中的神秘绿洲',
    levelRange: { min: 30, max: 40 },
    monsters: [9, 10, 11],
    background: 'oasis_background',
    music: 'peaceful_theme'
  },

  // 雪山区域
  {
    id: 10,
    name: '雪狼冰原',
    type: 'snow',
    description: '被冰雪覆盖的广阔平原',
    levelRange: { min: 35, max: 45 },
    monsters: [10, 11, 12],
    background: 'snow_plains_background',
    music: 'cold_theme'
  },
  {
    id: 11,
    name: '冰封走廊',
    type: 'ice_cave',
    description: '通往远古遗迹的冰封通道',
    levelRange: { min: 60, max: 70 },
    monsters: [12, 13, 14],
    background: 'ice_cave_background',
    music: 'ancient_theme'
  },

  // 海岛区域
  {
    id: 12,
    name: '亚维特岛',
    type: 'island',
    description: '神秘的海岛，传说中有宝藏',
    levelRange: { min: 45, max: 55 },
    monsters: [11, 12, 13],
    background: 'tropical_island_background',
    music: 'island_theme'
  },

  // 火山区域
  {
    id: 13,
    name: '自然女神之怒',
    type: 'volcano',
    description: '活跃的火山区域，充满危险',
    levelRange: { min: 50, max: 60 },
    monsters: [12, 13, 14],
    background: 'volcano_background',
    music: 'fire_theme'
  },

  // 高级区域
  {
    id: 14,
    name: '失落之地',
    type: 'ruins',
    description: '远古文明的遗迹',
    levelRange: { min: 55, max: 65 },
    monsters: [13, 14, 15],
    background: 'ruins_background',
    music: 'mysterious_theme'
  },
  {
    id: 15,
    name: '龙之谷',
    type: 'dragon_valley',
    description: '巨龙栖息的危险山谷',
    levelRange: { min: 70, max: 80 },
    monsters: [15, 16, 17],
    background: 'dragon_valley_background',
    music: 'epic_theme'
  },
  {
    id: 16,
    name: '深渊回廊',
    type: 'abyss',
    description: '通往深渊的神秘通道',
    levelRange: { min: 80, max: 90 },
    monsters: [16, 17, 18],
    background: 'abyss_background',
    music: 'dark_epic_theme'
  },
  {
    id: 17,
    name: '天界阶梯',
    type: 'celestial',
    description: '通往神界的阶梯',
    levelRange: { min: 90, max: 100 },
    monsters: [17, 18, 19],
    background: 'celestial_background',
    music: 'divine_theme'
  },

  // 特殊区域
  {
    id: 18,
    name: '双心湖',
    type: 'lake',
    description: '形状如两颗心的美丽湖泊',
    levelRange: { min: 8, max: 15 },
    monsters: [3, 4, 5],
    background: 'lake_background',
    music: 'peaceful_theme'
  },
  {
    id: 19,
    name: '幻影迷宫',
    type: 'maze',
    description: '充满幻象的魔法迷宫',
    levelRange: { min: 30, max: 40 },
    monsters: [8, 9, 10],
    background: 'maze_background',
    music: 'illusion_theme'
  },
  {
    id: 20,
    name: '时光回廊',
    type: 'time_rift',
    description: '连接不同时间线的神秘通道',
    levelRange: { min: 60, max: 70 },
    monsters: [13, 14, 15],
    background: 'time_rift_background',
    music: 'time_theme'
  }
]

// 根据ID获取地图
export function getMapById(id) {
  return maps.find(map => map.id === id)
}

// 获取所有地图
export function getAllMaps() {
  return maps
}

// 根据类型获取地图
export function getMapsByType(type) {
  return maps.filter(map => map.type === type)
}

// 根据等级获取适合的地图
export function getMapsByLevel(level) {
  return maps.filter(map => level >= map.levelRange.min && level <= map.levelRange.max)
}

// 地图类型图标
export const mapTypeIcons = {
  human_city: 'mdi-city',
  elf_city: 'mdi-tree',
  desert_city: 'mdi-desert',
  adventure: 'mdi-sword-cross',
  forest: 'mdi-pine-tree',
  swamp: 'mdi-water',
  desert: 'mdi-weather-sunny',
  oasis: 'mdi-palm-tree',
  snow: 'mdi-snowflake',
  ice_cave: 'mdi-ice-cream',
  island: 'mdi-island',
  volcano: 'mdi-volcano',
  ruins: 'mdi-castle',
  dragon_valley: 'mdi-dragon',
  abyss: 'mdi-ab-testing',
  celestial: 'mdi-star',
  lake: 'mdi-waves',
  maze: 'mdi-map',
  time_rift: 'mdi-clock'
}

// 地图类型颜色
export const mapTypeColors = {
  human_city: '#795548',
  elf_city: '#4caf50',
  desert_city: '#ff9800',
  adventure: '#f44336',
  forest: '#388e3c',
  swamp: '#00695c',
  desert: '#ff5722',
  oasis: '#8bc34a',
  snow: '#90caf9',
  ice_cave: '#29b6f6',
  island: '#ffeb3b',
  volcano: '#d32f2f',
  ruins: '#616161',
  dragon_valley: '#9c27b0',
  abyss: '#4527a0',
  celestial: '#ffd600',
  lake: '#2196f3',
  maze: '#7b1fa2',
  time_rift: '#00bcd4'
}