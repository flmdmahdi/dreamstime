
 $(window).bind("load",function(){
    $('#loader').delay(2000).fadeOut('slow');
    $('#preloader').delay(1000).fadeOut('slow');
})

$(document).ready(function () {
   
   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });

    $('.tilt').tilt();
    new WOW().init();
   
    
})

