const reviewSlides = document.querySelectorAll('.review__item');
const reviewDots = document.querySelector('.review__dots').querySelectorAll('.slider__dots-item');
const reviewPrevButton = document.querySelector('.review__buttons').querySelector('.slider__button_type_prev');
const reviewNextButton = document.querySelector('.review__buttons').querySelector('.slider__button_type_next');
const reviewActiveClass = 'review__item_active';
const reviewPrevClass = 'review__item_prev';
let reviewSlideIndex = 1;
const feedbackSlides = document.querySelectorAll('.feedback__item');
const feedbackDots = document.querySelectorAll('.feedback__dots-item');
const feedbackPrevButton = document.querySelector('.feedback__buttons').querySelector('.slider__button_type_prev');
const feedbackNextButton = document.querySelector('.feedback__buttons').querySelector('.slider__button_type_next');
const feedbackActiveClass = 'feedback__item_active';
const feedbackPrevClass = 'feedback__item_prev';
let feedbackSlideIndex = 1;

function removeClasses(slides, dots, active, prev) {
  Array.from(slides).forEach((item) => {
    item.classList.remove(active);
    item.classList.remove(prev);
    if(item.classList.contains('review__item')) {
      item.style.visibility = 'hidden';
    }
    if(item.classList.contains('feedback__item')) {
      item.style.order = 1;
    }
  });
  Array.from(dots).forEach((item) => {
    item.classList.remove('slider__dots-item_active');
  });
}

function addSlidesClasses(current, active) {
  current.classList.add(active);
}

function addDotsActiveClass(dot) {
  dot.classList.add('slider__dots-item_active');
}

function changeVisibility(current, next, slides, n, prev, prevEl) {
  current.style.visibility = 'visible';
  if (n < slides.length) {
    next.style.visibility = 'visible';
  }
  if (n > 1) {
    prevEl.style.visibility = 'visible';
    prevEl.classList.add(prev);
  }
}

function changeOrder(slides, current) {
  let index = Array.from(slides).indexOf(current);
  for(let i =0; i < index; i++) {
    slides[i].style.order = 2;
  }
}

function showSlides(n, slides, dots, active, prev) {
  const currentSlide = slides[n-1];
  const nextSlide = slides[n];
  const prevSlide = slides[n-2];
  const activeDot = dots[n-1];

  removeClasses(slides, dots, active, prev);
  addSlidesClasses(currentSlide, active);
  addDotsActiveClass(activeDot);
  if(currentSlide.classList.contains('review__item')) {
    changeVisibility(currentSlide, nextSlide, slides, n, reviewPrevClass, prevSlide);
  }
  if(currentSlide.classList.contains('feedback__item')) {
    changeOrder(slides, currentSlide);
  }
}

function plusSlide() {
  if(reviewSlideIndex < reviewSlides.length) {
    showSlides(reviewSlideIndex += 1, reviewSlides, reviewDots, reviewActiveClass, reviewPrevClass);
  }
}

function minusSlide() {
  if(reviewSlideIndex > 1) {
    showSlides(reviewSlideIndex -= 1, reviewSlides, reviewDots, reviewActiveClass, reviewPrevClass);
  }
}

function plusFeedbackSlide() {
  if(feedbackSlideIndex < feedbackSlides.length) {
    showSlides(feedbackSlideIndex += 1, feedbackSlides, feedbackDots, feedbackActiveClass, feedbackPrevClass);
  }
}

function minusFeedbackSlide() {
  if(feedbackSlideIndex > 1) {
    showSlides(feedbackSlideIndex -= 1, feedbackSlides, feedbackDots, feedbackActiveClass, feedbackPrevClass);
  }
}

for (let j = 0; j < reviewDots.length; j++) {
  reviewDots[j].addEventListener('click', function() {
    showSlides(j + 1, reviewSlides, reviewDots, reviewActiveClass, reviewPrevClass);
  });
}

for (let k = 0; k < feedbackDots.length; k++) {
  feedbackDots[k].addEventListener('click', function() {
    showSlides(k + 1, feedbackSlides, feedbackDots, feedbackActiveClass, feedbackPrevClass);
  });
}

reviewPrevButton.addEventListener('click', minusSlide);
reviewNextButton.addEventListener('click', plusSlide);
feedbackPrevButton.addEventListener('click', minusFeedbackSlide);
feedbackNextButton.addEventListener('click', plusFeedbackSlide);

showSlides(reviewSlideIndex, reviewSlides, reviewDots, reviewActiveClass, reviewPrevClass);
showSlides(feedbackSlideIndex, feedbackSlides, feedbackDots, feedbackActiveClass, feedbackPrevClass);
