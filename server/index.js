const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configure your email transport here
// Using Gmail as example - replace with your actual email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'amohelang.mokhele@email.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

app.post('/api/contact', async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER || 'amohelang.mokhele@email.com'}>`,
    to: 'amohelang.mokhele@email.com',
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #895159; border-bottom: 2px solid #895159; padding-bottom: 10px;">New Portfolio Message</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #333;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #895159;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
            <td style="padding: 8px 0; color: #333;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px;">
          <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #895159; color: #333; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">Sent from your portfolio contact form</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
