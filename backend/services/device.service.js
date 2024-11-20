import prisma from "../prisma/prismaClient.js";



export const getDevicesByUserId = async (userId) => {
   return await prisma.device.findMany({
      where: { userId: parseInt(userId) },
   });
};

export const deleteDevice = async (deviceId, userId) => {
   return await prisma.device.deleteMany({
      where: {
         id: parseInt(deviceId),
         userId: parseInt(userId),
      },
   });
};