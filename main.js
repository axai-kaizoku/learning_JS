/** @format */

'use strict';

const user = {
	id: 1,
	name: 'Axai Y',
	age: 21,
	home: {
		address: '3-4-108, ward-32, shanthinagar',
		city: 'Sircilla',
		country: 'India',
		favColors: ['Blue', 'Black'],
		loc: {
			lat: 61.2034,
			long: 34.2019,
		},
	},
};

// Object.seal(user);
// Object.freeze(user);

const deepSeal = (obj) => {
	Object.values(obj).forEach(
		(elem) => typeof elem === 'object' && deepSeal(elem),
	);

	return !Object.isSealed(obj) && Object.seal(obj);
};

const deepFreeze = (obj) => {
	Object.values(obj).forEach(
		(elem) => typeof elem === 'object' && deepFreeze(elem),
	);
	return !Object.isFrozen(obj) && Object.freeze(obj);
};

// deepSeal(user);
deepFreeze(user);

user.age = 25;
user.home.city = 'Vemulawada';
user.home.phone = 7780342220;

console.log(user);
