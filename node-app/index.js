import fs from 'fs';

async function getFile(fileName) {
	let data = fs.promises.readFile(fileName);
	return (await data).toString();
}

const data = await getFile('async.txt');
console.log(data);
