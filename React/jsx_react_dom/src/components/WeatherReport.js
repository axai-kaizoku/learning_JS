// WeatherReport Component
import React from 'react';

const WeatherReport = ({ weatherData, units }) => {
	const {
		conditions,
		feels_like,
		humidity,
		icon,
		location,
		pressure,
		temp,
		temp_max,
		temp_min,
		wind_direction,
		wind_speed,
	} = weatherData;
	return (
		<>
			<div className="weather-report">
				<h2 className="big">{location}</h2>
				<h3 className="conditions">
					{conditions} | FEELS LIKE {feels_like}°C
				</h3>
				<img src={icon} alt={feels_like} />
				<div className="temperature">
					<div>
						<p>TEMPERATURE</p>
						<h2>{temp}°C</h2>
					</div>
					<div>
						<p>MAXIMUM TEMPERATURE</p>
						<h2>{temp_max}°C</h2>
					</div>
					<div>
						<p>MINIMUM TEMPERATURE</p>
						<h2>{temp_min}°C</h2>
					</div>
				</div>
				<div className="wind">
					<div>
						<p>WIND SPEED</p>
						<h2>{wind_speed} degrees</h2>
					</div>
					<div>
						<p>WIND DIRECTION</p>
						<h2>{wind_direction} degrees</h2>
					</div>
				</div>
				<div className="pressure">
					<div>
						<p>PRESSURE</p>
						<h2>{pressure} hPa</h2>
					</div>
					<div>
						<p>HUMIDITY</p>
						<h2>{humidity} %</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherReport;
