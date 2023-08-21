// import { quotes } from './quotes';

// const main = document.querySelector('#quotemaster > h1');
// const playBtn = document.querySelector('#playBtn');

let counter = 0;

let timer = setInterval(function () {
	console.log(`Counter: ${counter}`);
	counter++;
}, 1000);

setTimeout(function () {
	clearInterval(timer);
	counter = 0;
}, 15000);

console.log(`Timer`);
