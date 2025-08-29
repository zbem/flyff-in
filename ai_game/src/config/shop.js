// 商城配置
export const shopConfig = {
  // 普通商城
  generalShop: {
    name: '普通商城',
    currency: 'gold',
    items: [
      {
        id: 'health_potion_small',
        name: '小型生命药水',
        description: '恢复50点生命值',
        price: 20,
        type: 'consumable',
        effect: { heal: 50 },
        icon: 'mdi-potion'
      },
      {
        id: 'health_potion_medium',
        name: '中型生命药水',
        description: '恢复100点生命值',
        price: 35,
        type: 'consumable',
        effect: { heal: 100 },
        icon: 'mdi-potion'
      },
      {
        id: 'mana_potion_small',
        name: '小型魔法药水',
        description: '恢复30点魔法值',
        price: 25,
        type: 'consumable',
        effect: { mana: 30 },
        icon: 'mdi-potion'
      },
      {
        id: 'mana_potion_medium',
        name: '中型魔法药水',
        description: '恢复60点魔法值',
        price: 45,
        type: 'consumable',
        effect: { mana: 60 },
        icon: 'mdi-potion'
      },
      {
        id: 'basic_sword',
        name: '基础长剑',
        description: '攻击力+5',
        price: 100,
        type: 'weapon',
        stats: { attack: 5 },
        icon: 'mdi-sword'
      },
      {
        id: 'basic_shield',
        name: '基础盾牌',
        description: '防御力+3',
        price: 80,
        type: 'shield',
        stats: { defense: 3 },
        icon: 'mdi-shield'
      }
    ]
  },

  // 高级商城（充值货币）
  premiumShop: {
    name: '高级商城',
    currency: 'diamond',
    items: [
      {
        id: 'health_potion_large',
        name: '大型生命药水',
        description: '恢复200点生命值',
        price: 10,
        type: 'consumable',
        effect: { heal: 200 },
        icon: 'mdi-potion'
      },
      {
        id: 'mana_potion_large',
        name: '大型魔法药水',
        description: '恢复120点魔法值',
        price: 12,
        type: 'consumable',
        effect: { mana: 120 },
        icon: 'mdi-potion'
      },
      {
        id: 'enchanted_sword',
        name: '附魔长剑',
        description: '攻击力+15，暴击率+5%',
        price: 50,
        type: 'weapon',
        stats: { attack: 15, critChance: 5 },
        icon: 'mdi-sword'
      },
      {
        id: 'magic_robe',
        name: '魔法长袍',
        description: '防御力+8，魔法值+50',
        price: 40,
        type: 'armor',
        stats: { defense: 8, maxMana: 50 },
        icon: 'mdi-robe'
      },
      {
        id: 'lucky_charm',
        name: '幸运护符',
        description: '掉落率+10%',
        price: 30,
        type: 'accessory',
        stats: { dropRate: 10 },
        icon: 'mdi-cards-heart'
      }
    ]
  },

  // 积分商城
  pointsShop: {
    name: '积分商城',
    currency: 'points',
    items: [
      {
        id: 'rare_sword',
        name: '稀有长剑',
        description: '攻击力+25，力量+5',
        price: 500,
        type: 'weapon',
        stats: { attack: 25, strength: 5 },
        icon: 'mdi-sword'
      },
      {
        id: 'elite_armor',
        name: '精英护甲',
        description: '防御力+20，体力+10',
        price: 600,
        type: 'armor',
        stats: { defense: 20, vitality: 10 },
        icon: 'mdi-shield-account'
      },
      {
        id: 'skill_scroll',
        name: '技能卷轴',
        description: '随机获得一个高级技能',
        price: 800,
        type: 'skill',
        icon: 'mdi-scroll'
      },
      {
        id: 'exp_boost',
        name: '经验加成卷轴',
        description: '1小时内经验获取+50%',
        price: 300,
        type: 'boost',
        effect: { expBoost: 50, duration: 3600 },
        icon: 'mdi-star'
      },
      {
        id: 'gold_boost',
        name: '金币加成卷轴',
        description: '1小时内金币获取+50%',
        price: 250,
        type: 'boost',
        effect: { goldBoost: 50, duration: 3600 },
        icon: 'mdi-coin'
      }
    ]
  },

  // 兑换商城（道具兑换）
  exchangeShop: {
    name: '兑换商城',
    currency: 'items',
    items: [
      {
        id: 'dragon_scale_armor',
        name: '龙鳞护甲',
        description: '防御力+35，火焰抗性+20',
        price: { dragon_scale: 10, gold: 200 },
        type: 'armor',
        stats: { defense: 35, fireResist: 20 },
        icon: 'mdi-shield-sun'
      },
      {
        id: 'phoenix_feather',
        name: '凤凰羽毛',
        description: '复活道具，战斗中使用可立即复活',
        price: { phoenix_feather: 3, diamond: 5 },
        type: 'special',
        effect: { revive: true },
        icon: 'mdi-feather'
      },
      {
        id: 'ancient_tome',
        name: '远古典籍',
        description: '学习一个传奇技能',
        price: { ancient_page: 20, points: 1000 },
        type: 'skill',
        icon: 'mdi-book-open'
      },
      {
        id: 'mystic_orb',
        name: '神秘宝珠',
        description: '随机获得一件传奇装备',
        price: { magic_crystal: 15, diamond: 20 },
        type: 'special',
        icon: 'mdi-crystal-ball'
      }
    ]
  }
}

// 获取商城物品
export const getShopItems = (shopType) => {
  return shopConfig[shopType]?.items || []
}

// 获取商城信息
export const getShopInfo = (shopType) => {
  return shopConfig[shopType] || null
}

// 获取所有商城类型
export const getAllShopTypes = () => {
  return Object.keys(shopConfig)
}

// 购买物品验证
export const canAffordItem = (player, shopType, itemId) => {
  const shop = shopConfig[shopType]
  if (!shop) return false

  const item = shop.items.find(i => i.id === itemId)
  if (!item) return false

  if (shop.currency === 'items') {
    // 道具兑换
    return Object.entries(item.price).every(([currency, amount]) => {
      if (currency === 'gold') return player.gold >= amount
      if (currency === 'diamond') return player.diamond >= amount
      if (currency === 'points') return player.points >= amount
      // 道具数量检查
      const itemCount = player.inventory.filter(i => i.id === currency).length
      return itemCount >= amount
    })
  } else {
    // 货币购买
    const playerCurrency = player[shop.currency] || 0
    return playerCurrency >= item.price
  }
}

// 购买物品
export const purchaseItem = (player, shopType, itemId) => {
  const shop = shopConfig[shopType]
  if (!shop) return false

  const item = shop.items.find(i => i.id === itemId)
  if (!item) return false

  if (!canAffordItem(player, shopType, itemId)) return false

  if (shop.currency === 'items') {
    // 扣除道具
    Object.entries(item.price).forEach(([currency, amount]) => {
      if (currency === 'gold') {
        player.gold -= amount
      } else if (currency === 'diamond') {
        player.diamond -= amount
      } else if (currency === 'points') {
        player.points -= amount
      } else {
        // 扣除道具
        let remaining = amount
        player.inventory = player.inventory.filter(invItem => {
          if (invItem.id === currency && remaining > 0) {
            remaining--
            return false
          }
          return true
        })
      }
    })
  } else {
    // 扣除货币
    player[shop.currency] -= item.price
  }

  // 添加物品到背包
  const newItem = { ...item }
  player.addToInventory(newItem)

  return true
}

// 获取货币名称
export const getCurrencyName = (currencyType) => {
  const names = {
    gold: '金币',
    diamond: '钻石',
    points: '积分',
    items: '道具'
  }
  return names[currencyType] || currencyType
}

// 获取货币图标
export const getCurrencyIcon = (currencyType) => {
  const icons = {
    gold: 'mdi-coin',
    diamond: 'mdi-diamond',
    points: 'mdi-star',
    items: 'mdi-package'
  }
  return icons[currencyType] || 'mdi-currency'
}