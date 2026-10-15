(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    

    // Product assembly animation.
    var assemblyStage = $('#product-assembly-stage');
    var assemblyStatus = $('#assembly-status');
    var assemblyReplay = $('#assembly-replay');
    var assemblyTimers = [];

    var playAssembly = function () {
        assemblyTimers.forEach(function (timer) {
            clearTimeout(timer);
        });
        assemblyStage.removeClass('is-replaying');
        void assemblyStage[0].offsetWidth;
        assemblyStage.addClass('is-replaying');
        assemblyStatus.text('Assembling components...');
        assemblyTimers.push(setTimeout(function () {
            assemblyStatus.text('Complete PV junction box');
        }, 5600));
    };

    if (assemblyStage.length) {
        playAssembly();
        assemblyReplay.click(playAssembly);
    }
})(jQuery);

