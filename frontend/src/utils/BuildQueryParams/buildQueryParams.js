/**
 * Utility function to build query parameters.
 * @param {Object} params - The parameters to include in the query string.
 * @returns {string} - The query string.
 */
export const buildQueryParams = (params) => {
   const queryParams = Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
   return queryParams ? `?${queryParams}` : '';
};