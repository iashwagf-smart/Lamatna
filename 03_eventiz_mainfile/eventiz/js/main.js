/*------------------------------------------------------------------
* Project:        Eventiz - Event Conference HTML Template
* Author:         bizberg_themes
* URL:            https://themeforest.net/user/bizberg_themes
* Created:        07/13/2023
-------------------------------------------------------------------
*/

 (function($) {
     "use strict";


      /*======== Doucument Ready Function =========*/
    jQuery(document).ready(function () {
     //CACHE JQUERY OBJECTS
      $("#status").fadeOut();
      $("#preloader").delay(200).fadeOut("slow");
      $("body").delay(200).css({ "overflow": "visible" });

      
      /* Init Wow Js */
      new WOW().init();

    });

     //search categories
    $('a[href="#search1"]').on('click', function(event) {
         event.preventDefault();
         $('#search1').addClass('open');
         $('#search1 > form > input[type="search"]').focus();
     });
     $('#search1, #search1 button.close').on('click keyup', function(event) {
         if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
             $(this).removeClass('open');
         }
     });


     /* ------------------------------------------------------------------------ */
     /* BACK TO TOP
    /* ------------------------------------------------------------------------ */
     $(document).on('click', '#back-to-top, .back-to-top', () => {
         $('html, body').animate({
             scrollTop: 0
         }, '500');
         return false;
     });
     $(window).on('scroll', () => {
         if ($(window).scrollTop() > 500) {
             $('#back-to-top').fadeIn(200);
         } else {
             $('#back-to-top').fadeOut(200);
         }
     });

     /*-----------------------------------------------------------------------------------*/
    /*  MASONRY
    /*-----------------------------------------------------------------------------------*/
    
    $('.gallery-main').masonry({
        // options
        itemSelector: '.mansonry-item',
    });

     // Slick SLider

     $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
      });

     $('.review-slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         rows:0,
         autoplay: true,
         speed: 2000,
         loop:true,
         responsive: [{
             breakpoint: 991,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
             }
         }]
     });

     $('.artist-slider').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         rows:0,
         autoplay: true,
         speed: 2000,
         loop:true,
         responsive: [{
             breakpoint: 1601,
             settings: {
                 slidesToShow: 3,
                 arrows: true,
             }
         },  {
             breakpoint: 768,
             settings: {
                 slidesToShow: 1,
             }
         }]
     });


    //Blog Slider  
     $('.blog-slider').slick({
         infinite: true,
         slidesToShow: 2,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         rows:0,
         autoplay: false,
         speed: 2000,
         loop:true,
         responsive: [ {
             breakpoint: 768,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
             }
         }]
     });

     //Blog Slider  
     $('.banner-slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         rows:0,
         autoplay: true,
         speed: 3000,
         loop:true,
     });

     var $ticker = $('.ticker-inner ul');
         $ticker.append($ticker.html());


     $("#contactform2").validate({      
      submitHandler: function() {
        
        $.ajax({
          url : 'mail/contact.php',
          type : 'POST',
          data : {
            fname : $('input[name="first_name"]').val(),
            lname : $('input[name="last_name"]').val(),
            email : $('input[name="email"]').val(),
            phone : $('input[name="phone"]').val(),
            comments : $('textarea[name="comments"]').val(),
          },
          success : function( result ){
            $('#contactform-error-msg').html( result );
            $("#contactform2")[0].reset();
          }     
        });

      }
    });
    
     /*-----------------------------------------------------------------------------------*/
    /*  COUNTDOWN
    /*-----------------------------------------------------------------------------------*/

     $(document).ready(() => {
         loopcounter('coming-counter');
     });

    /*-----------------------------------------------------------------------------------*/
    /*  COUNTER UP
    /*-----------------------------------------------------------------------------------*/
    $('.value').counterUp({
        delay: 50,
        time: 1000
    });

    $('.selector4').animatedHeadline({
        animationType: 'rotate-3'
    });


     // Nice Select JS
     $('.niceSelect').niceSelect();

     $('a[href="#search1"]').on('click', function(event) {
         event.preventDefault();
         $('#search1').addClass('open');
         $('#search1 > form > input[type="search"]').focus();
     });
     $('#search1, #search1 button.close').on('click keyup', function(event) {
         if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
             $(this).removeClass('open');
         }
     });
     //Do not include! This prevents the form from submitting for DEMO purposes only!
     $('form').submit(function(event) {
         event.preventDefault();
         return false;
     });

     /*-----------------------------------------------------------------------------------*/
    /*  SLIDERS
    /*-----------------------------------------------------------------------------------*/

     const swiperThumbs = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 10,
        slideToClickedSlide: true,
        allowTouchMove: true,
        });

        const swiperMain = new Swiper(".mySwiper2", {
        direction: "vertical",
        spaceBetween: 10,
        mousewheel: true,
        thumbs: {
            swiper: swiperThumbs,
        },
                scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        }
        });

        //teams Slider  
     $('.teams-slider').slick({
         infinite: true,
         slidesToShow: 8,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         rows:0,
         autoplay: true,
         cssEase: 'linear',
         speed: 3000,
         loop:true,
         responsive: [ {
             breakpoint: 1400,
             settings: {
                 slidesToShow: 6,
                 arrows: false,
             }
         }, 
        {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 4,
                 arrows: false,
             }
         }, 
        {
             breakpoint: 768,
             settings: {
                 slidesToShow: 2,
                 arrows: false,
             }
         }]
     });

    // Schedule Slider
    const swiper = new Swiper('.schedule-slider', {
        freeMode: true, // globally true
        spaceBetween: 10,
        breakpoints: {
            0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            freeMode: false,
            initialSlide: 5
            },
            768: {
            slidesPerView: 3
            },
            1050: {
            slidesPerView: 5
            },
            1400: {
            slidesPerView: 7
            }
        }
    });
    
    // Review Slider
     const swiper1 = new Swiper('.review1-slider', {
        spaceBetween: 20,
        loop: false,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            0: {
            slidesPerView: 1
            },
            768: {
            slidesPerView: 2
            },
            1024: {
            slidesPerView: 3
            }
        }
        });

        // Instagram Gallery Slider
        $('.instagram-slider').slick({
         infinite: true,
         slidesToShow: 7,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         rows:0,
         autoplay: true,
         speed: 3000,
         loop:true,
         responsive: [ {
             breakpoint: 1400,
             settings: {
                 slidesToShow: 6,
                 arrows: false,
             }
         }, 
        {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 4,
                 arrows: false,
             }
         }, 
        {
             breakpoint: 768,
             settings: {
                 slidesToShow: 2,
                 arrows: false,
             }
         }]
     });


     const swiper2 = new Swiper('.fashion-Swiper', {
            effect: "fade",
            speed: 1500,    
            fadeEffect: {               
                crossFade: true      
            },
            autoplay: {
                delay: 4000,     
                disableOnInteraction: false
            },
            simulateTouch: true,
            grabCursor: true,
        });
        

        //Partner Slider 
        $('.partner-slider').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            rows:0,
            autoplay: true,
            cssEase: 'linear',
            speed: 3000,
            loop:true,
            responsive: [ {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    arrows: false,
                }
            }, 
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
                }]
        });
    
        // Blog Slider
        $('.blog1-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            rows:0,
            autoplay: false,
            cssEase: 'linear',
            speed: 3000,
            loop:true,
            responsive: [
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
                }]
        });

        var swiper3 = new Swiper(".art-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      initialSlide: 1,
      observer: true,
      observeParents: true,
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
                delay: 4000,     
                disableOnInteraction: true
            },
    });

    const swiper4 = new Swiper(".schedule-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
        },
        autoplay: {
                delay: 4000,     
                disableOnInteraction: true
            },
        breakpoints: {
            0: {
            slidesPerView: 1
            },
            768: {
            slidesPerView: 2
            },
            1000: {
            slidesPerView: 2
            },
            1400: {
            slidesPerView: 3
            }
        }
    });
 
 })(jQuery);


jQuery(window).on('resize load', () => {
     resize_eb_slider();
 }).resize();
 /**
  * Resize slider
  */
 function resize_eb_slider() {
     let bodyheight = jQuery(this).height();
     if (jQuery(window).width() > 1400) {
         bodyheight *= 0.90;
         jQuery('.slider').css('height', `${bodyheight}px`);
     }
 }
