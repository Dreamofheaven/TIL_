$(document).ready(function(){
    $('.slider').slick({
        rows: 1,         
        dots: false, 
        slidesToShow: 3,  
    });
    // Add blur overlay to each slide
    $('.slider').find('.slick-slide').append('<div class="slider-overlay"></div>');
});
