const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "your password",
  },
});

const mailOptions = {
  from: "youremail@gmail.com",
  to: "youremail@gmail.com",
  subject: "Test Email",
  text: "This is a test email from Node.js using nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
