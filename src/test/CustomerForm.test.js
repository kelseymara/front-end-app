import { render, screen, fireEvent } from "@testing-library/react";
import CustomerForm from "../components/CustomerForm";

// Mock handlers
const handleInputChange = jest.fn();
const handleSaveClick = jest.fn();
const handleCancelClick = jest.fn();
const handleDeleteClick = jest.fn();

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

  // Debug to see the rendered output
  screen.debug();

  // Get input elements
  const nameInput = screen.getByLabelText(/Name:/);
  const emailInput = screen.getByLabelText(/Email:/);
  const passwordInput = screen.getByLabelText(/Password:/);

  // Ensure inputs exist
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});
