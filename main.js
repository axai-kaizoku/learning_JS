/** @format */

'use strict';

const str = 
  'Johnny Depp is an incredible actor. Johnny Depp was nominated for an Oscar';

const tom = str.replace(/Johnny Depp/g, 'Tom Cruise')
const tom1 = str.replaceAll('Johnny Depp', 'Tom Cruise')
console.log(tom1)
