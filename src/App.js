import './App.css';
import React, { useState,useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';


function App() {

  // Blank customer (no customer selected)
  const blankCustomer = { id: -1, name: '', email: '', password: '' };

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


    const handleDeleteClick = async () => {
      if (selectedCustomer.id === -1) {
        return; // Exit the function if no customer is currently selected
      }
    
      try {
        const response = await fetch(`http://localhost:8080/api/customers/${selectedCustomer.id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error('Failed to delete customer');
        }
    
        // Fetch the updated customer list
        await getCustomers();
        setSelectedCustomer(blankCustomer); // Deselect the current customer
      } catch (error) {
        console.error('Error deleting customer:', error);
      }
    };

  const [customers, setCustomers] = useState([]);
  
  const getCustomers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/customers"); // Make a GET request
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      const data = await response.json(); // Parse the JSON response
      setCustomers(data); // Update the state with fetched data
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };


  useEffect(() => {
    getCustomers(); // Calls getCustomers when the component mounts
  }, []); // Empty dependency array means this effect runs once when the component mounts
  
  // Post Function
  const post = async (customer) => {
    try {
      const response = await fetch("http://localhost:8080/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (!response.ok) throw new Error('Failed to post customer');
      return await response.json();
    } catch (error) {
      console.error('Error posting customer:', error);
    }
  };


  const handleSaveClick = async () => {
    try {
      let updatedCustomer;
  
      // Determine if we need to post or put the customer
      if (selectedCustomer.id === -1) {
        updatedCustomer = await post(selectedCustomer);
      } else {
        console.log("update");
        updatedCustomer = await put(selectedCustomer.id, selectedCustomer);
      }
  
      // Update customer list in place if update was successful
      if (updatedCustomer) {
        const updatedCustomers = customers.map(customer =>
          customer.id === updatedCustomer.id ? updatedCustomer : customer
        );
        setCustomers(updatedCustomers);
      } else {
        // Fetch the updated customer list if POST was used
        await getCustomers();
      }
  
      setSelectedCustomer(blankCustomer);
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  const handleCancelClick = () => {
    setSelectedCustomer(blankCustomer);
    
  };

  const put = async (id, customer) => {
    try {
      const response = await fetch(`http://localhost:8080/api/react/customers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (!response.ok) throw new Error('Failed to update customer');
      return await response.json();
    } catch (error) {
      console.error('Error updating customer:', error);
    }
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
 
{/* Customer List Component */}
 <CustomerList
        customers={customers}
        selectedCustomer={selectedCustomer}
        onItemClick={handleItemClick}
      />

      {/* Customer Form */}
      <CustomerForm
        selectedCustomer={selectedCustomer}
        formHeader={formHeader}
        onInputChange={handleInputChange}
        onSaveClick={handleSaveClick}
        onCancelClick={handleCancelClick}
        onDeleteClick={handleDeleteClick}
      />

    </div>
  );
}

export default App;
