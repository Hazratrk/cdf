// server/models/Certificate.js

import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    }
});








const Certificate = mongoose.model('Certificate', CertificateSchema);

export default Certificate;