// Text Component
import React from 'react';

const Text = ({ label, onUpdate, value }) => {
	return (
		<>
			<div className="text-box">
				<span className="label">{label}</span>
				<textarea>{value}</textarea>
			</div>
		</>
	);
};

export default Text;
