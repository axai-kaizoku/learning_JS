'use strict';

var sentinel = {
  name: 'Sentinel Design\u{2122}',
  employeeCount: 50,
  city: 'Tokyo',
  country: 'Japan',
  isListed: false,
};

console.log(sentinel.name);

var propName = 'employeeCount';
console.log(sentinel[propName]);

sentinel.stockSymbol = 'SDJ';
sentinel.isListed = true;
delete sentinel.city;

console.log(sentinel);