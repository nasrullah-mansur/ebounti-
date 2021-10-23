$(document).ready(function() {
    "use strict";

    $('.store .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });

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