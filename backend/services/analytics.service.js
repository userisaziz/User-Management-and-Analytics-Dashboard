import prisma from '../prisma/prismaClient.js';
import PDFDocument from 'pdfkit';
import fs from 'fs';

export const fetchViewerAnalyticsData = async () => {
   const generalAnalytics = await prisma.analytics.findMany({
      select: {
         metric: true,
         value: true,
      },
   });

   const reports = await prisma.report.findMany({
      select: {
         reportId: true,
         category: true,
         date: true,
      },
   });

   return { generalAnalytics, reports };
};

export const fetchAdminAnalyticsData = async () => {
   // Total users count
   const totalUsers = await prisma.user.count();

   // Total monthly logins
   const monthlyLogins = await prisma.session.count({
      where: {
         AND: [
            { user: { role: 'Admin' } },
            { user: { lastLogin: { gte: new Date(new Date().setDate(1)) } } }
         ]
      }
   });

   // New documents added this month
   const newDocuments = await prisma.documentUpdate.count({
      where: {
         lastUpdated: {
            gte: new Date(new Date().setDate(1))
         }
      }
   });

   // Pending approvals
   const pendingApprovals = await prisma.documentUpdate.count({
      where: { status: 'Pending' }
   });

   // User role distribution for pie chart
   const userRoles = await prisma.user.groupBy({
      by: ['role'],
      _count: { role: true }
   });

   // Last 5 activity logs
   const lastFiveActivityLogs = await prisma.activityLog.findMany({
      orderBy: { timestamp: 'desc' },
      take: 5,
      select: {
         user: { // Include the related user data
            select: {
               username: true, // Select the username field
            },
         },
         userId: true,
         action: true,
         timestamp: true,

      }
   });

   // System activity over time (for line chart)
   const systemActivity = await prisma.activityLog.groupBy({
      by: ['timestamp'],
      _count: { timestamp: true },
      where: {
         timestamp: {
            gte: new Date(new Date().setDate(new Date().getDate() - 30)) // Last 30 days
         }
      },
      orderBy: { timestamp: 'asc' }
   });

   // Document status breakdown (for pie chart)
   const documentStatus = await prisma.documentUpdate.groupBy({
      by: ['status'],
      _count: { status: true }
   });

   return {
      totalUsers,
      monthlyLogins,
      newDocuments,
      pendingApprovals,
      userRoles,
      lastFiveActivityLogs,
      systemActivity,
      documentStatus
   };
};

export const fetchUpdaterAnalyticsData = async (userId) => {
   // Fetch data for updater analytics
   const documentsUploaded = await prisma.documentUpdate.count({
      where: { updatedById: userId },
   });

   const pendingReviews = await prisma.documentUpdate.count({
      where: { updatedById: userId, status: 'Pending' },
   });

   const successRate = await prisma.documentUpdate.count({
      where: { updatedById: userId, status: 'Approved' },
   }) / documentsUploaded;

   const uploadTrends = await prisma.documentUpdate.groupBy({
      by: ['lastUpdated'],
      _count: { lastUpdated: true },
      where: { updatedById: userId },
   });

   return { documentsUploaded, pendingReviews, successRate, uploadTrends };
};

export const generateReport = async (reportId) => {
   // Fetch the report data from the database
   const reportData = await prisma.report.findUnique({
      where: { reportId: parseInt(reportId) },
      include: {
         user: true,
         documentUpdates: true,
      },
   });

   if (!reportData) {
      throw new Error('Report not found');
   }

   // Create a new PDF document
   const doc = new PDFDocument();
   const filePath = `./reports/report-${reportId}.pdf`;
   doc.pipe(fs.createWriteStream(filePath));

   // Add content to the PDF
   doc.fontSize(25).text(`Report ID: ${reportData.reportId}`, { align: 'center' });
   doc.moveDown();
   doc.fontSize(18).text(`Category: ${reportData.category}`);
   doc.text(`Date: ${reportData.date.toDateString()}`);
   doc.moveDown();

   // Add user information
   doc.fontSize(16).text(`User: ${reportData.user.username}`);
   doc.text(`Role: ${reportData.user.role}`);
   doc.moveDown();

   // Add document updates information
   doc.fontSize(14).text('Document Updates:');
   reportData.documentUpdates.forEach((update) => {
      doc.text(`- ${update.title} (Status: ${update.status})`);
   });

   // Finalize the PDF and end the stream
   doc.end();

   // Return the file path for download
   return filePath;
};