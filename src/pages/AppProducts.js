import React, { useState } from "react";
import Product from "../components/Product";
import ProductService from "../services/ProductService";

function AppProducts() {
  // declare prodcut variable
  const [products, setProducts] = useState(ProductService.getAll());
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
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppProducts;
