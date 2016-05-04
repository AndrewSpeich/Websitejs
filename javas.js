
$ ("#hideall").click(function(){
	$("#jumbo").html("HEY! Stop That!");
	$("#hideall").attr("id", "colorchange")
}
$ ("#colorchange").click(function(){
	$("#body").css("background-color","#fffbfb");
	$("#colorchange").attr("id", "hidea")
}
$ ("#hidea").click(function(){
	$("*").hide();
	$("#hideall").attr("id", "colorchange")
}
$ ("#hidea").click(function(){
	$("*").hide();
	$("#hideall").attr("id", "colorchange")
}
