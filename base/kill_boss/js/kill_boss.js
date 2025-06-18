	let kill_num = 0;
	let kill_hai_num = 0;
	let kill_hai_boss_stop = false;
	let kill_boss_stop = false;
	let boss_weapon_list = [];
	let weapon_json_list = [];
	let class_json_list = [];
	let skill_json_list = [];

	const TYPE_ENUM = {
		sword:{name1:"单手剑",name2:"双手剑"},
		axe:{name1:"单手斧",name2:"双手斧"},
		bow:{name2:"弓"},
		yoyo:{name2:"轮子"},
		staff:{name2:"法杖"},
		knuckle:{name1:"拳套"},
		wand:{name1:"魔杖"},
		stick:{name2:"魔棒"}
	}

	const PARAMETER_ENUM = {
		null:{name:"NULL",fixed:1,cur:"%"},
		criticaldamage:{name:"暴击伤害",fixed:10,cur:"%"},
		criticalchance:{name:"暴击率",fixed:10,cur:"%"},
		attack:{name:"攻击力",fixed:1,cur:"%"},
		attackspeed:{name:"攻击速度",fixed:1,cur:"%"},
		maxhp:{name:"增加HP",fixed:1,cur:"%"},
		stealhp:{name:"生命偷取",fixed:10,cur:"%"},
		block:{name:"格挡",fixed:1,cur:"%"},
		blockpenetration:{name:"格挡穿透",fixed:1,cur:"%"},
		allelementsmastery:{name:"全元素精通",fixed:1,cur:"%"},
		decreasedcastingtime:{name:"释法速度",fixed:1,cur:"%"},
		skillchance:{name:"技能",fixed:1,cur:"%"},
		pvpdamage:{name:"pvp伤害",fixed:1,cur:"%"},
		pvedamage:{name:"pve伤害",fixed:1,cur:"%"},
		incomingdamage:{name:"承受伤害",fixed:1,cur:"%"},
		skilldamage:{name:"技能伤害",fixed:1,cur:"%"},
		speed:{name:"移动速度",fixed:1,cur:"%"},
		healing:{name:"治疗",fixed:1,cur:"%"},
		reflectdamage:{name:"反射伤害",fixed:1,cur:"%"},
		sta:{name:"体质",fixed:1, cur:""},
		str:{name:"力量",fixed:1, cur:""},
		dex:{name:"敏捷",fixed:1, cur:""},
		int:{name:"智力",fixed:1, cur:""}
	};

	$(document).ready(function() {
		//页面元素可移动
		WinMove();

		// 当页面加载完成后，给 body 元素添加自定义光标样式
		$('body').addClass('custom-cursor');
	});

	$.getJSON(`json/kill_boss.json`).success(function(data){
		weapon_json_list = data;
		console.log(weapon_json_list);
	});

	$.getJSON(`json/skill.json`).success(function(data){
		skill_json_list = data;
		console.log(skill_json_list);
	});

	$.getJSON(`json/class.json`).success(function(data){
		class_json_list = data;
		console.log(class_json_list);
	});

	function previous_weapon(){
		let nowNum = $("[weapon_num_text]").attr("now_num");
		if(nowNum == null){
			return ;
		}
		nowNum--;
		if(nowNum < 0){
			return ;
		}

		get_weapon(boss_weapon_list[nowNum]);
		$("[weapon_num_text]").html(`物品(${nowNum+1}/${boss_weapon_list.length})`);
		$("[weapon_num_text]").attr("now_num",nowNum);
	}

	function next_weapon(){
		let nowNum = $("[weapon_num_text]").attr("now_num");
		if(nowNum == null){
			return ;
		}
		nowNum++;
		if(nowNum >= boss_weapon_list.length){
			return;
		}

		get_weapon(boss_weapon_list[nowNum]);
		$("[weapon_num_text]").html(`物品(${nowNum+1}/${boss_weapon_list.length})`);
		$("[weapon_num_text]").attr("now_num",nowNum);
	}

	function get_weapon_go(id){
		boss_weapon_list.unshift(id);
		$("[weapon_num_text]").html(`物品(1/${boss_weapon_list.length})`);
		$("[weapon_num_text]").attr("now_num",0);
		get_weapon(id);
	}

	function get_weapon(index){
		$("[txt_div]").html("");
		if(index == null){
			console.log("get_weapon没有对应的武器类型"+parseInt(index));
			return;
		}

		const weaponObj = weapon_json_list.find(obj => obj.id === parseInt(index));
		if(weaponObj == null){
			console.log("get_weapon没有对应的武器类型"+index);
			return;
		}
		up_num = 0,gold = 0,yellow = 0,green = 0, failure_num = 0,weapon_lv = 0,four_num = 0,eight_num = 0;
		//重置武器面板数值
		$("[bb_info]").remove();
		$("[up_u_weapon]").remove();

		weapon_index = index;

		//武器类型
		var typeObj = TYPE_ENUM[weaponObj.subcategory];

		let str = `
			<div class="alert alert-info" bb_info >
				<span color_red attribute_name ></span><span color_red weapon_name>${weaponObj.name.cns}</span><span color_red weapon_up_lv="0"></span></br>
				<span style="color: aliceblue">${weaponObj.twoHanded ? typeObj.name2 : typeObj.name1}</span></br>
				<span style="color: aliceblue">基础攻击力:${weaponObj.minAttack}~${weaponObj.maxAttack}</span></br>
				<span style="color: aliceblue">攻击速度:${getAttackSpeed(weaponObj.attackSpeed)}</span></br>
		`

		const list = weaponObj.abilities;

		//组装属性值
		for(var i=0 ; i < list.length ; i++){
			var obj = list[i];
			//属性
			var parameterObj = PARAMETER_ENUM[obj.parameter];

			var maxNum = parameterObj.name === "承受伤害" ? obj.add : obj.addMax;
			var minNum = parameterObj.name === "承受伤害" ? obj.addMax : obj.add;
			//小数变整数
			maxNum = parameterObj.fixed == null ? maxNum : (maxNum * parameterObj.fixed);
			minNum = parameterObj.fixed == null ? minNum : (minNum * parameterObj.fixed);

			//最终计算出来的随机值
			var randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

			const skill = obj.skill;
			if(skill != null){
				const skillObj = skill_json_list.find(skill_obj => skill_obj.id === skill);
				//击晕区分PVE和PVP
				if(skill === 7599){
					parameterObj.name = skillObj.name.cns+"概率"+(obj.pve ? "(PVE)" : obj.pvp ? "(PVP)" : "");
				}else{
					parameterObj.name = skillObj.name.cns;
				}
			}

			//整数变小数
			maxNum = parameterObj.fixed == null ? maxNum : (maxNum/parameterObj.fixed);
			minNum = parameterObj.fixed == null ? minNum : (minNum/parameterObj.fixed);
			randomNum = parameterObj.fixed == null ? randomNum : (randomNum/parameterObj.fixed);

			//组装单位(例如 百分号)
			randomNum = randomNum+parameterObj.cur;
			//承受伤害是减
			const addStr = parameterObj.name === "承受伤害" ? '' : '+';
			str +=`<span style="color: #ffeaa5">${parameterObj.name + addStr + randomNum} (${obj.add}~${obj.addMax})${parameterObj.cur}</span><br>`;
		}
		str += `
			<span job_span style="color: aliceblue">职业要求:${getClassName(weaponObj.class)}</span></br>
			<span style="color: aliceblue">等级要求:${weaponObj.level}</span></br>
			<span style="color: aliceblue">品质: <span ${getRarityColor(weaponObj.rarity)}>${getRarity(weaponObj.rarity)}</span></span></br>
			<span style="color: aliceblue" weapon_description>描述:</br> ${weaponObj.description.cns}</span>
		`;

		$("[weapon_bottom_text]").html(weaponObj.name.cns);
		$("[weapon_img]").attr("src","../../img/items/"+weaponObj.icon);

		$("[weapon-attributes]").prepend(str);
		$("[weapon_roll_div]").removeClass("hide");
	}

	function kill_hai_boss(){
		$("[txt_div]").html("");
		$("[kill_boss_btn]").attr("disabled",true);
		if(kill_hai_boss_stop){
			kill_hai_boss_stop = false;
			$("[kill_boss_btn]").removeAttr("disabled");
			return ;
		}
		kill_hai_boss_go();
		setTimeout(function() {
			kill_hai_boss();
		}, 20); // 1000毫秒等于1秒
	}

	function kill_hai_boss_go(){
		let color_str;
		//清空兽王可汗击杀数量
		kill_num = 0;
		kill_hai_num++;

		let randomValue = 0;

		for (var i = 0; i < hai_boss_drop.length; i++) {
			let randomNum = Math.random().toFixed(3);
			const items = hai_boss_drop[i];

			if (randomNum < items.probability) {
				items.num++;
				randomValue++;
				//武器
				if(items.rarity === 'unique' && items.category === 'WEAPON'){
					get_weapon_go(items.id);
					kill_hai_boss_stop = true;
				}
			}
		}

		//升序排序
		hai_boss_drop = hai_boss_drop.sort((a, b)=> b.num - a.num);
		let item_str = '<div class="col-xs-12">统计:<br>';
		item_str += "击杀数量:"+kill_hai_num+"<br>";
		for (var t = 0; t < hai_boss_drop.length; t++) {
			const items = hai_boss_drop[t];
			if(items.num > 0){
				color_str = 'style="color:' + (items.rarity==='common' ? '#78d9ff' : items.rarity === 'uncommon'? '#c46200' : items.rarity === 'veryrare' || items.rarity === 'unique' ? '#d20000' : items.rarity === 'probability' ? 'green' : '') + '"';
				item_str += `<img peter src="../../img/items/${items.icon}" style="width: 20px; height: 20px;" alt="${items.name}"><span ${color_str}>${items.name}</span>*${items.num}<br>`;
			}
		}
		item_str += '</div>';
		$("[item_msg_div]").html(item_str);
	}

	function kill_boss(){
		$("[txt_div]").html("");
		$("[kill_boss_btn]").attr("disabled",true);
		if(kill_boss_stop){
			kill_boss_stop = false;
			$("[kill_boss_btn]").removeAttr("disabled");
			return ;
		}
		kill_boss_go();
		setTimeout(function() {
			kill_boss();
		}, 20); // 1000毫秒等于1秒
	}

	function kill_boss_go() {
		$("[pet_msg_div]").html("");

		let color_str;
		//清空海岛boss击杀数量
		kill_hai_num = 0;
		kill_num++;

		let randomValue = 0;

		for (var i = 0; i < boss_drop.length; i++) {
			let randomNum = Math.random().toFixed(3);
			const items = boss_drop[i];

			if (randomNum < items.probability) {
				items.num = items.probability === 1 ? items.num + getRandomInt(8, 12) : items.num + 1;
				randomValue++;
				//武器
				if (items.rarity === 'unique' && items.category === 'WEAPON') {
					get_weapon_go(items.id);
					kill_boss_stop = true;
				}
			}
		}

		//升序排序
		boss_drop = boss_drop.sort((a, b) => a.num - b.num);
		let item_str = `<div class="col-xs-12">统计:<br>`;
		item_str += "击杀数量:" + kill_num + "<br>";
		for (let t = 0; t < boss_drop.length; t++) {
			const items = boss_drop[t];
			if (items.num > 0) {
				color_str = 'style="color:' + (items.rarity === 'common' ? '#78d9ff' : items.rarity === 'uncommon' ? '#c46200' : items.rarity === 'veryrare' || items.rarity === 'unique' ? '#d20000' : items.rarity === 'probability' ? 'green' : '') + '"';
				item_str += `<img peter src="../../img/items/${items.icon}" style="width: 20px; height: 20px;" alt="${items.name}"><span ${color_str}>${items.name}</span>*${items.num}<br>`;
			}
		}
		item_str += '</div>';
		$("[item_msg_div]").html(item_str);
	}

	function getClassName(classId){
		const classObj = class_json_list.find(obj => obj.id === parseInt(classId));

		if(classObj == null){
			console.log("职业数据为空");
			return;
		}

		return classObj.name.cns;
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function getRarityColor(rarity){
		if(rarity == null){
			console.log("rarity 武器品质没值");
			return;
		}
		if(rarity === "ultimate"){
			return "weapon_u_color";
		}
		if(rarity === "unique"){
			return "color_red";
		}
	}

	function getRarity(rarity){
		if(rarity == null){
			console.log("rarity 武器品质没值");
			return;
		}
		if(rarity === "ultimate"){
			return "Ultimate";
		}
		if(rarity === "unique"){
			return "Unique";
		}
	}

	function getAttackSpeed(attackSpeed){
		if(attackSpeed == null){
			console.log("attackSpeed 攻速没值");
			return;
		}
		if(attackSpeed === "normal"){
			return "通用";
		}
		if(attackSpeed === "slow"){
			return "慢";
		}
		if(attackSpeed === "veryslow"){
			return "非常慢";
		}
		if(attackSpeed === "fast"){
			return "快速";
		}
		if(attackSpeed === "veryfast"){
			return "非常快";
		}
	}
