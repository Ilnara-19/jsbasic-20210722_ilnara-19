import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListener();
  }

  render() {
    this.elem = createElement(`
    <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <!--Ссылки на категории-->
    <nav class="ribbon__inner">
      <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
      <a href="#" class="ribbon__item" data-id="salads">Salads</a>
      <a href="#" class="ribbon__item" data-id="soups">Soups</a>
      <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
      <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
      <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
      <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
      <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
      <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`);
  }

  ribbonRight() {
    this.elem.querySelector('.ribbon__inner').scrollBy(350, 0);

    this.elem.querySelector('.ribbon__inner').addEventListener('scroll', () => {
      let scrollWidth = this.elem.querySelector('.ribbon__inner').scrollWidth;
      let scrollLeft = this.elem.querySelector('.ribbon__inner').scrollLeft;
      let clientWidth = this.elem.querySelector('.ribbon__inner').clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollRight !== 1) {
        this.elem.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
      }
       
      if (scrollRight < 1) {
        this.elem.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
      }
    });
  }

  ribbonLeft() {
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.ribbonInner.scrollBy(-350, 0);

    this.elem.querySelector('.ribbon__inner').addEventListener('scroll', () => {
      let scrollLeft = this.ribbonInner.scrollLeft;
      if (scrollLeft >= 1) {
        this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
      }
      
      if (scrollLeft == 0) {
        this.elem.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
      }
    });
  }

  addEventListener() {
    this.elem.querySelector('.ribbon__arrow_right').addEventListener('click', () => this.ribbonRight());
    this.elem.querySelector('.ribbon__arrow_left').addEventListener('click', () => this.ribbonLeft());
    this.elem.addEventListener('click', this.clickCategories);
    this.elem.addEventListener('ribbon-select', function(ribbonCategories) {
      alert(ribbonCategories.detail);
    });
  }

  clickCategories(event) {
    event.preventDefault();
    document.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
    if (event.target.classList.contains('ribbon__item_active') !== true) {
      this.querySelector('.ribbon__item_active');
      event.target.classList.toggle('ribbon__item_active');
    }
    
    let categoriesId = event.target.dataset.id;
    let ribbonCategories = new CustomEvent('ribbon-select', {detail: categoriesId, bubbles: true});
    this.dispatchEvent(ribbonCategories);
  }
}
