import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wedding-diary';

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected');
    const db = mongoose.connection.db;
    const bucket = new mongoose.mongo.GridFSBucket(db, { bucketName: 'photos' });
    const uploadStream = bucket.openUploadStream('test.txt', { contentType: 'text/plain' });
    uploadStream.end(Buffer.from('hello world'));
    uploadStream.on('finish', () => {
      console.log('Upload finished');
      process.exit(0);
    });
    uploadStream.on('error', (err) => {
      console.error('Error:', err);
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error('Connection error:', err);
    process.exit(1);
  });
