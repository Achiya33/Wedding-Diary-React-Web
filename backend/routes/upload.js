import express from 'express';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import Media from '../models/Media.js';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, '..', 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const router = express.Router();
// Use memory storage first to hash the file before writing it
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/upload - Upload single image
router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  try {
    // 1. Calculate MD5 hash of the file to check for duplicates
    const hashSum = crypto.createHash('md5');
    hashSum.update(req.file.buffer);
    const hex = hashSum.digest('hex');

    // 2. Check if file exists in DB
    const existingMedia = await Media.findOne({ fileHash: hex });
    if (existingMedia) {
      console.log('Duplicate file upload prevented. Returning existing URL.');
      return res.json({ 
        secure_url: existingMedia.fileUrl, 
        file: { filename: existingMedia.fileName },
        message: 'Existing file returned'
      });
    }

    // 3. Generate unique filename for the new file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(req.file.originalname);
    const filename = uniqueSuffix + ext;
    const filePath = path.join(uploadsDir, filename);

    // 4. Save file to disk
    await fs.promises.writeFile(filePath, req.file.buffer);

    // 5. Create URL for frontend
    const host = req.get('host');
    const protocol = req.protocol;
    const imageUrl = `${protocol}://${host}/uploads/${filename}`;

    // 6. Save metadata to DB
    const media = new Media({
      fileName: filename,
      fileUrl: imageUrl,
      fileHash: hex,
      fileSize: req.file.size
    });
    await media.save();

    res.json({ secure_url: imageUrl, file: { filename }, message: 'New file uploaded' });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }
});

// Since GridFS is no longer used for new uploads, we can keep the old route just in case
// any old DB records are trying to fetch images. But if mongoose GridFSBucket isn't needed,
// we could remove it. I'll remove it for a clean local-storage implementation.

export default router;
