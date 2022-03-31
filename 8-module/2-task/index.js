import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.render();
    this.filters = {};
  }

  render() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
      </div>
    </div>`);
    let productsGrid = this.elem.querySelector('.products-grid__inner');
    for (let element of this.products) {
      let card1 = new ProductCard(element);
      productsGrid.append(card1.elem);
    
    }
  }
  
  updateFilter(filters) {
    this.filters = filters;
    let productsFilter = [];
    let productsGrid = this.elem.querySelector('.products-grid__inner');

    if (document.querySelector('[data-no-nuts]:checked')) {
      productsGrid.innerHTML = '';
      productsFilter = productsFilter.concat(this.products.filter(item => item.nuts == undefined));
    }
    if (document.querySelector('[data-vegetarian-only]:checked')) {
      productsGrid.innerHTML = '';
      productsFilter = productsFilter.concat(this.products.filter(item => item.vegeterian == true));
    }
    if (document.querySelector('[data-max-spiciness]:checked')) {
      productsGrid.innerHTML = '';
      productsFilter = productsFilter.concat(this.products.filter(item => item.spiciness <= 2));
    }
    if (document.querySelector('[data-category]:checked')) {
      productsGrid.innerHTML = '';
      productsFilter = productsFilter.concat(this.products.filter(item => item.category == 'soups'));
    }

    let newProductsFilter = [...new Set(productsFilter)];
    for (let element of newProductsFilter) {
      let card1 = new ProductCard(element);
      productsGrid.append(card1.elem);
    }
    
    if (newProductsFilter.length == 0) {
      productsGrid.innerHTML = '';
      for (let element of this.products) {
        let card1 = new ProductCard(element);
        productsGrid.append(card1.elem);
      }
    }

    // if (document.querySelector('[data-no-nuts]:checked')) {
    //   productsGrid.innerHTML = '';
    //   productsFilter = productsFilter.concat(this.products.filter(item => item.nuts == undefined));
    // }

    // if (document.querySelector('[data-vegetarian-only]:checked')) {
    //   productsGrid.innerHTML = '';
    //   productsFilter = productsFilter.concat(this.products.filter(item => item.vegeterian == true));
    // }

    // if (document.querySelector('[data-max-spiciness]:checked')) {
    //   productsGrid.innerHTML = '';
    //   productsFilter = productsFilter.concat(this.products.filter(item => item.spiciness <= 2));
    // }

    // if (document.querySelector('[data-category]:checked')) {
    //   productsGrid.innerHTML = '';
    //   productsFilter = productsFilter.concat(this.products.filter(item => item.category == 'soups'));
    // }

    // let newProductsFilter = [...new Set(productsFilter)];
    // for (let element of newProductsFilter) {
    //   let card1 = new ProductCard(element);
    //   productsGrid.append(card1.elem);
    // }

    // productsGrid.innerHTML = '';
    // for (let element of this.products) {
    //   let card1 = new ProductCard(element);
    //   productsGrid.append(card1.elem);
    
    // }
    

    

    
    // if (document.querySelector('[data-no-nuts]:checked')) {
    //   this.products.forEach((item) => {
    //     if (item.nuts == undefined) {
    //       let card1 = new ProductCard(item);
    //       productsGrid.append(card1.elem);
    //     }
    //   });
    // }
    // if (document.querySelector('[data-vegetarian-only]:checked')) {
    //   this.products.forEach((item) => {
    //     if (item.vegeterian == true) {
    //       let card1 = new ProductCard(item);
    //       productsGrid.append(card1.elem);
    //     }
    //   });
    // }
    // if (document.querySelector('[data-max-spiciness]:checked')) {
    //   this.products.forEach((item) => {
    //     if (item.spiciness <= 2) {
    //       let card1 = new ProductCard(item);
    //       productsGrid.append(card1.elem);
    //     }
    //   });
    // }

    // if (document.querySelector('[data-category]:checked')) {
    //   this.products.forEach((item) => {
    //     if (item.category == 'soups') {
    //       let card1 = new ProductCard(item);
    //       productsGrid.append(card1.elem);
    //     }
    //   });
    // }
  }
  // if (document.querySelector('[data-category]:checked')) {
  //   this.products.forEach((item) => {
  //     if (item.category == 'soups') {
  //       let card1 = new ProductCard(item);
  //       productsGrid.append(card1.elem);
  //     }
  //   });
  // }
// let someUsers = this.products.filter(item => item.category == 'soups');
// for (let element of someUsers) {
//   let card1 = new ProductCard(element);
//   productsGrid.append(card1.elem);
// }
}