const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: 'sandbox049f5aa6047d4ef4af6c76899e069a4e.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailgun(auth))

const sendMail= (name, email, subject, text, cb) => {
    const mailOptions = {
        from: 'halden.kristoffer@gmail.com',
        to: 'kris-b.h@hotmail.com',
        subject: `${subject}  |  Fra: ${name} ${email}`,
        text
    }

    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}
module.exports = sendMail;

