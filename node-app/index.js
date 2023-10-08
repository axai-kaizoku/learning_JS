import fs from 'fs';

fs.readFile('async.txt', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data.toString());
	}
});

console.log('Done!');
