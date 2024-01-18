const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Add this line

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the path to the 'public' directory
const publicPath = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// Set up a route to handle the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Parse form data
/*app.use(express.urlencoded({ extended: true }));

// Handle form submissions
app.post('/submit-form', (req, res) => {
  // Extract form data
  const formData = req.body;

  // Send email
  sendEmail(formData)
    .then(() => {
      res.redirect('/index.html');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    });
});*/

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Function to send email using nodemailer
/*function sendEmail(formData) {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ohmlotusphoenix@gmail.com',  // Replace with your Gmail email address
      pass: 'qppo avrp uulc kvdw'         // Replace with your Gmail password
    }
  });

  // Define the email content
  const mailOptions = {
    from: 'ohmlotusphoenix@gmail.com',
    to: 'jconner@ohmlotusphoenix.com',    // Replace with the recipient's email address
    subject: 'Consultation Form Submission',
    text: `
      Business Name: ${formData.username}
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Address: ${formData.address}, ${formData.address2 ? formData.address2 + ',' : ''} ${formData.state} ${formData.zip}
    `
  };

  // Return a promise for sending the email
  return transporter.sendMail(mailOptions);
}*/