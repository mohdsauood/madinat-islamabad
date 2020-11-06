export default async function mailToRestaurantv2(data) {
  const { name, email, orders, mobile } = data;
  const order = orders[orders.length - 1];
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const dynamicData = {};
  dynamicData.name = name;
  dynamicData.orderNo = order._id;
  dynamicData.items = order.items;
  dynamicData.total = order.bill.total;
  dynamicData.deliveryFee = order.bill.deliveryFee;
  dynamicData.toPay = order.bill.toPay;
  dynamicData.address = order.address;
  const msg = {
    to: email,
    from: 'orders@madinatislamabad.com',

    template_id: ' d-851549337da54fbfa2e800f88170e7f9',
    dynamic_template_data: dynamicData,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}
