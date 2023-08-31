import React from 'react';
import Genre from './Genre';

const MovieCard = ({ title, genre }) => (
	<div className="movie-card">
		<div className="title">{title}</div>
		<div className="genre">
			{genre.split('|').map((gen) => (
				<Genre label={gen} />
			))}
		</div>
	</div>
);

export default MovieCard;
