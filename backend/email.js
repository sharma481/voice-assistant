const nodemailer = require("nodemailer");

async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",  // 🔴 यहां अपना Gmail डालो
      pass: "your_app_password"      // 🔴 यहां Gmail App Password डालो
    }
  });

  await transporter.sendMail({
    from: '"Voice Assistant" <your_email@gmail.com>',
    to,
    subject,
    text
  });
}

module.exports = { sendEmail };
