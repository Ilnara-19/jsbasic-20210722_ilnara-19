function initCarousel() {
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  
  let widthSlider = 0;
  if (widthSlider == 0) {
    arrowLeft.style.display = 'none';
  }
  arrowRight.addEventListener('click', function() {
    widthSlider = widthSlider + carouselInner.offsetWidth;
    if (widthSlider > carouselInner.offsetWidth * 2) {
      arrowRight.style.display = 'none';
    }
    carouselInner.style.transform = `translateX(${-widthSlider}px)`;
    
    if (widthSlider > 0) {
      arrowLeft.style.display = '';
    }
  });
  
  arrowLeft.addEventListener('click', function() {
    widthSlider = widthSlider - carouselInner.offsetWidth;
    if (widthSlider > carouselInner.offsetWidth) {
      arrowRight.style.display = '';
    } 
    carouselInner.style.transform = `translateX(${-widthSlider}px)`;

    if (widthSlider == 0) {
      arrowLeft.style.display = 'none';
    }
  });
}



