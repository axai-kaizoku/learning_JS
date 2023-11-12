import React, { useState } from 'react';
import { addUser } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const users = useSelector((state) => state.user);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addUser({ name: name, email: email, id: users[users.length - 1].id + 1 }),
		);
		navigate('/');
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label>Name</label>
			<br />
			<input
				name='name'
				type='name'
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<label>Email</label>
			<br />
			<input
				name='email'
				type='email'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<br />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default Create;
