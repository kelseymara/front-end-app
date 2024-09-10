import './App.css';
import React, { useState } from 'react';

function App() {

  // Blank customer (no customer selected)
  const blankCustomer = { id: -1, name: '', email: '', password: '' };

  const [customers] = useState([
    { id:0, name: 'Kelsey', email: 'kelsey@example.com', password: 'password123' },
    { id:1, name: 'Melanie', email: 'melanie@example.com', password: 'password456' },
    { id:2, name: 'Tuan', email: 'tuan@example.com', password: 'password567' },
  ]);

   // Manage state for the selected customer 
   const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);
  
  // Handle when a row is clicked
   const handleItemClick = (customer) => {
    // Toggle selection: deselect if already selected, select otherwise
    if (selectedCustomer.id === customer.id) {
      setSelectedCustomer(blankCustomer);
    } else {
      setSelectedCustomer(customer);
    }
  };


  const handleDeleteClick = () => {
    console.log('Delete button clicked');
  };

  const handleSaveClick = () => {
    console.log('Save button clicked');
  };

  const handleCancelClick = () => {
    setSelectedCustomer(blankCustomer);
  };

  // If customer is not selected, then header is "Add", else it is "Updated"
  const formHeader = selectedCustomer.id === -1 ? 'Add' : 'Update'; 
 

  return (
    <div className="App">
     <h1>Customer Management System</h1>
     <h2 className="mt-4">Customer List</h2>
     <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}
            onClick={() => handleItemClick(customer)}
            className={selectedCustomer === customer ? 'selected' : ''}
            style={{ fontWeight: selectedCustomer.id === customer.id ? 'bold' : 'normal' }} >
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
 
      
      {/* Customer Form */}
      <h2>{formHeader}</h2>
      <form className="border">
        <div>
          <label>Name:</label>
          <input
            type="text"
            className="mt-3"
            value={selectedCustomer ? selectedCustomer.name : ''}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={selectedCustomer ? selectedCustomer.email : ''}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={selectedCustomer ? selectedCustomer.password : ''}
          />
        </div>
        <button type="button" onClick={handleDeleteClick} className="me-2">Delete</button>
        <button type="button" onClick={handleSaveClick} className="me-2">Save</button>
        <button type="button" onClick={handleCancelClick} className="me-2">Cancel</button>
      </form>

    </div>
  );
}

export default App;
