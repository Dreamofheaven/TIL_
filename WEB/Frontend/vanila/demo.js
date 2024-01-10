$(document).ready(function(){
    $('.your-class').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
// scrollbar: {
//     el: '.swiper-scrollbar',
// },
});
      

// 스크롤
var parent = document.getElementById('parent');
var childRight = document.getElementById('child-right');
var childLeft = document.getElementById('child-left');

// 왼쪽 영역에서 스크롤이 발생하면 오른쪽 영역에 동기화
childLeft.addEventListener('scroll', function () {
  childRight.scrollTop = childLeft.scrollTop;
});

// 오른쪽 영역에서 스크롤이 발생하면 부모(전체)에 동기화
childRight.addEventListener('scroll', function () {
  parent.scrollTop = childRight.scrollTop;
});