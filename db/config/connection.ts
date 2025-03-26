import mongoose from 'mongoose';
import { config } from './config';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(config.mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error?.message || 'Unknown error occurred'}`);
    process.exit(1);
  }
};

export default connectDB;
