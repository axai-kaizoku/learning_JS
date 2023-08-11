/** @format */

'use strict';

const apple = {
	id: 209891,
	company: 'Apple Inc',
	exchange: 'NASDAQ',
	symbol: 'AAPL',
	currPrice: 120.07,
	details: {
		ceo: 'Tim Cook',
		hq: 'Cupertino, California, US',
	},
};

// Write your code below this line
const {
	company,
	exchange,
	currPrice,
	details: { ceo },
	...rest
} = apple;
// Write your code above this line
try {
	console.log(
		`${company} headed by ${ceo} was trading for $${currPrice} on ${exchange}`,
	);
	// console.log(rest)
} catch (error) {
	console.log('Stock data could not be accessed...');
}
