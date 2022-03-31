import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    //let offsetWidthProducts = document.querySelector('.products-grid').offsetWidth;
    let offsetWidth = document.querySelector('.cart-icon').offsetWidth;
  
    if (document.body.clientWidth > 768 && offsetWidth > 0) {
      if (window.pageYOffset == 0) {
        document.querySelector('.cart-icon').style.cssText = "position: ''; top: ''; left: ''";
      }
      if (window.pageYOffset > 0) {
        document.querySelector('.cart-icon').style.cssText = "position: fixed; top: 50px";
        // document.querySelector('.cart-icon').style.left = 
      //(((document.body.clientWidth - offsetWidthProducts) / 2) + (offsetWidthProducts + 10)) + 'px';
      }
    }
  }
}
