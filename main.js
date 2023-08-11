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

for (let [key, val] of Object.entries(user)) {
	console.log(key, val);
}
