import React from "react";

function Product({ id, name, quantity, incrementCallback, decrementCallback }) {
  return (
    <div className='text-start'>
      <h4>{name} </h4>
      <span>
        <button
          type='button'
          className='btn'
          onClick={() => {
            decrementCallback(id);
          }}
        >
          -
        </button>
        <em>{quantity}</em>
        <button
          type='button'
          className='btn'
          onClick={() => {
            incrementCallback(id);
          }}
        >
          +
        </button>
      </span>
    </div>
  );
}

export default Product;
