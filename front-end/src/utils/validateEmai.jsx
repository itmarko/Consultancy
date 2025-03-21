// src/utils/validateEmail.js

/**
 * Utility function to validate email format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 */
const validateEmail = (email) => {
  // Regex pattern for basic email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  return emailPattern.test(email); // Returns true if email matches the pattern
};

export default validateEmail;
