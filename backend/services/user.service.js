import prisma from '../prisma/prismaClient.js';

export const getAllUsers = async () => {
   return await prisma.user.findMany({
      select: {
         userId: true,
         username: true,
         role: true,
         lastLogin: true,
         status: true
      },
   });
};

export const createUser = async (userData) => {
   console.log('userData: ', userData);
   return await prisma.user.create({ data: userData });
};

export const updateUser = async (id, updateData) => {
   return await prisma.user.update({
      where: { userId: parseInt(id) },
      data: updateData
   });
};

export const deleteUser = async (id) => {
   return await prisma.user.delete({ where: { userId: parseInt(id) } });
};

export const findUserById = async (id) => {
   return await prisma.user.findUnique({ where: { userId: parseInt(id) } });
};
export const findUserByUsername = async (username) => {
   return await prisma.user.findUnique({ where: { username: username } });
};