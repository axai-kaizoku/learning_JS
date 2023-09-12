// Icon Component
import React from 'react';
// Load Images
import poultry from '../icons/poultry.png';
import vegetarian from '../icons/veg.png';
import vegan from '../icons/vegan.png';
import meat from '../icons/meat.png';
import seafood from '../icons/seafood.png';

const Icon = ({ type }) => {
	return (
		<>
			<div className="icon">
				<img src="//picsum.photos/300/300" alt="starw" />
				<p>Vegetarian</p>
			</div>
		</>
	);
};

export default Icon;
