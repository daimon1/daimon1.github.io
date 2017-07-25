// JavaScript Document
$(function(){
    //返回顶部
    var winH=$(window).height();

    $(window).scroll(function(){
        var top=$(this).scrollTop();

        if(top>winH){
            $('.topimg').fadeIn();
        }else {
            $('.topimg').fadeOut();
        };
    });

    $('.topimg').click(function(){
        $('html,body').animate({scrollTop:0},300)
    })


    //控制音乐播放器的播放停止效果。
    $('.screen1 .leaves span').toggle(function(){
        $('audio').get(0).pause();
        $('.screen1 .leaves').css('animation','none');
    },function(){
        $('audio').get(0).play();
        $('.screen1 .leaves').css('animation','');
    });
    /*---------音乐播放器结束----------------------*/




    ;(function(){   
         //网页加载完成让第一屏动执行
        $('.screen1').removeClass('no');
        $(' .ball li').click(function(e) {
            var index = $(this).index();
            num = index;
            same(num);
        });
        $('.screen1').removeClass('no');
        var num =0;
        var timer = null;
        
        $('.gps li').click(function(e) {
            var index = $(this).index();
            num = index;
            same(num);
        });
        
        $(document).mousewheel(function(e,d){
            clearTimeout(timer);
            timer = setTimeout(function(){
                num-=d;
                if(num>4){num =4;}
                if(num<0){num =0;}
                same(num);
            },300);
            
        });

        //事件中执行。导航部分单击，设置网页滚动坐标值;网页窗口滚动，让相应的球变青绿色。

        function same(num){
            $('.ball li').eq(num).addClass('current').siblings().removeClass();
            $('.gps li').eq(num).addClass('current').siblings().removeClass('current');
            $('.doc').stop().animate({top:-100*num+'%'});
            $('.doc>li').eq(num).removeClass('no').siblings().addClass('no');
        }
    })();
    /*--------------------------------第二屏--------------------------------------------------------------*/
    $(".small_pic li").mouseover(function(){
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        var preNumber=$(this).prevAll().size()+1;
        $(".big_pic li").removeClass("on");
        $(".big_pic li:nth-child("+preNumber+")").addClass("on");
    })
    /*--------------------------------第三屏--------------------------------------------------------------*/


    /*--------------------------------第四屏--------------------------------------------------------------*/
    $('.screen4 .albums img').click(function(){
        $(this).fadeIn(500,function(){$(this).css('transform','scale(1.1)')}).siblings().fadeOut();
        $('.screen4 span').fadeIn(300);

        $('.screen4 span').click(function(){
            $(this).fadeOut(300);
            $('.screen4 .albums img').fadeIn(500,function(){$(this).css('transform','')});
        })
    });

    /*---------------第五屏---------------*/

    ;(function(){
        flip();
        function flip() {
            var timer = null;
            var num = 0;
            var aFlip = $(".card");
            clearInterval(timer);
            timer = setInterval(flipFn, 2000);
            function flipFn() {
                aFlip.eq(num).toggleClass('card-flipped');
                num++;
                if(num==5){
                    num=0;
                }
            }
        }
    })();

    $('.screen5 .contact>li').each(function(index,element){
        var numTop=-index*27;
        $(element).css('background-position','0 '+numTop+'px');
        $(element).hover(function(){
            $(element).css('background-position','-35px '+numTop+'px');
            $(this).children().show();
        },function(){
            $(element).css('background-position','0 '+numTop+'px');
            $(this).children().hide();
        })
    });


});
