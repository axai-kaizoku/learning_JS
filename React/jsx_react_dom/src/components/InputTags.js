// InputTags Component
import React from 'react';

const InputTags = ({ label, onUpdate, value }) => {
	return (
		<>
			<div className="input-tags">
				<span className="label">{label}</span>
				<input placeholder="Type and press enter.." onChange={onUpdate}></input>
				<div className="inp-tag">
					{value}
					<span className="rem-tag-btn">X</span>
				</div>
			</div>
		</>
	);
};

export default InputTags;
