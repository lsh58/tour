
$(function () {

    burger(); //버거메뉴 열고닫기
    dropBox(); //드롭박스 열고닫기


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