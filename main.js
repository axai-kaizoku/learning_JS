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

const deepCopy = function (obj) {
	let tempObj = [];
	for (let key in obj) {
		tempObj = {
			...tempObj,
			[key]:
				typeof obj[key] === 'object' && !Array.isArray(obj[key])
					? { ...deepCopy(obj[key]) }
					: typeof obj[key] === 'object' && Array.isArray(obj[key])
					? [...obj[key]]
					: obj[key],
		};
	}
	return tempObj;
};

let axai = deepCopy(user);
axai.age = 22;
axai.home.address = '2334, Ganesh nagar';
axai.home.loc.lat = 43;
axai.home.favColors = ['White']
console.log('Original: ', user)
console.log('Deepcopied: ', axai)