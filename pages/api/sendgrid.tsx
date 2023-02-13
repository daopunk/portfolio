import sendgrid from '@sendgrid/mail';
require('dotenv').config();

sendgrid.setApiKey(
  process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : ''
);

async function sendEmail(req: any, res: any) {
  try {
    console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: process.env.EMAIL, // email to receive emails
      from: process.env.WEBMAIL ? process.env.WEBMAIL : '', // website email
      subject: `${req.body.subject}`,
      html: `
			<div>
				<p>From: ${req.body.name} at ${req.body.email}</p>
				<p>Message: ${req.body.message}</p>
			</div>
			`,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
