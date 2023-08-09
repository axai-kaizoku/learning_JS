const users = [
	{
		first_name: 'Ichigo',
		last_name: 'Kurasaki',
		email: 'kichigo@mappa.com'
	},
	{
		first_name: 'Naruto',
		last_name: 'Uzumaki',
		email: 'uzumakinaruto@jp.com'
	},
	{
		first_name: 'Aizen',
		last_name: 'Kotsuke',
		email: 'aizenk@bleach.com'
	},
	{
		first_name: 'Luffy',
		last_name: 'D',
		email: 'monkeydluffy@op.com'
	},
];

const genId = () => parseInt(Math.random() * 1000);
const withIds = users.map((user) => {
	// user.id = genId();
	// return user;
	return {
		id: genId().toString(),
		...user
	}
});
 
console.log(withIds);