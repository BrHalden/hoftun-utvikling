const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '51019267e560c8b2844579c29449d6f1-7fba8a4e-05ef63d6',
        domain: 'sandbox8afa358fc5bc44ca8944f4c5dcfe7247.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailgun(auth))

const sendMail= (name, email, subject, text, cb) => {
    const mailOptions = {
        from: 'halden.kristoffer@gmail.com',
        to: 'kriihall@gmail.com',
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

