$(function(){

    $('jikai-header .searchInput').focus(function(){
        $(this).addClass('active');
    }).blur(function(){
        $(this).removeClass('active');
    });
});