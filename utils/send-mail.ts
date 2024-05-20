const nodemailer = require("nodemailer");

export async function sendMail(
  firstName: string,
  lastName: string,
  email: string,
  message: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Precision Point Website",
      address: process.env.SENDER,
    }, // sender address
    to: "shlema.dev@gmail.com", // list of receivers
    subject: `Contact from ${firstName} ${lastName}`,
    text: message,
    html: `<h1>${firstName} ${lastName}</h1>
    <p>Email: ${email}</p>
    <p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(message);
  }
}
