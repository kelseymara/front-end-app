import './App.css';
import React, { useState,useEffect } from 'react';
import { getAll, get, deleteById, post, put } from './memdb';

function App() {

  // Blank customer (no customer selected)
  const blankCustomer = { id: -1, name: '', email: '', password: '' };

   // Manage state for the selected customer 
   const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);

    // Holds the selected customer
   const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
    console.log("in getCustomers()");
    setCustomers(getAll()); // Calls getAll() from memdb.js and updates the state
  };

// Get customers when the component mounts
  useEffect(() => {
    getCustomers(); // Calls getCustomers when the component mounts
  }, []); // Empty dependency array means this effect runs once when the component mounts

  
  // Handle when a row is clicked
   const handleItemClick = (customer) => {
    // Toggle selection: deselect if already selected, select otherwise
    if (selectedCustomer.id === customer.id) {
      setSelectedCustomer(blankCustomer);
    } else {
      setSelectedCustomer(customer);
    }
  };


  // Update the handleDeleteClick function
  const handleDeleteClick = () => {
    console.log('Delete button clicked');
    if (selectedCustomer.id === -1) {
      return; // Exit the function if no customer is currently selected
    }

    deleteById(selectedCustomer.id); // Delete the currently selected customer
    setCustomers(getAll()); // Update the customer list
    setSelectedCustomer(blankCustomer); // Clear the form by setting it to blankCustomer
  };


//  Save button click function (create or update customer)
  const handleSaveClick = () => {
    // Check if the form is in "Add" mode
    if (selectedCustomer.id === -1) {
      // In "Add" mode, call post() to add a new record
      post(selectedCustomer);
    } else {
      // In "Update" mode, call put() to update an existing record
      put(selectedCustomer.id, selectedCustomer);
    }
  
    // Update the customer list and clear the form
    setCustomers(getAll());
    setSelectedCustomer(blankCustomer); // Clear the form by setting it to blankCustomer
  };

  // Cancel button click (clears the form)
  const handleCancelClick = () => {
    setSelectedCustomer(blankCustomer);
    
  };

  // If customer is not selected, then header is "Add", else it is "Updated"
  const formHeader = selectedCustomer.id === -1 ? 'Add' : 'Update'; 
 
    // Handle form input change
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSelectedCustomer({
        ...selectedCustomer,
        [name]: value,
      });
    };

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
            name="name"
            type="text"
            className="mt-3"
            value={selectedCustomer ? selectedCustomer.name : ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={selectedCustomer ? selectedCustomer.email : ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={selectedCustomer ? selectedCustomer.password : ''}
            onChange={handleInputChange}
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
