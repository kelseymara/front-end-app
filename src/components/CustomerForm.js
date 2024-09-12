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
        <h2 className="p-2">{formHeader}</h2>
        <form className="border p-2">
          <div className="mb-3">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-2"
              value={selectedCustomer ? selectedCustomer.name : ""}
              onChange={onInputChange}
            />
          </div>
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
          <button
            type="button"
            onClick={onDeleteClick}
            className="me-2 btn btn-danger"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={onSaveClick}
            className="me-2 btn btn-success"
          >
            Save
          </button>
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
