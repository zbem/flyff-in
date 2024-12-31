$(document).ready(function() {
	//页面元素可移动
	WinMove();

	// 当页面加载完成后，给 body 元素添加自定义光标样式
	$('body').addClass('custom-cursor');
});

//宠物外观
const pet_file_list = [
	"petgumi.png",
	"petangel01_03.png",
	"petbarbarylion01_02.png",
	"petdragon01_02.png",
	"peteagle01_02.png",
	"petninefox01_02.png",
	"petunicorn01_02.png",
	"petwhitetiger01_02.png",
	"petangel01_02.png",
	"petbarbarylion01_01.png",
	"petdragon01_01.png",
	"peteagle01_01.png",
	"petninefox01_01.png",
	"petunicorn01_01.png",
	"petwhitetiger01_01.png",
	"petangel01_01.png",
	"petbarbarylion01_00.png",
	"petdragon01_00.png",
	"peteagle01_00.png",
	"petninefox01_00.png",
	"petunicorn01_00.png",
	"petwhitetiger01_00.png",
];

const pet_lv_item = [
	{"lvStr":"F级","money":"2000000","list":[{"pet_lv":1,"probability":1}]},
	{"lvStr":"E级","money":"6200000","list":[{"pet_lv":2,"probability":0.3},{"pet_lv":1,"probability":0.7}]},
	{"lvStr":"D级","money":"20800000","list":[{"pet_lv":3,"probability":0.18},{"pet_lv":2,"probability":0.25},{"pet_lv":1,"probability":0.57}]},
	{"lvStr":"C级","money":"59550000","list":[{"pet_lv":4,"probability":0.06},{"pet_lv":3,"probability":0.18},{"pet_lv":2,"probability":0.31},{"pet_lv":1,"probability":0.45}]},
	{"lvStr":"B级","money":"123800000","list":[{"pet_lv":5,"probability":0.04},{"pet_lv":4,"probability":0.1},{"pet_lv":3,"probability":0.18},{"pet_lv":2,"probability":0.28},{"pet_lv":1,"probability":0.4}]},
	{"lvStr":"A级","money":"226050000","list":[{"pet_lv":7,"probability":0.02},{"pet_lv":6,"probability":0.04},{"pet_lv":5,"probability":0.07},{"pet_lv":4,"probability":0.12},{"pet_lv":3,"probability":0.17},{"pet_lv":2,"probability":0.23},{"pet_lv":1,"probability":0.35}]},
	{"lvStr":"S级","money":"557050000","list":[{"pet_lv":9,"probability":0.01},{"pet_lv":8,"probability":0.02},{"pet_lv":7,"probability":0.04},{"pet_lv":6,"probability":0.06},{"pet_lv":5,"probability":0.09},{"pet_lv":4,"probability":0.13},{"pet_lv":3,"probability":0.17},{"pet_lv":2,"probability":0.21},{"pet_lv":1,"probability":0.27}]},
];

const incubate_pet = [
	{"name":"狐狸","value":1,"attributeStr":"智力","value_list":[1,2,4,7,11,15,17,24,33],"cur":""},
	{"name":"老虎","value":1,"attributeStr":"力量","value_list":[1,2,4,7,11,15,17,24,33],"cur":""},
	{"name":"兔子","value":1,"attributeStr":"敏捷","value_list":[1,2,4,7,11,15,17,24,33],"cur":""},
	{"name":"狮子","value":1,"attributeStr":"体质","value_list":[1,2,4,7,11,15,17,24,33],"cur":""},
	{"name":"飞龙","value":7,"attributeStr":"攻击力","value_list":[7,13,27,47,73,95,113,165,220],"cur":""},
	{"name":"狮鹫兽","value":6,"attributeStr":"防御","value_list":[6,12,24,42,66,88,102,140,198],"cur":""},
	{"name":"独角兽","value":96,"attributeStr":"hp","value_list":[96,191,383,670,1053,1356,1628,2539,3161],"cur":""},
	{"name":"天使","value":1,"attributeStr":"暴击率","value_list":[1,2,3,4,5,6,7,8,9],"cur":"%"},
	{"name":"帝王蟹","value":2,"attributeStr":"暴击伤害","value_list":[2,3,4,5,6,7,9,11,16],"cur":"%"}
];

//当前等级
let now_pet_lv = 0;
//当前总属性
let now_all_attribute = 0;
//当前宠物名称
let now_pet_name = "";


//洗外观
function pet_show(){
	if($("[now_pet_img]") == null || $("[now_pet_img]").length === 0){
		alert("没有宠物");
		return ;
	}

	const pet_box = blindBox().drawItem();

	$("[now_pet_img]").attr("src","img/items/"+pet_box.name);
	$("[now_pet_img]").attr("alt",pet_box.id);
}

function blindBox() {
	//次数
	pet_box_num++;
	const totalItems = 28;
	const lowProbabilityItem = [0]; // 低概率物品索引
	const lowProbability = 0.005; // 低概率物品被抽中的概率

	// 计算其他物品的平均概率
	const averageProbability = (1 - lowProbability*lowProbabilityItem.length) / (totalItems - lowProbabilityItem.length);

	// 创建一个数组来存储每个物品及其对应的概率
	const items = Array.from({ length: pet_file_list.length }, (_, index) => {
		if (lowProbabilityItem.includes(index)) {
			return { id: index+1, probability: lowProbability,name:pet_file_list[index] };
		} else {
			return { id: index+1, probability: averageProbability,name:pet_file_list[index] };
		}
	});

	// 抽选物品的函数
	function drawItem() {
		let item_probability = 0;
		for (let i = 0; i < items.length; i++) {
			if(i > 0){
				item_probability = parseFloat(items[i].probability) + parseFloat(item_probability);
			}else{
				item_probability = parseFloat(items[i].probability);
			}
			item_probability = item_probability.toFixed(2);
			// 生成一个0到1之间的随机数
			let randomNum = Math.random().toFixed(2);

			//数字是否匹配
			if(randomNum < item_probability){
				item_probability = (item_probability*100).toFixed(2);
				if(lowProbabilityItem.includes(i)){
					//洗出了稀有宠
					$("[show_pet_msg_div]").prepend(`
						<div class="col-xs-12" >
							<img style="width: 30px; height: 30px;" alt="${items[i].id}" src="img/items/${items[i].name}">第${pet_box_num}次洗出了稀有宠,概率:${item_probability}%
						</div>`);

					$("[pet_btn]").attr("disabled",true);
					layer.msg(`恭喜你,第${pet_box_num}次洗出了稀有宠物外观!`,{
						icon:1,
						time: 0,
						btn: ['确认'],
						yes: function(index){
							$("[pet_btn]").attr("disabled",false);
							layer.close(index);
						}});

				}else{
					//洗了几次
					$("[show_pet_msg_div]").prepend(`
						<div class="col-xs-12" >
							<img style="width: 30px; height: 30px;" alt="${items[i].id}" src="img/items/${items[i].name}">第${pet_box_num}次,概率:${item_probability}%
						</div>`);
				}

				return items[i];
			}
		}
	}

	return {
		items: items.map(item => item.id), // 返回物品ID数组，用于展示或其他用途
		drawItem: drawItem // 返回抽选物品的函数
	};
}


//一键完美宠
function one_pet(){
	//孵化宠
	incubate();

	setTimeout(function() {
		//宠物升级
		pet_up_go();
	}, 100); // 1000毫秒等于1秒
}

function pet_up_go(){
	setTimeout(function() {
		//宠物升级
		pet_up();
		//献祭
		sacrifice_go();
	}, 100); // 1000毫秒等于1秒
}

function sacrifice_go(){
	if(pet_up_stop && sacrifice_stop){
		sacrifice_stop = false;
		pet_up_stop = false;
		return ;
	}

	if(sacrifice_stop){
		sacrifice_stop = false;
		pet_up_go()
		return ;
	}

	setTimeout(function() {
		//献祭
		sacrifice();
		sacrifice_go();
	}, 100); // 1000毫秒等于1秒
}

//孵化蛋
function incubate(){
	$("[txt_div]").html("");
	$("[pet_msg_div]").html("");
	//献祭次数清0
	pet_num = 0;
	//随机数组中的值
	const pet = incubate_pet[Math.floor(Math.random() * incubate_pet.length)];
	//当前宠物
	now_pet = pet;

	let str = `
			<div class="alert alert-info" pet_info  pet_lv="1" >
				<div class="row">
					<div class="col-xs-12" ><span style="color: #da6443">${pet.name}</span></div><br>
					<div class="col-xs-5" ><img style="width: 80px; height: 70px;" now_pet_img alt="${pet.name}" img_${pet.name} src="img/pet/${pet.name}.png"></div>
					<div class="col-xs-7">等级:<span style="color: #fb37b1" pet_lv_str>F级</span></div><br>
					<div class="col-xs-7">属性:<span style="color: #fb37b1" >${pet.attributeStr}+</span><span pet_value>${pet.value}</span><span pet_cur>${pet.cur}</span></div>
				</div>
				<div class="row">
					<div pet_img_div><label lv_f级 pet_val="${pet.value}"><img img_lv img_lv_1  src="img/pet/等级1.png" alt="1"><br>+${pet.value}${pet.cur}</label></div>
				</div>
			</div>
		`;
	$("[txt_div]").prepend(str);
}

//宠物升级
function pet_up(){
	//献祭次数清0
	pet_num = 0;
	pet_lv = $("[pet_lv]").attr("pet_lv");
	if(pet_lv == null || pet_lv > 6){
		sacrifice_stop = true;
		pet_up_stop = true;
		return;
	}
	const pet = pet_lv_item[pet_lv];

	// 生成一个0到1之间的随机数
	let randomNum = Math.random().toFixed(2);

	let pet_probability =0;
	for(let i=0 ; i < pet.list.length ; i++) {
		if(i > 0){
			pet_probability = parseFloat(pet.list[i].probability) + parseFloat(pet_probability);
		}else{
			pet_probability = parseFloat(pet.list[i].probability);
		}
		pet_probability = pet_probability.toFixed(2);

		//数字是否匹配
		if(randomNum < pet_probability){
			now_lv = pet.list[i].pet_lv;
			const pet_lv_value = now_pet.value_list[pet.list[i].pet_lv - 1];
			const img_html = $("[img_lv_"+pet.list[i].pet_lv+"]")[0].outerHTML;
			$("[pet_img_div]").append(`<label lv_${pet_lv_item[Number(pet_lv)].lvStr} pet_val="${pet_lv_value}">${img_html}<br>+${pet_lv_value+now_pet.cur}</label>`);
			break;
		}
	}

	$("[pet_lv_str]").html(pet_lv_item[Number(pet_lv)].lvStr);
	pet_lv++;
	$("[pet_lv]").attr("pet_lv",pet_lv);

	console.log(pet_lv);

	//属性更新
	let now_pet_value = 0;
	$("[pet_val]").each(function(){
		now_pet_value+= parseInt($(this).attr("pet_val"));
	});
	$("[pet_value]").html(now_pet_value);
}

//献祭
function sacrifice(){
	pet_lv = $("[pet_lv]").attr("pet_lv");
	if(pet_lv == null || pet_lv === 1){
		sacrifice_stop = true;
		return;
	}

	//s级 继续洗
	if(pet_lv > 6){
		pet_lv = 6;
	}

	const pet = pet_lv_item[pet_lv];
	if(pet == null || now_lv >= pet.list.length){
		sacrifice_stop = true;
		//layer.msg("已经是最高的等级!",{time:2000,skin:"layer_msg_s"});
		return;
	}

	// 生成一个0到1之间的随机数
	let randomNum = Math.random().toFixed(2);
	let pet_probability = 0;

	for(var i=0 ; i <= pet.list.length ; i++) {
		const lv = pet.list[i].pet_lv;
		if(lv <= now_lv){
			break;
		}

		if(i > 0){
			pet_probability = parseFloat(pet.list[i].probability) + parseFloat(pet_probability);
		}else{
			pet_probability = parseFloat(pet.list[i].probability);
		}
		pet_probability = pet_probability.toFixed(2);

		//数字是否匹配
		if(randomNum < pet_probability){
			now_lv = lv;
			$("[lv_"+pet.lvStr+"]").remove();
			var pet_lv_value =now_pet.value_list[pet.list[i].pet_lv-1];
			$("[pet_img_div]").append(`<label lv_${pet.lvStr} pet_val="${pet_lv_value}"><img img_lv src="img/pet/等级${pet.list[i].pet_lv}.png" alt="等级"><br>+${pet_lv_value+now_pet.cur}</label>`);
			break;
		}
	}

	//献祭次数
	pet_num++;
	$("[pet_"+pet.lvStr+"]").remove();

	let html_money = parseFloat(pet.money*0.00000021).toFixed(2);
	//统计数据
	$("[pet_msg_div]").append('<div class="col-xs-12" pet_'+pet.lvStr+' >'+pet.money+'金币/次,'+html_money+'元/次</br>'+pet.lvStr+'献祭次数:'+pet_num+'</div>');

	let now_pet_value = 0;
	$("[pet_val]").each(function(){
		now_pet_value+= parseInt($(this).attr("pet_val"));
	});

	//属性更新
	$("[pet_value]").html(now_pet_value);
}


