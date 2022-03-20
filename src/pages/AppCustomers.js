import React, { useState } from "react";
import Customer from "../components/Customer";
import CustomerService from "../services/CustomerService";

function AppCustomers() {
  // declare customers variable
  const [customers, setCustomers] = useState(CustomerService.getAll());
  //delete customer function
  const handleDelete = (id) => {
    const isDeleted = CustomerService.delete(id);
    if (isDeleted) {
      setCustomers(customers.filter((customer) => customer.id !== id));
    }
  };
  return (
    <div className='p-3'>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id} className='text-start'>
            <Customer {...customer} deleteCallback={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppCustomers;
