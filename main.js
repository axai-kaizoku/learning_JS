/** @format */

// The 'for-of' and 'for-in' loop
'use strict';

const users = [
	{
		id: 1,
		name: 'John',
		age: 31,
		profession: 'General Physician',
	},
	{
		id: 2,
		name: 'jane',
		age: 29,
		profession: 'Cardiologist',
	},
];

const introduceUser = (user) =>
	`${user.name} is ${user.age} years old and works as a ${user.profession}`;

for (const user of users) {
	console.log(introduceUser(user));
}
