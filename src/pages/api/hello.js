import moment from 'moment-timezone';

export default async function handler(req, res) {
  const format = 'HH:mm';
  const bt = moment.tz('5:00', format, 'Asia/Dubai');
  const at = moment.tz('6:00', format, 'Asia/Dubai');
  let x = moment.tz('15:00', format, 'Asia/Dubai').isBetween(bt, at);
  res.send(x);
}
