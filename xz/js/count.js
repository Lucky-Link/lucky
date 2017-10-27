var test = document.querySelector('div');
	function countDown(){
	var nowDate = new Date();
	 var futDate = new Date(2018,00,01,00,00,00);
	 var nowTime = nowDate.getTime();
	 var futTime = futDate.getTime();
	 var miss = futTime - nowTime;
	 var ms = 1000 * 60;
	 var hs = ms * 60;
	 var ds = hs * 24;
	 var d = parseInt(miss / ds);
	 var h = parseInt(miss % ds / hs);
	 var m = parseInt(miss % ds % hs /ms);
	 var s = parseInt(miss % ds % hs %ms /1000);
	 var res = '当前场次' + d + '天' + h + '时' + m + '分' + s + '秒' + '后结束抢购';
	 return res
	}
	setInterval(function(){
		var time = countDown(); 
		test.innerHTML = time;
	},1000)