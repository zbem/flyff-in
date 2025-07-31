//角色初始化
const role_init = [
    {
        key: "id",
        value: [
            {key: "id", value: null, label: "id"},
            {key: "classId", value: 9686, label: "职业id"},
        ]
    },
    //基础属性
    {
        key: "basicStats",
        value: [
            {key: "name", value: "可爱小游", label: `<span>名称</span>`},
            {key: "level", value: 1, label: "等级"},
            {key: "job", value: "初心者", label: "职业"},
            {key: "maxHP", value: 170, label: "最大HP"},
            {key: "maxMP", value: 63, label: "最大MP"},
            {key: "maxFP", value: 32, label: "最大FP"},
            {key: "moveSpeed", value: null, label: "移动速度"},
            {key: "jumpHeight", value: null, label: "跳跃高度"},
            {key: "castSpeed", value: null, label: "释放速度"},
            {key: "hpRegen", value: null, label: "HP恢复"},
            {key: "mpCostReduction", value: null, label: "MP消耗降低"},
            {key: "fpCostReduction", value: null, label: "FP消耗降低"},
            {key: "mpKillRecovery", value: null, label: "MP击杀恢复"},
            {key: "hpKillRecovery", value: null, label: "HP击杀恢复"},
        ]
    },
    //攻击属性
    {
        key: "attackStats",
        value: [
            {key: "attack", value: 9, label: "攻击力"},
            {key: "attackSpeed", value: "42%", label: "攻击速度"},
            {key: "accuracy", value: "3%", label: "命中率"},
            {key: "criticalRate", value: "1%", label: "暴击率"},
            {key: "pveDamage", value: null, label: "PvE伤害"},
            {key: "kalkasBossDamage", value: null, label: "卡尔卡斯Boss伤害"},
            {key: "pvpDamage", value: null, label: "PvP伤害"},
        ]
    },
    //元素精通属性
    {
        key: "elementMastery",
        value: [
            {
                key: "electricityMastery",
                value: null,
                label: `<img src="../../img/element/electricity.png" alt="雷">精通`
            },
            {key: "fireMastery", value: null, label: `<img src="../../img/element/fire.png"   alt="火">精通`},
            {key: "waterMastery", value: null, label: `<img src="../../img/element/water.png"  alt="水">精通`},
            {key: "windMastery", value: null, label: `<img src="../../img/element/wind.png"   alt="风">精通`},
            {key: "earthMastery", value: null, label: `<img src="../../img/element/earth.png"  alt="土">精通`},
        ]
    },
    //元素攻击力属性
    {
        key: "elementAttackPower",
        value: [
            {
                key: "electricityAttack",
                value: null,
                label: `<img src="../../../img/element/electricity.png" alt="雷">攻击力`
            },
            {key: "fireAttack", value: null, label: `<img src="../../../img/element/fire.png"   alt="火">攻击力`},
            {key: "waterAttack", value: null, label: `<img src="../../../img/element/water.png"  alt="水">攻击力`},
            {key: "windAttack", value: null, label: `<img src="../../../img/element/wind.png"   alt="风">攻击力`},
            {key: "earthAttack", value: null, label: `<img src="../../../img/element/earth.png"  alt="土">攻击力`},
        ]
    },
    //防御属性
    {
        key: "defenseStats",
        value: [
            {key: "defense", value: 0, label: "防御力"},
            {key: "magicDefense", value: 22, label: "魔法防御力"},
            {key: "evasion", value: "7%", label: "闪避"},
            {key: "criticalResistance", value: null, label: "暴击抗性"},
            {key: "pvpDamageReduction", value: null, label: "PvP伤害减免"},
            {key: "pveDamageReduction", value: null, label: "PvE伤害减免"},
            {key: "meleeBlock", value: null, label: "近距离格挡"},
            {key: "rangedBlock", value: null, label: "远距离格挡"},
        ]
    },
    //元素抗性属性
    {
        key: "elementResistance",
        value: [
            {
                key: "electricityResistance",
                value: null,
                label: `<img src="../../../img/element/electricity.png"   alt="雷">抵抗`
            },
            {key: "fireResistance", value: null, label: `<img src="../../../img/element/fire.png"   alt="火">抵抗`},
            {key: "waterResistance", value: null, label: `<img src="../../../img/element/water.png"  alt="水">抵抗`},
            {key: "windResistance", value: null, label: `<img src="../../../img/element/wind.png"   alt="风">抵抗`},
            {key: "earthResistance", value: null, label: `<img src="../../../img/element/earth.png"  alt="土">抵抗`},
        ]
    },
    //角色属性点
     {
        key: "role_attr",
        label: "角色属性点",
        attr_value: 0,   //可分配属性点
        value: [
            {key: "dex", label: "敏捷", value: 15},
            {key: "int", label: "智力", value: 15},
            {key: "sta", label: "体质", value: 15},
            {key: "str", label: "力量", value: 15}
        ]
     }

];

let class_data;
let now_role_init;
//职业数据 初心者:9686
$.getJSON(`json/class.json`).success(function(data){
    class_data = data;
    console.log("职业数据:");
    console.log(data);
});

function getWeaponAttack(subcategory) {
    let levelFactor = 0;
    let statValue = 0;
    let addValue = 0;

    let str = getFind("role_attr", "str").value;
    let int = getFind("role_attr", "int").value;
    let dex = getFind("role_attr", "dex").value;
    let level = getFind("basicStats","level").value;
    let classId = getFind("id","classId").value;

    //根据武器子类型(subcategory)设置不同的等级系数和属性值
    switch (subcategory) {
        case "sword":
        case "yoyo":
            levelFactor = 1.1;
            statValue = str - 12;
            break;
        case "axe":
            levelFactor = 1.2;
            statValue = str - 12;
            break;
        case "staff":
        case "hand":
            levelFactor = 1.1;
            statValue = str - 10;
            break;
        case "stick":
            levelFactor = 1.3;
            statValue = str - 10;
            break;
        case "knuckle":
            levelFactor = 1.2;
            statValue = str - 10;
            break;
        case "wand":
            levelFactor = 1.2;
            statValue = int - 10;
            break;
        case "bow":
            levelFactor = 0.91;
            statValue = dex - 14;
            addValue = 0.14 * str;
            break;
    }

    //空手攻击力最小值
    var min_attack = 1;
    //空手攻击力最大值
    var max_attack = 2;

    //基础攻击力
    const plusAttack = (min_attack*2+max_attack*2)/2;
    // 空手是 力量属性 *1  力量修正后 5*1 = 5
    const statAttack = statValue * ((subcategory === "hand") ? 1 : class_data.find(obj => obj.id === classId).autoAttackFactors[subcategory]);
    // 等级*1.1   1级 1.1
    const levelAttack = level * levelFactor;

    return plusAttack + Math.floor(statAttack + levelAttack + addValue);
}


// 第一次进入
if (localStorage.getItem('role_init') == null) {
    // 初始化的ID为当前时间戳
    role_init.find(obj => obj.key === "id").value[0].value = new Date().getTime();
    // 把 role_init 存入 Local Storage
    localStorage.setItem('role_init', JSON.stringify(role_init));
    // now_role_init 复制 role_init 数据（深拷贝）
    now_role_init = JSON.parse(JSON.stringify(role_init));
} else {
    // 获取数据
    now_role_init = JSON.parse(localStorage.getItem('role_init'));
}

init_data();

//重置数据
function remove_init_data(){
    // 删除名为 "role_init" 的键值对
    localStorage.removeItem("role_init");

    now_role_init.find(obj => obj.key === "id").value[0].value = new Date().getTime();
    // now_role_init 复制 role_init 数据（深拷贝）
    now_role_init = JSON.parse(JSON.stringify(role_init));
    init_data();
    layer.msg("重置成功!");
}

//初始化数据
function init_data(){
    //组装基础数据
    $(now_role_init).each(function (index, obj) {
        if(obj.key === "id" || obj.key === "role_attr") {
            return;
        }
        //清空数据
        $(`#${obj.key}`).html("");

        $(obj.value).each(function (i,value_obj){
            if(value_obj.value === null) {
                return;
            }

            $(`#${obj.key}`).append(` 
                <div class="col-xs-4">${value_obj.label}</div><div class="col-xs-2" id="${value_obj.key}" attr>${value_obj.value}</div>
            `);
        })
    });


    //当前属性点
    var role_attr_value = getFindValue("role_attr").attr_value;

    //组装基础数据
    var str = `
        <div class="col-xs-12 text-center" attr_page>当前属性页:1</div>
        <div attr_footer_div>
            <div class="col-xs-4" > 属性点 </div>
            <div class="col-xs-4"><div attr_separator></div>${role_attr_value}</div>
            <div class="col-xs-4"><div attr_separator></div>切换属性页</div>
        </div>
    `
    $(getFindValue("role_attr").value).each(function (index, obj) {
        if(obj.key !== "role_attr") {
             str += `
                <div class="col-xs-12" height_35 ${obj.key}>
                    <div class="col-xs-2" margin_5_0 attr_label>${obj.label}</div>
                    <div class="col-xs-3" margin_5_0 attr_value>${obj.value}</div>
                    <div class="col-xs-1" margin_5_0 attr_up_value>0</div>
                    <div class="col-xs-6" margin_5_0 >
                        <div attr_up>+</div><div attr_num>0</div><div attr_down>-</div>
                    </div>
                </div>
            `;
            const obj_key = obj.key;

            $(`[${obj_key}] [attr_up]`).on("click", function () {
                if(role_attr_value <= 0){
                    console.log("没有属性点");
                    return;
                }
                //可分配属性点减1
                getFindValue("role_attr").attr_value = role_attr_value - 1;
                //备选当前属性加1
                $(`[${obj_key}] [attr_up_value]`).value = parseInt($(`[${obj_key}] [attr_up_value]`).value) + 1;
            });

            $(`[${obj_key}] [attr_down]`).on("click", function () {
                if(role_attr_value <= 0){
                    console.log("没有属性点");
                    return;
                }
                //可分配属性点加1
                getFindValue("role_attr").attr_value = role_attr_value + 1;
                //备选当前属性减1
                $(`[${obj_key}] [attr_down]`).value = parseInt($(`[${obj_key}] [attr_down]`).value) - 1;
            });
        }
    });


    $("#characterInfo").html(str);
    layer.msg("数据已更新");
}


//保存属性
function save_attr(){
    // $("[attr_up_value]")
}

//升级
function level_up(){
    if(now_role_init == null){
        layer.msg("当前没有角色数据");
        return;
    }

    //当前等级
    let level = getFind("basicStats","level").value;
    let sta = getFind("role_attr", "sta").value;
    let int = getFind("role_attr", "int").value;
    let dex = getFind("role_attr", "dex").value;
    let str = getFind("role_attr", "str").value;

    //职业id
    const classId = now_role_init.find(e =>e.key==="id").value.find(obj => obj.key === "classId").value;
    //获取官方职业数据
    let class_obj = class_data.find(obj=>obj.id === classId);
    //最大等级不能超过
    if(level >= class_obj.maxLevel){
        layer.msg(class_obj.name.cns+"最大等级不能超过"+class_obj.maxLevel+"级");
        return;
    }

    //等级+1
    level++;

    //等级
    getFind("basicStats","level").value = level;
    //生命值  "maxHP": "150+level*18+sta*level*0.18"
    getFind("basicStats","maxHP").value = Math.floor(150+level*18+sta*level*0.18);
    //活力值  "maxFP": "level*0.6+sta*2.1"
    getFind("basicStats","maxFP").value = Math.floor(level*0.6+sta*2.1);
    //魔法值  "maxMP": "22+level*0.6+int*2.7"
    getFind("basicStats","maxMP").value = Math.floor(22+level*0.6+int*2.7);
    //攻击力(空手)
    getFind("attackStats","attack").value = getWeaponAttack("hand");
    //属性点+2
    getFindValue("role_attr").attr_value = getFindValue("role_attr").attr_value+2;

    layer.msg("升级成功!");
    console.log(now_role_init);

    //把 role_init 存入Local Storage
    localStorage.setItem('role_init', JSON.stringify(now_role_init));
    //初始化
    init_data();
}

function getFind(key1,key2) {
    return now_role_init.find(e => e.key === key1).value.find(obj => obj.key === key2);
}
function getFindValue(key1) {
    return now_role_init.find(e => e.key === key1);
}
