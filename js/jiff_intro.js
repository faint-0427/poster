const poster_list = new Swiper('.poster_list', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true, // 중앙 정렬 필수
  slidesPerView: 3, // CSS에서 정한 슬라이드 너비를 따름
  speed: 600,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  watchSlidesProgress: true,
  spaceBetween: 50, 
  resistanceRatio: 0,
   autoplay: {
   delay: 3000,
 },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  loop:true,
    mousewheel: {
    invert: true,
  },
  
});