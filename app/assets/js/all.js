$(function() {
  console.log('Hello Bootstrap5');
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  grid: {
    row: 3,
  },
  breakpoints: {
    slidesPerView: 3,
    spaceBetween: 30,
    // 768: {
  //   //   slidesPerView: 1,
  //   //   spaceBetween: 30,
  //   // }
    grid: {
      row: 1,
    },
  }
});