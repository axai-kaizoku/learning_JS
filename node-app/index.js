import fs from 'fs';

let stream1 = fs.createWriteStream('log2.txt');
stream1.write('Line1\n');
stream1.write('Line2\n');
stream1.write('Line3\n');
stream1.write('Line4\n');

let stream = fs.createReadStream('log2.txt');

stream.on('data', (data) => {
	let chunk = data.toString();
	console.log(chunk);
});
