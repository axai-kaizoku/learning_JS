'use strict';

var user = {
  name: 'Michelle Roberts',
  age: 28,
  location: {
    city: 'New York',
    country: 'US',
  },
};

user.isAdmin = false;

console.log('User: ', user.name);
console.log('City: ', user.location.city);
console.log('Age: ', user.age);
console.log('Is User Administrator?', user.isAdmin);