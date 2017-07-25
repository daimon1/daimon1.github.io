$(function(){
    $('nav ul li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
    })

    ;(function(){
        var timer=null;
        var num=0;

        auto();
        function auto(){
            clearInterval(timer);
            timer=setInterval(function(){
                $('#banner .right').click();
            },3000)
        };
        $('#banner').hover(function(){
            clearInterval(timer);
        },function(){
            auto();
        });
        $('#banner .left').click(function(){
            num--;
            if(num<0){num=3}
            same();
        });
        $('#banner .right').click(function(){
            num++;
            if(num>3){num=0}
            same();
        })
        $('#banner ol li').click(function(){
            var index=$(this).index();
            num=index;
            same();
        })
        function same(){
            $('#banner ul li').eq(num).stop().fadeIn().siblings().fadeOut();
            $('#banner ol li').eq(num).addClass('current').siblings().removeClass('current');
        }
    })();

    $('.con1_l li i').each(function(index,element){
        var canshu1=-index*121;
        $(element).css('background','url(images/icons02.png) no-repeat 0 '+canshu1+'px');

    });
    $('.con4 ul li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
    })

})