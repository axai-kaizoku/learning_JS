import express from 'express';
import morgan from 'morgan';

const app = express();

app.set('view engine', 'pug');

app.use(morgan(':method - :url - :date -:response-time ms'));

app.get('/', (req, res) => {
	res.render('home');
});

app.post('/', (req, res) => {
	res.json({ message: 'Your post request is handled!' });
});

app.get('/admin', (req, res) => {
	res.send(
		'<h1>This is Admin Route</h1>\n<button><a href="/">Home</a></button>',
	);
});

app.listen(3000, () => {
	console.log('Server is running!');
});
