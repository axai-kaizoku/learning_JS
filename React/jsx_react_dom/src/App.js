import React, { Component } from 'react';
import './index.css';
import Joke from './Joke';
import Data from './Sources/data';

class App extends Component {
	state = {
		joke: '',
		isLoading: false,
	};

	getJoke = () => {
		this.setState({
			isLoading: true,
		});

		const randomIndex = Math.floor(Math.random() * Data.length);
		const randomJoke = Data[randomIndex].joke;

		this.setState({
			joke: randomJoke,
			isLoading: false,
		});
	};
	componentDidMount = () => this.getJoke();
	render() {
		return (
			<div className="container">
				<div
					className={this.state.isLoading ? 'title title-pulse' : 'title'}
					onClick={this.getJoke}>
					Joke Machine
				</div>
				<Joke punchline={this.state.joke} />
			</div>
		);
	}
}

export default App;
