import fs from 'fs';

async function getFile(fileName) {
	let data = fs.promises.readFile(fileName);
	return (await data).toString();
}

// let dataGet = getFile('async.txt');
let dataGet = fs.readFileSync('async.txt');

console.log('Code here!');
console.log('More here!');

console.log(await dataGet.toString());
