import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || ''
  }
});

const sendNotificationEmail = async () => {
  const mailOptions = {
    from: `"Wedding Diary Inquiries" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Sending to yourself
    subject: `Test Email`,
    text: 'This is a test email.',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
};

sendNotificationEmail();
