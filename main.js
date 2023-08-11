/** @format */

'use strict';

const User = function () {
	Object.defineProperties(this, {
		id: {
			enumerable: true,
			writable: false,
			configurable: false,
			value: `UID-${parseInt(Math.random() * 30000)}-XZ`,
		},
	});
};

let joe = new User();
// joe.id = '12341297';
console.log(joe);