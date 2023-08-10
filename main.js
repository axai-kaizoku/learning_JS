/** @format */

'use strict';

const cart = [
	{
		id: 1,
		item: 'Beat Headphones',
		qty: 1,
		cost: 900,
	},
	{
		id: 2,
		item: 'HDMI cable',
		qty: 1,
		cost: 235.5,
	},
	{
		id: 3,
		item: 'Dishwasher Detergent',
		qty: 4,
		cost: 50,
	},
	{
		id: 4,
		item: 'Cleanz Rinse Aid',
		qty: 4,
		cost: 35,
	},
];

const totalCost = cart.reduce((acc, curr) => acc + curr.qty * curr.cost, 0);
const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
console.log(`Total Cost: $${totalCost} for ${totalQty} items`);
