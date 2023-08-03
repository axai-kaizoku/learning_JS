'use strict';

var sentinel = {
  name: 'Sentinel Design\u{2122}',
  employeeCount: 50,
  location: {
  city: 'Tokyo',
  country: 'Japan',
  },
  isListed: false,
};

console.log(sentinel.name);

var propName = 'employeeCount';
console.log(sentinel[propName]);

sentinel.stockSymbol = 'SDJ';
sentinel.isListed = true;
// sentinel.location.country = 'US'; // Yen is the answer because it is commented
delete sentinel.location.city;

var currencies = new Object();
currencies['Japan'] = 'Yen';
currencies['US'] = 'US Dollar';

console.log(
  `The currency of ${sentinel.location.country} is ${currencies[sentinel.location.country]}`
);

console.log(sentinel);