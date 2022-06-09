const slides = document.querySelectorAll('.review__item');
const dots = document.querySelectorAll('.slider__dots-item');
const prevButton = document.querySelector('.slider__button_type_prev');
const nextButton = document.querySelector('.slider__button_type_next');
let slideIndex = 1;

function showSlides(n) {
  Array.from(slides).forEach((item) => {
    item.classList.remove('review__item_active');
    item.style.visibility = 'hidden';
  });
  Array.from(dots).forEach((item) => {
    item.classList.remove('slider__dots-item_active');
  });

  slides[n-1].classList.add('review__item_active');
  slides[n-1].style.visibility = 'visible';
  if (n < slides.length) {
    slides[n].style.visibility = 'visible';
  }
  dots[n-1].classList.add('slider__dots-item_active');
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
