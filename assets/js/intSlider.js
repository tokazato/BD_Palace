var aboutAsSlider = new Swiper('.aboutAsSlider', {
    navigation: {
      nextEl: '.goRight',
      prevEl: '.goLeft',
    },
    speed: 800,
    spaceBetween: 20,
    loops: true,
    slidesPerView: 1,
    on: {
        slideChange: function () {
          let fromTop = (56 * this.realIndex);
          document.getElementById("indexCounter").style.top = `${-fromTop}px`;
        },
      }
  });
