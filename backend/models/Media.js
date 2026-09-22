import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileHash: { type: String, required: true, unique: true },
  fileSize: { type: Number, required: true },
  uploadDate: { type: Date, default: Date.now }
});

const Media = mongoose.model('Media', mediaSchema);

export default Media;
