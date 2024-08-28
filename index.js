import express from 'express';

const app = express();
import dotenv from 'dotenv'
import connectMongoDB from './config/db-config.js';
import userRoutes from './routes/users-route.js';
import campaignRoutes from './routes/campaigns-route.js';
import cookieParser from 'cookie-parser';
import paymentsRoutes from './routes/payment-route.js';
import donationsRoutes from './routes/donations-route.js';
import reportsRoutes from './routes/reports-route.js';


dotenv.config();

connectMongoDB()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/donations', donationsRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/reports', reportsRoutes);
app.listen(port, ()=> {
    console.log('Node+Express Server Is Successful')
})