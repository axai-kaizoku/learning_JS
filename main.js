/** @format */

'use strict';

const str1 = 'Name: John, Age: 20, Profession: Web Developer';
const age = str1.substring(str1.search('Age'), 19);

console.log(age);
