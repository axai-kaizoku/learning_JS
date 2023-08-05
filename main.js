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

console.log(`Today is ${day}`)
