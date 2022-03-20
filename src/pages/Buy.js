import React, { useState } from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import CustomerService from "../services/CustomerService";
import ProductService from "../services/ProductService";

function Buy() {
  // product id
  const { id } = useParams();
  let history = useHistory();
  // handle confirm

  // select customers for dropdown manu
  const customers = CustomerService.getAll();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  // get product
  const [product, setProduct] = useState(ProductService.get(id));
  // handle confirm
  const handleConfirm = () => {
    if (!selectedCustomer) {
      return alert("Please select a customer");
    }
    if (!selectedCustomer) {
      return alert("Please select a customer!");
    }

    CustomerService.updateProduct(selectedCustomer, product.name);
    const newQuantity = ProductService.decrement(id);
    console.log(newQuantity);
    setProduct({ ...product, quantity: newQuantity });
  };
  // handleCancel
  const handleCancel = () => {
    history.push("/products");
  };
  if (!product.quantity) {
    return (
      <Link to='/products'>{`We are out of ${product.name}s go back to products`}</Link>
    );
  }

  return (
    <div className='p-3'>
      <h1>Cart</h1>
      <h2>{`Product name: ${product.name} (${product.quantity}) `}</h2>
      <select
        value={selectedCustomer}
        onChange={(e) => {
          setSelectedCustomer(e.target.value);
        }}
      >
        {customers.map((customer) => (
          <option
            key={customer.id}
            value={customer.id}
          >{`${customer.name} ${customer.surname}`}</option>
        ))}
      </select>
      <div>
        <button
          onClick={handleConfirm}
          className='btn btn-light m-2'
          type='button'
        >
          Confirm
        </button>
        <button
          onClick={handleCancel}
          className='btn btn-light m-2'
          type='button'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Buy;
