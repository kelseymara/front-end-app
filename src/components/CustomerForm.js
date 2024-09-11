import React from 'react';
import '../CustomerForm.css'

const CustomerForm = ({ selectedCustomer, formHeader, onInputChange, onSaveClick, onCancelClick, onDeleteClick }) => {
  return (
    <div className="customer-form-container">
      <div className="card shadow-sm">
      <h2>{formHeader}</h2>
      <form className="border">
        <div className="mb-3">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            className="mt-3"
            value={selectedCustomer ? selectedCustomer.name : ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={selectedCustomer ? selectedCustomer.email : ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={selectedCustomer ? selectedCustomer.password : ''}
            onChange={onInputChange}
          />
        </div>
        <button type="button" onClick={onDeleteClick} className="me-2 btn btn-danger">Delete</button>
        <button type="button" onClick={onSaveClick} className="me-2 btn btn-success">Save</button>
        <button type="button" onClick={onCancelClick} className="me-2 btn btn-secondary">Cancel</button>
      </form>
      </div>
    </div>
  );
};

export default CustomerForm;
