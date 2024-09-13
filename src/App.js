import "./styles/App.css";
import React, { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";

function App() {
  // Blank customer (no customer selected)
  const blankCustomer = { id: -1, name: "", email: "", password: "" };

  // Manage state for the selected customer
  const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);

  // Handle when a customer row is clicked
  const handleItemClick = (customer) => {
    // Toggle selection: deselect if already selected, select otherwise
    if (selectedCustomer.id === customer.id) {
      setSelectedCustomer(blankCustomer);
    } else {
      setSelectedCustomer(customer);
    }
  };

  // Handle when delete button is clicked
  const handleDeleteClick = async () => {
    if (selectedCustomer.id === -1) {
      return; // Exit the function if no customer is currently selected
    }

    try {
      // Make a DELETE request to the API for the selected customer
      const response = await fetch(
        `http://localhost:8080/api/customers/${selectedCustomer.id}`,
        {
          method: "DELETE",
        }
      );
      // Check if the response was successful
      if (!response.ok) {
        throw new Error("Failed to delete customer");
      }

      // Fetch the updated customer list
      await getCustomers();
      setSelectedCustomer(blankCustomer); // Deselect the current customer

      // Show success message
      alert("Customer deleted successfully!");
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  // Manage state for the list of customers
  const [customers, setCustomers] = useState([]);

  // Fetch the list of customers from the API
  const getCustomers = async () => {
    try {
      // Make a GET request to fetch customers
      const response = await fetch("http://localhost:8080/api/customers"); // Make a GET request
      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }
      const data = await response.json(); // Parse the JSON response
      setCustomers(data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // Get customers when the component mounts
  useEffect(() => {
    getCustomers(); // Calls getCustomers when the component mounts
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Post Function to post a new customer to the API
  const post = async (customer) => {
    try {
      // Make a POST request to add a new customer
      const response = await fetch("http://localhost:8080/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (!response.ok) throw new Error("Failed to post customer");
      return await response.json(); // Return the newly created customer
    } catch (error) {
      console.error("Error posting customer:", error);
    }
  };

  // Put function to update an existing customer
  const put = async (id, customer) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/customers/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customer),
        }
      );
      if (!response.ok) throw new Error("Failed to update customer");
      return await response.json();
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  // Save button click function (create or update customer)
  const handleSaveClick = async () => {

  // Check if any field in the form is empty
  if (!selectedCustomer.name || !selectedCustomer.email || !selectedCustomer.password) {
    alert("Please fill in all fields before saving.");
    return; // Prevent saving if any field is empty
  }
    // Check if there was an email error
    if (emailError) {
      alert("Please enter a valid email address before saving.");
      return; // Prevent saving if email is invalid
    }

    try {
      let updatedCustomer;

      // Determine if we need to post or put the customer
      if (selectedCustomer.id === -1) {
        updatedCustomer = await post(selectedCustomer);
        alert("New customer created successfully!");
      } else {
        updatedCustomer = await put(selectedCustomer.id, selectedCustomer);
        alert("Customer updated successfully!");
      }

      // Update customer list in place if update was successful
      if (updatedCustomer) {
        const updatedCustomers = customers.map((customer) =>
          customer.id === updatedCustomer.id ? updatedCustomer : customer
        );
        setCustomers(updatedCustomers);
      } else {
        // Fetch the updated customer list if POST was used
        await getCustomers();
      }
      // Clear form after saving
      setSelectedCustomer(blankCustomer);
    } catch (error) {
      console.error("Error saving customer:", error);
    }
  };

  // Cancel button click
  const handleCancelClick = () => {
    setSelectedCustomer(blankCustomer);
  };

  // If customer is not selected, then header is "Add Customer", else it is "Update Customer"
  const formHeader =
    selectedCustomer.id === -1 ? "Add Customer" : "Update Customer";

  // State to store email validation error
  const [emailError, setEmailError] = useState(""); 

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the field being updated is the email field, perform validation
  if (name === "email") {
    // Simple email regex for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (!emailPattern.test(value)) {
      setEmailError("Invalid email format"); // Set error message if email is invalid
    } else {
      setEmailError(""); // Clear error message if email is valid
    }
  }
    // Update the selected customer's fields with new values
    setSelectedCustomer({
      // Spread operator copies all existing properties from the current selectedCustomer
      ...selectedCustomer,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h1 className="mb-4">Customer Management System</h1>

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
