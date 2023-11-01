const jwt = require('jsonwebtoken');

const users = [
	{
		username: 'admin',
		password: 'adminPassword',
	},
];

const key = 'secretKey';
console.log(key);

exports.loginUser = (req, res) => {
	const { username, password } = req.body;
	const user = users.find((u) => {
		return u.username === username && u.password === password;
	});

	if (user) {
		const accessToken = jwt.sign({ username: user.username }, key);
		res.json({ accessToken });
	} else {
		res.json({ message: 'Username or password is incorrect' });
	}
};

exports.authenticateJwt = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split(' ')[1];
		jwt.verify(token, key, (err, user) => {
			if (err) return res.status(403).json({ message: 'Forbidden Bruh!' });
			req.user = user;
			next();
		});
	} else {
		res.status(401).json({ message: 'Authorization Failed' });
	}
};
