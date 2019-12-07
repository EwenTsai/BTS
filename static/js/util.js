// 获取地址栏的参数
function getRequest() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
//检查cookies
function check() {
    //本地无登陆过的cookie信息，返回-1
    var uid;
    if (getCookie("uid")==null){
        uid = -1;
        //本地的cookie数据为空时，移除移除购物车和订单管理的按钮
        var cart = document.getElementById("cart");
        var order = document.getElementById('order');
        cart.parentNode.removeChild(cart);
        order.parentNode.removeChild(order);
    }else {
        uid = getCookie("uid");
    }
    var ajax;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        ajax=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        ajax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if(ajax.readyState===4 && ajax.status===200){
            var respones = ajax.responseText;
            //后端返回的user为null时，转化的json是空
            if(respones!==""){
                //后端返回单个对象的时候需要添加括号，否则无法识别
                var jsonObj = eval('('+respones+')');
                document.cookie = "username="+jsonObj.uname;
                showUserName();
            }
        }
    }
    ajax.open("get","/BTS/api/user/check?uid="+uid);
    ajax.send(null);
}
//将登陆信息在前端展示
function showUserName() {
    var username = document.getElementById("login");
    var cart = document.getElementById("cart");
    var order = document.getElementById('order');

    username.href = "/BTS/message.html";
    username.innerHTML = getCookie("username");
    cart.class = "dropdown-item";
    order.class = "dropdown-item";
    cart.href = "cart.html";
}
//读取cookie
function getCookie(name)
{
    if (document.cookie.length>0)
    {
        start=document.cookie.indexOf(name + "=");//返回某指定值在字符串中首次出现的位置。
        if (start!=-1)
        {
            start = start + name.length+1;
            end=document.cookie.indexOf(";",start);//返回';'在字符串中首次出现的位置。
            end=document.cookie.indexOf(";",start);//返回';'在字符串中首次出现的位置。
            if (end ==-1)
                end = document.cookie.length;
            var result = unescape(document.cookie.substring(start,end));
        }
    }
    return result;
}