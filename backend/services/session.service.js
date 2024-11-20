import prisma from '../prisma/prismaClient.js';

// Create a new session and activity log for a user
export const createSessionAndLog = async (userId, ipAddress) => {
   const session = await prisma.session.create({
      data: {
         userId,
         duration: 0, // Set initial duration, update later as needed
      },
   });

   const activityLog = await prisma.activityLog.create({
      data: {
         userId,
         action: 'Login',
         timestamp: new Date(),
         details: `User logged in from IP: ${ipAddress}`,
      },
   });

   return { session, activityLog };
};
export const getUserWithSessionsAndLogs = async (userId) => {
   return await prisma.user.findUnique({
      where: { userId },
      include: {
         sessions: true, // Include all sessions for the user
         activityLogs: true, // Include all activity logs for the user
      },
   });
};