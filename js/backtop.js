$(function(){
    $('.jikai-backtop .backtop').click(function(){
        $('body,html').animate({scrollTop:0},300);
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>=100) {
            $('.jikai-backtop').fadeIn();
        }
        if($(this).scrollTop()<100) {
            $('.jikai-backtop').fadeOut();
        }
    });


});