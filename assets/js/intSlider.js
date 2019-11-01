var aboutAsSlider = new Swiper('.aboutAsSlider', {
    navigation: {
      nextEl: '.goRight',
      prevEl: '.goLeft',
    },
    keyboard: {
      enabled: true,
    },
    speed: 800,
    spaceBetween: 20,
    loops: true,
    slidesPerView: 1,
    // on: {
    //     slideChange: function () {
    //       let fromTop = (56 * this.realIndex);
    //       document.getElementById("indexCounter").style.top = `${-fromTop}px`;
    //     },
    //   }
  });



  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  aboutAsSlider.on('slideChange', function() {
    if(iOS){
        let fromTop = (58 * this.realIndex);
          document.getElementById("indexCounter").style.top = `${-fromTop}px`;
    }
    else{
      let fromTop = (56 * this.realIndex);
      document.getElementById("indexCounter").style.top = `${-fromTop}px`;
    }
  })
  
