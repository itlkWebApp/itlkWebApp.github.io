$(function () {	
	<!--我的订单-->			
	$(".ding").hide();
	$(".dingdan").mouseover(function () {
		$(this).css({
			cursor:'pointer',
			backgroundColor:'#fff',
			border:'1px solid #bbb',
			borderBottom:'0px',
		});

		$(".ding").css({
			backgroundColor:'#fff',
		}).slideDown(300);

	});
	$(".ding").mouseleave(function () {
		$(".dingdan").css({
			backgroundColor:'#F8F8F8',
			border:'0px',
		});
		$(this).slideUp(200);
	})
	<!--客户服务-->
	$(".ke").hide();
	$(".kefu").mouseover(function () {
		$(this).css({
			cursor:'pointer',
			backgroundColor:'#fff',
			border:'1px solid #bbb',
			borderBottom:'0px',
		});

		$(".ke").css({
			backgroundColor:'#fff',
		}).slideDown(300);

	});
	$(".ke").mouseleave(function () {
		$(".kefu").css({
			backgroundColor:'#F8F8F8',
			border:'0px',
		});
		$(this).slideUp(200);
	})

	<!--关于易优-->			
	$(".yiy").hide();
	$(".yiyou").mouseover(function () {
		$(this).css({
			cursor:'pointer',
			backgroundColor:'#fff',
			border:'1px solid #bbb',
			borderBottom:'0px',
		});

		$(".yiy").css({
			backgroundColor:'#fff',
		}).slideDown(300);

	});
	$(".yiy").mouseleave(function () {
		$(".yiyou").css({
			backgroundColor:'#F8F8F8',
			border:'0px',
		});
		$(this).slideUp(200);
	})

	<!--我的易优-->			
	$(".myy").hide();
	$(".myyou").mouseover(function () {
		$(this).css({
			cursor:'pointer',
			backgroundColor:'#fff',
			border:'1px solid #bbb',
			borderBottom:'0px',
		});

		$(".myy").css({
			backgroundColor:'#fff',
		}).slideDown(300);

	});
	$(".myy").mouseleave(function () {
		$(".myyou").css({
			backgroundColor:'#F8F8F8',
			border:'0px',
		});
		$(this).slideUp(200);
	})
	
})

$(function () {
	$(".souk").mouseover(function () {
		$(this).css('boxShadow','0px 3px 8px #aaa');
	}).mouseout(function () {
		$(this).css('boxShadow','');
	});

	$("#li2,#li3,#li4,#li5,#li6,#li7,#li8,#li9").mouseover(function () {
		$(this).css({
			borderTop:'2px solid #0066B2',
			borderBottom:'2px solid #0066B2',
			color:'#0066B2',
		}).siblings().css({
			borderTop:'0px',
			borderBottom:'0px',
			color:'#f60',
		});
	})
	$(".fenlei").hide();
	$(".xiangxi").hide();
	$("#li1").mouseover(function () {
		$(".fenlei").slideDown(300);
	}).mouseleave(function () {
		$(".fenlei").slideUp(200);
	});
	$(".fenlei").mouseover(function () {
		$(".xiangxi").slideDown(500);
	})
	$(".xiangxi").mouseleave(function () {
		$(".xiangxi").slideUp(200);
	});
})
