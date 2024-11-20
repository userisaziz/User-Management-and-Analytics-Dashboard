import prisma from '../prisma/prismaClient.js';

export const logActivity = async (userId, action, details) => {
   return await prisma.activityLog.create({
      data: {
         userId,
         action,
         timestamp: new Date(),
         details,
      },
   });
};


export const getAllActivityLogs = async () => {
   return await prisma.activityLog.findMany({
      orderBy: { timestamp: 'desc' },
      include: {
         user: {
            select: {
               username: true,
               role: true,
            },
         },
      },
   });
};