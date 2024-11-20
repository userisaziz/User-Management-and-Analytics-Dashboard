import swaggerUi from 'swagger-ui-express';

import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
   swaggerDefinition: {
      openapi: '3.0.0',
      info: {
         title: 'API Documentation',
         version: '1.0.0',
         description: 'API documentation for the backend services',
      },
   },
   apis: ['../routes/*.js'], // Adjust the path as necessary
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };