import React, { Component } from 'react';
import Input from './components/Input';
import SearchResults from './components/SearchResults';
import SetUnits from './components/SetUnits';
import WeatherReport from './components/WeatherReport';

class App extends Component {
	state = {
		id: 1277333,
		conditions: '',
		feels_like: 1,
		humidity: 1,
		icon: '',
		location: '',
		pressure: 1,
		temp: 1,
		temp_max: 1,
		temp_min: 1,
		wind_direction: 1,
		wind_speed: 1,
	};
	getWeather = () => {
		fetch(`https://api.weatherserver.com/weather/cities/Kolkata`)
			.then((res) => res.json())
			.then((data) => this.setState({ id: data['results'][0]['id'] }));

		console.log(this.state.id);
		// 1277333
	};

	getData = (units = 'F', id) => {
		fetch(
			`https://api.weatherserver.com/weather/current/${this.state.id}/${units}`,
		)
			.then((res) => res.json())
			// .then((data) => console.log(data))
			.then((data) => {
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
				} = data;
				// console.log(data);

				this.setState({
					conditions: conditions,
					feels_like: feels_like,
					humidity: humidity,
					icon: icon,
					location: location,
					pressure: pressure,
					temp: temp,
					temp_max: temp_max,
					temp_min: temp_min,
					wind_direction: wind_direction,
					wind_speed: wind_speed,
				});
			});

		console.log('hi');
		// console.log(this.state);
	};

	componentDidMount = () => {
		this.getWeather();
		this.getData();
		// console.log(this.state);
		console.log(this.state.id);
	};

	render() {
		return (
			<>
				<div className="weather-app">
					<h1>WeatherWatch</h1>
					<Input input={this.getWeather} inputOne={this.getData} />
					<SearchResults />
					<SetUnits />
					<WeatherReport weatherData={this.state} />
				</div>
			</>
		);
	}
}

export default App;
