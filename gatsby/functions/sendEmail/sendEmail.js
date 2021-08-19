const nodemailer = require('nodemailer');

function generateEmail({title, body}) {
  return `<div>
    <h2>${title}</h2>
    <p>${body}</p>
  </div>`;
}

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// eslint-disable-next-line no-unused-vars
function wait(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  // Check if they have filled out the honeypot
  if (body.buzzyFuzzyFriend) {
    return {
      statusCode: 400,
      body: JSON.stringify(
          {message: `Got'em.`},
      ),
    };
  }

  // Validate the data coming in is correct
  const requiredFields = ['email', 'subject'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  // send the email
  // eslint-disable-next-line no-unused-vars
  const info = await transporter.sendMail({
    from: 'Jason Reid <jasonreidd@gmail.com>',
    to: `${body.name} <${body.email}>, ${body.senderEmail}`,
    subject: `${body.subject}`,
    html: generateEmail({title: body.title, body: body.body}),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Success'}),
  };
};
