import React from "react";

function Product({ name, quantity }) {
  return (
    <div className='text-start'>
      <h4 clas>{name} </h4>
      <span>
        <em>{quantity}</em>
      </span>
    </div>
  );
}

export default Product;
