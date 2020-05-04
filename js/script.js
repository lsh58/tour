
$(function () {
    $('header ul').mouseenter(navopen);
    $('header ul').mouseleave(navclose);

    function navopen(){
        $('header ul li').css({
            borderLeft: "1px solid #333",
            paddingBottom: "20px"
        });
        $('header ul li nav').css({
            display:"flex"
        });
        $('header ul li nav').animate({
            height:"100px"
        },500);
    }
    function navclose(){
        $('header ul li').css({
            borderLeft: "none",
            paddingBottom: "0"
        });
        $('header ul li nav').animate({
            height:"0"
        },500);
        setTimeout(function(){
            $('header ul li nav').css({
                display:"none"
            });
        },400);
    }

    
});