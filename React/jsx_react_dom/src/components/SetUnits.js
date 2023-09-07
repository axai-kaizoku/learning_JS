// SetUnits Component
import React from 'react';

const SetUnits = ({ value, onSet }) => {
	return (
		<>
			<div className="set-units">
				<label>UNITS</label>
				<select>
					<option value="celcius">Celcius</option>
					<option value="fahrenheit">Fahrenheit</option>
				</select>
			</div>
		</>
	);
};

export default SetUnits;
