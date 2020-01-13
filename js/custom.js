/* ===================================
        Inicijalizacija animacija
=======================================*/

$(function () {
    new WOW().init();
});

/* ===================================
        NAŠ RAD (Magnific POPUP)
=======================================*/

$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ===================================
        TIM (Owl carousel)
=======================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
        }
    });
});

/* ===================================
        IZJAVE (Owl carousel)
=======================================*/

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/* ===================================
        REZULTATI (counter)
=======================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});


/* ===================================
        KLIJENTI (Owl carousel)
=======================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});


/* ===================================
        NAVIGATION
=======================================*/

$(function () { /* =(document).ready*/
    $(window).scroll(function () { /*this line means selecting browser window with scroll and function is js self-executing anonimous function*/
        if ($(this).scrollTop() < 50) {
            // this means hide the navbar's course-top-nav class when the scrollbar is less than 50px from top
            $("nav").removeClass("course-top-nav"); // first we write nav element and remove its course-top-nav class
            $("#back-to-top").fadeOut();
            // hide the back-to-top button with fadeOut effect
        } else {
            // this means show the navbar's course-top-nav class when the scrollbar is more than 50px from top
            $("nav").addClass("course-top-nav"); // first we write nav element and add to it course-top-nav class
            $("#back-to-top").fadeIn();
            // show back-to-top button with fadeIn effect 
        }
    });
});

// Smooth Scroll
$(function () { /* =(document).ready*/
    //when any 'a' element with smooth-scroll class is clicked, next function is executed, we need the event object
    //event.preventDefault() method stops jumping to the href attribute of 'a' element
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href"); //return the section id (#about, #team...) and store it in the variable section

        $('html,body').animate({ //it doesn't matter if we use " " or ''
            scrollTop: $(section).offset().top - 64 //offset is getting coordinates for desired section, we use -64 to decrease scroll position by 64 px(so we can see entire section)
        }, 1250, "easeInOutExpo"); //1250 means animation will take 1250ms (1.25s)
        //easeInOutExpo is animation property from jquery easing
    });
});


//Close mobile menu(collapsed menu or navbar) on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () { //jQuery selecting a elements inside li inside ul inside .navbar-collapse div
        //when user clicks or touches menu button this function will execute (toggle button will be clicked automatically)
        //this means navbar will be collapsed automatically when we click menu items
        $(".navbar-toggle").click();
    });
});