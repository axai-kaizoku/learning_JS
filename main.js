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

let { stName: stock, stCurrPrc: value, stExc: exchange } = tsla;

console.log(`${stock} is trading for $${value} on ${exchange}`);
