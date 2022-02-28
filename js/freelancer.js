$(document).ready(function () {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // fadeIn/fadeOut fot scroll to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top a.btn').fadeIn();
        } else {
            $('.scroll-top a.btn').fadeOut();
        }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(event) {
        var $trigger = $(".navbar-toggle");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $('.navbar-toggle:visible').click();
        }
    });
});
