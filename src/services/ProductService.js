class ProductService {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "beer",
        quantity: 15,
      },
      {
        id: 2,
        name: "banana",
        quantity: 10,
      },
      {
        id: 3,
        name: "chicken drum",
        quantity: 3,
      },
      {
        id: 4,
        name: "apple",
        quantity: 7,
      },
      {
        id: 5,
        name: "orange juice",
        quantity: 5,
      },
    ];
  }
  getAll() {
    return [...this.products];
  }
  get(id) {
    return this.products.find((product) => product.id == id);
  }
  increment(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index].quantity++;
    }
    return this.products[index].quantity;
  }
  decrement(id) {
    const index = this.products.findIndex(
      (product) => product.id === Number(id)
    );
    if (index !== -1 && this.products[index].quantity > 0) {
      this.products[index].quantity--;
    }
    return this.products[index].quantity;
  }
}
export default new ProductService();
