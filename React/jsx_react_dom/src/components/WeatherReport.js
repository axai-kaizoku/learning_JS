// WeatherReport Component
import React from 'react';

const WeatherReport = ({ weatherData, units }) => {
	return (
		<>
			<div className="weather-report">
				<h2 className="big">Los Angeles</h2>
				<h3 className="conditions">CLEAR SKY | FEELS LIKE 14°C</h3>
				<img src="//picsum.photos/100/100" alt="weather-pic" />
				<div className="temperature">
					<div>
						<p>MAXIMUM TEMPERATURE</p>
						<h2>17°C</h2>
					</div>
					<div>
						<p>MAXIMUM TEMPERATURE</p>
						<h2>17°C</h2>
					</div>
					<div>
						<p>MAXIMUM TEMPERATURE</p>
						<h2>17°C</h2>
					</div>
				</div>
				<div className="wind">
					<div>
						<p>WIND DIRECTION</p>
						<h2>243 degrees</h2>
					</div>
					<div>
						<p>WIND DIRECTION</p>
						<h2>243 degrees</h2>
					</div>
				</div>
				<div className="pressure">
					<div>
						<p>HUMIDITY</p>
						<h2>77%</h2>
					</div>
					<div>
						<p>HUMIDITY</p>
						<h2>77%</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherReport;
