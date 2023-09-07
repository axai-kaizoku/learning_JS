const randomArray = (length, multiplier) =>
	Array.from({ length }, () => parseInt(Math.random() * multiplier));

const fixedLength = (length, fn) => (...args) => fn(length, ...args);

const length5 = fixedLength(5, randomArray);
const length10 = fixedLength(10, randomArray);

console.log(length5(10));
console.log(length10(1000));
