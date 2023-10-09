import { ArgumentParser } from 'argparse';

const parser = new ArgumentParser({
	description: 'A simple command line utility',
});

parser.add_argument('-f', '--foo', { help: 'Enter some value' });
parser.add_argument('-g', { help: 'Enter a value for g' });
let args = parser.parse_args();

console.log(parseInt(args.g) + parseInt(args.foo));

// node . -h
