import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomerList from '../components/CustomerList';

// Sample data for testing
const mockCustomers = [
  { id: 1, name: 'Kelsey', email: 'kelsey@example.com', password: 'password123' },
  { id: 2, name: 'Melanie', email: 'melanie@example.com', password: 'password456' },
  { id: 3, name: 'Tuan', email: 'tuan@example.com', password: 'password789' }
];

// Test for rendering
test('renders CustomerList with given customers', () => {
    render(<CustomerList customers={mockCustomers} selectedCustomer={{ id: -1, name: '', email: '', password: '' }} onItemClick={() => {}} />);
  
    // Check if the Customer List title is in the document
    expect(screen.getByText('Customer List')).toBeInTheDocument();
    
    // Check if the table headers are in the document
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    
    
    // Check if both customers' names are in the document
    expect(screen.getByText('Kelsey')).toBeInTheDocument();
    expect(screen.getByText('Melanie')).toBeInTheDocument();
    expect(screen.getByText('Tuan')).toBeInTheDocument();
  });
  