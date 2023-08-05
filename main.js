'use strict';

let students = [
  {
    id: 1,
    name: 'Jhonny Sins',
    age: 17,
  },
  {
    id: 2,
    name: 'Mia Khalifa',
    age: 17,
  },
];

console.log(students[3]?.name ?? 'No record found...');