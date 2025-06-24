// 加载 CSS
$("<link>").attr({href: "waifu/assets/waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('head');

// 加载 JS
$.ajax({
    url: 'waifu/assets/waifu-tips.js',
    dataType:"script",
    cache: true,
    async: false
});
$.ajax({
    url: 'waifu/assets/live2d.js',
    dataType:"script",
    cache: true,
    async: false
});

/* 在 initModel 前添加 */
initModel('waifu/assets/');