/** @format */

'use strict';

const User = function () {
	let name = '';
	let age;
	Object.defineProperties(this, {
		id: {
			enumerable: true,
			value: `UID-${parseInt(Math.random() * 32390)}-XZ`,
		},
		name: {
			enumerable: true,
			get() {
				return name;
			},
			set(val) {
				name = val;
			},
		},
		age: {
			enumerable: true,
			
			get() {
				return age;
			},
			set(val) {
				age = val;
			},
		},
	});
};

let joe = new User();
joe.name = 'Joe Mockery';
joe.age = 32
console.log('\n', joe.id, '\n', joe.name, '\n', joe.age);
