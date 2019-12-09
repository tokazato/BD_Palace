$(document).ready(function(){
// ------------ start jquery

// ------------ open slider same on elements 
    let elements = $('.gridBox div');

    $.each(elements, function( index, element ) {

        $(element).on('click', function(){
            aboutAsSlider.slideTo(index, 0);
            $('.swiperSlider').addClass("open");
            $('body').addClass('active');
            $("#indexCounter").css("transition", "0.9s"); 
        })
    });

// -------------- close slider 
    $('.swiperSlider').on('click', function(){
        $('.swiperSlider').removeClass("open");
        $('body').removeClass('active');
        $("#indexCounter").css("transition", "0s"); 
    });
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


// ---------------- open menu with burger
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
    });

	
// ---------------  floor page: open img
    $('.open-img').click(function(){
        $('.floor-open-img-main-box').css('display', 'flex');
        $('.zoomImg').attr('src', this.src);
        $('.floor-open-img').attr('src', this.src);
        $('body').css("overflow", 'hidden');
    })

// ----------------  floor page: close img
    $('.floor-open-box-hide').click(function(){
        $('.floor-open-img-main-box').css('display', 'none');
        $('body').css("overflow", 'initial');
    })

    
// ------------- responsive main page svg 
    rs()
    $( window ).resize(function() {
        rs()
    });
    function rs(){
        if( window.matchMedia("(max-width: 1560px)").matches ){
            $('.svg').attr('viewBox', '0 0 1920 1080');
        } else {
            $('.svg').attr('viewBox', null);
        }
    }
   
// --------------- main page: live hide and show
    // if( $('.live-link-box').attr('href') ){
    //     $('.live-link-box').css('display', 'flex')
    // } else {
    //     $('.live-link-box').css('display', 'none')
    // }

// ------------- slider counter and  add 0
    var sliderLength = $('.swiper-slide')
    if(sliderLength.length < 10){
        $('.numberOfPicture').text('/ 0'+sliderLength.length)
    } else {
        $('.numberOfPicture').text('/ '+sliderLength.length)
    }
    for(let i = 1; i <= sliderLength.length; i++ ){
        var li = $(`<li>${i < 10 ? '0'+i : i }</li>`)
        $('#indexCounter').append(li)
    }



// ------------------ floor page: sold section
    // if( $('.sold-flat-box-active').css('display') == 'none' ){
    //     $('.floor-section-2-block-search').css('display', 'flex')
    // } else {
    //     $('.floor-section-2-block-search').css('display', 'none')
    // }

// ------------ open live stream popup
    $('.live-link-box').on('click', function(){
        $('.live-stream-main-box').addClass('live-stream-main-box-active');
    });
    $('.live-stream-main-box').on('click', function(){
        $('.live-stream-main-box').removeClass('live-stream-main-box-active');
        $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
    });


    
    // ---------- add Zoom for images
    function removeZoom(){
        if(window.matchMedia("(min-width: 1025px)").matches){
            wheelzoom(document.querySelector('img.zoom'));
        }
    }
    removeZoom()
   
    
}) // ---------------- end jquery



