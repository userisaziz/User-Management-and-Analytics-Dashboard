import express from "express";
import cors from "cors";
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import roleRoutes from './routes/role.routes.js';
import deviceRoutes from './routes/device.routes.js';
import documentRoutes from './routes/document.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import activityLogRoutes from './routes/activityLog.routes.js';
import { swaggerUi, swaggerDocs } from './utils/swagger.js';

const app = express();

app.use(express.json());
app.use(cors());

// Swagger documentation route
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/analytics', analyticsRoutes)

app.get("/", (req, res) => {
   res.send("Hello World!");
});

export default app;