$(function(){

    
    $('.promo ul').append($('.promo ul li').eq(0).clone(true));

    
    var clickNum=0;
    var imgNum=0;
    function autoPlay() {
        clickNum++;
        if(clickNum>4){
            clickNum = 0;
        }
        $('.promo ol li ').eq(clickNum).addClass('current').siblings().removeClass('current');
        imgNum++;
        if(imgNum>5){
            imgNum = 1;
            $('.promo ul').css('left','0px');
        }
        var imgMove = imgNum * -1005;
        $('.promo ul').animate({left:''+imgMove+'px'},455);
    }
     $('.right').click(function () {
        autoPlay();
    })


    $('.left').click(function () {
        clickNum--;
        if(clickNum<0){
            clickNum = 4;
        }
        $('.promo ol li ').eq(clickNum).addClass('current').siblings().removeClass('current');
        imgNum--;
        if(imgNum<0){
            imgNum = 4;
            $('.promo ul').css('left','-5025px');
        }
        var imgMove = imgNum * -1005;
        $('.promo ul').animate({left:''+imgMove+'px'},455);
    })


    $('.promo ol li').click(function () {

        
        $(this).addClass('current').siblings().removeClass('current');
        var imgMove = $(this).index()* -1005;
        $('.promo ul').animate({'left':''+imgMove+'px'},555);
        imgNum = $(this).index();
        clickNum = $(this).index();
    })


    
    var timer = setInterval(autoPlay,5000);

    
    $('.promo').hover(function () {
        clearInterval(timer);
        $('.promo i').fadeIn(300);
    },function () {
        timer = setInterval(autoPlay,5000);
        $('.promo i').fadeOut(500);
    })

    $('.promo i').hover(function () {
        $(this).css({
            'backgroundColor':'#000',
            'opacity':'0.6',
        });
    },function () {
        $(this).css({
            'backgroundColor':'#000',
            'opacity':'0.3',
        });
    })
})