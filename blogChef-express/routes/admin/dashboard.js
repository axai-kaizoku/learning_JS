export default (req, res) => {
	res.render('dashboard', {
		user: req.session.user,
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
