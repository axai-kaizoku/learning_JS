// SearchResults Component
import React from 'react';

const SearchResults = ({ data, selectLocation }) => {
	const { id, name } = data;
	return (
		<>
			<div className="search-results">
				<div className="search-option">Hyderabad</div>
			</div>
		</>
	);
};

export default SearchResults;
