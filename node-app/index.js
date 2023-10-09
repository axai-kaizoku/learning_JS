import readline from 'readline';

let r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('What is your name ? \n', (name) => {
	r1.write(`Your name in UPPERCASE: ${name.toUpperCase()}`);
	// console.log(`Your name in UPPERCASE: ${name.toUpperCase()}`);
	r1.close();
});
