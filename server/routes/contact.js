import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Mesajınız uğurla göndərildi!' });
    } catch (error) {
        res.status(500).json({ message: 'Mesaj göndərilərkən xəta baş verdii.' });
    }
});

export default router;