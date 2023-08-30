import React from 'react';

const UserCard = ({ name, designation, photo, isAdmin }) => (
	<div className='user-card'>
		<img
			src={photo}
			alt={name}
		/>
		<div className='user-name'>{name}</div>
		<div className='designation'>{designation}</div>
		{isAdmin ? <div className='admin'>A</div> : null}
	</div>
);

export default UserCard;
