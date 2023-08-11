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

Object.defineProperty(tsla, 'stIdx', {
	stIdx : 98876,
	writable: false,
	enumerable: false,
	configurable: false,
});

Object.defineProperty(tsla, 'stExc', {
	value: 'NASDA',
	writable: true,
	enumerable: false,
	configurable: false,
});

for (let i in tsla) {
	console.log(i)
}

delete tsla.stExc;

let {
	stIdx: id,
	stName: stock,
	stCurrPrc: value,
	stExc: exchange,
	stDetails: { name: company, ceo, hq },
} = tsla;


console.log(`ID: ${id}`);
console.log(`${stock} is trading for $${value}`);
console.log(`${company} is headquartered in ${hq} and headed by ${ceo}`);
