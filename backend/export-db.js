import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wedding-diary';

async function exportDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Database for export...');
    
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    
    const backupDir = path.join(__dirname, '..', 'db_backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }
    
    for (let c of collections) {
      const collectionName = c.name;
      const data = await db.collection(collectionName).find({}).toArray();
      const filePath = path.join(backupDir, `${collectionName}.json`);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`Exported ${data.length} documents from ${collectionName} collection`);
    }
    
    console.log(`\n✅ Database export completed successfully!`);
    console.log(`Files are saved in the 'db_backup' folder in the root directory.`);
    process.exit(0);
  } catch (error) {
    console.error('Export failed:', error);
    process.exit(1);
  }
}

exportDatabase();
