'use script';

const areaOfRect = (l, w) => Number(l) * Number(w);

// console.log(areaOfRect(4, 5));

const perimeterOfRect = (l, w) => 2 * ( Number(l) + Number(w));

// console.log(perimeterOfRect(4, 5));

const createUser = (user, age, isAdmin) => ({
  user, 
  age,
  isAdmin,
});

let john = createUser('John', 20, true);

console.log(john);