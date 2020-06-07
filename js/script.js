
$(function () {

    $('.header__burger').click(function () {
        $('.popMenu').css({
            top: 0
        });
    });
    $('.popMenu__burger').click(function () {
        $('.popMenu').css({
            top: '-100vh'
        });
    }); //버거메뉴 열고닫기

    var ulSize = parseInt($('.footer__dropBox ul').css('height'));
    $('.footer__dropBox ul').css({
        top:ulSize*-1
    });//ul 높이값 주기
    $('.footer__dropBox ul').fadeOut();
    $('.footer__dropBox__button').click(function(){
        $('.footer__dropBox ul').slideDown();
    });//애니메이션 다시 생각해볼것

});