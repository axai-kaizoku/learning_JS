// Select Component
import React from 'react';

const Select = ({ label, options, onSet }) => {
	return (
		<>
			<div className="select-list">
				<span className="label">{label}</span>
				<select>
					{options.map((e) => (
						<option>{e}</option>
					))}
				</select>
			</div>
		</>
	);
};

export default Select;
