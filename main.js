/** @format */

const Person = function (firstname, lastname, age, email) {
	this.firstName = firstname;
	this.lastName = lastname;
	this.age = age;
	this.email = email;
	this.introduction = () => `${this.firstName} is ${this.age} years old.`;
	this.canDrive = () => this.age >= 18 ? 'Yes' : 'No';
};

const Joe = new Person('Joe', 'Manothan', 19, 'joe@joe.com');

console.log(Joe.introduction());
console.log(Joe.email);
console.log("Can Joe Drive : ",Joe.canDrive());
