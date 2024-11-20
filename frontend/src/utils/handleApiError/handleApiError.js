/**
 * Handles API errors by extracting the relevant message.
 * @param {Object} error - The error object.
 * @returns {string} - The error message.
 */
export const handleApiError = (error) => {
   if (error.response && error.response.data && error.response.data.message) {
      return error.response.data.message;
   }
   return error.message || 'An unknown error occurred';
};