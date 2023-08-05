'use script';

const john = {
  age: 35,
  gender: 'M',
  weight: 78,
  height: 177.8,
};

const sarah = {
  age: 32,
  gender: 'F',
  weight: 65,
  height: 177.8,
};

const calcBmi = function () {
  return this.weight / (this.height / 100) ** 2;
};

const calcBmr = function () {
  if (this.gender === 'M') {
    return 66.47 + 13.75 * this.weight + 5.003 * this.height - 6.755 * this.age;
  } else {
    return 655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
  }
};


// Call
console.log(`John's BMI: ${calcBmi.call(john)}`);
console.log(`John's BMR: ${calcBmr.call(john)}`);
console.log(`sarah's BMI: ${calcBmi.call(sarah)}`);
console.log(`sarah's BMR: ${calcBmr.call(sarah)}`);


// Bind
const johnBmi = calcBmi.bind(john);
const sarahBmi = calcBmi.bind(sarah);
console.log(sarahBmi());