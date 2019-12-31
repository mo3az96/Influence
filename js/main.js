
$(window).on("load", function () {
    $(".loader").fadeOut(1000, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
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


    //map
    var adresse = "";


    var location = [adresse[0], $("#map-cont").attr("lat"), $("#map-cont").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        overviewMapControl: false,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#2b2b2b' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#2b2b2b' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#666666' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#666666' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#666666' }]
            }
        ],
        center: new google.maps.LatLng(24.8629889, 46.5980617),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: "images/pin.png"
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));



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
        $('body').addClass('overflow');
        $('.navbar-cont').addClass('active');
    });
    $('.close-btn, .navbar-cont').click(function () {
        $('body').removeClass('overflow');
        $('.navbar-cont').removeClass('active');
    });
    $('.mo-navbar li').click(function (e) {
        e.stopPropagation();
    });
    if ($(window).width() <= 767) {
        $(".foot-nav-links-header").addClass("mo-accordion");
        $(".foot-links").addClass("mo-panel");
        $(".gallery .item-cont").unwrap();


        $(".input-row .input-label").unwrap();

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

    $('.input-career, .input-contact').focus(function () {
        // console.log($(this).parent().find(".floating-label"));
        $(this).parent().find(".floating-label").addClass('label-active');
    });

    $(".input-career, .input-contact").focusout(function () {
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