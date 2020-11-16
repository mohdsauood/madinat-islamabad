export default async function mailToCustomer(data) {
  const { name, email, orders, mobile } = data;
  const order = orders[orders.length - 1];
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const {
    area,
    street = '',
    doorNo,
    city,
    landmark = '',
    geoCode,
  } = order.address;
  const dynamicData = {};
  dynamicData.name = name;
  dynamicData.orderNo = order._id;
  dynamicData.items = order.items;
  dynamicData.total = order.bill.total;
  dynamicData.deliveryFee = order.bill.deliveryFee;
  dynamicData.toPay = order.bill.toPay;
  dynamicData.address = order.address;
  const msg = {
    from: 'orders@madinatislamabad.com',
    templateId: 'd-851549337da54fbfa2e800f88170e7f9',
    personalizations: [
      {
        to: email,
        dynamicTemplateData: {
          name: name,
          orderNo: order._id,
          items: order.items,
          total: order.bill.total,
          deliveryFee: order.bill.deliveryFee,
          toPay: order.bill.toPay,
          address: `${doorNo} ,${area}, ${street} ${landmark} , ${city} `,
        },
      },
    ],
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent to customer');
    })
    .catch((error) => {
      console.error(error);
    });
}
