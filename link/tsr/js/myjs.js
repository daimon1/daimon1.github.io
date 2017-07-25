
$(function(){
    $('#nav ul li').hover(function(){
        $(this).children('span').stop().animate({width:'100%'},300)
    },function(){
        $(this).children('span').stop().animate({width:0},300)
    });


    /*slider*/
    var num=0;
    var timer=null;
    function sport(){
            clearInterval(timer);
            timer= setInterval(function(){
                $('.slider .right').click();
            },4000)
    }
    sport();
    $('.slider .right').click(function(){
        num++;
        if(num>5){
            right();
            num =0
        }else{
            change()
        }
    });
    $('.slider .right').hover(function(){
        clearInterval(timer)
    },function(){
        sport();
    })
    $('.slider .left').click(function(){
        num--;
        if(num<0){
            left()
            num =5;
        }else{
            change();
        }
    });
    $('.slider .left').hover(function(){
        clearInterval(timer)
    },function(){
        sport();
    })
    $('.slider .down .tab li').click(function(){
        num = $(this).index();
        change();
    });
    

    function change(){
        $('.slider .main').stop().animate({left:-(6+num)*1000},300);
        $('.slider .down .tab li').eq(num).addClass('current').siblings().removeClass()

    }
    function right(){
        $('.slider .main').stop().animate({left:-(6+num)*1000},300,function(){
            $('.slider .main').css('left','-6000px')
            $('.slider .down .tab li').eq(num).addClass('current').siblings().removeClass()
        })
    }
    function left(){
        $('.slider .main').stop().animate({left:-(6+num)*1000},300,function(){
            $('.slider .main').css('left','-11000px')
            $('.slider .down .tab li').eq(num).addClass('current').siblings().removeClass()
        })
    }


    /*toppage*/
    $('.footer_in .top').click(function(e) {
        $('html,body').animate({scrollTop:0},300)
    });






})

