"use strict"
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
 pagination: {
   el: ".swiper-pagination",
   type: "fraction",
 },
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
});

var swiper = new Swiper(".new-arrivals", {
//  slidesPerView: 4,
 spaceBetween: 40,
 loop: true,
 mousewheel: false,
 keyboard: {
   enabled: true
 },
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});

let thisYear = new Date().getFullYear();
document.getElementById("years").innerText = thisYear;



