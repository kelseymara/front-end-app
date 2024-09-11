// api.js
const API_URL = "http://localhost:8080/api/customers";

export const getCustomers = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/customers");
    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching customers:', error);
    return [];
  }
};

export const postCustomer = async (customer) => {
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

export const putCustomer = async (id, customer) => {
  try {
    const response = await fetch(`${"http://localhost:8080/api/customers"}/${id}`, {
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

export const deleteCustomer = async (id) => {
  try {
    const response = await fetch(`${"http://localhost:8080/api/customers"}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error('Failed to delete customer');
  } catch (error) {
    console.error('Error deleting customer:', error);
  }
};
