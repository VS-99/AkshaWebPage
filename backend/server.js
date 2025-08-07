const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/contact", async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Contact from ${name}`,
    text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
      
        Message:
        ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
