// src/services/authService.js

import axios from 'axios';

// Set up a base URL for API requests
const BASE_URL = 'https://api.example.com'; // Replace with your backend API URL

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login function to authenticate a user
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;  // Return user data (e.g., token) from the response
  } catch (error) {
    console.error('Login error:', error);
    throw error.response ? error.response.data : error;
  }
};

// Signup function to create a new user
export const signup = async (name, email, password) => {
  try {
    const response = await api.post('/auth/signup', { name, email, password });
    return response.data;  // Return user data (e.g., token) from the response
  } catch (error) {
    console.error('Signup error:', error);
    throw error.response ? error.response.data : error;
  }
};

// Logout function to clear user session and tokens
export const logout = () => {
  // You can clear tokens from local storage, cookies, or sessionStorage
  localStorage.removeItem('authToken');  // Example for localStorage
  // If you use cookies, you can delete them here as well
  // document.cookie = 'authToken=; Max-Age=0'; // Example for cookies
};

// Function to get the current user (optional, if your API supports fetching current user)
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await api.get('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error.response ? error.response.data : error;
  }
};

// Optionally, you can add more authentication-related methods like password reset, etc.
