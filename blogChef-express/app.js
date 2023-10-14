import express from 'express';
import { parse } from 'querystring';
const app = express();

const isPalindrome = (str) => {
	let trimAndPrepare = str.toLowerCase().trim().replace(/[\W_]/g, '');
	return trimAndPrepare === trimAndPrepare.split('').reverse().join('');
};

app.get('/', (req, res) => {
	res.status(200).send('<h1>Blog Chef says Hello!</h1>');
});

app.post('/palindrome', (req, res) => {
	let body = '';
	req.on('data', (data) => (body += data));
	req.on('end', () => {
		let { word } = parse(body);
		res.send(
			word
				? { word, isPalindrome: isPalindrome(word) }
				: { message: 'No word supplied!' },
		);
	});
});

app.listen(3000, () => console.log('Blog Chef is cooking on port 3000'));
