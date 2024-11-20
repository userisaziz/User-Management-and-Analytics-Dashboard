/**
 * Logs errors to the console or a logging service.
 * @param {string} message - The error message.
 * @param {Object} error - The error object.
 */
export const logError = (message, error) => {
   console.error(message, error);
   // Here you can also integrate with a logging service like Sentry, LogRocket, etc.
};
