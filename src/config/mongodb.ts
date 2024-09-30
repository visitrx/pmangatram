'use server'
import mongoose from 'mongoose';

let dbConnection: mongoose.Connection | undefined;

const connectDB = async () => {
    if (dbConnection) {
        return dbConnection;
    }
    console.log('Connecting to MongoDB...');

    if (!process.env.MONGODB_URI) {
        console.error('MongoDB URI is not provided!');
        return;
    }
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        // console.log(`MongoDB Connected: ${conn.connection.host}`);
        dbConnection = conn.connection;
        return dbConnection;
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

export default connectDB;