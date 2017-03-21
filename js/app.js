    $(document).ready(function() {

    //Appear Nav on scroll
    function update() {
        if ($(window).scrollTop() > 900) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }
    setInterval(update, 50);

    // Click on button "I'm hungry"
    $('.js_scrollToPlan').click(function () {

        $('html, body').animate({scrollTop: $('.js_SectionPlan').offset().top}, 3000);
    });

    // Click on button "Show more"
    $('.js_scrollToStart').click(function () {

        $('html, body').animate({scrollTop: $('.js_sectionFoodDelivery').offset().top}, 1000);
    });

    //Scrollowanie przy kliknięciu nav
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Animation Section Food delivery
    function text() {
         if ($(window).scrollTop() > 680) {
                $('.js_ofood').addClass('animated fadeIn');
            }
        }
    setInterval(text, 50);



    // Animation Iphone
    function phone() {
            if ($(window).scrollTop() > 1980) {
                $('.js_iphone').addClass('animated fadeInUp');
            }
        }
    setInterval(phone, 50);

    // Animation Section City
    function city() {
            if ($(window).scrollTop() > 2700) {
                $('.js_city').addClass('animated fadeIn');
            }
        }
    setInterval(city, 50);

    // Animation Plan month
    function pay() {
        if ($(window).scrollTop() > 4300) {
            $('.js_pay').addClass('animated pulse');
        }
    }
    setInterval(pay, 50);

   // Mobile Nav
    $('.js_nav_icon').click(function () {

        var nav = $('.js_nav');
        var icon = $('.js_nav_icon i');

        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')){

            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});


    // Maps
    function initMap() {
        var place = {lat: 38.7223, lng: -9.139329};
        var place2 = {lat: 38.745637, lng: -8.384338};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: place2
        });
        var marker = new google.maps.Marker({
            position: place,
            map: map
        });
    }