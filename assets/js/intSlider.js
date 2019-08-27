var aboutAsSlider = new Swiper('.aboutAsSlider', {
    navigation: {
      nextEl: '.goRight',
      prevEl: '.goLeft',
    },
    speed: 800,
    spaceBetween: 100,
    loops: true,
    on: {
        slideChange: function () {
          let fromTop = (56 * this.realIndex);
          document.getElementById("indexCounter").style.top = `${-fromTop}px`;
        },
      }
  });
