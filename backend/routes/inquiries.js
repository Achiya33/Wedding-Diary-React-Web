import express from 'express';
import nodemailer from 'nodemailer';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

// Transporter will be created lazily to ensure env vars are loaded
let transporter = null;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || ''
      }
    });
  }
  return transporter;
};

// Helper function to send email notification
const sendNotificationEmail = async (inquiryData) => {
  if (!process.env.EMAIL_USER) {
    console.warn('EMAIL_USER is not set. Skipping email notification.');
    return;
  }
  
  const { page, ...formData } = inquiryData.data || {};
  let textContent = `New Inquiry received from page: ${inquiryData.page}\n\n`;
  for (const [key, value] of Object.entries(formData)) {
    textContent += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
  }

  const mailOptions = {
    from: `"Wedding Diary Inquiries" <${process.env.EMAIL_USER}>`,
    to: 'info.wdiary@gmail.com', // Sending to specific receiver
    subject: `New Wedding Diary Inquiry - ${inquiryData.page}`,
    text: textContent,
  };

  try {
    await getTransporter().sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
};


// POST /api/inquiries - Add a new inquiry
router.post('/', async (req, res) => {
  try {
    const { page, ...formData } = req.body;
    const newInquiry = new Inquiry({
      page: page || 'Unknown',
      data: formData,
      timestamp: new Date()
    });

    await newInquiry.save();
    
    // Send email asynchronously without blocking the response
    sendNotificationEmail(newInquiry);

    res.status(201).json({ success: true, submission: newInquiry });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/inquiries - List all inquiries
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ timestamp: -1 });
    res.json({ success: true, count: inquiries.length, submissions: inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PATCH /api/inquiries/:id/read - Mark single as read
router.patch('/:id/read', async (req, res) => {
  try {
    await Inquiry.findByIdAndUpdate(req.params.id, { read: true });
    res.json({ success: true });
  } catch (error) {
    console.error('Error marking as read:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PATCH /api/inquiries/read-all - Mark all as read
router.patch('/read-all', async (req, res) => {
  try {
    await Inquiry.updateMany({}, { read: true });
    res.json({ success: true });
  } catch (error) {
    console.error('Error marking all as read:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /api/inquiries/:id - Delete single inquiry
router.delete('/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /api/inquiries - Delete all inquiries
router.delete('/', async (req, res) => {
  try {
    await Inquiry.deleteMany({});
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting all inquiries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
