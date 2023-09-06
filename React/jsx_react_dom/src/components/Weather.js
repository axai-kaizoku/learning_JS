import { useState, useEffect } from 'react';

const Weather = ({ location, render }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [temperature, setTemperature] = useState(0);
	const [conditions, setConditions] = useState([]);
	const [icon, setIcon] = useState('');
	const [place, setPlace] = useState('');

	const fetchWeather = (location) => {
		setIsLoading(true);
		fetch(
			`https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${location}`,
		)
			.then((res) => res.json())

			.then(({ location, current }) => {
				const { temperature, weather_descriptions, weather_icons } = current;
				console.log(current);
				const { name, country } = location;
				console.log(location);
				setTemperature(temperature);
				setConditions(weather_descriptions);
				setIcon(weather_icons[0]);
				setPlace(`${name}, ${country}`);
				setError(false);
			})
			.catch((err) => {
				console.error('API error:', err); // Log the actual error

				setError(true);
			})

			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		if (location) {
			fetchWeather(location);
		}
	}, [location]);

	return render({ error, isLoading, temperature, conditions, icon, place });
};

export default Weather;
