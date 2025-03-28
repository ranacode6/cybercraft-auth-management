import puppeteer from 'puppeteer';
import pdfTemplate from '../documents/document.js';
import nodemailer from 'nodemailer';

export const createPdfAndSendEmail = async (req, res) => {
  const html = pdfTemplate(req.body); // Generate HTML from the template

  try {
    // Generate PDF
    const browser = await puppeteer.launch({
      headless: true, // Ensure headless mode is enabled
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // Add these arguments if needed
    });
    const page = await browser.newPage();
    await page.setContent(html);

    // Generate PDF as a buffer
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true
    });
    await browser.close();

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'gmail',
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.AUTHOR_EMAIL,
        pass: process.env.AUTHOR_EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.AUTHOR_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: 'Need Information',
      text: 'Check the attached PDF file',
      attachments: [
        {
          filename: 'mail.pdf',
          content: pdfBuffer, // Use the buffer directly
          contentType: 'application/pdf' // Set the content type
        }
      ]
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent:', info.response);
      return res.send('PDF generated and email sent successfully');
    });
  } catch (err) {
    cconsole.error('Error generating PDF:', err.stack);
    res.status(500).send('Error generating PDF');
  }
};
