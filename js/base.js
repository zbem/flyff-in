	/**
	 https://api.flyff.com/image/class/{style}/{fileName}

	 职业
	 初心者:https://api.flyff.com/class/9686

	 圣职者:https://api.flyff.com/class/8962
	 暴力技师:https://api.flyff.com/class/7424
	 守护使者:https://api.flyff.com/class/9389

	 弓箭手:https://api.flyff.com/class/9098
	 暗杀:https://api.flyff.com/class/3545
	 游侠:https://api.flyff.com/class/9295

	 魔导士:https://api.flyff.com/class/9581
	 精神使者:https://api.flyff.com/class/5709
	 元素:https://api.flyff.com/class/9150

	 战士:https://api.flyff.com/class/764
	 刀锋使者:https://api.flyff.com/class/2246
	 骑士:https://api.flyff.com/class/5330

	 //图片地址
	 https://api.flyff.com/image/item/weaswocrystal.png
	 //物品地址
	 https://api.flyff.com/item/15714
	 //怪物地址
	 https://api.flyff.com/monster/3947
	 //怪物图片
	 https://api.flyff.com/image/monster/{fileName}
	**/

	const dungeon_list = [
		{
			id:202404262200,
			star_time:"2024年4月26日 22:03:21",
			title_str: "2024年4月26日 22点荒野本",
			buff:[],
			sel_dungeon:2,//副本编号 dungeon_data_list  2.荒野
			sel_num: 8,//人数
			list:[
				{job:"骑士",name:"牛骑士"},
				{job:"精神",name:"牛精神"},
				{job:"游侠",name:"黑咩咩"},
				{job:"守护",name:"可爱的小游"},
				{job:"暗杀",name:"狂奔的蜗牛"},
				{job:"元素",name:"Cerous"},
				{job:"暴力",name:"芝麻糊"},
				{job:"守护",name:"雾海"},
			],
			item_list://分红物品
			[
				{name:"晶石",num:1,money:88000000,r_money:0,item_img:"1.png"},
			],
		},
		{
			id:202404262300,
			star_time:"2024年4月26日 23:04:00",
			title_str: "2024年4月26日 23点荒野本",
			buff:[1,2,4,5],
			sel_dungeon:2,//副本编号 dungeon_data_list  2.荒野
			sel_num: 8,//人数
			list:[
				{job:"骑士",name:"牛骑士"},
				{job:"精神",name:"牛精神"},
				{job:"游侠",name:"黑咩咩"},
				{job:"守护",name:"可爱的小游"},
				{job:"暗杀",name:"狂奔的蜗牛"},
				{job:"元素",name:"Cerous"},
				{job:"暴力",name:"芝麻糊"},
				{job:"守护",name:"雾海"},
			],

			item_list://分红物品
			[
				{name:"晶石",num:1,money:88000000,r_money:0,item_img:"1.png"},
				{name:"S宠",num:1,money:0,r_money:12.5,item_img:"2.png"},
			],
		},
		{
			id:202405072200,
			star_time:"2024年5月7日 22:00:00",
			title_str: "2024年5月7日 22点荒野本",
			buff:[1,2,4,5],
			sel_dungeon:2,//副本编号 dungeon_data_list  2.荒野
			sel_num: 8,//人数
			list:[
				{job:"骑士",name:"牛骑士"},
				{job:"元素",name:"逮虾户"},
				{job:"刀锋",name:"冠冠"},
				{job:"刀锋",name:"黑刀"},
				{job:"刀锋",name:"雾天"},
				{job:"守护",name:"可爱的小游"},
				{job:"暴力",name:"芝麻糊"},
				{job:"守护",name:"玉笛弟弟"},
			],
			item_list:[],//分红物品
		},
		{
			id:202405072300,
			star_time:"2024年5月7日 23:00:00",
			title_str: "2024年5月7日 23点荒野本",
			buff:[1,2,4,5],
			sel_dungeon:2,//副本编号 dungeon_data_list  2.荒野
			sel_num: 8,//人数
			list:[
				{job:"骑士",name:"牛骑士"},
				{job:"元素",name:"逮虾户"},
				{job:"刀锋",name:"冠冠"},
				{job:"刀锋",name:"黑刀"},
				{job:"刀锋",name:"雾天"},
				{job:"守护",name:"可爱的小游"},
				{job:"暴力",name:"芝麻糊"},
				{job:"守护",name:"玉笛弟弟"},
			],
			item_list://分红物品
				[
					{name:"S宠",num:1,money:0,r_money:0,item_img:"1.png"}
				],
		},

		//------------------------ 2024年5月8日 ------------------------//
		{
			id:202405082200,
			star_time:"2024年5月8日 22:00:00",
			title_str: "2024年5月8日 22点荒野本",
			buff:[1,2,4,5],
			sel_dungeon:2,//副本编号 dungeon_data_list  2.荒野
			sel_num: 8,//人数
			list:[
				{job:"骑士",name:"牛骑士"},
				{job:"元素",name:"多多"},
				{job:"刀锋",name:"冠冠"},
				{job:"暗杀",name:"狂奔的蜗牛"},
				{job:"游侠",name:"玉笛弟弟"},
				{job:"守护",name:"雾天"},
				{job:"守护",name:"可爱的小游"},
				{job:"暴力",name:"芝麻糊"},
			],
			item_list://分红物品
				[],
		},

		{
			id:202405082300,
			star_time:"2024年5月8日 23:00:00",
			title_str: "2024年5月8日 23点荒野本",
			buff:[1,2,4,5],
			sel_dungeon:2,//副本编号 dungeon_data_list  2.荒野
			sel_num: 8,//人数
			list:[
				{job:"骑士",name:"牛骑士"},
				{job:"元素",name:"多多"},
				{job:"刀锋",name:"冠冠"},
				{job:"暗杀",name:"狂奔的蜗牛"},
				{job:"游侠",name:"玉笛弟弟"},
				{job:"守护",name:"雾天"},
				{job:"守护",name:"可爱的小游"},
				{job:"暴力",name:"芝麻糊"},
			],
			item_list://分红物品
				[],
		},
	]

	const dungeon_buff_list=[
		{"id":"1","num":"5","name":"痛楚幻象",	 		"description":"所有怪物有几率连续攻击两次，但掉率增加。"},
		{"id":"2","num":"2","name":"谢丽德的庇护",      	"description":"所有怪物速度增加，但受到伤害增加。"},
		{"id":"3","num":"2","name":"心魔",	      		"description":"所有怪物暴击率增加，但给予的经验增加。"},
		{"id":"4","num":"4","name":"恶魔让特的诅咒",      	"description":"怪物们攻击力增加，承受伤害增加。"},
		{"id":"5","num":"4","name":"谢丽德的肾上腺素", 	"description":"所有怪物攻击速度增加，但掉率增加。"},
		{"id":"6","num":"5","name":"莱斯神的祝福",     	"description":"所有怪物都会不断回复一主百分比的生命值，但给予的经验增加。"},
		{"id":"7","num":"5","name":"谢莉德的苦痛协议", 	"description":"所有怪物死亡时发生爆炸，但掉率增加。"},
		{"id":"8","num":"5","name":"冰封亡灵的寒意", 		"description":"副本会被能使人减速的冰霜领域覆盖，但掉率增加。"},
	];

	const  dungeon_data_list =[
		{"id":"1","name":"海底","buff":[1,2,3,5,7,6]},
		{"id":"2","name":"荒野","buff":[1,2,3,4,5,6]},
		{"id":"3","name":"莱斯","buff":[1,8,2,3,4,5,6]},
		{"id":"4","name":"帕里","buff":[1,8,2,3,4,7,6]},
		{"id":"5","name":"圣堂","buff":[1,2,3,4,5,6]},
		{"id":"6","name":"雪地","buff":[1,2,3,4,5,6]},
	]

	const dungeon_consume_data = [
		{"id":1171,		"name":"鲁莽药水"},
		{"id":1295,		"name":"迅捷药水"},
		{"id":9480,		"name":"清澈药水"},
		{"id":1366,		"name":"魔防药水"},
		{"id":1169,		"name":"狂魔药水"},
		{"id":3853,		"name":"快闪药水"},
		{"id":3748,		"name":"狂暴药水"},
		{"id":2265,		"name":"强效力量药水"},
		{"id":1766,		"name":"强效敏捷药水"},
		{"id":9403,		"name":"强效智力药水"},
		{"id":5080,		"name":"强效体质药水"},
		{"id":4278,		"name":"强效防御药水"},
		{"id":8872,		"name":"力量药水"},
		{"id":5453,		"name":"敏捷药水"},
		{"id":1073,		"name":"智力药水"},
		{"id":6484,		"name":"体质药水"},
		{"id":3487,		"name":"防御药水"},
		{"id":8691,		"name":"力量之石"},
		{"id":5002,		"name":"无敌活力多"},
		{"id":5883,		"name":"无敌魔力多"},
		{"id":7833,		"name":"无敌技能卷"},
		{"id":6948,		"name":"力量卷轴"},
		{"id":1105,		"name":"充能力量卷轴"},
		{"id":4863,		"name":"超级力量卷轴"},
		{"id":445,		"name":"低级鳗鱼"},
		{"id":6049,		"name":"鳗鱼"},
		{"id":7364,		"name":"疾走卷轴"},
		{"id":7416,		"name":"跳跃卷轴"},
		{"id":2551,		"name":"防御之石"},
		{"id":4846,		"name":"低级力量之石"},
		{"id":5190,		"name":"低级无敌魔力多"},
		{"id":6532,		"name":"低级无敌活力多"},
		{"id":7894,		"name":"低级迅捷卷轴"},
		{"id":3166,		"name":"低级防御之石"},
		{"id":8241,		"name":"蹈火之石"},
		{"id":9041,		"name":"风驰防御石"},
		{"id":2857,		"name":"漂亮气球（粉色）"},
		{"id":5739,		"name":"漂亮的气球（黄色）"},
		{"id":14579,	"name":"漂亮的气球（蓝色）"},
		{"id":6663,		"name":"宠物糖果(A)"},
		{"id":16021,	"name":"副本币"},
		{"id":9411,		"name":"彩虹棉花糖"},
		{"id":7197,		"name":"白色棉花糖"},
	]

	const show_all_data=
	[
		{
			"file_name":"Artificial",
			"en_name":"Artificial",
			"cns_name":"艺术创造套装",
			"list":[
				{"option_str":"2% Red"		,"url":"Artificial_2_Red_Set"  		,"name":"Artificial 2% Red Set"		,"open_num":0,   "color":"black"	,"probability":0.2	 },
				{"option_str":"2% White"	,"url":"Artificial_2_White_Set"		,"name":"Artificial 2% White Set"	,"open_num":0,   "color":"black"	,"probability":0.2	 },
				{"option_str":"4% Green"	,"url":"Artificial_4_Green_Set" 	,"name":"Artificial 4% Green Set"	,"open_num":0,   "color":"black"	,"probability":0.3	 },
				{"option_str":"6% Blue"		,"url":"Artificial_6_Blue_Set"   	,"name":"Artificial 6% Blue Set"	,"open_num":0,   "color":"black"	,"probability":0.15 },
				{"option_str":"8% Orange"	,"url":"Artificial_8_Orange_Set"	,"name":"Artificial 8% Orange Set"	,"open_num":0,   "color":"black"	,"probability":0.10 },
				{"option_str":"10% Purple"	,"url":"Artificial_10_Purple_Set"	,"name":"Artificial 10% Purple Set"	,"open_num":0,   "color":"black"	,"probability":0.05 },
			]
		},
		{
			"file_name":"Casual_Summer",
			"en_name":"Casual Summer",
			"cns_name":"夏日",
			"list":[
				{"option_str":"2% Orange" 	,"url":"Casual_Summer_2_Orange_Set"		,"name":"Casual Summer 2% Orange Set"	,"open_num":0	,"color":"black"	,"probability":0.2	},
				{"option_str":"4% Purple" 	,"url":"Casual_Summer_4_Purple_Set"		,"name":"Casual Summer 4% Purple Set"	,"open_num":0	,"color":"black"	,"probability":0.3	},
				{"option_str":"6% White" 	,"url":"Casual_Summer_6_White_Set"		,"name":"Casual Summer 6% White Set"	,"open_num":0	,"color":"black"	,"probability":0.15	},
				{"option_str":"7% Blue" 	,"url":"Casual_Summer_8_Blue_Set"		,"name":"Casual Summer 8% Blue Set"		,"open_num":0	,"color":"black"	,"probability":0.10	},
				{"option_str":"10% Black"	,"url":"Casual_Summer_10_Black_Set"		,"name":"Casual Summer 10% Black Set"	,"open_num":0	,"color":"black"	,"probability":0.05	},
			]
		},
		{
			"file_name":"Exorcist",
			"en_name":"Exorcist",
			"cns_name":"驱魔人",
			"list":[
				{"option_str":"2% Red"		,"url":"Exorcist_2_Red_Set"			,"name":"Exorcist 2% Red Set"		,"open_num":0	,"color":"black"	,"probability":0.2	},
				{"option_str":"2% White"    ,"url":"Exorcist_2_White_Set"		,"name":"Exorcist 2% White Set"		,"open_num":0	,"color":"black"	,"probability":0.2	},
				{"option_str":"4% Black"    ,"url":"Exorcist_4_Black_Set"		,"name":"Exorcist 4% Black Set"		,"open_num":0	,"color":"black"	,"probability":0.3	},
				{"option_str":"6% Green"    ,"url":"Exorcist_6_Green_Set"		,"name":"Exorcist 6% Green Set"		,"open_num":0	,"color":"black"	,"probability":0.15	},
				{"option_str":"8% Blue"		,"url":"Exorcist_8_Blue_Set"		,"name":"Exorcist 8% Blue Set"		,"open_num":0	,"color":"black"	,"probability":0.10	},
				{"option_str":"10% Purple"	,"url":"Exorcist_10_Purple_Set"		,"name":"Exorcist 10% Purple Set"	,"open_num":0	,"color":"black"	,"probability":0.05	},
			]
		},
		{
			"file_name":"Future_Easter",
			"en_name":"Future Easter",
			"cns_name":"未来复活节",
			"list":[
				{"option_str":"2% Blue"		,"url":"Future_Easter_2_Purple_Set"	,"name":"Future Easter 2% Blue Set"  		,"open_num":0 		,"color":"black" 		,"probability":0.2		},
				{"option_str":"2% Green"	,"url":"Future_Easter_2_Yellow_Set"	,"name":"Future Easter 2% Green Set" 		,"open_num":0 		,"color":"black" 		,"probability":0.2		},
				{"option_str":"4% Burgundy"	,"url":"Future_Easter_4_Pink_Set"	,"name":"Future Easter 4% Burgundy Set" 	,"open_num":0 		,"color":"black" 		,"probability":0.3		},
				{"option_str":"6% Purple"	,"url":"Future_Easter_6_Green_Set"	,"name":"Future Easter 6% Purple Set"		,"open_num":0 		,"color":"black" 		,"probability":0.15		},
				{"option_str":"8% Grey"		,"url":"Future_Easter_8_Red_Set"	,"name":"Future Easter 8% Grey Set"  		,"open_num":0 		,"color":"black" 		,"probability":0.10		},
				{"option_str":"10% Black"	,"url":"Future_Easter_10_Blue_Set"	,"name":"Future Easter 10% Black Set"		,"open_num":0 		,"color":"black" 		,"probability":0.05		}
			]
		},
		{
			"file_name":"Glitch_Pop",
			"en_name":"Glitch Pop",
			"cns_name":"音乐脉冲",
			"list":[
				{"option_str":"2% Black"	,"url":"Glitch_Pop_2_Black_Set"		,"name":"Glitch Pop 2% Black Set"	,"open_num":0,   "color":"black" ,"probability":0.2		},
				{"option_str":"2% Orange"	,"url":"Glitch_Pop_2_Orange_Set"	,"name":"Glitch Pop 2% Orange Set"	,"open_num":0,   "color":"black" ,"probability":0.2		},
				{"option_str":"4% Red"		,"url":"Glitch_Pop_4_Red_Set"		,"name":"Glitch Pop 4% Red Set"		,"open_num":0,   "color":"black" ,"probability":0.3		},
				{"option_str":"6% Pink"		,"url":"Glitch_Pop_6_Pink_Set"		,"name":"Glitch Pop 6% Pink Set"	,"open_num":0,   "color":"black" ,"probability":0.15	},
				{"option_str":"8% Green"	,"url":"Glitch_Pop_8_Green_Set"		,"name":"Glitch Pop 8% Green Set"	,"open_num":0,   "color":"black" ,"probability":0.10	},
				{"option_str":"10% Blue"	,"url":"Glitch_Pop_10_Blue_Set"		,"name":"Glitch Pop 10% Blue Set"	,"open_num":0,   "color":"black" ,"probability":0.05	},
			]
		},
		{
			"file_name":"Luxury_Tuxedo",
			"en_name":"Luxury Tuxedo",
			"cns_name":"奢华燕尾服",
			"list":[
				{"option_str":"2% White"	,"url":"Luxury_Tuxedo_2_Green_Set"		,"name":"Luxury Tuxedo 2% White Set"	,"open_num":0,   "color":"black" ,"probability":0.2	},
				{"option_str":"2% Red"		,"url":"Luxury_Tuxedo_2_Pink_Set"		,"name":"Luxury Tuxedo 2% Red Set"		,"open_num":0,   "color":"black" ,"probability":0.2	},
				{"option_str":"4% Black"	,"url":"Luxury_Tuxedo_4_Purple_Set"		,"name":"Luxury Tuxedo 4% Black Set"	,"open_num":0,   "color":"black" ,"probability":0.3	},
				{"option_str":"6% Green"	,"url":"Luxury_Tuxedo_6_Yellow_Set"		,"name":"Luxury Tuxedo 6% Green Set"	,"open_num":0,   "color":"black" ,"probability":0.15	},
				{"option_str":"8% Blue"		,"url":"Luxury_Tuxedo_8_Black_Set" 		,"name":"Luxury Tuxedo 8% Blue Set"		,"open_num":0,   "color":"black" ,"probability":0.10	},
				{"option_str":"10% Purple"	,"url":"Luxury_Tuxedo_10_White_Set"		,"name":"Luxury Tuxedo 10% Purple Set"	,"open_num":0,   "color":"black" ,"probability":0.05	},
			]
		},
		{
			"file_name":"Oni",
			"en_name":"Oni",
			"cns_name":"奢华燕尾服",
			"list":[
				{"option_str":"2% Black"	,"url":"Oni_2_Black_Set"	,"name":"Oni 2% Black Set"		,"open_num":0,   "color":"black" ,"probability":0.2	},
				{"option_str":"2% Blue"		,"url":"Oni_2_Blue_Set"		,"name":"Oni 2% Blue Set"		,"open_num":0,   "color":"black" ,"probability":0.2	},
				{"option_str":"4% Red"		,"url":"Oni_4_Red_Set"		,"name":"Oni 4% Red Set"		,"open_num":0,   "color":"black" ,"probability":0.3	},
				{"option_str":"6% Green"	,"url":"Oni_6_Green_Set"	,"name":"Oni 6% Green Set"		,"open_num":0,   "color":"black" ,"probability":0.15	},
				{"option_str":"8% Blue"		,"url":"Oni_8_Blue_Set"		,"name":"Oni 8% Blue Set"		,"open_num":0,   "color":"black" ,"probability":0.10	},
				{"option_str":"10% Purple"	,"url":"Oni_10_Purple_Set"	,"name":"Oni 10% Purple Set"	,"open_num":0,   "color":"black" ,"probability":0.05	},
			]
		},
		{
			"file_name":"Shadow_Hunter",
			"en_name":"Shadow Hunter",
			"cns_name":"暗影猎手",
			"list":[
				{"option_str":"2% Blue"		,"url":"Shadow_Hunter_2_Blue_Set"     ,"name":"Shadow Hunter 2% Blue Set"    	,"open_num":0,"color":"black" ,"probability":0.2	},
				{"option_str":"2% Green"	,"url":"Shadow_Hunter_2_Green_Set"    ,"name":"Shadow Hunter 2% Green Set"   	,"open_num":0,"color":"black" ,"probability":0.2	},
				{"option_str":"4% Burgundy"	,"url":"Shadow_Hunter_4_Burgundy_Set" ,"name":"Shadow Hunter 4% Burgundy Set"	,"open_num":0,"color":"black" ,"probability":0.3	},
				{"option_str":"6% Purple"	,"url":"Shadow_Hunter_6_Purple_Set"   ,"name":"Shadow Hunter 6% Purple Set"  	,"open_num":0,"color":"black" ,"probability":0.15	},
				{"option_str":"8% Grey"		,"url":"Shadow_Hunter_8_Grey_Set"     ,"name":"Shadow Hunter 8% Grey Set"    	,"open_num":0,"color":"black" ,"probability":0.10	},
				{"option_str":"10% Black"	,"url":"Shadow_Hunter_10_Black_Set"   ,"name":"Shadow Hunter 10% Black Set"  	,"open_num":0,"color":"black" ,"probability":0.05	}
			]
		},
		{
			"file_name":"Teddy_Bear_2024",
			"en_name":"Teddy Bear 2024",
			"cns_name":"泰迪熊",
			"list":[
				{"option_str":"2% Black"	,"url":"Teddy_Bear_2024_2_Black_Set"  	,"name":"Teddy Bear 2024 2% Black Set"	 ,"open_num":0,"color":"black" 	,"probability":0.2	},
				{"option_str":"2% White"	,"url":"Teddy_Bear_2024_2_White_Set"  	,"name":"Teddy Bear 2024 2% White Set"	 ,"open_num":0,"color":"black" 	,"probability":0.2	},
				{"option_str":"4% Green"	,"url":"Teddy_Bear_2024_4_Green_Set"  	,"name":"Teddy Bear 2024 4% Green Set"	 ,"open_num":0,"color":"black" 	,"probability":0.3	},
				{"option_str":"6% Blue"		,"url":"Teddy_Bear_2024_6_Blue_Set"   	,"name":"Teddy Bear 2024 6% Blue Set"  	 ,"open_num":0,"color":"black" 	,"probability":0.15	},
				{"option_str":"8% Purple"	,"url":"Teddy_Bear_2024_8_Purple_Set" 	,"name":"Teddy Bear 2024 8% Purple Set"  ,"open_num":0,"color":"black" 	,"probability":0.10	},
				{"option_str":"10% Brown" 	,"url":"Teddy_Bear_2024_10_Brown_Set" 	,"name":"Teddy Bear 2024 10% Brown Set"  ,"open_num":0,"color":"black" 	,"probability":0.05	}
			]
		},
		{
			"file_name":"Valentine_2024",
			"en_name":"Valentine 2024",
			"cns_name":"情人节2024",
			"list":[
				{"option_str":"2% Blue"		,"url":"Valentine_2024_2_Blue_Set"  	,"name":"Valentine 2024 2% Blue Set"  		,"open_num":0,"color":"black" ,"probability":0.2		},
				{"option_str":"4% Orange"	,"url":"Valentine_2024_4_Orange_Set"  	,"name":"Valentine 2024 4% Orange Set"  	,"open_num":0,"color":"black" ,"probability":0.3		},
				{"option_str":"6% Purple"	,"url":"Valentine_2024_6_Purple_Set"  	,"name":"Valentine 2024 6% Purple Set"  	,"open_num":0,"color":"black" ,"probability":0.15	},
			]
		},
		{
			"file_name":"Winter_Casual",
			"en_name":"Winter Casual",
			"cns_name":"冬季休闲套",
			"list":[
				{"option_str":"2% Cyan"		,"url":"Winter_Casual_2024_2_Cyan_Set"	 	,"name":"Winter Casual 2024 2% Cyan Set"		,"open_num":0  	,"color":"black" 	,"probability":0.2	},
				{"option_str":"2% Orange"	,"url":"Winter_Casual_2024_2_Orange_Set"	,"name":"Winter Casual 2024 2% Orange Set"		,"open_num":0  	,"color":"black" 	,"probability":0.2	},
				{"option_str":"4% Purple"	,"url":"Winter_Casual_2024_4_Purple_Set"	,"name":"Winter Casual 2024 4% Purple Set"		,"open_num":0  	,"color":"black" 	,"probability":0.3	},
				{"option_str":"6% Green"	,"url":"Winter_Casual_2024_6_Green_Set"  	,"name":"Winter Casual 2024 6% Green Set"		,"open_num":0  	,"color":"black" 	,"probability":0.15	},
				{"option_str":"8% Pink"		,"url":"Winter_Casual_2024_8_Pink_Set"		,"name":"Winter Casual 2024 8% Pink Set"		,"open_num":0  	,"color":"black"	,"probability":0.10	},
				{"option_str":"10% Black"	,"url":"Winter_Casual_2024_10_Black_Set"	,"name":"Winter Casual 2024 10% Black Set"		,"open_num":0  	,"color":"black"	,"probability":0.05	}
			]
		},
	];

	let pet_box_num = 0;

	const pet_file_list = [
		"petdraco.png",
		"petcrystaliphrine.png",
		"pethantiger.png",
		"petprimgon.png",
		"petskatingcat.png",
		"pettonge.png",
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


	//10%-20% 橙汁
	//10%-20% 发光石
	//5%-10% 棒棒糖
	//5%-10% 活力饮料100
	//2%-5% 木剑
	//2%-5% 铁剑
	const drop = [
			{"color":"#4e6ef2","name": "橙汁", "probability": 0.2, "num": 0},
			{"color":"#4e6ef2","name": "发光石", "probability": 0.2, "num": 0},
			{"color":"#4e6ef2","name": "棒棒糖", "probability": 0.1, "num": 0},
			{"color":"#4e6ef2","name": "活力饮料100", "probability": 0.1, "num": 0},
			{"color":"red","name": "木剑", "probability": 0.05, "num": 0},
			{"color":"red","name": "铁剑", "probability": 0.05, "num": 0}
	];

	let hai_boss_drop = [
		{"id":"19384","name":"Broken Wings","icon":"gengembrokenwings.png","category":"BOOTY","rarity":"common","probability":0.99,"num":0},
		{"id":"4503","name":"海鲜披萨","icon":"genfoocoopizza.png","category":"RECOVERY","rarity":"common","probability":0.60,"num":0},
		{"id":"6234","name":"终极魔力多","icon":"genpotrefr10.png","category":"RECOVERY","rarity":"common","probability":0.60,"num":0},
		{"id":"3880","name":"活力饮料900","icon":"genpotdrivithig3.png","category":"RECOVERY","rarity":"common","probability":0.60,"num":0},
		{"id":"11682","name":"珊瑚岛咖喱","icon":"genfoocoocoralcurry.png","category":"RECOVERY","rarity":"common","probability":0.20,"num":0},
		{"id":"15625","name":"终极精粹","icon":"ultimaquest.png","category":"MATERIAL","rarity":"common","probability":0.05,"num":0},
		{"id":"814","name":"PK纸片","icon":"chppk.png","category":"SCROLL","rarity":"rare","probability":0.05,"num":0},
		{"id":"15403","name":"晶石","icon":"genmatorichalcum01.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"7867","name":"8点精炼骰子","icon":"genmatdieeight.png","category":"MATERIAL","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"4095","name":"Aquanar Helmet","icon":"mbil04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12332","name":"Aquanar Gauntlets","icon":"mbil04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15862","name":"Aquanar Boots","icon":"mbil04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16124","name":"Aqualis Helmet","icon":"fbil04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"11650","name":"Aqualis Gauntlets","icon":"fbil04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18535","name":"Aqualis Boots","icon":"fbil04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10967","name":"Seakissed Aquanar Helmet","icon":"mbil04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17563","name":"Seakissed Aquanar Gauntlets","icon":"mbil04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18147","name":"Seakissed Aquanar Boots","icon":"mbil04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19079","name":"Seakissed Aqualis Helmet","icon":"fbil04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18008","name":"Seakissed Aqualis Gauntlets","icon":"fbil04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16467","name":"Seakissed Aqualis Boots","icon":"fbil04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10725","name":"Marinthor Helmet","icon":"mbla04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19923","name":"Marinthor Gauntlets","icon":"mbla04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14283","name":"Marinthor Boots","icon":"mbla04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16660","name":"Marinva Helmet","icon":"fbla04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18685","name":"Marinva Gauntlets","icon":"fbla04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16640","name":"Marinva Boots","icon":"fbla04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17832","name":"Seakissed Marinthor Helmet","icon":"mbla04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10275","name":"Seakissed Marinthor Gauntlets","icon":"mbla04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17503","name":"Seakissed Marinthor Boots","icon":"mbla04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18098","name":"Seakissed Marinva Helmet","icon":"fbla04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12965","name":"Seakissed Marinva Gauntlets","icon":"fbla04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12727","name":"Seakissed Marinva Boots","icon":"fbla04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17894","name":"Sealith Helmet","icon":"mele04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12806","name":"Sealith Gauntlets","icon":"mele04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14625","name":"Sealith Boots","icon":"mele04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15564","name":"Seavara Helmet","icon":"fele04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13773","name":"Seavara Gauntlets","icon":"fele04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10323","name":"Seavara Boots","icon":"fele04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12689","name":"Seakissed Sealith Helmet","icon":"mele04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19321","name":"Seakissed Sealith Gauntlets","icon":"mele04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12922","name":"Seakissed Sealith Boots","icon":"mele04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14118","name":"Seakissed Seavara Helmet","icon":"fele04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"15423","name":"Seakissed Seavara Gauntlets","icon":"fele04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11628","name":"Seakissed Seavara Boots","icon":"fele04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13664","name":"Brinex Helmet","icon":"mjst04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10840","name":"Brinex Gauntlets","icon":"mjst04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13248","name":"Brinex Boots","icon":"mjst04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14423","name":"Brineya Helmet","icon":"fjst04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12587","name":"Brineya Gauntlets","icon":"fjst04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16643","name":"Brineya Boots","icon":"fjst04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14169","name":"Seakissed Brinex Helmet","icon":"mjst04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10814","name":"Seakissed Brinex Gauntlets","icon":"mjst04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12195","name":"Seakissed Brinex Boots","icon":"mjst04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14561","name":"Seakissed Brineya Helmet","icon":"fjst04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11773","name":"Seakissed Brineya Gauntlets","icon":"fjst04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13394","name":"Seakissed Brineya Boots","icon":"fjst04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10559","name":"Tidewhis Helmet","icon":"mkin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14318","name":"Tidewhis Gauntlets","icon":"mkin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17087","name":"Tidewhis Boots","icon":"mkin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"11295","name":"Tidera Helmet","icon":"fkin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18078","name":"Tidera Gauntlets","icon":"fkin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14617","name":"Tidera Boots","icon":"fkin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"11697","name":"Seakissed Tidewhis Helmet","icon":"mkin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"15319","name":"Seakissed Tidewhis Gauntlets","icon":"mkin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11751","name":"Seakissed Tidewhis Boots","icon":"mkin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11195","name":"Seakissed Tidera Helmet","icon":"fkin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17121","name":"Seakissed Tidera Gauntlets","icon":"fkin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11114","name":"Seakissed Tidera Boots","icon":"fkin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16353","name":"Aquiloop Helmet","icon":"mpsy04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10845","name":"Aquiloop Gauntlets","icon":"mpsy04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12367","name":"Aquiloop Boots","icon":"mpsy04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15808","name":"Aquiva Helmet","icon":"fpsy04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19157","name":"Aquiva Gauntlets","icon":"fpsy04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16645","name":"Aquiva Boots","icon":"fpsy04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14120","name":"Seakissed Aquiloop Helmet","icon":"mpsy04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17542","name":"Seakissed Aquiloop Gauntlets","icon":"mpsy04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18373","name":"Seakissed Aquiloop Boots","icon":"mpsy04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13847","name":"Seakissed Aquiva Helmet","icon":"fpsy04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19089","name":"Seakissed Aquiva Gauntlets","icon":"fpsy04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14390","name":"Seakissed Aquiva Boots","icon":"fpsy04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10434","name":"Seerel Helmet","icon":"mrag04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15719","name":"Seerel Gauntlets","icon":"mrag04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13948","name":"Seerel Boots","icon":"mrag04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10671","name":"Seerina Helmet","icon":"frag04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14241","name":"Seerina Gauntlets","icon":"frag04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13252","name":"Seerina Boots","icon":"frag04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19759","name":"Seakissed Seerel Helmet","icon":"mrag04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19056","name":"Seakissed Seerel Gauntlets","icon":"mrag04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17761","name":"Seakissed Seerel Boots","icon":"mrag04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13926","name":"Seakissed Seerina Helmet","icon":"frag04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14325","name":"Seakissed Seerina Gauntlets","icon":"frag04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18888","name":"Seakissed Seerina Boots","icon":"frag04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16959","name":"Marinfury Helmet","icon":"mrin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15658","name":"Marinfury Gauntlets","icon":"mrin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12862","name":"Marinfury Boots","icon":"mrin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17796","name":"Marinflux Helmet","icon":"frin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17124","name":"Marinflux Gauntlets","icon":"frin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14983","name":"Marinflux Boots","icon":"frin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16577","name":"Seakissed Marinfury Helmet","icon":"mrin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18504","name":"Seakissed Marinfury Gauntlets","icon":"mrin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17795","name":"Seakissed Marinfury Boots","icon":"mrin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19717","name":"Seakissed Marinflux Helmet","icon":"frin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13067","name":"Seakissed Marinflux Gauntlets","icon":"frin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"15280","name":"Seakissed Marinflux Boots","icon":"frin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16433","name":"Destroyed Coral Shield","icon":"armshihernes-et02.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12651","name":"Mossy Coral Shield","icon":"armshihernes-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12298","name":"Aquanar Suit","icon":"mbil04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19653","name":"Aqualis Suit","icon":"fbil04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14900","name":"Seakissed Aquanar Suit","icon":"mbil04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14858","name":"Seakissed Aqualis Suit","icon":"fbil04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"15228","name":"Marinthor Suit","icon":"mbla04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19465","name":"Marinva Suit","icon":"fbla04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14888","name":"Seakissed Marinthor Suit","icon":"mbla04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12504","name":"Seakissed Marinva Suit","icon":"fbla04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13044","name":"Sealith Suit","icon":"mele04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16299","name":"Seavara Suit","icon":"fele04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"11104","name":"Seakissed Sealith Suit","icon":"mele04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"1324","name":"Seakissed Seavara Suit","icon":"fele04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17239","name":"Brinex Suit","icon":"mjst04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19853","name":"Brineya Suit","icon":"fjst04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12358","name":"Seakissed Brinex Suit","icon":"mjst04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19207","name":"Seakissed Brineya Suit","icon":"fjst04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10397","name":"Tidewhis Suit","icon":"mkin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16101","name":"Tidera Suit","icon":"fkin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"6901","name":"Seakissed Tidewhis Suit","icon":"mkin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16321","name":"Seakissed Tidera Suit","icon":"fkin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19979","name":"Aquiloop Suit","icon":"mpsy04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14249","name":"Aquiva Suit","icon":"fpsy04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14185","name":"Seakissed Aquiloop Suit","icon":"mpsy04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18740","name":"Seakissed Aquiva Suit","icon":"fpsy04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14738","name":"Seerel Suit","icon":"mrag04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17096","name":"Seerina Suit","icon":"frag04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12536","name":"Seakissed Seerel Suit","icon":"mrag04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11186","name":"Seakissed Seerina Suit","icon":"frag04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17559","name":"Marinfury Suit","icon":"mrin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18223","name":"Marinflux Suit","icon":"frin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18567","name":"Seakissed Marinfury Suit","icon":"mrin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16184","name":"Seakissed Marinflux Suit","icon":"frin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"6844","name":"4点精炼骰子","icon":"genmatdiefour.png","category":"MATERIAL","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"1250","name":"6点精炼骰子","icon":"genmatdiesix.png","category":"MATERIAL","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"1764","name":"敏捷戒指","icon":"genjewrinnorrin03.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"1371","name":"电磁卡片","icon":"genmateleeletri.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"5455","name":"闪电卡片","icon":"genmateleeletri.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"8600","name":"宠物蛋","icon":"petegg.png","category":"RAISEDPET","rarity":"common","probability":0.01,"num":0},
		{"id":"2811","name":"火属性装备卡片(3%) ","icon":"genmateleflame.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"6439","name":"水属性装备卡片(3%)","icon":"genmateleriver.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"5788","name":"风属性装备卡片(3%)","icon":"genmatelecyclon.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"5545","name":"雷属性装备卡片(3%)","icon":"genmatelegenerator.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"6242","name":"土属性装备卡片(3%)","icon":"genmateledesert.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"12908","name":"Shining Oricalkum","icon":"genmatorichalcum02.png","category":"MATERIAL","rarity":"veryrare","probability":0.01,"num":0},
		{"id":"7207","name":"火焰卡片","icon":"genmatelefire.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"7659","name":"湖泊卡片","icon":"genmatelewater.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"9399","name":"巨石卡片","icon":"genmateleearth.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"2781","name":"大风卡片","icon":"genmatelewind.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"3687","name":"烈火卡片","icon":"genmatelefire.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"3830","name":"河流卡片","icon":"genmatelewater.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"6385","name":"沙漠卡片","icon":"genmateleearth.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"5049","name":"旋风卡片","icon":"genmatelewind.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"107","name":"火属性装备卡片(2%)","icon":"genmateleflame.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"1159","name":"水属性装备卡片(2%)","icon":"genmateleriver.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"14","name":"风属性装备卡片(2%)","icon":"genmatelecyclon.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"7559","name":"雷属性装备卡片(2%)","icon":"genmatelegenerator.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"8926","name":"土属性装备卡片(2%)","icon":"genmateledesert.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"19938","name":"Destroyed Nautilus","icon":"weaaxehernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"9878","name":"Neglected Nautilus","icon":"weaaxehernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"15243","name":"Destroyed Nemo's Fury","icon":"weabowhernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"10350","name":"Nebulous Nemo's Fury","icon":"weabowhernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"15828","name":"Destroyed Fist of Tides","icon":"weaknuhernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"13740","name":"Flawed Fist of Tides","icon":"weaknuhernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"17776","name":"Destroyed Conch Stave","icon":"weastahernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"11615","name":"Craggy Conch Stave","icon":"weastahernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"17809","name":"Destroyed Song of Sirens","icon":"weachehernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"14191","name":"Sundered Song of Sirens","icon":"weachehernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"15597","name":"Destroyed Coral Cutlass","icon":"weaswdhernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"14510","name":"Crumbling Coral Cutlass","icon":"weaswdhernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"3903","name":"Destroyed Lamprey's Wand","icon":"weawanhernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"19430","name":"Leaky Lamprey's Wand","icon":"weawanhernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"4152","name":"Destroyed Typhoon","icon":"weayoyhernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"18759","name":"Tarnished Typhoon","icon":"weayoyhernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"16742","name":"Destroyed Abyss","icon":"weaaxthernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"12811","name":"Archaic Abyss","icon":"weaaxthernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"16978","name":"Destroyed Leviathan","icon":"weaswthernes-et02.png","category":"WEAPON","rarity":"common","probability":0.001,"num":0},
		{"id":"14556","name":"Lethargic Leviathan","icon":"weaswthernes-et01.png","category":"WEAPON","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"9344","name":"10点精炼骰子","icon":"genmatdieten.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"7178","name":"白银耳环","icon":"genjewearnorear01.png","category":"JEWELRY","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"6803","name":"生命女神项链","icon":"genjewnecnornec01.png","category":"JEWELRY","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"8646","name":"活力之源项链","icon":"genjewnecnornec03.png","category":"JEWELRY","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"9233","name":"魔力之源项链","icon":"genjewnecnornec02.png","category":"JEWELRY","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"5536","name":"力量戒指","icon":"genjewrinnorrin01.png","category":"JEWELRY","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"2064","name":"智力戒指","icon":"genjewrinnorrin02.png","category":"JEWELRY","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"6531","name":"体质戒指","icon":"genjewrinnorrin04.png","category":"JEWELRY","rarity":"uncommon","probability":0.001,"num":0},
		{"id":"4635","name":"火属性装备卡片(4%)","icon":"genmateleflame.png","category":"MATERIAL","rarity":"rare","probability":0.001,"num":0},
		{"id":"4126","name":"水属性装备卡片(4%)","icon":"genmateleriver.png","category":"MATERIAL","rarity":"rare","probability":0.001,"num":0},
		{"id":"5945","name":"风属性装备卡片(4%)","icon":"genmatelecyclon.png","category":"MATERIAL","rarity":"rare","probability":0.001,"num":0},
		{"id":"8243","name":"雷属性装备卡片(4%)","icon":"genmatelegenerator.png","category":"MATERIAL","rarity":"rare","probability":0.001,"num":0},
		{"id":"7436","name":"土属性装备卡片(4%)","icon":"genmateledesert.png","category":"MATERIAL","rarity":"rare","probability":0.001,"num":0},
		{"id":"15281","name":"Roelayne Helmet","icon":"fbilset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12905","name":"Roelayne Boots","icon":"fbilset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12611","name":"Roenier Helmet","icon":"mbilset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19083","name":"Roenier Boots","icon":"mbilset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11315","name":"Herainn Helmet","icon":"fblaset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10690","name":"Herainn Boots","icon":"fblaset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18304","name":"Heraud Helmet","icon":"mblaset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12031","name":"Heraud Boots","icon":"mblaset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10199","name":"Lypine Helmet","icon":"feleset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13492","name":"Lypine Boots","icon":"feleset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14731","name":"Lippin Helmet","icon":"meleset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18383","name":"Lippin Boots","icon":"meleset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13895","name":"Curena Helmet","icon":"fjstset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16091","name":"Curena Boots","icon":"fjstset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11056","name":"Curio Helmet","icon":"mjstset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11660","name":"Curio Boots","icon":"mjstset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17314","name":"Bilari Helmet","icon":"fkinset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15185","name":"Bilari Boots","icon":"fkinset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15033","name":"Bileire Helmet","icon":"mkinset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10107","name":"Bileire Boots","icon":"mkinset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14123","name":"Rephira Helmet","icon":"fpsyset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16631","name":"Rephira Boots","icon":"fpsyset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16951","name":"Reffiro Helmet","icon":"mpsyset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19049","name":"Reffiro Boots","icon":"mpsyset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17385","name":"Hanira Helmet","icon":"fragset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"1449","name":"Hanira Boots","icon":"fragset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14703","name":"Hainure Helmet","icon":"mragset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19245","name":"Hainure Boots","icon":"mragset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13440","name":"Rayne Helmet","icon":"frinset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14531","name":"Rayne Boots","icon":"frinset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10901","name":"Reine Helmet","icon":"mrinset06cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13210","name":"Reine Boots","icon":"mrinset06foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15838","name":"Roelayne Gauntlets","icon":"fbilset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19460","name":"Roenier Gauntlets","icon":"mbilset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16334","name":"Herainn Gauntlets","icon":"fblaset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14319","name":"Heraud Gauntlets","icon":"mblaset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15562","name":"Lypine Gauntlets","icon":"feleset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13737","name":"Lippin Gauntlets","icon":"meleset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11294","name":"Curena Gauntlets","icon":"fjstset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13899","name":"Curio Gauntlets","icon":"mjstset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17243","name":"Bilari Gauntlets","icon":"fkinset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13560","name":"Bileire Gauntlets","icon":"mkinset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17310","name":"Rephira Gauntlets","icon":"fpsyset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11344","name":"Reffiro Gauntlets","icon":"mpsyset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"5730","name":"Hanira Gauntlets","icon":"fragset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19182","name":"Hainure Gauntlets","icon":"mragset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15988","name":"Rayne Gauntlets","icon":"frinset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13658","name":"Reine Gauntlets","icon":"mrinset06hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"6672","name":"12点精炼骰子","icon":"genmatdietwelve.png","category":"MATERIAL","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18057","name":"Coral Shield","icon":"armshihernes.png","category":"ARMOR","rarity":"rare","probability":0.0001,"num":0},
		{"id":"13570","name":"Roelayne Suit","icon":"fbilset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17353","name":"Roenier Suit","icon":"mbilset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16409","name":"Herainn Suit","icon":"fblaset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16799","name":"Heraud Suit","icon":"mblaset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18487","name":"Lypine Suit","icon":"feleset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11696","name":"Lippin Suit","icon":"meleset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16423","name":"Curena Suit","icon":"fjstset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16059","name":"Curio Suit","icon":"mjstset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15332","name":"Bilari Suit","icon":"fkinset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19474","name":"Bileire Suit","icon":"mkinset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12584","name":"Rephira Suit","icon":"fpsyset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13731","name":"Reffiro Suit","icon":"mpsyset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12396","name":"Hanira Suit","icon":"fragset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11849","name":"Hainure Suit ","icon":"mragset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19929","name":"Rayne Suit","icon":"frinset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16051","name":"Reine Suit","icon":"mrinset06upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10319","name":"珊瑚短剑","icon":"weaswdhernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"19897","name":"螺号","icon":"weaaxehernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"16014","name":"怒涛","icon":"weabowhernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"14971","name":"潮汐之拳","icon":"weaknuhernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"14000","name":"海潮回响","icon":"weastahernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"16918","name":"塞壬之歌","icon":"weachehernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"14402","name":"绝渊","icon":"weaaxthernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"13811","name":"猛兽","icon":"weaswthernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"13845","name":"呼风唤雨","icon":"weawanhernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"13024","name":"涡旋","icon":"weayoyhernes.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0}
	]

	let boss_drop = [
		// 8-12个
		{"id":"19291","name":"被诅咒的首饰碎片","icon":"syssysscrscrapgarnet.png","category":"MATERIAL","rarity":"common","probability":1.00,"num":0},
		{"id":"7867","name":"8点精炼骰子","icon":"genmatdieeight.png","category":"MATERIAL","rarity":"uncommon","probability":0.60,"num":0},
		{"id":"1250","name":"6点精炼骰子","icon":"genmatdiesix.png","category":"MATERIAL","rarity":"uncommon","probability":0.60,"num":0},
		{"id":"6844","name":"4点精炼骰子","icon":"genmatdiefour.png","category":"MATERIAL","rarity":"uncommon","probability":0.60,"num":0},
		{"id":"6234","name":"终极魔力多","icon":"genpotrefr10.png","category":"RECOVERY","rarity":"common","probability":0.30,"num":0},
		{"id":"4503","name":"海鲜披萨","icon":"genfoocoopizza.png","category":"RECOVERY","rarity":"common","probability":0.30,"num":0},
		{"id":"3880","name":"活力饮料900","icon":"genpotdrivithig3.png","category":"RECOVERY","rarity":"common","probability":0.30,"num":0},
		{"id":"2311","name":"解毒剂","icon":"genpotantido.png","category":"BUFF","rarity":"common","probability":0.30,"num":0},
		{"id":"2347","name":"宠物笼钥匙(高级)","icon":"treasuregoldenkey.png","category":"MATERIAL","rarity":"veryrare","probability":0.20,"num":0},
		{"id":"1200","name":"黄水晶","icon":"gengemyellowcrystal.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"6089","name":"绿水晶","icon":"gengemgreencrystal.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"2662","name":"奇怪的象牙","icon":"gengemganesaivory.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"218","name":"蓝水晶","icon":"gengembluecrystal.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"2415","name":"金属之心","icon":"gengemasuraheart.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"19384","name":"Broken Wings","icon":"gengembrokenwings.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"18576","name":"Sharp Canine","icon":"gengemcaninetooth.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"11763","name":"Gogloo","icon":"gengemgoggloo.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"18478","name":"Big Nippers","icon":"gengemgiantforceps.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"18282","name":"Crab Shell","icon":"gengemcarapace.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"14421","name":"Crumbly Hair","icon":"gengemcrisphair.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"10377","name":"Great Crown","icon":"gengemgreatcrown.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"10896","name":"Keen Tooth","icon":"gengemsharptooth.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"10779","name":"Ink Pouch","icon":"gengeminksac.png","category":"BOOTY","rarity":"common","probability":0.10,"num":0},
		{"id":"9344","name":"10点精炼骰子","icon":"genmatdieten.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"1932","name":"火焰卡片(B)","icon":"genmatelecandle.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"637","name":"流水卡片(B)","icon":"genmatelerainatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"8515","name":"暴风卡片(B)","icon":"genmatelebreezeatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"8810","name":"雷电卡片(B)","icon":"genmatelesparkatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"6434","name":"岩石卡片(B)","icon":"genmatelesandatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"7851","name":"岩浆卡片(B)","icon":"genmatelelavaatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"5577","name":"电伏卡片(B)","icon":"genmatelevoltatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"4353","name":"荆棘卡片(B)","icon":"genmatelethorn.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"15403","name":"晶石","icon":"genmatorichalcum01.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"6672","name":"12点精炼骰子","icon":"genmatdietwelve.png","category":"MATERIAL","rarity":"veryrare","probability":0.05,"num":0},
		{"id":"3153","name":"火焰卡片(C)","icon":"genmatelecandle.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"6605","name":"流水卡片(C)","icon":"genmatelerainatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"6833","name":"暴风卡片(C)","icon":"genmatelebreezeatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"2799","name":"雷电卡片(C)","icon":"genmatelesparkatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"7382","name":"岩石卡片(C)","icon":"genmatelesandatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"5074","name":"岩浆卡片(C)","icon":"genmatelelavaatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"5681","name":"电伏卡片(C)","icon":"genmatelevoltatk.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"2731","name":"荆棘卡片(C)","icon":"genmatelethorn.png","category":"MATERIAL","rarity":"veryrare","probability":0.02,"num":0},
		{"id":"4095","name":"Aquanar Helmet","icon":"mbil04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12298","name":"Aquanar Suit","icon":"mbil04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12332","name":"Aquanar Gauntlets","icon":"mbil04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15862","name":"Aquanar Boots","icon":"mbil04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16124","name":"Aqualis Helmet","icon":"fbil04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19653","name":"Aqualis Suit","icon":"fbil04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"11650","name":"Aqualis Gauntlets","icon":"fbil04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18535","name":"Aqualis Boots","icon":"fbil04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10967","name":"Seakissed Aquanar Helmet","icon":"mbil04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14900","name":"Seakissed Aquanar Suit","icon":"mbil04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17563","name":"Seakissed Aquanar Gauntlets","icon":"mbil04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18147","name":"Seakissed Aquanar Boots","icon":"mbil04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19079","name":"Seakissed Aqualis Helmet","icon":"fbil04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14858","name":"Seakissed Aqualis Suit","icon":"fbil04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18008","name":"Seakissed Aqualis Gauntlets","icon":"fbil04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16467","name":"Seakissed Aqualis Boots","icon":"fbil04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10725","name":"Marinthor Helmet","icon":"mbla04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15228","name":"Marinthor Suit","icon":"mbla04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19923","name":"Marinthor Gauntlets","icon":"mbla04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14283","name":"Marinthor Boots","icon":"mbla04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16660","name":"Marinva Helmet","icon":"fbla04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19465","name":"Marinva Suit","icon":"fbla04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18685","name":"Marinva Gauntlets","icon":"fbla04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16640","name":"Marinva Boots","icon":"fbla04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17832","name":"Seakissed Marinthor Helmet","icon":"mbla04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14888","name":"Seakissed Marinthor Suit","icon":"mbla04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10275","name":"Seakissed Marinthor Gauntlets","icon":"mbla04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17503","name":"Seakissed Marinthor Boots","icon":"mbla04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18098","name":"Seakissed Marinva Helmet","icon":"fbla04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12504","name":"Seakissed Marinva Suit","icon":"fbla04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12965","name":"Seakissed Marinva Gauntlets","icon":"fbla04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12727","name":"Seakissed Marinva Boots","icon":"fbla04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17894","name":"Sealith Helmet","icon":"mele04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13044","name":"Sealith Suit","icon":"mele04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12806","name":"Sealith Gauntlets","icon":"mele04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14625","name":"Sealith Boots","icon":"mele04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15564","name":"Seavara Helmet","icon":"fele04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16299","name":"Seavara Suit","icon":"fele04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13773","name":"Seavara Gauntlets","icon":"fele04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10323","name":"Seavara Boots","icon":"fele04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12689","name":"Seakissed Sealith Helmet","icon":"mele04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11104","name":"Seakissed Sealith Suit","icon":"mele04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19321","name":"Seakissed Sealith Gauntlets","icon":"mele04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12922","name":"Seakissed Sealith Boots","icon":"mele04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14118","name":"Seakissed Seavara Helmet","icon":"fele04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"1324","name":"Seakissed Seavara Suit","icon":"fele04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"15423","name":"Seakissed Seavara Gauntlets","icon":"fele04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11628","name":"Seakissed Seavara Boots","icon":"fele04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13664","name":"Brinex Helmet","icon":"mjst04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17239","name":"Brinex Suit","icon":"mjst04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10840","name":"Brinex Gauntlets","icon":"mjst04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13248","name":"Brinex Boots","icon":"mjst04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14423","name":"Brineya Helmet","icon":"fjst04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19853","name":"Brineya Suit","icon":"fjst04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12587","name":"Brineya Gauntlets","icon":"fjst04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16643","name":"Brineya Boots","icon":"fjst04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14169","name":"Seakissed Brinex Helmet","icon":"mjst04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12358","name":"Seakissed Brinex Suit","icon":"mjst04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10814","name":"Seakissed Brinex Gauntlets","icon":"mjst04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12195","name":"Seakissed Brinex Boots","icon":"mjst04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14561","name":"Seakissed Brineya Helmet","icon":"fjst04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19207","name":"Seakissed Brineya Suit","icon":"fjst04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11773","name":"Seakissed Brineya Gauntlets","icon":"fjst04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13394","name":"Seakissed Brineya Boots","icon":"fjst04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10559","name":"Tidewhis Helmet","icon":"mkin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10397","name":"Tidewhis Suit","icon":"mkin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14318","name":"Tidewhis Gauntlets","icon":"mkin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17087","name":"Tidewhis Boots","icon":"mkin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"11295","name":"Tidera Helmet","icon":"fkin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16101","name":"Tidera Suit","icon":"fkin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18078","name":"Tidera Gauntlets","icon":"fkin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14617","name":"Tidera Boots","icon":"fkin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"11697","name":"Seakissed Tidewhis Helmet","icon":"mkin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"6901","name":"Seakissed Tidewhis Suit","icon":"mkin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"15319","name":"Seakissed Tidewhis Gauntlets","icon":"mkin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11751","name":"Seakissed Tidewhis Boots","icon":"mkin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11195","name":"Seakissed Tidera Helmet","icon":"fkin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16321","name":"Seakissed Tidera Suit","icon":"fkin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17121","name":"Seakissed Tidera Gauntlets","icon":"fkin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11114","name":"Seakissed Tidera Boots","icon":"fkin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16353","name":"Aquiloop Helmet","icon":"mpsy04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19979","name":"Aquiloop Suit","icon":"mpsy04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10845","name":"Aquiloop Gauntlets","icon":"mpsy04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12367","name":"Aquiloop Boots","icon":"mpsy04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15808","name":"Aquiva Helmet","icon":"fpsy04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14249","name":"Aquiva Suit","icon":"fpsy04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19157","name":"Aquiva Gauntlets","icon":"fpsy04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16645","name":"Aquiva Boots","icon":"fpsy04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14120","name":"Seakissed Aquiloop Helmet","icon":"mpsy04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14185","name":"Seakissed Aquiloop Suit","icon":"mpsy04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17542","name":"Seakissed Aquiloop Gauntlets","icon":"mpsy04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18373","name":"Seakissed Aquiloop Boots","icon":"mpsy04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13847","name":"Seakissed Aquiva Helmet","icon":"fpsy04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18740","name":"Seakissed Aquiva Suit","icon":"fpsy04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19089","name":"Seakissed Aquiva Gauntlets","icon":"fpsy04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14390","name":"Seakissed Aquiva Boots","icon":"fpsy04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"10434","name":"Seerel Helmet","icon":"mrag04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14738","name":"Seerel Suit","icon":"mrag04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15719","name":"Seerel Gauntlets","icon":"mrag04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13948","name":"Seerel Boots","icon":"mrag04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"10671","name":"Seerina Helmet","icon":"frag04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17096","name":"Seerina Suit","icon":"frag04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14241","name":"Seerina Gauntlets","icon":"frag04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"13252","name":"Seerina Boots","icon":"frag04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"19759","name":"Seakissed Seerel Helmet","icon":"mrag04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"12536","name":"Seakissed Seerel Suit","icon":"mrag04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19056","name":"Seakissed Seerel Gauntlets","icon":"mrag04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17761","name":"Seakissed Seerel Boots","icon":"mrag04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13926","name":"Seakissed Seerina Helmet","icon":"frag04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"11186","name":"Seakissed Seerina Suit","icon":"frag04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"14325","name":"Seakissed Seerina Gauntlets","icon":"frag04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18888","name":"Seakissed Seerina Boots","icon":"frag04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16959","name":"Marinfury Helmet","icon":"mrin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17559","name":"Marinfury Suit","icon":"mrin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"15658","name":"Marinfury Gauntlets","icon":"mrin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12862","name":"Marinfury Boots","icon":"mrin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17796","name":"Marinflux Helmet","icon":"frin04cap-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"18223","name":"Marinflux Suit","icon":"frin04upper-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"17124","name":"Marinflux Gauntlets","icon":"frin04hand-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"14983","name":"Marinflux Boots","icon":"frin04foot-et01.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"16577","name":"Seakissed Marinfury Helmet","icon":"mrin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18567","name":"Seakissed Marinfury Suit","icon":"mrin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"18504","name":"Seakissed Marinfury Gauntlets","icon":"mrin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"17795","name":"Seakissed Marinfury Boots","icon":"mrin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"19717","name":"Seakissed Marinflux Helmet","icon":"frin04cap-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16184","name":"Seakissed Marinflux Suit","icon":"frin04upper-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"13067","name":"Seakissed Marinflux Gauntlets","icon":"frin04hand-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"15280","name":"Seakissed Marinflux Boots","icon":"frin04foot-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"16433","name":"Destroyed Coral Shield","icon":"armshihernes-et02.png","category":"ARMOR","rarity":"common","probability":0.01,"num":0},
		{"id":"12651","name":"Mossy Coral Shield","icon":"armshihernes-et01.png","category":"ARMOR","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"107","name":"火属性装备卡片(2%)","icon":"genmateleflame.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"1159","name":"水属性装备卡片(2%)","icon":"genmateleriver.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"14","name":"风属性装备卡片(2%)","icon":"genmatelecyclon.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"7559","name":"雷属性装备卡片(2%)","icon":"genmatelegenerator.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"8926","name":"土属性装备卡片(2%)","icon":"genmateledesert.png","category":"MATERIAL","rarity":"common","probability":0.01,"num":0},
		{"id":"6803","name":"生命女神项链","icon":"genjewnecnornec01.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"8646","name":"活力之源项链","icon":"genjewnecnornec03.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"9233","name":"魔力之源项链","icon":"genjewnecnornec02.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"5536","name":"力量戒指","icon":"genjewrinnorrin01.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"1764","name":"敏捷戒指","icon":"genjewrinnorrin03.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"2064","name":"智力戒指","icon":"genjewrinnorrin02.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"6531","name":"体质戒指","icon":"genjewrinnorrin04.png","category":"JEWELRY","rarity":"uncommon","probability":0.01,"num":0},
		{"id":"2517","name":"火焰卡片(A)","icon":"genmatelepiercard_r_fire.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"8591","name":"流水卡片(A)","icon":"genmatelepiercard_r_water.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"5964","name":"暴风卡片(A)","icon":"genmatelepiercard_r_wind.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"3100","name":"雷电卡片(A)","icon":"genmatelepiercard_r_electric.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"5666","name":"岩石卡片(A)","icon":"genmatelepiercard_r_land.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"8814","name":"岩浆卡片(A)","icon":"genmatelepiercard_r_lava.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"4565","name":"电伏卡片(A)","icon":"genmatelepiercard_r_volt.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"1961","name":"荆棘卡片(A)","icon":"genmatelepiercard_12_thorn.png","category":"MATERIAL","rarity":"veryrare","probability":0.001,"num":0},
		{"id":"7207","name":"火焰卡片","icon":"genmatelefire.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"3687","name":"烈火卡片","icon":"genmatelefire.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"7659","name":"湖泊卡片","icon":"genmatelewater.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"3830","name":"河流卡片","icon":"genmatelewater.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"1371","name":"电磁卡片","icon":"genmateleeletri.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"5455","name":"闪电卡片","icon":"genmateleeletri.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"9399","name":"巨石卡片","icon":"genmateleearth.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"6385","name":"沙漠卡片","icon":"genmateleearth.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"2781","name":"大风卡片","icon":"genmatelewind.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"5049","name":"旋风卡片","icon":"genmatelewind.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"2811","name":"火属性装备卡片(3%) ","icon":"genmateleflame.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"6439","name":"水属性装备卡片(3%)","icon":"genmateleriver.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"5788","name":"风属性装备卡片(3%)","icon":"genmatelecyclon.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"5545","name":"雷属性装备卡片(3%)","icon":"genmatelegenerator.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"6242","name":"土属性装备卡片(3%)","icon":"genmateledesert.png","category":"MATERIAL","rarity":"common","probability":0.001,"num":0},
		{"id":"17539","name":"Tigressa Helmet","icon":"fbilwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19906","name":"Tigressa Suit","icon":"fbilwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13927","name":"Tigressa Gauntlets","icon":"fbilwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18586","name":"Tigressa Boots","icon":"fbilwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10517","name":"Tigraknar Helmet","icon":"mbilwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17202","name":"Tigraknar Suit","icon":"mbilwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18920","name":"Tigraknar Gauntlets","icon":"mbilwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13438","name":"Tigraknar Boots","icon":"mbilwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11786","name":"Lyceris Helmet","icon":"fblawildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18584","name":"Lyceris Suit","icon":"fblawildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15083","name":"Lyceris Gauntlets","icon":"fblawildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19360","name":"Lyceris Boots","icon":"fblawildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10930","name":"Lycanith Helmet","icon":"mblawildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13367","name":"Lycanith Suit","icon":"mblawildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11059","name":"Lycanith Gauntlets","icon":"mblawildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17359","name":"Lycanith Boots","icon":"mblawildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15608","name":"Drakoria Helmet","icon":"felewildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14598","name":"Drakoria Suit","icon":"felewildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11158","name":"Drakoria Gauntlets","icon":"felewildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17733","name":"Drakoria Boots","icon":"felewildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19660","name":"Drakorin Helmet","icon":"melewildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12328","name":"Drakorin Suit","icon":"melewildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17067","name":"Drakorin Gauntlets","icon":"melewildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16398","name":"Drakorin Boots","icon":"melewildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15712","name":"Fennia Helmet","icon":"fjstwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13143","name":"Fennia Suit","icon":"fjstwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19405","name":"Fennia Gauntlets","icon":"fjstwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11258","name":"Fennia Boots","icon":"fjstwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17152","name":"Fennith Helmet","icon":"mjstwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15392","name":"Fennith Suit","icon":"mjstwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19029","name":"Fennith Gauntlets","icon":"mjstwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16535","name":"Fennith Boots","icon":"mjstwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11833","name":"Manetress Helmet","icon":"fkinwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14690","name":"Manetress Suit","icon":"fkinwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15495","name":"Manetress Gauntlets","icon":"fkinwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11699","name":"Manetress Boots","icon":"fkinwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14953","name":"Manebound Helmet","icon":"mkinwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10929","name":"Manebound Suit","icon":"mkinwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10056","name":"Manebound Gauntlets","icon":"mkinwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15271","name":"Manebound Boots","icon":"mkinwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10065","name":"Primalix Helmet","icon":"fpsywildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11543","name":"Primalix Suit","icon":"fpsywildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12567","name":"Primalix Gauntlets","icon":"fpsywildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"5136","name":"Primalix Boots","icon":"fpsywildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13300","name":"Primamind Helmet","icon":"mpsywildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12749","name":"Primamind Suit","icon":"mpsywildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17123","name":"Primamind Gauntlets","icon":"mpsywildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17648","name":"Primamind Boots","icon":"mpsywildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17997","name":"Wingwander Helmet","icon":"fragwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17360","name":"Wingwander Suit","icon":"fragwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"19124","name":"Wingwander Gauntlets","icon":"fragwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15602","name":"Wingwander Boots","icon":"fragwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"15338","name":"Wingwalker Helmet","icon":"mragwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"12466","name":"Wingwalker Suit","icon":"mragwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18400","name":"Wingwalker Gauntlets","icon":"mragwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18180","name":"Wingwalker Boots","icon":"mragwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18121","name":"Luminia Helmet","icon":"frinwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"18509","name":"Luminia Suit","icon":"frinwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16265","name":"Luminia Gauntlets","icon":"frinwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"17340","name":"Luminia Boots","icon":"frinwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"11886","name":"Luminis Helmet","icon":"mrinwildsset01cap.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"13626","name":"Luminis Suit","icon":"mrinwildsset01upper.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"14048","name":"Luminis Gauntlets","icon":"mrinwildsset01hand.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10865","name":"Luminis Boots","icon":"mrinwildsset01foot.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16331","name":"卢萨卡之盾","icon":"armshilusika.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"10209","name":"卢萨卡的水晶盾","icon":"armshicrylusika.png","category":"ARMOR","rarity":"veryrare","probability":0.0001,"num":0},
		{"id":"16721","name":"卢萨卡之斧","icon":"weaaxelusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"15714","name":"卢萨卡的水晶斧","icon":"weaaxecrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"11095","name":"卢萨卡之弓","icon":"weabowlusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"11905","name":"卢萨卡的水晶弓","icon":"weabowcrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"16135","name":"卢萨卡之拳","icon":"weaknulusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"14100","name":"卢萨卡的水晶拳","icon":"weaknucrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"9319","name":"卢萨卡法杖","icon":"weastalusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"17625","name":"卢萨卡的水晶法杖","icon":"weastacrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"15880","name":"卢萨卡魔棒","icon":"weachelusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"18022","name":"卢萨卡的水晶魔棒","icon":"weachecrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"19508","name":"卢萨卡之剑","icon":"weaswolusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"13556","name":"卢萨卡的水晶剑","icon":"weaswocrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"14844","name":"卢萨卡巨斧","icon":"weaaxtlusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"17978","name":"卢萨卡的水晶巨斧","icon":"weaaxtcrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"18025","name":"卢萨卡巨剑","icon":"weaswtlusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"16364","name":"卢萨卡的水晶巨剑","icon":"weaswtcrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"15677","name":"卢萨卡魔杖","icon":"weawanlusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"19761","name":"卢萨卡的水晶魔杖","icon":"weawanrustiacrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"18619","name":"卢萨卡飞轮","icon":"weayoylusika.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"15533","name":"卢萨卡的水晶飞轮","icon":"weayoycrystal.png","category":"WEAPON","rarity":"unique","probability":0.0001,"num":0},
		{"id":"4635","name":"火属性装备卡片(4%)","icon":"genmateleflame.png","category":"MATERIAL","rarity":"rare","probability":0.0001,"num":0},
		{"id":"4126","name":"水属性装备卡片(4%)","icon":"genmateleriver.png","category":"MATERIAL","rarity":"rare","probability":0.0001,"num":0},
		{"id":"5945","name":"风属性装备卡片(4%)","icon":"genmatelecyclon.png","category":"MATERIAL","rarity":"rare","probability":0.0001,"num":0},
		{"id":"8243","name":"雷属性装备卡片(4%)","icon":"genmatelegenerator.png","category":"MATERIAL","rarity":"rare","probability":0.0001,"num":0},
		{"id":"7436","name":"土属性装备卡片(4%)","icon":"genmateledesert.png","category":"MATERIAL","rarity":"rare","probability":0.0001,"num":0},
	];

	let kill_num = 0;
	let kill_hai_num = 0;

	const pet_lv_item = [
		{"lvStr":"F级","money":"2000000","list":[{"pet_lv":1,"probability":1}]},
		{"lvStr":"E级","money":"6200000","list":[{"pet_lv":2,"probability":0.3},{"pet_lv":1,"probability":0.7}]},
		{"lvStr":"D级","money":"20800000","list":[{"pet_lv":3,"probability":0.18},{"pet_lv":2,"probability":0.25},{"pet_lv":1,"probability":0.57}]},
		{"lvStr":"C级","money":"59550000","list":[{"pet_lv":4,"probability":0.06},{"pet_lv":3,"probability":0.18},{"pet_lv":2,"probability":0.31},{"pet_lv":1,"probability":0.45}]},
		{"lvStr":"B级","money":"123800000","list":[{"pet_lv":5,"probability":0.04},{"pet_lv":4,"probability":0.1},{"pet_lv":3,"probability":0.18},{"pet_lv":2,"probability":0.28},{"pet_lv":1,"probability":0.4}]},
		{"lvStr":"A级","money":"226050000","list":[{"pet_lv":7,"probability":0.02},{"pet_lv":6,"probability":0.04},{"pet_lv":5,"probability":0.07},{"pet_lv":4,"probability":0.12},{"pet_lv":3,"probability":0.17},{"pet_lv":2,"probability":0.23},{"pet_lv":1,"probability":0.35}]},
		{"lvStr":"S级","money":"557050000","list":[{"pet_lv":9,"probability":0.01},{"pet_lv":8,"probability":0.02},{"pet_lv":7,"probability":0.04},{"pet_lv":6,"probability":0.06},{"pet_lv":5,"probability":0.09},{"pet_lv":4,"probability":0.13},{"pet_lv":3,"probability":0.17},{"pet_lv":2,"probability":0.21},{"pet_lv":1,"probability":0.27}]},
	]

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
	]

	//唤醒百分比范围
	const wakeUpItem = ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25"];

	const data = [
		{
			"name": "珊瑚短剑",
			"id": 10319,
			"uid": 14437,
			"wikiName": "珊瑚短剑",
			"minAttack": 502,
			"maxAttack": 504,
			"job": "战士",
			"attackSpeed": "非常快",
			"type": "单手武器",
			"imgUrl": "img/weapon/珊瑚短剑.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 490, "max": 590, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 200, "max": 230, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 140, "max": 155, fixed: 10, cur: "%"},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击率", "min": 20, "max": 50, fixed: 10, cur: "%"},
				{"name": "暴击伤害", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 4, "max": 8, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "格挡", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 2, "max": 4, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "气刃冲击", "item": wakeUpItem},
				{"name": "刀剑狂舞", "item": wakeUpItem}, {"name": "避实就虚", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "盾牌猛击", "item": wakeUpItem},
				{"name": "狂怒", "item": wakeUpItem}, {"name": "夜幕降临", "item": wakeUpItem},
				{"name": "十字打击", "item": wakeUpItem}, {"name": "战斧连击", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡的水晶剑",
			"id": 13556,
			"uid": 13257,
			"wikiName": "卢萨卡的水晶剑",
			"minAttack": 522,
			"maxAttack": 524,
			"job": "战士",
			"attackSpeed": "非常快",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶剑.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 530, "max": 630, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 220, "max": 260, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 150, "max": 165, fixed: 10, cur: "%"},
				{"name": "中毒概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击率", "min": 20, "max": 50, fixed: 10, cur: "%"},
				{"name": "暴击伤害", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 4, "max": 8, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "格挡", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 2, "max": 4, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "气刃冲击", "item": wakeUpItem},
				{"name": "刀剑狂舞", "item": wakeUpItem}, {"name": "避实就虚", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "盾牌猛击", "item": wakeUpItem},
				{"name": "狂怒", "item": wakeUpItem}, {"name": "夜幕降临", "item": wakeUpItem},
				{"name": "十字打击", "item": wakeUpItem}, {"name": "战斧连击", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡之剑",
			"id": 19508,
			"uid": 10906,
			"wikiName": "卢萨卡之剑",
			"minAttack": 522,
			"maxAttack": 524,
			"job": "战士",
			"attackSpeed": "非常快",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡之剑.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "增加HP", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "技能伤害", "min": 6, "max": 7, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "中毒概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击率", "min": 20, "max": 50, fixed: 10, cur: "%"},
				{"name": "暴击伤害", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 4, "max": 8, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "格挡", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 2, "max": 4, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "气刃冲击", "item": wakeUpItem},
				{"name": "刀剑狂舞", "item": wakeUpItem}, {"name": "避实就虚", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "盾牌猛击", "item": wakeUpItem},
				{"name": "狂怒", "item": wakeUpItem}, {"name": "夜幕降临", "item": wakeUpItem},
				{"name": "十字打击", "item": wakeUpItem}, {"name": "战斧连击", "item": wakeUpItem},
			]
		},
		{
			"name": "猛兽",
			"id": 13811,
			"uid": 19242,
			"wikiName": "猛兽",
			"minAttack": 685,
			"maxAttack": 694,
			"job": "战士",
			"attackSpeed": "慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/潮汐双手剑.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 590, "max": 690, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 240, "max": 280, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 130, "max": 150, fixed: 10, cur: "%"},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "碎甲", "item": wakeUpItem},
				{"name": "开天辟地", "item": wakeUpItem}, {"name": "大地共鸣", "item": wakeUpItem},
				{"name": "雷霆万钧", "item": wakeUpItem}, {"name": "极速突刺", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "横扫千军", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡的水晶巨剑",
			"id": 16364,
			"uid": 19108,
			"wikiName": "卢萨卡的水晶巨剑",
			"minAttack": 705,
			"maxAttack": 714,
			"job": "战士",
			"attackSpeed": "慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶巨剑.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 620, "max": 720, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 260, "max": 300, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 140, "max": 160, fixed: 10, cur: "%"},
				{"name": "流血概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "碎甲", "item": wakeUpItem},
				{"name": "开天辟地", "item": wakeUpItem}, {"name": "大地共鸣", "item": wakeUpItem},
				{"name": "雷霆万钧", "item": wakeUpItem}, {"name": "极速突刺", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "横扫千军", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡巨剑",
			"id": 18025,
			"uid": 15489,
			"wikiName": "卢萨卡巨剑",
			"minAttack": 705,
			"maxAttack": 714,
			"job": "战士",
			"attackSpeed": "慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡巨剑.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 28, "max": 35, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "格挡", "min": 8, "max": 14, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVE)", "min": 1, "max": 3, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVP)", "min": 1, "max": 3, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "碎甲", "item": wakeUpItem},
				{"name": "开天辟地", "item": wakeUpItem}, {"name": "大地共鸣", "item": wakeUpItem},
				{"name": "雷霆万钧", "item": wakeUpItem}, {"name": "极速突刺", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "横扫千军", "item": wakeUpItem},
			]
		},
		{
			"name": "螺号",
			"id": 19897,
			"uid": 11957,
			"wikiName": "螺号",
			"minAttack": 524,
			"maxAttack": 526,
			"job": "战士",
			"attackSpeed": "通用",
			"type": "单手武器",
			"imgUrl": "img/weapon/潮汐单手斧.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 530, "max": 630, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 160, "max": 200, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 100, "max": 115, fixed: 10, cur: "%"},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击率", "min": 20, "max": 50, fixed: 10, cur: "%"},
				{"name": "暴击伤害", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 4, "max": 8, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "格挡", "min": 20, "max": 40, fixed: 10, cur: "%"},
				{"name": "pve伤害", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 2, "max": 4, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "气刃冲击", "item": wakeUpItem},
				{"name": "刀剑狂舞", "item": wakeUpItem}, {"name": "避实就虚", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "盾牌猛击", "item": wakeUpItem},
				{"name": "狂怒", "item": wakeUpItem}, {"name": "夜幕降临", "item": wakeUpItem},
				{"name": "十字打击", "item": wakeUpItem}, {"name": "战斧连击", "item": wakeUpItem}
			]
		},
		{
			"name": "卢萨卡的水晶斧",
			"id": 15714,
			"uid": 16171,
			"wikiName": "卢萨卡的水晶斧",
			"minAttack": 544,
			"maxAttack": 546,
			"job": "战士",
			"attackSpeed": "通用",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶斧.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 550, "max": 650, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 180, "max": 220, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 110, "max": 130, fixed: 10, cur: "%"},
				{"name": "流血概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击率", "min": 20, "max": 50, fixed: 10, cur: "%"},
				{"name": "暴击伤害", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 4, "max": 8, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "格挡", "min": 20, "max": 40, fixed: 10, cur: "%"},
				{"name": "pve伤害", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 2, "max": 4, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "气刃冲击", "item": wakeUpItem},
				{"name": "刀剑狂舞", "item": wakeUpItem}, {"name": "避实就虚", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "盾牌猛击", "item": wakeUpItem},
				{"name": "狂怒", "item": wakeUpItem}, {"name": "夜幕降临", "item": wakeUpItem},
				{"name": "十字打击", "item": wakeUpItem}, {"name": "战斧连击", "item": wakeUpItem}
			]
		},
		{
			"name": "卢萨卡之斧",
			"id": 16721,
			"uid": 10720,
			"wikiName": "卢萨卡之斧",
			"minAttack": 544,
			"maxAttack": 546,
			"job": "战士",
			"attackSpeed": "通用",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡之斧.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 20, "max": 25, fixed: 1, cur: "%"},
				{"name": "技能伤害", "min": 6, "max": 8, fixed: 1, cur: "%"},
				{"name": "承受伤害", "min": 4, "max": 7, fixed: 1, cur: "%"},
				{"name": "流血概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击率", "min": 20, "max": 50, fixed: 10, cur: "%"},
				{"name": "暴击伤害", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 15, "max": 50, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 4, "max": 8, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 5, fixed: 1, cur: ""},
				{"name": "格挡", "min": 20, "max": 40, fixed: 10, cur: "%"},
				{"name": "pve伤害", "min": 2, "max": 4, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 2, "max": 4, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "气刃冲击", "item": wakeUpItem},
				{"name": "刀剑狂舞", "item": wakeUpItem}, {"name": "避实就虚", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "盾牌猛击", "item": wakeUpItem},
				{"name": "狂怒", "item": wakeUpItem}, {"name": "夜幕降临", "item": wakeUpItem},
				{"name": "十字打击", "item": wakeUpItem}, {"name": "战斧连击", "item": wakeUpItem}
			]
		},
		{
			"name": "绝渊",
			"id": 14402,
			"uid": 11855,
			"wikiName": "绝渊",
			"minAttack": 685,
			"maxAttack": 694,
			"job": "战士",
			"attackSpeed": "非常慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/潮汐双手斧.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 520, "max": 620, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 310, "max": 340, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 80, "max": 95, fixed: 10, cur: "%"},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "碎甲", "item": wakeUpItem},
				{"name": "开天辟地", "item": wakeUpItem}, {"name": "大地共鸣", "item": wakeUpItem},
				{"name": "雷霆万钧", "item": wakeUpItem}, {"name": "极速突刺", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "横扫千军", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡的水晶巨斧",
			"id": 17978,
			"uid": 16147,
			"wikiName": "卢萨卡的水晶巨斧",
			"minAttack": 705,
			"maxAttack": 714,
			"job": "战士",
			"attackSpeed": "非常慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶巨斧.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 550, "max": 650, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 320, "max": 360, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 90, "max": 110, fixed: 10, cur: "%"},
				{"name": "击晕概率(PVE)", "min": 1, "max": 3, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVP)", "min": 1, "max": 3, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "碎甲", "item": wakeUpItem},
				{"name": "开天辟地", "item": wakeUpItem}, {"name": "大地共鸣", "item": wakeUpItem},
				{"name": "雷霆万钧", "item": wakeUpItem}, {"name": "极速突刺", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "横扫千军", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡巨斧",
			"id": 14844,
			"uid": 11510,
			"wikiName": "卢萨卡巨斧",
			"minAttack": 685,
			"maxAttack": 694,
			"job": "战士",
			"attackSpeed": "非常慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡巨斧.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 28, "max": 35, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "承受伤害", "min": 6, "max": 10, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVE)", "min": 1, "max": 3, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVP)", "min": 1, "max": 3, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "毁灭攻击", "item": wakeUpItem}, {"name": "切裂风轮", "item": wakeUpItem},
				{"name": "血之光辉", "item": wakeUpItem}, {"name": "怒焰回旋", "item": wakeUpItem},
				{"name": "爆裂怒击", "item": wakeUpItem}, {"name": "逆手回旋", "item": wakeUpItem},
				{"name": "毁灭狂气", "item": wakeUpItem}, {"name": "碎甲", "item": wakeUpItem},
				{"name": "开天辟地", "item": wakeUpItem}, {"name": "大地共鸣", "item": wakeUpItem},
				{"name": "雷霆万钧", "item": wakeUpItem}, {"name": "极速突刺", "item": wakeUpItem},
				{"name": "裂刃突袭", "item": wakeUpItem}, {"name": "横扫千军", "item": wakeUpItem},
			]
		},
		{
			"name": "涡旋",
			"id": 13024,
			"uid": 15191,
			"wikiName": "涡旋",
			"minAttack": 456,
			"maxAttack": 458,
			"job": "弓箭手",
			"attackSpeed": "快速",
			"type": "双手武器",
			"imgUrl": "img/weapon/潮汐溜溜球.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 540, "max": 640, fixed: 10, cur: "%"},
				{"name": "力量", "min": 23, "max": 28, fixed: 1, cur: ""},
				{"name": "暴击率", "min": 160, "max": 230, fixed: 10, cur: "%"},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "死亡轮舞", "item": wakeUpItem}, {"name": "偷袭", "item": wakeUpItem},
				{"name": "十字震荡", "item": wakeUpItem}, {"name": "迟缓术", "item": wakeUpItem},
				{"name": "死亡爆破", "item": wakeUpItem}, {"name": "背后突袭", "item": wakeUpItem},
				{"name": "乾坤一掷", "item": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]},
			]
		},
		{
			"name": "卢萨卡的水晶飞轮",
			"id": 15533,
			"uid": 12362,
			"wikiName": "卢萨卡的水晶飞轮",
			"minAttack": 476,
			"maxAttack": 478,
			"job": "弓箭手",
			"attackSpeed": "快速",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶飞轮.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 570, "max": 670, fixed: 10, cur: "%"},
				{"name": "力量", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "暴击率", "min": 180, "max": 250, fixed: 10, cur: "%"},
				{"name": "流血概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "死亡轮舞", "item": wakeUpItem}, {"name": "偷袭", "item": wakeUpItem},
				{"name": "十字震荡", "item": wakeUpItem}, {"name": "迟缓术", "item": wakeUpItem},
				{"name": "死亡爆破", "item": wakeUpItem}, {"name": "背后突袭", "item": wakeUpItem},
				{"name": "乾坤一掷", "item": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]},
			]
		},
		{
			"name": "卢萨卡飞轮",
			"id": 18619,
			"uid": 18102,
			"wikiName": "卢萨卡飞轮",
			"minAttack": 456,
			"maxAttack": 458,
			"job": "弓箭手",
			"attackSpeed": "快速",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡飞轮.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "承受伤害", "min": 6, "max": 10, fixed: 1, cur: "%"},
				{"name": "减速概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"}
			],
			"wakeUpList": [
				{"name": "死亡轮舞", "item": wakeUpItem}, {"name": "偷袭", "item": wakeUpItem},
				{"name": "十字震荡", "item": wakeUpItem}, {"name": "迟缓术", "item": wakeUpItem},
				{"name": "死亡爆破", "item": wakeUpItem}, {"name": "背后突袭", "item": wakeUpItem},
				{"name": "乾坤一掷", "item": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]},
			]
		},
		{
			"name": "怒涛",
			"id": 16014,
			"uid": 13529,
			"wikiName": "怒涛",
			"minAttack": 511,
			"maxAttack": 512,
			"job": "弓箭手",
			"attackSpeed": "快速",
			"type": "双手武器",
			"imgUrl": "img/weapon/潮汐弓.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 550, "max": 650, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 10, "max": 15, fixed: 1, cur: "%"},
				{"name": "暴击率", "min": 15, "max": 20, fixed: 10, cur: "%"},
				{"name": "水炸弹概率", "min": 5, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "箭雨", "item": wakeUpItem}, {"name": "自动射击", "item": wakeUpItem},
				{"name": "三连强射", "item": wakeUpItem}, {"name": "精准射击", "item": wakeUpItem},
				{"name": "伏击", "item": wakeUpItem}, {"name": "冰箭", "item": wakeUpItem},
				{"name": "火焰箭矢", "item": wakeUpItem}, {"name": "毒箭", "item": wakeUpItem},
				{"name": "沉默之箭", "item": wakeUpItem}, {"name": "乱箭射击", "item": wakeUpItem},
				{"name": "穿透箭", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡的水晶弓",
			"id": 11905,
			"uid": 18425,
			"wikiName": "卢萨卡的水晶弓",
			"minAttack": 531,
			"maxAttack": 532,
			"job": "弓箭手",
			"attackSpeed": "快速",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶弓.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 580, "max": 680, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 12, "max": 17, fixed: 1, cur: "%"},
				{"name": "暴击率", "min": 18, "max": 22, fixed: 10, cur: "%"},
				{"name": "中毒概率", "min": 5, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "箭雨", "item": wakeUpItem}, {"name": "自动射击", "item": wakeUpItem},
				{"name": "三连强射", "item": wakeUpItem}, {"name": "精准射击", "item": wakeUpItem},
				{"name": "伏击", "item": wakeUpItem}, {"name": "冰箭", "item": wakeUpItem},
				{"name": "火焰箭矢", "item": wakeUpItem}, {"name": "毒箭", "item": wakeUpItem},
				{"name": "沉默之箭", "item": wakeUpItem}, {"name": "乱箭射击", "item": wakeUpItem},
				{"name": "穿透箭", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡之弓",
			"id": 11095,
			"uid": 17909,
			"wikiName": "卢萨卡之弓",
			"minAttack": 531,
			"maxAttack": 532,
			"job": "弓箭手",
			"attackSpeed": "快速",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡之弓.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "技能伤害", "min": 12, "max": 16, fixed: 1, cur: "%"},
				{"name": "中毒概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "箭雨", "item": wakeUpItem}, {"name": "自动射击", "item": wakeUpItem},
				{"name": "三连强射", "item": wakeUpItem}, {"name": "精准射击", "item": wakeUpItem},
				{"name": "伏击", "item": wakeUpItem}, {"name": "冰箭", "item": wakeUpItem},
				{"name": "火焰箭矢", "item": wakeUpItem}, {"name": "毒箭", "item": wakeUpItem},
				{"name": "沉默之箭", "item": wakeUpItem}, {"name": "乱箭射击", "item": wakeUpItem},
				{"name": "穿透箭", "item": wakeUpItem},
			]
		},
		{
			"name": "海潮回响",
			"id": 14000,
			"uid": 15914,
			"wikiName": "海潮回响",
			"minAttack": 567,
			"maxAttack": 570,
			"job": "魔导士",
			"attackSpeed": "慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/潮汐法杖.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "全元素精通", "min": 18, "max": 23, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 26, "max": 30, fixed: 1, cur: "%"},
				{"name": "智力", "min": 22, "max": 28, cur: ""},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "全元素精通", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "灵波狂想", "item": wakeUpItem}, {"name": "炙热焰星", "item": wakeUpItem},
				{"name": "螺旋烈风", "item": wakeUpItem}, {"name": "极地冰柱", "item": wakeUpItem},
				{"name": "雷电召唤", "item": wakeUpItem}, {"name": "爆裂突岩", "item": wakeUpItem},
				{"name": "地狱火花", "item": wakeUpItem}, {"name": "龙卷飓风", "item": wakeUpItem},
				{"name": "水球凝聚", "item": wakeUpItem}, {"name": "魔电聚合", "item": wakeUpItem},
				{"name": "灼烈幻火", "item": wakeUpItem},
				{"name": "风之利刃", "item": wakeUpItem}, {"name": "激流冲击", "item": wakeUpItem},
				{"name": "电闪雷鸣", "item": wakeUpItem}, {"name": "移山之术", "item": wakeUpItem},
				{"name": "浴火凤凰", "item": wakeUpItem}, {"name": "石枪投射", "item": wakeUpItem},
				{"name": "风之真空", "item": wakeUpItem}, {"name": "雷霆之怒", "item": wakeUpItem},
				{"name": "冰枪投射", "item": wakeUpItem}, {"name": "地狱火海", "item": wakeUpItem},
				{"name": "地动山摇", "item": wakeUpItem}, {"name": "狂风怒吼", "item": wakeUpItem},
				{"name": "雷震天惊", "item": wakeUpItem}, {"name": "毒云密布", "item": wakeUpItem},
				{"name": "雪山崩塌", "item": wakeUpItem}, {"name": "风雷狂袭", "item": wakeUpItem},
				{"name": "风沙吞噬", "item": wakeUpItem}, {"name": "陨石坠落", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡的水晶法杖",
			"id": 17625,
			"uid": 19005,
			"wikiName": "卢萨卡的水晶法杖",
			"minAttack": 587,
			"maxAttack": 590,
			"job": "魔导士",
			"attackSpeed": "慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶法杖.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "全元素精通", "min": 20, "max": 25, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 28, "max": 33, fixed: 1, cur: "%"},
				{"name": "智力", "min": 25, "max": 30, cur: ""},
				{"name": "减速概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "全元素精通", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "灵波狂想", "item": wakeUpItem}, {"name": "炙热焰星", "item": wakeUpItem},
				{"name": "螺旋烈风", "item": wakeUpItem}, {"name": "极地冰柱", "item": wakeUpItem},
				{"name": "雷电召唤", "item": wakeUpItem}, {"name": "爆裂突岩", "item": wakeUpItem},
				{"name": "地狱火花", "item": wakeUpItem}, {"name": "龙卷飓风", "item": wakeUpItem},
				{"name": "水球凝聚", "item": wakeUpItem}, {"name": "魔电聚合", "item": wakeUpItem},
				{"name": "灼烈幻火", "item": wakeUpItem},
				{"name": "风之利刃", "item": wakeUpItem}, {"name": "激流冲击", "item": wakeUpItem},
				{"name": "电闪雷鸣", "item": wakeUpItem}, {"name": "移山之术", "item": wakeUpItem},
				{"name": "浴火凤凰", "item": wakeUpItem}, {"name": "石枪投射", "item": wakeUpItem},
				{"name": "风之真空", "item": wakeUpItem}, {"name": "雷霆之怒", "item": wakeUpItem},
				{"name": "冰枪投射", "item": wakeUpItem}, {"name": "地狱火海", "item": wakeUpItem},
				{"name": "地动山摇", "item": wakeUpItem}, {"name": "狂风怒吼", "item": wakeUpItem},
				{"name": "雷震天惊", "item": wakeUpItem}, {"name": "毒云密布", "item": wakeUpItem},
				{"name": "雪山崩塌", "item": wakeUpItem}, {"name": "风雷狂袭", "item": wakeUpItem},
				{"name": "风沙吞噬", "item": wakeUpItem}, {"name": "陨石坠落", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡法杖",
			"id": 9319,
			"uid": 19489,
			"wikiName": "卢萨卡法杖",
			"minAttack": 587,
			"maxAttack": 590,
			"job": "魔导士",
			"attackSpeed": "慢",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡法杖.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "承受伤害", "min": 6, "max": 10, fixed: 1, cur: "%"},
				{"name": "减速概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "全元素精通", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "灵波狂想", "item": wakeUpItem}, {"name": "炙热焰星", "item": wakeUpItem},
				{"name": "螺旋烈风", "item": wakeUpItem}, {"name": "极地冰柱", "item": wakeUpItem},
				{"name": "雷电召唤", "item": wakeUpItem}, {"name": "爆裂突岩", "item": wakeUpItem},
				{"name": "地狱火花", "item": wakeUpItem}, {"name": "龙卷飓风", "item": wakeUpItem},
				{"name": "水球凝聚", "item": wakeUpItem}, {"name": "魔电聚合", "item": wakeUpItem},
				{"name": "灼烈幻火", "item": wakeUpItem},
				{"name": "风之利刃", "item": wakeUpItem}, {"name": "激流冲击", "item": wakeUpItem},
				{"name": "电闪雷鸣", "item": wakeUpItem}, {"name": "移山之术", "item": wakeUpItem},
				{"name": "浴火凤凰", "item": wakeUpItem}, {"name": "石枪投射", "item": wakeUpItem},
				{"name": "风之真空", "item": wakeUpItem}, {"name": "雷霆之怒", "item": wakeUpItem},
				{"name": "冰枪投射", "item": wakeUpItem}, {"name": "地狱火海", "item": wakeUpItem},
				{"name": "地动山摇", "item": wakeUpItem}, {"name": "狂风怒吼", "item": wakeUpItem},
				{"name": "雷震天惊", "item": wakeUpItem}, {"name": "毒云密布", "item": wakeUpItem},
				{"name": "雪山崩塌", "item": wakeUpItem}, {"name": "风雷狂袭", "item": wakeUpItem},
				{"name": "风沙吞噬", "item": wakeUpItem}, {"name": "陨石坠落", "item": wakeUpItem},
			]
		},
		{
			"name": "呼风唤雨",
			"id": 13845,
			"uid": 14085,
			"wikiName": "呼风唤雨",
			"minAttack": 575,
			"maxAttack": 577,
			"job": "魔导士",
			"attackSpeed": "非常慢",
			"type": "单手武器",
			"imgUrl": "img/weapon/潮汐魔杖.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "攻击力", "min": 15, "max": 20, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 23, "max": 28, fixed: 1, cur: "%"},
				{"name": "智力", "min": 23, "max": 28, fixed: 1,cur: ""},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "反射伤害", "min": 10, "max": 20, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "灵波狂想", "item": wakeUpItem}, {"name": "炙热焰星", "item": wakeUpItem},
				{"name": "螺旋烈风", "item": wakeUpItem}, {"name": "极地冰柱", "item": wakeUpItem},
				{"name": "雷电召唤", "item": wakeUpItem}, {"name": "爆裂突岩", "item": wakeUpItem},
				{"name": "地狱火花", "item": wakeUpItem}, {"name": "龙卷飓风", "item": wakeUpItem},
				{"name": "水球凝聚", "item": wakeUpItem}, {"name": "魔电聚合", "item": wakeUpItem},
				{"name": "灼烈幻火", "item": wakeUpItem},
				{"name": "风之利刃", "item": wakeUpItem}, {"name": "激流冲击", "item": wakeUpItem},
				{"name": "电闪雷鸣", "item": wakeUpItem}, {"name": "移山之术", "item": wakeUpItem},
				{"name": "灵念弹", "item": wakeUpItem}, {"name": "万念俱灰", "item": wakeUpItem},
				{"name": "混沌封印", "item": wakeUpItem}, {"name": "神力攻击", "item": wakeUpItem},
				{"name": "幻象恐惧", "item": wakeUpItem}, {"name": "灵力墙", "item": wakeUpItem}
			]
		},
		{
			"name": "卢萨卡的水晶魔杖",
			"id": 19761,
			"uid": 15903,
			"wikiName": "卢萨卡的水晶魔杖",
			"minAttack": 595,
			"maxAttack": 597,
			"job": "魔导士",
			"attackSpeed": "非常慢",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶魔杖.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "攻击力", "min": 17, "max": 22, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "智力", "min": 25, "max": 30, cur: ""},
				{"name": "减速概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "反射伤害", "min": 10, "max": 20, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "灵波狂想", "item": wakeUpItem}, {"name": "炙热焰星", "item": wakeUpItem},
				{"name": "螺旋烈风", "item": wakeUpItem}, {"name": "极地冰柱", "item": wakeUpItem},
				{"name": "雷电召唤", "item": wakeUpItem}, {"name": "爆裂突岩", "item": wakeUpItem},
				{"name": "地狱火花", "item": wakeUpItem}, {"name": "龙卷飓风", "item": wakeUpItem},
				{"name": "水球凝聚", "item": wakeUpItem}, {"name": "魔电聚合", "item": wakeUpItem},
				{"name": "灼烈幻火", "item": wakeUpItem},
				{"name": "风之利刃", "item": wakeUpItem}, {"name": "激流冲击", "item": wakeUpItem},
				{"name": "电闪雷鸣", "item": wakeUpItem}, {"name": "移山之术", "item": wakeUpItem},
				{"name": "灵念弹", "item": wakeUpItem}, {"name": "万念俱灰", "item": wakeUpItem},
				{"name": "混沌封印", "item": wakeUpItem}, {"name": "神力攻击", "item": wakeUpItem},
				{"name": "幻象恐惧", "item": wakeUpItem}, {"name": "灵力墙", "item": wakeUpItem}
			]
		},
		{
			"name": "卢萨卡魔杖",
			"id": 15677,
			"uid": 12508,
			"wikiName": "卢萨卡魔杖",
			"minAttack": 595,
			"maxAttack": 597,
			"job": "魔导士",
			"attackSpeed": "非常慢",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡魔杖.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "承受伤害", "min": 6, "max": 10, fixed: 1, cur: "%"},
				{"name": "减速概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "反射伤害", "min": 10, "max": 20, fixed: 1, cur: "%"},
				{"name": "移动速度", "min": 2, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "灵波狂想", "item": wakeUpItem}, {"name": "炙热焰星", "item": wakeUpItem},
				{"name": "螺旋烈风", "item": wakeUpItem}, {"name": "极地冰柱", "item": wakeUpItem},
				{"name": "雷电召唤", "item": wakeUpItem}, {"name": "爆裂突岩", "item": wakeUpItem},
				{"name": "地狱火花", "item": wakeUpItem}, {"name": "龙卷飓风", "item": wakeUpItem},
				{"name": "水球凝聚", "item": wakeUpItem}, {"name": "魔电聚合", "item": wakeUpItem},
				{"name": "灼烈幻火", "item": wakeUpItem},
				{"name": "风之利刃", "item": wakeUpItem}, {"name": "激流冲击", "item": wakeUpItem},
				{"name": "电闪雷鸣", "item": wakeUpItem}, {"name": "移山之术", "item": wakeUpItem},
				{"name": "灵念弹", "item": wakeUpItem}, {"name": "万念俱灰", "item": wakeUpItem},
				{"name": "混沌封印", "item": wakeUpItem}, {"name": "神力攻击", "item": wakeUpItem},
				{"name": "幻象恐惧", "item": wakeUpItem}, {"name": "灵力墙", "item": wakeUpItem}
			]
		},
		{
			"name": "塞壬之歌",
			"id": 16918,
			"uid": 11124,
			"wikiName": "塞壬之歌",
			"minAttack": 527,
			"maxAttack": 529,
			"job": "圣职者",
			"attackSpeed": "通用",
			"type": "双手武器",
			"imgUrl": "img/weapon/潮汐魔棒.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "攻击力", "min": 10, "max": 15, fixed: 1, cur: "%"},
				{"name": "治疗", "min": 10, "max": 15, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 26, "max": 30, fixed: 1, cur: "%"},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "治疗", "min": 3, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{
					"name": "治疗",
					"item": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
				},
				{"name": "月光惩戒", "item": wakeUpItem}, {"name": "神圣领域", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡的水晶魔棒",
			"id": 18022,
			"uid": 18617,
			"wikiName": "卢萨卡的水晶魔棒",
			"minAttack": 547,
			"maxAttack": 549,
			"job": "圣职者",
			"attackSpeed": "通用",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶魔棒.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "攻击力", "min": 12, "max": 17, fixed: 1, cur: "%"},
				{"name": "治疗", "min": 12, "max": 17, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 28, "max": 33, fixed: 1, cur: "%"},
				{"name": "智力", "min": 25, "max": 30, fixed: 1, cur: ""},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "治疗", "min": 3, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{
					"name": "治疗",
					"item": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
				},
				{"name": "月光惩戒", "item": wakeUpItem}, {"name": "神圣领域", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡魔棒",
			"id": 15880,
			"uid": 18949,
			"wikiName": "卢萨卡魔棒",
			"minAttack": 547,
			"maxAttack": 549,
			"job": "圣职者",
			"attackSpeed": "通用",
			"type": "双手武器",
			"imgUrl": "img/weapon/卢萨卡魔棒.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "承受伤害", "min": 6, "max": 10, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVE)", "min": 1, "max": 3, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVP)", "min": 1, "max": 3, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "释法速度", "min": 3, "max": 10, fixed: 1, cur: "%"},
				{"name": "治疗", "min": 3, "max": 10, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{
					"name": "治疗",
					"item": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
				},
				{"name": "月光惩戒", "item": wakeUpItem}, {"name": "神圣领域", "item": wakeUpItem},
			]
		},
		{
			"name": "潮汐之拳",
			"id": 14971,
			"uid": 16906,
			"wikiName": "潮汐之拳",
			"minAttack": 543,
			"maxAttack": 545,
			"job": "圣职者",
			"attackSpeed": "快速",
			"type": "单手武器",
			"imgUrl": "img/weapon/潮汐拳套.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 480, "max": 580, fixed: 10, cur: "%"},
				{"name": "暴击", "min": 280, "max": 340, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 90, "max": 115, fixed: 10, cur: "%"},
				{"name": "水炸弹概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "圣光破", "item": wakeUpItem}, {"name": "神光破", "item": wakeUpItem},
				{"name": "圣光大地", "item": wakeUpItem},
				{"name": "背水一击", "item": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]},
				{"name": "血舞", "item": wakeUpItem}, {"name": "星之咒", "item": wakeUpItem},
				{"name": "斗气风暴", "item": wakeUpItem}, {"name": "拳之聚", "item": wakeUpItem},
				{"name": "流星拳", "item": wakeUpItem}, {"name": "冲击拳", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡的水晶拳",
			"id": 14100,
			"uid": 15019,
			"wikiName": "卢萨卡的水晶拳",
			"minAttack": 563,
			"maxAttack": 565,
			"job": "圣职者",
			"attackSpeed": "快速",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡的水晶拳.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "暴击伤害", "min": 550, "max": 650, fixed: 10, cur: "%"},
				{"name": "暴击", "min": 290, "max": 350, fixed: 10, cur: "%"},
				{"name": "攻击速度", "min": 100, "max": 125, fixed: 10, cur: "%"},
				{"name": "击晕概率(PVE)", "min": 1, "max": 3, fixed: 1, cur: "%"},
				{"name": "击晕概率(PVP)", "min": 1, "max": 3, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "圣光破", "item": wakeUpItem}, {"name": "神光破", "item": wakeUpItem},
				{"name": "圣光大地", "item": wakeUpItem},
				{"name": "背水一击", "item": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]},
				{"name": "血舞", "item": wakeUpItem}, {"name": "星之咒", "item": wakeUpItem},
				{"name": "斗气风暴", "item": wakeUpItem}, {"name": "拳之聚", "item": wakeUpItem},
				{"name": "流星拳", "item": wakeUpItem}, {"name": "冲击拳", "item": wakeUpItem},
			]
		},
		{
			"name": "卢萨卡之拳",
			"id": 16135,
			"uid": 12648,
			"wikiName": "卢萨卡之拳",
			"minAttack": 563,
			"maxAttack": 565,
			"job": "圣职者",
			"attackSpeed": "快速",
			"type": "单手武器",
			"imgUrl": "img/weapon/卢萨卡之拳.png",
			"description": "在荒野中发现的制作精良的武器。它充满了力量。国人首把卢萨卡武器由小熊公会团队获得。",
			"list": [
				{"name": "最大HP", "min": 25, "max": 30, fixed: 1, cur: "%"},
				{"name": "体质", "min": 25, "max": 30, fixed: 1, cur: ""},
				{"name": "承受伤害", "min": 6, "max": 10, fixed: 1, cur: "%"},
				{"name": "中毒概率", "min": 4, "max": 9, fixed: 1, cur: "%"},
			],
			"uList": [
				{"name": "暴击伤害", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "格挡穿透", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "暴击率", "min": 30, "max": 100, fixed: 10, cur: "%"},
				{"name": "攻击力", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "生命偷取", "min": 6, "max": 15, fixed: 10, cur: "%"},
				{"name": "增加HP", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "力量", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "体质", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "敏捷", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "智力", "min": 2, "max": 10, fixed: 1, cur: ""},
				{"name": "格挡", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pve伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
				{"name": "pvp伤害", "min": 3, "max": 8, fixed: 1, cur: "%"},
			],
			"wakeUpList": [
				{"name": "圣光破", "item": wakeUpItem}, {"name": "神光破", "item": wakeUpItem},
				{"name": "圣光大地", "item": wakeUpItem},
				{"name": "背水一击", "item": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]},
				{"name": "血舞", "item": wakeUpItem}, {"name": "星之咒", "item": wakeUpItem},
				{"name": "斗气风暴", "item": wakeUpItem}, {"name": "拳之聚", "item": wakeUpItem},
				{"name": "流星拳", "item": wakeUpItem}, {"name": "冲击拳", "item": wakeUpItem},
			]
		}
	];

	const jewelry_up_List = [
		{"eight_probability":0.8888888889,"ten_probability":1},
		{"eight_probability":0.8235294118,"ten_probability":1},
		{"eight_probability":0.4581044448,"ten_probability":0.5569985570},
		{"eight_probability":0.2493069984,"ten_probability":0.2968258491},
		{"eight_probability":0.1418051957,"ten_probability":0.1688875608},
		{"eight_probability":0.0911834689,"ten_probability":0.1088714130},
		{"eight_probability":0.0610808317,"ten_probability":0.0724875434},
		{"eight_probability":0.0409199117,"ten_probability":0.0505493442},
		{"eight_probability":0.0282296525,"ten_probability":0.0322209144},
		{"eight_probability":0.0177362748,"ten_probability":0.0209832282},
		{"eight_probability":0.0120163682,"ten_probability":0.0171175271},
		{"eight_probability":0.0095524157,"ten_probability":0.0136224870},
		{"eight_probability":0.0054401086,"ten_probability":0.0077755964},
		{"eight_probability":0.0038016583,"ten_probability":0.0054401086},
		{"eight_probability":0.0024485555,"ten_probability":0.0035080404},
		{"eight_probability":0.0013861777,"ten_probability":0.0019884101},
		{"eight_probability":0.0006288876,"ten_probability":0.0008906052},
		{"eight_probability":0.0001560417,"ten_probability":0.0002244043},
		{"eight_probability":0.0000766121,"ten_probability":0.0001102193},
		{"eight_probability":0.0000015698,"ten_probability":0.0000022601},
	];

	const jewelry_data_enums = [
		{"cur":"","name":"str","cns":"力量",},
		{"cur":"","name":"int","cns":"智力",},
		{"cur":"","name":"dex","cns":"敏捷",},
		{"cur":"","name":"sta","cns":"体质",},
		{"cur":"","name":"maxhp","cns":"最大HP",},
		{"cur":"%","name":"hprestoration","cns":"HP恢复"},
		{"cur":"","name":"maxmp","cns":"最大MP"},
		{"cur":"%","name":"decreasedmpconsumption","cns":"MP消耗降低"},
		{"cur":"","name":"mprecoveryafterkill","cns":"击杀后MP恢复"},
		{"cur":"","name":"maxfp","cns":"最大FP"},
		{"cur":"%","name":"fprecoveryautoattack","cns":"FP消耗降低"},
		{"cur":"","name":"damage","cns":"追加伤害"},
		{"cur":"","name":"def","cns":"防御"},
		{"cur":"","name":"magicdefense","cns":"魔法防御"},
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

	//单手武器穿洞数值
	const holeList = [
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

	//双手武器穿洞数值
	const doubleholeList = [
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

	const jewelry_data = [
		{"icon":"genjewnecnornec01.png","name":{"cns":"生命之源项链"},"id":6803},
		{"icon":"genjewnecnornec02.png","name":{"cns":"魔力之源项链"},"id":9233},
		{"icon":"genjewnecnornec03.png","name":{"cns":"活力之源项链"},"id":8646},
		{"icon":"genjewearnorear01.png","name":{"cns":"白银耳环"},"id":7178},
		{"icon":"genjewearnorear02.png","name":{"cns":"金刚耳环"},"id":8369},
		{"icon":"genjewrinnorrin01.png","name":{"cns":"力量戒指"},"id":5536},
		{"icon":"genjewrinnorrin02.png","name":{"cns":"智力戒指"},"id":2064},
		{"icon":"genjewrinnorrin03.png","name":{"cns":"敏捷戒指"},"id":1764},
		{"icon":"genjewrinnorrin04.png","name":{"cns":"体质戒指"},"id":6531}
	];
	
	//强化次数,金币,黄矿,绿矿,失败次数,武器强化等级,4点数量,8点数量,武器索引值
	let up_num = 0,gold = 0,yellow = 0,green = 0, failure_num = 0,weapon_lv = 0,four_num = 0,eight_num = 0 ,weapon_index = 0;
	//首饰当前强化等级
	let jewelry_lv = 0;
	//8点使用数量
	let jewelry_eight_num = 0;
	//10点使用数量
	let jewelry_ten_num = 0;
	//首饰精炼次数
	let jewelry_up_num = 0;
	//首饰精炼总次数
	let jewelry_up_all_num = 0;
	//首饰精炼失败次数
	let jewelry_failure_num = 0;
	//首饰精炼失败总次数
	let jewelry_failure_all_num = 0;
	//使用low卷数量
	let weapon_low_up_num=0;
	//使用防暴卷数量
	let weapon_up_num=0;
	//抽取幸运礼盒次数
	let lucky_box_num=0;
	//当前唤醒值
	let now_attribute;
	//成功概率
	let probability = 0.000000;
	//首饰成功概率
	let jewelry_probability = 0.0000000000;
	//成功概率
	let low_probability = 0.000000;
	//唤醒列表
	let wakeUpList = [];
	let pet_lv;
	let now_lv = 0;
	let money = 0;
	//献祭次数
	let pet_num = 0;
	//当前宠物
	let now_pet;
	let boss_weapon_list = [];
	//150制作武器基础概率 0.001%  闪亮12点 0.0015%
	const get_150_weapon_probability = 0.00001;
	//120制作武器基础概率 1.5%  闪亮12点 2%
	const get_120_weapon_probability = 0.015;
	//var get_weapon_probability_12 = 0.000015;
	let get_150_weapon_num = 0;
	let get_120_weapon_num = 0;
	let stop = false;
	let sacrifice_stop = false;
	let pet_up_stop = false;
	let kill_hai_boss_stop = false;
	let kill_boss_stop = false;
	let weapon_low_up_stop = false;
	let weapon_up_stop = false;
	let attribute_up_stop = false;
	let jewelry_up_stop = false;


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
			errorMsg("get_weapon没有对应的武器类型"+parseInt(index));
			return;
		}

		const weaponObj = data.find(obj => obj.id === parseInt(index));
		if(weaponObj == null){
			errorMsg("get_weapon没有对应的武器类型"+index);
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
		str += '<span style="color: aliceblue">攻击速度:'+weaponObj.attackSpeed+'</span></br>';
		const list = weaponObj.list;

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
			const addStr = obj.name === "承受伤害" ? '-' : '+';
			str +='<span style="color: #ffeaa5">'+ obj.name + addStr + randomNum + ' (' + minNum+'~'+maxNum+')'+obj.cur+'</span><br>';
		}
		//职业要求
		str += '<span job_span style="color: aliceblue">职业要求:'+weaponObj.job+'</span></br>';
		//等级要求
		str += '<span style="color: aliceblue">等级要求:150</span></br>';
		//品质
		str += '<span style="color: aliceblue">品质: <span color_red>史诗</span></span></br>';
		//描述
		str += '<span style="color: aliceblue" weapon_description>描述:</br> '+weaponObj.description+'</span>';

		//强化次数
		// str += '</br></br><span style="color: #b3b3b3">强化次数: 0';
		// str += '</br><span style="color: #b3b3b3">穿洞次数: 0';

		$("[weapon_bottom_text]").html(weaponObj.name);
		$("[weapon_img]").attr("src",weaponObj.imgUrl)

		$("[weapon-attributes]").prepend(str);
		$("[weapon_roll_div]").removeClass("hide");
	}

	function errorMsg(str){
		$("[txt_div]").prepend("<p class='alert alert-info' error_msg>"+str+"</p>");
	}
