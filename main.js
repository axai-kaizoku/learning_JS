'use strict';


// Example 1
let cost = 1250;

if (cost < 1000) console.log('No discount applicable!');
else console.log('Special Offer: 10% discount for a limited time only');


// Example 2
let currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 12) {
  console.log('Good Morning!');
} else {
  console.log('Good Day!');
}