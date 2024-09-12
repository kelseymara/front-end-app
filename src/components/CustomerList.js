import React, { useState } from "react";
import "../styles/CustomerList.css";

const CustomerList = ({ customers, selectedCustomer, onItemClick }) => {
  return (
    <div className="customer-list-container">
      <div className="card shadow-sm">
        <h2 className="p-2">Customer List</h2>

        {/* Instruction for users on how to interact with the customer list */}
        <p className="p-2">
          Click on a customer from the list to change the add form to an update
          form with their details.
        </p>

         {/* Table with list of customers */}
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the list of customers and display each one */}
            {customers.map((customer) => (
              <tr
                key={customer.id}
                // When the row is clicked, call onItemClick function with the current customer
                onClick={() => onItemClick(customer)} 
                // Bold the customer if the current row's customer is the same as the selectedCustomer
                // If the customer is not selected, the font weight remains normal
                style={{
                  fontWeight:
                    selectedCustomer.id === customer.id ? "bold" : "normal",
                }}
              >
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
