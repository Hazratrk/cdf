import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import contactRoutes from './routes/contact.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
}));


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB-yə uğurla qoşuldu!');
    } catch (error) {
        console.error('❌ MongoDB-yə qoşulma zamanı xəta:', error.message);
        process.exit(1);
    }
};


app.use('/api', contactRoutes);
app.use('/api/admin', adminRoutes);


app.use('/uploads', express.static('uploads'));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server ${PORT} portunda işə düşdü.`);
    });
});