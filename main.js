/** @format */

'use strict';

const User = function () {
	let name = '';
	let age,
		changes = [];
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
				changes.push(`name set to ${val}`);
				name = val.toUpperCase();
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
		changes: {
			enumerable: true,
			get() {
				return changes;
			},
			set(val) {
				changes = val;
			},
		},
	});
};

let joe = new User();
joe.name = 'Joe Mockery';
joe.age = 32;
joe.name = 'Akshay';
console.log('\n', joe.id, '\n', joe.name, '\n', joe.age);
console.log(joe.changes);
