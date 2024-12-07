//开头问候
var helloImg = document.querySelector(".hello_img");
var helloTxt = document.querySelector(".hello h1");
var nows = document.querySelector(".nows");
var data = new Date();
var newhour = data.getHours();
console.log(newhour);
var times = setInterval(() => {
    var Data = new Date();
    var newhour = Data.getHours();
    console.log(newhour);
    nows.innerText="当前时间："+Data.toLocaleString();
}, 1000);

if(newhour>=4&&newhour<=11) {
    helloChange("早上");
} else if(newhour>=12&&newhour<=19) {
    helloChange("下午");
} else helloChange("晚上");

function helloChange(obj) {
    var item = obj;
    if(item === "晚上") {
        helloImg.setAttribute("style","background-position:0 -156px;");
        helloTxt.innerText="晚上好！(´▽`ʃ♡ƪ)";
    } else if(item === "下午") {
        helloImg.setAttribute("style","background-position:-155px 0;");
        helloTxt.innerText="下午好！(+_+)?";
    } else {
        helloImg.setAttribute("style","background-position:0 0;");
        helloTxt.innerText="早上好！¿($_$)";
    }
}

// 点击关闭二维码
function qrChange(className) {
    var el = document.querySelector(".qrcode");
    el.classList.toggle(className);
}

// 循环精灵图
var loop = document.querySelectorAll(".cycle li div");
var looptxt = document.querySelectorAll(".cycle li p");
var txt = ["充话费","车险","旅游","游戏","彩票","电影","酒店","理财"];
console.log(loop);
console.log(looptxt);
for(var i=0;i<loop.length;i++) {
    loop[i].setAttribute("style","background-position: 3px"+" -"+44*i+"px;");
    looptxt[i].innerText=txt[i];
}

// 设置密码
var Blur = document.querySelector(".Pass input");
var wrong = document.querySelector(".wrong");
var right = document.querySelector(".right");
console.log([Blur]);

function Hinttext() {
    if(Blur.value.length>=6&&Blur.value.length<=16) {
        right.setAttribute("style","display:block;");
        wrong.setAttribute("style","display:none;");
    } else {
        wrong.setAttribute("style","display:block;");
        right.setAttribute("style","display:none;");
    }
}

// 全选不选和反选
var Select = document.querySelectorAll(".Sel_code");
var all = document.querySelector(".all");
var none = document.querySelector("reverse");
console.log(Select);

function selectCheck(button) {
    if(button==="all") {
        for(var i=0;i<Select.length;i++) {
            Select[i].checked=true;
        }
    } else if(button==="none") {
        for(var i=0;i<Select.length;i++) {
            Select[i].checked=false;
        }
    } else {
        for(var i=0;i<Select.length;i++) {
            if(Select[i].checked===false) {
                Select[i].checked=true;
            } else {
                Select[i].checked=false;
            }
        }
    }
}