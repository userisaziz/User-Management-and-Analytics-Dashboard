import prisma from '../prisma/prismaClient.js';

export const uploadDocument = async (userId, documentData) => {
   const { title } = documentData;
   return await prisma.documentUpdate.create({
      data: {
         title,
         updatedById: userId,
         lastUpdated: new Date(),
         status: 'Pending',
      },
   });
};

export const modifyDocument = async (userId, documentId, documentData) => {
   return await prisma.documentUpdate.updateMany({
      where: {
         documentId: parseInt(documentId),
         updatedById: userId, // Ensure the updater can only modify their own documents
      },
      data: {
         ...documentData,
         lastUpdated: new Date(),
      },
   });
};

export const getAllDocuments = async () => {
   return await prisma.documentUpdate.findMany({
      orderBy: { lastUpdated: 'desc' },
      include: {
         updatedBy: { // Correct relation name
            select: {
               username: true,
               role: true,
            },
         },
      },
   });
};
export const fetchUpdaterDocs = async (id) => {
   return await prisma.documentUpdate.findMany({
      where: { updatedById: id }, // Use updatedById to filter by user
      orderBy: { lastUpdated: 'desc' },
      include: {
         updatedBy: { // Correct relation name
            select: {
               username: true,
               role: true,
            },
         },
      },
   });
};

export const getUpdateMetrics = async (userId) => {
   const documentsUploaded = await prisma.documentUpdate.count({
      where: { updatedById: userId },
   });

   const successRate = await prisma.documentUpdate.count({
      where: { updatedById: userId, status: 'Approved' },
   }) / documentsUploaded;

   return { documentsUploaded, successRate };
};

export const getPersonalActivityLogs = async (userId) => {
   return await prisma.activityLog.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
   });
};

export const updateDocumentStatus = async (documentId, status) => {
   return await prisma.documentUpdate.update({
      where: { documentId: documentId }, // Use documentId instead of id
      data: { status },
   });
};