import React from 'react';

const CustomerForm = ({ selectedCustomer, formHeader, onInputChange, onSaveClick, onCancelClick, onDeleteClick }) => {
  return (
    <div>
      <h2>{formHeader}</h2>
      <form className="border">
        <div>
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
        <button type="button" onClick={onDeleteClick} className="me-2">Delete</button>
        <button type="button" onClick={onSaveClick} className="me-2">Save</button>
        <button type="button" onClick={onCancelClick} className="me-2">Cancel</button>
      </form>
    </div>
  );
};

export default CustomerForm;
