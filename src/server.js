const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "beaufork@gmail.com",
      pass: "829606Cute",
    },
  });

  const mailOptions = {
    from: "beaufork@gmail.com",
    to: "beaufork@gmail.com",
    subject: "New message from portfolio",
    text: `Email: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending message");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Message sent successfully!");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});