
$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $('.count').each(function () {
            $(this).prop('Counter', 1000).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        $('.arabic-head').addClass('openStyle');
        setTimeout(() => {
            $('.english-head').addClass('openStyle');
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




    // var txt = document.getElementsByClassName("demo")



    // for (let j = 0; j < 2; j++) {
    //     const element = txt[j];
    //     var i = 0;
    //     var k = element.getAttribute("id")

    //     var innerTxt = document.getElementById(k).innerHTML;
    //     console.log(innerTxt);
    //     document.getElementById(k).innerHTML = "";
    //     (function typeWriter() {

    //         if (i < txt.length) {
    //             document.getElementById(k).innerHTML += innerTxt.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 50);
    //         }
    //     })();

    // }



    // var i = 0;
    // var txt = document.getElementById("demo").innerHTML;
    // document.getElementById("demo").innerHTML = "";
    // (function typeWriter() {

    //     if (i < txt.length) {
    //         document.getElementById("demo").innerHTML += txt.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, 50);
    //     }
    // })();



});