function showSide(){

  const sideBar = document.querySelector('.sideView')
  sideBar.style.display = 'flex'

  const icon = document.querySelector('.micon')
  icon.style.display='none';

}

function hideBar(){
  const sideBar = document.querySelector('.sideView')
  sideBar.style.display = 'none'
  const icon = document.querySelector('.micon')
  icon.style.display='flex';
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    
    "@1.00": {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    "@0.50": {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    "@1.50": {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    "@2.00": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});