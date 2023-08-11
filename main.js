/** @format */
'use strict';
const user = {
	id: 1,
	name: 'Axai Y',
	age: 21,
	address: '3-4-108, ward-32, shanthinagar',
	city: 'Sircilla',
	country: 'India',
};

if (Object.keys(user).includes('country')) {
	console.log(user.country);
}
