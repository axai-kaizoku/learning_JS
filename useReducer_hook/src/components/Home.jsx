import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/slices/userSlice';

const Home = () => {
	const users = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteUser({ id: id }));
	};

	console.log(users);
	return (
		<>
			<div className='container'>
				<h2>Crud app </h2>
				<Link to='/create'>Create</Link>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									<Link to={`/edit/${user.id}`}>Edit</Link>
									<br />
									<button onClick={() => handleDelete(user.id)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Home;
