import React from "react";
import "../styles/CustomerForm.css";

const CustomerForm = ({
  selectedCustomer,
  formHeader,
  onInputChange,
  onSaveClick,
  onCancelClick,
  onDeleteClick,
}) => {
  return (
    <div className="customer-form-container">
      <div className="card shadow-sm">
        {/* Header with aria-live to announce form state changes */}
        <h2 className="p-2" aria-live="polite">
          {formHeader}
        </h2>
        {/* Assertive announcement for selection changes */}
        <div className="visually-hidden" aria-live="assertive">
          {/* Display a message if a customer is selected, otherwise show nothing */}
          {selectedCustomer.id !== -1
            ? `You are editing ${selectedCustomer.name}.`
            : ""}
        </div>
        <form className="border p-2">
          {/* Input field for customer's name */}
          <div className="mb-3">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-2"
              value={selectedCustomer ? selectedCustomer.name : ""}
              required
              onChange={onInputChange}
            />
          </div>
          {/* Input field for customer's email*/}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={selectedCustomer ? selectedCustomer.email : ""}
              onChange={onInputChange}
            />
          </div>
          {/* Input field for customer's password*/}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={selectedCustomer ? selectedCustomer.password : ""}
              onChange={onInputChange}
            />
          </div>
          {/* Button to delete the customer */}
          <button
            type="button"
            onClick={onDeleteClick}
            className="me-2 btn btn-danger"
          >
            Delete
          </button>
          {/* Button to save the customer */}
          <button
            type="button"
            onClick={onSaveClick}
            className="me-2 btn btn-success"
          >
            Save
          </button>
          {/* Button to cancel customer selection */}
          <button
            type="button"
            onClick={onCancelClick}
            className="me-2 btn btn-secondary"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
