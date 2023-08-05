'use script';

const person = {
  name: 'John Mockery',
  age: 19,
  profession: 'Software Engineer',
  sayHi() {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I'm a ${this.profession}.`;
  },
  canDrive() {
    return `Can he drive ? \n${this.age >= 18 ? 'Yes' : 'No'}`;
  },
};

person.myJob = function () {
  return `I work as a ${this.profession}`;
};

console.log(person.sayHi());
console.log(person.myJob());
console.log(person.canDrive());