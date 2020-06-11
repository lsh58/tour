
$(function () {

    burger(); //버거메뉴 열고닫기
    dropBox(); //드롭박스 열고닫기
    header(); //헤더 열고닫기
    rightBox();//배너슬라이드
    $('.main__board__category button').click(function(){
        $('.main__board__category button').removeClass('selected');
        $(this).addClass('selected');
    })
});

function burger(){ //버거메뉴 열고닫기
    var bln = true;
    $('.burger').click(function () {
        if(bln==true){
        bln=false;
        $('.popMenu').css({
            top: 0
        });
        $('.burger span').eq(0).css({
            transform: "rotate(45deg) translateY(10px)"
        })
        $('.burger span').eq(1).css({
            opacity: 0
        })
        $('.burger span').eq(2).css({
            transform: "rotate(-45deg) translateY(-10px)"
        })
    }
    else{
        bln=true;
        $('.popMenu').css({
            top: '-100vh'
        });
        $('.burger span').eq(0).css({
            transform: "rotate(0) translateY(0)"
        })
        $('.burger span').eq(1).css({
            opacity: 1
        })
        $('.burger span').eq(2).css({
            transform: "rotate(0) translateY(0)"
        })
    }
    });
}

function dropBox(){ //드롭박스 열고닫기
    var bln = true;
    var dropBox = $('.footer__dropBox ul li');
    $('.footer__dropBox__button').click(function(){
        if(bln == true){
            bln=false;
            for(var i=0; i<dropBox.length; i++){
            $('.footer__dropBox ul li').eq(i).css({
                top:-40*(dropBox.length-i)+"px",
                });
            }
        }
        else{
            bln=true;
            for(var i=0; i<dropBox.length; i++){
            $('.footer__dropBox ul li').eq(i).css({
                top:0,
            });
            }
        }
    })
}

function header(){//헤더 열고닫기
    $('.header ul').mouseenter(function(){
        $('.header ul li nav').css({
        visibility : "visible"
        })
    });
    $('.header ul').mouseover(function(){
        $('.header ul li nav').css({
        visibility : "visible"
        });
    });
    $('.header ul').mouseout(function(){
        $('.header ul li nav').css({
        visibility : "hidden"
        });
    });
}

function rightBox(){//배너슬라이드
    var slideAni;
    var bln=true;
    slide();
    $('.main__rightBox__banner button').eq(0).click(function(){ //왼쪽버튼
        $('.main__rightBox__banner ul').prepend($('.main__rightBox__banner ul li').eq(3));
        $('.main__rightBox__banner ul').css({
            left:'-100%'
        });
        $('.main__rightBox__banner ul').animate({
            left:'0'
        });
    });
    $('.main__rightBox__banner button').eq(1).click(function(){ //가운데버튼 (일시정지/플레이)
        if(bln==true){
            bln=false;
            clearInterval(slideAni);
            $('.rightBox__stop').css({
                display:"none"
            });
            $('.rightBox__play').css({
                display:"block"
            });
        }else{
            bln=true;
            slide();
            $('.rightBox__stop').css({
                display:"block"
            });
            $('.rightBox__play').css({
                display:"none"
            });
        }
    });
    $('.main__rightBox__banner button').eq(2).click(function(){ //오른쪽버튼
        $('.main__rightBox__banner ul').animate({
            left:'-100%'
        }, function () {
            $('.main__rightBox__banner ul').append($('.main__rightBox__banner ul li').eq(0));
            $('.main__rightBox__banner ul').css({
                left:0
            });
        });
    });
    function slide(){
    slideAni = setInterval(function(){
            $('.main__rightBox__banner ul').animate({
                left:'-100%'
            }, function () {
                $('.main__rightBox__banner ul').append($('.main__rightBox__banner ul li').eq(0));
                $('.main__rightBox__banner ul').css({
                    left:0
                });
            });
        },2000);
    }
}
