import * as handlebars from 'handlebars';
import {AdminTemplate}from '@/components/containers/template/AdminTemplate'
const nodemailer = require('nodemailer');

// import AgentTemplate from '@/lib/sendEmail';
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS,
  },
});

// export async function sendEmail({to,from,subject}:any) {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: from, // sender address
//     to: to, // list of receivers
//     subject: subject, // Subject line
   
//   });

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
// }






export async function sendEmail({ to, from, subject,htmlTemplat }: any) {
    try {
      const info = await transporter.sendMail({
        to: to, // list of receivers
        from: `"${from}" <${from}>`, // sender address
        subject: subject, // Subject line
        html: htmlTemplat // Consider passing the HTML body here as well.
      });
      console.log("Tempalte===============>",htmlTemplat)
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
  

  export async function EmailAdmin(
    Name: string,
    email: string,
    message: string
  ) {
    try {
      // Compile the Handlebars template
      const template = handlebars.compile(AdminTemplate);
  
      // Populate the template with dynamic data
      const htmlBody = template({
        Name,
        email,
        message,
      });
      console.log("Generated HTML Template:============================================>", htmlBody); 
      return htmlBody; // Return the HTML body
    } catch (error) {
      console.error('Error generating email template:', error);
      throw error;
    }
  }