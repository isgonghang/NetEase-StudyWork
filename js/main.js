//通知条模块
var tips_module=(function(){
	function getCookie(Name) {
	    var cookie = {};
	    var all = document.cookie;
	    if (all === '')
	        return null;
	    var list = all.split(';');
	    for (var i = 0; i < list.length; i++) {
	        var item = list[i];
	        var p = item.indexOf('=');
	        var name = item.substring(0, p);
	        name = decodeURIComponent(name);
	        var value = item.substring(p + 1);
	        value = decodeURIComponent(value);
	        cookie[name] = value;
	    }
	    return cookie[Name];
	}

	/*设置cookie*/
	function setCookie(name, value, expires, path, domain, secure) {
	    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	    if (expires)
	        cookie += ';expires=' + expires.toGMTString();
	    if (path)
	        cookie += ';path=' + path;
	    if (domain)
	        cookie += ';domain=' + domain;
	    if (secure)
	        cookie += ';secure=' + secure;
	    document.cookie = cookie;
	}

	//删除cookie
	function removeCookie(name, path, domain) {
	    setCookie(name, '', new Date(0), path, domain);
	}	

  	var ctips=document.getElementsByClassName("tips-no")[0];
  	var htips=document.getElementsByClassName("m-tips")[0];
  	ctips.onclick=function clickTips(){
  	    htips.style.display="none";
  	    setCookie("display","none",new Date(2050,11,17));
  	}
	//加载页面时检查cookie
	window.onload=function checkCookie(){
		var cookie=getCookie("display");
		var htips=document.getElementsByClassName("m-tips")[0];
		if(cookie!=null){
			htips.style.display="none";
		}else{
			htips.style.display="block";
		}
	}
})();
//登陆模块
var login_module=(function(){
	function getCookie(Name) {
	    var cookie = {};
	    var all = document.cookie;
	    if (all === '')
	        return null;
	    var list = all.split(';');
	    for (var i = 0; i < list.length; i++) {
	        var item = list[i];
	        var p = item.indexOf('=');
	        var name = item.substring(0, p);
	        name = decodeURIComponent(name);
	        var value = item.substring(p + 1);
	        value = decodeURIComponent(value);
	        cookie[name] = value;
	    }
	    return cookie[Name];
	}

	/*设置cookie*/
	function setCookie(name, value, expires, path, domain, secure) {
	    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	    if (expires)
	        cookie += ';expires=' + expires.toGMTString();
	    if (path)
	        cookie += ';path=' + path;
	    if (domain)
	        cookie += ';domain=' + domain;
	    if (secure)
	        cookie += ';secure=' + secure;
	    document.cookie = cookie;
	}

	//删除cookie
	function removeCookie(name, path, domain) {
	    setCookie(name, '', new Date(0), path, domain);
	}	

	//判断登录的cookie是否已设置
	function checkLogin(){
		var oCookie=getCookie("login");
		if(oCookie==null){
			var oBtn=document.getElementsByClassName("h-btn")[0];
			//判断登录的cookie是否已设置
			oBtn.onclick=function(){
				var oMask=document.getElementById("mask");
				var oLogin=document.getElementById("login");
				oMask.style.display ="block";
				oLogin.style.display ="block";
				oMask.style.width=document.documentElement.scrollWidth+"px";
				oMask.style.height=document.documentElement.scrollHeight+"px";
			var oClose=document.getElementById("close");
				var oClose1=document.getElementsByClassName("cancel-btn")[0];
				oClose1.onclick=function(){
					oMask.style.display="none";
					oLogin.style.display ="none";
				}
				oClose.onclick=function(){
					oMask.style.display="none";
					oLogin.style.display ="none";
				}
			}
		}
	}
	//导航关注
	function attention(){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
					if(xhr.responseText==1){
						setCookie('followSuc','followSuc');
					}
				}
			}
		}
		xhr.open("get",'http://study.163.com/webDev/attention.htm',true);
   		xhr.send(null);
	}
		//表单验证
		var oName=document.getElementsByClassName("login-name")[0];
		var oPass=document.getElementsByClassName("login-password")[0];
		var name_msg=document.getElementsByClassName("name-message")[0];
		var pass_msg=document.getElementsByClassName("password-message")[0];
		oName.onfocus=function(){
			name_msg.innerHTML="数字,字母,汉字,下划线";
		}
		oName.onblur=function(){
			//含有非法字符
			var re=/[^\w\u4e00-\u9fa5]/g;
			if(re.test(this.value)){
				name_msg.innerHTML="含有非法字符！";
			}//不能为空
			else if(this.value==""){ 
				name_msg.innerHTML="输入不能为空！";
			}//长度限制
			else if(this.value.split("").length<6||this.value.split("").length>15){
				name_msg.innerHTML="长度小于6或超过15";
			}
		}
		oPass.onfocus=function(){
			pass_msg.innerHTML="6-16个字符，数字+字母";
		}
		oPass.onblur=function(){
			var re=/[^\w\u4e00-\u9fa5]/gi;
			if(re.test(this.value)){
				pass_msg.innerHTML="密码格式有误！";
			}else if(this.value==""){
				pass_msg.innerHTML="输入不能为空！";
			}else if(this.value.split("").length<6||this.value.split("").length>15){
				pass_msg.innerHTML="长度有误，请输入6~16个字符";
			}
		}
		// 向现有URL的末尾添加查询字符串参数
		function addURLParam(url,name,value){
		    url+=(url.indexOf("?")==-1?"?":"&");
		    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
		    return url;
		}
		//Ajax登陆
		var oConfirm=document.getElementsByClassName("confirm-btn")[0];
		oConfirm.onclick=function(){
			var xhr=new XMLHttpRequest();
       		xhr.onreadystatechange=function(){
       		    if (xhr.readyState==4){
       		        if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
       		            if(xhr.responseText==1){
       		                // 成功
       		                // 调用关注API
       		                alert("chenggong");
       		                attention();
       		                // 关闭登录窗口
       		                closelogin();
       		                // 设置登录的cookie......
       		                setCookie('loginSuc','loginSuc');
       		            }else{
       		                // 失败
       		                alert(xhr.responseText);
       		            }
       		        }
       		    }
       		}
       		var url="http://study.163.com/webDev/login.htm";
       		url=addURLParam(url,"userName",oName);
       		url=addURLParam(url,"password",oPass);
       		xhr.open("get",url,true);
       		xhr.send(null);
		}
checkLogin();
})();
//轮播图
var slide_module=(function(){
	function slideBanner(){
		var list=document.getElementsByClassName("list")[0];
		var prev=document.getElementsByClassName("prev")[0];
		var next=document.getElementsByClassName("next")[0];
		var container=document.getElementsByClassName("container")[0];
		function animate(offset){
			//获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
   	    	//且style.left获取的是字符串，需要用parseInt()取整转化为数字。
			var oLeft=parseInt(list.style.left)+offset;
			list.style.left=oLeft+"px";
			//对偏移量进行判断，left小于4956(三张图的宽度)回到第一张，向前同理
			if(oLeft<-4956){
				list.style.left=-1652+"px";
			}
			if(oLeft>-1652){
				list.style.left=-4956+"px";
			}
		}
		//前后箭头切换图片
		var buttons=document.getElementsByClassName("buttons")[0].getElementsByTagName('span');
   		var index=1;

   		function buttonsShow() {
   	    	//这里需要清除之前的样式
   			for (var i=0;i<buttons.length;i++) {
   	        	if (buttons[i].id=="on"){
   					buttons[i].id="";
   	        	}
   	    	}
   	    	//数组从0开始，故index需要-1
   	    	buttons[index-1].id="on";
   		}

   		prev.onclick=function() {
   	    	index-=1;
   	    	if(index<1) {
   	        	index=3;
   	    	}
   	    	buttonsShow();
   	    	animate(1652);
   		}
   		next.onclick=function() {
   	    	//由于上边定时器的作用，index会一直递增下去，我们只有3个小圆点，所以需要做出判断
   	    	index+= 1;
   	    	if(index>3) {
   	        	index=1;
   	    	}
   	    	buttonsShow();
   	    	animate(-1652);
   		}
		//定时器实现图片循环滚动
		var timer;
		function play(){
			timer=setInterval(function(){
				next.onclick()
			},3000)
		}

		function stop(){
			clearInterval(timer);
		}
		//鼠标移入和移出停止和继续滚动
		container.onmouseover=stop;
   		container.onmouseout=play;
		play();

		//点击小圆点直接切换到相关图片
		for (var i=0;i<buttons.length;i++) {
   	    	buttons[i].onclick=function () {
   	        	// 在浏览器的控制台打印一下，看看结果
   	        	console.log(i);
   	        	/* 偏移量获取：这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上.*/
   	        	/* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
   	        	var clickIndex=parseInt(this.getAttribute('index'));
   	        	var offset=1652*(index-clickIndex);
   	        	animate(offset); //存放鼠标点击后的位置，用于小圆点的正常显示 
   	        	index=clickIndex;
   	        	buttonsShow();
   	    	}
   		}
	}
slideBanner();
})();
//Tab选项切换模块
var tab_module=(function(){
	var page=document.getElementsByClassName("tabs-num")[0];
	var program=document.getElementsByClassName("pro-design")[0];
	var design=document.getElementsByClassName("pro-language")[0];
	program.onclick=function programList(){
		if(design.id=="p-focus"){
    	    program.id="p-focus";
    	    program.style.color = 'white';
    	    design.id="";
    	    loadCourse('10','20','1');
    	}
    }
	design.onclick=function designList(){
	    if(program.id=="p-focus"){
	        program.id="";
	        design.id="p-focus";
	        program.style.color = 'black';
	        loadCourse('20','20','1');
	    }
	}
	// 向现有URL的末尾添加查询字符串参数
	function addURLParam(url,name,value){
	    url+=(url.indexOf("?")==-1?"?":"&");
	    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
	    return url;
	}
	//获取课程
	function loadCourse(pageNo,psize,type){
		var oList=new XMLHttpRequest();
		oList.onreadystatechange=function(){
			if(oList.readyState==4){
				if((oList.status>=200&&oList.status<=300)||oList.status==304){
					var data=JSON.parse(oList.responseText);
					console.log(data);
					for(let i=0;i<20;i++){
						var imgi=document.getElementsByClassName("one-tab-img")[i];
						var titlei=document.getElementsByClassName("one-tab-title")[i];
						var authori=document.getElementsByClassName("one-tab-author")[i];
						var numberi=document.getElementsByClassName("one-tab-number")[i];
						var pricei=document.getElementsByClassName("one-tab-price")[i];
						imgi.style.backgroundImage = 'url('+data.list[i].middlePhotoUrl+')';
						titlei.innerHTML=data.list[i].name;
						authori.innerHTML=data.list[i].provider;
						numberi.childNodes[1].innerHTML=data.list[i].learnerCount;
						pricei.childNodes[1].innerHTML=data.list[i].price;
					}
				}
			}
		}
		var url="http://study.163.com/webDev/couresByCategory.htm";
		url=addURLParam(url,"pageNo",1);
		url=addURLParam(url,"psize",20);
		url=addURLParam(url,"type",10);
		oList.open("get",url,true);
		oList.send(null);
	}
	window.onload=loadCourse('10','20','1');
})();
