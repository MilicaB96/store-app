import React, { useState } from "react";
import Product from "../components/Product";
import ProductService from "../services/ProductService";

function AppProducts() {
  // declare prodcut variable
  const [products, setProducts] = useState(ProductService.getAll());
  return (
    <div className='p-3'>
      {/* list porudcts */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppProducts;
