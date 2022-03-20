import React from "react";
import { useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";
function LatestPurchase() {
  let { id } = useParams();
  const customer = CustomerService.get(id);
  return (
    <div>
      <h1>Latest Purchases:</h1>
      <h2>
        {customer.name} {customer.surname}
      </h2>
      <ul>
        {customer.products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default LatestPurchase;
