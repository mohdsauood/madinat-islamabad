import nodemailer from 'nodemailer';

export default async function mailToRestaurant(data) {
  const { name, email, orders, mobile } = data;
  const order = orders[orders.length - 1];

  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: '"madinat islamabad 👻" <orders@madinat.com>', // sender address
    to: 'swampfire.saud@gmail.com', // list of receivers
    subject: `Order no : ${order._id}`, // Subject line
    text: `order at ${order.orderedAt} UTC `, // plain text body
    html: `<b>order at ${order.orderedAt} UTC</b>`, // html body
  });
  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
