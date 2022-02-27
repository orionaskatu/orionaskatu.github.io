/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Get the button:
mybutton = document.getElementById("totop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "50%";
  }
  else if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.opacity = "70%";
  }
  else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.opacity = "100%";
  }
  else {
    mybutton.style.opacity = "0%";
  }
}

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(event) {
    var $trigger = $(".navbar-toggle");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $('.navbar-toggle:visible').click();
    }
});
