const postmark = require('postmark');

const sendThankYouEmail = async (payload) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email');
    const client = new postmark.ServerClient(process.env.POSTMARK);

    let date = new Date();

    // build template model object
    const model = {
      ...payload.human_fields,
      "sitename" : payload.site_url,
      "company_name" : "Firefly Software Engineering",
      "Date" : date
    };
    
    // build email params object
    const mailData = {
      "From": process.env.FROM_ADDRESS,
      "TemplateAlias" : "kcc-contact",
      "TemplateModel" : model,
      "To": process.env.TO_ADDRESS,
    };
    console.log(JSON.stringify(mailData));

    // send email
    client.sendEmailWithTemplate(mailData, err => {
      if (err) return reject(err);

      resolve();
    });
  });
};

exports.handler = async event => {
  try {
    // Grab form data from netlify
    const data = JSON.parse(event.body).payload;
    
    // Build and send email
    await sendThankYouEmail(data)

    // Return statusCode, required by Netlify functions
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully"
      })
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message
    };
  }
};
        
        