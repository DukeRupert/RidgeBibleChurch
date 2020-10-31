const nodemailer = require('nodemailer');


exports.handler = function(event, context, callback) {
    
    let transporter =  nodemailer.createTransport({
        service: "Postmark",
        host: "smtp.postmarkapp.com",
        auth: {
            user: process.env.POSTMARK,
            pass: process.env.POSTMARK,
        }
    });
    console.log(event.body);

    
        transporter.sendMail({
            from: "firefly@loganwilliams.tech",
            to: "logan@firefly.llc",
            subject: "Test Email from Nodemailer",
            text: "Hello World!"
        }, function(error, info) {
            if (error) {
                callback(error);
            } else {
                callback(null, {
                    statusCode: 200,
                    body: "OK"
                });
            }
        });
}