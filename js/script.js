
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
    });
});