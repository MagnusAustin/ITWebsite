const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex = Math.max(slideIndex - 1, 0);
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  slideIndex = Math.min(slideIndex + 1, carouselContainer.children.length - 1);
  updateCarousel();
});

function updateCarousel() {
  const slideWidth = carouselContainer.clientWidth;
  carouselContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}
