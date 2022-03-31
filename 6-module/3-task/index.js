import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.renderSlider();
    this.widthSlider = 0;
    this.countSlides = 1;
    this.arrowControl();
    this.elem.querySelector('.carousel__arrow_right').addEventListener('click', () => this.carouselRight());
    this.elem.querySelector('.carousel__arrow_left').addEventListener('click', () => this.carouselLeft());
    this.elem.addEventListener('click', this.clickButtonCarousel);
    this.elem.addEventListener('product-add', function(addProduct) {
      alert(addProduct.detail);
    });
  }

  render() {
    this.elem = createElement(`
    <div class="carousel">
    <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
      </div>
    </div>`);
  }

  renderSlider() {
    for (let i = 0; i < this.slides.length; i++) {
      this.carouselInner.insertAdjacentHTML('beforeEnd', `
      <!--Верстка 1-ого слайда-->
        <div class="carousel__slide" data-id="${this.slides[i].id}">
          <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
            <div class="carousel__title">${this.slides[i].name}</div>
            <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`);
    }
  }

  arrowControl() {
    if (this.countSlides == 1) {
      this.elem.querySelector('.carousel__arrow_left').style.display = 'none';
    }
  }

  carouselRight() {
    this.widthSlider = this.widthSlider + this.carouselInner.offsetWidth;
    this.carouselInner.style.transform = `translateX(${-this.widthSlider}px)`;
    this.countSlides += 1;

    if (this.countSlides !== 1) {
      this.elem.querySelector('.carousel__arrow_left').style.display = '';
    }

    if (this.countSlides == this.slides.length) {
      this.elem.querySelector('.carousel__arrow_right').style.display = 'none';
    }
  }

  carouselLeft() {
    this.widthSlider = this.widthSlider - this.carouselInner.offsetWidth;
    this.carouselInner.style.transform = `translateX(${-this.widthSlider}px)`;
    this.countSlides -= 1;

    if (this.countSlides !== this.slides.length) {
      this.elem.querySelector('.carousel__arrow_right').style.display = '';
    }

    if (this.countSlides == 1) {
      this.elem.querySelector('.carousel__arrow_left').style.display = 'none';
    }
  }

  clickButtonCarousel(event) {
    let target = event.target;
    if (target.closest('.carousel__button')) {
      let atrID = target.closest('.carousel__slide').getAttribute('data-id'); 
      let addProduct = new CustomEvent('product-add', {detail: atrID, bubbles: true});
      this.dispatchEvent(addProduct);
    }
  }
}
