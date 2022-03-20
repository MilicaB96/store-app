import React, { useState } from "react";
import Product from "../components/Product";
import ProductService from "../services/ProductService";

function AppProducts() {
  // declare prodcut variable
  const [products, setProducts] = useState(ProductService.getAll());

  // handle increment function
  const handleIncrement = (id) => {
    const newQuantity = ProductService.increment(id);
    const index = products.findIndex((product) => product.id == id);
    setProducts([...products]);
  };
  const handleDecrement = (id) => {
    const newQuantity = ProductService.decrement(id);
    const index = products.findIndex((product) => product.id == id);
    setProducts([...products]);
  };

  // filtered products
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='p-3'>
      {/* filter list */}
      <input
        type='text'
        placeholder='search products'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* list products */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Product
              {...product}
              incrementCallback={handleIncrement}
              decrementCallback={handleDecrement}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppProducts;
