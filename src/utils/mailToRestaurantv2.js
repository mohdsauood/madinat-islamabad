export default async function mailToRestaurantv2(data) {
  const { name, email, orders, mobile } = data;
  const order = orders[orders.length - 1];
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'recieveorders@madinatislamabad.com',
    from: 'orders@madinatislamabad.com',
    subject: `Order no : ${order._id}`,
    text: `order at ${order.orderedAt} UTC `,
    html: `<b>order at ${order.orderedAt} UTC</b>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent v2');
    })
    .catch((error) => {
      console.error(error);
    });
}
