var swiper = new Swiper(".mySwiper", {
  slidesPerView:3,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      480:{
        slidesPerView:2,
      },
      620:{
        slidesPerView:3,
      },
    },
});

