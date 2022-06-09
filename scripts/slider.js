const slides = document.querySelectorAll('.review__item');
const dots = document.querySelectorAll('.slider__dots-item');
const prevButton = document.querySelector('.slider__button_type_prev');
const nextButton = document.querySelector('.slider__button_type_next');
let slideIndex = 1;

function showSlides(n) {
  const currentSlide = slides[n-1];
  const nextSlide = slides[n];
  const prevSlide = slides[n-2];
  const activeDot = dots[n-1];

  Array.from(slides).forEach((item) => {
    item.classList.remove('review__item_active');
    item.classList.remove('review__item_prev');
    item.style.visibility = 'hidden';
  });
  Array.from(dots).forEach((item) => {
    item.classList.remove('slider__dots-item_active');
  });

  currentSlide.classList.add('review__item_active');
  currentSlide.style.visibility = 'visible';
  if (n < slides.length) {
    nextSlide.style.visibility = 'visible';
  }
  if (n > 1) {
    prevSlide.style.visibility = 'visible';
    prevSlide.classList.add('review__item_prev');
  }
  activeDot.classList.add('slider__dots-item_active');
}

function plusSlide() {
  if(slideIndex < slides.length) {
    showSlides(slideIndex += 1);
  }
}

function minusSlide() {
  if(slideIndex > 1) {
    showSlides(slideIndex -= 1);
  }
}

for (let i=0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    showSlides(i+1);
  });
}
prevButton.addEventListener('click', minusSlide);
nextButton.addEventListener('click', plusSlide);

showSlides(slideIndex);
