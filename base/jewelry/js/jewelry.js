//首饰当前强化等级
let jewelry_lv = 0;
//太阳石+防暴卷使用数量
let new_jewelry_sun_num = 0;
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
//首饰成功概率
let jewelry_probability = 0.0000000000;

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

const jewelry = [
    {probability: 0.0073587053, fwc_probability: 0.0073587053 * 2},
    {probability: 0.0038016583, fwc_probability: 0.0038016583 * 2},
    {probability: 0.0013861777, fwc_probability: 0.0013861777 * 2},
    {probability: 0.0003499415, fwc_probability: 0.0003499415 * 2},
    {probability: 0.0001560417, fwc_probability: 0.0001560417 * 2},
];
const jewelry_up_ten_List = [
    {probability:1,fwc_probability:1},
    {probability:1,fwc_probability:1},
    {probability:0.5569985570,fwc_probability:1},
    {probability:0.2968258491,fwc_probability:0.2968258491*2},
    {probability:0.1688875608,fwc_probability:0.1688875608*2},
    {probability:0.1088714130,fwc_probability:0.1088714130*2},
    {probability:0.0724875434,fwc_probability:0.0724875434*2},
    {probability:0.0505493442,fwc_probability:0.0505493442*2},
    {probability:0.0322209144,fwc_probability:0.0322209144*2},
    {probability:0.0209832282,fwc_probability:0.0209832282*2},
    {probability:0.0171175271,fwc_probability:0.0171175271*2},
    {probability:0.0136224870,fwc_probability:0.0136224870*2},
    {probability:0.0077755964,fwc_probability:0.0077755964*2},
    {probability:0.0054401086,fwc_probability:0.0054401086*2},
    {probability:0.0035080404,fwc_probability:0.0035080404*2},
    {probability:0.0019884101,fwc_probability:0.0019884101*2},
    {probability:0.0008906052,fwc_probability:0.0008906052*2},
    {probability:0.0002244043,fwc_probability:0.0002244043*2},
    {probability:0.0001102193,fwc_probability:0.0001102193*2},
    {probability:0.0000022601,fwc_probability:0.0000022601*2},
];

const jewelry_up_eight_List = [
    {probability:0.8888888889,fwc_probability:1},
    {probability:0.8235294118,fwc_probability:1},
    {probability:0.4581044448,fwc_probability:0.4581044448*2},
    {probability:0.2493069984,fwc_probability:0.2493069984*2},
    {probability:0.1418051957,fwc_probability:0.1418051957*2},
    {probability:0.0911834689,fwc_probability:0.0911834689*2},
    {probability:0.0610808317,fwc_probability:0.0610808317*2},
    {probability:0.0409199117,fwc_probability:0.0409199117*2},
    {probability:0.0282296525,fwc_probability:0.0282296525*2},
    {probability:0.0177362748,fwc_probability:0.0177362748*2},
    {probability:0.0120163682,fwc_probability:0.0120163682*2},
    {probability:0.0095524157,fwc_probability:0.0095524157*2},
    {probability:0.0054401086,fwc_probability:0.0054401086*2},
    {probability:0.0038016583,fwc_probability:0.0038016583*2},
    {probability:0.0024485555,fwc_probability:0.0024485555*2},
    {probability:0.0013861777,fwc_probability:0.0013861777*2},
    {probability:0.0006288876,fwc_probability:0.0006288876*2},
    {probability:0.0001560417,fwc_probability:0.0001560417*2},
    {probability:0.0000766121,fwc_probability:0.0000766121*2},
    {probability:0.0000015698,fwc_probability:0.0000015698*2},
];


let item_json_list = [];

$(document).ready(function() {
    //页面元素可移动
    WinMove();
    // 当页面加载完成后，给 body 元素添加自定义光标样式
    $('body').addClass('custom-cursor');

    $.getJSON(`json/jewelry.json`).success(function(data){
        item_json_list.push(data);

        $(item_json_list.flat()).each(function(i,obj){
            if(obj == null){
                return ;
            }
            $("[jewelry_list]").append(`
                <div class="col-xs-2" btn_weapon onclick="get_jewelry(${obj.id})" style="text-align: center;">
                    <img src="../../img/items/${obj.icon}" alt="${obj.name.cns}"><br>
                    <span class="hide">${obj.id}</span><br>
                </div>
            `);
        });
    });
});

function find_item_json(keyword){
    if(keyword === null ||  keyword.toString().trim() === ""){
        return ;
    }
    const item_list = item_json_list.flat();

    for(let i = 0 ; i < item_list.length ; i++){
        let item = item_list[i];

        if ($("[json_id_" + item.id + "]").length !== 0) {
            continue;
        }

        if (item.name != null && item.name.cns != null && item.name.cns.includes(keyword) || item.id === parseInt(keyword)) {
            return item;
        }
    }
}

function get_jewelry(index){
    $("[jewelry_div]").remove();
    $("[jewelry_msg_div]").html("");
    $("[jewelry_all_msg]").html("");
    if(index == null){
        layer.msg("get_jewelry没有对应的index:"+index);
        return;
    }

    const jewelry_Obj = find_item_json(index);
    if(jewelry_Obj == null){
        layer.msg("get_jewelry没有对应的类型"+index);
        return;
    }
    //首饰当前强化等级
    jewelry_lv = 0;
    //首饰精炼次数
    jewelry_up_num = 0;
    //首饰精炼总次数
    jewelry_up_all_num = 0;
    //失败次数
    jewelry_failure_num = 0;
    //失败总次数
    jewelry_failure_all_num = 0;
    //太阳石+防暴卷使用数量
    new_jewelry_sun_num = 0;

    if(jewelry_Obj.rarity === 'uncommon'){
        $("[new_jewelry_up_btn]").hide();
        $("[jewelry_up_btn]").show();
    }else{
        $("[jewelry_up_btn]").hide();
        $("[new_jewelry_up_btn]").show();
    }


    $("[weapon_bottom_text]").html(jewelry_Obj.name);

    let htmlStr = '';
    if(jewelry_Obj.upgradeLevels !== null){
        let  upgradeLevels =  jewelry_Obj.upgradeLevels[jewelry_Obj.level-1].abilities;

        $(upgradeLevels).each(function (i,obj){
            let find_enums= jewelry_data_enums.find(e => e.name === obj.parameter);
            htmlStr += `<span style="color: #dfce93" >${find_enums.cns}+${obj.add}${find_enums.cur}</span></br>`;
        })
    }

    let jewelry_color = jewelry_Obj.rarity === 'uncommon' ?'#ad5917':'#8000ff';

    $("[weapon-attributes]").prepend(`
        <div class="alert alert-info" jewelry_div  id="${jewelry_Obj.id}">
            <img src="../../img/items/${jewelry_Obj.icon}" alt="${jewelry_Obj.cns}"><br>
            <span style="color: ${jewelry_color};" jewelry_name>${jewelry_Obj.name.cns}</span>
            <span style="color: ${jewelry_color}" jewelry_lv="0"></span></br>
            <div jewelry_value>${htmlStr}</div>
            <span style="color: #ecebea" >等级要求 : ${jewelry_Obj.upgradeLevels[0].requiredLevel}</span></br>
            <span style="color: #ecebea" >品质 : </span><span style="color: ${jewelry_color} ;text-transform: capitalize;margin-left: 3px;">${jewelry_Obj.rarity}</span></br>
            <span style="color: #ecebea" jewelry_description>描述 : </br>${jewelry_Obj.description.cns}</span></br>
            <span style="color: #9f9e9b" >精炼次数:</span><span jewelry_num style="color: #9f9e9b">${jewelry_failure_num}</span></br>
        </div>
     `);
}

function jewelry_up(dice,max_lv){
    //首饰已经强化到最高
    if(Number($("[jewelry_lv]").attr("jewelry_lv")) === max_lv || $("[jewelry_lv]").length === 0){
        return ;
    }
    //获取当前强化等级
    jewelry_lv = $("[jewelry_lv]").attr("jewelry_lv");
    jewelry_lv = Number(jewelry_lv);

    //获取强化精炼数据
    let jewelry_up_obj = get_jewelry_up_obj(dice);
    if(jewelry_up_obj == null){
        return ;
    }

    if(parseInt(dice) === 999){
        new_jewelry_sun_num++;
    }
    if(parseInt(dice) === 8){
        jewelry_eight_num++;
    }
    if(parseInt(dice) === 10){
        jewelry_ten_num++;
    }

    //精炼次数
    jewelry_up_all_num++;
    jewelry_up_num++;

    //第一次强化初始值
    if(jewelry_probability === 0.0000000000){
        jewelry_probability = jewelry_up_obj.fwc_probability;
    }

    let str = '';
    // 生成一个0到1之间的随机数
    let randomNum = Math.random().toFixed(10);

    //是否精炼成功
    if(randomNum <= jewelry_probability){
        let jewelry_probability_str = jewelry_probability*100;
        jewelry_probability_str = parseFloat(jewelry_probability_str).toFixed(5);
        //成功后统计数据
        $("[jewelry_all_msg]").prepend(`
            <div class="col-xs-6">+${jewelry_lv+1}${jewelry_lv >= 9 ? '&nbsp;' : '&nbsp;&nbsp;&nbsp;'}次数:${jewelry_up_num}</div>
            <div class="col-xs-6">概率:${jewelry_probability_str}%</div>
        `);

        //成功后精炼次数清0;
        jewelry_failure_num =0;
        //首饰强化次数清0
        jewelry_up_num=0
        jewelry_lv++;
        str+='<div class="col-xs-6" color_green>精炼+'+jewelry_lv+'成功!<br></div>';
        if(jewelry_lv !== max_lv){
            //成功后重置新的概率
            jewelry_up_obj = get_jewelry_up_obj(dice);
            jewelry_probability = jewelry_up_obj.fwc_probability;
        }

        const jewelry_id = $("[jewelry_div]").attr("id");
        const jewelry_obj = find_item_json(jewelry_id);
        if(jewelry_obj != null){
            //属性变更
            if(jewelry_obj.upgradeLevels !== null){
                let upgradeLevels =  jewelry_obj.upgradeLevels[jewelry_lv].abilities;
                let htmlStr = '';
                $(upgradeLevels).each(function (i,obj){
                    let find_enums= jewelry_data_enums.find(e => e.name === obj.parameter);
                    htmlStr += `<span style="color: #dfce93" >${find_enums.cns}+${obj.add}${find_enums.cur}</span></br>`;
                })

                $("[jewelry_value]").html(htmlStr);
            }
        }
    }else {
        //失败次数
        jewelry_failure_num++;
        //失败总次数
        jewelry_failure_all_num++;
        //失败累加基础强化概率
        jewelry_probability = jewelry_up_obj.fwc_probability+jewelry_probability;

        //成功概率不能大于1
        jewelry_probability = jewelry_probability >= 1 ? 1 : jewelry_probability;

        str+=`<div class='col-xs-6' color_red>精炼+${jewelry_lv+1}失败!</div>`;
    }

    $("[jewelry_num]").html(jewelry_failure_num);
    $("[jewelry_lv]").html(jewelry_lv === 0 ? "" : ("+"+jewelry_lv));
    $("[jewelry_lv]").attr("jewelry_lv",jewelry_lv);

    let jewelry_probability_str = jewelry_probability*100;
    jewelry_probability_str = parseFloat(jewelry_probability_str).toFixed(5);

    str+=`
			<div class='col-xs-6'>当前成功率${jewelry_probability_str}%</div>
			<div class="col-xs-6">强化总次数:${jewelry_up_all_num}</div>
			<div class="col-xs-6">失败总次数:${jewelry_failure_all_num}</div>
		`;
    //强化内容
    $("[jewelry_msg_div]").html(str);
}

function get_jewelry_up_obj(dice){
    if(parseInt(dice) === 999){
        return jewelry[jewelry_lv];
    }
    if(parseInt(dice) === 8){
        return jewelry_up_eight_List[jewelry_lv];
    }
    if(parseInt(dice) === 10){
        return jewelry_up_ten_List[jewelry_lv];
    }
}
