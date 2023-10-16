export default (req, res) => {
	const posts = [
		{
			user: {
				name: 'Joe Mockery',
				id: 1,
			},
			title: 'Thoughts on Javascript',
			content:
				'In the end, JavaScript is a great and serious language, with "great flexibility" as the greatest quality, and "great flexibility" as the worst ',
			createdAt: '2023-11-28T16:03:34.9834',
			id: 1,
		},
		{
			user: {
				name: 'Joe Mockery',
				id: 1,
			},
			title: 'Why React!',
			content:
				'Once you have learned it, you can use it on a vast variety of platforms to build quality user interfaces. React is a library, NOT a framework.',
			createdAt: '2023-10-08T11:30:20.6201',
			id: 2,
		},
	];
	res.json({
		posts,
	});
};
