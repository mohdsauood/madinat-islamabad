import moment from 'moment';

export default function getTime() {
  if (checkTime('06:00', '12:00')) {
    return 'breakfast';
  } else if (checkTime('12:00', '17:00')) {
    return 'lunch';
  } else {
    return 'dinner';
  }
}

function checkTime(beforeTime, afterTime) {
  const format = 'HH:mm ';
  const currentTime = moment();
  const bt = moment(beforeTime, format);
  const at = moment(afterTime, format);
  console.log(currentTime);
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
