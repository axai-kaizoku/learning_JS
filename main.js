'use strict';

let products = [
  {
    name: 'HyperV 4k Projector',
    cost: 2500,
  },
  {
    name: 'Vision HDMI Cable',
    cost: 10,
    shipping: 0,
  },
];

console.log(`Product: ${products[0].name || 'N/A'}`);
console.log(`Cost: ${products[0].cost || 'N/A'}`);
console.log(`Shipping: ${products[0].shipping ?? 2.5}`);