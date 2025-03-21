// src/services/api.js

import axios from 'axios';

// Set up a base URL for API requests (replace with your actual base URL)
const BASE_URL = 'https://api.example.com';

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add authorization token if needed
    // 'Authorization': `Bearer ${yourAuthToken}`
  },
});

// GET request: Fetch data from the server
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};

// POST request: Send data to the server (for creating new resources)
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data: ', error);
    throw error;
  }
};

// PUT request: Update data on the server (for modifying existing resources)
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data: ', error);
    throw error;
  }
};

// DELETE request: Remove data from the server
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data: ', error);
    throw error;
  }
};

// Optionally, you can export individual Axios instance to be used across multiple files
export default api;
