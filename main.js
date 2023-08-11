/** @format */

'use strict';

const user = {
	id: 1,
	name: 'Akshay',
	age: 21,
};

const banking = {
	accountType: 'Savings',
	accountNum: '62121568601',
	bank: 'Canara Bank',
};

let userDetails = {
	...user,
	...banking,
	email: 'akshay@gmail.com',
	id: 2,
	name: 'Akshay Yelle',
};

console.log(userDetails);
