import prisma from "./prisma/prismaClient.js";
import bcrypt from 'bcrypt'; // Import bcrypt

export const createAdmin = async ({ username = "Admin", password = "Admin@123" }) => {
   const role = 'Admin';
   try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
      const newAdmin = await prisma.user.create({
         data: {
            username: username, // Use the provided username
            password: hashedPassword, // Store the hashed password
            role: role // Use the role variable
         }
      });
      return newAdmin;
   } catch (error) {
      throw new Error('Error creating admin user: ' + error.message);
   }
};

createAdmin("Admin", "Admin@123")