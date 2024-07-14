import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = await req.json()
    console.log(name, email, message)
    // Create a Nodemailer transporter
    console.log(process.env.EMAIL_PASS, process.env.EMAIL_USER, process.env.RECEIVER_EMAIL)
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
      },

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // Verify the connection configuration

transporter.verify(function(error, success) {
  if (error) {
      console.log('Error', error);
  } else {
      console.log('Server is ready to take our messages');
  }
});
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `Contact form submission from ${name}`,
      text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Success')
      return new NextResponse({status: 'Email sent successfully'}, {status: 200})
    } catch (error) {
      console.error('Error sending email:', error);
      return new NextResponse({status: 'Error Sending Email'}, {status: 500})
    }
  } else {
    res.setHeader('Allow', ['POST']);
    console.log('Failure')
    return new NextResponse({status: 'Error Sending Email'}, {status: 500})
  }
}
