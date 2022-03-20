class CustomerService {
  customers = [
    {
      id: 1,
      name: "Marko",
      surname: "Markovic",
      products: ["chicken drum", "banana"],
    },
    {
      id: 2,
      name: "Ivan",
      surname: "Ivanovic",
      products: ["beer"],
    },
    {
      id: 3,
      name: "Janko",
      surname: "Jankovic",
      products: ["apple", "banana"],
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
}
export default new CustomerService();
