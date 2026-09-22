import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  page: { type: String, default: 'Unknown' },
  data: { type: mongoose.Schema.Types.Mixed, default: {} },
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});

// Create a virtual 'id' property that matches the _id so frontend can use it seamlessly
inquirySchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialized.
inquirySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {   delete ret._id  }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);
export default Inquiry;
