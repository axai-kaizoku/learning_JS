import express from 'express';
import { join } from 'path';
const app = express();

app.use('/assets', express.static(join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.send('<h1>Blog Chef </h1>');
});

app
	.get('/admin/login', (req, res) => {
		res.render('login');
	})
	.post('/admin/login', (req, res) => {
		res.redirect('/admin/dashboard');
	});

app.get('/admin/dashboard', (req, res) => {
	res.render('dashboard', {
		user: 'Joe Mockery',
		posts: [
			{
				id: 1,
				author: 'Axai Y',
				title: 'I love express',
				content:
					'The express frame work is more convenient to use and not strict to libraries',
			},
			{
				id: 2,
				author: 'Carry Minati',
				title: 'I love PUG',
				content: "It's a great templating language and very easy to use!",
			},
		],
	});
});

app.post('/admin/approve', (req, res) => {
	res.redirect('/admin/dashboard');
});

app.get('/admin/logout', (req, res) => {
	res.redirect('/admin/login');
});

app.listen(3000, () => console.log('Blog Chef is cooking on port 3000'));
