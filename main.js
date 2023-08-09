/** @format */

let fruits = ['Apple', 'Kiwi', 'Pineapple', 'Watermelon'];
let [pie, smoothie, ...rest] = fruits;

console.log(`I love ${pie} pie`);
console.log(`Let's whip up a ${smoothie} smoothie`);
console.log(`Remaining fruits: ${rest}`);
