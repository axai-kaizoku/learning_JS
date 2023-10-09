import readline from 'readline';

let r1 = readline.createInterface(process.stdin, process.stdout);

r1.on('SIGINT', () => {
	console.log('This is a testing create Interface');
	r1.question('Exit (y or n)', (input) => {
		console.log('This is a testing create Interface');
		if (input === 'y') {
			r1.pause();
		}
	});
});
