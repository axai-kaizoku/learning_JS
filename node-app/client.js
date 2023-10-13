import http from 'http';
// import fs from 'fs';

var options = {
	host: 'localhost',
	path: '/',
};

function runReq(response) {
	let str = '';

	response.on('data', (data) => {
		str += data;
	});

	response.on('end', () => {
		console.log(str);
	});
	return str;
}

for (let i = 0; i < 100; i++) {
	http.request(options, runReq).end();
}

// let a = http.request(options, runReq).end();
// console.log(a);
// fs.writeFile('file1.txt', JSON.stringify(str), () => {
//   console.log('File written successfully');
// });
