'use strict';



let currentHour = new Date().getHours();
// console.log(currentHour)

if (currentHour >= 0 && currentHour < 12) {
  console.log('Good Morning!');
} else if (currentHour >= 12 && currentHour < 16) {
  console.log('Good Afternoon!');
} else if (currentHour >= 16 && currentHour < 20) {
  console.log('Good Evening!');
} else {
  console.log('Good Night!');
}