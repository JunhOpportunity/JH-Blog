import nodemailer from "nodemailer";

type Props = {
  props: {
    from: string;
    subject: string;
    text: string;
  }
}

// async..await is not allowed in global scope, must use a wrapper
async function sendMail({ props }: Props) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: props.from, // sender address
    to: 'twinjyjh5@gmail.com', // list of receivers
    subject: props.subject, // Subject line
    text: props.text, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
}