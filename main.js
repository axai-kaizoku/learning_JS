/** @format */

'use strict';

const tsla = {
	stIdx: 2013234,
	stName: 'TSLA',
	stCurrPrc: 836.16,
	stExc: 'NASDAQ',
	stDetails: {
		name: 'TESLA, Inc',
		ceo: 'Elon Musk',
		hq: 'Paolo Alto, California, United States',
	},
};

let {
	stName: stock,
	stCurrPrc: value,
	stExc: exchange,
	stDetails: { name: company, ceo, hq },
	...rest
} = tsla;

console.log(`${stock} is trading for $${value} on ${exchange}`);
console.log(`${company} is headquartered in ${hq} and headed by ${ceo}`);
console.log(rest);
