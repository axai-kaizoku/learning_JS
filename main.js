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

const findVal = (val, obj) => Object.values(obj).includes(val);
console.log(findVal('Sircilla', user));
