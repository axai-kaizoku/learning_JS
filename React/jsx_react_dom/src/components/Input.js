// Input Component
import React from 'react';

const Input = ({ label, onInput, value }) => {
	return (
		<>
			<div className="input-box">
				<span className="label">{label}</span>
				<input onChange={onInput}>{value}</input>
			</div>
		</>
	);
};

export default Input;
