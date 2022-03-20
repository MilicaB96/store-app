import React, { useState } from "react";
import Customer from "../components/Customer";
import CustomerService from "../services/CustomerService";
import { Link } from "react-router-dom";

function AppCustomers() {
  // declare customers variable
  const [customers, setCustomers] = useState(CustomerService.getAll());
  // add customer name,surname
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  //delete customer function
  const handleDelete = (id) => {
    const isDeleted = CustomerService.delete(id);
    if (isDeleted) {
      setCustomers(customers.filter((customer) => customer.id !== id));
    }
  };
  //submit customer form function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = CustomerService.create({ name, surname });
    setCustomers([...customers, newCustomer]);
  };
  return (
    <div className='p-3'>
      {/* customer form */}
      <div className='container p-3'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Surname:
            <input
              type='text'
              name='surname'
              placeholder='Surname'
              required
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
          <br />
          <button type='submit' className='btn btn-light'>
            Submit
          </button>
        </form>
      </div>
      {/* customer listing */}
      <ul>
        {customers.map((customer) => (
          <li className='text-start' key={customer.id}>
            <div className='d-flex justify-content-start'>
              <Customer {...customer} deleteCallback={handleDelete} />
              <Link to={`/customers/${customer.id}`}>Latest Purchases</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppCustomers;
