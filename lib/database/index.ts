import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    // Log the current connection state
    console.log('Checking cached connection...');

    if (cached.conn) {
        console.log('Using cached database connection');
        return cached.conn;
    }

    if (!MONGODB_URI) {
        console.error('MONGODB_URI is missing');
        throw new Error('MONGODB_URI is missing');
    }

    // Log connection attempt
    console.log('Connecting to the database...');

    try {
        cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
            dbName: 'algoevent',
            bufferCommands: false,
        });

        cached.conn = await cached.promise;

        console.log('Database connection established successfully');
        return cached.conn;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;  // Re-throw the error after logging it
    }
}
