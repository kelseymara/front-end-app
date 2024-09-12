import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomerList from "../components/CustomerList";

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

// Blank customer (no customer selected)
const blankCustomer = { id: -1, name: "", email: "", password: "" };

// Test for rendering
test("renders CustomerList with given customers", () => {
  render(
    <CustomerList
      customers={mockCustomers}
      selectedCustomer={{ blankCustomer }}
      onItemClick={() => {}}
    />
  );

  // The label “Customer List” should appear on-screen
  expect(screen.getByText("Customer List")).toBeInTheDocument();

  // The following fields should be maintained for each Customer: name, email, password.
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Password")).toBeInTheDocument();

  // 1 The app should display a list of Customer records.
  // Check if each customer's fields are in the document
  mockCustomers.forEach((customer) => {
    expect(screen.getByText(customer.name)).toBeInTheDocument();
    expect(screen.getByText(customer.email)).toBeInTheDocument();
    expect(screen.getByText(customer.password)).toBeInTheDocument();
  });
});

// Selected records should appear with a bold font.
test("applies bold style to selected customer", () => {
  render(
    <CustomerList
      customers={mockCustomers}
      selectedCustomer={mockCustomers[0]} // Providing a valid selectedCustomer
      onItemClick={() => {}} // function since click handling is not being tested here
    />
  );

  // Getting Row with my name ('tr' = table row)
  const kelseyRow = screen.getByText("Kelsey").closest("tr");

  // Ensure the row has the correct style
  expect(kelseyRow).toHaveStyle("fontWeight: bold");
});
