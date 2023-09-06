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
			`http://api.weatherstack.com/current?access_keys=${process.env.REACT_APP_API_KEY}&query= ${location}`,
		)
			.then((res) => res.json())
			.then(({ current, location }) => {
				const { temperature, weather_description, weather_icons } = current;
				const { name, country } = location;
				setTemperature(temperature);
				setConditions(weather_description);
				setIcon(weather_icons[0]);
				setPlace(`${name}, ${country}`);
				setError(false);
			})
			.catch(() => setError(true))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		if (location) {
			fetchWeather();
		}
	}, [location]);

	return render({ error, isLoading, temperature, conditions, icon, place });
};

export default Weather;
