import * as nodemailer from 'nodemailer';
export const Mail = async (
  email: any,
  subject: any,
  text: any
): Promise<unknown> => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'c6d695b3f1d508', // generated ethereal user
        pass: '816ed91f9e4e83' // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    // setup email data with unicode symbols
    const mailOptions = {
      from: '"PSL" <psl@gmail.com>',
      to: email,
      subject: subject,
      text: text
    };
    // send mail with defined transport object
    const myPromise = new Promise((resolve) => {
      transporter.sendMail(mailOptions, (error: any) => {
        if (error) {
            return error;
        }
        resolve(200);
      });
    });
    return myPromise;
  } catch (error) {
    return error;
  }
};