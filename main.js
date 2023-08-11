/** @format */

'use strict';

const message =
	'My registration number is RKQ01291210-23. Please update me on the status';

const findReg = message.search(/RKQ\d+\-\d+/g);
const extractReg = message.substring(findReg, findReg + 14);
console.log(`Reg No. ${extractReg}`);
