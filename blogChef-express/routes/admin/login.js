export default (req, res) => {
	const { email, password } = req.body;
	if (email === 'asdfadsf@asdf.com' && password === 'asdfasdf') {
		req.session.user = 'Axai Kaizoku';
		return res.redirect('/admin/dashboard');
	}

	res.redirect('/admin/login');
};
