import React from "react";

function Customer({ id, name, surname, deleteCallback }) {
  return (
    <div className='container  row'>
      <h4 className='d-inline-block col-5'>
        {name} {surname}
      </h4>
      <button
        className='col-3 btn btn-outline-dark btn-sm'
        type='button'
        onClick={() => {
          deleteCallback(id);
        }}
      >
        Delete Customer
      </button>
    </div>
  );
}

export default Customer;
