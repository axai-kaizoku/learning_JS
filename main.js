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

var john = {
  name: 'John Mockery',
  age: 23,
  designation: 'Sr. Designer',
  organization: sentinel.name,
  address: sentinel.location,
};

var sarah = {
  name: 'Sarah Rice',
  age: 27,
  designation: 'UX Architect',
  organization: sentinel.name,
  address: sentinel.location,
};

john.address = {city: 'Osaka', country: 'Japan'};

console.log(john);
console.log(sarah);