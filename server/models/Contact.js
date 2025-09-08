// server/models/Message.js (adını Contact.js olaraq dəyişin)
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// Modeli 'Contact' adını veririk, bu da MongoDB-də 'contacts' kolleksiyası yaradır
const Contact = mongoose.model('Contact', ContactSchema); 

export default Contact;