import { defineStore } from 'pinia'
import { usePlayerStore } from './player'
import { useMercenaryStore } from './mercenary'

export const useBattleStore = defineStore('battle', {
  state: () => ({
    // 战斗状态
    isBattling: false,
    currentMonster: null,
    battleLog: [],
    battleInterval: null,
    
    // 队伍战斗状态
    teamMembers: [], // 当前战斗中的队伍成员（包括玩家和佣兵）
    teamTurnOrder: [], // 战斗回合顺序
    currentTurn: 0, // 当前回合索引
    
    // 后台战斗设置
    backgroundBattle: false,
    backgroundBattleInterval: null,
    backgroundBattleResults: [],
    
    // 战斗统计
    totalKills: 0,
    totalDamage: 0,
    totalGoldEarned: 0,
    totalExpEarned: 0,
    totalDefeats: 0,  // 战败次数统计
    
    // 复活计时
    resurrectionTimer: null,
    resurrectionTime: 0  // 复活剩余时间（秒）
  }),

  actions: {
    // 开始战斗（自动在后台进行）
    startBattle(monster) {
      this.isBattling = true
      this.currentMonster = { ...monster, currentHealth: monster.health }
      this.battleLog = []
      
      // 初始化队伍成员
      this.initializeTeamMembers()
      
      // 添加战斗开始日志
      this.addBattleLog(`开始与 ${monster.name} 战斗！`)
      
      // 自动开始后台战斗
      this.startBackgroundBattle(monster)
    },
    
    // 初始化队伍成员
    initializeTeamMembers() {
      const playerStore = usePlayerStore()
      const mercenaryStore = useMercenaryStore()
      
      // 清空当前队伍
      this.teamMembers = []
      
      // 添加玩家
      this.teamMembers.push({
        id: 'player',
        type: 'player',
        name: playerStore.name,
        level: playerStore.level,
        health: playerStore.health,
        maxHealth: playerStore.maxHealth,
        mana: playerStore.mana,
        maxMana: playerStore.maxMana,
        attack: playerStore.totalAttack,
        defense: playerStore.totalDefense,
        skills: playerStore.skills,
        isAlive: true
      })
      
      // 添加佣兵队员
      if (playerStore.activeTeam && playerStore.activeTeam.length > 0) {
        const activeMercenaries = mercenaryStore.activeTeamMembers
        
        activeMercenaries.forEach(mercenary => {
          if (mercenary) {
            this.teamMembers.push({
              id: mercenary.id,
              type: 'mercenary',
              name: mercenary.name,
              level: mercenary.level,
              health: mercenary.health,
              maxHealth: mercenary.maxHealth,
              mana: mercenary.mana,
              maxMana: mercenary.maxMana,
              attack: mercenary.attack,
              defense: mercenary.defense,
              skills: mercenary.skills,
              class: mercenary.class,
              isAlive: true
            })
          }
        })
      }
      
      // 根据敏捷值决定回合顺序
      this.determineTeamTurnOrder()
    },
    
    // 决定队伍回合顺序
    determineTeamTurnOrder() {
      // 简单实现：玩家总是先行动，然后是佣兵
      this.teamTurnOrder = this.teamMembers.map((member, index) => index)
      this.currentTurn = 0
    },
    
    // 结束战斗
    endBattle() {
      this.isBattling = false
      this.currentMonster = null
      if (this.battleInterval) {
        clearInterval(this.battleInterval)
        this.battleInterval = null
      }
    },
    
    // 添加战斗日志
    addBattleLog(message) {
      this.battleLog.push({
        message,
        timestamp: new Date().toLocaleTimeString()
      })
      
      // 保持日志长度
      if (this.battleLog.length > 50) {
        this.battleLog.shift()
      }
    },
    
    // 执行一次攻击
    performAttack() {
      if (!this.isBattling || !this.currentMonster) return
      
      const playerStore = usePlayerStore()
      const mercenaryStore = useMercenaryStore()
      
      // 获取当前行动的队伍成员
      const currentMember = this.teamMembers[this.teamTurnOrder[this.currentTurn]]
      
      // 如果当前成员已死亡，跳到下一个成员
      if (!currentMember || !currentMember.isAlive) {
        this.nextTurn()
        return
      }
      
      // 根据成员类型执行不同的攻击逻辑
      if (currentMember.type === 'player') {
        this.performPlayerAttack(playerStore)
      } else if (currentMember.type === 'mercenary') {
        this.performMercenaryAttack(currentMember, mercenaryStore)
      }
      
      // 进入下一个回合
      this.nextTurn()
      
      // 如果怪物还活着，怪物进行反击
      if (this.currentMonster.currentHealth > 0) {
        this.performMonsterAttack()
      }
    },
    
    // 执行玩家攻击
    performPlayerAttack(playerStore) {
      // 有30%几率使用技能（如果有可用技能）
      const shouldUseSkill = Math.random() < 0.3 && playerStore.skills.length > 0
      
      if (shouldUseSkill) {
        // 随机选择一个可用技能
        const availableSkills = playerStore.skills.filter(skill => 
          playerStore.isSkillAvailable(skill.id)
        )
        
        if (availableSkills.length > 0) {
          const randomSkill = availableSkills[Math.floor(Math.random() * availableSkills.length)]
          this.useSkill(randomSkill.id)
          return
        }
      }
      
      // 普通攻击
      const playerDamage = Math.max(1, playerStore.totalAttack - this.currentMonster.defense / 2)
      this.currentMonster.currentHealth -= playerDamage
      this.totalDamage += playerDamage
      
      this.addBattleLog(`${playerStore.name} 对 ${this.currentMonster.name} 造成 ${playerDamage} 点伤害`)
      
      // 检查怪物是否死亡
      if (this.currentMonster.currentHealth <= 0) {
        this.defeatMonster()
      }
    },
    
    // 执行佣兵攻击
    performMercenaryAttack(mercenaryMember, mercenaryStore) {
      // 获取佣兵实例
      const mercenary = mercenaryStore.mercenaries.find(m => m.id === mercenaryMember.id)
      if (!mercenary) return
      
      // 有30%几率使用技能（如果有可用技能）
      const shouldUseSkill = Math.random() < 0.3 && mercenary.skills && mercenary.skills.length > 0
      
      if (shouldUseSkill) {
        // 随机选择一个技能
        const randomSkill = mercenary.skills[Math.floor(Math.random() * mercenary.skills.length)]
        this.useMercenarySkill(mercenary, randomSkill.id)
        return
      }
      
      // 普通攻击
      const mercenaryDamage = Math.max(1, mercenary.attack - this.currentMonster.defense / 2)
      this.currentMonster.currentHealth -= mercenaryDamage
      this.totalDamage += mercenaryDamage
      
      this.addBattleLog(`佣兵 ${mercenary.name} 对 ${this.currentMonster.name} 造成 ${mercenaryDamage} 点伤害`)
      
      // 检查怪物是否死亡
      if (this.currentMonster.currentHealth <= 0) {
        this.defeatMonster()
      }
    },
    
    // 执行怪物攻击
    performMonsterAttack() {
      const playerStore = usePlayerStore()
      const mercenaryStore = useMercenaryStore()
      
      // 随机选择一个活着的队伍成员作为攻击目标
      const aliveMembers = this.teamMembers.filter(member => member.isAlive)
      
      if (aliveMembers.length === 0) {
        // 所有队员都已阵亡
        this.addBattleLog('整个队伍被击败了！')
        this.totalDefeats++
        this.startResurrectionTimer()
        return
      }
      
      const targetMember = aliveMembers[Math.floor(Math.random() * aliveMembers.length)]
      
      // 计算伤害
      let targetDefense = 0
      if (targetMember.type === 'player') {
        targetDefense = playerStore.totalDefense
      } else {
        const mercenary = mercenaryStore.mercenaries.find(m => m.id === targetMember.id)
        targetDefense = mercenary ? mercenary.defense : 0
      }
      
      const monsterDamage = Math.max(1, this.currentMonster.attack - targetDefense / 2)
      
      // 应用伤害
      if (targetMember.type === 'player') {
        playerStore.health -= monsterDamage
        this.addBattleLog(`${this.currentMonster.name} 对 ${playerStore.name} 造成 ${monsterDamage} 点伤害`)
        
        // 更新队伍成员状态
        targetMember.health = playerStore.health
        targetMember.isAlive = playerStore.health > 0
        
        // 检查玩家是否死亡
        if (playerStore.health <= 0) {
          this.addBattleLog(`${playerStore.name} 被击败了！`)
          
          // 检查是否还有其他活着的队员
          if (this.teamMembers.filter(m => m.isAlive && m.type !== 'player').length === 0) {
            this.totalDefeats++
            this.startResurrectionTimer()
          }
        }
      } else {
        // 佣兵受到伤害
        const mercenary = mercenaryStore.mercenaries.find(m => m.id === targetMember.id)
        if (mercenary) {
          mercenary.health -= monsterDamage
          this.addBattleLog(`${this.currentMonster.name} 对佣兵 ${mercenary.name} 造成 ${monsterDamage} 点伤害`)
          
          // 更新队伍成员状态
          targetMember.health = mercenary.health
          targetMember.isAlive = mercenary.health > 0
          
          // 检查佣兵是否死亡
          if (mercenary.health <= 0) {
            this.addBattleLog(`佣兵 ${mercenary.name} 被击败了！`)
            
            // 检查是否还有其他活着的队员
            if (this.teamMembers.filter(m => m.isAlive).length === 0) {
              this.totalDefeats++
              this.startResurrectionTimer()
            }
          }
        }
      }
    },
    
    // 进入下一个回合
    nextTurn() {
      this.currentTurn = (this.currentTurn + 1) % this.teamTurnOrder.length
    },
    
    // 使用技能
    useSkill(skillId) {
      if (!this.isBattling || !this.currentMonster) return
      const playerStore = usePlayerStore()
      
      const skillUsed = playerStore.useSkill(skillId)
      
      if (skillUsed) {
        const skill = playerStore.classSkills.find(s => s.id === skillId)
        if (skill) {
          let skillDamage = 0
          let skillEffect = ''
          
          // 根据技能类型处理不同效果
          switch (skill.type) {
            case 'physical':
              // 物理伤害（受攻击力影响）
              skillDamage = Math.max(1, skill.damage + playerStore.attack - this.currentMonster.defense / 2)
              this.currentMonster.currentHealth -= skillDamage
              this.totalDamage += skillDamage
              skillEffect = `造成 ${skillDamage} 点物理伤害`
              break
              
            case 'fire':
            case 'ice':
            case 'lightning':
            case 'holy':
              // 属性伤害（受魔法攻击影响）
              skillDamage = Math.max(1, skill.damage + playerStore.magicAttack - this.currentMonster.magicDefense / 2)
              this.currentMonster.currentHealth -= skillDamage
              this.totalDamage += skillDamage
              skillEffect = `造成 ${skillDamage} 点${this.getElementName(skill.type)}伤害`
              break
              
            case 'poison':
              // 毒伤害 + 持续伤害效果
              skillDamage = Math.max(1, skill.damage - this.currentMonster.defense / 3)
              this.currentMonster.currentHealth -= skillDamage
              this.totalDamage += skillDamage
              
              // 添加持续伤害效果
              if (!this.currentMonster.statusEffects) this.currentMonster.statusEffects = []
              this.currentMonster.statusEffects.push({
                type: 'poison',
                damage: skill.dotDamage || 5,
                duration: skill.dotDuration || 3,
                remaining: skill.dotDuration || 3
              })
              skillEffect = `造成 ${skillDamage} 点伤害并施加中毒效果`
              break
              
            case 'heal':
              // 治疗效果（受魔法攻击影响）
              const healAmount = skill.heal + playerStore.magicAttack / 2
              playerStore.health = Math.min(playerStore.health + healAmount, playerStore.maxHealth)
              skillEffect = `恢复 ${healAmount} 点生命值`
              break
              
            case 'resurrection':
              // 复活效果
              skillEffect = `准备复活队友`
              break
              
            case 'trap':
              // 陷阱伤害
              skillDamage = Math.max(1, skill.damage)
              this.currentMonster.currentHealth -= skillDamage
              this.totalDamage += skillDamage
              skillEffect = `陷阱造成 ${skillDamage} 点伤害`
              break
              
            case 'summon':
              // 召唤效果
              skillEffect = `召唤野兽协助战斗`
              break
              
            case 'stealth':
              // 隐身效果
              skillEffect = `进入隐身状态`
              break
              
            default:
              skillDamage = Math.max(1, skill.damage || 10)
              this.currentMonster.currentHealth -= skillDamage
              this.totalDamage += skillDamage
              skillEffect = `造成 ${skillDamage} 点伤害`
          }
          
          // 优化技能使用显示，突出显示技能名称
          this.addBattleLog(`【技能】使用 <span class="skill-name" style="color: ${this.getSkillTypeColor(skill.type)}; font-weight: bold;">${skill.name}</span>！${skillEffect}`)
          
          // 检查怪物是否死亡
          if (this.currentMonster.currentHealth <= 0) {
            this.defeatMonster()
            return
          }
        }
      } else {
        // 技能不可用，使用普通攻击
        this.performAttack()
      }
    },
    
    // 获取元素名称
    getElementName(elementType) {
      const elementNames = {
        fire: '火焰',
        ice: '冰霜',
        lightning: '闪电',
        holy: '神圣',
        poison: '毒素'
      }
      return elementNames[elementType] || elementType
    },
    
    // 获取技能类型对应的颜色
    getSkillTypeColor(skillType) {
      const typeColors = {
        physical: '#d32f2f',    // 物理 - 深红色
        fire: '#ff5722',        // 火焰 - 橙红色
        ice: '#03a9f4',         // 冰霜 - 浅蓝色
        lightning: '#ffeb3b',   // 闪电 - 黄色
        holy: '#ffc107',        // 神圣 - 琥珀色
        poison: '#4caf50',      // 毒素 - 绿色
        heal: '#8bc34a',        // 治疗 - 浅绿色
        resurrection: '#9c27b0', // 复活 - 紫色
        trap: '#795548',        // 陷阱 - 棕色
        summon: '#3f51b5',      // 召唤 - 靛蓝色
        stealth: '#607d8b'      // 隐身 - 蓝灰色
      }
      return typeColors[skillType] || '#2196f3' // 默认蓝色
    },
    
    // 佣兵使用技能
    useMercenarySkill(mercenary, skillId) {
      if (!this.isBattling || !this.currentMonster) return
      
      // 获取技能信息
      const skill = mercenary.skills.find(s => s.id === skillId)
      if (!skill) return
      
      // 假设我们有一个获取技能详情的函数
      const skillDetails = this.getMercenarySkillDetails(skillId)
      if (!skillDetails) return
      
      // 检查魔法值是否足够
      if (mercenary.mana < (skillDetails.manaCost || 0)) {
        this.addBattleLog(`佣兵 ${mercenary.name} 魔法值不足，无法使用 ${skillDetails.name}`)
        return
      }
      
      // 消耗魔法值
      mercenary.mana -= (skillDetails.manaCost || 0)
      
      // 根据技能类型处理不同效果
      let skillDamage = 0
      let skillEffect = ''
      
      switch (skillDetails.type) {
        case 'physical':
          // 物理伤害
          skillDamage = Math.max(1, skillDetails.damage + mercenary.attack - this.currentMonster.defense / 2)
          this.currentMonster.currentHealth -= skillDamage
          this.totalDamage += skillDamage
          skillEffect = `造成 ${skillDamage} 点物理伤害`
          break
          
        case 'magic':
          // 魔法伤害
          skillDamage = Math.max(1, skillDetails.damage + mercenary.magicAttack - this.currentMonster.magicDefense / 2)
          this.currentMonster.currentHealth -= skillDamage
          this.totalDamage += skillDamage
          skillEffect = `造成 ${skillDamage} 点魔法伤害`
          break
          
        case 'heal':
          // 治疗效果
          const healAmount = skillDetails.heal + mercenary.magicAttack / 2
          
          // 随机选择一个队友进行治疗
          const aliveMembers = this.teamMembers.filter(member => member.isAlive && member.health < member.maxHealth)
          
          if (aliveMembers.length > 0) {
            const targetMember = aliveMembers[Math.floor(Math.random() * aliveMembers.length)]
            
            if (targetMember.type === 'player') {
              const playerStore = usePlayerStore()
              playerStore.heal(healAmount)
              targetMember.health = playerStore.health
            } else {
              const mercenaryStore = useMercenaryStore()
              const targetMerc = mercenaryStore.mercenaries.find(m => m.id === targetMember.id)
              if (targetMerc) {
                mercenaryStore.healMercenary(targetMerc.id, healAmount)
                targetMember.health = targetMerc.health
              }
            }
            
            skillEffect = `为 ${targetMember.name} 恢复了 ${healAmount} 点生命值`
          } else {
            skillEffect = `尝试治疗，但所有队友都是满血状态`
          }
          break
          
        default:
          // 默认伤害
          skillDamage = Math.max(1, skillDetails.damage || 10)
          this.currentMonster.currentHealth -= skillDamage
          this.totalDamage += skillDamage
          skillEffect = `造成 ${skillDamage} 点伤害`
      }
      
      this.addBattleLog(`佣兵 ${mercenary.name} 使用了 ${skillDetails.name}，${skillEffect}`)
      
      // 检查怪物是否死亡
      if (this.currentMonster.currentHealth <= 0) {
        this.defeatMonster()
      }
    },
    
    // 获取佣兵技能详情
    getMercenarySkillDetails(skillId) {
      // 这里应该从技能配置中获取详细信息
      // 暂时返回一些默认值
      return {
        id: skillId,
        name: skillId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        damage: 15,
        manaCost: 10,
        type: 'physical'
      }
    },
    
    // 击败怪物
    defeatMonster() {
      const playerStore = usePlayerStore()
      const mercenaryStore = useMercenaryStore()
      const goldEarned = this.currentMonster.gold
      const expEarned = this.currentMonster.exp
      
      // 玩家获得金币和经验
      playerStore.gold += goldEarned
      playerStore.addExperience(expEarned)
      
      // 活着的佣兵也获得经验（减少25%）
      const mercenaryExp = Math.floor(expEarned * 0.75)
      const activeMercenaries = this.teamMembers.filter(
        member => member.type === 'mercenary' && member.isAlive
      )
      
      activeMercenaries.forEach(mercenary => {
        mercenaryStore.addMercenaryExperience(mercenary.id, mercenaryExp)
      })
      
      // 更新统计数据
      this.totalKills++
      this.totalGoldEarned += goldEarned
      this.totalExpEarned += expEarned
      
      // 生成战斗日志
      this.addBattleLog(`击败了 ${this.currentMonster.name}！获得 ${goldEarned} 金币和 ${expEarned} 经验`)
      
      if (activeMercenaries.length > 0) {
        this.addBattleLog(`每个佣兵获得了 ${mercenaryExp} 经验`)
      }
      
      // 掉落物品
      if (this.currentMonster.drops && Math.random() < 0.3) {
        const dropItem = this.currentMonster.drops[0]
        playerStore.addToInventory(dropItem)
        this.addBattleLog(`获得了 ${dropItem.name}！`)
      }
      
      // 保存游戏状态
      playerStore.autoSave()
      mercenaryStore.autoSave()
      
      // 继续战斗或结束
      if (this.backgroundBattle) {
        this.startNewBackgroundBattle()
      } else {
        this.endBattle()
      }
    },
    
    // 开始后台战斗
    startBackgroundBattle(monster) {
      this.backgroundBattle = true
      this.backgroundBattleResults = []
      // 直接设置战斗状态，避免递归调用 startBattle
      this.isBattling = true
      this.currentMonster = { ...monster, currentHealth: monster.health }
      this.battleLog = []
      this.addBattleLog(`开始与 ${monster.name} 战斗！`)
      
      // 启动后台战斗循环
      this.backgroundBattleInterval = setInterval(() => {
        // 如果正在复活倒计时，暂停战斗
        if (this.resurrectionTime > 0) {
          return
        }
        
        const playerStore = usePlayerStore()
        playerStore.reduceCooldowns() // 减少技能冷却
        this.performAttack()
      }, 2000) // 每2秒攻击一次
    },
    
    // 开始新的后台战斗
    startNewBackgroundBattle() {
      if (!this.backgroundBattle) return
      
      // 确保复活计时器已停止
      this.stopResurrectionTimer()
      
      // 这里可以随机选择怪物或者继续打同一种怪物
      // 暂时使用当前怪物类型重新开始
      const newMonster = { ...this.currentMonster }
      newMonster.currentHealth = newMonster.health
      
      // 直接设置战斗状态，避免递归调用 startBattle
      this.isBattling = true
      this.currentMonster = { ...newMonster, currentHealth: newMonster.health }
      this.battleLog = []
      this.addBattleLog(`开始与 ${newMonster.name} 战斗！`)
    },
    
    // 停止后台战斗
    stopBackgroundBattle() {
      this.backgroundBattle = false
      if (this.backgroundBattleInterval) {
        clearInterval(this.backgroundBattleInterval)
        this.backgroundBattleInterval = null
      }
      this.stopResurrectionTimer()
      this.endBattle()
    },
    
    // 获取后台战斗状态
    getBackgroundBattleStatus() {
      if (!this.backgroundBattle) return null
      
      return {
        isRunning: this.backgroundBattle,
        totalKills: this.totalKills,
        totalDefeats: this.totalDefeats,
        totalGold: this.totalGoldEarned,
        totalExp: this.totalExpEarned,
        currentMonster: this.currentMonster ? this.currentMonster.name : '无',
        resurrectionTime: this.resurrectionTime
      }
    },
    
    // 开始复活计时器
    startResurrectionTimer() {
      this.resurrectionTime = 10
      
      // 清除现有的计时器
      if (this.resurrectionTimer) {
        clearInterval(this.resurrectionTimer)
      }
      
      this.resurrectionTimer = setInterval(() => {
        this.resurrectionTime--
        this.addBattleLog(`复活倒计时: ${this.resurrectionTime}秒`)
        
        if (this.resurrectionTime <= 0) {
          this.completeResurrection()
        }
      }, 1000)
    },
    
    // 完成复活
    completeResurrection() {
      const playerStore = usePlayerStore()
      const mercenaryStore = useMercenaryStore()
      
      // 清除计时器
      if (this.resurrectionTimer) {
        clearInterval(this.resurrectionTimer)
        this.resurrectionTimer = null
      }
      
      // 复活玩家和佣兵
      playerStore.health = playerStore.maxHealth
      mercenaryStore.fullRestoreMercenaries()
      
      // 更新队伍成员状态
      this.teamMembers.forEach(member => {
        member.isAlive = true
        if (member.type === 'player') {
          member.health = playerStore.health
          member.mana = playerStore.mana
        } else {
          const mercenary = mercenaryStore.mercenaries.find(m => m.id === member.id)
          if (mercenary) {
            member.health = mercenary.health
            member.mana = mercenary.mana
          }
        }
      })
      
      this.addBattleLog('队伍全员复活，继续战斗！')
      
      // 如果是后台战斗，继续新的战斗
      if (this.backgroundBattle) {
        this.startNewBackgroundBattle()
      }
    },
    
    // 停止复活计时器
    stopResurrectionTimer() {
      if (this.resurrectionTimer) {
        clearInterval(this.resurrectionTimer)
        this.resurrectionTimer = null
      }
      this.resurrectionTime = 0
    }
  },
  
  // 持久化配置
  persist: {
    key: 'battle-storage',
    paths: [
      'backgroundBattle', 
      'totalKills', 
      'totalDefeats', 
      'totalGoldEarned', 
      'totalExpEarned',
      'totalDamage'
    ]
  }
})