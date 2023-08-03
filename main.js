'use strict';

var fruits = ['Apple', 'Kiwi', 'Banana', 'Strawberry', 'Mango'];

fruits.push('Avacado');
fruits.pop();
fruits[4] = 'Avacado';
fruits[5] = 'Pineapple';
// fruits[10] = 'Blueberries';
console.log(`I love ${fruits[0]}`);
console.log(`I also like ${fruits[1]}`);
console.log(fruits.length);
console.log(`Let's have a ${fruits[fruits.length - 1]} milkshake!`);

// console.log(fruits);