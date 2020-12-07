// import moment from 'moment';
import moment from 'moment-timezone';

export default function getTime() {
  if (checkTime('06:00', '11:59')) {
    console.log('its breakfast time');
    return 'breakfast';
  } else if (checkTime('12:00', '18:30')) {
    console.log('its lunch time');
    return 'lunch';
  } else {
    console.log('its dinner time');
    return 'dinner';
  }
}

function checkTime(beforeTime, afterTime) {
  const format = 'HH:mm ';
  const bt = moment(beforeTime, format);
  const at = moment(afterTime, format);
  // console.log('before time ' + bt.format('h mm a DD'));
  // console.log('after time ' + at.format('h mm a DD'));
  // console.log('printing server time ' + moment().format('h mm a DD'));

  /*server time is 4 hours behind dubai time */
  if (process.env.SITE_URL == 'http://localhost:3000/') {
    return moment.tz('Asia/Dubai').isBetween(bt, at);
  }
  return moment.tz('Asia/Dubai').add(4, 'hours').isBetween(bt, at);
}

/*
breakfast = 6 - 12
lunch = 12 - 6:30
dinner = 6:30 - 11 
*/
