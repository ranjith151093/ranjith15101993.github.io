// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict 

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict




 // $(document).ready(function(){
        // setTimeout(function(){
            // $(".cssload-container").hide();
        // },2000);

    // });
	
	
	
//social media script


$(".twitter").hover(function () {
	$("#social-section").toggleClass("color-twitter")
});

/**$(".facebook").hover(function () {
	$("#social-section").toggleClass("color-facebook")
});**//

$(".googleplus").hover(function () {
	$("#social-section").toggleClass("color-googleplus")
});

$(".pinterest").hover(function () {
	$("#social-section").toggleClass("color-pinterest")
});

$(".dribbble").hover(function () {
	$("#social-section").toggleClass("color-dribbble")
});

$(".linkedIn").hover(function () {
	$("#social-section").toggleClass("color-linkedIn")
});






