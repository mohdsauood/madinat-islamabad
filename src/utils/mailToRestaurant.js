import moment from 'moment-timezone';

export default async function mailToRestaurant(data) {
  const { name, email, orders, mobile } = data;
  const order = orders[orders.length - 1];
  const format = 'Do MMMM YYYY, h:mm a';
  const timeZone = 'Asia/Dubai';
  const date = moment.tz(order.orderedAt, timeZone).format(format);
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { area, street, doorNo, city, landmark, geoCode } = address;
  const msg = {
    from: 'orders@madinatislamabad.com',
    templateId: 'd-2d44c235e0364ed882af39f03e3fdb40',
    personalizations: [
      {
        to: 'madinatislamabadorders@gmail.com',
        dynamicTemplateData: {
          name: name,
          orderNo: order._id,
          items: order.items,
          total: order.bill.total,
          deliveryFee: order.bill.deliveryFee,
          toPay: order.bill.toPay,
          address: `${doorNo} ,${area}, ${street} ${landmark} , ${city} `,
          mobile: mobile,
          request: order.bill.request,
          date: date,
          geoCode: geoCode,
        },
      },
    ],
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent to restaurant');
    })
    .catch((error) => {
      console.error(error);
    });
}
