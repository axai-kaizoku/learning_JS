'use strict';

const numArray = [1, 2, 3, 4, 5]
const reduced = numArray.reduce((acc, curr) => acc + curr, 0)
console.log(reduced)