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

const deepCopy = function (obj) {
	let tempObj = {};
	for (let [key, value] of Object.entries(obj)) {
		tempObj = {
			...tempObj,
			[key]:
				typeof value === 'object' && !Array.isArray(value)
					? { ...deepCopy(value) }
					: typeof value === 'object' && Array.isArray(value)
					? [...value]
					: value,
		};
	}
	return tempObj;
};

let axai = deepCopy(user);

console.log(axai);
