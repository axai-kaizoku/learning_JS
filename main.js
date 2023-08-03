'use strict';

console.log('Equality operator');
console.log(10 == 10);
console.log(10 == '10');
console.log(1 == true);
console.log('Waffle' == 'waffle');
console.log(null == undefined);

var redCar = {
  color: 'red',
  id: 1,
};

var someCar = redCar;
console.log(redCar == someCar);
