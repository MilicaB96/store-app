class CustomerService {
  customers = [
    {
      id: 1,
      name: "Marko",
      surname: "Markovic",
      products: [
        { id: 1, name: "chicken drum" },
        { id: 2, name: "banana" },
      ],
    },
    {
      id: 2,
      name: "Ivan",
      surname: "Ivanovic",
      products: [{ id: 1, name: "beer" }],
    },
    {
      id: 3,
      name: "Janko",
      surname: "Jankovic",
      products: [
        { id: 1, name: "apple" },
        { id: 2, name: "banana" },
      ],
    },
  ];
  getAll() {
    return [...this.customers];
  }
  get(id) {
    return this.customers.find((customer) => customer.id == id);
  }
  delete(id) {
    this.customers = this.customers.filter((customer) => customer.id != id);
    return true;
  }
  create(data) {
    const newId = this.customers[this.customers.length - 1].id + 1;
    this.customers.push({ ...data, id: newId, products: [] });
    return this.customers[this.customers.length - 1];
  }
  updateProduct(id, product) {
    const index = this.customers.findIndex(
      (customer) => customer.id === Number(id)
    );
    const newId = Math.max(
      this.customers.products.map((product) => product.id)
    );
    if (index !== -1) {
      this.customers[index].products.push({ ...product, id: newId });
    }
  }
}
export default new CustomerService();
