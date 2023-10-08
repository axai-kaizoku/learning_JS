import * as csv from 'csv-parse';
import fs from 'fs';

let sum = 0;

fs.createReadStream('transactions.csv')
	.pipe(csv.parse({ delimiter: ',' }))
	.on('data', function (row) {
		sum += parseFloat(row[1]);
	})
	.on('end', () => {
		console.log(sum);
	})
	.on('error', (err) => {
		console.log(err);
	});
