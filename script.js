// //Smooth Scrolling
// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
//
//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();
//
//             // Store hash
//             var hash = this.hash;
//
//             console.log(hash);
//
//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function(){
//
//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });


//Smooth Scrolling updated
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});


//Circle puck click
$(document).ready(function () {
    $('.circle-puck').click(function(e) {
        $('#nav-primary, #nav-primary-mobile').removeClass('nav-up').addClass('nav-down');
        $('.circle-puck').hide(100)
    });

    if(screen.width<720){
        $('#nav-primary').hide();
        $('#nav-primary-mobile').show();
        $('.section-div').removeClass('in w55 w40');
        $('.c-text').removeClass('in fr');
        $('.footer-nav ul').removeClass("w55");

        $("#proj").removeClass("fr");

        $('.p-app').removeClass('in w50');
    }
    else {
        $('#nav-primary-mobile').hide();
    }

    $('.p-app').each(function (i) {
        var bg = $(this).find('img').attr('data-col');
        var butBg = $(this).find('img').attr('data-but-col');

        $(this).css({'background':bg});
        $(this).find('.p-app-button').css({'background-color':butBg});

        // $(this).find('.p-app-button').hover(function () {
        //     $(this).find('a').css({'color':butBg});
        // });

        $(this).find('.p-app-button').mouseover(function() {
            $(this).find('a').css({'color':butBg});
        }).mouseout(function() {
            $(this).find('a').css({'color':'#FFFFFF'});
        });
    })
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
    if($('#nav-primary-mobile').is(":visible")){
        navbarHeight = $('#nav-primary-mobile').outerHeight();
    }
    else {
        navbarHeight = $('#nav-primary').outerHeight();
    }

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#nav-primary, #nav-primary-mobile').removeClass('nav-down').addClass('nav-up');
        $('.circle-puck').show(300);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#nav-primary, #nav-primary-mobile').removeClass('nav-up').addClass('nav-down');
            $('.circle-puck').hide(300);
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


