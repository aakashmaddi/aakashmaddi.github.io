//Smooth Scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight;



$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    navbarHeight = $('#nav-primary').outerHeight();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#nav-primary').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#nav-primary').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


//Image Scroll effect - Not so nice

// $(window).on('scroll', function (e) {
//     var pTop = $('.bg').position.top;
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop){
//         $('.bg').stop().animate({"top":  "-=30px"}, 600);
//     } else {
//         $('.bg').stop().animate({"top":  "+=30px"}, 600);
//     }
//     lastScrollTop = st;
//
//
// });

//Parallax Image JS
// $(document).on("ready", function() {
//     parallaxImgScroll();
// });

// $(document).on("ready", function() {
//     var parallaxSettings = {
//         initialOpacity: 1, //from 0 to 1, e.g. 0.34 is a valid value. 0 = transparent, 1 = Opaque
//         opacitySpeed: 0.1, //values from 0.01 to 1 -> 0.01: slowly appears on screen; 1: appears as soon as the user scrolls 1px
//         pageLoader: true //creates a page loader. It is set "false" by default.
//     };
//
//     parallaxImgScroll(parallaxSettings);
// });


