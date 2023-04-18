let nodemailer = require('nodemailer');
require('dotenv').config();

export default function handler(req, res) {
   const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
         user: process.env.G_MAIL,
         pass: process.env.G_SECRET,
      },
      secure: true,
   })

   const body = `
                  <p><strong>From:</strong> ${req.body.name}</p>
                  <p><strong>Email:</strong> ${req.body.email}</p>
                  <p style="margin-top: 10px;">${req.body.message}</p>
               `

   const mailData = {
      from: process.env.G_MAIL,
      to: 'joshdurrett17@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: `${req.body.message} || Sent From: ${req.body.email}`,
      html: body
   }

   transporter.sendMail(mailData, function (err, info) {
      if (err) {
         console.log(err)
         return res.status(405).send('Failed to send')
      }
      else
         console.log('message sent')
   })


   return res.status(200).send('Message Sent')
}
