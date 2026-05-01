import mongoose from 'mongoose';
import { config } from './config';

let connectPromise: Promise<typeof mongoose> | null = null;

export async function connectDB(): Promise<void> {
  if (mongoose.connection.readyState === 1) return;

  mongoose.set('strictQuery', true);

  if (!connectPromise) {
    connectPromise = mongoose.connect(config.mongoUri)
      .then((connection) => {
        console.log('[mongo] connected');
        return connection;
      })
      .catch((err) => {
        connectPromise = null;
        throw err;
      });
  }

  await connectPromise;
}
