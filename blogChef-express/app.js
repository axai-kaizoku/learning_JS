import express from 'express';
import { join } from 'path';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import session from 'express-session';

const app = express();
const logFile = join(__dirname, 'blogchef.log');

app.use(morgan(':method - :url - :date -:response-time ms'));
app.use(
	morgan(':method - :url - :date -:response-time ms', {
		stream: createWriteStream(logFile, { flags: 'a' }),
	}),
);
app.use('/assets', express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
	'/admin',
	session({
		name: 'sessId',
		resave: false,
		saveUninitialized: true,
		secret:
			app.get('env') === 'production'
				? process.env.sessionSecret
				: '2bb37ckdse9383jds8h29',
		cookie: {
			httpOnly: true,
			maxAge: 18000000,
			secure: app.get('env') === 'production' ? true : false,
		},
	}),
);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.send('<h1>Blog Chef</h1>');
});

app
	.get('/admin', (req, res) => {
		req.session.user
			? res.redirect('/admin/dashboard')
			: res.redirect('/admin/login');
	})
	.get('/admin/login', (req, res) => {
		res.render('login');
	})
	.post('/admin/login', (req, res) => {
		const { email, password } = req.body;
		if (email === 'asdfasdf@asdf.com' && password === 'qwerty') {
			req.session.user = 'Axai Yu';
			return res.redirect('/admin/dashboard');
		}
		res.redirect('/admin/login');
	});

app.get('/admin/dashboard', (req, res) => {
	res.render('dashboard', {
		user: req.session.user,
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

app.get('/admin/logout', (req, res) => {
	delete req.session.user;
	res.redirect('/admin/login');
});

app.post('/admin/approve', (req, res) => {
	res.redirect('/admin/dashboard');
});

app.post('/api/posts', (req, res) => {
	console.log(req.body);
	res.json({ message: 'Got it!' });
});

app.listen(3000, () => console.log('Blog Chef is cooking on port 3000'));
