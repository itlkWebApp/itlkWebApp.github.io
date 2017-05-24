$(function () {
	$(".gonggao").hide();
	$(".ggaoshow").mouseover(function () {
		$(this).css('cursor','pointer');
		$(".gonggao").slideDown(300);
	});
	$(".ggcaozuo").mouseleave(function () {
		$(".gonggao").slideUp(200);
	});
});