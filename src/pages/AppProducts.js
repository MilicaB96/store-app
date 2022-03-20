import React, { useState } from "react";
import Product from "../components/Product";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";

function AppProducts() {
  // declare prodcut variable
  const [products, setProducts] = useState(ProductService.getAll());

  // handle increment function
  const handleIncrement = (id) => {
    const newQuantity = ProductService.increment(id);
    // const index = products.findIndex((product) => product.id == id);
    setProducts([...products]);
  };
  const handleDecrement = (id) => {
    const newQuantity = ProductService.decrement(id);
    // const index = products.findIndex((product) => product.id == id);
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
      <ul className='p-3'>
        {filteredProducts.map((product) => (
          <li className='container row' key={product.id}>
            <div className='col-4'>
              <Product
                {...product}
                incrementCallback={handleIncrement}
                decrementCallback={handleDecrement}
              />
            </div>
            <div className='col'>
              <Link to={`/products/${product.id}`}>Buy</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppProducts;
