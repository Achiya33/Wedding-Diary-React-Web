import mongoose from 'mongoose';
import Inquiry from './models/Inquiry.js';

const newInquiry = new Inquiry({
  page: 'Contact Us',
  data: { name: 'John Doe', email: 'john@example.com', message: 'Hello' },
  timestamp: new Date()
});

console.log(newInquiry.data);

const { page, ...formData } = newInquiry.data || {};
console.log('formData:', formData);
console.log('entries:', Object.entries(formData));
