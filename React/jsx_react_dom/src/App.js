import React from 'react';
import './App.css';
import MovieCard from './MovieCard';
import moviesDb from './moviesDb';

const App = () => {
	return (
		<div className="app">
			{moviesDb.map(({ movie_title, movie_genre }) => (
				<MovieCard
					title={movie_title}
					genre={movie_genre}
				/>
			))}
		</div>
	);
};

export default App;
