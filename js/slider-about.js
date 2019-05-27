$(document).ready(function(){
    $('.slider-about-board').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav-about-board'


    });

    $('.slider-nav-about-board').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-about-board',
        dots: true,
        focusOnSelect: true

    });
    $('.slider-about-team').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav-about-team'
    });

    $('.slider-nav-about-team').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-about-team',
        dots: true,
        focusOnSelect: true

    });
    $('.slick-previous-board').on('click', function () {
        $(".slider-about-board .slick-next").trigger('click');
    });
    $('.slick-next-board').on('click', function () {
        $(".slider-about-board .slick-prev").trigger('click');
    });
    $('.slick-previous-team').on('click', function () {
        $(".slider-about-team .slick-next").trigger('click');
    });
    $('.slick-next-team').on('click', function () {
        $(".slider-about-team .slick-prev").trigger('click');
    });


});