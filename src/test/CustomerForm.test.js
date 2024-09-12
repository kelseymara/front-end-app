import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomerForm from "../components/CustomerForm"

// Sample data for testing
const mockCustomers = [
  {
    id: 1,
    name: "Kelsey",
    email: "kelsey@example.com",
    password: "password123",
  },
  {
    id: 2,
    name: "Melanie",
    email: "melanie@example.com",
    password: "password456",
  },
  { id: 3, name: "Tuan", email: "tuan@example.com", password: "password789" },
];

// Mock handlers
const handleInputChange = jest.fn();
const handleSaveClick = jest.fn();
const handleCancelClick = jest.fn();
const handleDeleteClick = jest.fn();
// setupTests.js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

// Blank customer (no customer selected)
const blankCustomer = { id: -1, name: "", email: "", password: "" };

// Test rendering of form with it's right labels (name, email, password)
test("rendering form", () => {
  // Render the component with props
  render(
    <CustomerForm
      selectedCustomer={blankCustomer}
      formHeader="Add Customer"
      onInputChange={handleInputChange}
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
      onDeleteClick={handleDeleteClick}
    />
  );


  // Get input elements
  const nameInput = screen.getByLabelText(/Name:/);
  const emailInput = screen.getByLabelText(/Email:/);
  const passwordInput = screen.getByLabelText(/Password:/);

  // Ensure inputs exist
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

// Test Save button click
test("calls onSaveClick when Save button is clicked", () => {
  render(
    <CustomerForm
      selectedCustomer={blankCustomer}
      formHeader="Add Customer"
      onInputChange={handleInputChange}
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
      onDeleteClick={handleDeleteClick}
    />
  );

  // Click the Save button
  fireEvent.click(screen.getByText("Save"));

  // Check if onSaveClick was called
  expect(handleSaveClick).toHaveBeenCalled();

});

// Test Cancel button click
test("calls onCancelClick when Cancel button is clicked", () => {
  render(
    <CustomerForm
      selectedCustomer={mockCustomers[0]}
      formHeader="Add Customer"
      onInputChange={handleInputChange}
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
      onDeleteClick={handleDeleteClick}
    />
  );

  // Click the Cancel button
  fireEvent.click(screen.getByText("Cancel"));

  // Check if onCancelClick was called
  expect(handleCancelClick).toHaveBeenCalled();

   // Check if the form fields are reset to blankCustomer values
  waitFor(() => {
    // Check if the form fields are reset to blankCustomer values
    expect(screen.getByLabelText(/Name:/).value).toBe(blankCustomer.name);
    expect(screen.getByLabelText(/Email:/).value).toBe(blankCustomer.email);
    expect(screen.getByLabelText(/Password:/).value).toBe(blankCustomer.password);
  });
});

// Test Delete button click
test("calls onDeleteClick when Delete button is clicked", () => {
  render(
    <CustomerForm
      selectedCustomer={mockCustomers[0]}
      formHeader="Update Customer"
      onInputChange={handleInputChange}
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
      onDeleteClick={handleDeleteClick}
    />
  );

  // Click the Delete button
  fireEvent.click(screen.getByText("Delete"));

  // Check if onDeleteClick was called
  expect(handleDeleteClick).toHaveBeenCalled();
});