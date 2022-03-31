export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product == null || product == undefined) {
      return;
    }

    if ((this.cartItems.find((item) => item.product.id === product.id)) === undefined) {
      let allProducts = {};
      allProducts.product = product;
      allProducts.count = 1;
      this.cartItems.push(allProducts);
      console.log(this.cartItems);
    } else {
      let countProduct = this.cartItems.find((item) => item.product.id === product.id);
      countProduct.count = ++countProduct.count;
      console.log(this.cartItems);
    }
  }

  updateProductCount(productId, amount) {
    let countProduct = this.cartItems.find((item) => item.product.id === productId);
    
    if (amount >= 1) {
      countProduct.count += 1;
      
      console.log(this.cartItems);
      console.log(productId);
    } else if (amount <= 0) {
      countProduct.count -= 1;
      console.log(this.cartItems);
      console.log(productId);
    }

    if (countProduct.count == 0) {
      let wer = this.cartItems.findIndex((item) => item.product.id === productId);
      this.cartItems.splice(wer, 1);
      console.log(this.cartItems);
    }
  }

  isEmpty() {
    if (this.cartItems.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    let count = 0;
    this.cartItems.forEach((item) => {
      if (item.count !== undefined) {
        count = count + item.count;
      } else {return;}
    });
    //console.log(count);
  }

  getTotalPrice() {
    let total = 0;
    if (!this.isEmpty()) {
      
      this.cartItems.forEach((item) => {
        total += item.product.price * item.count;
      });
      console.log(total); 
    }
    
    console.log(!this.isEmpty());
    
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

