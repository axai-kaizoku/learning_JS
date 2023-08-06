/** @format */

'use strict';

function User(name, age, isAdmin) {
	this.name = name;
	this.age = age;
	this.isAdmin = isAdmin;
	this.canDrive = function () {
		this.age >= 18 ? 'Yes' : 'No'
	};
	this.accessAccounts = () =>
		isAdmin ? 'You have access...' : 'Access denied...';
}

const john = new User('John', 20, true);
const jimmy = new User('Jimmy', 17, false);

console.log(john.accessAccounts());
console.log(jimmy.accessAccounts());

// console.log(john);
// console.log(jimmy);
