'use strict';

let temperature = 40;
let feelTemp = temperature >= 25 ? 'warm' : 'cool';

// console.log(`Today is a ${feelTemp} day`);


let cost = 1000;
let discount = cost < 1000 ? 0 : 10;
let totalCost = cost - cost * (discount / 100);

console.log(`Original Cost: $${cost}`)
console.log(`Total Payable: $${totalCost}`)