import $ from 'jquery'
import slick from './plugins/slick'

const Carousel = () => {
    const sbp = $(".sp-cont-prev")
    const sbn = $(".sp-cont-next")
    const ccsi = $(".cur_carousel-slider-container")
    const scw = $(".slider-carousel-wrap")

    sbp.on("click", function () {
        $(this).closest(scw).find(ccsi).slick('slickPrev')
    })
    sbn.on("click", function () {
        $(this).closest(scw).find(ccsi).slick('slickNext')
    })

    // hero - full screen slider
    if($('.fullscreen-slider').length) {
        const fcshinit = $('.fullscreen-slider')
        const fssc = $('.fullscreenslider-counter')

        fcshinit.on("init", function (event, slick) {
            fssc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount)
        })
        fcshinit.slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: false
        })
        fcshinit.on("afterChange", function (event, slick, currentSlide) {
            fssc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount)
        })
    }

    // home - featured projects carousel
    if($('.fet_pr-carousel').length) {
        const fetcarCounter = $(".fet_pr-carousel-counter")
        const fpr = $('.fet_pr-carousel')

        fpr.on("init", function (event, slick) {
            fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount)
        })

        fpr.slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            slickCurrentSlide: 2,
            centerPadding: "0",
            centerMode: true,
            responsive: [{
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 4,
                        centerMode: false,
                    }
                },

                {
                    breakpoint: 1084,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]

        })

        fpr.on("afterChange", function (event, slick, currentSlide) {
            fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount)
        })

        fpr.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var
                direction,
                slideCountZeroBased = slick.slideCount - 1

            if (nextSlide == currentSlide) {
                direction = "same"

            } else if (Math.abs(nextSlide - currentSlide) == 1) {
                direction = (nextSlide - currentSlide > 0) ? "right" : "left"

            } else {
                direction = (nextSlide - currentSlide > 0) ? "left" : "right"
            }

            // Add a temp CSS class for the slide animation (.slick-current-clone-animate)
            if (direction == 'right') {
                $('.slick-cloned[data-slick-index="' + (nextSlide + slideCountZeroBased + 1) + '"]', fpr).addClass('slick-current-clone-animate')
            }

            if (direction == 'left') {
                $('.slick-cloned[data-slick-index="' + (nextSlide - slideCountZeroBased - 1) + '"]', fpr).addClass('slick-current-clone-animate')
            }
        })

        fpr.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.slick-current-clone-animate', fpr).removeClass('slick-current-clone-animate')
            $('.slick-current-clone-animate', fpr).removeClass('slick-current-clone-animate')
        })
    }

    if($('.text-carousel').length) {
        $('.text-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerPadding: "0",
            centerMode: true,
            responsive: [{
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 2,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]

        })
    }

    if($('.fs-carousel').length) {
        const fshc = $('.fs-carousel')
        const ssnc = $('.slider-nav-counter')

        fshc.on("init", function (event, slick) {
            ssnc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount)
        })
        fshc.slick({
            infinite: true,
            slidesToShow: 3,
            dots: true,
            autoplay:true,
            arrows: false,
            centerMode: false,
            responsive: [{
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]

        })
        fshc.on("afterChange", function (event, slick, currentSlide) {
            ssnc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount)
        })
        $(".fs-carousel-title h3 , .fs-carousel-link").on({
            mouseenter: function () {
                $(this).parents(".fs-carousel-item").find(".bg").addClass("hov-rot")
            },
            mouseleave: function () {
                $(this).parents(".fs-carousel-item").find(".bg").removeClass("hov-rot")
            }
        })
    }

    if($('.serv-carousel').length) {
        $('.serv-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            dots: true,
            arrows: false,
            centerMode: false,
            responsive: [{
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]

        });
    }

}

export default Carousel
