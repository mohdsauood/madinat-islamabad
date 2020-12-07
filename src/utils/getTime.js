import moment from 'moment';

export default function getTime(currentTime) {
  if (checkTime(currentTime, '06:00', '12:00')) {
    console.log('its breakfast');
    return 'breakfast';
  } else if (checkTime(currentTime, '12:00', '17:00')) {
    console.log('its lunch');
    return 'lunch';
  } else {
    console.log('its dinner');
    return 'dinner';
  }
}

function checkTime(currentTime, beforeTime, afterTime) {
  const format = 'HH:mm ';
  const bt = moment(beforeTime, format);
  const at = moment(afterTime, format);
  console.log('current time ' + currentTime.format('h mm a DD'));
  console.log('before time ' + bt.format('h mm a DD'));
  console.log('after time ' + at.format('h mm a DD'));
  return currentTime.isBetween(bt, at);
}

/*

breakfast = 6 - 12
lunch = 12 - 5
dinner = 5 - 11 

MILITARY TIME
bf = 6 - 12
l = 12 - 17
d = 17-23

*/
