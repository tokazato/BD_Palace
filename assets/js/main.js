$(document).ready(function(){

    let elements = $('.gridBox div');

    $.each(elements, function( index, element ) {

        $(element).on('click', function(){
            aboutAsSlider.slideTo(index, 0);
            $('.swiperSlider').addClass("open");
            $('body').addClass('active');
            $("#indexCounter").css("transition", "0.9s"); 
        })
    });


    // $('.gridBox div').on('click', function(){
    //     $('.swiperSlider').addClass("open");
    //     $('body').addClass('active');
    // })

    $('.swiperSlider').on('click', function(){
        $('.swiperSlider').removeClass("open");
        $('body').removeClass('active');
        $("#indexCounter").css("transition", "0s"); 
    })
    $('.swiperContent').click(function (event){
        event.stopImmediatePropagation();
    });


    // $('.gridBox div').on('click', function(){
    //     $('.swiperSlider').addClass("open");
    //     $('body').addClass('active');
    // })
    // $('.swiperSlider').on('click', function(){
    //     $('.swiperSlider').removeClass("open");
    //     $('body').removeClass('active');
    // })
    // $('.swiperContent').click(function (event){
    //     event.stopImmediatePropagation();
    // });

    $('.burger').on('click', function(){
        $(this).toggleClass("change");
        $('.openNavigationBox').toggleClass('active');
        $('.openNavigationBox').css('width', '100%');
        $('.openNavLanguage').toggleClass('anim');
        $('.odd').toggleClass('anim');
        $('.even').toggleClass('anim');
        $('.navFb').toggleClass('anim');
        $('.navYo').toggleClass('anim');
        $('.openNavLive').toggleClass('anim');
        $('body').toggleClass('active');
       
    })

    $('.open-img').click(function(){
        $('.floor-open-img-main-box').css('display', 'flex');
        $('.floor-open-img').attr('src', this.src);
        $('body').css("overflow", 'hidden');
    })

    $('.floor-open-box-hide').click(function(){
        $('.floor-open-img-main-box').css('display', 'none');
        $('body').css("overflow", 'initial');
    })

})

