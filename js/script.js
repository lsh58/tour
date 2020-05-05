
$(function () {

    $('header ul').mouseenter(navopen);
    $('header ul').mouseleave(navclose);
    
    function navopen(){
        $('header ul li').css({
            paddingBottom: "20px"
        });
        $('header ul li nav').css({
            display:"flex"
        });
        $('header ul li nav').css({
            height:"100px"
        });
    }
    function navclose(){
        $('header ul li').css({
            paddingBottom: "0"
        });
        $('header ul li nav').css({
            height:"0"
        });
        $('header ul li nav').css({
            display:"none"
        });
    }
});