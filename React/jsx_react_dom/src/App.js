import React, { Component } from 'react';
import Input from './components/Input';
import SearchResults from './components/SearchResults';
import SetUnits from './components/SetUnits';
import WeatherReport from './components/WeatherReport';

class App extends Component {
	render() {
		return (
			<>
				<div className="weather-app">
					<h1>WeatherWatch</h1>
					<Input />
					<SetUnits />
					<WeatherReport />
				</div>
			</>
		);
	}
}

export default App;
