$(document).ready(function() {
    "use strict";

    $('.store .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });

    $('.search-page .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        dots: true,
    });

    $('.search-page .products .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        dots: true,
    });

    $('.search-page .related-product .product-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        dots: false,
    });

    let winWidth = $(window).width();
    
    if(winWidth < 992) {
        $('.trending .row').slick({
            dots: true,
            variableWidth: true,
            arrows: false,
        });
    
        $('.why-shop .row').slick({
            dots: true,
            variableWidth: true,
            arrows: false,
            centerMode: true,
            dots: false,
        });
    }

    $('.header .bars').on('click', function() {
        $('.header .nav').slideToggle();
    })




    $('.faq .question-tab li').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        let getClass = '.faq .question-content .' + $(this).attr('data-tab');
        $('.faq .question-content .question-group').hide();
        $(getClass).show();
    });

    $('.faq .accordion-toggle').on('click', function(e) {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.faq .accordion-toggle').removeClass('active');
            $(this).addClass('active');
        }
    });

});