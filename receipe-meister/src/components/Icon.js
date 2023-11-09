import React from 'react';
import PropTypes from 'prop-types';
// Load Images
import poultry from '../icons/poultry.jpg';
import vegetarian from '../icons/veg.jpg';
import vegan from '../icons/vegan.png';
import meat from '../icons/meat.jpg';
import seafood from '../icons/seafood.jpg';

const icons = { poultry, vegetarian, vegan, meat, seafood };

const Icon = ({ type }) => {
	return (
		<div className="icon">
			<img
				src={icons[type.toLowerCase()]}
				alt={type}
			/>
			<p>{type.toUpperCase()}</p>
		</div>
	);
};

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;
