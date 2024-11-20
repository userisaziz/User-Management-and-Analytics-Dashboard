import dotenv from "dotenv";
import logger from "./utils/logger.js"; // Import the logger from utils
import app from "./app.js";
import prisma from "./prisma/prismaClient.js";

dotenv.config();

// Validate environment variables
const requiredEnvVars = ['PORT', 'DATABASE_URL'];
requiredEnvVars.forEach((varName) => {
   if (!process.env[varName]) {
      console.error(`Environment variable ${varName} is missing`);
      process.exit(1);
   }
});

const port = process.env.PORT || 1234;

// Function to start the server
const startServer = async () => {
   try {
      // Test the database connection
      await prisma.$connect();
      logger.info("Connected to the database");

      // If database connection is successful, start the server
      app.listen(port, () => {
         logger.info(`Server is running on port http://localhost:${port}`);
      });
   } catch (error) {
      logger.error("Server failed to start:", { error: error.message });
      process.exit(1);
   }
};

// Start the server
startServer();