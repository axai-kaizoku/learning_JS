'use strict';

let today = new Date().getDay(); // 11; 

// console.log(today);

let day = 
  today === 0
  ? 'Sunday'
  : today === 1
  ? 'Monday'
  : today === 2
  ? 'Tuesday'
  : today === 3
  ? 'Wednesday'
  : today === 4
  ? 'Thursday'
  : today === 5
  ? 'Friday'
  : today === 6
  ? 'Saturday'
  : 'not exactly a real day...';

// console.log(`Today is ${day}`)

// Actually this is the main part of the excercise

// We have to manually give the input for 'DAY'.
// But now it's not required.

let DAY = day;

const typeOfDay = 
  DAY === 'Saturday' || DAY === 'Sunday'
  ? 'Weekend'
  : DAY === 'Wednesday'
  ? 'Hump Day'
  : 'Weekday';

console.log(typeOfDay)