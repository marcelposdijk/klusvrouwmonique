/*-----------------------------------------------------------------------------------

    Theme Name: Interior - Architecture and Interior Design Template
    Description: Architecture and Interior Design Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Resize function
        07. FullScreenHeight function
        08. ScreenFixedHeight function
        09. FullScreenHeight and screenHeight with resize function
        10. Sliders
        11. Tabs
        12. CountUp
        13. Countdown
        14. Isotop
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/logo-inner.png');
                logodefault.attr('src', 'img/logos/logo.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.png');
                logodefault.attr('src', 'img/logos/logo.png');
            }
        });


        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });


        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.popup-social-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
        });

        /*------------------------------------
            06. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            07. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            08. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            09. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

    // === when document ready === //
    $(document).ready(function() {


        /*------------------------------------
            10. Sliders
        --------------------------------------*/

        // project-carousel
        $('.project-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 900,            
            nav: false,
            center: false,
            dots: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    margin:15
                },
                576: {
                    items: 2,
                    margin:15
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }

            }
        });

        // testmonial-carousel
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 900,
            nav: false,
            dots: true,
            center:false,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                },

            }
        });

        // single-project-carousel
        $('.single-project-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: false,
            center: false,
            dots: true,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // related-project-carousel
        $('.related-project-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 2500,
            nav: false,
            dots: true,
            center:false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // products-carousel
        $('.products-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 900,            
            nav: false,
            center: false,
            dots: true,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        });

        // service-leftpanel-carousel
        $('.service-leftpanel-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 900,
            nav: false,
            dots: false,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },

            }
        });

        // footer-carousel
        $('.footer-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },

            }
        });

        // Sliderfade
        $('.slider-fade1 .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            nav: false,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            margin: 0,
            autoplay:true,
            smartSpeed:900,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                768: {
                    nav: false
                },
                992: {
                    nav: true
                }
            }

        }); 
        
        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay: true,
            smartSpeed:500
        });   

        // Slider text animation
        var owl = $('.slider-fade1');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('.number').removeClass('animated fadeInUp');
            $('h3').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.butn').removeClass('animated fadeInUp');
            $('.slider-pic').removeClass('animated fadeInRight');
            $('.owl-item').not('.cloned').eq(item).find('.number').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.slider-pic').addClass('animated fadeInRight');
        });

        /*------------------------------------
            11. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            12. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            13. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Jan 2023 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            14. Isotop
        --------------------------------------*/

        // isotope with magnificPopup
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.grid').masonry({
          // options
          itemSelector: '.grid-item'
        });

        var $gallery = $('.gallery').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });

        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        // stellar
        $window.stellar();

    });

})(jQuery);