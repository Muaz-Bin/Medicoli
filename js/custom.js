$(document).ready(function(){
    $('html').smoothScroll();
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse,.navbar-toggler').toggleClass('open');
    });
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var stickyMenu = $(".sticky-menu");
        if ($scrolling >= 200) {
            stickyMenu.addClass('sticky');
        } else {
            stickyMenu.removeClass('sticky');
        };
        if ($scrolling > 300) {
            $("#scrollToTop").fadeIn(1000);
        } else {
          $("#scrollToTop").fadeOut(500);
        };
    });

    $('#preloader').delay(2500).fadeOut(900);

    $("#scrollToTop").on('click', function (e) {
        $('html , body').animate({
            scrollTop: 0
        }, 1400);
        e.preventDefault();
    });


    $('.slider').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:7000,
        // animateOut: "fadeOut",
        animateIn: "fadeIn",
        smartSpeed:1000,
        mouseDrag:false,
     });

    $('.doctor-slider').owlCarousel({
        autoplay:false,
        loop:false,
        animateOut: "fadeOut",
        responsive:{
          0:{
            items:1,
          },
          576:{
              items:2,
              margin:20,
          },
          992:{
            items:3,
            margin:20,
          },
        }
      });
})