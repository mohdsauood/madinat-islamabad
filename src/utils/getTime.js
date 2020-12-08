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
  const format = 'HH:mm';
  const bt = moment.tz(beforeTime, format, 'Asia/Dubai');
  const at = moment.tz(afterTime, format, 'Asia/Dubai');
  return moment.tz('Asia/Dubai').isBetween(bt, at);
}

/*
breakfast = 6 - 12
lunch = 12 - 6:30
dinner = 6:30 - 11 
*/
