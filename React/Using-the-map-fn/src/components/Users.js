import React, { Component } from 'react';
import getUsers from '../services/getUsers';
import ProfileCard from './ProfileCard';

class Users extends Component {
	state = {
		users: [],
	};
	componentDidMount = async () => {
		const fetchUsers = await getUsers();

		this.setState({
			users: fetchUsers,
		});
	};
	render() {
		return this.state.users.length !== 0
			? this.state.users.map((e) => (
					<ProfileCard
						data={e}
						key={e.id}
					/>
			  ))
			: 'loading data....';
	}
}

export default Users;
