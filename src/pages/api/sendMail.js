import nodemailer from 'nodemailer';

export default async function handler(req, res) {
   console.log('API /sendMail called with method:', req.method);
  if (req.method !== 'POST') {
      console.log('Wrong method');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, mobile, message } = req.body;
   console.log('Received data:', req.body);

  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


  const mailOptions = {
  from: `"Livinterio Contact Form" <${process.env.SMTP_USER}>`, // sender
  to: process.env.TO_EMAIL,
  subject: `New Message from ${name} via Livinterio Contact Form`,
    text: `
      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Message: ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}
