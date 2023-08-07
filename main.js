/** @format */

// The 'for-of' and 'for-in' loop
'use strict';

const users = {
	id: 1,
	name: 'John',
	age: 31,
	profession: 'General Physician',
};
for (const user in users) {
	console.log(`${user} : ${users[user]}`);
}
