import './App.css';
import React, { useState } from 'react';

function App() {

  const [customers, setCustomers] = useState([
    { name: 'Kelsey', email: 'kelsey@example.com', password: 'password123' },
    { name: 'Melanie', email: 'melanie@example.com', password: 'password456' },
    { name: 'Tuan', email: 'tuan@example.com', password: 'password567' },
  ]);

  const [currentCustomer, setCurrentCustomer] = useState({ name: '', email: '', password: '' });

  const handleDeleteClick = () => {
    console.log('Delete button clicked');
  };

  const handleSaveClick = () => {
    console.log('Save button clicked');
  };

  const handleCancelClick = () => {
    console.log('Cancel button clicked');
  };

  return (
    <div className="App">
     <h1>Customer Management System</h1>
     <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
 
      
      {/* Customer Form */}
      <h3>Update</h3>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
          />
        </div>
        <button type="button" onClick={handleDeleteClick}>Delete</button>
        <button type="button" onClick={handleSaveClick}>Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>

    </div>
  );
}

export default App;
