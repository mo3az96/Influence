
$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        $('.main-head').addClass('openStyle');
        setTimeout(() => {
            $('.sec-head').addClass('openStyle');
        }, 1700);
    });
});

$(document).ready(function () {
    // Fixed Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.top-bar-cont').addClass('head-fix');
            $('.close-btn').addClass('close-fixed');
            $('.lang').addClass('lang-fixed');
        } else {
            $('.top-bar-cont').removeClass('head-fix');
            $('.close-btn').removeClass('close-fixed');
            $('.lang').removeClass('lang-fixed');
        }
    });
    $('.mo-menu-btn').click(function () {
        $(".navbar-cont").fadeIn(500);
        $('body').addClass('overflow');
    });
    $('.close-btn, .navbar-cont').click(function () {
        $(".navbar-cont").fadeOut(500);
        $('body').removeClass('overflow');
    });
    $('.mo-navbar li').click(function (e) {
        e.stopPropagation();
        console.log(456);

    });
    if ($(window).width() <= 767) {
        $(".foot-nav-links-header").addClass("mo-accordion");
        $(".foot-links").addClass("mo-panel");
        $(".gallery .item-cont").unwrap();

        $(".gallery").addClass("swiper-container");
        $(".item-cont").addClass("swiper-slide");
    }

    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
        console.log()
    })
    var galleryswiper = new Swiper('.gallery-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: false,
        pagination: {
            el: '.gallery-slider .swiper-pagination',
            clickable: true,
        },
    });



    var testmonialsslider = new Swiper('.testmonials-slider .swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.testmonials-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                navigation: false,
            },
            500: {
                navigation: {
                    nextEl: '.testmonials-slider .swiper-button-next',
                    prevEl: '.testmonials-slider .swiper-button-prev',
                },
            },
        },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 9,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    $('.input-career').focus(function () {
        // console.log($(this).parent().find(".floating-label"));
        $(this).parent().find(".floating-label").addClass('label-active');
    });

    $(".input-career").focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().find(".floating-label").removeClass('label-active');
        };
    });


    $(".inputfile").change(function () {
        var file = $('.inputfile')[0].files[0]
        if (file) {
            $(".input-file").val(file.name)
            $(".input-file").parent().find(".floating-label").addClass('label-active');
        }
    });

});