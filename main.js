'use script';

const getDay = function () {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date().getDay();
  return days[today];
};

console.log(`Today is ${getDay()}`);