import moment from 'moment';

export default (req, res) => {
	res.render('dashboard', {
		user: req.session.user.name,
		lastLoggedIn: moment(req.session.user.lastLoggedIn).format(
			'MMMM, Do YYYY, h:mm:ss a',
		),
		posts: [
			{
				id: 1,
				author: 'Thanai Io',
				title: 'Express is W bro',
				content:
					"The express framework is W bruh, and I'll say that you should try express rather than old school http methods",
			},
		],
	});
};
