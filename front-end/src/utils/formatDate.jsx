// src/utils/formatDate.js

/**
 * Utility function to format a date string.
 * @param {string|Date} date - The date to format. It can be a string or a Date object.
 * @param {string} format - The format string, e.g., "MM/DD/YYYY", "YYYY-MM-DD".
 * @returns {string} - Returns the formatted date string.
 */
const formatDate = (date, format = "MM/DD/YYYY") => {
  const dateObj = new Date(date); // Convert the input to a Date object

  if (isNaN(dateObj.getTime())) {
    // If the date is invalid, return an empty string or handle it accordingly
    return "";
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  switch (format) {
    case "YYYY-MM-DD":
      return dateObj.toLocaleDateString("en-CA", options); // Canada locale formats as YYYY-MM-DD
    case "DD/MM/YYYY":
      return dateObj.toLocaleDateString("en-GB", options); // UK locale formats as DD/MM/YYYY
    case "MM/DD/YYYY":
    default:
      return dateObj.toLocaleDateString("en-US", options); // US locale formats as MM/DD/YYYY
  }
};

export default formatDate;
