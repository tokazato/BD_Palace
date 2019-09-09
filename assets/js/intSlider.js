var aboutAsSlider = new Swiper('.aboutAsSlider', {
    navigation: {
      nextEl: '.goRight',
      prevEl: '.goLeft',
    },
    speed: 800,
    spaceBetween: 10,
    // width: 840,
    loops: true,
    on: {
        slideChange: function () {
          let fromTop = (56 * this.realIndex);
          document.getElementById("indexCounter").style.top = `${-fromTop}px`;
        },
      }
  });
