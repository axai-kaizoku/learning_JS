// SetUnits Component
import React from 'react';

const SetUnits = ({ value, onSet }) => {
	return (
		<>
			<div className="set-units">
				<label>UNITS</label>
				<select>
					<option>Celcius</option>
					<option>Fahrenheit</option>
				</select>
			</div>
		</>
	);
};

export default SetUnits;
