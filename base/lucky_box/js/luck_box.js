$(document).ready(function() {
	//页面元素可移动
	WinMove();

	// 当页面加载完成后，给 body 元素添加自定义光标样式
	$('body').addClass('custom-cursor');

});

const aList = ["石头", "剪刀", "布"];
let win_num = 0;
let click_num = 0;
let egg_id ;
//升蛋次数
let egg_num = 0;

const egg_list = [
	{
		id:0,
		name: "3rd Anniversary Egg I",
		items:[{
			name: "Gold Pill (B)*5",
			icon: "genfoopilgold.png",
			color: "#00aa00"
		}],
		success: 0.9,
		break: 0,
		failure: 0.1
	},
	{
		id:1,
		name: "3rd Anniversary Egg II",
		items:[
			{
			name: "Gold Pill (B)*5",
			icon: "genfoopilgold.png",
			color: "#00aa00"
			},
			{
			name: "Silverwork (B) Select Box",
			icon: "syssysscrbxluck.png",
			color: "#78d9ff"
			}
		],
		success: 0.6,
		break: 0,
		failure: 0.4
	},
	{
		id:2,
		name: "3rd AnniversaryEgg III",
		items:[
			{
				name: "Gold Pill (B)*5",
				icon: "genfoopilgold.png",
				color: "#00aa00"
			},
			{
				name: "Goldwork (B) Select Box",
				icon: "syssysscrbxluck.png",
				color: "#78d9ff"
			},
			{
				name: "Silverwork (B) Select Box",
				icon: "syssysscrbxluck.png",
				color: "#78d9ff"
			}
		],
		success: 0.5,
		break: 0,
		failure: 0.5
	},
	{
		id:3,
		name: "3rd AnniversaryEgg IV",
		items:[
			{
				name: "无敌技能卷",
				icon: "chrsysscractive.png",
				color: "#78d9ff"
			},
			{
				name: "力量之石*2",
				icon: "chrsysscrupcut.png",
				color: "#78d9ff"
			}
		],
		success: 0.4,
		break: 0.01,
		failure: 0.59
	},
	{
		id:4,
		name: "3rd AnniversaryEgg V",
		items:[
			{
				name: "祝福卷轴",
				icon: "syssysscrblessi.png",
				color: "#78d9ff"
			},
			{
				name: "无敌活力多或无敌魔力多",
				icon: "syssysscrbxpot.png",
				color: "#78d9ff"
			}
		],
		success: 0.2,
		break: 0.03,
		failure: 0.77
	},
	{
		id:5,
		name: "3rd AnniversaryEgg VI",
		items:[
			{
				name: "复活卷轴*2",
				icon: "syssysscrresurr.png",
				color: "#78d9ff"
			},
			{
				name: "Scroll of Multi-Shop*5",
				icon: "scroll_of_multi_shop.png",
				color: "#78d9ff"
			},
			{
				name: "属性卷轴箱*2",
				icon: "syssysscrbxscro.png",
				color: "#78d9ff"
			},
			{
				name: "ES经验加成卷轴",
				icon: "syssysscrampes.png",
				color: "#78d9ff"
			}
		],
		success: 0.15,
		break: 0.05,
		failure: 0.8
	},
	{
		id:6,
		name: "3rd AnniversaryEgg VII",
		items:[
			{
				name: "武器唤醒卷轴*5",
				icon: "scrollskillawakeweap.png",
				color: "#78d9ff"
			},
			{
				name: "盾牌唤醒卷轴*5",
				icon: "scrollskillawakeshield.png",
				color: "#78d9ff"
			},
			{
				name: "Goldwork(B)Select Box",
				icon: "syssysscrbxluck.png",
				color: "#78d9ff"
			},
			{
				name: "Silverwork (B) Select Box",
				icon: "syssysscrbxluck.png",
				color: "#78d9ff"
			},
			{
				name: "Candle Weapon Selection Box",
				icon: "syssysscrbxluck.png",
				color: "#78d9ff"
			}
		],
		success: 0.05,
		break: 0.1,
		failure: 0.85
	},
	{
		id:7,
		name: "3rd AnniversaryEgg VIII",
		items:[
			{
				name: "武器唤醒卷轴*5",
				icon: "scrollskillawakeweap.png",
				color: "#78d9ff"
			},
			{
				name: "盾牌唤醒卷轴*5",
				icon: "scrollskillawakeshield.png",
				color: "#78d9ff"
			},
			{
				name: "防护卷轴选择箱*5",
				icon: "syssysscrbxpot.png",
				color: "#78d9ff"
			},
			{
				name: "3rd Anniversary Boat",
				icon: "ridridanivboat.png",
				color: "#78d9ff"
			},
			{
				name: "I am PANG!",
				icon: "syssysscrbxluck.png",
				color: "#78d9ff"
			}
		]
	}
];

//买蛋
function egg_init(id){
	$("[lucky_box_msg_div]").html("");

	const egg_obj = egg_list.find(obj => obj.id === parseInt(id));
	if(egg_obj == null){
		layer.msg(`没有egg1`);
		return;
	}
	//当前等级
	egg_id = id;

	$("[lucky_box_msg_div]").html(`
		<div class="row" box_div>
			<div class="col-xs-12" style="padding-bottom: 10px" egg_num>
				升蛋次数:第${egg_num}次
			</div>
			<div class="col-xs-12">
				<img alt="image" src="../../img/items/thirdanniversaryegg.png">${egg_obj.name}<br>
				${egg_obj.items.map(item=>`<img alt="image" src="../../img/items/${item.icon}">${item.name}<br>`).join('')}
			</div>
		</div>
	`);

}

//升蛋
function egg_go(){
	if(egg_id === 7){
		layer.msg(`已经是最高级了!`);
		return;
	}
	const egg_obj = egg_list.find(obj => egg_id === parseInt(obj.id));
	if(egg_obj == null){
		layer.msg(`选一个蛋吧!`);
		return;
	}
	//升蛋次数
	egg_num++;
	//统计数字
	$("[egg_num]").html(`升蛋次数:第${egg_num}次`);

	//成功概率
	let success_probability = parseFloat(egg_obj.success);
	success_probability = success_probability.toFixed(2);
	let randomNum = Math.random().toFixed(2);

	//数字是否匹配
	if(randomNum < success_probability){
		egg_id++;
		const new_egg_obj = egg_list.find(obj => egg_id === parseInt(obj.id));

		if(egg_id === 7){
			$("[box_btn]").attr("disabled",true);
			layer.msg(`恭喜你,升到了最高级!`,{
			icon:1,
			time: 0,
			btn: ['确认'],
			yes: function(index){
				//点击确认后复原
				$("[box_btn]").attr("disabled",false);
				layer.close(index);
			}});
		}

		$("[txt_div]").prepend(`
		<div class="row" box_div>
			<div class="col-xs-12">
				${egg_id === 7 ? '牛逼!':''}恭喜第${egg_num}次升级成功至${new_egg_obj.name}!
			</div>
		</div>
		`);
		//初始化数据
		egg_init(egg_id);
	}else{
		let failure_probability = parseFloat(egg_obj.failure);
		//没有成功的话  失败 = 失败+成功概率
		failure_probability = parseFloat(failure_probability) + parseFloat(success_probability);

		failure_probability = failure_probability.toFixed(2);
		console.log("---1----");
		console.log(failure_probability);
		console.log(randomNum);
		console.log("----2---");
		if(randomNum < failure_probability) {
			egg_id--;
			if(egg_id <= 0){
				egg_id = 0;
			}

			$("[txt_div]").prepend(`
			<div class="row" box_div>
				<div class="col-xs-12">
					失败了!
				</div>
			</div>
			`);
			egg_init(egg_id);
		}else{
			$("[box_btn]").attr("disabled",true);
			layer.msg(`蛋碎了!重来吧!`,{
				icon:1,
				time: 0,
				btn: ['确认'],
				yes: function(index){
					//点击确认后复原
					$("[box_btn]").attr("disabled",false);
					layer.close(index);
			}});
			$("[txt_div]").prepend(`
			<div class="row" box_div>
				<div class="col-xs-12">
					蛋碎了!重来吧!
				</div>
			</div>
			`);
			$("[lucky_box_msg_div]").html("");
		}
	}
}

//石头,剪刀,布
function rock_paper_scissors(you){
	click_num++;

	//随机数组中的值
	const ai = Math.floor(Math.random() * aList.length);

	let str = ``;
	if(ai === you){
		str += `<span style="font-weight: bold; color: gold">平手了</span>`;
	}

	if((you === 0 && ai === 1) || (you === 1 && ai === 2) || (you === 2 && ai === 0)){
		win_num++;
		str += `<span style="font-weight: bold; color: green">你赢了</span>`;
	}

	if((you === 0 && ai === 2) || (you === 1 && ai === 0) || (you === 2 && ai === 1)){
		win_num=0
		str += `<span style="font-weight: bold; color: red">你输了</span>`;
	}
	str += `,你出了:<span style="font-weight: bold; color: green">${aList[you]}</span>,系统出了:<span style="font-weight: bold; color: red">${aList[ai]}</span>`;
	$("[box_top_div]").html(`连赢次数:${win_num},总次数:${click_num}`);

	$("[txt_div]").prepend(`
		<div class="row" box_div>
			<div class="col-xs-12">
				${str}
			</div>
		</div>
	`);
}

let is_go = true;

function lucky_box(){
	let randomNum = Math.random().toFixed(4);
	let luck_box_probability = 0;

	for(let i=0 ; i < jewel_box.list.length ; i++) {
		const data = jewel_box.list[i];
		if(i > 0){
			luck_box_probability = parseFloat(data.probability) + parseFloat(luck_box_probability);
		}else{
			luck_box_probability = parseFloat(data.probability);
		}
		luck_box_probability = luck_box_probability.toFixed(4);

		//数字是否匹配
		if(randomNum < luck_box_probability){
			lucky_box_num++
			data.open_num++;
			$("[txt_div]").prepend(`
				<div class="row" box_div>
					<div class="col-xs-12">
						<img src="../../img/items/${data.icon}" alt="幸运盒子" >恭喜第${lucky_box_num}次抽中 <span style="font-weight: bold; color: ${data.color}">${data.name}</span>!
					</div>
				</div>
			`);

			//抽中符文
			if(data.color === "#e8cd51"){
				is_go = false;
				$("[box_btn]").attr("disabled",true);
				layer.msg(`恭喜你,抽到了${data.name}!`,{
					icon:1,
					time: 0,
					btn: ['确认'],
					yes: function(index){
						//点击确认后复原
						is_go = true;
						$("[box_btn]").attr("disabled",false);
						layer.close(index);
					}});
			}
			break;
		}
	}

	let str = `<div class="row">`;

	str+=`
		<div class="col-xs-12" style="padding-bottom: 10px">
			统计:总数${lucky_box_num}个
		</div>
	`

	for(let i=0 ; i < jewel_box.list.length ; i++) {
		const data = jewel_box.list[i];
		if(data.open_num > 0){
			str+=`
				<div class="col-xs-12">
					<img src="../../img/items/${data.icon}" alt="幸运盒子"  >抽中<span style="font-weight: bold;color: ${data.color}">${data.name}</span>*${data.open_num}个 !
				</div>
			`;
		}
	}

	str+=`</div>`;

	$("[lucky_box_msg_div]").html(str);

	const box_num = $("[box_div]").length;

	if(box_num > 20){
		for (let i = 20 ; i <box_num ; i ++)
			$("[box_div]")[i].remove();
	}

	//继续抽
	if(is_go){
		setTimeout(function() {
			lucky_box();
		}, 1); // 1000毫秒等于1秒
	}

}