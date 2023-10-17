import session from 'express-session';
import connectRedis from 'connect-redis';
import memoryStore from 'memorystore';
import redisClient from '../cache';

const RedisStore = connectRedis(session);
const MemoryStore = memoryStore(session);

export default (app) =>
	session({
		store:
			app.get('env') === 'production'
				? new RedisStore({ client: redisClient })
				: new MemoryStore(),
		name: 'sessId',
		resave: false,
		saveUninitialized: true,
		secret: process.env.sessionSecret,
		cookie: {
			httpOnly: true,
			maxAge: 18000000,
			secure: app.get('env') === 'production' ? true : false,
		},
	});
