import React, { useState } from 'react';
import '../CustomerList.css'

const CustomerList = ({ customers, selectedCustomer, onItemClick }) => {
  return (
    <div className="customer-list-container">
      <div className="card shadow-sm"> 
      <h2 className="p-2">Customer List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              onClick={() => onItemClick(customer)}
              className={selectedCustomer === customer ? 'selected' : ''}
              style={{ fontWeight: selectedCustomer.id === customer.id ? 'bold' : 'normal' }}
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