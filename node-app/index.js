import path from 'path';

let dir = path.format({ dir: '\\home\\prasa', base: 'text.txt' });
console.log(path.parse(dir).ext);

console.log(path.parse('C:\\Users\\prasa\\file.txt'));
