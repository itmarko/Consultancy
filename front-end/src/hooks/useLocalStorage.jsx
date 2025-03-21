// src/hooks/useLocalStorage.js

import { useState } from "react";

/**
 * Custom hook for managing localStorage state
 *
 * @param {string} key - The key under which the value is stored in localStorage
 * @param {any} initialValue - The initial value for the state if the key doesn't exist in localStorage
 *
 * @returns {Array} - A pair: the current state value and a function to update it.
 */
const useLocalStorage = (key, initialValue) => {
  // Retrieve the stored value from localStorage when the component mounts
  const storedValue = localStorage.getItem(key);

  // If the item exists in localStorage and is parseable as JSON, use that as the initial state
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  // Set up state using the parsed localStorage value or the initial value
  const [storedValueState, setStoredValueState] = useState(parsedValue);

  // Function to set a value in localStorage and update the state
  const setValue = (newValue) => {
    // Check if the newValue is a function, if so, call it with the previous state
    const valueToStore =
      newValue instanceof Function ? newValue(storedValueState) : newValue;

    // Update the localStorage and the state
    localStorage.setItem(key, JSON.stringify(valueToStore));
    setStoredValueState(valueToStore);
  };

  // Function to remove an item from localStorage
  const removeItem = () => {
    localStorage.removeItem(key);
    setStoredValueState(undefined); // Reset the state after removal
  };

  // Return the current value and the functions to modify it
  return [storedValueState, setValue, removeItem];
};

export default useLocalStorage;
