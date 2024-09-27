
//属性唤醒
const attribute_data=[
	{
		"name":"智力",
		"list":[
			{"open_num":0,"color":"blue","name":"+4","probability":0.01},
			{"open_num":0,"color":"red","name":"+3","probability":0.05},
			{"open_num":0,"color":"green","name":"+2","probability":0.3},
			{"open_num":0,"color":"purple","name":"+1","probability":0.64},
		],
	},
	{
		"name":"体质",
		"list":[
			{"open_num":0,"color":"blue","name":"+4","probability":0.01},
			{"open_num":0,"color":"red","name":"+3","probability":0.05},
			{"open_num":0,"color":"green","name":"+2","probability":0.3},
			{"open_num":0,"color":"purple","name":"+1","probability":0.64},
		],
	},
	{
		"name":"力量",
		"list":[
			{"open_num":0,"color":"blue","name":"+4","probability":0.01},
			{"open_num":0,"color":"red","name":"+3","probability":0.05},
			{"open_num":0,"color":"green","name":"+2","probability":0.3},
			{"open_num":0,"color":"purple","name":"+1","probability":0.64},
		],
	},
	{
		"name":"敏捷",
		"list":[
			{"open_num":0,"color":"blue","name":"+4","probability":0.01},
			{"open_num":0,"color":"red","name":"+3","probability":0.05},
			{"open_num":0,"color":"green","name":"+2","probability":0.3},
			{"open_num":0,"color":"purple","name":"+1","probability":0.64},
		],
	},
];

//武器强化数值
const upList = [
	{"probability":0.888888,"low_probability":0.9,"gold":2000,"yellow":10,"green":10,"four_num":1,"eight_num":0},
	{"probability":0.823529,"low_probability":0.85,"gold":4000,"yellow":14,"green":14,"four_num":1,"eight_num":0},
	{"probability":0.75,"low_probability":0.8,"gold":8000,"yellow":20,"green":20,"four_num":1,"eight_num":0},
	{"probability":0.34737,"low_probability":0.54,"gold":15000,"yellow":27,"green":27,"four_num":1,"eight_num":0},
	{"probability":0.206225,"low_probability":0.405,"gold":30000,"yellow":38,"green":38,"four_num":0,"eight_num":1},
	{"probability":0.097826,"low_probability":0.27,"gold":50000,"yellow":54,"green":54,"four_num":0,"eight_num":1},
	{"probability":0.04562,"low_probability":0.18,"gold":75000,"yellow":75,"green":75,"four_num":0,"eight_num":1},
	{"probability":0.012016,"low_probability":0.09,"gold":125000,"yellow":105,"green":105,"four_num":0,"eight_num":1},
	{"probability":0.003089,"low_probability":0.045,"gold":250000,"yellow":148,"green":148,"four_num":0,"eight_num":1},
	{"probability":0.000502,"low_probability":0.018,"gold":500000,"yellow":207,"green":207,"four_num":0,"eight_num":1},
];

//强化次数,金币,黄矿,绿矿,失败次数,武器强化等级,4点数量,8点数量,武器索引值
let up_num = 0,gold = 0,yellow = 0,green = 0, failure_num = 0,weapon_lv = 0,four_num = 0,eight_num = 0 ,weapon_index = 0;
//使用low卷数量
let weapon_low_up_num=0;
//使用防暴卷数量
let weapon_up_num=0;
//当前唤醒值
let now_attribute;
//强化初始成功概率
let probability = 0.000000;
//low初始成功概率
let low_probability = 0.000000;
//唤醒列表
let wakeUpList = [];
let boss_weapon_list = [];
let stop = false;
let weapon_low_up_stop = false;
let weapon_up_stop = false;

let w_clean_num = 0;
let w_clean_u_num = 0;
let w_wake_up_num = 0;

//获得武器
function get_weapon_go(id){
	boss_weapon_list.unshift(id);
	$("[weapon_num_text]").html(`物品(1/${boss_weapon_list.length})`);
	$("[weapon_num_text]").attr("now_num",0);
	get_weapon(id);
}

let weapon_json_list = [];
$.getJSON(`json/weapon.json`).success(function(data){
	weapon_json_list=data;

	$(data).each(function(i,obj){
		$("[weapon_list]").append(`
			<div class="col-xs-3" btn_weapon onclick="get_weapon_go(${obj.id})">
				<img src="${obj.imgUrl}" alt="${obj.name}">
			</div>
		`);
	});
});

function get_weapon(index){
	$("[txt_div]").html("");
	if(index == null){
		layer.msg("武器id为空");
		console.log("武器id为空");
		return;
	}

	const weaponObj = weapon_json_list.find(obj => obj.id === parseInt(index));
	if(weaponObj == null){
		layer.msg("没有对应的武器"+index);
		console.log("没有对应的武器"+index);
		return;
	}
	up_num = 0,gold = 0,yellow = 0,green = 0, failure_num = 0,weapon_lv = 0,four_num = 0,eight_num = 0;
	//重置武器面板数值
	$("[bb_info]").remove();
	$("[up_u_weapon]").remove();

	weapon_index = index;
	wakeUpList = weaponObj.wakeUpList;

	let str = '<div class="alert alert-info" bb_info >';
	//武器名称
	str += '<span color_red attribute_name ></span><span color_red weapon_name>'+weaponObj.name+'</span><span color_red weapon_up_lv="0"></span></br>';
	//武器类型
	str += '<span style="color: aliceblue">'+weaponObj.type+'</span></br>';
	//武器基础攻击
	str += '<span style="color: aliceblue">基础攻击力:'+weaponObj.minAttack+'~'+weaponObj.maxAttack+'</span></br>';
	//攻击速度
	str += '<span style="color: aliceblue" w_attack_speed>攻击速度:'+weaponObj.attackSpeed+'</span>';
	//上词条属性
	str += join_weapon_abilities(weaponObj.abilities);
	//职业要求
	str += '<span job_span style="color: aliceblue">职业要求:'+weaponObj.job+'</span></br>';
	//等级要求
	str += '<span style="color: aliceblue">等级要求:150</span></br>';
	//品质
	str += '<span style="color: aliceblue">品质: <span color_red>史诗</span></span></br>';
	if(weaponObj.description != null){
		//描述
		str += '<span style="color: aliceblue" weapon_description>描述:</br> '+weaponObj.description+'</br></span>';
	}

	//洗词条次数
	str += `</br><span style="color: #b3b3b3">洗基础次数: <span w_clean_num>0</span>`;
	str += `</br><span style="color: #b3b3b3">洗黄字次数: <span w_clean_u_num>0</span>`;
	str += `</br><span style="color: #b3b3b3">技能唤醒次数: <span w_wake_up_num>0</span>`;
	// str += '</br><span style="color: #b3b3b3">穿洞次数: 0';

	$("[weapon_bottom_text]").html(weaponObj.name);
	$("[weapon_img]").attr("src",weaponObj.imgUrl)

	$("[weapon-attributes]").prepend(str);
	$("[weapon_roll_div]").removeClass("hide");
}

function join_weapon_abilities(list){
	let str ="<div w_abilities>";
	//组装属性值
	for(var i=0 ; i < list.length ; i++){
		var obj = list[i];
		var num = Math.floor(Math.random()*(obj.max-obj.min+1));
		var maxNum = obj.max;
		var minNum = obj.min;
		//最终计算出来的随机值
		var randomNum = obj.min + num;

		//缩进小数位
		maxNum = obj.fixed == null ? maxNum : (maxNum/obj.fixed);
		minNum = obj.fixed == null ? minNum : (minNum/obj.fixed);
		randomNum = obj.fixed == null ? randomNum : (randomNum/obj.fixed);

		//组装单位(例如 百分号)
		randomNum = randomNum+obj.cur;
		//承受伤害是减
		const addStr = obj.name === "承受伤害" ? '' : '+';
		str +=`<span style="color: #ffeaa5">${obj.name + addStr + randomNum}  (${minNum+'~'+maxNum})${obj.cur}</span><br>`;
	}
	str+="</div>";
	return str;
}

function getRandomValues(array, numValues) {
	const values = [];
	for (let i = 0; i < numValues; i++) {
		values.push(array[Math.floor(Math.random() * array.length)]);
	}
	// 去除重复的值（如果需要）
	return [...new Set(values)];
}

//0:智力 1:体质 2:力量 3:敏捷
const myArray = [0,1,2,3];
//混乱属性唤醒
function attribute_wake_up(numList){
	const weaponObj = weapon_json_list.find(obj => obj.id === parseInt(weapon_index));
	//没有武器
	if(weaponObj == null){
		return;
	}

	//随机数组中的1或2个值
	numList = numList == null ? getRandomValues(myArray,2) : numList;
	if(numList.length === 2){
		attribute_wake_up_list(numList);
	}else{
		attribute_wake_up_go(numList[0]);
	}
}

//多属性唤醒
function attribute_wake_up_list(numList){
	$("[attribute_div]").remove();

	let str = `<div attribute_div>`;

	let val_num = '';
	for(let j=0 ; j < numList.length ; j++) {
		let randomNum = Math.random().toFixed(2);
		//重置概率
		let attribute_probability = 0;
		const new_attribute_data_list = attribute_data[numList[0]].list;

		for (let i = 0; i < new_attribute_data_list.length; i++) {
			const new_attribute_data = new_attribute_data_list[i];
			if (i > 0) {
				attribute_probability = parseFloat(new_attribute_data.probability) + parseFloat(attribute_probability);
			} else {
				attribute_probability = parseFloat(new_attribute_data.probability);
			}
			attribute_probability = attribute_probability.toFixed(2);

			//数字是否匹配
			if (randomNum < attribute_probability) {
				//第一次是+3的话,则返回+2
				if(val_num === "+3"){
					val_num = new_attribute_data.name === '+4' || new_attribute_data.name === '+3'  ? '+2' :new_attribute_data.name;
				}else{
					val_num = new_attribute_data.name === '+4' ? '+3' :new_attribute_data.name;
				}

				str +=`
						<span  color_white>${attribute_data[numList[j]].name}${val_num}<br></span>
					`;
				break;
			}
		}
	}
	str +=`</div>`;
	$("[job_span]").before(str);

	const attribute_html = `${attribute_data[numList[0]].name}和${attribute_data[numList[1]].name}`;
	//武器属性唤醒值
	$("[attribute_name]").html(`${attribute_html}的`);

	if($(`[attribute_num_${attribute_html}]`) === null || $(`[attribute_num_${attribute_html}]`).length === 0){
		$("[txt_div]").prepend(`
				<div class="col-xs-6" >${attribute_html}</div><div class="col-xs-6" >次数:<span attribute_num_${attribute_html}>1</span></div>
			`);
	}else{
		let	attribute_num =  $(`[attribute_num_${attribute_html}]`).html();
		$(`[attribute_num_${attribute_html}]`).html(`${ parseInt(attribute_num)+1}`);
	}
}

//属性唤醒
function attribute_wake_up_go(num){
	const weaponObj = weapon_json_list.find(obj => obj.id === parseInt(weapon_index));
	//没有武器
	if(weaponObj == null){
		return;
	}

	let randomNum = Math.random().toFixed(2);
	let attribute_probability = 0;

	$("[attribute_div]").remove();

	let str = `<div attribute_div>`;

	for(let i=0 ; i < attribute_data[num].list.length ; i++) {
		const data = attribute_data[num].list[i];
		if (i > 0) {
			attribute_probability = parseFloat(data.probability) + parseFloat(attribute_probability);
		} else {
			attribute_probability = parseFloat(data.probability);
		}
		attribute_probability = attribute_probability.toFixed(2);

		//数字是否匹配
		if (randomNum < attribute_probability) {
			now_attribute = data.name;
			str +=`
					<span  color_white>${attribute_data[num].name}${data.name === '+4' ? '+3' :data.name}<br></span>
				`;
			break;
		}
	}

	str +=`</div>`;
	$("[job_span]").before(str);

	//武器属性值
	$("[attribute_name]").html(`${attribute_data[num].name}的`);

	const attribute_num_html =`attribute_num_${attribute_data[num].name}`;

	if($(`[${attribute_num_html}]`) === null || $(`[${attribute_num_html}]`).length === 0){
		$("[txt_div]").prepend(`
				<div class="col-xs-6" >${attribute_data[num].name}</div><div class="col-xs-6" >次数:<span ${attribute_num_html}>1</span></div>
			`);
	}else{
		let	attribute_num = $(`[${attribute_num_html}]`).html();
		$(`[${attribute_num_html}]`).html(`${ parseInt(attribute_num)+1}`);
	}
}

//洗黄字
function up_u_weapon(){
	// if(Number($("[weapon_up_lv]").attr("weapon_up_lv")) !== 10){
	// 	errorMsg("武器还没+10哦");
	// 	return;
	// }
	const weaponObj = weapon_json_list.find(obj => obj.id === parseInt(weapon_index));

	if(weaponObj == null){
		return;
	}

	$("[up_u_weapon_div]").remove();
	var arr = weaponObj.possibleRandomStats;
	var value1 = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
	var value2 = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];

	var list = [];
	list.push(value1);
	list.push(value2);

	//还原数据
	arr.push(value1);
	arr.push(value2);

	let str = "<div up_u_weapon_div>";
	//组装属性值
	for(var i=0 ; i < list.length ; i++){
		var obj = list[i];
		var num = Math.floor(Math.random()*(obj.max-obj.min+1));
		var maxNum = obj.max;
		var minNum = obj.min;
		//最终计算出来的随机值
		var randomNum = obj.min + num;

		//缩进小数位
		maxNum = obj.fixed == null ? maxNum : (maxNum/obj.fixed);
		minNum = obj.fixed == null ? minNum : (minNum/obj.fixed);
		randomNum = obj.fixed == null ? randomNum : (randomNum/obj.fixed);

		//组装单位(例如 百分号)
		randomNum = randomNum+obj.cur;
		str +='<span style="color: #fffd43">'+ obj.name +'+' + randomNum + ' (' + minNum+'~'+maxNum+')'+obj.cur+'</span><br>';
	}

	str += "</div>";

	if($("[attribute_div]").length != 0){
		$("[attribute_div]").before(str);
	}else{
		$("[job_span]").before(str);
	}

	//洗黄字词条次数+1
	w_clean_u_num++;
	$("[w_clean_u_num]").html(w_clean_u_num);
}

//洗上词条
function weapon_clean_up(){
	const weaponObj = weapon_json_list.find(obj => obj.id === parseInt(weapon_index));
	if(weaponObj == null){
		layer.msg("没有对应的武器"+index);
		console.log("没有对应的武器"+index);
		return;
	}
	//移除上词条
	$("[w_abilities]").remove();

	//洗基础词条次数+1
	w_clean_num++;
	$("[w_clean_num]").html(w_clean_num);

	//在攻击速度后面增加
	$("[w_attack_speed]").after(join_weapon_abilities(weaponObj.abilities));
}

//技能唤醒
function wake_up(){
	if(wakeUpList == null){
		return ;
	}
	$("[wake_up]").remove();

	//技能唤醒次数+1
	w_wake_up_num++;
	$("[w_wake_up_num]").html(w_wake_up_num);

	//随机数组中的值
	const wakeUp = wakeUpList[Math.floor(Math.random() * wakeUpList.length)];
	const percentage = wakeUp.item[Math.floor(Math.random() * wakeUp.item.length)];
	$("[weapon_description]").after(`<span style="color: #fe0f7a;" wake_up>${wakeUp.name+(wakeUp.name ==='治疗' ? '+' : '造成伤害+')}${percentage}%</br></span>`);
}

//防暴强化
function weapon_up(){
	const up_num = $("[input_weapon_up_num]").val();
	if(up_num === null || up_num === '' || up_num.trim() ==='' ){
		$("[txt_div]").html(`<div class="col-xs-12">请输入强化等级!</div>`);
		return ;
	}

	$("[weapon_up]").attr("disabled",true);
	if(weapon_up_stop){
		weapon_up_stop = false;
		$("[weapon_up]").removeAttr("disabled");
		return ;
	}
	if(Number($("[weapon_up_lv]").attr("weapon_up_lv")) !== 10){
		$("[txt_div]").html("");
	}

	weapon_up_go();
	setTimeout(function() {
		weapon_up();
	}, 50); // 1000毫秒等于1秒
}
function weapon_up_go(num){
	//武器已经强化到+10啦
	if(Number($("[weapon_up_lv]").attr("weapon_up_lv")) === 10 || $("[weapon_up_lv]").length === 0){
		weapon_up_stop = true;
		return ;
	}
	weapon_up_num++;
	//初始化
	init_up();

	let str = '<hr>';
	// 生成一个0到1之间的随机数
	let randomNum = Math.random();
	//是否精炼成功
	if(randomNum <= probability){
		weapon_lv++;
		str+='<div class="col-xs-6" color_green>精炼+'+weapon_lv+'成功!<br></div>';

		if(weapon_lv !== 10){
			//成功后重置概率
			probability = upList[weapon_lv].probability;
		}
	}else {
		//获取强化精炼数据
		const upObj = upList[weapon_lv];
		//失败次数
		failure_num++;
		//失败累加基础强化概率
		probability = upObj.probability+probability;
		//成功概率不能大于1
		probability = probability >= 1 ? 1 : probability;
		str+="<div class='col-xs-6' color_red>精炼失败!<br></div>";
	}
	str+="<div class='col-xs-6'>当前成功率"+probability+"</div><hr>";
	//组装数据
	txt_div_prepend(str);

	if(Number($("[weapon_up_lv]").attr("weapon_up_lv")) === Number(num)){
		weapon_low_up_stop=true;
	}
}

function weapon_low_up(){
	const low_num = $("[input_weapon_low_up_num]").val();
	if(low_num === null || low_num === '' || low_num.trim() ==='' ){
		$("[txt_div]").html(`<div class="col-xs-12">请输入强化等级!</div>`);
		return ;
	}

	$("[weapon_up]").attr("disabled",true);
	if(weapon_low_up_stop){
		weapon_low_up_stop = false;
		$("[weapon_up]").removeAttr("disabled");
		return ;
	}

	if(Number($("[weapon_up_lv]").attr("weapon_up_lv")) !== 10){
		$("[txt_div]").html("");
	}
	weapon_low_up_go(low_num);
	setTimeout(function() {
		weapon_low_up();
	}, 50); // 1000毫秒等于1秒
}

function weapon_low_up_go(num){
	//武器已经强化到+10啦
	if(Number($("[weapon_up_lv]").attr("weapon_up_lv")) === 10 || $("[weapon_up_lv]").length === 0){
		weapon_low_up_stop=true;
		$("[txt_div]").html(`<div class="col-xs-12">没有选择武器!</div>`);
		return ;
	}

	weapon_low_up_num++;

	//初始化
	init_up();

	let str = '<hr>';
	// 生成一个0到1之间的随机数
	let randomNum = Math.random();
	//是否精炼成功
	if(randomNum <= low_probability){
		//升级
		weapon_lv++;
		const now_weapon_lv = weapon_lv === 0 ? "" : ("+" + weapon_lv);
		str+='<div class="col-xs-6" color_green>low精炼'+now_weapon_lv+'成功!</div>';
	}else {
		//失败次数
		failure_num++;

		//+3以前失败不掉级
		if(weapon_lv > 3){
			//降级
			weapon_lv--;
			str+='<div class="col-xs-6" color_red>low精炼失败!掉级至+'+weapon_lv+'</div>';
		}else{
			str+='<div class="col-xs-6" color_red>low精炼失败!+3以前失败不掉级</div>';
		}
	}
	str+='<div class="col-xs-6">当前成功率'+low_probability+'</div><hr>';
	//组装数据
	txt_div_prepend(str);

	if(Number($("[weapon_up_lv]").attr("weapon_up_lv")) === Number(num)){
		weapon_low_up_stop=true;
	}
}

function txt_div_prepend(str){
	$("[weapon_up_lv]").html(weapon_lv === 0 ? "" : ("+"+weapon_lv));
	$("[weapon_up_lv]").attr("weapon_up_lv",weapon_lv);
	//获取强化精炼数据
	const upObj = upList[weapon_lv === 10 ? 9 : weapon_lv];

	str+=`
			<div class="col-xs-6">强化总次数:${up_num}</div><div class="col-xs-6">失败次数:${failure_num}</div>
			<div class="col-xs-6">low卷强化次数:${weapon_low_up_num}</div><div class="col-xs-6">防暴卷强化次数:${weapon_up_num}</div>
			<hr>
			<div class="col-xs-6">总共消耗</div><div class="col-xs-6">本次消耗</div>
			<div class="col-xs-6">金币:${gold}<br>黄矿:${yellow}<br>绿矿:${green}<br>四点骰子:${four_num}<br>六点骰子:${eight_num}</div>
			<div class="col-xs-6">金币:${upObj.gold}<br>黄矿:${upObj.yellow}<br>绿矿:${upObj.green}<br>四点骰子:${upObj.four_num}<br>六点骰子:${upObj.eight_num}</div>
		`;
	//强化内容
	$("[txt_div]").html(str);
}

function init_up(){
	//获取当前强化等级
	weapon_lv = $("[weapon_up_lv]").attr("weapon_up_lv");
	weapon_lv = Number(weapon_lv);
	//获取强化精炼数据
	const upObj = upList[weapon_lv];
	if(upObj == null){
		return ;
	}
	up_num++;
	gold += upObj.gold;
	yellow += upObj.yellow;
	green += upObj.green;

	//当前等级大于5消耗8点
	if(weapon_lv < 5){
		four_num++;
	}else{
		eight_num++;
	}

	//第一次强化初始值
	if(probability === 0.000000){
		probability = upObj.probability;
	}

	//第一次强化初始值
	low_probability = upObj.low_probability;
	return upObj;
}
