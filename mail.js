const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: 'sandbox4a54a98773d5448d9a398275c0a18a49.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailgun(auth))

const sendMail= (name, email, subject, text, cb) => {
    const mailOptions = {
        from: 'kriihall@gmail.com',
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

