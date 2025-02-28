import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Using Gmail service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  // This should be your app-specific password
      }
    });

    // Format the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Project Inquiry from ${body.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Project Type:</strong> ${body.projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return createError({
      statusCode: 500,
      message: 'Failed to send email'
    });
  }
}); 