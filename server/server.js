import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Route fayllarını import et
import contactRoutes from './routes/contact.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
}));

// Verilənlər bazasına qoşulma
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB-yə uğurla qoşuldu!');
    } catch (error) {
        console.error('MongoDB-yə qoşulma zamanı xəta:', error.message);
        process.exit(1);
    }
};

// Route-ları tətbiqə qoş
app.use('/api', contactRoutes);
app.use('/api/admin', adminRoutes);

// Statik faylları (sertifikat şəkilləri) göstərmək üçün
app.use('/uploads', express.static('uploads'));

connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server ${PORT} portunda işə düşdü.`);
    });
});