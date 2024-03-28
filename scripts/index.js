const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');
const slider = document.querySelector('.slider');

let slides = document.querySelectorAll('.slider img');
const countSlides = slides.length;

let currentSlide = 0;

btnRight.addEventListener('click', () => {
  currentSlide++;
  updateSlide();
});

btnLeft.addEventListener('click', () => {
  currentSlide--;
  updateSlide();
});

function updateSlide() {
  if (currentSlide === countSlides) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = countSlides - 1;
  }

  document.documentElement.style.setProperty('--slider-index', currentSlide);
}
