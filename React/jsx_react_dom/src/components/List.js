// List Component
import React from 'react';

const List = ({ label, onUpdate, value }) => {
	return (
		<>
			<div className="list">
				<span className="label">{label}</span>
				<input placeholder="Type and press enter.."></input>
				{value.map((e) => (
					<div className="list-item">
						{e}
						<span className="rem-item-btn">X</span>
					</div>
				))}
			</div>
		</>
	);
};

export default List;
