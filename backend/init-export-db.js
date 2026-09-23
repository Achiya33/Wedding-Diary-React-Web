import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGODB_URI = 'mongodb://127.0.0.1:27017/wedding-diary';

async function initAndExport() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected successfully!');
    
    const db = mongoose.connection.db;
    
    // Create collections with dummy data if they don't exist
    const inquiriesCollection = db.collection('inquiries');
    const mediaCollection = db.collection('media');

    // Check if they are empty
    const inqCount = await inquiriesCollection.countDocuments();
    if (inqCount === 0) {
      console.log('Inserting sample inquiry...');
      await inquiriesCollection.insertOne({
        name: "Sample User",
        email: "sample@example.com",
        message: "This is a sample inquiry.",
        date: new Date()
      });
    }

    const mediaCount = await mediaCollection.countDocuments();
    if (mediaCount === 0) {
      console.log('Inserting sample media...');
      await mediaCollection.insertOne({
        title: "Sample Wedding Photo",
        url: "/sample.jpg",
        uploadedAt: new Date()
      });
    }

    // Export collections
    const collections = await db.listCollections().toArray();
    const backupDir = path.join(__dirname, '..', 'db_backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }
    
    console.log('\nStarting Export...');
    for (let c of collections) {
      const collectionName = c.name;
      const data = await db.collection(collectionName).find({}).toArray();
      const filePath = path.join(backupDir, `${collectionName}.json`);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`✅ Exported ${data.length} documents from '${collectionName}' collection`);
    }
    
    console.log(`\n🎉 Database export completed successfully!`);
    console.log(`The exported JSON files are in the 'db_backup' folder.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

initAndExport();
