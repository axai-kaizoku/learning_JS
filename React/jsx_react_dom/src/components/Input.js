// Input Component
import React, { useState, createRef } from 'react';

const Input = ({ input, inputOne }) => {
	const locationInput = createRef();
	const [location, setLocation] = useState('Bengaluru');
	return (
		<>
			<span className="input-box">
				<span className="label">LOCATION</span>
				<input
					type="text"
					ref={locationInput}
					placeholder="Type location here.."
					onKeyUp={(e) => {
						if (e.keyCode === 13) {
							setLocation(e.target.value);
							locationInput.current.value = '';
							input();
							inputOne();
						}
					}}
				/>
			</span>
		</>
	);
};

// if (e.keyCode === 13) {
// 	setLocation(e.target.value);
// 	locationInput.current.value = '';
// }

export default Input;
