// wow init
new WOW().init();

;
(function () {
    'use strict';

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });

    }

    var carouselNews = function () {
        var owlNews = $(".owl-carousel2").owlCarousel({
            loop: true,
            center: false,
            margin: 0,
            responsiveClass: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });

        $.ajax({
            url: 'https://wistaramedia.com/blog/wp-json/wp/v2/posts',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (req, res) {
                    let idImages = res.id;
                    let desc = res.excerpt.rendered;
                    let imagesNews = res.better_featured_image.source_url;
                    let lengthDesc = 200;
                    let finalDesc = desc.substring(0, lengthDesc);

                    owlNews.trigger('add.owl.carousel', [
                        jQuery(`<div>
                        <div class="card text-center"><img class="card-img-top" src="${imagesNews}" alt="${"images-"+ idImages}" >
                            <div class="card-body text-left pr-0 pl-0">
                                <h5>${res.title.rendered}</h5>
                                <p class="card-text" id="descNews">${finalDesc + "..."}</p>
                                <a href="${res.link}" target="_blank">READ MORE <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        </div>`)
                    ]);
                });
                owlNews.trigger('refresh.owl.carousel');
            }
        });

    };

    var checkPosition = function () {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");
        }
    };

    var clickSend = function () {
        $('.send-message').on('click', function () {
            $('#send-message-yes').trigger("click");
        });
    };

    (function ($) {
        carousels();
        checkPosition();
        carouselNews();
        clickSend();
    })(jQuery);
}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}