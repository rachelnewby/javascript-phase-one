class ShoppingBasket {
  constructor() {
    this.basket = []
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getTotalPrice() {
    let total = 0;
    this.basket.map(item => item.getPrice()).forEach(number => total += number);
    return total;
  }
}

module.exports = ShoppingBasket;