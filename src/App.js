import './App.css';
import React, { useState } from 'react';

function App() {

  const [customers] = useState([
    { name: 'Kelsey', email: 'kelsey@example.com', password: 'password123' },
    { name: 'Melanie', email: 'melanie@example.com', password: 'password456' },
    { name: 'Tuan', email: 'tuan@example.com', password: 'password567' },
  ]);

   // Manage state for the selected customer
   const [selectedCustomer, setSelectedCustomer] = useState(null);
  
    // Handle row click
  const handleItemClick = (customer) => {
    setSelectedCustomer(selectedCustomer === customer ? null : customer);
  };


  const handleDeleteClick = () => {
    console.log('Delete button clicked');
  };

  const handleSaveClick = () => {
    console.log('Save button clicked');
  };

  const handleCancelClick = () => {
    console.log('Cancel button clicked');
  };

  // const handleItemClick = () => {
  //   console.log('Item in table clicked');
  // };

  return (
    <div className="App">
     <h1>Customer Management System</h1>
     <h2>Customer List</h2>
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
            <tr key={index}
            onClick={() => handleItemClick(customer)}
            className={selectedCustomer === customer ? 'selected' : ''}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
 
      
      {/* Customer Form */}
      <h2>Update</h2>
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
