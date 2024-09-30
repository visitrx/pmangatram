// 'use server'
import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    }
}, { timestamps: true });


const RegisterSchema = mongoose.models.gifts || mongoose.model('gifts', registerSchema);

export default RegisterSchema;