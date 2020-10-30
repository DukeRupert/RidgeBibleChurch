const nodemailer = require('nodemailer');


exports.handler = async (event, context) => {
    
    let transporter =  nodemailer.createTransport({
        service: "Postmark",
        host: "smtp.postmarkapp.com",
        auth: {
            user: process.env.POSTMARK,
            pass: process.env.POSTMARK,
        }
    })

    try {
        transporter.sendMail({
            from: "firefly@loganwilliams.tech",
            to: "logan@firefly.llc",
            subject: "Test Email from Nodemailer",
            text: "Hello World!"
        });
        return {
            statusCode: 200,
        }
    } catch (err) {
        return { statusCode: 500, body:err.toString() }
    }
}