class ProductService {
  products = [
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
  getAll() {
    return [...this.products];
  }
  get(id) {
    return this.products[id];
  }
}
export default new ProductService();
