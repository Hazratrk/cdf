// server/routes/admin.js

import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import multer from 'multer'; // Fayl yükləmə üçün
import path from 'path';
import fs from 'fs';
import Contact from '../models/Contact.js'; 
import Certificate from '../models/Certificate.js'; // Yeni modeli import edin

dotenv.config();

const router = express.Router();

// Sertifikatları saxlamaq üçün qovluq yaratmaq
const UPLOADS_FOLDER = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

// Multer üçün yaddaş mühitini təyin edin
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Şəkillər bu qovluğa yüklənəcək
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

const ADMIN_PASSWORD = process.env.SERVER_PASSWORD; 
const JWT_SECRET = process.env.JWT_SECRET || 'your_very_secure_secret_key'; 

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); 

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user;
        next();
    });
};

// --- Login Yolu ---
router.post('/login', (req, res) => {
    const { password } = req.body;

    if (password === ADMIN_PASSWORD) {
        const token = jwt.sign({ isAdmin: true }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, token, message: 'Giriş uğurludur!' });
    } else {
        res.status(401).json({ success: false, message: 'Yanlış parol.' });
    }
});

// --- Mesajlar Üçün API Marşrutları ---

// Mesajları gətirmək üçün yol
router.get('/messages', authenticateToken, async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Mesajlar gətirilərkən xəta baş verdi.' });
    }
});

// Mesajı silmək üçün yol
router.delete('/messages/:id', authenticateToken, async (req, res) => {
    try {
        const result = await Contact.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Mesaj tapılmadı.' });
        }
        res.status(200).json({ message: 'Mesaj uğurla silindi.' });
    } catch (error) {
        res.status(500).json({ message: 'Mesaj silinərkən xəta baş verdi.' });
    }
});

// --- Sertifikatlar üçün API Marşrutları ---

// Yeni sertifikat yükləmək
router.post('/certificates', authenticateToken, upload.single('certificateImage'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Şəkil daxil edilməyib.' });
    }
    const { title } = req.body;
    try {
        const newCertificate = new Certificate({
            title,
            imageUrl: `http://localhost:8000/uploads/${req.file.filename}`,
        });
        await newCertificate.save();
        res.status(201).json(newCertificate);
    } catch (error) {
        res.status(500).json({ message: 'Sertifikat yüklənərkən xəta baş verdi.' });
    }
});

// Bütün sertifikatları gətirmək
router.get('/certificates', async (req, res) => {
    try {
        const certificates = await Certificate.find().sort({ uploadDate: -1 });
        res.status(200).json(certificates);
    } catch (error) {
        res.status(500).json({ message: 'Sertifikatlar gətirilərkən xəta baş verdi.' });
    }
});

// Sertifikatı silmək
router.delete('/certificates/:id', authenticateToken, async (req, res) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        if (!certificate) {
            return res.status(404).json({ message: 'Sertifikat tapılmadı.' });
        }
        const filename = path.basename(certificate.imageUrl);
        const filePath = path.join(UPLOADS_FOLDER, filename);
        fs.unlink(filePath, (err) => {
            if (err) console.error('Fayl silinərkən xəta:', err);
        });

        await Certificate.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Sertifikat uğurla silindi.' });
    } catch (error) {
        res.status(500).json({ message: 'Sertifikat silinərkən xəta baş verdi.' });
    }
});

export default router;