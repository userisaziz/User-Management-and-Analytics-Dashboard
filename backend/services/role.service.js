import prisma from "../prisma/prismaClient.js";



export const getAllRoles = async () => {
   return await prisma.role.findMany();
};

export const createRole = async (roleData) => {
   return await prisma.role.create({ data: roleData });
};

export const updateRole = async (id, roleData) => {
   return await prisma.role.update({
      where: { id: parseInt(id) },
      data: roleData,
   });
};

export const deleteRole = async (id) => {
   return await prisma.role.delete({
      where: { id: parseInt(id) },
   });
};