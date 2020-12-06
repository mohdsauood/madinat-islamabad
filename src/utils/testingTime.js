const moment = require('moment-timezone');
const plainMoment = require('moment');
function getTime(currentTime) {
  if (checkTime(currentTime, '06:00', '12:00')) {
    console.log('its breakfast time');
  } else if (checkTime(currentTime, '12:00', '17:00')) {
    console.log('its lunch time');
  } else {
    console.log('its dinner time');
  }
}

function checkTime(currentTime, beforeTime, afterTime) {
  const format = 'HH:mm ';
  const bt = moment(beforeTime, format);
  const at = moment(afterTime, format);
  return currentTime.isBetween(bt, at);
}

// const time = moment().tz('Asia/Dubai').format('HH:mm ');
const breakfastStart = moment('06:00', ' HH:mm');
const breakfastEnd = moment('12:00', ' HH:mm');

// const lunchStart = moment('05-12-2020 12:00', 'DD-MM-YYYY HH:mm');
// const lunchEnd = moment('05-12-2020 17:00', 'DD-MM-YYYY HH:mm');

// console.log(
//   `breakfast time : ${breakfastStart} - ${breakfastEnd} \n lunch time : ${lunchStart} - ${lunchEnd}`
// );

const sevenAm = moment(' 14:02', ' HH:mm');

// console.log(moment().tz('Asia/Dubai').format('HH:mm '));

// console.log(moment().format('HH:mm'));

// console.log(sevenAm);
console.log(sevenAm.isBetween(breakfastStart, breakfastEnd));

// console.log(getTime(sevenAm));
