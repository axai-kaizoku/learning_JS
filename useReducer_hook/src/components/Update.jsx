import React, { useState } from 'react';
import { updateUser } from '../redux/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
	const { id } = useParams();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const users = useSelector((state) => state.user);
	const existingUser = users.filter((f) => f.id == id);
	const { name, email } = existingUser[0];
	const [uname, setName] = useState(name);
	const [uemail, setEmail] = useState(email);

	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(updateUser({ id: id, name: uname, email: uemail }));
		navigate('/');
	};

	return (
		<div>
			<form onSubmit={handleUpdate}>
				<label>Name</label>
				<br />
				<input
					name='name'
					type='name'
					value={uname}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<label>Email</label>
				<br />
				<input
					name='email'
					type='email'
					value={uemail}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<br />
				<button type='submit'>Update</button>
			</form>
		</div>
	);
};

export default Update;
