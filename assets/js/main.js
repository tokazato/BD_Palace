$(document).ready(function(){

    let elements = $('.gridBox div');

    $.each(elements, function( index, element ) {

        $(element).on('click', function(){
            aboutAsSlider.slideTo(index, 0);
            $('.swiperSlider').addClass("open");
            $('body').addClass('active');
        })
    });


    // $('.gridBox div').on('click', function(){
    //     $('.swiperSlider').addClass("open");
    //     $('body').addClass('active');
    // })

    $('.swiperSlider').on('click', function(){
        $('.swiperSlider').removeClass("open");
        $('body').removeClass('active');
    })
    $('.swiperContent').click(function (event){
        event.stopImmediatePropagation();
    });


    $('.gridBox div').on('click', function(){
        $('.swiperSlider').addClass("open");
        $('body').addClass('active');
    })
    $('.swiperSlider').on('click', function(){
        $('.swiperSlider').removeClass("open");
        $('body').removeClass('active');
    })
    $('.swiperContent').click(function (event){
        event.stopImmediatePropagation();
    });

})