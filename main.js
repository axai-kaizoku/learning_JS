/** @format */

'use strict';

const products = [
	{
		name: 'HEPA filter',
		isAvailable: true,
	},
	{
		name: 'Datacables',
		isAvailable: false,
	},
	{
		name: 'Bags',
		isAvailable: true,
	},
	{
		name: 'Shoes',
		isAvailable: true,
	},
	{
		name: 'Watch',
		isAvailable: false,
	},
];

const isAvailable = products.filter((elem) => elem.isAvailable);
console.log(isAvailable);

const dispProducts = (arr) => {
	arr.forEach((elem) => console.log(elem));
};

dispProducts(products);
