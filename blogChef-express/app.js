import express from 'express';
import { join } from 'path';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import session from 'express-session';
import compression from 'compression';
import home from './routes/home';
import admin from './routes/admin';
import api from './routes/api';

const app = express();
const logFile = join(__dirname, 'blogchef.log');

app.use(compression());
app.use(morgan(':method - :url - :date -:response-time ms'));
app.use(
	morgan(':method - :url - :date -:response-time ms', {
		// stream: createWriteStream(logFile, { flags: 'a' }),
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

app.use('/', home);
app.use('/admin', admin);
app.use('/api', api);

app.listen(3000, () => console.log('Blog Chef is cooking on port 3000'));
